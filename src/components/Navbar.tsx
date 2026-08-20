import React from 'react';
import { 
  Globe, 
  Cloud, 
  Settings, 
  FileCode, 
  Calculator, 
  Download, 
  Smartphone, 
  Tablet, 
  Monitor,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'editor' | 'preview' | 'gcp-guide' | 'deploy-files' | 'cost-calc';
  setActiveTab: (tab: 'editor' | 'preview' | 'gcp-guide' | 'deploy-files' | 'cost-calc') => void;
  deviceView: 'desktop' | 'tablet' | 'mobile';
  setDeviceView: (device: 'desktop' | 'tablet' | 'mobile') => void;
  onExport: () => void;
  brandName: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  deviceView,
  setDeviceView,
  onExport,
  brandName,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Platform Info */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-base tracking-tight text-white">Criador & Hospedagem GCP</span>
                <span className="bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-blue-400" />
                  Google Cloud Pronto
                </span>
              </div>
              <p className="text-xs text-slate-400 truncate max-w-[200px] sm:max-w-xs">
                {brandName || 'Seu Site Profissional'}
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
            <button
              id="tab-editor"
              onClick={() => setActiveTab('editor')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'editor'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Editor do Site</span>
            </button>

            <button
              id="tab-preview"
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'preview'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Ver Site</span>
            </button>

            <button
              id="tab-gcp-guide"
              onClick={() => setActiveTab('gcp-guide')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'gcp-guide'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Cloud className="w-4 h-4" />
              <span>Guia Google Cloud</span>
            </button>

            <button
              id="tab-deploy-files"
              onClick={() => setActiveTab('deploy-files')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'deploy-files'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>Arquivos de Deploy</span>
            </button>

            <button
              id="tab-cost-calc"
              onClick={() => setActiveTab('cost-calc')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'cost-calc'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Custos / Grátis</span>
            </button>
          </nav>

          {/* Right Controls: Device Toggles & Export */}
          <div className="flex items-center space-x-2">
            {(activeTab === 'preview' || activeTab === 'editor') && (
              <div className="hidden lg:flex items-center bg-slate-800 border border-slate-700 rounded-lg p-1 space-x-1">
                <button
                  id="device-desktop"
                  onClick={() => setDeviceView('desktop')}
                  className={`p-1.5 rounded transition-all ${
                    deviceView === 'desktop' ? 'bg-slate-700 text-blue-400' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Visualização Desktop"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  id="device-tablet"
                  onClick={() => setDeviceView('tablet')}
                  className={`p-1.5 rounded transition-all ${
                    deviceView === 'tablet' ? 'bg-slate-700 text-blue-400' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Visualização Tablet"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  id="device-mobile"
                  onClick={() => setDeviceView('mobile')}
                  className={`p-1.5 rounded transition-all ${
                    deviceView === 'mobile' ? 'bg-slate-700 text-blue-400' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Visualização Celular"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              id="btn-export"
              onClick={onExport}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Baixar / Exportar</span>
              <span className="sm:hidden">Exportar</span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex items-center justify-between overflow-x-auto py-2.5 space-x-2 border-t border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${activeTab === 'editor' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400'}`}
          >
            Editor
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${activeTab === 'preview' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400'}`}
          >
            Ver Site
          </button>
          <button
            onClick={() => setActiveTab('gcp-guide')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${activeTab === 'gcp-guide' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400'}`}
          >
            Guia GCP
          </button>
          <button
            onClick={() => setActiveTab('deploy-files')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${activeTab === 'deploy-files' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400'}`}
          >
            Deploy
          </button>
          <button
            onClick={() => setActiveTab('cost-calc')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${activeTab === 'cost-calc' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400'}`}
          >
            Custos
          </button>
        </div>
      </div>
    </header>
  );
};
