/* ────────────────────────────────────────────────────────
   Polen Event Agenda — Premium Botanical Biotech JS Script
   ──────────────────────────────────────────────────────── */

// Supabase Configuration
const CONFIG = {
  supabaseUrl: 'https://vjpbispybouznxicjtvq.supabase.co',
  supabaseKey: 'sb_publishable_aeM2kp9O-Bks31MS8pds5A_T-3OoDi3',
  storageKey: 'polen_august_agenda_unlocked'
};

// Event Curated Database (Agosto 2026)
const EVENTS = [
  {
    id: 1,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Muito alta',
    priorityClass: 'muito-alta',
    name: 'Fi South America / FiSA 2026',
    shortName: 'FiSA 2026',
    dateLabel: '04 a 06 de Agosto 2026',
    dateShort: '04–06/08',
    startDay: 4,
    venue: 'São Paulo Expo, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Ingredientes, alimentos, bebidas, suplementos, health ingredients, natural ingredients.',
    whyInterests: 'Um dos eventos mais fortes do mês para healthy food & beverages. A FiSA se posiciona como plataforma de ingredientes para indústrias de alimentos e bebidas, com frente de health, natural ingredients e pet food. Também lançou o Circuito Health & Wellness, sinal direto de que saudabilidade virou eixo estratégico de inovação alimentar.',
    url: 'https://www.fi-events.com.br/',
    tags: ['Ingredientes', 'B2B', 'Inovação']
  },
  {
    id: 2,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Muito alta',
    priorityClass: 'muito-alta',
    name: 'Aurora Festival 2026',
    shortName: 'Aurora Festival',
    dateLabel: '29 e 30 de Agosto 2026',
    dateShort: '29–30/08',
    startDay: 29,
    venue: 'Hotel Tivoli Mofarrej, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Wellness, longevidade, saúde preventiva, beleza, performance, lifestyle.',
    whyInterests: 'Provavelmente o evento mais “wellness economy” do mês. Posicionamento de festival de wellness e possibilidade de ativações de marca, conteúdo e experiência.',
    url: 'https://www.aurorafestival.com.br/',
    tags: ['Festival', 'Lifestyle', 'Premium']
  },
  {
    id: 3,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Muito alta',
    priorityClass: 'muito-alta',
    name: 'Fitness Brasil Expo 2026',
    shortName: 'Fitness Brasil',
    dateLabel: '27 a 29 de Agosto 2026',
    dateShort: '27–29/08',
    startDay: 27,
    venue: 'Transamerica Expo Center, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Fitness, health, negócios, academias, nutrição esportiva, marcas do setor.',
    whyInterests: 'Muito relevante para mapear fitness como ecossistema de negócios: academias, suplementos, equipamentos, tecnologia, cursos, gestão e marcas. Combina feira, congresso, cursos e networking.',
    url: 'https://fitnessbrasil.com.br/',
    tags: ['Fitness', 'Negócios', 'Ecossistema']
  },
  {
    id: 4,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Muito alta',
    priorityClass: 'muito-alta',
    name: 'Nutrição Brasil 2026',
    shortName: 'Nutrição Brasil',
    dateLabel: '27 a 29 de Agosto 2026',
    dateShort: '27–29/08',
    startDay: 27,
    venue: 'Centro de Convenções Ulysses Guimarães, Brasília/DF',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Nutrição, saúde pública, bem-estar, expo, corrida, marcas.',
    whyInterests: 'Forte para nutrição, saúde pública, marcas, prescritores e produtos. Posiciona-se como “maior congresso de nutrição do Brasil”; inclui exposição aberta e corrida com 1.500 participantes.',
    url: 'https://nutricaobrasil.com.br/',
    tags: ['Congresso', 'Marcas', 'Corrida']
  },
  {
    id: 5,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'Fórum Saúde Digital 2026',
    shortName: 'Fórum Saúde Digital',
    dateLabel: '05 de Agosto 2026',
    dateShort: '05/08',
    startDay: 5,
    venue: 'Sede da AACD, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Healthtech, saúde digital, interoperabilidade, IA, gestores hospitalares.',
    whyInterests: 'Muito bom para healthtech, dados, interoperabilidade e inovação no setor de saúde.',
    url: 'https://tiinside.com.br/',
    tags: ['Healthtech', 'Dados', 'Inovação']
  },
  {
    id: 6,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'Saúde Business Fórum 2026',
    shortName: 'Saúde Business Fórum',
    dateLabel: '04 a 07 de Agosto 2026',
    dateShort: '04–07/08',
    startDay: 4,
    venue: 'Costa do Sauípe, Bahia',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Liderança em saúde, hospitais, operadoras, laboratórios, inovação.',
    whyInterests: 'Menos feira aberta e mais encontro executivo. Relevante para alta liderança em saúde, gestão, IA, força de trabalho, experiência do colaborador e operação.',
    url: 'https://forum.saudebusiness.com/',
    tags: ['Liderança', 'Hospitais', 'Gestão']
  },
  {
    id: 7,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'Expo-Hospital Brasil 2026',
    shortName: 'Expo-Hospital Brasil',
    dateLabel: '11 a 13 de Agosto 2026',
    dateShort: '11–13/08',
    startDay: 11,
    venue: 'Expominas, Belo Horizonte/MG',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Saúde, hospitais, fornecedores, gestão, hotelaria hospitalar, nutrição hospitalar.',
    whyInterests: 'Forte para ecossistema hospitalar e decisores de saúde. Ponto de encontro estratégico para negócios, inovação e parcerias no setor.',
    url: 'https://expohospitalbrasil.com.br/',
    tags: ['Hospitais', 'B2B', 'Nutrição']
  },
  {
    id: 8,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'Wellness Experience 2026',
    shortName: 'Wellness Experience',
    dateLabel: '15 de Agosto 2026',
    dateShort: '15/08',
    startDay: 15,
    venue: 'Alto de Pinheiros, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Medicina do estilo de vida, longevidade, nutrição, movimento, sono, saúde mental, suplementação.',
    whyInterests: 'Evento bem alinhado ao território da Polen. A proposta combina experiências, expositores e palestras com curadoria em medicina do estilo de vida, neurociência, saúde hormonal e NR1.',
    url: 'https://www.sympla.com.br/',
    tags: ['Experiência', 'Longevidade', 'Lifestyle']
  },
  {
    id: 9,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'IAF Conference 2026',
    shortName: 'IAF Conference',
    dateLabel: '21 e 22 de Agosto 2026',
    dateShort: '21–22/08',
    startDay: 21,
    venue: 'Alphaville, Barueri/SP (Híbrido)',
    location: 'sp',
    format: 'Híbrido',
    recorte: 'Saúde da mulher, nutrição materno-infantil, alta performance.',
    whyInterests: 'Bom para nutrição, saúde da mulher e performance. Congresso de saúde da mulher, nutrição materno-infantil e alta performance.',
    url: 'https://iafconference.com.br/',
    tags: ['Saúde da Mulher', 'Nutrição', 'Performance']
  },
  {
    id: 10,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'CIMSI 2026 — Congresso Internacional de Saúde Integrativa',
    shortName: 'CIMSI 2026',
    dateLabel: '21 a 23 de Agosto 2026',
    dateShort: '21–23/08',
    startDay: 21,
    venue: 'Ribeirão Preto/SP',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Saúde integrativa, práticas complementares, cuidado integral.',
    whyInterests: 'Relevante para wellness mais clínico/integrativo. Foco em ciência, prática clínica e cuidado integral.',
    url: 'https://www.cimsi.com.br/',
    tags: ['Integrativa', 'Clínico', 'Ciência']
  },
  {
    id: 11,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'BOT Wellness 2026',
    shortName: 'Body on Top',
    dateLabel: '28 e 29 de Agosto 2026',
    dateShort: '28–29/08',
    startDay: 28,
    venue: 'Teatro CIEE. Rua Tabapuã, 445 – Itaim Bibi, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Terapias corporais não invasivas, estética avançada, longevidade, performance e gestão do mercado de wellness.',
    whyInterests: 'Maior congresso de terapias corporais não invasivas do mundo. Reúne prática, gestão e ciência. Direcionado a médicos, profissionais de estética, gestores de wellness e cirurgiões focados em tratamentos corporais, longevidade e performance.',
    url: 'https://cenacon.iweventos.com.br/site/bot2026/bot-wellness',
    tags: ['Estética', 'Performance', 'Terapias Corporais']
  },
  {
    id: 12,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'Nutriday 2026 — Vitafor',
    shortName: 'Nutriday Vitafor',
    dateLabel: '01 de Agosto 2026',
    dateShort: '01/08',
    startDay: 1,
    venue: 'Transmissão Online / Presencial',
    location: 'outros',
    format: 'Híbrido',
    recorte: 'Suplementação, obesidade, emagrecimento, nutrição esportiva.',
    whyInterests: 'Já passou, mas vale para pós-evento e conteúdo. Posicionado como “maior evento para nutricionistas do Brasil”.',
    url: 'https://science.vitafor.com.br/',
    tags: ['Nutrição', 'Suplementos', 'Conteúdo']
  },
  {
    id: 13,
    cat: 'beauty',
    catLabel: 'Beauty & Estética',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'Estetika 2026',
    shortName: 'Estetika',
    dateLabel: '31 de Julho a 02 de Agosto 2026',
    dateShort: '01–02/08',
    startDay: 1,
    venue: 'São Paulo Expo, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Estética, saúde, beleza e bem-estar.',
    whyInterests: 'Também já passou, mas é muito relevante para pós-evento. Feira/congresso reúne estética e beleza com mais de 180 marcas.',
    url: 'http://congressoestetica.com.br/',
    tags: ['Beleza', 'Estética', 'Marcas']
  },
  {
    id: 14,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'Festival ABC — Andando de Bem com a Vida',
    shortName: 'Festival ABC',
    dateLabel: '01 e 02 de Agosto 2026',
    dateShort: '01–02/08',
    startDay: 1,
    venue: 'Belo Horizonte/MG',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Alimentação saudável, práticas sustentáveis, evento comunitário.',
    whyInterests: 'Evento comunitário com palestras sobre alimentação saudável. Bom para observar wellness público/comunitário.',
    url: 'https://www.sympla.com.br/eventos?s=Festival+ABC',
    tags: ['Comunidade', 'Sustentabilidade']
  },
  {
    id: 15,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'Brazil Climate Solutions / Cubo Itaú',
    shortName: 'Brazil Climate Solutions',
    dateLabel: '03 a 07 de Agosto 2026',
    dateShort: '03–07/08',
    startDay: 3,
    venue: 'Cubo Itaú, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Bioeconomia, sistemas agroalimentares, inovação climática, negócios.',
    whyInterests: 'Não é wellness direto, mas cruza bioeconomia e sistemas agroalimentares. Adjacente para healthy food, ingredientes e sustentabilidade.',
    url: 'https://brazilclimatesolutions.com/',
    tags: ['Clima', 'Sustentabilidade', 'Agro']
  },
  {
    id: 16,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'FIAP Meetup — Food Service 4.0: da cozinha ao feed',
    shortName: 'Food Service 4.0',
    dateLabel: '06 de Agosto 2026',
    dateShort: '06/08',
    startDay: 6,
    venue: 'FIAP Paulista, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Food service, IA, dados, creators, marketing, comportamento.',
    whyInterests: 'Bom para food service, IA, dados, marketing e alimentação como experiência digital.',
    url: 'https://www.meetup.com/',
    tags: ['Food Service', 'IA', 'Digital']
  },
  {
    id: 17,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'Wellness Day — A Vitafor cuida de quem cuida',
    shortName: 'Wellness Day',
    dateLabel: '06 de Agosto 2026',
    dateShort: '06/08',
    startDay: 6,
    venue: 'São José dos Campos/SP',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Suplementos, nutrição, bem-estar profissional.',
    whyInterests: 'Evento pequeno com marca relevante do setor de suplementos/nutrição. Boa pista para relacionamento e ativação regional.',
    url: 'https://www.sympla.com.br/eventos?s=Wellness+Day+Vitafor',
    tags: ['Nutrição', 'Regional']
  },
  {
    id: 18,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'Meeting de Nutrição Farmellis',
    shortName: 'Meeting Farmellis',
    dateLabel: '14 e 15 de Agosto 2026',
    dateShort: '14–15/08',
    startDay: 14,
    venue: 'Serra Gaúcha/RS',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Nutrição, inovação, mercado.',
    whyInterests: 'Evento de nutrição regional, referência no calendário de congressos de nutrição. Interessante para mapear influência fora do eixo SP.',
    url: 'https://www.meetingfarmellis.com.br/',
    tags: ['Nutrição', 'Congresso', 'Regional']
  },
  {
    id: 19,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'CBDEH — Congresso Brasileiro para o Desenvolvimento do Edifício Hospitalar',
    shortName: 'CBDEH 2026',
    dateLabel: '19 a 21 de Agosto 2026',
    dateShort: '19–21/08',
    startDay: 19,
    venue: 'Brasília/DF',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Arquitetura hospitalar, experiência do paciente, operação.',
    whyInterests: 'Muito bom para a tese de espaço como infraestrutura de saúde: arquitetura hospitalar, ambientes de cuidado e wellness real estate.',
    url: 'https://abdeh.org.br/',
    tags: ['Hospitalar', 'Real Estate']
  },
  {
    id: 20,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'TecSaúde Brasil 2026',
    shortName: 'TecSaúde Brasil',
    dateLabel: '20 a 23 de Agosto 2026',
    dateShort: '20–23/08',
    startDay: 20,
    venue: 'Unoeste Guarujá/SP',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Tecnologia em saúde, inovação.',
    whyInterests: 'Convergência entre inovação e tecnologia no setor brasileiro. Bom para healthtech e educação em saúde.',
    url: 'https://www.unoeste.br/',
    tags: ['Healthtech', 'Inovação', 'Educação']
  },
  {
    id: 21,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: '1º Simpósio de Nutrição Hospitalar do Hospital Nove de Julho',
    shortName: 'Simpósio Nutrição Nove de Julho',
    dateLabel: '21 de Agosto 2026',
    dateShort: '21/08',
    startDay: 21,
    venue: 'São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Nutrição clínica, hospitalar, profissionais de saúde.',
    whyInterests: 'Evento técnico para profissionais de saúde, útil para nutrição clínica/hospitalar e relacionamento com especialistas.',
    url: 'https://www.sympla.com.br/eventos?s=Simp%C3%B3sio+Nutri%C3%A7%C3%A3o+Hospital+Nove+de+Julho',
    tags: ['Nutrição', 'Clínica', 'Técnico']
  },
  {
    id: 22,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'SouBio Experience 2026',
    shortName: 'SouBio Experience',
    dateLabel: '21 e 22 de Agosto 2026',
    dateShort: '21–22/08',
    startDay: 21,
    venue: 'Florianópolis/SC',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Saúde, bem-estar, gastronomia.',
    whyInterests: 'Pista qualificada no ecossistema de saúde e bem-estar. Requer validação individual antes de uso comercial mais agressivo.',
    url: 'https://soubioexperience.com.br',
    tags: ['Gastronomia', 'Experiência']
  },
  {
    id: 23,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'Retiro de Yoga e Autoconhecimento — Romã Ashram',
    shortName: 'Retiro de Yoga',
    dateLabel: '21 a 23 de Agosto 2026',
    dateShort: '21–23/08',
    startDay: 21,
    venue: 'Presencial',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Yoga, respiração, meditação, autoconhecimento.',
    whyInterests: 'Menor prioridade B2B, mas bom para observar wellness experiencial e retiros imersivos.',
    url: 'https://romashram.com.br/',
    tags: ['Yoga', 'Retiro', 'Imersão']
  },
  {
    id: 24,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'Startup Summit 2026',
    shortName: 'Startup Summit',
    dateLabel: '26 a 28 de Agosto 2026',
    dateShort: '26–28/08',
    startDay: 26,
    venue: 'CentroSul, Florianópolis/SC',
    location: 'outros',
    format: 'Presencial',
    recorte: 'HealthTechs, DeepTechs, IA, SaaS, marketing.',
    whyInterests: 'Tem trilhas de HealthTechs e IA. Relevante para mapear healthtechs, investidores e startups de consumer health.',
    url: 'https://startupsummit.com.br/',
    tags: ['Startups', 'Healthtech', 'Investimento']
  },
  {
    id: 25,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: '100 Open Startups — Open Innovation',
    shortName: '100 Open Startups',
    dateLabel: '27 e 28 de Agosto 2026',
    dateShort: '27–28/08',
    startDay: 27,
    venue: 'Online',
    location: 'outros',
    format: 'Online',
    recorte: 'Hospitais, operadoras, farmacêuticas, biomarcadores.',
    whyInterests: 'Programação inclui casos envolvendo hospitais, healthtechs e saúde mental. Relevante para cases de inovação aberta em saúde.',
    url: 'https://100os.net/',
    tags: ['Inovação Aberta', 'Online']
  },
  {
    id: 26,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'II Simpósio de Saúde Mental do HCor',
    shortName: 'Simpósio Saúde Mental HCor',
    dateLabel: '28 de Agosto 2026',
    dateShort: '28/08',
    startDay: 28,
    venue: 'São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Saúde mental, instituições de saúde, prevenção, cuidado.',
    whyInterests: 'Relevante para saúde mental, instituições de saúde e conteúdo de prevenção/cuidado.',
    url: 'https://www.sympla.com.br/eventos?s=Simp%C3%B3sio+de+Sa%C3%BAde+Mental+HCor',
    tags: ['Saúde Mental', 'Hospitalar']
  },
  {
    id: 27,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'PsiDay 2026',
    shortName: 'PsiDay',
    dateLabel: '28 de Agosto 2026',
    dateShort: '28/08',
    startDay: 28,
    venue: 'São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Saúde mental, psicologia, profissionais e clínicas.',
    whyInterests: 'Pode ser útil para saúde mental, psicologia, profissionais e clínicas.',
    url: 'https://www.sympla.com.br/eventos?s=PsiDay+Vittude',
    tags: ['Psicologia', 'Saúde Mental']
  },
  {
    id: 28,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Adjacente',
    priorityClass: 'media',
    name: 'Feira da Nutrição Unimed Tubarão',
    shortName: 'Feira Nutrição Unimed',
    dateLabel: '31 de Agosto 2026',
    dateShort: '31/08',
    startDay: 31,
    venue: 'Tubarão/SC',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Evento regional de nutrição, serviços locais de saúde.',
    whyInterests: 'Evento regional de nutrição; relevante para capilaridade e marcas locais de saúde.',
    url: 'https://www.unimed.coop.br/site/web/tubarao',
    tags: ['Nutrição', 'Regional']
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
            event_label: 'Agenda de Eventos Agosto 2026 - Retorno',
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
    const whatsapp = document.getElementById('gate-whatsapp').value.trim();
    const company = document.getElementById('gate-company').value.trim();
    const segment = document.getElementById('gate-segment').value;
    const role = document.getElementById('gate-role').value;
    
    if (!name || !whatsapp || !company || !segment || !role) {
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
      whatsapp: whatsapp,
      source: `Agenda Agosto 2026 | ${originString}`,
      created_at: new Date().toISOString()
    };
    
    const globalLeadsPayload = {
      name: name,
      email: email,
      whatsapp: whatsapp,
      interest: `Agenda Agosto 2026 | Empresa: ${company} | Segmento: ${segment} | Cargo: ${role} | WhatsApp: ${whatsapp} | ${originString}`,
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
          event_label: 'Agenda de Eventos Agosto 2026',
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
