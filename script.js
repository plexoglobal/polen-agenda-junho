/* ────────────────────────────────────────────────────────
   Polen Event Agenda — Premium Botanical Biotech JS Script
   ──────────────────────────────────────────────────────── */

// Supabase Configuration
const CONFIG = {
  supabaseUrl: 'https://vjpbispybouznxicjtvq.supabase.co',
  supabaseKey: 'sb_publishable_aeM2kp9O-Bks31MS8pds5A_T-3OoDi3',
  storageKey: 'polen_july_agenda_unlocked'
};

// Event Curated Database (July 2026)
const EVENTS = [
  {
    id: 1,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'CIIPES — Congresso Internacional de Inovação e Pesquisa em Educação na Saúde',
    shortName: 'CIIPES 2026',
    dateLabel: '02 a 04 de Julho 2026',
    dateShort: '02–04/07',
    startDay: 2,
    venue: 'FMUSP, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Healthtech, educação em saúde, IA, telessaúde, saúde mental e inovação em educação na saúde.',
    whyInterests: 'Profissionais e lideranças interessados em radar de inovação em saúde, educação médica, IA aplicada, novos modelos de cuidado, telessaúde e saúde mental.',
    url: 'https://agencia.fapesp.br/congresso-internacional-de-inovacao-e-pesquisa-em-educacao-na-saude/57502?utm_source=chatgpt.com',
    tags: ['Saúde Digital', 'IA', 'Educação']
  },
  {
    id: 2,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Média',
    priorityClass: 'media',
    name: '2º Simpósio de Nutrição da Universidade de Brasília',
    shortName: 'Simpósio Nutrição UnB',
    dateLabel: '02 e 03 de Julho 2026',
    dateShort: '02–03/07',
    startDay: 2,
    venue: 'Universidade de Brasília, Brasília/DF',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Nutrição, saúde pública e debates técnicos e científicos.',
    whyInterests: 'Estudantes, pesquisadores e profissionais de saúde interessados em nutrição clínica, saúde pública, políticas de alimentação e debates científicos na área.',
    url: 'https://painelobesidade.com.br/eventos/congresso-internacional-de-inovacao-e-pesquisa-em-educacao-na-saude-ciipes/?utm_source=chatgpt.com',
    tags: ['Acadêmico', 'Nutrição', 'Saúde Pública']
  },
  {
    id: 3,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Média',
    priorityClass: 'media',
    name: 'VII Simpósio de Atividade Física e Saúde da Região Sudeste',
    shortName: 'Simpósio Atividade Física',
    dateLabel: '02 a 04 de Julho 2026',
    dateShort: '02–04/07',
    startDay: 2,
    venue: 'Uberaba/MG',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Fitness, saúde, atividade física, movimento, prevenção e saúde coletiva.',
    whyInterests: 'Profissionais de educação física, fisioterapeutas, gestores de wellness, e pesquisadores de saúde coletiva focados em promoção de movimento e prevenção de doenças.',
    url: 'https://painelobesidade.com.br/eventos/congresso-internacional-de-inovacao-e-pesquisa-em-educacao-na-saude-ciipes/?utm_source=chatgpt.com',
    tags: ['Fitness', 'Saúde Coletiva', 'Prevenção']
  },
  {
    id: 4,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Baixa',
    priorityClass: 'media',
    name: 'Caminhada noturna no Ibirapuera',
    shortName: 'Caminhada Ibirapuera',
    dateLabel: '02 de Julho 2026 (Recorrente)',
    dateShort: '02/07',
    startDay: 2,
    venue: 'Parque do Ibirapuera, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Atividade física urbana, caminhada noturna, social wellness e integração de comunidades locais.',
    whyInterests: 'Marcas e criadores de conteúdo focados em wellness buscando observar hábitos urbanos de socialização ativa e saúde integrativa fora do ambiente de academia.',
    url: 'https://www.meetup.com/pt-BR/fun-friends-meetup-group/events/pmjbztyjckbdb/',
    tags: ['Caminhada', 'Urbano', 'Social']
  },
  {
    id: 5,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'Congresso Hi-Nutrition 2026',
    shortName: 'Hi-Nutrition 2026',
    dateLabel: '03 de Julho 2026',
    dateShort: '03/07',
    startDay: 3,
    venue: 'Centro de Convenções Distrito Anhembi, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Nutrição, suplementação, performance metabólica, longevidade, saúde da mulher, eixo intestino-cérebro, GLP-1 e microbiota.',
    whyInterests: 'Nutricionistas, médicos integrativos, marcas de suplementos, produtos funcionais, profissionais focados em performance esportiva e envelhecimento saudável.',
    url: 'https://congresso.hinutrition.com.br/',
    tags: ['Suplementação', 'Longevidade', 'Microbiota']
  },
  {
    id: 6,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Média/Alta',
    priorityClass: 'media-alta',
    name: 'Nutrição Esportiva de Excelência 2026',
    shortName: 'Nutrição Esportiva Excelência',
    dateLabel: '03 e 04 de Julho 2026',
    dateShort: '03–04/07',
    startDay: 3,
    venue: 'Centro de Convenções Frei Caneca, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Nutrição esportiva, performance, suplementos e educação nutricional.',
    whyInterests: 'Profissionais e marcas do setor de nutrição esportiva, performance, suplementação alimentar e criadores de conteúdo voltados a lifestyle ativo.',
    url: 'https://www.instagram.com/p/DP_Y-V-gIbG/?utm_source=chatgpt.com',
    tags: ['Esportivo', 'Suplementos', 'Performance']
  },
  {
    id: 7,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Alta',
    priorityClass: 'alta',
    name: '[Oficina] Transforme buscas no Google em novos pacientes — Livance',
    shortName: 'Oficina Google Livance',
    dateLabel: '10 e 21 de Julho 2026',
    dateShort: '10 & 21/07',
    startDay: 10,
    venue: 'Livance Vila Madalena, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Marketing para médicos e clínicas, presença digital, SEO e atração de pacientes.',
    whyInterests: 'Médicos, psicólogos, fisioterapeutas, gestores de consultórios e clínicas de saúde que buscam otimizar a aquisição de pacientes por canais digitais.',
    url: 'https://luma.com/livance-ym6d?locale=pt&utm_source=chatgpt.com',
    tags: ['Marketing', 'Clínicas', 'Presença Digital']
  },
  {
    id: 8,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Média',
    priorityClass: 'media',
    name: 'CONVIGISAÚDE — Congresso Internacional de Vigilância em Saúde e Prevenção',
    shortName: 'CONVIGISAÚDE',
    dateLabel: '17 e 18 de Julho 2026',
    dateShort: '17–18/07',
    startDay: 17,
    venue: 'Online (YouTube)',
    location: 'outros',
    format: 'Online',
    recorte: 'Saúde pública, prevenção de doenças, vigilância epidemiológica e sanitária.',
    whyInterests: 'Sanitaristas, gestores de saúde coletiva, pesquisadores e profissionais interessados no debate sobre saúde preventiva institucional e dados epidemiológicos.',
    url: 'https://doity.com.br/congressoconvigisaude',
    tags: ['Prevenção', 'Saúde Pública', 'Online']
  },
  {
    id: 9,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Média',
    priorityClass: 'media',
    name: '2026 Musclecontest Brazil',
    shortName: 'Musclecontest Brazil',
    dateLabel: '17 a 19 de Julho 2026',
    dateShort: '17–19/07',
    startDay: 17,
    venue: 'Curitiba/PR',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Bodybuilding, fitness, performance extrema, estética corporal e comunidades de alta intensidade.',
    whyInterests: 'Marcas de suplementos, vestuário fitness, academias, criadores de conteúdo e profissionais do mercado focado em fisiculturismo e alta performance.',
    url: 'https://musclecontestinternational.com/brz-2026-musclecontest-brasil-event/?utm_source=chatgpt.com',
    tags: ['Fitness', 'Comunidade', 'Estética']
  },
  {
    id: 10,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Baixa',
    priorityClass: 'media',
    name: 'Trilha na Cantareira — Outdoor Wellness',
    shortName: 'Trilha na Cantareira',
    dateLabel: '18 de Julho 2026',
    dateShort: '18/07',
    startDay: 18,
    venue: 'Parque Estadual da Cantareira, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Outdoor wellness, trilhas na natureza, movimento e conexão com o meio ambiente.',
    whyInterests: 'Profissionais de marketing e marcas de wellness interessados em observar o comportamento de consumo outdoor, comunidades de trilhas e hábitos de bem-estar ativo urbano.',
    url: 'https://www.meetup.com/pt-BR/pt-BR/fun-friends-meetup-group/events/315078159/?utm_source=chatgpt.com',
    tags: ['Outdoor', 'Comunidade', 'Natureza']
  },
  {
    id: 11,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Média/Alta',
    priorityClass: 'media-alta',
    name: 'Construindo flexibilidade psicológica no trabalho em saúde — Livance',
    shortName: 'Flexibilidade Psicológica Livance',
    dateLabel: '21 de Julho 2026',
    dateShort: '21/07',
    startDay: 21,
    venue: 'Livance Perdizes, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Saúde mental de profissionais da saúde, flexibilidade psicológica, autocobrança e bem-estar no trabalho.',
    whyInterests: 'Médicos, profissionais de saúde mental, líderes de RH hospitalar e gestores focados em bem-estar corporativo para profissionais de cuidado.',
    url: 'https://luma.com/livance-gq3l?locale=pt&utm_source=chatgpt.com',
    tags: ['Mental', 'Profissionais', 'B2B']
  },
  {
    id: 12,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Média/Alta',
    priorityClass: 'media-alta',
    name: 'FIPAN 2026',
    shortName: 'FIPAN 2026',
    dateLabel: '21 a 24 de Julho 2026',
    dateShort: '21–24/07',
    startDay: 21,
    venue: 'Expo Center Norte, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Food service, panificação, ingredientes, produtos funcionais e saudabilidade em categorias tradicionais.',
    whyInterests: 'Fabricantes de ingredientes saudáveis, fornecedores de panificação funcional/glúten-free, marcas de alimentos alternativos e operadoras de food service buscando saudabilidade.',
    url: 'https://smcbr.com.br/feiras-eventos/?utm_source=chatgpt.com',
    tags: ['Ingredientes', 'Panificação', 'Food Service']
  },
  {
    id: 13,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'Open Health — O Futuro da Saúde: Tendências e aplicações no Brasil',
    shortName: 'Open Health Brasil',
    dateLabel: '22 de Julho 2026',
    dateShort: '22/07',
    startDay: 22,
    venue: 'São Paulo/SP (Página Sympla / Validação recomendada)',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Healthtech, open health, dados de saúde, inteligência artificial e ecossistema de inovação médica.',
    whyInterests: 'Lideranças de operadoras de saúde, startups, diretores de tecnologia em hospitais e profissionais de regulação e inovação em saúde digital.',
    url: 'https://beta.sympla.com.br/evento/open-health-o-futuro-da-saude-tendencias-e-aplicacoes-no-brasil/3411479?utm_source=chatgpt.com',
    tags: ['Healthtech', 'Dados', 'Inovação']
  },
  {
    id: 14,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'CONNAE — XI Congresso Norte e Nordeste de Nutrição Clínica e Esportiva',
    shortName: 'CONNAE 2026',
    dateLabel: '22 a 24 de Julho 2026',
    dateShort: '22–24/07',
    startDay: 22,
    venue: 'Natal/RN',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Nutrição clínica, esportiva, alimentos funcionais e suplementação preventiva.',
    whyInterests: 'Marcas de suplementação e alimentos saudáveis buscando expansão regional, nutricionistas clínicos e esportivos e expositores do ecossistema de saúde do Norte/Nordeste.',
    url: 'https://www.connae.com.br/',
    tags: ['Nutrição Clínica', 'Nordeste', 'Suplementos']
  },
  {
    id: 15,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Média/Alta',
    priorityClass: 'media-alta',
    name: 'AI Summit Brasil — etapa IPT São Paulo',
    shortName: 'AI Summit IPT',
    dateLabel: '22 e 23 de Julho 2026',
    dateShort: '22–23/07',
    startDay: 22,
    venue: 'IPT, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Inteligência Artificial, dados, automação, inovação tecnológica adjacente a saúde e bem-estar.',
    whyInterests: 'Empreendedores e marcas de wellness, healthtech e beauty interessados em aplicações práticas de IA e processamento de dados em produtos e serviços.',
    url: 'https://aisummit.ia.br/programacao-etapa-ipt-sao-paulo/?utm_source=chatgpt.com',
    tags: ['Inteligência Artificial', 'Dados', 'Inovação']
  },
  {
    id: 16,
    cat: 'beauty',
    catLabel: 'Beauty & Estética',
    priority: 'Muito alta',
    priorityClass: 'muito-alta',
    name: 'MBNE — Congresso de Nutrição Estética & Beauty Nutrition Expo 2026',
    shortName: 'Beauty Nutrition Expo (MBNE)',
    dateLabel: '24 e 25 de Julho 2026',
    dateShort: '24–25/07',
    startDay: 24,
    venue: 'São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Nutrição estética, nutracêuticos, suplementação, clean beauty, saúde da mulher, pele, cabelo e unhas.',
    whyInterests: 'Marcas de nutricosméticos, suplementos alimentares, clínicas de estética, dermatologistas e nutricionistas interessados em tratamentos integrativos da beleza e saúde feminina.',
    url: 'https://www.e4eventos.com/novo-nutri%C3%A7%C3%A3o-est%C3%A9tica',
    tags: ['Nutracêuticos', 'Saúde da Mulher', 'Estética']
  },
  {
    id: 17,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Baixa/Média',
    priorityClass: 'media',
    name: 'SP City Marathon',
    shortName: 'SP City Marathon',
    dateLabel: '26 de Julho 2026',
    dateShort: '26/07',
    startDay: 26,
    venue: 'São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Esporte, corrida de rua, social wellness e comunidades ativas de estilo de vida saudável.',
    whyInterests: 'Marcas de activewear, recovery, assessoria esportiva, alimentos funcionais e marketing focado em ativações de lifestyle ativo e social wellness.',
    url: 'https://prefeitura.sp.gov.br/web/turismo/w/confira-os-principais-detalhes-dos-eventos-que-integram-o-calend%C3%A1rio-estrat%C3%A9gico-da-prefeitura-de-s%C3%A3o-paulo?utm_source=chatgpt.com',
    tags: ['Corrida', 'Ativação', 'Lifestyle']
  },
  {
    id: 18,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Alta',
    priorityClass: 'alta',
    name: '11º Fórum Latino-Americano de Qualidade e Segurança na Saúde — Einstein / IHI',
    shortName: 'Fórum Qualidade Einstein',
    dateLabel: '27 a 30 de Julho 2026',
    dateShort: '27–30/07',
    startDay: 27,
    venue: 'Albert Einstein, São Paulo/SP (Híbrido)',
    location: 'sp',
    format: 'Híbrido',
    recorte: 'Qualidade hospitalar, segurança do paciente, gestão em saúde, inovação assistencial e saúde digital.',
    whyInterests: 'Executivos de operadoras e hospitais, gestores de saúde, fundadores de healthtechs focadas em B2B assistencial e profissionais de segurança do cuidado.',
    url: 'https://ensino.einstein.br/evento_forum_latino_americano_qualidade_seg_p0613/p?utm_source=chatgpt.com',
    tags: ['Hospitais', 'Gestão', 'Saúde Digital']
  },
  {
    id: 19,
    cat: 'beauty',
    catLabel: 'Beauty & Estética',
    priority: 'Muito alta',
    priorityClass: 'muito-alta',
    name: 'Estetika — Congresso e Feira',
    shortName: 'Estetika 2026',
    dateLabel: '31 de Julho a 02 de Agosto 2026',
    dateShort: '31/07–02/08',
    startDay: 31,
    venue: 'São Paulo Expo, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Estética aplicada, cosmetologia, novos tratamentos, equipamentos de beleza, saúde integrativa e bem-estar.',
    whyInterests: 'Clínicas de estética, esteticistas, fisioterapeutas dermatofuncionais, marcas de cosméticos profissionais e investidores do setor de beleza e longevidade.',
    url: 'https://congressoestetika.com.br/?utm_source=chatgpt.com',
    tags: ['Beleza', 'Congresso', 'Estética']
  },
  {
    id: 20,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'Indústria Saudável / MEVÃO 2026',
    shortName: 'Indústria Saudável (MEVÃO)',
    dateLabel: '31 de Julho a 02 de Agosto 2026',
    dateShort: '31/07–02/08',
    startDay: 31,
    venue: 'São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Bebidas saudáveis, sucos funcionais, kombucha, chás, confeitaria saudável, grãos e inovações industriais de saudabilidade.',
    whyInterests: 'Marcas de healthy food, investidores de D2C, diretores de P&D de alimentos, distribuidores de produtos naturais e lojistas de varejo saudável.',
    url: 'https://industriasaudavel.mevao.com.br/?utm_source=chatgpt.com',
    tags: ['Bebidas', 'Alimentos Saudáveis', 'Indústria']
  },
  {
    id: 21,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Baixa/Média',
    priorityClass: 'media',
    name: 'Founders Running Club São Paulo',
    shortName: 'Founders Running Club',
    dateLabel: 'Recorrente (Julho 2026)',
    dateShort: 'Recorrente',
    startDay: 1,
    venue: 'São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Corrida, networking informal para founders, investidores, operadores e creators.',
    whyInterests: 'Marcas de wellness buscando observar conexões informais de negócios, networking esportivo (social running) e comunidades corporativas ativas.',
    url: 'https://luma.com/rz3n9p9r',
    tags: ['Corrida', 'Founders', 'Networking']
  }
];

