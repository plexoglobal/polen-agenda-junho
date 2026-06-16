/* ────────────────────────────────────────────────────────
   Polen Event Agenda — Premium Botanical Biotech JS Script
   ──────────────────────────────────────────────────────── */

// Supabase Configuration
const CONFIG = {
  supabaseUrl: 'https://vjpbispybouznxicjtvq.supabase.co',
  supabaseKey: 'sb_publishable_aeM2kp9O-Bks31MS8pds5A_T-3OoDi3',
  storageKey: 'polen_june_agenda_unlocked'
};

// Event Curated Database (June 2026)
const EVENTS = [
  {
    id: 1,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'Fispal Tecnologia + TecnoCarne 2026',
    shortName: 'Fispal Tecnologia',
    dateLabel: '16 a 19 de Junho 2026',
    dateShort: '16–19/06',
    venue: 'São Paulo Expo, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Food & beverages, indústria, tecnologia, embalagem, processamento.',
    whyInterests: 'Excelente oportunidade para mapear marcas de alimentos/bebidas inovadoras, ingredientes funcionais, operações logísticas e inovações industriais de ponta. A Fispal se consolida como o maior evento de tecnologia para a indústria de alimentos e bebidas da América do Sul.',
    url: 'https://www.fispaltecnologia.com.br/en/',
    tags: ['Indústria', 'Ingredientes', 'B2B']
  },
  {
    id: 2,
    cat: 'beauty',
    catLabel: 'Beauty & Estética',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'AMWC Brazil 2026 — Congresso de Medicina Estética',
    shortName: 'AMWC Brazil',
    dateLabel: '17 a 19 de Junho + Cursos em 20/06',
    dateShort: '17–20/06',
    venue: 'Centro de Convenções Frei Caneca, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Beauty, estética médica, dermatologia, longevidade, anti-aging.',
    whyInterests: 'Canal estratégico fortíssimo para o mapeamento de marcas de beauty/wellness premium, clínicas de estética avançada e medical beauty. O congresso é referência absoluta em medicina estética na América Latina, reunindo mais de 250 speakers internacionais.',
    url: 'https://www.amwcbrazil.com.br/',
    tags: ['Clínico', 'Longevidade', 'Premium']
  },
  {
    id: 3,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Média/Alta',
    priorityClass: 'media-alta',
    name: 'Saúde e Inteligência Artificial: da inovação ao impacto real',
    shortName: 'Saúde e IA',
    dateLabel: '17 de Junho 2026 · 9h às 12h',
    dateShort: '17/06',
    venue: 'Inovabra Habitat, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Healthtech, Inteligência Artificial, inovação, venture capital.',
    whyInterests: 'Ideal para compor o radar de inovação em saúde, identificar healthtechs emergentes, founders, CTOs de relevância e potenciais parceiros tecnológicos. Fomenta o debate de tendências regulatórias e uso prático de IA nos diagnósticos.',
    url: 'https://www.listadeeventos.com.br/evento/saude-inteligencia-artificial-inovacao-impacto-real-sao-paulo?utm_source=chatgpt.com',
    tags: ['AI/IA', 'Healthtech', 'Venture Capital']
  },
  {
    id: 4,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Média',
    priorityClass: 'media',
    name: 'Para Germinar, Cuidar: Wellness Day',
    shortName: 'Wellness Day',
    dateLabel: '20 de Junho 2026',
    dateShort: '20/06',
    venue: 'Curitiba/PR',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Wellness, bem-estar integral, presença ativa, movimento corporal.',
    whyInterests: 'Embora tenha um viés mais B2C/experiencial, é relevante para entender novas linguagens de mercado, dinâmicas de experiência de comunidade e ativações sensoriais focadas em autocuidado.',
    url: 'https://www.even3.com.br/para-germinar-cuidar-wellness-day-740576/?utm_source=chatgpt.com',
    tags: ['Comunidade', 'Experiencial', 'B2C']
  },
  {
    id: 5,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Muito alta',
    priorityClass: 'muito-alta',
    name: 'Iguatemi Talks Wellness 2026',
    shortName: 'Iguatemi Talks Wellness',
    dateLabel: '23 de Junho 2026',
    dateShort: '23/06',
    venue: 'Shopping JK Iguatemi, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Wellness, longevidade, nutrição funcional, beleza limpa, saúde mental.',
    whyInterests: 'O evento mais alinhado à interseção de premium wellness, marcas influentes e novos comportamentos de consumo. A programação aborda medicina preventiva, performance, lifestyle premium, inovação e bem-estar corporativo.',
    url: 'https://iguatemi.com.br/iguatemitalks/wellness',
    tags: ['Premium', 'Lifestyle', 'Nutrição']
  },
  {
    id: 6,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Alta',
    priorityClass: 'alta',
    name: 'AI Summit Health 2026',
    shortName: 'AI Summit Health',
    dateLabel: '24 e 25 de Junho 2026',
    dateShort: '24–25/06',
    venue: 'INRAD/HCFMUSP, São Paulo/SP (com opção de inscrição digital)',
    location: 'sp',
    format: 'Híbrido',
    recorte: 'Healthtech, IA, inovação clínica, regulação e tecnologia emergente.',
    whyInterests: 'Essencial para capturar as narrativas e tendências reais de Inteligência Artificial aplicada a hospitais, automação de diagnóstico, captação de dados de pacientes, regulação clínica e ecossistema de startups de saúde.',
    url: 'https://aisummit.ia.br/',
    tags: ['AI/IA', 'Hospitais', 'Inovação']
  },
  {
    id: 7,
    cat: 'foodbev',
    catLabel: 'Healthy Food & Beverages',
    priority: 'Média/Alta',
    priorityClass: 'media-alta',
    name: 'São Paulo Coffee Festival 2026',
    shortName: 'SP Coffee Festival',
    dateLabel: '26 a 28 de Junho 2026',
    dateShort: '26–28/06',
    venue: 'Bienal do Ibirapuera, São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Bebidas funcionais, café especial, gastronomia, marcas D2C.',
    whyInterests: 'Valioso para mapear marcas de healthy beverages, rituais modernos de consumo, engajamento de comunidades premium e ativações sensoriais. O festival reúne microtorrefações inovadoras, tendências em cafés especiais e novos entrantes no setor de alimentação e bebidas.',
    url: 'https://www.saopaulocoffeefestival.com.br/?utm_source=chatgpt.com',
    tags: ['Bebidas', 'Gastronomia', 'Comunidade']
  },
  {
    id: 8,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Média',
    priorityClass: 'media',
    name: 'Run to the Cup 2026',
    shortName: 'Run to the Cup',
    dateLabel: '27 de Junho 2026',
    dateShort: '27/06',
    venue: 'São Paulo/SP',
    location: 'sp',
    format: 'Presencial',
    recorte: 'Wellness, recovery, brunch saudável, creators, marketing de comunidade.',
    whyInterests: 'Mais voltado ao lifestyle e ativação de comunidade do que uma feira de negócios tradicional, porém altamente relevante para compreender o wellness como experiência de conexão social e branded community.',
    url: 'https://beta.sympla.com.br/evento/run-to-the-cup/3444806?utm_source=chatgpt.com',
    tags: ['Corrida', 'Recovery', 'Lifestyle']
  },
  {
    id: 9,
    cat: 'wellness',
    catLabel: 'Wellness & Bem-estar',
    priority: 'Média/Alta',
    priorityClass: 'media-alta',
    name: 'Wellness Life Expo 2026',
    shortName: 'Wellness Life Expo',
    dateLabel: '27 e 28 de Junho 2026',
    dateShort: '27–28/06',
    venue: 'Brasília/DF',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Wellness, feira de bem-estar, workshops, aulas ao vivo.',
    whyInterests: 'Importante radar de marcas e tendências fora do eixo São Paulo. Apresenta um viés focado em B2C e comunidade de praticantes locais no Distrito Federal, gerando insights de abrangência nacional.',
    url: 'https://beta.sympla.com.br/evento/wellness-life-expo-2026-brasilia-df/3457720?utm_source=chatgpt.com',
    tags: ['Feira', 'Workshops', 'Regional']
  },
  {
    id: 10,
    cat: 'health',
    catLabel: 'Health & Clintech',
    priority: 'Média/Alta',
    priorityClass: 'media-alta',
    name: 'CBAC — Congresso Brasileiro de Análises Clínicas 2026',
    shortName: 'Congresso CBAC',
    dateLabel: '28 de Junho a 01 de Julho 2026',
    dateShort: '28/06–01/07',
    venue: 'Riocentro, Rio de Janeiro/RJ',
    location: 'outros',
    format: 'Presencial',
    recorte: 'Saúde diagnóstica, laboratórios clínicos, biomarcadores, Health 5.0.',
    whyInterests: 'Embora mais técnico e industrial, é estratégico para mapear tendências de healthtech, biotecnologia diagnóstica, biomarcadores de saúde integrativa e novas tecnologias laboratoriais. O tema central é focado na Era da Saúde 5.0.',
    url: 'https://www.sbac.org.br/cbac/?utm_source=chatgpt.com',
    tags: ['Congresso', 'Diagnóstico', 'Clintech']
  }
];

