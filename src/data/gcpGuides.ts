import { GcpHostingOption } from '../types';

export const REGISTRO_BR_DNS_GUIDE = {
  domain: 'sciencebit.com.br',
  registrar: 'Registro.br (NIC.br)',
  overview: 'Para que o seu domínio sciencebit.com.br aponte para o Google Cloud, você precisa apenas acessar o painel do Registro.br e configurar as entradas de DNS (Tipo A e CNAME) ou usar os servidores NS do Google Cloud DNS.',
  options: [
    {
      id: 'registro-br-direct',
      title: 'Método 1: DNS Padrão do Registro.br (Mais Rápido & Gratuito)',
      recommended: true,
      description: 'Você mantém o gerenciamento de DNS no próprio Registro.br e apenas cria as entradas apontando para o Google Cloud (Cloud Run / Firebase Hosting).',
      steps: [
        {
          num: 1,
          title: 'Acessar o painel do Registro.br',
          action: 'Acesse https://registro.br, faça login com seu CPF/Usuário e clique no domínio "sciencebit.com.br".',
        },
        {
          num: 2,
          title: 'Acessar a seção "DNS"',
          action: 'Role até a seção "DNS". Se estiver configurado como DNS padrão do Registro.br, clique em "Configurar Endereçamento" ou "Editar Zona".',
          tip: 'Se o botão "Modificar Servidores DNS" estiver ativo, clique em "Usar servidores DNS do Registro.br" para usar o editor de zona gratuito.',
        },
        {
          num: 3,
          title: 'Adicionar Registro Tipo A (Domínio Raiz)',
          action: 'Clique em "Modificar Zona" > "Nova Entrada" e crie:',
          record: {
            tipo: 'A',
            nome: 'sciencebit.com.br (deixar em branco ou @)',
            conteudo: '199.36.158.100 (IP fornecido pelo Google Cloud / Firebase)',
            ttl: '3600 (padrão)',
          },
        },
        {
          num: 4,
          title: 'Adicionar Registro CNAME (Subdomínio WWW e Apps)',
          action: 'Crie as entradas CNAME para o site principal e seus futuros aplicativos:',
          recordsList: [
            { tipo: 'CNAME', nome: 'www', destino: 'sciencebit.com.br. (ou ghs.googlehosted.com.)', uso: 'Site principal com WWW' },
            { tipo: 'CNAME', nome: 'app', destino: 'ghs.googlehosted.com. (ou cname.run.app.)', uso: 'Para seu aplicativo principal (app.sciencebit.com.br)' },
            { tipo: 'CNAME', nome: 'iot', destino: 'ghs.googlehosted.com. (ou cname.run.app.)', uso: 'Portal de dispositivos IoT (iot.sciencebit.com.br)' },
            { tipo: 'CNAME', nome: 'api', destino: 'ghs.googlehosted.com. (ou cname.run.app.)', uso: 'Backend / APIs REST (api.sciencebit.com.br)' },
          ],
        },
        {
          num: 5,
          title: 'Salvar e Aguardar Propagação',
          action: 'Clique em "Salvar Alterações". O Registro.br atualiza os servidores DNS normalmente entre 15 minutos e 2 horas.',
        },
      ],
    },
    {
      id: 'gcp-cloud-dns',
      title: 'Método 2: Google Cloud DNS (Para controle avançado via GCP)',
      recommended: false,
      description: 'Você delega os servidores DNS no Registro.br para o Google Cloud DNS, gerenciando tudo centralizado no console do GCP.',
      steps: [
        {
          num: 1,
          title: 'Criar Zona no Cloud DNS',
          action: 'No Google Cloud Console, vá em "Network Services" > "Cloud DNS" e crie uma zona pública para "sciencebit.com.br".',
          command: 'gcloud dns managed-zones create sciencebit-zone --dns-name="sciencebit.com.br." --description="Zona DNS ScienceBit"',
        },
        {
          num: 2,
          title: 'Copiar os Servidores NS fornecidos pelo Google',
          action: 'O Google fornecerá 4 servidores NS (ex: ns-cloud-a1.googledomains.com, ns-cloud-a2...).',
        },
        {
          num: 3,
          title: 'Informar os Servidores no Registro.br',
          action: 'No Registro.br > sciencebit.com.br > DNS, clique em "Alterar Servidores DNS" e insira os 4 endereços NS do Google Cloud.',
        },
      ],
    },
  ],
  sslInfo: {
    title: 'Certificado SSL/HTTPS Automático e Gratuito',
    description: 'Tanto o Google Cloud Run quanto o Firebase Hosting emitem e renovam automaticamente certificados SSL (Let\'s Encrypt / Google Trust Services) para sciencebit.com.br assim que o DNS propaga. Não é necessário pagar nada por certificado SSL!',
  },
};