// Active State Variables
let activeCategory = 'all';
let activeLocation = 'all';
let currentStep = 1;

// DOM Elements
const elements = {
  leadGate: document.getElementById('leadGate'),
  gateForm: document.getElementById('gateForm'),
  gateCta: document.getElementById('gateCta'),
  gateSpinner: document.getElementById('gateSpinner'),
  eventsGrid: document.getElementById('eventsGrid'),
  gridCount: document.getElementById('gridCount'),
  emptyState: document.getElementById('emptyState'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),
  categoryBtns: document.querySelectorAll('#categoryFilterRow .flt-btn'),
  locationBtns: document.querySelectorAll('#locationFilterRow .flt-btn'),
  detailOverlay: document.getElementById('detailOverlay'),
  detailSheet: document.getElementById('detailSheet'),
  sheetContent: document.getElementById('sheetContent'),
  sheetCloseBtn: document.getElementById('sheetCloseBtn'),
  gateEmail: document.getElementById('gate-email')
};

// ─── GATE FUNCTIONALITY ───

// Check if already unlocked
function checkGateState() {
  const isUnlocked = localStorage.getItem(CONFIG.storageKey) === 'true';
  if (isUnlocked) {
    elements.leadGate.style.display = 'none';
    document.body.classList.remove('gate-active');
  } else {
    elements.leadGate.classList.add('active');
    document.body.classList.add('gate-active');
  }
}

