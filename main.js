// ============================================================
// C.I.A — CONTEÚDO INFINITO COM IA
// ============================================================

const AGENTS = [
  {
    id: 1, emoji: '⚖️', name: 'Advogados',
    tag: 'Jurídico & Legal', color: '#00D4FF',
    tagline: 'Fala a língua dos tribunais. Transforma autoridade jurídica em autoridade digital — sem perder a ética, sem perder o cliente.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Direitos, casos, explicações jurídicas que prendem' },
      { icon: '🎬', name: 'Reels', desc: 'Ganchos que viralizam dentro do nicho legal' },
      { icon: '📖', name: 'Stories', desc: 'Sequências que humanizam e geram consultas' },
      { icon: '📣', name: 'Feed', desc: 'Copy com autoridade e CTA estratégico' },
      { icon: '💰', name: 'Anúncios', desc: 'Textos prontos para Meta Ads' },
    ]
  },
  {
    id: 2, emoji: '🦷', name: 'Dentistas',
    tag: 'Saúde & Estética Oral', color: '#80EEFF',
    tagline: 'Do sorriso no antes e depois ao consultório lotado. Conteúdo que converte seguidores em pacientes agendados.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Educação dental que gera autoridade' },
      { icon: '🎬', name: 'Reels', desc: 'Antes/depois, procedimentos, bastidores' },
      { icon: '📖', name: 'Stories', desc: 'Curiosidades e dicas que criam vínculo' },
      { icon: '📣', name: 'Feed', desc: 'Posts que posicionam e vendem consultas' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas para clareamento, implante, ortodontia' },
    ]
  },
  {
    id: 3, emoji: '🏠', name: 'Corretores de Imóveis',
    tag: 'Mercado Imobiliário', color: '#FFB830',
    tagline: 'Cada imóvel tem uma história. Cada post tem um comprador. Conteúdo que aquece leads antes mesmo do primeiro contato.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Tours virtuais e comparativos de imóveis' },
      { icon: '🎬', name: 'Reels', desc: 'Visitas, dicas de financiamento, mercado' },
      { icon: '📖', name: 'Stories', desc: 'Novidades e imóveis do dia' },
      { icon: '📣', name: 'Feed', desc: 'Posts de autoridade no mercado local' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas segmentadas por bairro e perfil' },
    ]
  },
  {
    id: 4, emoji: '💪', name: 'Personal Trainers',
    tag: 'Fitness & Performance', color: '#FF6B35',
    tagline: 'Energia, resultado e consistência. Conteúdo que motiva, educa e transforma seguidores em alunos fiéis.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Treinos, erros comuns, progressões' },
      { icon: '🎬', name: 'Reels', desc: 'Exercícios, transformações, bastidores' },
      { icon: '📖', name: 'Stories', desc: 'Check-ins, dicas rápidas e enquetes' },
      { icon: '📣', name: 'Feed', desc: 'Autoridade em treino e nutrição' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas para pacotes mensais e online' },
    ]
  },
  {
    id: 5, emoji: '✨', name: 'Clínicas de Estética',
    tag: 'Beleza & Bem-Estar', color: '#C084FC',
    tagline: 'Beleza se vende com desejo, não com técnica. Conteúdo que faz o cliente sonhar com o resultado antes de entrar na clínica.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Procedimentos, benefícios, resultados' },
      { icon: '🎬', name: 'Reels', desc: 'Transformações e bastidores dos procedimentos' },
      { icon: '📖', name: 'Stories', desc: 'Depoimentos e promoções relâmpago' },
      { icon: '📣', name: 'Feed', desc: 'Branding premium e autoridade estética' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas de conversão por procedimento' },
    ]
  },
  {
    id: 6, emoji: '📊', name: 'Contadores',
    tag: 'Contabilidade & Finanças', color: '#00E5A0',
    tagline: 'Números são complexos. Conteúdo não precisa ser. Transforma obrigações fiscais em oportunidades de atrair clientes.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Impostos, prazos, dicas fiscais' },
      { icon: '🎬', name: 'Reels', desc: 'Erros que custam caro, dicas de economia' },
      { icon: '📖', name: 'Stories', desc: 'Lembretes fiscais e calendário tributário' },
      { icon: '📣', name: 'Feed', desc: 'Autoridade contábil e casos de sucesso' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas para MEI, PME e abertura de empresa' },
    ]
  },
  {
    id: 7, emoji: '🧠', name: 'Psicólogos',
    tag: 'Saúde Mental & Terapia', color: '#9B59D0',
    tagline: 'Acolhimento começa antes da primeira sessão. Conteúdo que cria conexão, reduz o estigma e enche a agenda.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Saúde mental, comportamentos, reflexões' },
      { icon: '🎬', name: 'Reels', desc: 'Dicas práticas e psicoeducação acessível' },
      { icon: '📖', name: 'Stories', desc: 'Frases, perguntas reflexivas e humanização' },
      { icon: '📣', name: 'Feed', desc: 'Autoridade com ética e acolhimento' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas para terapia online e presencial' },
    ]
  },
  {
    id: 8, emoji: '🍔', name: 'Restaurantes & Delivery',
    tag: 'Food & Gastronomia', color: '#FF6B35',
    tagline: 'Comida se vende pelo olho. Conteúdo que faz o cliente salivar, clicar e pedir — ainda hoje.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Pratos, ingredientes, história do cardápio' },
      { icon: '🎬', name: 'Reels', desc: 'Preparo, bastidores, promoções especiais' },
      { icon: '📖', name: 'Stories', desc: 'Cardápio do dia e promoções relâmpago' },
      { icon: '📣', name: 'Feed', desc: 'Branding gastronômico e identidade visual' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas de entrega e reservas' },
    ]
  },
  {
    id: 9, emoji: '🏛️', name: 'Arquitetos',
    tag: 'Arquitetura & Design', color: '#E8C96A',
    tagline: 'Projetos levam meses. A decisão de contratar leva segundos. Conteúdo que vende o sonho antes da planta.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Projetos, tendências, detalhes construtivos' },
      { icon: '🎬', name: 'Reels', desc: 'Antes e depois, obras em andamento' },
      { icon: '📖', name: 'Stories', desc: 'Processo criativo e referências do projeto' },
      { icon: '📣', name: 'Feed', desc: 'Portfólio premium e autoridade no nicho' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas de captação de projetos' },
    ]
  },
  {
    id: 10, emoji: '🔨', name: 'Empresas de Reforma',
    tag: 'Construção & Reformas', color: '#FFB830',
    tagline: 'Cliente de reforma quer segurança. Conteúdo que mostra competência, processo e resultado — e fecha o contrato.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Etapas, materiais, erros comuns em reforma' },
      { icon: '🎬', name: 'Reels', desc: 'Time-lapses, transformações, bastidores' },
      { icon: '📖', name: 'Stories', desc: 'Obra do dia e depoimentos de clientes' },
      { icon: '📣', name: 'Feed', desc: 'Portfólio e autoridade técnica' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas por tipo de serviço e região' },
    ]
  },
  {
    id: 11, emoji: '🥗', name: 'Nutricionistas',
    tag: 'Nutrição & Saúde', color: '#00E5A0',
    tagline: 'Alimentação saudável é estilo de vida, não dieta. Conteúdo que educa, engaja e transforma seguidores em pacientes.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Mitos, receitas, comparativos nutricionais' },
      { icon: '🎬', name: 'Reels', desc: 'Dicas rápidas, montagem de pratos, hábitos' },
      { icon: '📖', name: 'Stories', desc: 'Desafios, enquetes e dicas do dia' },
      { icon: '📣', name: 'Feed', desc: 'Autoridade nutricional e resultados reais' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas de consulta online e presencial' },
    ]
  },
  {
    id: 12, emoji: '✂️', name: 'Barbearias',
    tag: 'Beleza Masculina', color: '#00D4FF',
    tagline: 'Barbearia não é só corte — é ritual. Conteúdo que cria comunidade, fideliza clientes e enche a agenda.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Estilos, tendências, dicas de cuidado' },
      { icon: '🎬', name: 'Reels', desc: 'Transformações, técnicas e bastidores' },
      { icon: '📖', name: 'Stories', desc: 'Agenda, promoções e depoimentos' },
      { icon: '📣', name: 'Feed', desc: 'Branding masculino e identidade da barbearia' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas de agendamento e fidelidade' },
    ]
  },
  {
    id: 13, emoji: '🩺', name: 'Médicos',
    tag: 'Medicina & Saúde', color: '#80EEFF',
    tagline: 'Autoridade médica no digital. Conteúdo que informa com responsabilidade, humaniza o profissional e atrai pacientes.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Prevenção, sintomas, esclarecimentos' },
      { icon: '🎬', name: 'Reels', desc: 'Dicas de saúde e desmistificação médica' },
      { icon: '📖', name: 'Stories', desc: 'Humanização e bastidores do consultório' },
      { icon: '📣', name: 'Feed', desc: 'Autoridade médica com ética e clareza' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas para especialidades e consultas' },
    ]
  },
  {
    id: 14, emoji: '📈', name: 'Gestores de Tráfego',
    tag: 'Marketing Digital', color: '#C084FC',
    tagline: 'Quem vende tráfego precisa ter audiência. Conteúdo que posiciona, atrai clientes e prova resultado com dados.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Métricas, estratégias, cases de resultado' },
      { icon: '🎬', name: 'Reels', desc: 'Bastidores de campanha e análises ao vivo' },
      { icon: '📖', name: 'Stories', desc: 'Resultados do dia e dicas rápidas de ads' },
      { icon: '📣', name: 'Feed', desc: 'Autoridade em tráfego pago e ROI' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas para captação de clientes gestores' },
    ]
  },
  {
    id: 15, emoji: '🚀', name: 'Infoprodutores & Coaches',
    tag: 'Educação & Mentoria', color: '#FFB830',
    tagline: 'Conhecimento que não aparece não vende. Conteúdo que posiciona, aquece audiência e converte em vendas de alto valor.',
    gemUrl: 'https://gemini.google.com/',
    deliverables: [
      { icon: '📌', name: 'Carrosséis', desc: 'Frameworks, lições e transformações' },
      { icon: '🎬', name: 'Reels', desc: 'Ganchos de autoridade e bastidores de lançamento' },
      { icon: '📖', name: 'Stories', desc: 'Provas sociais e sequências de aquecimento' },
      { icon: '📣', name: 'Feed', desc: 'Posicionamento premium e autoridade no nicho' },
      { icon: '💰', name: 'Anúncios', desc: 'Campanhas de captação e lançamento' },
    ]
  }
];

