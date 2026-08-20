import React, { useState } from 'react';
import { SiteContent } from '../types';
import { THEMES } from '../data/templates';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Cloud, 
  Layout, 
  Cpu, 
  TrendingUp, 
  ShoppingBag, 
  Calendar, 
  Zap, 
  Shield, 
  Utensils, 
  Fish, 
  Flame, 
  Coffee, 
  Building, 
  Calculator, 
  Users,
  Send,
  Sparkles,
  ExternalLink,
  Github,
  Linkedin,
  Layers,
  Terminal,
  Radio,
  Wifi,
  Database,
  Server,
  Lock,
  Boxes,
  Code2,
  Globe,
  Instagram,
  Activity,
  DollarSign,
  FileSpreadsheet,
  Sprout,
  Coins,
  BarChart2,
  CloudSun,
  PlaySquare
} from 'lucide-react';

interface SitePreviewProps {
  content: SiteContent;
  deviceView: 'desktop' | 'tablet' | 'mobile';
  onNavigateToGuide?: () => void;
  onNavigateToDns?: () => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  Cloud,
  Cpu,
  ShieldCheck,
  TrendingUp,
  ShoppingBag,
  Calendar,
  Zap,
  Star,
  Shield,
  Utensils,
  Fish,
  Flame,
  Coffee,
  Building,
  Calculator,
  Users,
  Sparkles,
  Radio,
  Wifi,
  Database,
  Server,
  Boxes,
  Code2,
  Globe,
  Instagram,
  Activity,
  DollarSign,
  FileSpreadsheet,
  Sprout,
  Coins,
  BarChart2,
  CloudSun,
  PlaySquare,
};