// Traffic Source Capture (First Touch / Last Touch Session Attribution)
function captureTrafficSource() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    const referrer = document.referrer || '';

    const existing = sessionStorage.getItem('polen_traffic_source');

    // We set or overwrite if UTMs are present in the URL, or if we don't have any saved source yet
    if (utmSource || !existing) {
      let cleanSource = 'Direto';
      let referrerDomain = '';
      
      if (referrer) {
        try {
          referrerDomain = new URL(referrer).hostname.toLowerCase();
        } catch (e) {}
      }

      if (utmSource) {
        cleanSource = utmSource;
      } else if (referrerDomain) {
        if (referrerDomain.includes('instagram.com')) {
          cleanSource = 'Instagram';
        } else if (referrerDomain.includes('linkedin.com') || referrerDomain.includes('lnkd.in')) {
          cleanSource = 'LinkedIn';
        } else if (referrerDomain.includes('facebook.com')) {
          cleanSource = 'Facebook';
        } else if (referrerDomain.includes('t.co') || referrerDomain.includes('twitter.com') || referrerDomain.includes('x.com')) {
          cleanSource = 'X/Twitter';
        } else if (referrerDomain.includes('google.com')) {
          cleanSource = 'Google Search';
        } else {
          cleanSource = referrerDomain;
        }
      }

      const trafficData = {
        source: cleanSource,
        utm_source: utmSource || '',
        utm_medium: utmMedium || '',
        utm_campaign: utmCampaign || '',
        referrer: referrer
      };

      sessionStorage.setItem('polen_traffic_source', JSON.stringify(trafficData));
    }
  } catch (e) {
    console.warn('Failed to capture traffic source:', e);
  }
}

