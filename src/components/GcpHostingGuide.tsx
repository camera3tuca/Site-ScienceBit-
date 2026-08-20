import React, { useState } from 'react';
import { GCP_HOSTING_OPTIONS, REGISTRO_BR_DNS_GUIDE } from '../data/gcpGuides';
import { 
  Cloud, 
  Terminal, 
  Check, 
  Copy, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Server, 
  ArrowRight, 
  HelpCircle,
  Sparkles,
  CheckCircle2,
  Globe,
  Radio,
  Lock,
  Layers,
  Cpu,
  Boxes
} from 'lucide-react';

export const GcpHostingGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'registro-br' | 'gcp-options'>('registro-br');
  const [selectedOptionId, setSelectedOptionId] = useState<string>('cloud-run');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const selectedOption = GCP_HOSTING_OPTIONS.find((opt) => opt.id === selectedOptionId) || GCP_HOSTING_OPTIONS[1];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
            <Radio className="w-3.5 h-3.5 text-cyan-400" />
            <span>Guia Especializado: Registro.br + Google Cloud</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Como Conectar <span className="text-cyan-400 font-mono">sciencebit.com.br</span> ao Google Cloud
          </h2>
          
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Aprenda a apontar seu domínio do Registro.br diretamente para as aplicações da ScienceBit (Cloud Run e Firebase Hosting), configurando subdomínios para seus aplicativos existentes e futuros projetos de IoT.
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('registro-br')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'registro-br'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>1. Configurar Registro.br (DNS)</span>
            </button>

            <button
              onClick={() => setActiveTab('gcp-options')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'gcp-options'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>2. Métodos de Deploy no Google Cloud</span>
            </button>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12 pointer-events-none">
          <Cloud className="w-96 h-96 text-white" />
        </div>
      </div>

      {/* TAB 1: REGISTRO.BR DNS CONFIGURATION */}
      {activeTab === 'registro-br' && (
        <div className="space-y-6">
          
          {/* Main Registro.br Instructions */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
                    <Globe className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Passo a Passo: Painel do Registro.br (sciencebit.com.br)
                  </h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Siga estas 4 etapas no painel do Registro.br para apontar o domínio principal e criar subdomínios para seus aplicativos.
                </p>
              </div>

              <a
                href="https://registro.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl transition-all self-start sm:self-center shrink-0"
              >
                <span>Acessar Registro.br</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Step by step cards */}
            <div className="space-y-4">
              
              {/* Step 1 */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Faça login no Registro.br e abra o domínio <span className="font-mono text-blue-600">sciencebit.com.br</span>
                    </h4>
                    <p className="text-slate-600 text-xs mt-1">
                      Acesse sua conta no Registro.br, localize a lista de "Domínios" e clique em <strong>sciencebit.com.br</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Vá até o bloco "DNS" e clique em "Configurar Endereçamento" ou "Modificar Zona"
                    </h4>
                    <p className="text-slate-600 text-xs mt-1">
                      Certifique-se de que está usando o DNS do Registro.br (caso esteja em servidores externos, clique em "Usar servidores DNS do Registro.br").
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 - Interactive DNS Table */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Adicione as Entradas de DNS no Registro.br (Tabela Pronta)
                    </h4>
                    <p className="text-slate-600 text-xs mt-1">
                      Clique em <strong>"Nova Entrada"</strong> e adicione cada uma das linhas abaixo:
                    </p>
                  </div>
                </div>

                {/* DNS Records Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-inner">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900 text-slate-200 font-mono text-[11px]">
                      <tr>
                        <th className="p-3">Tipo</th>
                        <th className="p-3">Nome / Entrada</th>
                        <th className="p-3">Dados / Destino</th>
                        <th className="p-3">Finalidade / Uso</th>
                        <th className="p-3 text-right">Copiar</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-slate-800">
                      
                      {/* Record A */}
                      <tr className="hover:bg-blue-50/50 transition-colors">
                        <td className="p-3 font-bold text-blue-600">A</td>
                        <td className="p-3 font-bold">@ (ou em branco)</td>
                        <td className="p-3 text-emerald-700 font-bold">199.36.158.100</td>
                        <td className="p-3 font-sans text-slate-600 text-[11px]">
                          Site principal (https://sciencebit.com.br)
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => handleCopy('199.36.158.100')}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 inline-flex items-center gap-1 font-sans text-[10px]"
                          >
                            {copiedText === '199.36.158.100' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedText === '199.36.158.100' ? 'Copiado' : 'Copiar'}</span>
                          </button>
                        </td>
                      </tr>

                      {/* Record CNAME WWW */}
                      <tr className="hover:bg-blue-50/50 transition-colors">
                        <td className="p-3 font-bold text-indigo-600">CNAME</td>
                        <td className="p-3 font-bold">www</td>
                        <td className="p-3 text-blue-700">ghs.googlehosted.com.</td>
                        <td className="p-3 font-sans text-slate-600 text-[11px]">
                          Acesso com WWW (https://www.sciencebit.com.br)
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => handleCopy('ghs.googlehosted.com.')}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 inline-flex items-center gap-1 font-sans text-[10px]"
                          >
                            {copiedText === 'ghs.googlehosted.com.' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedText === 'ghs.googlehosted.com.' ? 'Copiado' : 'Copiar'}</span>
                          </button>
                        </td>
                      </tr>

                      {/* Subdomain B3 / Monitor */}
                      <tr className="hover:bg-blue-50/50 transition-colors bg-blue-50/20">
                        <td className="p-3 font-bold text-blue-600">CNAME</td>
                        <td className="p-3 font-bold">b3 (ou monitor)</td>
                        <td className="p-3 text-blue-700">ghs.googlehosted.com.</td>
                        <td className="p-3 font-sans text-slate-600 text-[11px]">
                          <strong>Monitor B3</strong> (https://b3.sciencebit.com.br ou monitor-b3.ai.studio)
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => handleCopy('ghs.googlehosted.com.')}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 inline-flex items-center gap-1 font-sans text-[10px]"
                          >
                            {copiedText === 'ghs.googlehosted.com.' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedText === 'ghs.googlehosted.com.' ? 'Copiado' : 'Copiar'}</span>
                          </button>
                        </td>
                      </tr>

                      {/* Subdomain APP */}
                      <tr className="hover:bg-blue-50/50 transition-colors">
                        <td className="p-3 font-bold text-cyan-600">CNAME</td>
                        <td className="p-3 font-bold">app</td>
                        <td className="p-3 text-blue-700">ghs.googlehosted.com.</td>
                        <td className="p-3 font-sans text-slate-600 text-[11px]">
                          Seu App principal (https://app.sciencebit.com.br)
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => handleCopy('ghs.googlehosted.com.')}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 inline-flex items-center gap-1 font-sans text-[10px]"
                          >
                            {copiedText === 'ghs.googlehosted.com.' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedText === 'ghs.googlehosted.com.' ? 'Copiado' : 'Copiar'}</span>
                          </button>
                        </td>
                      </tr>

                      {/* Subdomain IoT */}
                      <tr className="hover:bg-blue-50/50 transition-colors">
                        <td className="p-3 font-bold text-emerald-600">CNAME</td>
                        <td className="p-3 font-bold">iot</td>
                        <td className="p-3 text-blue-700">ghs.googlehosted.com.</td>
                        <td className="p-3 font-sans text-slate-600 text-[11px]">
                          Portal de Sensores IoT (https://iot.sciencebit.com.br)
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => handleCopy('ghs.googlehosted.com.')}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 inline-flex items-center gap-1 font-sans text-[10px]"
                          >
                            {copiedText === 'ghs.googlehosted.com.' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedText === 'ghs.googlehosted.com.' ? 'Copiado' : 'Copiar'}</span>
                          </button>
                        </td>
                      </tr>

                      {/* Subdomain API */}
                      <tr className="hover:bg-blue-50/50 transition-colors">
                        <td className="p-3 font-bold text-purple-600">CNAME</td>
                        <td className="p-3 font-bold">api</td>
                        <td className="p-3 text-blue-700">ghs.googlehosted.com.</td>
                        <td className="p-3 font-sans text-slate-600 text-[11px]">
                          APIs Node.js / Microsserviços (https://api.sciencebit.com.br)
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => handleCopy('ghs.googlehosted.com.')}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 inline-flex items-center gap-1 font-sans text-[10px]"
                          >
                            {copiedText === 'ghs.googlehosted.com.' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedText === 'ghs.googlehosted.com.' ? 'Copiado' : 'Copiar'}</span>
                          </button>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>

                <div className="text-[11px] text-blue-800 bg-blue-50 border border-blue-200 p-3 rounded-xl flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Dica de Especialista:</strong> Ao usar <code>ghs.googlehosted.com.</code> ou o IP fornecido pelo Cloud Run / Firebase, o Google gerencia todo o roteamento Anycast global e você ganha proteção DDoS nativa da rede do Google.
                  </span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Salvar Alterações e Aguardar a Propagação do DNS
                    </h4>
                    <p className="text-slate-600 text-xs mt-1">
                      Clique no botão verde <strong>"Salvar Alterações"</strong> no Registro.br. O Registro.br atualiza os servidores DNS normalmente entre 15 minutos e 2 horas.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* SSL Notice */}
            <div className="p-5 bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-2xl border border-emerald-800 space-y-2">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm">Certificado SSL / HTTPS 100% Automático e Gratuito</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Você <strong>não precisa comprar certificado SSL</strong>. O Google Cloud (tanto no Cloud Run quanto no Firebase Hosting) emite e renova automaticamente os certificados TLS para <code>sciencebit.com.br</code> e todos os seus subdomínios assim que o DNS propaga.
              </p>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: GCP DEPLOY METHODS */}
      {activeTab === 'gcp-options' && (
        <div className="space-y-6">
          
          {/* Option Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {GCP_HOSTING_OPTIONS.map((option) => {
              const isSelected = option.id === selectedOptionId;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedOptionId(option.id)}
                  className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-500/20'
                      : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 ${
                      option.id === 'ai-studio-cloudrun' 
                        ? 'bg-blue-100 text-blue-800'
                        : option.id === 'cloud-run'
                        ? 'bg-indigo-100 text-indigo-800'
                        : option.id === 'firebase-hosting'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-100 text-slate-800'
                    }`}>
                      {option.badge}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm leading-tight mb-1">
                      {option.name}
                    </h3>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Dificuldade:</span>
                    <span className="font-semibold text-slate-700">{option.difficulty}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Guide for Selected Option */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            {/* Method Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
                    <Cloud className="w-5 h-5" />
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedOption.name}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm mt-2 max-w-2xl leading-relaxed">
                  {selectedOption.description}
                </p>
              </div>

              <div className="shrink-0 bg-slate-50 p-3 rounded-2xl border border-slate-200/80 text-xs space-y-1.5 min-w-[200px]">
                <div className="flex justify-between">
                  <span className="text-slate-500">Custo:</span>
                  <strong className="text-emerald-600 font-bold">{selectedOption.costTier}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dificuldade:</span>
                  <strong className="text-slate-800">{selectedOption.difficulty}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">SSL / HTTPS:</span>
                  <strong className="text-emerald-600">Grátis & Automático</strong>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Pré-requisitos Necessários
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedOption.prerequisites.map((prereq, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{prereq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-6 pt-2">
              <h4 className="text-sm font-bold text-slate-900">
                Comandos & Passos de Execução
              </h4>

              <div className="space-y-4">
                {selectedOption.steps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200/80 space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">
                          {step.title}
                        </h5>
                        <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {step.command && (
                      <div className="mt-2">
                        <div className="bg-slate-950 text-slate-200 rounded-xl p-3 text-xs font-mono flex items-center justify-between border border-slate-800 shadow-inner">
                          <code className="overflow-x-auto whitespace-pre-wrap">{step.command}</code>
                          <button
                            onClick={() => handleCopy(step.command!)}
                            className="ml-3 shrink-0 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all flex items-center gap-1 text-[11px]"
                            title="Copiar comando"
                          >
                            {copiedText === step.command ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Copiado!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copiar</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    {step.tip && (
                      <div className="text-xs text-blue-700 bg-blue-50/80 border border-blue-100 p-2.5 rounded-xl flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{step.tip}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <span>Dúvidas Frequentes: sciencebit.com.br & Google Cloud</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h4 className="font-bold text-slate-900">Quanto tempo demora para o domínio funcionar?</h4>
            <p className="text-slate-600 leading-relaxed">
              No Registro.br a propagação das entradas A e CNAME ocorre geralmente entre 15 minutos e 2 horas após salvar.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h4 className="font-bold text-slate-900">Como hospedo múltiplos apps em sciencebit.com.br?</h4>
            <p className="text-slate-600 leading-relaxed">
              Você pode criar subdomínios gratuitos no Registro.br (ex: <code>app1.sciencebit.com.br</code>, <code>iot.sciencebit.com.br</code>) e mapear cada um para um serviço diferente no Cloud Run.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h4 className="font-bold text-slate-900">O que acontece se o tráfego dos apps aumentar?</h4>
            <p className="text-slate-600 leading-relaxed">
              O Google Cloud Run escala automaticamente de 0 a centenas de contêineres sem que você precise mexer em nada.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <h4 className="font-bold text-slate-900">Posso rodar corretores MQTT para meus projetos IoT?</h4>
            <p className="text-slate-600 leading-relaxed">
              Sim! Você pode rodar corretores como Eclipse Mosquitto ou EMQX em contêineres Docker no Cloud Run / Compute Engine e conectar via <code>iot.sciencebit.com.br</code>.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
