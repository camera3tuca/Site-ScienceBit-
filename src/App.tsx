import React, { useState } from 'react';
import { SiteContent } from './types';
import { TEMPLATE_PRESETS } from './data/templates';
import { SitePreview } from './components/SitePreview';
import { SiteEditor } from './components/SiteEditor';
import { GcpHostingGuide } from './components/GcpHostingGuide';
import { DeployConfigGenerator } from './components/DeployConfigGenerator';
import { GcpCostCalculator } from './components/GcpCostCalculator';
import { ExportModal } from './components/ExportModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { PlayStoreGuide } from './components/PlayStoreGuide';
import { ScienceBitLogo } from './components/ScienceBitLogo';
import { 
  Cloud, 
  Settings, 
  Globe, 
  FileCode, 
  Calculator, 
  ExternalLink, 
  Download, 
  CheckCircle2, 
  Radio, 
  Sliders,
  Play
} from 'lucide-react';

export default function App() {
  const [content, setContent] = useState<SiteContent>(TEMPLATE_PRESETS.sciencebit);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'gcp-guide' | 'deploy-files' | 'cost-calc' | 'play-store'>('preview');
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);
  const [showAdminPanel, setShowAdminPanel] = useState<boolean>(false);

  const [currentRoute, setCurrentRoute] = useState<'home' | 'privacy'>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase();
      const h = window.location.hash.toLowerCase();
      if (
        p.includes('privacidade') || 
        p.includes('privacy') || 
        h.includes('privacidade') || 
        h.includes('privacy')
      ) {
        return 'privacy';
      }
    }
    return 'home';
  });

  React.useEffect(() => {
    const handleUrlChange = () => {
      const p = window.location.pathname.toLowerCase();
      const h = window.location.hash.toLowerCase();
      if (
        p.includes('privacidade') || 
        p.includes('privacy') || 
        h.includes('privacidade') || 
        h.includes('privacy')
      ) {
        setCurrentRoute('privacy');
      } else {
        setCurrentRoute('home');
      }
    };
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Se a rota for a Política de Privacidade (Google Play Store ou clique do usuário)
  if (currentRoute === 'privacy') {
    return (
      <PrivacyPolicyPage
        onBackToHome={() => {
          setCurrentRoute('home');
          if (window.history.pushState) {
            window.history.pushState(null, '', '/');
          }
        }}
        brandName="Science Bit COMPUTER"
        domainName="sciencebit.com.br"
        contactEmail="camera3.tuca@gmail.com"
      />
    );
  }

  // Se o painel administrativo estiver fechado, exibe DIRETAMENTE o site oficial em tela cheia limpa
  if (!showAdminPanel && activeTab === 'preview') {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
        {/* Site Oficial Direto */}
        <SitePreview
          content={content}
          deviceView="desktop"
          onOpenPrivacy={() => {
            setCurrentRoute('privacy');
            if (window.history.pushState) {
              window.history.pushState(null, '', '/politica-de-privacidade');
            }
          }}
        />

        {/* Botão flutuante discreto no canto inferior para você poder abrir o painel de edição a qualquer momento */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
          <button
            onClick={() => setIsExportOpen(true)}
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-2.5 rounded-full border border-blue-500 shadow-xl backdrop-blur-md text-xs font-bold transition-all hover:scale-105"
            title="Como Fazer o Deploy e Publicar"
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>Deploy</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('play-store');
              setShowAdminPanel(true);
            }}
            className="flex items-center gap-1.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white px-3.5 py-2.5 rounded-full border border-slate-700 shadow-xl backdrop-blur-md text-xs font-semibold transition-all hover:scale-105"
            title="Guia Google Play Store"
          >
            <Play className="w-3.5 h-3.5 text-emerald-400 fill-current" />
            <span>Google Play</span>
          </button>

          <button
            onClick={() => setShowAdminPanel(true)}
            className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white px-4 py-2.5 rounded-full border border-slate-700 shadow-xl backdrop-blur-md text-xs font-semibold transition-all hover:scale-105"
            title="Abrir Painel de Gestão e DNS"
          >
            <Sliders className="w-4 h-4 text-blue-400" />
            <span>Painel ScienceBit</span>
          </button>
        </div>

        {/* Export Modal */}
        <ExportModal
          isOpen={isExportOpen}
          onClose={() => setIsExportOpen(false)}
          content={content}
        />

        {/* Privacy Policy Modal */}
        <PrivacyPolicyModal
          isOpen={isPrivacyOpen}
          onClose={() => {
            setIsPrivacyOpen(false);
            if (window.location.hash === '#privacidade' || window.location.hash === '#politica-de-privacidade' || window.location.hash === '#privacy') {
              window.history.replaceState(null, '', window.location.pathname);
            }
          }}
          brandName={content.brandName}
          domainName={content.domainName || 'sciencebit.com.br'}
          contactEmail={content.contactEmail}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Top Navbar do Painel Administrativo */}
      <header className="sticky top-0 z-50 bg-slate-900 text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo & Info */}
            <div className="flex items-center space-x-4">
              <ScienceBitLogo variant="dark" size="sm" showSubtitle={true} />
              <div className="hidden sm:flex items-center space-x-2 border-l border-slate-800 pl-3">
                <span className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  No Ar no GCP
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {content.domainName || 'sciencebit.com.br'}
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex items-center space-x-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => {
                  setActiveTab('preview');
                  setShowAdminPanel(false);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>Ver Site Público</span>
              </button>

              <button
                onClick={() => setActiveTab('editor')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'editor'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Editor</span>
              </button>

              <button
                onClick={() => setActiveTab('gcp-guide')}
                className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'gcp-guide'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Radio className="w-4 h-4" />
                <span>DNS / GCP</span>
              </button>

              <button
                onClick={() => setActiveTab('deploy-files')}
                className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'deploy-files'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <FileCode className="w-4 h-4" />
                <span>Arquivos Deploy</span>
              </button>

              <button
                onClick={() => setActiveTab('play-store')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'play-store'
                    ? 'bg-emerald-700 text-white font-bold'
                    : 'text-emerald-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current text-emerald-400" />
                <span>Google Play</span>
              </button>

              <button
                onClick={() => setIsExportOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all ml-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Exportar</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 py-6 px-3 sm:px-6 lg:px-8 max-w-7xl w-full mx-auto">
        
        {/* Banner de Fechar Painel */}
        <div className="mb-4 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-600">
            <span className="font-semibold text-slate-800">Painel de Configuração da ScienceBit</span>
            <span className="hidden sm:inline text-slate-400">• Personalize os módulos, textos e links</span>
          </div>
          <button
            onClick={() => setShowAdminPanel(false)}
            className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Voltar para o Site Oficial</span>
          </button>
        </div>

        {/* Tab 1: Site Editor */}
        {activeTab === 'editor' && (
          <SiteEditor
            content={content}
            setContent={setContent}
            onViewPreview={() => {
              setActiveTab('preview');
              setShowAdminPanel(false);
            }}
            onNavigateToDns={() => setActiveTab('gcp-guide')}
          />
        )}

        {/* Tab 2: Site Preview (quando dentro do admin) */}
        {activeTab === 'preview' && (
          <div className="rounded-3xl border border-slate-300 shadow-xl overflow-hidden bg-white">
            <SitePreview
              content={content}
              deviceView="desktop"
              onNavigateToGuide={() => setActiveTab('gcp-guide')}
              onNavigateToDns={() => setActiveTab('gcp-guide')}
              onOpenPrivacy={() => setIsPrivacyOpen(true)}
            />
          </div>
        )}

        {/* Tab 3: Step-by-Step Google Cloud & Registro.br Guide */}
        {activeTab === 'gcp-guide' && <GcpHostingGuide />}

        {/* Tab 4: Ready-made Deploy Files */}
        {activeTab === 'deploy-files' && <DeployConfigGenerator />}

        {/* Tab 5: Cost & Free Tier Simulator */}
        {activeTab === 'cost-calc' && <GcpCostCalculator />}

        {/* Tab 6: Google Play Store Guide */}
        {activeTab === 'play-store' && (
          <PlayStoreGuide
            onOpenPrivacyModal={() => setIsPrivacyOpen(true)}
            domainName={content.domainName || 'sciencebit.com.br'}
          />
        )}

      </main>

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        content={content}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => {
          setIsPrivacyOpen(false);
          if (window.location.hash === '#privacidade' || window.location.hash === '#politica-de-privacidade' || window.location.hash === '#privacy') {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }}
        brandName={content.brandName}
        domainName={content.domainName || 'sciencebit.com.br'}
        contactEmail={content.contactEmail}
      />

    </div>
  );
}