export const SitePreview: React.FC<SitePreviewProps> = ({ 
  content, 
  deviceView, 
  onNavigateToGuide,
  onNavigateToDns 
}) => {
  const theme = THEMES[content.theme] || THEMES.indigo;
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) return;
    setFormSent(true);
  };

  const getContainerWidth = () => {
    switch (deviceView) {
      case 'mobile':
        return 'max-w-[390px] shadow-2xl border-x border-slate-300 rounded-3xl overflow-hidden';
      case 'tablet':
        return 'max-w-[768px] shadow-2xl border-x border-slate-300 rounded-2xl overflow-hidden';
      default:
        return 'w-full';
    }
  };

  const whatsappUrl = `https://wa.me/${content.contactWhatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Olá! Vi o site ${content.brandName} (${content.domainName || 'sciencebit.com.br'}) e gostaria de conversar sobre seus projetos e soluções.`
  )}`;

  return (
    <div id="site-live-preview-container" className={`mx-auto bg-white text-slate-900 transition-all duration-300 font-sans ${getContainerWidth()}`}>
      
      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl ${theme.primary} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="font-black text-lg sm:text-xl text-slate-900 tracking-tight flex items-center gap-2">
                <span>{content.brandName}</span>
                <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200 font-mono">
                  {content.domainName || 'sciencebit.com.br'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-1">{content.tagline}</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
            <a href="#monitor-b3" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">Monitor B3</a>
            <a href="#apps" className="hover:text-blue-600 transition-colors">Aplicações Streamlit & Cloud</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Stack & Cloud</a>
            <a href="#sobre" className="hover:text-blue-600 transition-colors">Formação UFG/Senac</a>
            <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
          </nav>

          {/* Header Action Link */}
          <div className="flex items-center space-x-2">
            <a
              href="https://monitor-b3.ai.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl text-white ${theme.primary} ${theme.primaryHover} transition-all shadow-sm flex items-center gap-1.5`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Abrir Monitor B3</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-24 px-4 sm:px-6">
        {/* Subtle glowing circuit background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-6">
          
          {/* Academic & Specialty Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              Graduação na UFG (Univ. Federal de Goiás)
            </span>
            <span className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
              <Cloud className="w-3.5 h-3.5 text-cyan-400" />
              Pós-Graduação no EAD Senac
            </span>
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              Streamlit Cloud & Google Cloud Run
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            {content.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            {content.heroSubtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://monitor-b3.ai.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-blue-600/30"
            >
              <TrendingUp className="w-4 h-4 text-white" />
              <span>Acessar Monitor B3 no Ar</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
            </a>

            <a
              href="#monitor-b3"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base transition-all"
            >
              <span>Ver Detalhes do Projeto B3</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          {/* Quick Metrics / Tech Pill highlights */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-cyan-400 text-xs font-mono font-bold">DOMÍNIO PRÓPRIO</div>
              <div className="text-white font-semibold text-sm mt-0.5">{content.domainName || 'sciencebit.com.br'}</div>
              <div className="text-slate-400 text-[11px]">Registro.br Ativo</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-blue-400 text-xs font-mono font-bold">INFRAESTRUTURA</div>
              <div className="text-white font-semibold text-sm mt-0.5">Google Cloud</div>
              <div className="text-slate-400 text-[11px]">Cloud Run & Firebase</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-400 text-xs font-mono font-bold">STACK IoT</div>
              <div className="text-white font-semibold text-sm mt-0.5">MQTT & ESP32</div>
              <div className="text-slate-400 text-[11px]">Telemetria em Tempo Real</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="text-amber-400 text-xs font-mono font-bold">ENGENHARIA</div>
              <div className="text-white font-semibold text-sm mt-0.5">React & Node.js</div>
              <div className="text-slate-400 text-[11px]">Arquitetura de Software</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Projeto em Destaque Principal - Monitor B3 */}
      <section id="monitor-b3" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Projeto em Destaque Principal • No Ar</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Monitor B3 <span className="text-blue-500 text-2xl sm:text-3xl font-mono font-normal">/ Analytics Financeiro</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Plataforma analítica profissional desenvolvida para monitoramento em tempo real do mercado de ações brasileiro (B3). Robusta, veloz e hospedada em infraestrutura Serverless no Google Cloud.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://monitor-b3.ai.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Abrir Aplicação Oficial</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/camera3tuca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm px-4 py-3 rounded-xl transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Interactive Showcase Panel / Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Main Interactive Preview Card with Realistic UI Showcase & Screenshots */}
            <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">https://monitor-b3.ai.studio/</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                    Status: Operacional • Latência &lt; 50ms
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span>Inteligência de Mercado & Visualização em Tempo Real</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    O Monitor B3 foi arquitetado com padrões modulares para processar múltiplos fluxos de dados de cotações, variações diárias, análise técnica e categorização de ativos da bolsa brasileira (Ibovespa, Small Caps e Fundos Imobiliários).
                  </p>
                </div>

                {/* Screenshot & Mockup Display Container */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-inner group">
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
                      alt="Interface do Monitor B3 - Gráficos e Telemetria em Tempo Real"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    
                    {/* Floating Overlay Badge on Screenshot */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Feed B3 em Tempo Real: <strong>PETR4, VALE3, ITUB4</strong></span>
                      </div>
                      <span className="bg-blue-600/90 text-white text-[10px] font-bold px-2 py-1 rounded">
                        Live Analytics
                      </span>
                    </div>
                  </div>
                </div>

                {/* Demonstration Metrics Mockup */}
                <div className="grid grid-cols-3 gap-3 pt-1">
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-400 font-mono uppercase">IBOVESPA</div>
                    <div className="text-base sm:text-lg font-black text-emerald-400 font-mono mt-0.5">+1.42%</div>
                    <div className="text-[10px] text-slate-500">Fluxo Comprador</div>
                  </div>
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-400 font-mono uppercase">MÓDULOS</div>
                    <div className="text-base sm:text-lg font-black text-blue-400 font-mono mt-0.5">100%</div>
                    <div className="text-[10px] text-slate-500">Modularizado</div>
                  </div>
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                    <div className="text-[11px] text-slate-400 font-mono uppercase">DEPLOY</div>
                    <div className="text-base sm:text-lg font-black text-cyan-400 font-mono mt-0.5">Cloud Run</div>
                    <div className="text-[10px] text-slate-500">Google Cloud</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-400">
                  <Server className="w-4 h-4 text-blue-400" />
                  <span>Ambiente de Produção: <strong>Google AI Studio + Cloud Run</strong></span>
                </div>
                <a
                  href="https://monitor-b3.ai.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1.5 group"
                >
                  <span>Acessar Aplicação no Ar</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Architecture & Engineering Details */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                  <Code2 className="w-4 h-4" />
                  <span>Arquitetura de Software</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Construído em TypeScript e React moderno, com gerenciamento de estado otimizado para evitar re-renderizações e garantir taxa de atualização fluida sem travamento de interface.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <Cloud className="w-4 h-4" />
                  <span>Infraestrutura Serverless Cloud</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Totalmente conteinerizado com Docker e hospedado no Google Cloud Run, usufruindo de auto-scaling automático de 0 a centenas de instâncias com custo otimizado no Free Tier.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Disponibilidade & SSL</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Integrado ao domínio e ecossistema ScienceBit com certificado TLS/HTTPS gerenciado pelo Google e tolerância a falhas contínua.
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Tecnologias Utilizadas</div>
                <div className="flex flex-wrap gap-1.5">
                  {['React 18', 'TypeScript', 'Tailwind CSS', 'Google Cloud Run', 'Financial Data APIs', 'Docker', 'Google AI Studio'].map((t, i) => (
                    <span key={i} className="text-[11px] font-mono bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800/40">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 1: Aplicativos Criados & No Ar */}
      <section id="apps" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full">
              <Boxes className="w-3.5 h-3.5" />
              <span>Vitrine de Aplicações</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {content.projectsTitle || 'Aplicativos Criados'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {content.projectsSubtitle || 'Sistemas desenvolvidos com foco em performance, escalabilidade na nuvem e usabilidade.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(content.projects || []).map((project) => {
              const IconComponent = ICON_MAP[project.icon] || Layout;
              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Project Image Preview Banner if available */}
                    {project.imageUrl && (
                      <div className="relative rounded-xl overflow-hidden aspect-[16/9] w-full border border-slate-200 bg-slate-900 group-hover:border-blue-300 transition-colors">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-sm border border-slate-700">
                            {project.category}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            {project.status === 'online' ? 'Online' : 'Ativo'}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Category & Status fallback if no image */}
                    {!project.imageUrl && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          {project.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          {project.status === 'online' ? 'Online / Ativo' : 'Em Execução'}
                        </span>
                      </div>
                    )}

                    {/* Title and Icon */}
                    <div className="flex items-start space-x-3.5">
                      <div className={`w-10 h-10 rounded-xl ${theme.bgLight} ${theme.secondary} flex items-center justify-center shrink-0 border border-blue-100`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="pt-2">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Tecnologias</div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links / Action Buttons */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Acessar Demo / App</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Repositório</span>
                        </a>
                      )}
                    </div>

                    <span className="text-[11px] text-slate-400 font-mono">
                      GCP Cloud Run
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: Hub de Aplicações Streamlit Cloud (Acessíveis e Operacionais) */}
      <section id="apps-stream-list" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-6xl mx-auto space-y-10 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/60 px-3 py-1 rounded-full">
                <Activity className="w-3.5 h-3.5" />
                <span>Streamlit Cloud • Python Analytics</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Hub de Monitores & Scanners Streamlit
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Aplicações em Python para finanças, commodities, análise técnica e scanners de mercado abertos para consulta pública no Streamlit Cloud.
              </p>
            </div>

            <a
              href="https://share.streamlit.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg shadow-red-900/30 transition-all hover:scale-105 shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Explorar no Streamlit Cloud (share.streamlit.io)</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: 'monitor-quedas-b3-modularizado', type: 'Finanças B3', icon: TrendingUp },
              { name: 'monitor-quedas-bdr4-modularizado', type: 'BDRs B3', icon: Globe },
              { name: 'monitor-quedas-nomad', type: 'Global Tech', icon: DollarSign },
              { name: 'monitorbdrs_performance', type: 'Performance', icon: BarChart2 },
              { name: 'analise_fundamentalista', type: 'Valuation', icon: FileSpreadsheet },
              { name: 'analise_fundamentalista2', type: 'Indicadores', icon: Calculator },
              { name: 'bdr-daily-scanner', type: 'Scanner Diário', icon: Activity },
              { name: 'clima', type: 'Meteorologia', icon: CloudSun },
              { name: 'monitor-agro1', type: 'Agro & Commodities', icon: Sprout },
              { name: 'monitor-agro2', type: 'Séries Temporais', icon: Sprout },
              { name: 'monitor-forex', type: 'Câmbio / Moedas', icon: Coins },
              { name: 'canalyoutube', type: 'YouTube Metrics', icon: PlaySquare },
            ].map((app, i) => {
              const AppIcon = app.icon;
              return (
                <a
                  key={i}
                  href="https://share.streamlit.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-950/80 border border-slate-800 hover:border-red-500/50 p-4 rounded-xl flex flex-col justify-between space-y-3 transition-all hover:bg-slate-950 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-red-400 flex items-center justify-center group-hover:bg-red-950/60 transition-colors">
                      <AppIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                      Online
                    </span>
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-slate-200 group-hover:text-red-300 transition-colors truncate">
                      {app.name}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {app.type} • main.app.py
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-900 text-[10px] text-slate-500">
                    <span>Streamlit Cloud</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 3: Conhecimento Técnico & Stack de Engenharia */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>Domínio Técnico & Competências</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pilares de Especialização
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Fundamentos de Ciência da Computação aplicados à Nuvem do Google e Dispositivos Conectados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(content.skills || []).map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-9 h-9 rounded-xl ${theme.bgLight} ${theme.secondary} flex items-center justify-center font-bold`}>
                    {idx === 0 ? <Code2 className="w-5 h-5" /> : idx === 1 ? <Cloud className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {skillGroup.category}
                  </h3>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {skillGroup.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Sobre & Formação Acadêmica */}
      <section id="sobre" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Formação & Trajetória</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {content.aboutTitle}
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {content.aboutDescription}
            </p>

            <div className="space-y-3 pt-2">
              {content.aboutHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {onNavigateToGuide && (
              <div className="pt-4">
                <button
                  onClick={onNavigateToGuide}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-700 bg-blue-100/80 hover:bg-blue-200 px-4 py-2.5 rounded-xl transition-all"
                >
                  <Cloud className="w-4 h-4" />
                  <span>Ver Guia Completo de Hospedagem no Google Cloud</span>
                </button>
              </div>
            )}
          </div>

          {/* Academic Profile Card */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="text-center space-y-3 pb-4 border-b border-slate-100">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white flex items-center justify-center text-2xl font-black shadow-lg">
                WJ
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">Wilton de Paula Soares Junior</h3>
                <p className="text-xs text-blue-600 font-semibold">{content.domainName || 'sciencebit.com.br'}</p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <span className="text-slate-500 font-medium">Graduação:</span>
                <span className="font-bold text-slate-900 text-right">Univ. Federal de Goiás (UFG)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <span className="text-slate-500 font-medium">Pós-Graduação:</span>
                <span className="font-bold text-slate-900 text-right">EAD Senac</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <span className="text-slate-500 font-medium">Localização:</span>
                <span className="font-bold text-slate-900 text-right">Goiânia - GO (CEP 74223-150)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <span className="text-slate-500 font-medium">Instagram:</span>
                <a 
                  href="https://instagram.com/camera3.tuca" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-pink-600 hover:underline text-right"
                >
                  @camera3.tuca
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 pt-2">
              <a
                href="https://instagram.com/camera3.tuca"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 transition-colors"
                title="Instagram @camera3.tuca"
              >
                <Instagram className="w-4 h-4" />
              </a>
              {content.contactGithub && (
                <a
                  href={content.contactGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-colors"
                title="WhatsApp Direto"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Contato */}
      <section id="contato" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full">
              <Mail className="w-3.5 h-3.5" />
              <span>Contato Direto</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {content.contactTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {content.contactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Contact Details */}
            <div className="md:col-span-5 space-y-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="font-bold text-slate-900 text-base">Informações de Contato</h3>
                
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center space-x-3 text-slate-700">
                    <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                    <a href={`mailto:${content.contactEmail}`} className="hover:text-blue-600 font-medium">
                      {content.contactEmail}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3 text-slate-700">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 font-medium">
                      +55 (62) 99975-5774
                    </a>
                  </div>

                  <div className="flex items-center space-x-3 text-slate-700">
                    <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
                    <a href="https://instagram.com/camera3.tuca" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 font-medium">
                      @camera3.tuca
                    </a>
                  </div>

                  <div className="flex items-start space-x-3 text-slate-700">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Goiânia - GO, Brasil</span>
                      <span className="block text-slate-500 text-xs">CEP: 74223-150</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chamar no WhatsApp (62 99975-5774)</span>
                  </a>
                </div>
              </div>

              {/* Google Maps Interactive Embed Card */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
                <div className="p-3 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-xs font-bold text-slate-800">Localização Google Maps</span>
                  </div>
                  <span className="text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded">
                    CEP 74223-150
                  </span>
                </div>
                <div className="aspect-video w-full">
                  <iframe
                    title="Google Maps Location - CEP 74223-150"
                    src="https://maps.google.com/maps?q=74223-150,%20Goiania,%20GO,%20Brazil&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="p-2.5 bg-slate-50 text-center">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=CEP+74223-150+Goiania+GO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Abrir rota no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              {formSent ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Mensagem Enviada!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Obrigado pelo contato. Retornaremos sua mensagem o mais breve possível no email informado.
                  </p>
                  <button
                    onClick={() => {
                      setFormSent(false);
                      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
                    }}
                    className="text-xs text-blue-600 hover:underline font-semibold pt-2"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Seu Nome *</label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Ex: Carlos Silva"
                        className="w-full text-xs sm:text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Seu E-mail *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full text-xs sm:text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full text-xs sm:text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Detalhes do Projeto / Mensagem *</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Descreva a aplicação, projeto IoT ou demanda técnica que você deseja discutir..."
                      className="w-full text-xs sm:text-sm bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 px-4 sm:px-6 border-t border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="font-bold text-white text-sm">{content.brandName} • {content.domainName || 'sciencebit.com.br'}</div>
            <p className="text-slate-500 mt-1">{content.academicTitle}</p>
          </div>

          <div className="text-slate-500">
            {content.footerText}
          </div>
        </div>
      </footer>

    </div>
  );
};