// ============================================================
// CURSOR
// ============================================================
const cursor    = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
});
(function animRing() {
  rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
  cursorRing.style.left = rx + 'px'; cursorRing.style.top = ry + 'px';
  requestAnimationFrame(animRing);
})();

// ============================================================
// PARTICLES
// ============================================================
const COLORS = ['#00D4FF','#FFB830','#7B2FBE','#00E5A0','#FF6B35','#C084FC','#80EEFF','#E8C96A'];

function createParticles() {
  const container = document.querySelector('.particles');
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const c = COLORS[Math.floor(Math.random() * COLORS.length)];
    const s = Math.random() * 2.5 + 0.5;
    p.style.cssText = `
      left:${Math.random()*100}vw;
      width:${s}px; height:${s}px;
      background:${c};
      box-shadow:0 0 ${s*3}px ${c};
      animation-duration:${Math.random()*25+15}s;
      animation-delay:${Math.random()*25}s;
    `;
    container.appendChild(p);
  }
}

// ============================================================
// SIDEBAR SEARCH
// ============================================================
function initSearch() {
  const input = document.querySelector('.sidebar-search input');
  if (!input) return;
  input.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.agent-item').forEach(el => {
      const name = el.querySelector('.agent-name').textContent.toLowerCase();
      const tag  = el.querySelector('.agent-tag').textContent.toLowerCase();
      el.style.display = (!q || name.includes(q) || tag.includes(q)) ? '' : 'none';
    });
  });
}

