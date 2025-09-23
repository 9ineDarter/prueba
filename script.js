// --- Calendario automatico + torneos ---

const state = {
  today: new Date(),
  viewYear: null,
  viewMonth: null,
};

// === LISTA DE TORNEOS ===
const torneos = [
  {
    titulo: "Czezch Open (ET 11)",
    tipo: "pdc",
    fecha: "2025-09-05",
    hora: "13:00",
    enlace: "https://www.pdc.tv/tournament/gambrinus-czech-darts-open-et11"
  },
  {
    titulo: "Catalonia Open",
    tipo: "wdf",
    fecha: "2025-09-06",
    hora: "11:00",
    enlace: "https://www.dardscatalunya.cat/noticies/8/2126/live-scores-13th-catalonia-open-fcd-anniversary-2025"
  },
  {
    titulo: "Catalonia Open",
    tipo: "wdf",
    fecha: "2025-09-07",
    hora: "11:00",
    enlace: "https://www.dardscatalunya.cat/noticies/8/2126/live-scores-13th-catalonia-open-fcd-anniversary-2025"
  },
  {
    titulo: "Catalonia Open",
    tipo: "wdf",
    fecha: "2025-09-08",
    hora: "11:00",
    enlace: "https://www.dardscatalunya.cat/noticies/8/2126/live-scores-13th-catalonia-open-fcd-anniversary-2025"
  },
  {
    titulo: "Players Championship 26",
    tipo: "pdc",
    fecha: "2025-09-09",
    hora: "13:00",
    enlace: "https://www.pdc.tv/tournament/players-championship-26-3"
  },
  {
    titulo: "Players Championship 27",
    tipo: "pdc",
    fecha: "2025-09-10",
    hora: "13:00",
    enlace: "https://www.pdc.tv/tournament/players-championship-27-3"
  },
  {
    titulo: "WSOD Finals",
    tipo: "pdc",
    fecha: "2025-09-12",
    hora: "19:00",
    enlace: "https://www.pdc.tv/tournament/jacks-casino-world-series-darts-finals-0"
  },
  {
    titulo: "WSOD Finals",
    tipo: "pdc",
    fecha: "2025-09-13",
    hora: "19:00",
    enlace: "https://www.pdc.tv/tournament/jacks-casino-world-series-darts-finals-0"
  },
  {
    titulo: "WSOD Finals",
    tipo: "pdc",
    fecha: "2025-09-14",
    hora: "19:00",
    enlace: "https://www.pdc.tv/tournament/jacks-casino-world-series-darts-finals-0"
  },
  {
    titulo: "Italian Open",
    tipo: "wdf", // o "pdc" o "wdf"
    fecha: "2025-09-13",
    hora: "10:00",
    enlace: "https://dartswdf.com/competitions/italian-open/2025"
  },
   {
    titulo: "Italian Open",
    tipo: "wdf", // o "pdc" o "wdf"
    fecha: "2025-09-14",
    hora: "10:00",
    enlace: "https://dartswdf.com/competitions/italian-open/2025"
  },
  {
    titulo: "Torneo Peña Leon",
    tipo: "espana",
    fecha: "2025-09-13",
    hora: "19:00",
    enlace: "https://www.facebook.com/groups/dardos.es/permalink/24904072742532483/"
  },
  {
    titulo: "Hungarian Open (ET 12)",
    tipo: "pdc",
    fecha: "2025-09-19",
    hora: "13:00",
    enlace: "https://www.pdc.tv/tournament/hungarian-darts-trophy-et12-0"
  },
  {
    titulo: "Hungarian Open (ET 12)",
    tipo: "pdc",
    fecha: "2025-09-20",
    hora: "13:00",
    enlace: "https://www.pdc.tv/tournament/hungarian-darts-trophy-et12-0"
  },
  {
    titulo: "Hungarian Open (ET 12)",
    tipo: "pdc",
    fecha: "2025-09-21",
    hora: "13:00",
    enlace: "https://www.pdc.tv/tournament/hungarian-darts-trophy-et12-0"
  },
  {
    titulo: "WDF World Cup 2025",
    tipo: "wdf",
    fecha: "2025-09-23",
    hora: "00:00",
    enlace: "https://www.wdfworldcup2025.com/#doz_body"
  },
  {
    titulo: "WDF World Cup 2025",
    tipo: "wdf",
    fecha: "2025-09-24",
    hora: "00:00",
    enlace: "https://www.wdfworldcup2025.com/#doz_body"
  },
  {
    titulo: "WDF World Cup 2025",
    tipo: "wdf",
    fecha: "2025-09-25",
    hora: "00:00",
    enlace: "https://www.wdfworldcup2025.com/#doz_body"
  },
  {
    titulo: "WDF World Cup 2025",
    tipo: "wdf",
    fecha: "2025-09-26",
    hora: "00:00",
    enlace: "https://www.wdfworldcup2025.com/#doz_body"
  },
  {
    titulo: "WDF World Cup 2025",
    tipo: "wdf",
    fecha: "2025-09-27",
    hora: "00:00",
    enlace: "https://www.wdfworldcup2025.com/#doz_body"
  },
  {
    titulo: "Korean Open WDF",
    tipo: "wdf",
    fecha: "2025-09-28",
    hora: "00:00",
    enlace: "https://www.wdfworldcup2025.com/Koreaopen"
  },
  {
    titulo: "Madrid Radikal",
    tipo: "espana",
    fecha: "2025-09-26",
    hora: "17:00",
    enlace: "https://www.facebook.com/groups/157183371001612/permalink/24276736578619621/"
  },
  {
    titulo: "Madrid Radikal",
    tipo: "espana",
    fecha: "2025-09-27",
    hora: "10:30",
    enlace: "https://www.facebook.com/groups/157183371001612/permalink/24276736578619621/"
  },
  {
    titulo: "III Open CAPA (Guazamara)",
    tipo: "espana",
    fecha: "2025-09-27",
    hora: "10:00",
    enlace: "https://www.facebook.com/clubalmeriensepuntaacero/posts/pfbid0P6YvuRheq1dJnXXUu5iVJqcMgoR4j5cJiTUsKAnaWguSmwkMmF1gwjGuJqgzUXodl"
  },
  {
    titulo: "Madrid Radikal",
    tipo: "espana",
    fecha: "2025-09-28",
    hora: "10:30",
    enlace: "https://www.facebook.com/groups/157183371001612/permalink/24276736578619621/"
  },
  {
    titulo: "Swiss Open (ET 13)",
    tipo: "pdc",
    fecha: "2025-09-26",
    hora: "13:00",
    enlace: "https://www.pdc.tv/tournament/swiss-darts-trophy-et13"
  },
  {
    titulo: "Swiss Open (ET 13)",
    tipo: "pdc",
    fecha: "2025-09-27",
    hora: "13:00",
    enlace: "https://www.pdc.tv/tournament/swiss-darts-trophy-et13"
  },
  {
    titulo: "Swiss Open (ET 13)",
    tipo: "pdc",
    fecha: "2025-09-28",
    hora: "13:00",
    enlace: "https://www.pdc.tv/tournament/swiss-darts-trophy-et13"
  },
  {
    titulo: "Players Championship 28",
    tipo: "pdc",
    fecha: "2025-09-30",
    hora: "13:00",
    enlace: "https://www.pdc.tv/tournament/players-championship-28-3"
  },
  {
    titulo: "Players Championship 29",
    tipo: "pdc",
    fecha: "2025-10-01",
    hora: "13:00",
    enlace: "https://www.pdc.tv/tournament/players-championship-29-3"
  },
  {
    titulo: "Players Championship 30",
    tipo: "pdc",
    fecha: "2025-10-02",
    hora: "13:00",
    enlace: "https://www.pdc.tv/tournament/players-championship-30-3"
  },
];

