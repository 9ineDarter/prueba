const fs = require('fs');

// Lista de torneos (puedes copiar la misma del script.js)
const torneos = [
  {
    titulo: "Czezch Open (ET 11)",
    tipo: "pdc",
    fecha: "2025-09-05",
    enlace: "https://www.pdc.tv/tournament/gambrinus-czech-darts-open-et11"
  },
  {
    titulo: "Catalonia Open",
    tipo: "wdf",
    fecha: "2025-09-06",
    enlace: "https://www.dardscatalunya.cat/noticies/8/2126/live-scores-13th-catalonia-open-fcd-anniversary-2025"
  },
  // ... resto de torneos ...
];

// Secciones fijas del sitio
const secciones = [
  { loc: 'https://infodarts.netlify.app/', freq: 'daily', priority: 1.0 },
  { loc: 'https://infodarts.netlify.app/#calendario', freq: 'daily', priority: 0.8 },
  { loc: 'https://infodarts.netlify.app/#contact', freq: 'monthly', priority: 0.5 },
  { loc: 'mailto:9inedarter@gmail.com' },
  { loc: 'https://www.instagram.com/9ine_darter/' },
  { loc: 'https://x.com/9ine_darter' },
  { loc: 'https://www.paypal.com/donate/?business=TU_ID_PAYPAL' },
];

// Construir contenido XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Secciones fijas
secciones.forEach(sec => {
  xml += `  <url>\n    <loc>${sec.loc}</loc>\n`;
  if (sec.freq) xml += `    <changefreq>${sec.freq}</changefreq>\n`;
  if (sec.priority) xml += `    <priority>${sec.priority}</priority>\n`;
  xml += `  </url>\n`;
});

// Torneos
torneos.forEach(t => {
  xml += `  <url>\n    <loc>${t.enlace}</loc>\n`;
  xml += `    <lastmod>${t.fecha}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.6</priority>\n`;
  xml += `  </url>\n`;
});

xml += `</urlset>`;

// Guardar archivo
fs.writeFileSync('sitemap.xml', xml);
console.log('Sitemap generado: sitemap.xml');