function getTrafficSource() {
  try {
    const saved = sessionStorage.getItem('polen_traffic_source');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {}
  return { source: 'Direto', utm_source: '', utm_medium: '', utm_campaign: '', referrer: '' };
}

// Rest API Post helper
async function postToSupabase(tableName, payload) {
  const url = `${CONFIG.supabaseUrl}/rest/v1/${tableName}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': CONFIG.supabaseKey,
        'Authorization': `Bearer ${CONFIG.supabaseKey}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Supabase error on ${tableName}]:`, response.status, errorText);
      return false;
    }
    return true;
  } catch (error) {
    console.error(`[Connection error on ${tableName}]:`, error);
    return false;
  }
}

// Check if email already exists in Supabase
async function checkEmailInBase(email) {
  const url = `${CONFIG.supabaseUrl}/rest/v1/rpc/check_lead_exists`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': CONFIG.supabaseKey,
        'Authorization': `Bearer ${CONFIG.supabaseKey}`
      },
      body: JSON.stringify({ email_to_check: email.trim().toLowerCase() })
    });
    
    if (response.ok) {
      const exists = await response.json();
      return !!exists;
    }
  } catch (e) {
    console.error('Error checking email existence via RPC:', e);
  }
  return false;
}

// Form Submission
async function handleGateSubmit(e) {
  e.preventDefault();
  
  if (currentStep === 1) {
    const email = elements.gateEmail.value.trim();
    if (!email || !email.includes('@')) {
      alert('Por favor, insira um e-mail corporativo válido.');
      return;
    }
    
    elements.gateCta.classList.add('loading');
    
    try {
      const exists = await checkEmailInBase(email);
      
      if (exists) {
        console.log('[Polen Lead Capture] Existing user detected. Bypassing Supabase write.');
        
        const traffic = getTrafficSource();
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            event_category: 'lead_capture',
            event_label: 'Agenda de Eventos Julho 2026 - Retorno',
            company_name: 'Existing User',
            business_segment: 'Existing User',
            job_role: 'Existing User',
            traffic_source: traffic.source,
            utm_source: traffic.utm_source,
            utm_medium: traffic.utm_medium,
            utm_campaign: traffic.utm_campaign,
            referrer: traffic.referrer
          });
        }
        
        unlockAndDismiss();
      } else {
        // New user: go to Step 2
        elements.gateCta.classList.remove('loading');
        currentStep = 2;
        
        // Lock email input
        elements.gateEmail.setAttribute('readonly', 'true');
        elements.gateEmail.style.opacity = '0.7';
        
        // Expand step 2 fields
        const step2 = document.getElementById('gate-step-2');
        if (step2) step2.classList.add('active');
        
        // Change button label
        elements.gateCta.querySelector('.cta-text').textContent = 'Concluir Cadastro →';
      }
    } catch (err) {
      console.error('Error during email check:', err);
      // Fallback: if check fails, go to step 2 anyway to not lock out users
      elements.gateCta.classList.remove('loading');
      currentStep = 2;
      const step2 = document.getElementById('gate-step-2');
      if (step2) step2.classList.add('active');
      elements.gateCta.querySelector('.cta-text').textContent = 'Concluir Cadastro →';
    }
  } else if (currentStep === 2) {
    const email = elements.gateEmail.value.trim();
    const name = document.getElementById('gate-name').value.trim();
    const company = document.getElementById('gate-company').value.trim();
    const segment = document.getElementById('gate-segment').value;
    const role = document.getElementById('gate-role').value;
    
    if (!name || !company || !segment || !role) {
      alert('Por favor, preencha todos os campos para liberar o seu acesso.');
      return;
    }
    
    elements.gateCta.classList.add('loading');
    
    const traffic = getTrafficSource();
    const originString = `Origem: ${traffic.source}` + 
      (traffic.utm_source ? `, utm_source: ${traffic.utm_source}` : '') +
      (traffic.utm_medium ? `, utm_medium: ${traffic.utm_medium}` : '') +
      (traffic.utm_campaign ? `, utm_campaign: ${traffic.utm_campaign}` : '') +
      (traffic.referrer ? `, ref: ${traffic.referrer}` : '');
    
    const agendaPayload = {
      nome: name,
      email: email,
      whatsapp: '',
      source: `Agenda Julho 2026 | ${originString}`,
      created_at: new Date().toISOString()
    };
    
    const globalLeadsPayload = {
      name: name,
      email: email,
      interest: `Agenda Julho 2026 | Empresa: ${company} | Segmento: ${segment} | Cargo: ${role} | ${originString}`,
      created_at: new Date().toISOString()
    };
    
    try {
      const results = await Promise.allSettled([
        postToSupabase('leads_agenda_sp_2026', agendaPayload),
        postToSupabase('leads', globalLeadsPayload)
      ]);
      console.log('[Polen Lead Capture] Save complete. Results:', results);
      
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          event_category: 'lead_capture',
          event_label: 'Agenda de Eventos Julho 2026',
          company_name: company,
          business_segment: segment,
          job_role: role,
          traffic_source: traffic.source,
          utm_source: traffic.utm_source,
          utm_medium: traffic.utm_medium,
          utm_campaign: traffic.utm_campaign,
          referrer: traffic.referrer
        });
      }
    } catch (err) {
      console.error('Error saving new lead:', err);
    } finally {
      unlockAndDismiss();
    }
  }
}

function unlockAndDismiss() {
  localStorage.setItem(CONFIG.storageKey, 'true');
  
  elements.leadGate.classList.add('dismissed');
  document.body.classList.remove('gate-active');
  
  setTimeout(() => {
    elements.leadGate.style.display = 'none';
    elements.gateCta.classList.remove('loading');
  }, 500);
}

// ─── FILTER AND GRID RENDERING ───

// Build Single Event Card HTML
function createCardElement(ev) {
  const card = document.createElement('div');
  card.className = `ecard ${ev.cat}`;
  card.innerHTML = `
    <span class="card-date-meta">${ev.dateShort} · 2026</span>
    <h2 class="card-title">${ev.shortName}</h2>
    <div class="card-info-row">
      <span class="card-dot-ico"></span>
      <span>${ev.format} · ${ev.venue.split(',')[0]}</span>
    </div>
    <div class="card-tags">
      ${ev.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
    </div>
    <span class="card-action-hint">detalhes →</span>
  `;
  
  // Click callback
  card.addEventListener('click', () => openDetailsModal(ev));
  return card;
}

// Main Filtered Render logic
function renderEventsGrid() {
  elements.eventsGrid.innerHTML = '';
  
  // Filtering logic
  const filtered = EVENTS.filter(ev => {
    const matchCat = activeCategory === 'all' || ev.cat === activeCategory;
    const matchLoc = activeLocation === 'all' || 
                     (activeLocation === 'sp' && ev.location === 'sp') ||
                     (activeLocation === 'outros' && ev.location !== 'sp');
    return matchCat && matchLoc;
  });
  
  // Chronological sorting (startDay ascending, using id as stable secondary key)
  filtered.sort((a, b) => {
    if (a.startDay !== b.startDay) {
      return a.startDay - b.startDay;
    }
    return a.id - b.id;
  });
  
  // Update count title
  if (filtered.length === 0) {
    elements.gridCount.textContent = '0 eventos encontrados';
    elements.emptyState.style.display = 'flex';
  } else {
    elements.gridCount.textContent = `${filtered.length} evento${filtered.length > 1 ? 's' : ''} curado${filtered.length > 1 ? 's' : ''}`;
    elements.emptyState.style.display = 'none';
  }
  
  // Inject and fade-in cards staggered
  filtered.forEach((ev, index) => {
    const cardEl = createCardElement(ev);
    elements.eventsGrid.appendChild(cardEl);
    
    // Stagger transition
    setTimeout(() => {
      cardEl.classList.add('loaded');
    }, index * 45 + 30);
  });
}

// Setup Event Listeners for Filters
function setupFilters() {
  // Category filter triggers
  elements.categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      renderEventsGrid();
    });
  });
  
  // Location filter triggers
  elements.locationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.locationBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeLocation = btn.getAttribute('data-filter');
      renderEventsGrid();
    });
  });
  
  // Reset buttons empty triggers
  elements.resetFiltersBtn.addEventListener('click', () => {
    // Reset category
    elements.categoryBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('#categoryFilterRow [data-filter="all"]').classList.add('active');
    activeCategory = 'all';
    
    // Reset location
    elements.locationBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('#locationFilterRow [data-filter="all"]').classList.add('active');
    activeLocation = 'all';
    
    renderEventsGrid();
  });
}

// ─── DETAILS MODAL SHEET ───

// Open modal sheet
function openDetailsModal(ev) {
  // SVGs icons definitions
  const icoCalendar = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
  const icoPin = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
  const icoTarget = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;
  const icoTrend = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"/><polyline points="17 6 23 6 23 12"/></svg>`;
  
  elements.sheetContent.innerHTML = `
    <div class="details-hero ${ev.cat}">
      <span class="details-hero-deco" aria-hidden="true">${ev.dateShort.split('/')[0]}</span>
      <div class="details-category">${ev.catLabel}</div>
      <h2 class="details-title">${ev.name}</h2>
      
      <div class="details-meta-row">
        <span class="details-meta-badge">${icoCalendar} ${ev.dateLabel}</span>
        <span class="details-meta-badge">${icoPin} ${ev.venue}</span>
      </div>
    </div>
    
    <div class="details-blocks">
      <div class="details-block">
        <div class="details-block-label">${icoTarget} Recorte do Evento</div>
        <p class="details-block-text">${ev.recorte}</p>
      </div>
      
      <div class="details-block">
        <div class="details-block-label">${icoTrend} Pra quem é interessante</div>
        <p class="details-block-text">${ev.whyInterests}</p>
      </div>
    </div>
    
    <div class="details-footer">
      <a href="${ev.url}" target="_blank" rel="noopener" class="details-cta">
        <span>Acessar site do evento ↗</span>
      </a>
      <span class="details-brand-label">curadoria estratégica</span>
    </div>
  `;
  
  elements.detailOverlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

// Close modal sheet
function closeDetailsModal() {
  elements.detailOverlay.classList.remove('open');
  // Only restore background scroll if the lead gate is not currently blocking the view
  if (!elements.leadGate.classList.contains('active') && elements.leadGate.style.display !== 'none') {
    // If gate is not active, scroll should be enabled
    document.body.style.overflow = '';
  } else if (localStorage.getItem(CONFIG.storageKey) === 'true') {
    document.body.style.overflow = '';
  }
}

// Setup Sheet Events
function setupDetailsSheet() {
  elements.sheetCloseBtn.addEventListener('click', closeDetailsModal);
  
  // Close clicking on backdrop overlay
  elements.detailOverlay.addEventListener('click', (e) => {
    if (e.target === elements.detailOverlay) {
      closeDetailsModal();
    }
  });
  
  // Close pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailsModal();
    }
  });
}

