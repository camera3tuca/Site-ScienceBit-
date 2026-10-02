import React from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Printer, 
  ExternalLink, 
  CheckCircle2, 
  Lock, 
  Mail, 
  Globe, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBackToHome: () => void;
  brandName?: string;
  domainName?: string;
  contactEmail?: string;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onBackToHome,
  brandName = 'Science Bit COMPUTER',
  domainName = 'sciencebit.com.br',
  contactEmail = 'camera3.tuca@gmail.com'
}) => {
  const [copiedUrl, setCopiedUrl] = React.useState<boolean>(false);
  const playStoreUrl = `https://${domainName}/politica-de-privacidade.html`;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(playStoreUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="p-2 -ml-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              title="Voltar para a página inicial"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Voltar ao Site</span>
            </button>

            <div className="h-4 w-px bg-slate-800 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs">
                SB
              </div>
              <div>
                <span className="font-bold text-sm text-white tracking-tight">Science<span className="text-blue-500">Bit</span></span>
                <span className="text-[10px] text-slate-400 tracking-wider font-semibold ml-1.5 hidden md:inline">COMPUTER</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer"
              title="Imprimir Política ou Salvar como PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir / PDF</span>
            </button>

            <button
              onClick={onBackToHome}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all cursor-pointer shadow-sm shadow-blue-500/20"
            >
              Página Inicial
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        
        {/* Play Store Notice Banner */}
        <div className="bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-500/30 rounded-2xl p-5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Google Play Store &amp; LGPD</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
                  URL Direta 100% Válida
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                URL oficial para cadastrar em <strong>Conteúdo do app &gt; Política de Privacidade</strong> no Google Play Console:
              </p>
              <code className="text-xs font-mono text-blue-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800 inline-block mt-1.5 break-all select-all">
                {playStoreUrl}
              </code>
            </div>
          </div>

          <button
            onClick={handleCopyUrl}
            className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-md"
          >
            {copiedUrl ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copiedUrl ? 'URL Copiada!' : 'Copiar URL'}</span>
          </button>
        </div>

        {/* Header Title */}
        <div className="border-b border-slate-800 pb-6 space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Política de Privacidade
          </h1>
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400">
            <span>Desenvolvedor: <strong className="text-slate-200">Wilton de Paula Soares Junior</strong></span>
            <span>•</span>
            <span>Marca: <strong className="text-slate-200">{brandName}</strong></span>
            <span>•</span>
            <span>Domínio: <strong className="text-blue-400">https://{domainName}</strong></span>
            <span>•</span>
            <span>Atualização: <strong className="text-slate-200">Outubro de 2026</strong></span>
          </div>
        </div>

        {/* Section 1 */}
        <section className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-mono flex items-center justify-center font-bold">1</span>
            Identificação do Desenvolvedor e Escopo
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Esta Política de Privacidade descreve com absoluta transparência o tratamento de dados realizado nos aplicativos móveis, ferramentas analíticas e portais mantidos por <strong>Wilton de Paula Soares Junior</strong>, sob a marca e conta de desenvolvedor <strong>Science Bit COMPUTER</strong> no Google Play Store.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            O escopo abrange todos os aplicativos publicados sob o pacote de desenvolvedor da Science Bit, incluindo o aplicativo de monitoramento e análise da Bolsa de Valores (B3), ferramentas quantitativas, scanners de mercado financeiro e aplicações web progressivas (PWA/TWA) vinculadas ao domínio <code className="text-blue-300 font-mono text-xs">https://{domainName}</code>.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-mono flex items-center justify-center font-bold">2</span>
            Dados Tratados e Princípio de Minimização
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Nossos aplicativos são construídos sob a diretriz de <strong>Privacidade por Design (Privacy by Design)</strong>. Não temos interesse na coleta de dados pessoais desnecessários.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4" />
                DADOS NÃO COLETADOS
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                NÃO acessamos sua lista de contatos, chamadas, mensagens SMS, fotos da galeria, câmera, microfone, arquivos do dispositivo nem biometria.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4" />
                SEM GEOLOCALIZAÇÃO
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                NÃO monitoramos nem exigimos dados de GPS ou localização precisa em segundo plano.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm text-slate-300">
            <p><strong>Tratamento legítimo e limitado:</strong></p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-400">
              <li>
                <strong className="text-slate-200">Preferências no Próprio Aparelho:</strong> Configurações de exibição e ativos favoritados ficam salvos localmente na memória do seu smartphone (LocalStorage / SharedPreferences) e não são enviados a servidores externos.
              </li>
              <li>
                <strong className="text-slate-200">Diagnósticos Anônimos:</strong> Dados agregados de falhas fornecidos nativamente pelo Google Play Console (Crashlytics) unicamente para identificar erros de software e lançar atualizações corretivas.
              </li>
              <li>
                <strong className="text-slate-200">Comunicação Voluntária:</strong> E-mails enviados ao suporte são armazenados apenas para prestar o atendimento solicitado.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-mono flex items-center justify-center font-bold">3</span>
            Permissões Solicitadas no Android
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Em estrita observância às políticas de permissões do Google Play Console:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-800/80 text-slate-200">
                <tr>
                  <th className="p-3">Permissão</th>
                  <th className="p-3">Finalidade Técnica</th>
                  <th className="p-3">Acesso a Dados Sensíveis?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="p-3 font-mono text-blue-400">android.permission.INTERNET</td>
                  <td className="p-3">Carregar dados públicos de cotações financeiras, gráficos e APIs via HTTPS criptografado.</td>
                  <td className="p-3 text-emerald-400 font-semibold">Não</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-blue-400">android.permission.ACCESS_NETWORK_STATE</td>
                  <td className="p-3">Verificar conectividade ativa antes de disparar requisições, economizando dados e bateria.</td>
                  <td className="p-3 text-emerald-400 font-semibold">Não</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-mono flex items-center justify-center font-bold">4</span>
            Serviços de Terceiros e Nuvem
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Nossos aplicativos utilizam serviços de infraestrutura confiáveis:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-400">
            <li>
              <strong className="text-slate-200">Google Play Services (Google LLC):</strong> Para entrega segura de versões e relatórios de integridade. (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Política de Privacidade Google</a>).
            </li>
            <li>
              <strong className="text-slate-200">Google Cloud Platform (GCP):</strong> Hospedagem escalável com criptografia TLS 1.3 ponta a ponta.
            </li>
          </ul>
        </section>

        {/* Section 5 - DATA DELETION REQUEST (CRÍTICO GOOGLE PLAY) */}
        <section className="bg-red-950/20 border border-red-500/30 rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-red-400 flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-red-500/20 text-red-400 text-xs font-mono flex items-center justify-center font-bold">5</span>
            Exclusão de Dados e Direitos do Titular (LGPD Art. 18)
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Como os aplicativos da Science Bit COMPUTER não requerem criação de login ou conta com senha, você pode excluir imediatamente qualquer histórico ou preferência salva bastando <strong>limpar os dados do aplicativo nas Configurações do Android</strong> ou desinstalando-o.
          </p>
          <div className="bg-slate-950/80 rounded-xl p-4 border border-red-500/20 text-xs text-slate-300 space-y-2">
            <div className="font-bold text-red-300">Como solicitar exclusão de e-mails ou mensagens de suporte:</div>
            <p>
              Envie um e-mail para <a href={`mailto:${contactEmail}`} className="text-blue-400 font-mono underline">{contactEmail}</a> com o assunto:
              <span className="bg-slate-900 text-slate-200 px-2 py-0.5 rounded font-mono ml-1">"Exclusão de Dados - Science Bit"</span>.
            </p>
            <p className="text-slate-400">
              Sua solicitação é processada e respondida em até <strong>5 dias úteis</strong>, sem qualquer ônus.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-mono flex items-center justify-center font-bold">6</span>
            Privacidade de Menores (COPPA)
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Nossos aplicativos não são direcionados a crianças menores de 13 anos. Não coletamos intencionalmente nenhuma informação pessoal de menores de idade. Se você é pai ou responsável e tomar conhecimento de dados enviados inadvertidamente, contate-nos para remoção imediata.
          </p>
        </section>

        {/* Section 7 */}
        <section className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-mono flex items-center justify-center font-bold">7</span>
            Encarregado pelo Tratamento de Dados (DPO) e Contato
          </h2>
          <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800 space-y-1.5 text-xs text-slate-300">
            <div><strong className="text-slate-200">Encarregado / Desenvolvedor:</strong> Wilton de Paula Soares Junior</div>
            <div><strong className="text-slate-200">Marca:</strong> Science Bit COMPUTER</div>
            <div><strong className="text-slate-200">E-mail:</strong> <a href={`mailto:${contactEmail}`} className="text-blue-400 hover:underline">{contactEmail}</a></div>
            <div><strong className="text-slate-200">Website Oficial:</strong> <a href={`https://${domainName}`} className="text-blue-400 hover:underline">https://{domainName}</a></div>
            <div><strong className="text-slate-200">Jurisdição:</strong> República Federativa do Brasil (LGPD - Lei 13.709/2018)</div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <p>&copy; 2026 Science Bit COMPUTER • Wilton de Paula Soares Junior. Todos os direitos reservados.</p>
        <p className="mt-2 space-x-3">
          <button onClick={onBackToHome} className="hover:text-slate-300 underline cursor-pointer">Página Inicial</button>
          <span>•</span>
          <a href="/politica-de-privacidade.html" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 underline">Arquivo Estático HTML</a>
          <span>•</span>
          <a href={`mailto:${contactEmail}`} className="hover:text-slate-300 underline">Contato</a>
        </p>
      </footer>
    </div>
  );
};
