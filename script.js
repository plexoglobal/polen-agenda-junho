/* ────────────────────────────────────────────────────────
   Polen Event Agenda — Premium Botanical Biotech JS Script
   ──────────────────────────────────────────────────────── */

// Supabase Configuration
const CONFIG = {
  supabaseUrl: 'https://vjpbispybouznxicjtvq.supabase.co',
  supabaseKey: 'sb_publishable_aeM2kp9O-Bks31MS8pds5A_T-3OoDi3',
  storageKey: 'polen_september_agenda_unlocked'
};

// Event Curated Database (Setembro 2026)
const EVENTS = [
  {
    id: 1,
    cat: "health",
    catLabel: "Health & Clintech",
    priority: "Muito alta",
    priorityClass: "muito-alta",
    name: "MV Experience Forum 2026",
    shortName: "MV Forum",
    dateLabel: "02 e 03 de Setembro 2026",
    dateShort: "02–03/09",
    startDay: 2,
    venue: "Transamerica Expo Center, São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Healthtech, saúde digital, gestão, IA",
    whyInterests: "O grande encontro de inovação e tecnologia para saúde no Brasil. Ideal para conectar-se com hospitais, operadoras e mapear o ecossistema de saúde digital e tecnologia assistencial.",
    url: "https://mvexperienceforum.com.br/",
    tags: [
      "Healthtech",
      "Saúde Digital",
      "IA"
    ]
  },
  {
    id: 2,
    cat: "foodbev",
    catLabel: "Healthy Food & Beverages",
    priority: "Alta",
    priorityClass: "alta",
    name: "RINN22 — Congresso de Nutriômicas",
    shortName: "RINN22",
    dateLabel: "02 a 04 de Setembro 2026",
    dateShort: "02–04/09",
    startDay: 2,
    venue: "Híbrido, Rio de Janeiro",
    location: "outros",
    format: "Híbrido",
    recorte: "Nutrição de precisão, ciência, saúde, nutriômica",
    whyInterests: "Fundamental para atualização técnica em nutrição. Conectando ciência à prática, o evento é ideal para profissionais que buscam inovar através da nutrição de precisão e saúde baseada em dados.",
    url: "https://rinn22.com/",
    tags: [
      "Nutrição",
      "Ciência",
      "Dados"
    ]
  },
  {
    id: 3,
    cat: "beauty",
    catLabel: "Beauty & Estética",
    priority: "Muito alta",
    priorityClass: "muito-alta",
    name: "Beauty Fair 2026",
    shortName: "Beauty Fair",
    dateLabel: "05 a 08 de Setembro 2026",
    dateShort: "05–08/09",
    startDay: 5,
    venue: "Expo Center Norte, São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Beauty, estética, cosméticos, varejo, creators",
    whyInterests: "O maior ativo comercial do mês para o setor. Como a maior feira das Américas, é parada obrigatória para negócios, networking e tendências para clínicas, e-commerces e varejo de cosméticos.",
    url: "https://www.beautyfair.com.br/",
    tags: [
      "Beauty",
      "Estética",
      "Varejo"
    ]
  },
  {
    id: 4,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Alta",
    priorityClass: "alta",
    name: "Convidados do SYATT",
    shortName: "SYATT",
    dateLabel: "04 e 05 de Setembro 2026",
    dateShort: "04–05/09",
    startDay: 4,
    venue: "Barueri/SP",
    location: "sp",
    format: "Presencial",
    recorte: "Nutrição, empreendedorismo, IA, GLP-1, saúde holística",
    whyInterests: "Onde nutrição encontra negócios. Primeiro evento temático de Nutrição e Empreendedorismo do Brasil, abordando tendências fortes como IA, análogos de GLP-1 e saúde holística.",
    url: "https://www.sympla.com.br/eventos?s=Imers%C3%A3o+SYATT",
    tags: [
      "Empreendedorismo",
      "Nutrição",
      "Inovação"
    ]
  },
  {
    id: 5,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Evolução 360 — Workshop Training",
    shortName: "Evolução 360",
    dateLabel: "04 a 07 de Setembro 2026",
    dateShort: "04–07/09",
    startDay: 4,
    venue: "Águas da Prata/SP",
    location: "outros",
    format: "Presencial",
    recorte: "Performance, endurance, wellness, recuperação",
    whyInterests: "Uma imersão no wellness moderno. Excelente para explorar os mercados de performance, endurance, mente e recuperação esportiva, focado no alto rendimento sustentável.",
    url: "https://evolucao360.com/",
    tags: [
      "Performance",
      "Endurance",
      "Esporte"
    ]
  },
  {
    id: 6,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Gaia Longevidade 2026",
    shortName: "Gaia Longevidade",
    dateLabel: "12 de Setembro 2026",
    dateShort: "12/09",
    startDay: 12,
    venue: "Vinhedo/SP",
    location: "outros",
    format: "Presencial",
    recorte: "Longevidade, 50+, saúde, estética, bem-estar",
    whyInterests: "Explore a longevidade como mercado. O evento conecta saúde, bem-estar, negócios e experiências para a geração 50+, reunindo profissionais e marcas inovadoras.",
    url: "http://www.gaialongevidade.com.br/",
    tags: [
      "Longevidade",
      "Negócios",
      "Saúde"
    ]
  },
  {
    id: 7,
    cat: "health",
    catLabel: "Health & Clintech",
    priority: "Adjacente",
    priorityClass: "media",
    name: "10º Meeting Manipulatta — Longevity Revolution",
    shortName: "Meeting Manipulatta",
    dateLabel: "12 de Setembro 2026",
    dateShort: "12/09",
    startDay: 12,
    venue: "Belo Horizonte/MG",
    location: "outros",
    format: "Presencial",
    recorte: "Medicina do estilo de vida, longevidade, saúde",
    whyInterests: "Referência em medicina do estilo de vida e longevidade. Uma excelente oportunidade de relacionamento para médicos e nutricionistas, unindo narrativa clínica e inovações de consumo.",
    url: "https://www.sympla.com.br/eventos?s=10%C2%BA+Meeting+Manipulatta",
    tags: [
      "Longevidade",
      "Clínica",
      "Prescrição"
    ]
  },
  {
    id: 8,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Alta",
    priorityClass: "alta",
    name: "Talks Unimed-BH — Mercado e Geração Wellness",
    shortName: "Talks Unimed-BH",
    dateLabel: "15 de Setembro 2026",
    dateShort: "15/09",
    startDay: 15,
    venue: "Cine Theatro Brasil, Belo Horizonte",
    location: "outros",
    format: "Presencial",
    recorte: "Wellness, saúde, tecnologia, experiência",
    whyInterests: "O palco ideal para discutir inovações que aproximam saúde, bem-estar, tecnologia e experiência. Um encontro de alto nível focado no 'mercado e geração wellness'.",
    url: "https://talksunimedbh.com.br/",
    tags: [
      "Wellness",
      "Tecnologia",
      "Experiência"
    ]
  },
  {
    id: 9,
    cat: "health",
    catLabel: "Health & Clintech",
    priority: "Alta",
    priorityClass: "alta",
    name: "HIS — Healthcare Innovation Show 2026",
    shortName: "HIS 2026",
    dateLabel: "16 e 17 de Setembro 2026",
    dateShort: "16–17/09",
    startDay: 16,
    venue: "São Paulo Expo",
    location: "sp",
    format: "Presencial",
    recorte: "Healthtech, saúde digital, inovação, IA, startups",
    whyInterests: "O maior e mais importante evento de inovação em saúde da América Latina. Indispensável para healthtechs, conectando líderes, startups e investidores para moldar o futuro do setor.",
    url: "https://his.saudebusiness.com/",
    tags: [
      "Healthtech",
      "Inovação",
      "Startups"
    ]
  },
  {
    id: 10,
    cat: "foodbev",
    catLabel: "Healthy Food & Beverages",
    priority: "Alta",
    priorityClass: "alta",
    name: "Congresso Internacional de Nutrição Funcional VP",
    shortName: "Nutrição VP",
    dateLabel: "16 a 20 de Setembro 2026",
    dateShort: "16–20/09",
    startDay: 16,
    venue: "São Paulo + online",
    location: "sp",
    format: "Híbrido",
    recorte: "Nutrição funcional, ciência, prática clínica, performance",
    whyInterests: "Altamente relevante para nutricionistas e médicos prescritores. Oferece a melhor atualização científica e prática clínica em nutrição funcional, suplementos e saúde integrativa.",
    url: "https://nutricao.com",
    tags: [
      "Nutrição Funcional",
      "Ciência",
      "Saúde Integrativa"
    ]
  },
  {
    id: 11,
    cat: "health",
    catLabel: "Health & Clintech",
    priority: "Alta",
    priorityClass: "alta",
    name: "MEV Global — II Conferência de Medicina do Estilo de Vida",
    shortName: "MEV Global",
    dateLabel: "18 a 20 de Setembro 2026",
    dateShort: "18–20/09",
    startDay: 18,
    venue: "Presencial (Brasil)",
    location: "outros",
    format: "Presencial",
    recorte: "Medicina do estilo de vida, autocuidado médico, prática clínica",
    whyInterests: "Estratégico para posicionamento em wellness. Um congresso inovador que une prática clínica de consultório e autocuidado do médico especialista com foco em prevenção e qualidade de vida.",
    url: "https://site.mevglobal.com.br",
    tags: [
      "Medicina de Estilo",
      "Autocuidado",
      "Clínica"
    ]
  },
  {
    id: 12,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Adjacente",
    priorityClass: "media",
    name: "ENAF Campinas",
    shortName: "ENAF Campinas",
    dateLabel: "18 e 19 de Setembro 2026",
    dateShort: "18–19/09",
    startDay: 18,
    venue: "PUC Campinas",
    location: "outros",
    format: "Presencial",
    recorte: "Fitness, treinamento funcional, saúde, longevidade",
    whyInterests: "Ponto de encontro tradicional do mercado fitness e bem-estar. Ideal para profissionais de educação física, consultoria online e saúde focada em emagrecimento saudável e treinamento.",
    url: "https://www.sympla.com.br/eventos?s=ENAF+Campinas",
    tags: [
      "Fitness",
      "Treinamento",
      "Saúde"
    ]
  },
  {
    id: 13,
    cat: "health",
    catLabel: "Health & Clintech",
    priority: "Alta",
    priorityClass: "alta",
    name: "Health Meeting Brasil / SINDIHOSPA",
    shortName: "Health Meeting BR",
    dateLabel: "22 a 24 de Setembro 2026",
    dateShort: "22–24/09",
    startDay: 22,
    venue: "FIERGS, Porto Alegre/RS",
    location: "outros",
    format: "Presencial",
    recorte: "Saúde, gestão, healthtech, inovação, hospitais",
    whyInterests: "A maior feira de saúde do Sul do Brasil. Fundamental para networking fora do eixo SP, reunindo gestores, startups, instituições e tecnologia aplicada à inovação hospitalar.",
    url: "https://hmbrasilfeiras.com.br/",
    tags: [
      "Hospitais",
      "Gestão",
      "Inovação"
    ]
  },
  {
    id: 14,
    cat: "foodbev",
    catLabel: "Healthy Food & Beverages",
    priority: "Alta",
    priorityClass: "alta",
    name: "Beverage Day 2026",
    shortName: "Beverage Day",
    dateLabel: "22 e 23 de Setembro 2026",
    dateShort: "22–23/09",
    startDay: 22,
    venue: "São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Bebidas, indústria, consumo, inovação",
    whyInterests: "O principal encontro para inovações em healthy beverages. Essencial para entender as mudanças de comportamento de consumo, tendências em formulação, IA e novas colaborações.",
    url: "https://bevday.com.br/",
    tags: [
      "Bebidas",
      "Indústria",
      "Consumo"
    ]
  },
  {
    id: 15,
    cat: "beauty",
    catLabel: "Beauty & Estética",
    priority: "Muito alta",
    priorityClass: "muito-alta",
    name: "in-cosmetics Latin America",
    shortName: "in-cosmetics",
    dateLabel: "23 e 24 de Setembro 2026",
    dateShort: "23–24/09",
    startDay: 23,
    venue: "Expo Center Norte, São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Ingredientes cosméticos, P&D, clean beauty, personal care",
    whyInterests: "Altamente estratégico para o mercado de clean beauty. É o evento líder na América Latina para matérias-primas e P&D, conectando tendências, fornecedores e inovação em cuidados pessoais.",
    url: "https://www.in-cosmetics.com/latin-america/pt-br.html",
    tags: [
      "Ingredientes",
      "P&D",
      "Clean Beauty"
    ]
  },
  {
    id: 16,
    cat: "health",
    catLabel: "Health & Clintech",
    priority: "Muito alta",
    priorityClass: "muito-alta",
    name: "CBIS — Congresso de Informática em Saúde",
    shortName: "CBIS",
    dateLabel: "23 a 25 de Setembro 2026",
    dateShort: "23–25/09",
    startDay: 23,
    venue: "Brasília/DF",
    location: "outros",
    format: "Presencial",
    recorte: "Saúde digital, interoperabilidade, IA, governança de dados",
    whyInterests: "O epicentro da informática em saúde no Brasil. Essencial para startups e profissionais interessados em saúde digital, interoperabilidade, governança de dados e inovação ética.",
    url: "https://sbis.org.br/conteudos/eventos/eventos-cbis/cbis26/",
    tags: [
      "Saúde Digital",
      "Dados",
      "Informática"
    ]
  },
  {
    id: 17,
    cat: "health",
    catLabel: "Health & Clintech",
    priority: "Alta",
    priorityClass: "alta",
    name: "CONIGIS — Congresso de Gestão e Inovação",
    shortName: "CONIGIS",
    dateLabel: "23 e 24 de Setembro 2026",
    dateShort: "23–24/09",
    startDay: 23,
    venue: "Online",
    location: "outros",
    format: "Online",
    recorte: "Gestão, inovação, healthtech, saúde digital",
    whyInterests: "Acessível e estratégico para líderes de saúde. Conecta profissionais e instituições globalmente para discutir as inovações que estão transformando a gestão e a prática digital.",
    url: "https://hubsaude.org.br/",
    tags: [
      "Gestão",
      "Inovação",
      "Digital"
    ]
  },
  {
    id: 18,
    cat: "health",
    catLabel: "Health & Clintech",
    priority: "Alta",
    priorityClass: "alta",
    name: "HealthTech Summit Rio 2026",
    shortName: "HealthTech Rio",
    dateLabel: "23 e 24 de Setembro 2026",
    dateShort: "23–24/09",
    startDay: 23,
    venue: "Centro de Convenções RB1, Rio de Janeiro",
    location: "outros",
    format: "Presencial",
    recorte: "Healthtech, saúde digital, gestão, tecnologia",
    whyInterests: "Um radar vital para inovações healthtech no Rio de Janeiro. Excelente ambiente para networking e atualização sobre o cenário carioca de saúde digital e gestão médica.",
    url: "https://assespro.rio/healthtech2026",
    tags: [
      "Healthtech",
      "Rio",
      "Gestão"
    ]
  },
  {
    id: 19,
    cat: "health",
    catLabel: "Health & Clintech",
    priority: "Muito alta",
    priorityClass: "muito-alta",
    name: "CBN 2026 — Congresso Brasileiro de Nutrologia",
    shortName: "Congresso Nutrologia",
    dateLabel: "24 a 26 de Setembro 2026",
    dateShort: "24–26/09",
    startDay: 24,
    venue: "Centro de Convenções Frei Caneca, São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Nutrologia, longevidade, obesidade, suplementação",
    whyInterests: "Edição histórica de 30 anos do maior congresso de nutrologia do país. Imperdível para médicos interessados em avanços de suplementação, saúde metabólica, obesidade e longevidade.",
    url: "https://abran.org.br/cbn2026/inscricao",
    tags: [
      "Nutrologia",
      "Longevidade",
      "Clínica"
    ]
  },
  {
    id: 20,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Muito alta",
    priorityClass: "muito-alta",
    name: "8º Fórum & Festival Longevidade",
    shortName: "Fórum Longevidade",
    dateLabel: "24 a 26 de Setembro 2026",
    dateShort: "24–26/09",
    startDay: 24,
    venue: "Parque Ibirapuera / Bienal, São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Longevidade, 50+, saúde, inovação, cidades",
    whyInterests: "Um dos eventos mais alinhados à revolução do bem-estar como infraestrutura de vida. Explora de forma imersiva os novos comportamentos de consumo, cidades e inovação para a geração 50+.",
    url: "https://www.longevidade.com.br",
    tags: [
      "Longevidade",
      "Cidades",
      "Inovação"
    ]
  },
  {
    id: 21,
    cat: "health",
    catLabel: "Health & Clintech",
    priority: "Alta",
    priorityClass: "alta",
    name: "Techstars Startup Weekend Health",
    shortName: "Startup Weekend",
    dateLabel: "25 a 27 de Setembro 2026",
    dateShort: "25–27/09",
    startDay: 25,
    venue: "Ibrawork, São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Healthtech, startups, inovação em saúde",
    whyInterests: "Imersão intensa no universo empreendedor de saúde. Ótimo ambiente para mapear problemas reais do setor, criar conexões com fundadores early-stage e mentores de healthtechs.",
    url: "https://zeroonzestartups.com.br",
    tags: [
      "Startups",
      "Imersão",
      "Healthtech"
    ]
  },
  {
    id: 22,
    cat: "foodbev",
    catLabel: "Healthy Food & Beverages",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Feira Sabor Nacional",
    shortName: "Sabor Nacional",
    dateLabel: "26 e 27 de Setembro 2026",
    dateShort: "26–27/09",
    startDay: 26,
    venue: "Cinemateca Brasileira, São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Food, bebidas, pequenos produtores, gastronomia",
    whyInterests: "Celebra a gastronomia independente e pequenos produtores. Excelente radar para observar tendências em ingredientes naturais, experiências de consumo e alimentos artesanais focados no sabor.",
    url: "https://www.sympla.com.br/evento/feira-sabor-nacional/3491664",
    tags: [
      "Gastronomia",
      "Artesanal",
      "Produtores"
    ]
  },
  {
    id: 23,
    cat: "beauty",
    catLabel: "Beauty & Estética",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Fest Hair Brasil",
    shortName: "Fest Hair Brasil",
    dateLabel: "27 a 29 de Setembro 2026",
    dateShort: "27–29/09",
    startDay: 27,
    venue: "Centro de Convenções Salvador",
    location: "outros",
    format: "Presencial",
    recorte: "Beauty, cabelo, unhas, estética, creators",
    whyInterests: "Um marco para o setor de beauty e estética no Nordeste. Reúne masterclasses e summits, essencial para mapear tendências capilares e conectar-se com profissionais e varejistas.",
    url: "https://festhairbrasil.com",
    tags: [
      "Beauty",
      "Cabelo",
      "Varejo"
    ]
  },
  {
    id: 24,
    cat: "health",
    catLabel: "Health & Clintech",
    priority: "Adjacente",
    priorityClass: "media",
    name: "CBEB — Congresso de Engenharia Biomédica",
    shortName: "CBEB",
    dateLabel: "28/09 a 02/10 2026",
    dateShort: "28/09–02/10",
    startDay: 28,
    venue: "Fortaleza/CE",
    location: "outros",
    format: "Presencial",
    recorte: "Tecnologia médica, engenharia biomédica, inovação",
    whyInterests: "O principal encontro de inovação clínica e tecnológica do Brasil. Relevante para desenvolvimento avançado em tecnologia médica, engenharia biomédica e dispositivos de ponta em saúde.",
    url: "https://sbeb.org.br/cbeb2026/",
    tags: [
      "Biomédica",
      "Tecnologia",
      "Inovação"
    ]
  },
  {
    id: 25,
    cat: "foodbev",
    catLabel: "Healthy Food & Beverages",
    priority: "Adjacente",
    priorityClass: "media",
    name: "ENALFAR — Encontro de Alimentos UFPB",
    shortName: "ENALFAR",
    dateLabel: "29 e 30 de Setembro 2026",
    dateShort: "29–30/09",
    startDay: 29,
    venue: "João Pessoa/PB",
    location: "outros",
    format: "Presencial",
    recorte: "Alimentos, P&D, ciência, mercado, nutrição",
    whyInterests: "Conecta academia, P&D e mercado. Ótima oportunidade técnica para focar na inovação e no desenvolvimento sustentável da área de ciência e tecnologia de alimentos no Nordeste.",
    url: "https://www.instagram.com/enalfar_ufpb/",
    tags: [
      "Alimentos",
      "Ciência",
      "P&D"
    ]
  },
  {
    id: 26,
    cat: "foodbev",
    catLabel: "Healthy Food & Beverages",
    priority: "Adjacente",
    priorityClass: "media",
    name: "SAFL — Semana da Alimentação Fora do Lar",
    shortName: "SAFL",
    dateLabel: "14 a 18 de Setembro 2026",
    dateShort: "14–18/09",
    startDay: 14,
    venue: "São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Alimentação fora do lar, varejo, bares, hospitalidade",
    whyInterests: "Uma imersão valiosa na nova infraestrutura de food service. Relevante para compreender como as tendências de hospitalidade, delivery e mudança de consumo moldam os espaços de refeição.",
    url: "https://salaoabrasel.com.br",
    tags: [
      "Food Service",
      "Hospitalidade",
      "Varejo"
    ]
  },
  {
    id: 27,
    cat: "foodbev",
    catLabel: "Healthy Food & Beverages",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Salão Abrasel 2026",
    shortName: "Salão Abrasel",
    dateLabel: "15 e 16 de Setembro 2026",
    dateShort: "15–16/09",
    startDay: 15,
    venue: "Bienal do Ibirapuera, São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Equipamentos, alimentos, bebidas, tecnologia, delivery",
    whyInterests: "O maior encontro de tecnologia e negócios para bares e restaurantes. Reúne a cadeia completa, desde logística até equipamentos inovadores, essencial para expansão no food service.",
    url: "https://salaoabrasel.com.br",
    tags: [
      "Bares",
      "Restaurantes",
      "Tecnologia"
    ]
  },
  {
    id: 28,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Equipotel 2026",
    shortName: "Equipotel",
    dateLabel: "15 a 18 de Setembro 2026",
    dateShort: "15–18/09",
    startDay: 15,
    venue: "Expo Center Norte, São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Hospitalidade, academias, fitness, turismo",
    whyInterests: "Essencial para explorar o mercado de wellness hospitality. Destaca como grandes hotéis e empreendimentos estão utilizando espaços de fitness e bem-estar como diferencial de atração e fidelização.",
    url: "https://www.equipotel.com.br",
    tags: [
      "Hospitalidade",
      "Hotelaria",
      "Fitness"
    ]
  },
  {
    id: 29,
    cat: "foodbev",
    catLabel: "Healthy Food & Beverages",
    priority: "Adjacente",
    priorityClass: "media",
    name: "iFood Move",
    shortName: "iFood Move",
    dateLabel: "16 e 17 de Setembro 2026",
    dateShort: "16–17/09",
    startDay: 16,
    venue: "São Paulo Expo",
    location: "sp",
    format: "Presencial",
    recorte: "Delivery, canais de venda, comportamento, varejo",
    whyInterests: "Ponto de encontro obrigatório para o ecossistema de delivery e conveniência. Vital para entender novas dinâmicas de venda multicanal e comportamento do consumidor final.",
    url: "https://www.ifoodmove.com.br",
    tags: [
      "Delivery",
      "Varejo",
      "Comportamento"
    ]
  },
  {
    id: 30,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Mais Pausa — O convite",
    shortName: "Mais Pausa",
    dateLabel: "05 de Setembro 2026",
    dateShort: "05/09",
    startDay: 5,
    venue: "Bauru/SP",
    location: "outros",
    format: "Presencial",
    recorte: "Saúde e longevidade feminina",
    whyInterests: "Iniciativa imersiva focada no universo do cuidado e longevidade feminina. Relevante para profissionais observarem os movimentos de nicho voltados à educação em saúde e bem-estar.",
    url: "https://www.sympla.com.br/eventos?s=Mais+Pausa+O+convite",
    tags: [
      "Saúde da Mulher",
      "Nicho",
      "Comunidade"
    ]
  },
  {
    id: 31,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Noronha Weekend",
    shortName: "Noronha Weekend",
    dateLabel: "03 a 06 de Setembro 2026",
    dateShort: "03–06/09",
    startDay: 3,
    venue: "Fernando de Noronha",
    location: "outros",
    format: "Presencial",
    recorte: "Esporte, música, gastronomia, lifestyle premium",
    whyInterests: "Uma referência de evento que funde wellness como lifestyle, conectando esporte, mar e gastronomia em uma experiência premium que dita o novo padrão de bem-estar.",
    url: "https://www.ingresse.com",
    tags: [
      "Lifestyle",
      "Premium",
      "Esporte"
    ]
  },
  {
    id: 32,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Raposo Run Party",
    shortName: "Raposo Run",
    dateLabel: "19 de Setembro 2026",
    dateShort: "19/09",
    startDay: 19,
    venue: "São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Corrida, bem-estar urbano, entretenimento",
    whyInterests: "Um exemplo inovador de entretenimento esportivo, combinando corrida e bem-estar em um espaço comercial. Excelente para mapear as tendências de ativação de marca em estilo de vida urbano.",
    url: "https://www.sympla.com.br/eventos?s=Raposo+Run+Party",
    tags: [
      "Corrida",
      "Ativação",
      "Urbano"
    ]
  },
  {
    id: 33,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Aperol Spritz & Pilates",
    shortName: "Pilates & Aperol",
    dateLabel: "26 de Setembro 2026",
    dateShort: "26/09",
    startDay: 26,
    venue: "São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Pilates, gastronomia, convivência social",
    whyInterests: "Um evento descontraído que mistura a prática de pilates com gastronomia e convivência. Interessante como radar social, evidenciando como o wellness se integra aos momentos de lazer.",
    url: "https://www.sympla.com.br/eventos?s=Aperol+Spritz+%26+Pilates",
    tags: [
      "Pilates",
      "Social",
      "Lazer"
    ]
  },
  {
    id: 34,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Funcional Pet — Super Shopping Osasco",
    shortName: "Funcional Pet",
    dateLabel: "26 de Setembro 2026",
    dateShort: "26/09",
    startDay: 26,
    venue: "Osasco/SP",
    location: "sp",
    format: "Presencial",
    recorte: "Pet wellness, treinamento, comunidade",
    whyInterests: "Iniciativa singular focada no vínculo entre tutores e animais. Excelente para identificar a ascensão do pet wellness e dinâmicas criativas de interação esportiva na comunidade.",
    url: "https://www.sympla.com.br/eventos?s=Funcional+Pet+Super+Shopping+Osasco",
    tags: [
      "Pet",
      "Comunidade",
      "Funcional"
    ]
  },
  {
    id: 35,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Yoga no Parque Ibirapuera",
    shortName: "Yoga Ibirapuera",
    dateLabel: "20 de Setembro 2026",
    dateShort: "20/09",
    startDay: 20,
    venue: "São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Yoga ao ar livre, comportamento urbano",
    whyInterests: "Prática ao ar livre focada no público geral. Interessante para observar as dinâmicas orgânicas de engajamento urbano com a saúde preventiva e o movimento na cidade.",
    url: "https://www.sympla.com.br/eventos?s=Yoga+Parque+Ibirapuera",
    tags: [
      "Yoga",
      "Urbano",
      "Comunidade"
    ]
  },
  {
    id: 36,
    cat: "wellness",
    catLabel: "Wellness & Bem-estar",
    priority: "Adjacente",
    priorityClass: "media",
    name: "PicNic no Festival Music In The Park",
    shortName: "PicNic Wellness",
    dateLabel: "19 de Setembro 2026",
    dateShort: "19/09",
    startDay: 19,
    venue: "São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Cultura, jazz, wellness coletivo",
    whyInterests: "Demonstra na prática como o bem-estar evolui para uma experiência coletiva e cultural. A combination de jazz e wellness atrai consumidores em busca de qualidade de vida aliada à arte.",
    url: "https://www.meetup.com/find/?keywords=PicNic%20Music%20In%20The%20Park",
    tags: [
      "Cultura",
      "Lifestyle",
      "Coletivo"
    ]
  },
  {
    id: 37,
    cat: "foodbev",
    catLabel: "Healthy Food & Beverages",
    priority: "Adjacente",
    priorityClass: "media",
    name: "Palestra Nutrição Bariátrica",
    shortName: "Nutrição Bariátrica",
    dateLabel: "16 de Setembro 2026",
    dateShort: "16/09",
    startDay: 16,
    venue: "São Paulo",
    location: "sp",
    format: "Presencial",
    recorte: "Nutrição clínica, bariátrica, educação",
    whyInterests: "Sessão direcionada ao aperfeiçoamento prático. Excelente oportunidade para profissionais focados nas demandas altamente técnicas da nutrição clínica e no manejo de pacientes bariátricos.",
    url: "https://www.eventbrite.com.br/d/brazil--s%C3%A3o-paulo/nutri%C3%A7%C3%A3o-bari%C3%A1trica/",
    tags: [
      "Nutrição",
      "Clínica",
      "Educação"
    ]
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
            event_label: 'Agenda de Eventos Setembro 2026 - Retorno',
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
      source: `Agenda Setembro 2026 | ${originString}`,
      created_at: new Date().toISOString()
    };
    
    const globalLeadsPayload = {
      name: name,
      email: email,
      whatsapp: whatsapp,
      interest: `Agenda Setembro 2026 | Empresa: ${company} | Segmento: ${segment} | Cargo: ${role} | WhatsApp: ${whatsapp} | ${originString}`,
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
          event_label: 'Agenda de Eventos Setembro 2026',
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
