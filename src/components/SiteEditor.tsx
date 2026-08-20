import React, { useState } from 'react';
import { SiteContent, SiteTemplateType, ColorThemeId, AppProjectItem } from '../types';
import { TEMPLATE_PRESETS, THEMES } from '../data/templates';
import { 
  Palette, 
  Sparkles, 
  Layers, 
  Type, 
  Phone, 
  Briefcase, 
  Plus, 
  Trash2, 
  RotateCcw,
  Check,
  Globe,
  GraduationCap,
  Boxes,
  Cpu,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Cloud
} from 'lucide-react';

interface SiteEditorProps {
  content: SiteContent;
  setContent: React.Dispatch<React.SetStateAction<SiteContent>>;
  onViewPreview: () => void;
  onNavigateToDns?: () => void;
}

export const SiteEditor: React.FC<SiteEditorProps> = ({ 
  content, 
  setContent, 
  onViewPreview,
  onNavigateToDns
}) => {
  const [activeSection, setActiveSection] = useState<'general' | 'apps' | 'future' | 'skills' | 'contact' | 'theme'>('general');

  const handleTemplateChange = (templateType: SiteTemplateType) => {
    const preset = TEMPLATE_PRESETS[templateType];
    if (preset) {
      setContent({ ...preset });
    }
  };

  const handleThemeChange = (themeId: ColorThemeId) => {
    setContent(prev => ({ ...prev, theme: themeId }));
  };

  // Add App / Project
  const handleAddProject = () => {
    const newId = String(Date.now());
    const newProject: AppProjectItem = {
      id: newId,
      title: 'Novo Aplicativo / Sistema',
      category: 'App Ativo / No Ar',
      description: 'Descrição funcional do aplicativo, sua proposta de valor e arquitetura utilizada.',
      techStack: ['React', 'TypeScript', 'Google Cloud Run', 'Node.js'],
      status: 'online',
      demoUrl: 'https://app.sciencebit.com.br',
      githubUrl: 'https://github.com/sciencebit/novo-app',
      icon: 'Layout',
    };
    setContent(prev => ({
      ...prev,
      projects: [...(prev.projects || []), newProject],
    }));
  };

  const handleRemoveProject = (id: string) => {
    setContent(prev => ({
      ...prev,
      projects: (prev.projects || []).filter(p => p.id !== id),
    }));
  };

  const handleProjectChange = (id: string, field: keyof AppProjectItem, value: any) => {
    setContent(prev => ({
      ...prev,
      projects: (prev.projects || []).map(p => {
        if (p.id === id) {
          if (field === 'techStack' && typeof value === 'string') {
            return { ...p, techStack: value.split(',').map(s => s.trim()).filter(Boolean) };
          }
          return { ...p, [field]: value };
        }
        return p;
      }),
    }));
  };

  // Add Future Project
  const handleAddFutureProject = () => {
    const newId = 'f_' + String(Date.now());
    const newFuture: AppProjectItem = {
      id: newId,
      title: 'Novo Projeto / Inovação IoT',
      category: 'Projeto Futuro / Roadmap',
      description: 'Pesquisa e implementação planejada para automação, nuvem ou inteligência artificial aplicada.',
      techStack: ['Python', 'MQTT', 'Google Cloud Pub/Sub', 'ESP32'],
      status: 'planned',
      icon: 'Cpu',
    };
    setContent(prev => ({
      ...prev,
      futureProjects: [...(prev.futureProjects || []), newFuture],
    }));
  };

  const handleRemoveFutureProject = (id: string) => {
    setContent(prev => ({
      ...prev,
      futureProjects: (prev.futureProjects || []).filter(p => p.id !== id),
    }));
  };

  const handleFutureProjectChange = (id: string, field: keyof AppProjectItem, value: any) => {
    setContent(prev => ({
      ...prev,
      futureProjects: (prev.futureProjects || []).map(p => {
        if (p.id === id) {
          if (field === 'techStack' && typeof value === 'string') {
            return { ...p, techStack: value.split(',').map(s => s.trim()).filter(Boolean) };
          }
          return { ...p, [field]: value };
        }
        return p;
      }),
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      
      {/* Top Banner: Template Selector */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Modelo do Site & Vitrine</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Configurado especialmente para <strong>sciencebit.com.br</strong> (Ciência da Computação, Cloud & IoT).
            </p>
          </div>

          {onNavigateToDns && (
            <button
              onClick={onNavigateToDns}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1.5 rounded-xl transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Configurar DNS sciencebit.com.br</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {[
            { id: 'sciencebit', label: 'ScienceBit (Oficial)', icon: '⚡', desc: 'Apps, Cloud & IoT' },
            { id: 'portfolio', label: 'Portfólio Pessoal', icon: '👨‍💻', desc: 'Dev Full Stack' },
            { id: 'business', label: 'Empresa / Negócio', icon: '🏢', desc: 'Consultoria' },
            { id: 'saas', label: 'SaaS / Plataforma', icon: '🚀', desc: 'Monitoramento' },
            { id: 'services', label: 'Serviços Tech', icon: '⚖️', desc: 'Soluções sob medida' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleTemplateChange(item.id as SiteTemplateType)}
              className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                content.template === item.id
                  ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div>
                <span className="text-2xl mb-1 block">{item.icon}</span>
                <span className="text-xs font-bold text-slate-900 block leading-tight">{item.label}</span>
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block">{item.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Editor Sub-Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold">
        {[
          { id: 'general', label: 'Identidade & Formação', icon: GraduationCap },
          { id: 'apps', label: `Apps Criados (${(content.projects || []).length})`, icon: Boxes },
          { id: 'future', label: `Roadmap & Futuro (${(content.futureProjects || []).length})`, icon: Sparkles },
          { id: 'skills', label: 'Pilares & Stack', icon: Code2 },
          { id: 'contact', label: 'Contatos & Redes', icon: Phone },
          { id: 'theme', label: 'Cores & Estilo', icon: Palette },
        ].map((tab) => {
          const IconComp = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <IconComp className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* SECTION: Identidade, Domínio e Formação */}
      {activeSection === 'general' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span>Identidade, Domínio e Formação Acadêmica</span>
            </h3>
            <p className="text-xs text-slate-500">
              Esses dados dão autoridade ao seu site perante clientes, parceiros e recrutadores.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Nome da Marca / Projeto</label>
              <input
                type="text"
                value={content.brandName}
                onChange={(e) => setContent({ ...content, brandName: e.target.value })}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Domínio Registro.br</label>
              <input
                type="text"
                value={content.domainName || 'sciencebit.com.br'}
                onChange={(e) => setContent({ ...content, domainName: e.target.value })}
                placeholder="sciencebit.com.br"
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 font-mono focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Formação Acadêmica & Especialização</label>
              <input
                type="text"
                value={content.academicTitle || ''}
                onChange={(e) => setContent({ ...content, academicTitle: e.target.value })}
                placeholder="Ex: Bacharel em Ciência da Computação • Pós-Graduado em Cloud Computing & IoT"
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Slogan / Tagline Técnica</label>
              <input
                type="text"
                value={content.tagline}
                onChange={(e) => setContent({ ...content, tagline: e.target.value })}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Título Principal do Hero</label>
              <input
                type="text"
                value={content.heroTitle}
                onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Texto Descritivo do Hero</label>
              <textarea
                rows={3}
                value={content.heroSubtitle}
                onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Botão Principal (Texto)</label>
              <input
                type="text"
                value={content.primaryCtaText}
                onChange={(e) => setContent({ ...content, primaryCtaText: e.target.value })}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Botão Secundário (Texto)</label>
              <input
                type="text"
                value={content.secondaryCtaText}
                onChange={(e) => setContent({ ...content, secondaryCtaText: e.target.value })}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* SECTION: Apps Criados e no Ar */}
      {activeSection === 'apps' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Boxes className="w-5 h-5 text-blue-600" />
                <span>Vitrine de Aplicativos Criados (Ativos / No Ar)</span>
              </h3>
              <p className="text-xs text-slate-500">
                Divulgue seus apps com links de demonstração, repositórios e tags da stack.
              </p>
            </div>
            <button
              onClick={handleAddProject}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-xl transition-all shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Adicionar Aplicativo</span>
            </button>
          </div>

          <div className="space-y-4">
            {(content.projects || []).map((project, idx) => (
              <div
                key={project.id}
                className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded">
                    App #{idx + 1}
                  </span>
                  <button
                    onClick={() => handleRemoveProject(project.id)}
                    className="text-red-500 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                    title="Remover aplicativo"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Nome do Aplicativo</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => handleProjectChange(project.id, 'title', e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Categoria / Tipo</label>
                    <select
                      value={project.category}
                      onChange={(e) => handleProjectChange(project.id, 'category', e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900"
                    >
                      <option value="App Ativo / No Ar">App Ativo / No Ar</option>
                      <option value="Dispositivo IoT / Cloud">Dispositivo IoT / Cloud</option>
                      <option value="Em Desenvolvimento">Em Desenvolvimento</option>
                      <option value="Projeto Futuro / Roadmap">Projeto Futuro / Roadmap</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Descrição Funcional</label>
                    <textarea
                      rows={2}
                      value={project.description}
                      onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Tecnologias Utilizadas (separadas por vírgula)
                    </label>
                    <input
                      type="text"
                      value={project.techStack.join(', ')}
                      onChange={(e) => handleProjectChange(project.id, 'techStack', e.target.value)}
                      placeholder="React, TypeScript, Google Cloud Run, MQTT, ESP32"
                      className="w-full text-xs bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Link de Demonstração / Acesso</label>
                    <input
                      type="text"
                      value={project.demoUrl || ''}
                      onChange={(e) => handleProjectChange(project.id, 'demoUrl', e.target.value)}
                      placeholder="https://app.sciencebit.com.br"
                      className="w-full text-xs bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Repositório GitHub (Opcional)</label>
                    <input
                      type="text"
                      value={project.githubUrl || ''}
                      onChange={(e) => handleProjectChange(project.id, 'githubUrl', e.target.value)}
                      placeholder="https://github.com/sciencebit/..."
                      className="w-full text-xs bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900 font-mono"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION: Roadmap & Projetos Futuros */}
      {activeSection === 'future' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-600" />
                <span>Roadmap de Projetos Futuros & IoT</span>
              </h3>
              <p className="text-xs text-slate-500">
                Mostre para o mercado as inovações que você está planejando e desenvolvendo.
              </p>
            </div>
            <button
              onClick={handleAddFutureProject}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 px-3.5 py-2 rounded-xl transition-all shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Adicionar ao Roadmap</span>
            </button>
          </div>

          <div className="space-y-4">
            {(content.futureProjects || []).map((future, idx) => (
              <div
                key={future.id}
                className="p-4 bg-slate-900 text-white rounded-2xl space-y-3 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/60">
                    Roadmap #{idx + 1}
                  </span>
                  <button
                    onClick={() => handleRemoveFutureProject(future.id)}
                    className="text-red-400 hover:text-red-300 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                    title="Remover projeto"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Título do Projeto Futuro</label>
                    <input
                      type="text"
                      value={future.title}
                      onChange={(e) => handleFutureProjectChange(future.id, 'title', e.target.value)}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Status de Desenvolvimento</label>
                    <select
                      value={future.status}
                      onChange={(e) => handleFutureProjectChange(future.id, 'status', e.target.value)}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    >
                      <option value="beta">⚡ Em Desenvolvimento (Beta)</option>
                      <option value="planned">🚀 Planejado no Roadmap</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Objetivo & Arquitetura</label>
                    <textarea
                      rows={2}
                      value={future.description}
                      onChange={(e) => handleFutureProjectChange(future.id, 'description', e.target.value)}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                      Stack Prevista (separadas por vírgula)
                    </label>
                    <input
                      type="text"
                      value={future.techStack.join(', ')}
                      onChange={(e) => handleFutureProjectChange(future.id, 'techStack', e.target.value)}
                      placeholder="Python, OpenCV, Google Vertex AI, ESP32, MQTT"
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION: Pilares e Stack */}
      {activeSection === 'skills' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-600" />
              <span>Pilares de Conhecimento & Competências Técnicas</span>
            </h3>
            <p className="text-xs text-slate-500">
              Personalize os 3 pilares técnicos (Ciência da Computação, Cloud e IoT).
            </p>
          </div>

          <div className="space-y-4">
            {(content.skills || []).map((skillGroup, groupIdx) => (
              <div key={groupIdx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <label className="block text-xs font-bold text-slate-900">
                  Pilar #{groupIdx + 1}: Categoria
                </label>
                <input
                  type="text"
                  value={skillGroup.category}
                  onChange={(e) => {
                    const newSkills = [...content.skills];
                    newSkills[groupIdx].category = e.target.value;
                    setContent({ ...content, skills: newSkills });
                  }}
                  className="w-full text-xs bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900"
                />

                <label className="block text-xs font-bold text-slate-700">
                  Itens / Competências (separadas por vírgula)
                </label>
                <input
                  type="text"
                  value={skillGroup.items.join(', ')}
                  onChange={(e) => {
                    const newSkills = [...content.skills];
                    newSkills[groupIdx].items = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                    setContent({ ...content, skills: newSkills });
                  }}
                  className="w-full text-xs bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900 font-mono"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION: Contatos e Redes */}
      {activeSection === 'contact' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>Canais de Contato, WhatsApp e Redes Profissionais</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">E-mail Profissional</label>
              <input
                type="email"
                value={content.contactEmail}
                onChange={(e) => setContent({ ...content, contactEmail: e.target.value })}
                placeholder="contato@sciencebit.com.br"
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp (apenas números com DDI + DDD)</label>
              <input
                type="text"
                value={content.contactWhatsapp}
                onChange={(e) => setContent({ ...content, contactWhatsapp: e.target.value })}
                placeholder="5511987654321"
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Perfil GitHub</label>
              <input
                type="text"
                value={content.contactGithub || ''}
                onChange={(e) => setContent({ ...content, contactGithub: e.target.value })}
                placeholder="https://github.com/sciencebit"
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Perfil LinkedIn</label>
              <input
                type="text"
                value={content.contactLinkedin || ''}
                onChange={(e) => setContent({ ...content, contactLinkedin: e.target.value })}
                placeholder="https://linkedin.com/in/sciencebit"
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Instagram (@usuario)</label>
              <input
                type="text"
                value={content.contactInstagram || ''}
                onChange={(e) => setContent({ ...content, contactInstagram: e.target.value })}
                placeholder="@camera3.tuca"
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">CEP</label>
              <input
                type="text"
                value={content.contactCep || ''}
                onChange={(e) => setContent({ ...content, contactCep: e.target.value })}
                placeholder="74223-150"
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 font-mono"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Localização / Atendimento</label>
              <input
                type="text"
                value={content.contactAddress}
                onChange={(e) => setContent({ ...content, contactAddress: e.target.value })}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900"
              />
            </div>
          </div>
        </div>
      )}

      {/* SECTION: Cores e Estilo */}
      {activeSection === 'theme' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Palette className="w-5 h-5 text-blue-600" />
              <span>Tema de Cores & Visual</span>
            </h3>
            <p className="text-xs text-slate-500">
              Escolha a paleta cromática que melhor reflete a identidade da ScienceBit.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.values(THEMES).map((theme) => {
              const isSelected = content.theme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <div
                      className="w-5 h-5 rounded-full shadow-inner border border-white"
                      style={{ backgroundColor: theme.previewColor }}
                    />
                    <span className="text-xs font-bold text-slate-800">{theme.name}</span>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Sticky Action Bar */}
      <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="text-slate-300">Alterações salvas instantaneamente em tempo real.</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onViewPreview}
            className="text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-1.5"
          >
            <span>Ver Pré-visualização do Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