// ============================================================
// RENDER SIDEBAR
// ============================================================
function renderSidebar() {
  const list = document.querySelector('.agent-list');
  AGENTS.forEach((agent, i) => {
    const item = document.createElement('div');
    item.classList.add('agent-item');
    item.dataset.id = agent.id;
    item.innerHTML = `
      <span class="agent-num">${String(agent.id).padStart(2,'0')}</span>
      <div class="agent-emoji-wrap">${agent.emoji}</div>
      <div class="agent-info">
        <span class="agent-name">${agent.name}</span>
        <span class="agent-tag">${agent.tag}</span>
      </div>
      <span class="agent-arrow">›</span>
    `;
    item.addEventListener('click', () => selectAgent(agent.id));
    list.appendChild(item);
    setTimeout(() => item.classList.add('visible'), i * 50 + 200);
  });
}

// ============================================================
// RENDER CARDS
// ============================================================
function renderCards() {
  const isMobile = window.innerWidth <= 900;
  const container = isMobile
    ? document.querySelector('.mobile-deck')
    : document.querySelector('.main-content');

  AGENTS.forEach(agent => {
    const card = document.createElement('div');
    card.classList.add('agent-card');
    card.dataset.id = agent.id;
    card.style.setProperty('--agent-color', agent.color);

    const delivsHtml = agent.deliverables.map(d => `
      <div class="deliverable">
        <span class="deliverable-icon">${d.icon}</span>
        <div>
          <div class="deliverable-name">${d.name}</div>
          <div class="deliverable-desc">${d.desc}</div>
        </div>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="card-hero">
        <div class="hero-accent-line"></div>
        <div class="hero-bg-number">${String(agent.id).padStart(2,'0')}</div>
        <div class="hero-emoji-bg">${agent.emoji}</div>
        <div class="hero-gradient"></div>
        <div class="hero-content">
          <div class="hero-eyebrow">
            <div class="hero-tag">
              <span class="hero-tag-line"></span>
              ${agent.tag}
            </div>
            <span class="hero-id">AGT-${String(agent.id).padStart(3,'0')}</span>
          </div>
          <h1 class="hero-title">${agent.name}</h1>
          <p class="hero-tagline">${agent.tagline}</p>
        </div>
      </div>

      <div class="deliverables-section">
        <div class="section-label">Entregas do Agente</div>
        <div class="deliverables-grid">${delivsHtml}</div>
      </div>

      <div class="cta-section">
        <div class="cta-left">
          <div class="cta-eyebrow">Acesso ao Agente</div>
          <div class="cta-title">C.I.A · ${agent.name}</div>
          <div class="cta-sub">Agente especializado · IA 100% gratuita</div>
          <div class="cta-status">
            <span class="pulse-dot"></span>
            AGENTE ONLINE
          </div>
        </div>
        <a href="${agent.gemUrl}" target="_blank" class="btn-access" style="background:${agent.color}">
          Acessar Agente
          <span class="btn-arrow">→</span>
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

// ============================================================
// SELECT AGENT (desktop)
// ============================================================
function selectAgent(id) {
  document.querySelectorAll('.agent-item').forEach(el =>
    el.classList.toggle('active', +el.dataset.id === id)
  );
  document.querySelectorAll('.agent-card').forEach(el =>
    el.classList.remove('active')
  );
  const welcome = document.querySelector('.welcome-state');
  if (welcome) welcome.style.display = 'none';

  setTimeout(() => {
    const card = document.querySelector(`.agent-card[data-id="${id}"]`);
    if (card) {
      card.style.animation = 'none';
      card.offsetHeight;
      card.style.animation = '';
      card.classList.add('active');
      card.closest('.main').scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, 40);

  const activeItem = document.querySelector(`.agent-item[data-id="${id}"]`);
  if (activeItem) activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================================
// MOBILE FILTER BAR
// ============================================================
function renderMobileFilter() {
  const bar = document.querySelector('.mobile-filter');
  if (!bar) return;

  // Categories derived from agents
  const categories = ['Todos', ...new Set(AGENTS.map(a => a.tag.split(' & ')[0]))];

  categories.slice(0, 8).forEach((cat, i) => {
    const pill = document.createElement('button');
    pill.classList.add('filter-pill');
    if (i === 0) pill.classList.add('active');
    pill.textContent = cat;
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterMobileCards(cat);
    });
    bar.appendChild(pill);
  });
}

function filterMobileCards(cat) {
  document.querySelectorAll('.agent-card').forEach(card => {
    const id = +card.dataset.id;
    const agent = AGENTS.find(a => a.id === id);
    const matches = cat === 'Todos' || agent.tag.startsWith(cat);
    card.style.display = matches ? '' : 'none';
  });
}

// ============================================================
// TICKER COUNTER ANIMATION
// ============================================================
function animateTicker() {
  const items = [
    { el: document.querySelector('.ticker-agents'), target: 15, suffix: '' },
    { el: document.querySelector('.ticker-professions'), target: 100, suffix: '+' },
    { el: document.querySelector('.ticker-possibilities'), target: 999, suffix: '+' },
  ];
  items.forEach(({ el, target, suffix }) => {
    if (!el) return;
    let current = 0;
    const step = target / 40;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current).toLocaleString('pt-BR') + suffix;
      if (current >= target) clearInterval(interval);
    }, 30);
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.innerWidth <= 900;

  createParticles();

  if (!isMobile) {
    renderSidebar();
    initSearch();
    renderCards();
    setTimeout(() => selectAgent(1), 600);
  } else {
    renderCards();
    renderMobileFilter();
  }

  // Ticker animation
  setTimeout(animateTicker, 800);

  // Keyboard nav (desktop)
  if (!isMobile) {
    let currentId = 1;
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { currentId = Math.min(currentId + 1, AGENTS.length); selectAgent(currentId); }
      if (e.key === 'ArrowUp')   { currentId = Math.max(currentId - 1, 1); selectAgent(currentId); }
    });
  }
});
