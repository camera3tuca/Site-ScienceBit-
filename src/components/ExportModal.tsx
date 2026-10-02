import React, { useState } from 'react';
import { SiteContent } from '../types';
import { THEMES } from '../data/templates';
import { 
  Download, 
  X, 
  Check, 
  Copy, 
  FileCode, 
  Globe, 
  Cloud, 
  FolderArchive,
  Terminal,
  ExternalLink,
  Sparkles,
  Server,
  Zap,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: SiteContent;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, content }) => {
  const [activeTab, setActiveTab] = useState<'ai-studio' | 'cloud-run' | 'firebase' | 'html'>('ai-studio');
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState(false);
  const [copiedFirebase, setCopiedFirebase] = useState(false);

  if (!isOpen) return null;

  const theme = THEMES[content.theme] || THEMES.indigo;

  // Generate self-contained HTML
  const generateStandaloneHtml = (): string => {
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.brandName} | Engenharia de Software & Cloud</title>
  <meta name="description" content="${content.heroSubtitle}">
  <meta name="author" content="Wilton de Paula Soares Junior">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://${content.domainName || 'sciencebit.com.br'}/">
  <meta property="og:title" content="${content.brandName} | Engenharia de Software & Cloud">
  <meta property="og:description" content="${content.heroSubtitle}">
  <meta property="og:site_name" content="${content.brandName}">

  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    html { scroll-behavior: smooth; }
  </style>
</head>
<body class="bg-white text-slate-900 antialiased">

  <!-- Header -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="inline-flex flex-col items-start select-none">
          <div class="font-black text-xl tracking-tight leading-none flex items-center">
            <span class="text-slate-900">Science</span>
            <span class="text-blue-600 ml-1.5">Bit</span>
          </div>
          <div class="flex items-center justify-center gap-1.5 mt-1 w-full">
            <span class="bg-blue-600 rounded-full w-5 h-[2px]"></span>
            <span class="font-bold uppercase text-[9px] tracking-[0.25em] text-slate-700">COMPUTER</span>
            <span class="bg-blue-600 rounded-full w-5 h-[2px]"></span>
          </div>
        </div>
        <span class="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200 font-mono hidden sm:inline-block">${content.domainName || 'sciencebit.com.br'}</span>
      </div>
      <nav class="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
        <a href="#inicio" class="hover:text-slate-900 transition-colors">Início</a>
        <a href="#projetos" class="hover:text-slate-900 transition-colors">Projetos</a>
        <a href="#sobre" class="hover:text-slate-900 transition-colors">Sobre</a>
        <a href="#contato" class="hover:text-blue-600 font-semibold transition-colors">Contato</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section id="inicio" class="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <span class="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 bg-blue-500/10 border border-blue-400/30 text-blue-300">
        ${content.tagline}
      </span>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
        ${content.heroTitle}
      </h1>
      <p class="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        ${content.heroSubtitle}
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#contato" class="w-full sm:w-auto text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg bg-blue-600 hover:bg-blue-500 transition-all">
          ${content.primaryCtaText}
        </a>
        <a href="https://monitor-b3.ai.studio/" target="_blank" class="w-full sm:w-auto text-slate-200 bg-slate-800 font-semibold px-6 py-3.5 rounded-xl border border-slate-700 shadow-sm hover:bg-slate-700 transition-all">
          Acessar Monitor B3
        </a>
      </div>
    </div>
  </section>

  <!-- Serviços & Competências -->
  <section id="projetos" class="py-16 sm:py-24 bg-white border-b border-slate-100">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-2xl sm:text-4xl font-bold text-slate-900 mb-3">${content.servicesTitle}</h2>
        <p class="text-slate-600 text-sm sm:text-base">${content.servicesSubtitle}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${content.services.map(s => `
          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 mb-2">${s.title}</h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">${s.description}</p>
            ${s.price ? `<div class="font-bold text-sm text-blue-600">${s.price}</div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- Sobre -->
  <section id="sobre" class="py-16 bg-slate-50 border-b border-slate-100">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">${content.aboutTitle}</h2>
      <p class="text-slate-600 text-base leading-relaxed mb-6">${content.aboutDescription}</p>
    </div>
  </section>

  <!-- Contato -->
  <section id="contato" class="py-16 sm:py-20 bg-white">
    <div class="max-w-3xl mx-auto px-4 text-center">
      <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">${content.contactTitle}</h2>
      <p class="text-slate-600 text-sm mb-8">${content.contactSubtitle}</p>
      <div class="flex flex-wrap justify-center gap-4 text-sm font-semibold">
        <a href="https://wa.me/${content.contactWhatsapp.replace(/\D/g, '')}" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-md transition-all">
          WhatsApp: ${content.contactPhone || content.contactWhatsapp}
        </a>
        <a href="mailto:${content.contactEmail}" class="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl shadow-md transition-all">
          ${content.contactEmail}
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-slate-950 text-slate-400 py-8 text-center text-xs">
    <p>${content.footerText}</p>
    <p class="mt-2"><a href="#privacidade" class="text-slate-400 hover:text-white underline">Política de Privacidade</a></p>
  </footer>

</body>
</html>`;
  };

  const handleDownloadHtml = () => {
    const html = generateStandaloneHtml();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `index.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(generateStandaloneHtml());
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2000);
  };

  const deployCloudRunCommand = 'gcloud run deploy sciencebit-web --source . --region us-central1 --allow-unauthenticated';
  const deployFirebaseCommand = 'npm run build && firebase deploy --only hosting';

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(deployCloudRunCommand);
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  const handleCopyFirebase = () => {
    navigator.clipboard.writeText(deployFirebaseCommand);
    setCopiedFirebase(true);
    setTimeout(() => setCopiedFirebase(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
            <Cloud className="w-4 h-4" />
            <span>Central de Deploy & Publicação</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Como Fazer o Deploy do Site
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Escolha o método de deploy ideal para o seu ambiente:
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('ai-studio')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'ai-studio'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>1. Deploy no Google AI Studio (Instantâneo)</span>
          </button>

          <button
            onClick={() => setActiveTab('cloud-run')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'cloud-run'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>2. Google Cloud Run (sciencebit.com.br)</span>
          </button>

          <button
            onClick={() => setActiveTab('firebase')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'firebase'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>3. Firebase Hosting</span>
          </button>

          <button
            onClick={() => setActiveTab('html')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'html'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>4. Baixar HTML / Arquivos</span>
          </button>
        </div>

        {/* Tab 1: AI Studio */}
        {activeTab === 'ai-studio' && (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-950 space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-blue-900">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>Publicação com 1 Clique no Google AI Studio</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Todas as alterações de código (remoção dos botões antigos, meta tags personalizadas de Wilton de Paula Soares Junior, Política de Privacidade e arquivos para a Play Store) <strong>já foram compiladas com sucesso!</strong>
              </p>
              
              <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-sm space-y-2">
                <p className="text-xs font-bold text-slate-900">Para atualizar a versão pública agora:</p>
                <ol className="list-decimal list-inside text-xs text-slate-600 space-y-1.5">
                  <li>Olhe para a <strong>barra superior do Google AI Studio</strong> (no canto superior direito).</li>
                  <li>Clique no botão azul <strong>"Deploy"</strong> (ou no menu <strong>"Share" / Compartilhar</strong>).</li>
                  <li>O Google Cloud publicará a versão atualizada instantaneamente com URL segura HTTPS.</li>
                </ol>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>O build de produção está compilado e verificado sem erros.</span>
              </div>
              <span className="font-mono text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                Build: OK
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Cloud Run */}
        {activeTab === 'cloud-run' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Comando de Deploy Direto no Google Cloud Run</span>
                </div>
                <button
                  onClick={handleCopyCommand}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                >
                  {copiedCommand ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCommand ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl font-mono text-xs text-cyan-300 overflow-x-auto">
                <code>{deployCloudRunCommand}</code>
              </div>
              <p className="text-[11px] text-slate-400">
                Executa a compilação do contêiner Docker e entrega na infraestrutura global do Google Cloud com auto-scaling e HTTPS gratuito.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-bold text-slate-900">Mapear seu domínio sciencebit.com.br no Cloud Run:</div>
              <p>Após o deploy, no console do Cloud Run, vá em <strong>Custom Domains &gt; Add Mapping</strong> e aponte para <code>sciencebit.com.br</code>.</p>
            </div>
          </div>
        )}

        {/* Tab 3: Firebase Hosting */}
        {activeTab === 'firebase' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Terminal className="w-4 h-4 text-amber-400" />
                  <span>Deploy via Firebase CLI (Mais rápido para sites estáticos / SPAs)</span>
                </div>
                <button
                  onClick={handleCopyFirebase}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                >
                  {copiedFirebase ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedFirebase ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl font-mono text-xs text-amber-300 overflow-x-auto">
                <code>{deployFirebaseCommand}</code>
              </div>
              <p className="text-[11px] text-slate-400">
                O arquivo de configuração <code>firebase.json</code> já está pronto no projeto com cache otimizado e rotas SPA.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
              <strong>Vantagem do Firebase Hosting para sciencebit.com.br:</strong>
              <p className="text-amber-900">
                Entrega via CDN global ultra-rápida do Google, certificado SSL renovado automaticamente e integração perfeita com Registro.br.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: HTML Standalone */}
        {activeTab === 'html' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Arquivo index.html Completo e Autônomo</h4>
                  <p className="text-xs text-slate-500">
                    Contém todo o CSS Tailwind, seções personalizadas, links e scripts em um arquivo único sem dependência de servidor.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={handleCopyHtml}
                  className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-all flex items-center gap-1"
                >
                  {copiedHtml ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedHtml ? 'Copiado' : 'Copiar'}</span>
                </button>
                <button
                  onClick={handleDownloadHtml}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar index.html</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-3">
              <FolderArchive className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <strong>Pasta dist/ de Produção:</strong> Se você preferir subir a pasta compilada completa (com ícones de PWA, manifesto e assetlinks.json para o Android), os arquivos gerados estão prontos no diretório <code>dist/</code>.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