// Active State Variables
let activeCategory = 'all';
let activeLocation = 'all';

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
  sheetCloseBtn: document.getElementById('sheetCloseBtn')
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

// Form Submission
async function handleGateSubmit(e) {
  e.preventDefault();
  
  // Fields collection
  const name = document.getElementById('gate-name').value.trim();
  const email = document.getElementById('gate-email').value.trim();
  const company = document.getElementById('gate-company').value.trim();
  const segment = document.getElementById('gate-segment').value;
  const role = document.getElementById('gate-role').value;
  
  // Validation
  if (!name || !email || !company || !segment || !role) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }
  
  if (!email.includes('@')) {
    alert('Por favor, insira um e-mail corporativo válido.');
    return;
  }
  
  // Visual loader activation
  elements.gateCta.classList.add('loading');
  
  // Capture Traffic Source / UTM Attribution
  const traffic = getTrafficSource();
  const originString = `Origem: ${traffic.source}` + 
    (traffic.utm_source ? `, utm_source: ${traffic.utm_source}` : '') +
    (traffic.utm_medium ? `, utm_medium: ${traffic.utm_medium}` : '') +
    (traffic.utm_campaign ? `, utm_campaign: ${traffic.utm_campaign}` : '') +
    (traffic.referrer ? `, ref: ${traffic.referrer}` : '');
  
  // Payload for leads_agenda_sp_2026 table
  const agendaPayload = {
    nome: name,
    email: email,
    whatsapp: '', // No longer collecting WhatsApp, send empty
    source: `Agenda Junho 2026 | ${originString}`,
    created_at: new Date().toISOString()
  };
  
  // Payload for global leads table
  const globalLeadsPayload = {
    name: name,
    email: email,
    interest: `Agenda Junho 2026 | Empresa: ${company} | Segmento: ${segment} | Cargo: ${role} | ${originString}`,
    created_at: new Date().toISOString()
  };
  
  // Parallel asynchronous calls (double save)
  const results = await Promise.allSettled([
    postToSupabase('leads_agenda_sp_2026', agendaPayload),
    postToSupabase('leads', globalLeadsPayload)
  ]);
  
  console.log('[Polen Lead Capture] Save complete. Results:', results);
  
  // Trigger GA4 event if tracking code exists
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      event_category: 'lead_capture',
      event_label: 'Agenda de Eventos Junho 2026',
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
  
  // Save status to local storage
  localStorage.setItem(CONFIG.storageKey, 'true');
  
  // Dismiss popup with animations
  elements.leadGate.classList.add('dismissed');
  document.body.classList.remove('gate-active');
  
  setTimeout(() => {
    elements.leadGate.style.display = 'none';
  }, 500);
}

// ─── FILTER AND GRID RENDERING ───

// Build Single Event Card HTML
function createCardElement(ev) {
  const card = document.createElement('div');
  card.className = `ecard ${ev.cat}`;
  card.innerHTML = `
    <span class="ecard-priority-badge ${ev.priorityClass}">${ev.priority}</span>
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
        <div class="details-block-label">${icoTrend} Por que interessa para a Polen</div>
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