// ─── INITIALIZATION ───
function init() {
  captureTrafficSource();
  checkGateState();
  setupFilters();
  setupDetailsSheet();
  
  // Custom select dropdowns controller (from naturaltech-2026.html)
  const selectWrappers = document.querySelectorAll('.gate-select');
  selectWrappers.forEach(wrapper => {
    const trigger = wrapper.querySelector('.custom-select-trigger');
    const options = wrapper.querySelectorAll('.custom-option');
    const realSelect = wrapper.parentElement.querySelector('select');
    
    if (!trigger || !realSelect) return;
    
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      selectWrappers.forEach(w => {
        if (w !== wrapper) w.classList.remove('open');
      });
      wrapper.classList.toggle('open');
    });
    
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const val = option.getAttribute('data-value');
        const text = option.textContent;
        
        trigger.textContent = text;
        trigger.classList.add('has-value');
        realSelect.value = val;
        
        realSelect.dispatchEvent(new Event('change'));
        wrapper.classList.remove('open');
      });
    });
  });

  // Close custom selects when clicking anywhere outside
  document.addEventListener('click', () => {
    selectWrappers.forEach(w => w.classList.remove('open'));
  });
  
  // Form submission connector
  elements.gateForm.addEventListener('submit', handleGateSubmit);

  
  // First render
  renderEventsGrid();
}

// Run when ready
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
