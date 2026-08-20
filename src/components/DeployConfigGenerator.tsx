import React, { useState } from 'react';
import { 
  FileCode, 
  Copy, 
  Check, 
  Download, 
  Terminal, 
  Layers,
  Sparkles,
  Server,
  Globe
} from 'lucide-react';

interface ConfigFile {
  filename: string;
  language: string;
  description: string;
  content: string;
}

export const DeployConfigGenerator: React.FC = () => {
  const [selectedFileIndex, setSelectedFileIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const configFiles: ConfigFile[] = [
    {
      filename: 'registro-br-dns.zone',
      language: 'dns',
      description: 'Tabela e arquivo de Zona DNS formatado para sciencebit.com.br no Registro.br e Google Cloud DNS.',
      content: `; ====================================================================
; Zona DNS para sciencebit.com.br (Registro.br & Google Cloud Platform)
; ====================================================================
$ORIGIN sciencebit.com.br.
$TTL 3600

; 1. Entrada Raiz apontando para IP Anycast do Google Cloud / Firebase
@               IN  A      199.36.158.100

; 2. Subdomínio WWW principal
www             IN  CNAME  ghs.googlehosted.com.

; 3. Subdomínio Monitor B3 (Mercado Financeiro)
b3              IN  CNAME  ghs.googlehosted.com.

; 4. Subdomínio do Aplicativo Principal
app             IN  CNAME  ghs.googlehosted.com.

; 5. Subdomínio de Telemetria e Portal IoT
iot             IN  CNAME  ghs.googlehosted.com.

; 6. Subdomínio das APIs Backend / Microsserviços
api             IN  CNAME  ghs.googlehosted.com.

; 7. Validação de Propriedade do Google (Opcional se solicitado pelo GCP)
; @             IN  TXT    "google-site-verification=SEU_TOKEN_DE_VALIDACAO_AQUI"
`,
    },
    {
      filename: 'deploy-sciencebit.sh',
      language: 'bash',
      description: 'Script automatizado em Bash para compilar, fazer deploy no Cloud Run e mapear o domínio sciencebit.com.br.',
      content: `#!/usr/bin/env bash
# ====================================================================
# Script de Deploy e Mapeamento de Domínio: ScienceBit (sciencebit.com.br)
# ====================================================================

set -e

echo "🚀 [ScienceBit] Iniciando Deploy para Google Cloud Run..."

# 1. Configurar Projeto GCP
PROJECT_ID=$(gcloud config get-value project)
REGION="us-central1"
SERVICE_NAME="sciencebit-web"
DOMAIN="sciencebit.com.br"

echo "📌 Projeto Ativo: $PROJECT_ID | Região: $REGION"

# 2. Habilitar APIs Necessárias
echo "⚙️ Habilitando APIs do Cloud Run e Cloud Build..."
gcloud services enable run.googleapis.com cloudbuild.googleapis.com

# 3. Compilar e Fazer Deploy do Contêiner
echo "📦 Compilando e publicando serviço no Cloud Run..."
gcloud run deploy $SERVICE_NAME \\
  --source . \\
  --region $REGION \\
  --platform managed \\
  --allow-unauthenticated

# 4. Mapear Domínio Personalizado sciencebit.com.br
echo "🌐 Mapeando domínio $DOMAIN no Cloud Run..."
gcloud beta run domain-mappings create \\
  --service $SERVICE_NAME \\
  --domain $DOMAIN \\
  --region $REGION || echo "ℹ️ Mapeamento de domínio já existente ou em validação."

# 5. Mapear Subdomínio www.sciencebit.com.br
gcloud beta run domain-mappings create \\
  --service $SERVICE_NAME \\
  --domain "www.$DOMAIN" \\
  --region $REGION || echo "ℹ️ Mapeamento WWW já existente."

echo "✅ Deploy concluído com sucesso!"
echo "🔒 Certificado SSL será emitido automaticamente pelo Google Cloud para https://$DOMAIN"
`,
    },
    {
      filename: 'Dockerfile',
      language: 'dockerfile',
      description: 'Arquivo de contêiner multi-stage otimizado com Node.js 20 e Nginx Alpine para Cloud Run.',
      content: `# Estágio 1: Build da Aplicação React/Vite
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Estágio 2: Servidor Nginx de Alta Performance
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Porta padrão de escuta para o Google Cloud Run
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
`,
    },
    {
      filename: 'nginx.conf',
      language: 'nginx',
      description: 'Configuração do Nginx com suporte a SPA, cache de assets e compressão Gzip.',
      content: `server {
    listen 8080;
    server_name sciencebit.com.br www.sciencebit.com.br localhost;

    root /usr/share/nginx/html;
    index index.html index.htm;

    # Suporte a SPA (Single Page Application)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache de arquivos estáticos (CSS, JS, WebFonts, Imagens)
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }

    # Headers de Segurança
    add_header X-Content-Type-Options "nosniff";
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";

    # Compressão Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
`,
    },
    {
      filename: 'cloudbuild.yaml',
      language: 'yaml',
      description: 'Pipeline de integração contínua (CI/CD) automatizada no Google Cloud Build.',
      content: `steps:
  # 1. Compilar imagem Docker do ScienceBit
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/sciencebit-web:$COMMIT_SHA', '.']

  # 2. Enviar imagem para o Artifact / Container Registry
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/sciencebit-web:$COMMIT_SHA']

  # 3. Deploy no Google Cloud Run
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - 'sciencebit-web'
      - '--image'
      - 'gcr.io/$PROJECT_ID/sciencebit-web:$COMMIT_SHA'
      - '--region'
      - 'us-central1'
      - '--platform'
      - 'managed'
      - '--allow-unauthenticated'

images:
  - 'gcr.io/$PROJECT_ID/sciencebit-web:$COMMIT_SHA'
`,
    },
    {
      filename: 'firebase.json',
      language: 'json',
      description: 'Configuração para Firebase Hosting com suporte a SPAs e CDN global.',
      content: `{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
`,
    },
  ];

  const currentFile = configFiles[selectedFileIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    const blob = new Blob([currentFile.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = currentFile.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* Intro */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-2">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
          <FileCode className="w-5 h-5" />
          <span>Arquivos de Infraestrutura & Configuração</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">
          Gerador de Arquivos de Deploy para Google Cloud & Registro.br
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Copie ou baixe os arquivos de configuração necessários para rodar <strong>sciencebit.com.br</strong> no Cloud Run, Firebase Hosting ou Cloud Build com as melhores práticas de engenharia de software e segurança.
        </p>
      </div>

      {/* File Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {configFiles.map((file, idx) => (
          <button
            key={file.filename}
            onClick={() => setSelectedFileIndex(idx)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
              selectedFileIndex === idx
                ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
            }`}
          >
            {file.filename.includes('dns') ? <Globe className="w-3.5 h-3.5 text-cyan-400" /> : <FileCode className="w-3.5 h-3.5" />}
            <span>{file.filename}</span>
          </button>
        ))}
      </div>

      {/* Code Viewer */}
      <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Code Header */}
        <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="font-mono text-xs font-bold text-slate-200 ml-2">
                {currentFile.filename}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {currentFile.description}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-lg transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Código</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadFile}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar Arquivo</span>
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed max-h-[480px]">
          <pre>
            <code>{currentFile.content}</code>
          </pre>
        </div>

      </div>

    </div>
  );
};
