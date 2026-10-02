import React from 'react';
import { ShieldCheck, X, Lock, CheckCircle2, Mail, Globe, ExternalLink } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName?: string;
  domainName?: string;
  contactEmail?: string;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  brandName = 'ScienceBit',
  domainName = 'sciencebit.com.br',
  contactEmail = 'camera3.tuca@gmail.com',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Política de Privacidade</h3>
              <p className="text-xs text-slate-300">
                {brandName} • Conformidade Google Play Store & LGPD
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
          
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold flex items-center gap-1.5 text-blue-950">
                <Lock className="w-4 h-4 text-blue-600 shrink-0" />
                URL Oficial para o Google Play Console:
              </span>
              <a 
                href="/politica-de-privacidade.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1 underline"
              >
                <span>Abrir Página</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="font-mono text-[11px] text-blue-950 select-all bg-white p-2.5 rounded-xl border border-blue-200 break-all font-semibold">
              https://{domainName}/politica-de-privacidade.html
            </p>
            <p className="text-[11px] text-blue-700">
              Copie e cole este endereço no campo <strong>"Política de Privacidade"</strong> dentro de <em>Conteúdo do app</em> no Google Play Console. Esta página estática é 100% aprovada pelo robô do Google sem erros.
            </p>
          </div>

          <section className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              1. Visão Geral e Informações Gerais
            </h4>
            <p>
              Esta Política de Privacidade descreve como o aplicativo e plataforma <strong>{brandName}</strong> (disponível através do domínio <strong>https://{domainName}</strong> e em versão móvel para Android via Trusted Web Activity / PWA), de responsabilidade do desenvolvedor <strong>Wilton de Paula Soares Junior</strong>, lida com a privacidade e proteção de dados de seus usuários.
            </p>
            <p>
              O aplicativo é primariamente um hub informativo, portfólio profissional de engenharia de software, automação de dados e projetos na nuvem (Google Cloud Platform).
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              2. Dados Coletados e Finalidade
            </h4>
            <p>
              O aplicativo <strong>NÃO</strong> coleta dados sensíveis, localização em segundo plano, identificadores de publicidade abusivos nem vende qualquer dado a terceiros. As únicas formas de tratamento de dados ocorrem nas seguintes situações:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Formulário de Contato Voluntário:</strong> Quando o usuário decide enviar uma mensagem, são solicitados apenas Nome, E-mail, Telefone e Mensagem com o único propósito de responder à solicitação.
              </li>
              <li>
                <strong>Dados Técnicos de Navegação:</strong> Informações técnicas comuns (endereço IP, tipo de navegador e dados de telemetria padrão HTTP) são processadas temporariamente pelos servidores do Google Cloud / Cloudflare unicamente para entrega de conteúdo, segurança contra ataques DDoS e estabilidade.
              </li>
              <li>
                <strong>Armazenamento Local (Cache / Service Worker):</strong> O aplicativo utiliza armazenamento local (LocalStorage e Cache do Service Worker) no dispositivo apenas para permitir navegação rápida e funcionamento offline.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              3. Permissões do Aplicativo no Android
            </h4>
            <p>
              Em total conformidade com as diretrizes do Google Play Console, o aplicativo Android requer apenas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="font-semibold text-slate-800 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  INTERNET
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Necessária para carregar os conteúdos da nuvem e aplicações interativas.
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="font-semibold text-slate-800 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  ACCESS_NETWORK_STATE
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Verifica a conectividade do dispositivo para alternar modos offline.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic mt-1">
              * O app não solicita acesso a Câmera, Microfone, Contatos, SMS, Galeria nem Localização GPS em tempo real.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              4. Compartilhamento de Dados com Terceiros
            </h4>
            <p>
              Nenhum dado é vendido, alugado ou transferido para corretores de dados. Os dados trafegam exclusivamente pela infraestrutura do Google Cloud Platform com criptografia TLS 1.3 / HTTPS.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              5. Direitos do Titular (LGPD)
            </h4>
            <p>
              Em conformidade com a LGPD (Lei nº 13.709/2018), você pode solicitar a confirmação, correção, exclusão ou anonimização de qualquer mensagem ou dado enviado através do e-mail oficial do encarregado:
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>{contactEmail}</span>
            </div>
          </section>

          <section className="space-y-2 border-t border-slate-100 pt-4">
            <p className="text-xs text-slate-400">
              Última atualização: Setembro de 2026 • Versão 1.2
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Válido e compatível com as exigências do <strong>Google Play Console</strong>.
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-md transition-colors"
          >
            Entendido / Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