// === Funciones de calendario ===
function formatMonthYear(year, monthIndex){
  const formatter = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' });
  return formatter.format(new Date(year, monthIndex, 1));
}
function weekdayMondayFirst(jsWeekday){ return (jsWeekday + 6) % 7; }
function daysInMonth(year, monthIndex){ return new Date(year, monthIndex + 1, 0).getDate(); }

function buildCalendar(year, monthIndex){
  const grid = document.getElementById('calendarGrid');
  const monthYear = document.getElementById('monthYear');
  grid.innerHTML = '';
  monthYear.textContent = formatMonthYear(year, monthIndex);

  const first = new Date(year, monthIndex, 1);
  const startOffset = weekdayMondayFirst(first.getDay());
  const totalDays = daysInMonth(year, monthIndex);

  for (let i=0;i<startOffset;i++){
    const cell = document.createElement('div');
    cell.className = 'day other-month';
    grid.appendChild(cell);
  }

  const isCurrentMonth = (year === state.today.getFullYear() && monthIndex === state.today.getMonth());

  for (let d=1; d<=totalDays; d++){
    const cell = document.createElement('div');
    cell.className = 'day';
    const span = document.createElement('div');
    span.className = 'num';
    span.textContent = d;
    cell.appendChild(span);

    if (isCurrentMonth){
      if (d < state.today.getDate()) cell.classList.add('past');
      if (d === state.today.getDate()) cell.classList.add('today');
    }

    // Torneos
    const fechaStr = `${year}-${String(monthIndex+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const eventosHoy = torneos.filter(ev => ev.fecha === fechaStr);

    if (eventosHoy.length > 0) {
      eventosHoy.forEach(ev => {
        const badge = document.createElement('div');
        badge.textContent = ev.titulo;
        badge.className = `event ${ev.tipo}`;
        cell.appendChild(badge);

        badge.addEventListener('click', (e) => {
          e.stopPropagation(); // evita que el click se propague al cell
          document.getElementById('popupTitle').textContent = ev.titulo;
          document.getElementById('popupType').textContent = ev.tipo.toUpperCase();
          document.getElementById('popupDate').textContent = ev.fecha;
          document.getElementById('popupHour').textContent = ev.hora;
          document.getElementById('popupLink').href = ev.enlace;
          const popup = document.getElementById('popup');
          popup.classList.add('show');
          popup.setAttribute('aria-hidden', 'false');
        });
      });
    }

    grid.appendChild(cell);
  }

  const totalCells = startOffset + totalDays;
  const trailing = (7 - (totalCells % 7)) % 7;
  for (let i=0;i<trailing;i++){
    const cell = document.createElement('div');
    cell.className = 'day other-month';
    grid.appendChild(cell);
  }
}

function setViewToToday(){
  state.today = new Date();
  state.viewYear = state.today.getFullYear();
  state.viewMonth = state.today.getMonth();
  buildCalendar(state.viewYear, state.viewMonth);
}
function goMonth(delta){
  state.viewMonth += delta;
  if (state.viewMonth < 0){ state.viewMonth = 11; state.viewYear--; }
  if (state.viewMonth > 11){ state.viewMonth = 0; state.viewYear++; }
  buildCalendar(state.viewYear, state.viewMonth);
}
function scheduleMidnightTick(){
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0,0,1);
  const ms = next - now;
  setTimeout(()=>{
    const oldMonth = state.today.getMonth();
    setViewToToday();
    const newMonth = state.today.getMonth();
    if (newMonth !== oldMonth){
      state.viewYear = state.today.getFullYear();
      state.viewMonth = state.today.getMonth();
      buildCalendar(state.viewYear, state.viewMonth);
    }
    scheduleMidnightTick();
  }, ms);
}

// Función para mostrar secciones
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
}

// Cargar artículos desde JSON
function loadArticles() {
  fetch('articles.json')
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById('articles-list');
      list.innerHTML = '';
      data.articles.forEach(article => {
        const preview = document.createElement('div');
        preview.className = 'article-preview';
        preview.innerHTML = `
          <img src="${article.image}" alt="${article.title}" class="article-image">
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <button class="read-button" onclick="viewArticle('${article.docx}', '${article.title}')">Leer</button>
        `;
        list.appendChild(preview);
      });
    })
    .catch(error => console.error('Error loading articles:', error));
}

// Cargar rutinas desde JSON
function loadRutinas() {
  fetch('articles.json')
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById('rutinas-list');
      list.innerHTML = '';
      if (!data.rutinas) {
        list.innerHTML = '<p>No hay rutinas disponibles.</p>';
        return;
      }
      data.rutinas.forEach(rutina => {
        const preview = document.createElement('div');
        preview.className = 'article-preview';
        preview.innerHTML = `
          <img src="${rutina.image}" alt="${rutina.title}" class="article-image">
          <h3>${rutina.title}</h3>
          <p>${rutina.summary}</p>
          <button class="read-button" onclick="viewRutina('${rutina.image}', '${rutina.title}')">Leer</button>
        `;
        list.appendChild(preview);
      });
    })
    .catch(error => console.error('Error loading rutinas:', error));
}

// Ver artículo completo
window.viewArticle = function(docxPath, title) {
  // Redirigir a la página del artículo con parámetros
  window.location.href = `articulo.html?docx=${encodeURIComponent(docxPath)}&title=${encodeURIComponent(title)}`;
};
// Ver rtuinas completo
window.viewRutina = function(imagePath, title) {
  window.location.href = `rutina.html?image=${encodeURIComponent(imagePath)}&title=${encodeURIComponent(title)}`;
};
// Menú lateral
function setupMenu(){
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menuToggle');

  if (!sidebar || !menuToggle) return; // Evita errores si no existen

  menuToggle.addEventListener('click', ()=>{
    sidebar.classList.toggle('hidden');
    const expanded = !sidebar.classList.contains('hidden');
    menuToggle.setAttribute('aria-expanded', String(expanded));
  });

  document.addEventListener('click', (e)=>{
    if (window.matchMedia('(max-width: 900px)').matches){
      if (!sidebar.contains(e.target) && e.target !== menuToggle){
        sidebar.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
}

function loadRanking() {
  fetch('ranking.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('ranking-table');
      container.innerHTML = `
        <table class="ranking-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Jugador</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            ${data.ranking.map(player => `
              <tr class="${player.pos <= 64 ? 'top64' : ''}">
                <td>${player.pos}</td>
                <td>${player.jugador} (${player.tour})</td>
                <td>£${(player.puntos / 1000).toFixed(1)}k</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    })
    .catch(error => console.error('Error cargando ranking:', error));
}


  // Links de secciones
  document.getElementById('link-calendario').addEventListener('click', () => {
    showSection('calendario');
    sidebar.classList.add('hidden');
  });
  document.getElementById('link-actualidad').addEventListener('click', () => {
    showSection('actualidad');
    loadArticles();
    sidebar.classList.add('hidden');
});

    document.getElementById('link-rutinas').addEventListener('click', () => {
      showSection('rutinas');
      loadRutinas();
      sidebar.classList.add('hidden');
    });
  document.getElementById('link-contacto').addEventListener('click', () => {
    showSection('contacto');
    sidebar.classList.add('hidden');
  });
