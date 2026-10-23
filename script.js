const $ = id => document.getElementById(id);
const D = DATA;
const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };

// Hero
$('navRole').textContent = D.role;
$('heroPhoto').src = D.photo;
$('heroName').innerHTML = D.name + '<br>' + D.role;
$('heroIntro').textContent = D.intro;
$('heroLoc').textContent = D.location;
$('heroTagline').textContent = D.tagline;
D.points.forEach(p => $('heroPoints').append(h('li', '', p)));

// About
$('aboutText').textContent = D.about.text;
D.about.stats.forEach(s => $('aboutStats').append(h('div', '', `<b>${s.num}</b><span>${s.label}</span>`)));

// Education & experience
D.education.forEach(e => $('eduList').append(h('div', 'item', `<span class="yr">${e.year}</span><b>${e.title}</b><span>${e.sub}</span>`)));
D.experience.forEach(e => $('expList').append(h('li', '', `<span class="yr">${e.year}</span><b>${e.title}</b><em>${e.place}</em><p>${e.desc}</p>`)));

// Skills
D.skills.technical.forEach(s => $('techList').append(h('span', 'tech', `<i class="${s.icon}"></i><small>${s.name}</small>`)));
D.skills.soft.forEach(s => $('softList').append(h('span', 'chip', s)));

// Projects
D.projects.forEach((p, i) => {
  const a = h('a', 'card reveal', `<div class="thumb"><img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.remove()"></div>
    <div class="meta"><div><b>${p.title}</b><span>${p.type}</span></div><i>${String(i + 1).padStart(2, '0')}</i></div>`);
  a.href = p.link; a.target = '_blank'; a.rel = 'noopener';
  a.style.setProperty('--d', (i % 3) * 0.12 + 's');
  $('projectList').append(a);
});

// Certificates
D.certificates.forEach((c, i) => {
  const a = h('a', 'cert reveal', `<span class="yr">${c.year}</span><b>${c.title}</b><span>${c.issuer}</span><em>Buka PDF</em>`);
  a.href = c.file; a.target = '_blank'; a.rel = 'noopener';
  a.style.setProperty('--d', (i % 4) * 0.08 + 's');
  $('certList').append(a);
});

// Contact
$('contactText').textContent = D.contact.text;
D.contact.list.forEach(c => {
  const a = h('a', 'contact-item', `<span class="ico"><i class="${c.icon}"></i></span><span class="txt"><small>${c.label}</small>${c.value}</span>`);
  a.href = c.href;
  a.target = '_blank';
  a.rel = 'noopener';
  $('contactList').append(a);
});
$('footer').textContent = `© ${new Date().getFullYear()} ${D.name}`;

// Reveal saat scroll
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Progress bar + nav
const bar = $('progress'), nav = document.querySelector('.nav');
addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${scrollY / max})`;
  nav.classList.toggle('solid', scrollY > 40);
}, { passive: true });

// Menu mobile
$('burger').onclick = () => nav.classList.toggle('open');
$('menu').onclick = () => nav.classList.remove('open');
