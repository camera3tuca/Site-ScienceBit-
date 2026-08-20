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
  Terminal
} from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: SiteContent;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, content }) => {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState(false);

  if (!isOpen) return null;

  const theme = THEMES[content.theme] || THEMES.indigo;

  // Generate self-contained HTML
  const generateStandaloneHtml = (): string => {
    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.brandName} - ${content.tagline}</title>
  <meta name="description" content="${content.heroSubtitle}">
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
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <div class="w-9 h-9 rounded-lg bg-gradient-to-tr ${theme.accentGradient} flex items-center justify-center text-white font-bold text-lg shadow-md">
          ${content.brandName.charAt(0)}
        </div>
        <div>
          <span class="text-xl font-bold tracking-tight text-slate-900 block leading-tight">${content.brandName}</span>
          <span class="text-[11px] text-slate-500 font-medium">${content.tagline}</span>
        </div>
      </div>
      <nav class="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
        <a href="#inicio" class="hover:text-slate-900">Início</a>
        <a href="#sobre" class="hover:text-slate-900">Sobre</a>
        <a href="#servicos" class="hover:text-slate-900">Serviços</a>
        <a href="#contato" class="hover:text-slate-900">Contato</a>
      </nav>
      <a href="#contato" class="text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl text-white ${theme.primary} ${theme.primaryHover} shadow-md transition-all">
        ${content.primaryCtaText}
      </a>
    </div>
  </header>

  <!-- Hero -->
  <section id="inicio" class="py-16 sm:py-24 ${theme.bgLight} border-b border-slate-100">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <span class="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 bg-white border border-slate-200 shadow-sm ${theme.secondary}">
        ${content.tagline}
      </span>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
        ${content.heroTitle}
      </h1>
      <p class="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        ${content.heroSubtitle}
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#contato" class="w-full sm:w-auto text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg ${theme.primary} ${theme.primaryHover} transition-all">
          ${content.primaryCtaText}
        </a>
        <a href="#servicos" class="w-full sm:w-auto text-slate-700 bg-white font-semibold px-6 py-3.5 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-all">
          ${content.secondaryCtaText}
        </a>
      </div>
    </div>
  </section>

  <!-- Serviços -->
  <section id="servicos" class="py-16 sm:py-24 bg-white border-b border-slate-100">
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
            ${s.price ? `<div class="font-bold text-sm ${theme.secondary}">${s.price}</div>` : ''}
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
        <a href="https://wa.me/${content.contactWhatsapp.replace(/\D/g, '')}" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-md">
          WhatsApp: ${content.contactPhone || content.contactWhatsapp}
        </a>
        <a href="mailto:${content.contactEmail}" class="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl shadow-md">
          ${content.contactEmail}
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-slate-950 text-slate-400 py-8 text-center text-xs">
    <p>${content.footerText}</p>
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
    link.download = `${content.brandName.toLowerCase().replace(/\s+/g, '-') || 'index'}.html`;
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

  const deployCommand = 'gcloud run deploy meu-site --source . --region us-central1 --allow-unauthenticated';

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(deployCommand);
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        
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
            <Download className="w-4 h-4" />
            <span>Exportar & Publicar</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Leve Seu Site para o Google Cloud
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Escolha como prefere baixar ou fazer o deploy do seu site customizado:
          </p>
        </div>

        {/* Export Options Grid */}
        <div className="space-y-4">
          
          {/* Option 1: Standalone HTML */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Arquivo HTML Completo (Pronto para Hospedar)</h4>
                <p className="text-xs text-slate-500">Contém todo o CSS, Tailwind e scripts em um arquivo único autônomo.</p>
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
                <span>Baixar .HTML</span>
              </button>
            </div>
          </div>

          {/* Option 2: Deploy Cloud Run Command */}
          <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Comando de Deploy Direto (Cloud Run)</span>
              </div>
              <button
                onClick={handleCopyCommand}
                className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
              >
                {copiedCommand ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCommand ? 'Copiado!' : 'Copiar Comando'}</span>
              </button>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-xl font-mono text-xs text-blue-300 overflow-x-auto">
              <code>{deployCommand}</code>
            </div>
          </div>

          {/* Option 3: Built-in Cloud Run in AI Studio */}
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950 flex items-center gap-3 text-xs">
            <Cloud className="w-5 h-5 text-blue-600 shrink-0" />
            <div>
              <strong>Publicação Instantânea:</strong> Este app já está executando no Google Cloud! Você pode clicar no menu <strong>Share / Deploy</strong> no topo do Google AI Studio para compartilhar com qualquer pessoa.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