export const GCP_HOSTING_OPTIONS: GcpHostingOption[] = [
  {
    id: 'ai-studio-cloudrun',
    name: 'Google AI Studio / Cloud Run (Deploy Instantâneo 1-Clique)',
    badge: 'Mais Rápido & Recomendado',
    recommendedFor: 'Projetos rápidos, vitrine de apps ScienceBit, demonstrações e sites com backend integrado.',
    difficulty: 'Muito Fácil',
    costTier: '100% Grátis (Free Tier)',
    description: 'Este próprio projeto no Google AI Studio roda nativamente sobre contêineres gerenciados do Google Cloud Run com HTTPS gratuito, subdomínio automático e SSL instantâneo.',
    prerequisites: [
      'Nenhum conhecimento prévio de terminal necessário',
      'Conta Google ativa',
    ],
    steps: [
      {
        title: 'Passo 1: Personalize sua vitrine de Apps ScienceBit',
        description: 'Utilize o editor para cadastrar seus aplicativos existentes, projetos em desenvolvimento e roadmap futuro de Cloud & IoT.',
      },
      {
        title: 'Passo 2: Clique em "Share" ou "Deploy"',
        description: 'No canto superior direito da tela do Google AI Studio, clique em Deploy para publicar seu site na infraestrutura Google Cloud com link seguro https://*.run.app.',
        tip: 'Você já terá um link público funcional imediatamente para testar ou compartilhar.',
      },
      {
        title: 'Passo 3: Mapear seu domínio sciencebit.com.br',
        description: 'Conecte seu domínio registrado no Registro.br através das configurações de domínio do Cloud Run ou Firebase.',
      },
    ],
  },
  {
    id: 'cloud-run',
    name: 'Google Cloud Run (Produção / Contêiner Docker)',
    badge: 'Escala Infinita, Docker & Microsserviços',
    recommendedFor: 'Aplicações full-stack em React/Node.js, plataformas IoT com WebSockets/MQTT e microsserviços escaláveis.',
    difficulty: 'Fácil',
    costTier: '100% Grátis (Free Tier)',
    description: 'O Cloud Run é a plataforma serverless do Google Cloud ideal para cientistas da computação e engenheiros de software. Executa qualquer contêiner Docker, escala de 0 a milhares de instâncias em segundos e oferece 2 milhões de requisições gratuitas todo mês.',
    prerequisites: [
      'Conta no console Google Cloud (console.cloud.google.com)',
      'Google Cloud SDK (gcloud CLI) instalado no seu computador',
      'Docker ou Node.js instalado',
    ],
    steps: [
      {
        title: 'Passo 1: Instalar e autenticar o Google Cloud SDK',
        description: 'Abra seu terminal e autentique no Google Cloud:',
        command: 'gcloud auth login\ngcloud config set project SEU_ID_DO_PROJETO_GCP',
        tip: 'Se não tiver um projeto criado, crie no console do GCP em console.cloud.google.com',
      },
      {
        title: 'Passo 2: Habilitar as APIs necessárias',
        description: 'Ative o Cloud Run e o Cloud Build com apenas um comando:',
        command: 'gcloud services enable run.googleapis.com cloudbuild.googleapis.com',
      },
      {
        title: 'Passo 3: Fazer o deploy direto a partir do código-fonte',
        description: 'No diretório do projeto, execute o comando de deploy. O Google Cloud vai compilar os arquivos e criar o contêiner automaticamente:',
        command: 'gcloud run deploy sciencebit-web --source . --region us-central1 --allow-unauthenticated',
        tip: 'O parâmetro --allow-unauthenticated permite que qualquer pessoa acesse o site publicamente pela internet.',
      },
      {
        title: 'Passo 4: Mapear o domínio sciencebit.com.br',
        description: 'Vá até Cloud Run > Gerenciar Domínios Personalizados (Custom Domains) > Adicionar Mapeamento > Informe sciencebit.com.br e www.sciencebit.com.br.',
        command: 'gcloud beta run domain-mappings create --service sciencebit-web --domain sciencebit.com.br --region us-central1',
        tip: 'O Google Cloud emitirá e renovará o certificado SSL/HTTPS automaticamente sem custo!',
      },
    ],
  },
  {
    id: 'firebase-hosting',
    name: 'Firebase Hosting (Google Cloud Static Web & CDN)',
    badge: 'Ideal para SPAs React & Máxima Velocidade',
    recommendedFor: 'Landing pages, vitrines de aplicativos e SPAs em React/Vite com CDN global ultra-rápida.',
    difficulty: 'Muito Fácil',
    costTier: '100% Grátis (Free Tier)',
    description: 'O Firebase Hosting é a solução de CDN global do Google para hospedar frontends estáticos. Oferece 10 GB de armazenamento gratuito, 360 MB/dia de transferência, conexão direta com Firebase/Google Cloud e SSL gratuito com 1 clique.',
    prerequisites: [
      'Conta no Firebase Console (firebase.google.com)',
      'Node.js e npm instalados no seu computador',
    ],
    steps: [
      {
        title: 'Passo 1: Instalar o Firebase CLI',
        description: 'Instale a ferramenta oficial de linha de comando do Firebase:',
        command: 'npm install -g firebase-tools\nfirebase login',
      },
      {
        title: 'Passo 2: Compilar os arquivos do site',
        description: 'Gere a pasta de produção otimizada (dist):',
        command: 'npm run build',
        tip: 'Isso cria a pasta "dist" com todos os arquivos HTML/CSS/JS minificados.',
      },
      {
        title: 'Passo 3: Inicializar o Firebase no projeto',
        description: 'Configure o hosting selecionando o diretório público "dist":',
        command: 'firebase init hosting',
        tip: 'Quando perguntar "What do you want to use as your public directory?", digite: dist. E selecione "Yes" para Single-page app.',
      },
      {
        title: 'Passo 4: Publicar no ar!',
        description: 'Publique seu site com um único comando:',
        command: 'firebase deploy --only hosting',
        tip: 'Seu site estará no ar em segundos!',
      },
      {
        title: 'Passo 5: Conectar sciencebit.com.br no Firebase Console',
        description: 'No Firebase Console > Hosting > Adicionar Domínio Personalizado > digite sciencebit.com.br. O Firebase fornecerá os 2 registros de IP para inserir no Registro.br e cuidará do certificado SSL.',
      },
    ],
  },
  {
    id: 'cloud-storage',
    name: 'Google Cloud Storage + Cloud CDN',
    badge: 'Hospedagem em Bucket Estático',
    recommendedFor: 'Armazenamento de arquivos estáticos, assets, firmwares IoT e páginas corporativas distribuídas globalmente.',
    difficulty: 'Intermediário',
    costTier: 'Quase Grátis (< $1/mês)',
    description: 'Armazena seus arquivos HTML, CSS, JS e firmwares de IoT (.bin) em um bucket público do Cloud Storage, com opção de conectar o Cloud CDN para entregar conteúdo com latência mínima em todo o mundo.',
    prerequisites: [
      'Google Cloud SDK instalado',
      'Conta com faturamento ativado no GCP',
    ],
    steps: [
      {
        title: 'Passo 1: Criar o Bucket com o nome do domínio',
        description: 'Crie um bucket com o nome do seu domínio:',
        command: 'gcloud storage buckets create gs://www.sciencebit.com.br --location=us-central1',
      },
      {
        title: 'Passo 2: Tornar os arquivos públicos para leitura',
        description: 'Permita que visitantes da internet vejam o conteúdo:',
        command: 'gcloud storage buckets add-iam-policy-binding gs://www.sciencebit.com.br --member=allUsers --role=roles/storage.objectViewer',
      },
      {
        title: 'Passo 3: Fazer upload dos arquivos do site',
        description: 'Copie os arquivos da pasta dist para o bucket:',
        command: 'gcloud storage cp -r dist/* gs://www.sciencebit.com.br',
      },
      {
        title: 'Passo 4: Definir página inicial e página de erro 404',
        description: 'Configure o index.html e fallback:',
        command: 'gcloud storage buckets update gs://www.sciencebit.com.br --web-main-page-suffix=index.html --web-error-page=index.html',
      },
    ],
  },
];

export const GCP_FREE_TIER_DETAILS = [
  {
    service: 'Google Cloud Run',
    freeQuota: '2.000.000 requisições/mês',
    additionalFree: '360.000 vCPU-segundos e 180 horas de GiB de memória grátis todo mês.',
  },
  {
    service: 'Firebase Hosting',
    freeQuota: '10 GB de armazenamento',
    additionalFree: '360 MB/dia de transferência de dados + SSL e subdomínio gratuito.',
  },
  {
    service: 'Cloud Storage',
    freeQuota: '5 GB de armazenamento padrão',
    additionalFree: '5.000 operações de gravação e 50.000 operações de leitura por mês.',
  },
  {
    service: 'Cloud Firestore (Banco de Dados)',
    freeQuota: '1 GB de dados e 50.000 leituras/dia',
    additionalFree: 'Ideal para telemetria de sensores IoT e autenticação de usuários.',
  },
  {
    service: 'Crédito Inicial Google Cloud',
    freeQuota: '$300 USD (aprox. R$ 1.500)',
    additionalFree: 'Disponível nos primeiros 90 dias para novos cadastros no console GCP.',
  },
];
