import React, { useState } from 'react';
import { 
  Play, 
  ShieldCheck, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  Smartphone, 
  Globe, 
  Key, 
  HelpCircle,
  FileCode,
  Download,
  Info,
  Sparkles,
  DollarSign
} from 'lucide-react';

interface PlayStoreGuideProps {
  onOpenPrivacyModal: () => void;
  domainName?: string;
}

export const PlayStoreGuide: React.FC<PlayStoreGuideProps> = ({ 
  onOpenPrivacyModal,
  domainName = 'sciencebit.com.br'
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);
  const [sha256Input, setSha256Input] = useState<string>('14:6D:E9:44:AB:F0:60:73:86:8E:90:E2:69:6B:46:76:F1:A6:F3:F4:9F:65:47:28:52:14:7E:CF:5F:C9:F6:9D');

  const copyToClipboard = (text: string, sectionKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const handleDownload = async (url: string, filename: string) => {
    setDownloadingFile(filename);
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1500);
    } catch (e) {
      window.open(url, '_blank');
    } finally {
      setTimeout(() => setDownloadingFile(null), 1000);
    }
  };

  const assetlinksJson = `[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "br.com.sciencebit.app",
      "sha256_cert_fingerprints": [
        "${sha256Input.trim()}"
      ]
    }
  }
]`;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* SECTION: Arquivos Oficiais de Envio para a Página do Desenvolvedor (Play Console) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Arquivos Prontos para Envio no Google Play Console</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Página do Desenvolvedor • Ícone &amp; Imagem de Cabeçalho
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Arquivos gerados nas dimensões e formatos exatos solicitados no seu Google Play Console (24-bit não transparente, &lt; 1 MB):
            </p>
          </div>

          <a
            href="https://play.google.com/console/u/0/developers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all self-start md:self-auto shrink-0"
          >
            <span>Ir para o Play Console</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Grid dos dois arquivos obrigatórios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: Ícone do desenvolvedor (512 x 512 px) */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-blue-600" />
                  <span>Ícone do desenvolvedor *</span>
                </span>
                <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md">
                  512 x 512 px • PNG
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                JPEG ou PNG de 24 bits (não transparente) • Até 1 MB
              </p>

              {/* Previews do Ícone */}
              <div className="flex items-center justify-center gap-4 py-2">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg border border-slate-700 bg-slate-950 p-1 mx-auto">
                    <img 
                      src="/icone-desenvolvedor-512x512.png" 
                      alt="Ícone ScienceBit Escuro" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[10px] text-slate-600 font-medium mt-1 block">Fundo Dark Tech</span>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white p-1 mx-auto">
                    <img 
                      src="/icone-desenvolvedor-512x512-white.png" 
                      alt="Ícone ScienceBit Fundo Branco" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[10px] text-slate-600 font-medium mt-1 block">Fundo Branco</span>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-[11px] text-amber-900 flex items-center gap-2">
                <span>📱</span>
                <span><strong>No celular:</strong> Pressione e segure o dedo na imagem acima e escolha <em>"Fazer download da imagem"</em>.</span>
              </div>
            </div>

            {/* Ações de Download */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <button
                onClick={() => handleDownload('/icone-desenvolvedor-512x512.png', 'icone-desenvolvedor-512x512.png')}
                disabled={downloadingFile === 'icone-desenvolvedor-512x512.png'}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{downloadingFile === 'icone-desenvolvedor-512x512.png' ? 'Baixando...' : 'Baixar Ícone 512x512 (Fundo Dark - Recomendado)'}</span>
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => handleDownload('/icone-desenvolvedor-512x512-white.png', 'icone-desenvolvedor-512x512-white.png')}
                  className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Fundo Branco</span>
                </button>

                <a
                  href="/icone-desenvolvedor-512x512.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-all"
                  title="Abrir imagem direta"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Abrir</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Imagem de cabeçalho (4.096 x 2.304 px) */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span>Imagem de cabeçalho *</span>
                </span>
                <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md">
                  4.096 x 2.304 px • JPG
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Aparece na parte superior da página do desenvolvedor • Até 1 MB
              </p>

              {/* Preview do Banner */}
              <div className="rounded-xl overflow-hidden shadow-md border border-slate-800 bg-slate-950 aspect-[16/9] relative group">
                <img 
                  src="/cabecalho-desenvolvedor-4096x2304.jpg" 
                  alt="Cabeçalho ScienceBit Desenvolvedor" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                  Resolução 4.096 x 2.304 px (255 KB)
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-[11px] text-amber-900 flex items-center gap-2 mt-3">
                <span>📱</span>
                <span><strong>No celular:</strong> Pressione e segure o dedo na imagem acima e escolha <em>"Fazer download da imagem"</em>.</span>
              </div>
            </div>

            {/* Ações de Download */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <button
                onClick={() => handleDownload('/cabecalho-desenvolvedor-4096x2304.jpg', 'cabecalho-desenvolvedor-4096x2304.jpg')}
                disabled={downloadingFile === 'cabecalho-desenvolvedor-4096x2304.jpg'}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{downloadingFile === 'cabecalho-desenvolvedor-4096x2304.jpg' ? 'Baixando...' : 'Baixar Cabeçalho 4.096 x 2.304 px (JPG • 255 KB)'}</span>
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => handleDownload('/cabecalho-desenvolvedor-4096x2304.png', 'cabecalho-desenvolvedor-4096x2304.png')}
                  className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Em PNG (779 KB)</span>
                </button>

                <a
                  href="/cabecalho-desenvolvedor-4096x2304.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-all"
                  title="Abrir imagem em alta definição"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Abrir</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Guia visual de como subir no Play Console */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl text-xs text-blue-950 space-y-2">
          <div className="font-bold flex items-center gap-1.5 text-blue-900">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Passo a passo no Google Play Console (tela do seu print):</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-slate-700 pl-1">
            <li>Abra a tela <strong>Conta de desenvolvedor &gt; Página do desenvolvedor</strong>.</li>
            <li>No campo <strong>Ícone do desenvolvedor *</strong>, clique em <strong>Substituir</strong> e selecione o arquivo baixado <code>icone-desenvolvedor-512x512.png</code>.</li>
            <li>No campo <strong>Imagem de cabeçalho *</strong>, clique em <strong>Substituir</strong> e selecione <code>cabecalho-desenvolvedor-4096x2304.jpg</code>.</li>
            <li>Role até o final da página e clique no botão azul <strong>Salvar alterações</strong> no canto inferior direito.</li>
          </ol>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Google Play Console • Guia de Solução & Publicação</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Resolvendo Travamentos na Google Play Store
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              O Google Play Console exige validações estritas de segurança, política de privacidade, verificação de domínio (Digital Asset Links) e questionários de conteúdo antes de liberar o botão de lançamento.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={onOpenPrivacyModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Ver Política de Privacidade</span>
            </button>
            <a
              href="https://play.google.com/console"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all"
            >
              <span>Abrir Play Console</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Grid de Soluções Imediatas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

        {/* Card 1: Política de Privacidade */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">1. Política de Privacidade (URL Dedicada)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Solução para o erro do Google Play:</strong> O Google Play Console exige uma <strong>página pública direta</strong> (sem <code>#</code>). Use a URL oficial abaixo que criamos especialmente para aprovação imediata:
            </p>
            <div className="p-2.5 bg-blue-50/70 border border-blue-200 rounded-xl text-[11px] font-mono font-semibold text-blue-900 break-all select-all">
              https://{domainName}/politica-de-privacidade.html
            </div>
            <div className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 p-2 rounded-lg flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
              <span>Arquivo HTML estático dedicado • 100% compatível com os robôs do Google</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => copyToClipboard(`https://${domainName}/politica-de-privacidade.html`, 'privacy-url')}
              className="flex-1 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              {copiedSection === 'privacy-url' ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'privacy-url' ? 'URL Copiada!' : 'Copiar URL Google Play'}</span>
            </button>
            <a
              href="/politica-de-privacidade.html"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Abrir página direta em nova aba"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir Página</span>
            </a>
          </div>
        </div>

        {/* Card 2: Digital Asset Links */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <FileCode className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">2. Digital Asset Links</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Erro comum:</strong> <em>"Falha na validação de links do app"</em> ou o app abre com a barra de URL do navegador. Já colocamos o arquivo no servidor em:
            </p>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[11px] font-mono text-slate-800 break-all">
              https://{domainName}/.well-known/assetlinks.json
            </div>
          </div>

          <div className="pt-4">
            <a
              href={`https://${domainName}/.well-known/assetlinks.json`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Testar Arquivo no Ar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 3: Questionário de Segurança */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">3. Segurança dos Dados</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Erro comum:</strong> <em>"O formulário de segurança dos dados está incompleto"</em>.
              No formulário do Play Console, marque:
            </p>
            <div className="text-[11px] text-slate-700 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div>• <strong>Coleta de dados:</strong> Marque <em>"Não"</em></div>
              <div>• <strong>Compartilha com terceiros:</strong> Marque <em>"Não"</em></div>
              <div>• <strong>Criptografia em trânsito:</strong> Sim (HTTPS)</div>
            </div>
          </div>

          <div className="pt-4">
            <div className="text-center text-[11px] font-semibold text-emerald-700 bg-emerald-50 py-1.5 rounded-lg border border-emerald-200">
              Zero burocracia de dados
            </div>
          </div>
        </div>

        {/* Card 4: Google AdMob app-ads.txt */}
        <div className="bg-white rounded-2xl p-6 border border-amber-200 shadow-sm flex flex-col justify-between bg-gradient-to-b from-white to-amber-50/20">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">4. Verificação AdMob (app-ads.txt)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Erro AdMob:</strong> <em>"Não foi possível verificar Clima & Radar PRO (app-ads.txt)"</em>. O Google exige este arquivo na raiz do seu site:
            </p>
            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-[10px] font-mono text-amber-950 break-all select-all font-semibold">
              google.com, pub-1408734099798382, DIRECT, f08c47fec0942fa0
            </div>
            <div className="text-[10px] text-slate-500">
              URL oficial: <code className="text-blue-600 font-mono">https://{domainName}/app-ads.txt</code>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-2">
            <button
              onClick={() => copyToClipboard('google.com, pub-1408734099798382, DIRECT, f08c47fec0942fa0', 'admob-snippet')}
              className="w-full py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              {copiedSection === 'admob-snippet' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'admob-snippet' ? 'Copiado!' : 'Copiar Snippet AdMob'}</span>
            </button>
            <a
              href="/app-ads.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-1.5 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Ver Arquivo no Ar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Seção Detalhada de Passo a Passo */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Qual é o seu erro específico no Google Play Console?</h3>
            <p className="text-xs text-slate-500">
              Identifique abaixo a mensagem exata que apareceu na tela do seu computador ou celular:
            </p>
          </div>
        </div>

        <div className="space-y-4">
          
          {/* Item 1 */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                A. "Você precisa fornecer uma política de privacidade"
              </h4>
              <span className="text-[11px] bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded-full">
                Bloqueante
              </span>
            </div>
            <p className="text-xs text-slate-600">
              No menu lateral esquerdo do Google Play Console:
            </p>
            <ol className="list-decimal pl-5 text-xs text-slate-600 space-y-1">
              <li>Role até a seção <strong>"Política e programas"</strong> e clique em <strong>"Conteúdo do app"</strong>.</li>
              <li>Procure o item <strong>"Política de privacidade"</strong> e clique em <em>Iniciar</em> ou <em>Gerenciar</em>.</li>
              <li>Cole a URL direta oficial: <code className="bg-white px-2 py-0.5 rounded border border-blue-300 font-semibold text-blue-600">https://{domainName}/politica-de-privacidade.html</code></li>
              <li><em>(Importante: não use links com #, pois o robô do Google rejeita. Esta página .html estática foi feita especialmente para ser aceita de primeira).</em></li>
              <li>Clique em <strong>Salvar</strong>. Pronto! O aviso vermelho desaparecerá imediatamente.</li>
            </ol>
          </div>

          {/* Item 2 */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                B. "Classificação de Conteúdo" e "Público-alvo"
              </h4>
              <span className="text-[11px] bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
                Obrigatório
              </span>
            </div>
            <ol className="list-decimal pl-5 text-xs text-slate-600 space-y-1">
              <li>Ainda em <strong>Conteúdo do app</strong>, abra o questionário <strong>"Classificação do conteúdo"</strong>.</li>
              <li>Informe seu e-mail e selecione a categoria <strong>"Utilitários, Produtividade, Comunicação ou Outros"</strong>.</li>
              <li>Responda <strong>"Não"</strong> para violência, conteúdo adulto, palavrões, drogas ou apostas.</li>
              <li>Clique em salvar e calcular classificação: você receberá classificação livre (L / Everyone).</li>
              <li>No questionário de <strong>Público-alvo</strong>, selecione <strong>"18 anos ou mais"</strong> (isso evita exigências de proteção infantil COPPA).</li>
            </ol>
          </div>

          {/* Item 3 */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                C. Impressão Digital SHA-256 no assetlinks.json (Google Play App Signing)
              </h4>
              <span className="text-[11px] bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-full">
                TWA / App Links
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Quando você envia o arquivo <code>.aab</code> para o Google Play Console, o Google assina o aplicativo com a <strong>Chave de assinatura do app do Google Play</strong>. Para que o app Android abra em tela cheia (sem barra de URL do navegador), o SHA-256 do Google Play deve estar registrado no seu site.
            </p>

            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
              <label className="block text-xs font-semibold text-slate-700">
                Como pegar o SHA-256 no Google Play Console:
              </label>
              <div className="text-xs text-slate-600 space-y-1">
                1. No menu do Play Console, vá em <strong>Configuração</strong> &gt; <strong>Integridade do app</strong>.<br/>
                2. Na aba <strong>Play App Signing</strong>, copie a <em>"Impressão digital do certificado SHA-256"</em>.<br/>
                3. Cole a sua chave abaixo para gerar o JSON exato:
              </div>

              <input
                type="text"
                value={sha256Input}
                onChange={(e) => setSha256Input(e.target.value)}
                placeholder="Ex: 14:6D:E9:44:AB:F0:60:73:86:8E:90:..."
                className="w-full text-xs font-mono bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="relative">
                <pre className="p-3 bg-slate-900 text-emerald-400 rounded-xl font-mono text-[11px] overflow-x-auto">
                  {assetlinksJson}
                </pre>
                <button
                  onClick={() => copyToClipboard(assetlinksJson, 'json-assetlinks')}
                  className="absolute top-2 right-2 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-semibold flex items-center gap-1 border border-slate-700 transition-colors"
                >
                  {copiedSection === 'json-assetlinks' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSection === 'json-assetlinks' ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                D. "Para publicar, realize um teste fechado com 20 testadores por 14 dias"
              </h4>
              <span className="text-[11px] bg-purple-100 text-purple-800 font-semibold px-2 py-0.5 rounded-full">
                Regra do Google
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Desde novembro de 2023, o Google exige que todas as novas contas de desenvolvedor pessoa física façam um <strong>Teste Fechado (Closed Testing)</strong> com pelo menos 20 pessoas antes de liberar a faixa de Produção aberta a todos.
            </p>
            <div className="text-xs text-slate-600 space-y-1 bg-white p-3 rounded-xl border border-slate-200">
              <div>1. No menu, vá em <strong>Teste</strong> &gt; <strong>Teste fechado</strong>.</div>
              <div>2. Crie uma faixa de teste e faça upload do seu arquivo <code>.aab</code>.</div>
              <div>3. Na aba "Testadores", crie uma lista de e-mails (amigos, colegas de trabalho ou grupos de testadores de Play Store).</div>
              <div>4. Compartilhe o link do teste com eles para que aceitem o convite. Após os 14 dias, o botão de Produção é liberado automaticamente!</div>
            </div>
          </div>

          {/* Item 5: AdMob app-ads.txt */}
          <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-300 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                E. "Não foi possível verificar Clima & Radar PRO (app-ads.txt)" no AdMob
              </h4>
              <span className="text-[11px] bg-amber-200 text-amber-900 font-bold px-2 py-0.5 rounded-full">
                Monetização AdMob
              </span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              O Google AdMob verifica o site do desenvolvedor cadastrado na Play Store (<strong>https://sciencebit.com.br</strong>) para confirmar a propriedade do app e proteger contra fraudes de anúncios.
            </p>
            <div className="bg-white p-3.5 rounded-xl border border-amber-200 text-xs space-y-2 text-slate-700">
              <div className="font-bold text-slate-900">Como resolver no AdMob em 3 etapas simples:</div>
              <ol className="list-decimal pl-5 space-y-2 text-slate-600">
                <li>
                  Já geramos o arquivo <code>app-ads.txt</code> pronto com o seu ID oficial da conta AdMob:
                  <div className="font-mono text-[11px] bg-slate-950 text-amber-300 p-2.5 rounded-lg mt-1 select-all break-all border border-slate-800">
                    google.com, pub-1408734099798382, DIRECT, f08c47fec0942fa0
                  </div>
                </li>
                <li>
                  O arquivo está acessível na raiz do seu site em: <code className="text-blue-600 font-semibold bg-blue-50 px-1 py-0.5 rounded">https://{domainName}/app-ads.txt</code>
                </li>
                <li>
                  Basta clicar no botão <strong>"Deploy"</strong> no topo do AI Studio (ou subir no Firebase Hosting) e depois clicar em <strong>"Verificar se há atualizações"</strong> na tela do AdMob! O AdMob detectará o arquivo e verificará o app com sucesso.
                </li>
              </ol>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