document.getElementById('link-ranking').addEventListener('click', () => {
  showSection('ranking');
  loadRanking();
  sidebar.classList.add('hidden');
});

// Pop-up para eventos
function setupPopup(){
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closePopup');
  if (!popup || !closeBtn) return;
  closeBtn.addEventListener('click', ()=> popup.classList.remove('show'));
  popup.addEventListener('click', (e)=>{ if (e.target === popup) popup.classList.remove('show'); });
}

// Pop-up para artículos
function setupArticlePopup() {
  const articlePopup = document.getElementById('article-popup');
  const articleClose = document.getElementById('article-close');
  if (!articlePopup || !articleClose) return;
  articleClose.addEventListener('click', () => articlePopup.classList.remove('show'));
  articlePopup.addEventListener('click', (e) => { if (e.target === articlePopup) articlePopup.classList.remove('show'); });
}

// Controles mes
function setupMonthControls(){
  document.getElementById('prevMonth').addEventListener('click', ()=> goMonth(-1));
  document.getElementById('nextMonth').addEventListener('click', ()=> goMonth(1));
}

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa el calendario con la fecha actual
  setViewToToday();

  // Activa el menú lateral responsive
  setupMenu();

  // Activa el pop-up de eventos
  setupPopup();

  // Activa el pop-up de artículos
  setupArticlePopup();

  // Activa los botones de navegación mensual
  setupMonthControls();

  // Programa actualización automática a medianoche
  scheduleMidnightTick();

  // Muestra la sección correspondiente según el hash en la URL
  const hash = window.location.hash.replace('#', '');
  switch (hash) {
    case 'actualidad':
      showSection('actualidad');
      loadArticles();
      break;
    case 'rutinas':
      showSection('rutinas');
      loadRutinas();
      break;
    case 'contacto':
      showSection('contacto');
      break;
    default:
      showSection('calendario');
      break;
  }
});





