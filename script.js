(function(){
  // Mobile menu
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      nav.style.display = nav.style.display === 'block' ? '' : 'block';
    });
  }
  async function loadJSON(path){ try{ const r=await fetch(path,{cache:'no-cache'}); if(!r.ok) return null; return await r.json(); }catch(e){ return null; } }
  function setText(sel, text){ const el=document.querySelector(sel); if(el && text) el.textContent=text; }
  function setHref(sel, href){ const el=document.querySelector(sel); if(el && href) el.setAttribute('href', href); }
  (async function hydrate(){
    const settings = await loadJSON('content/settings.json');
    const testimonios = await loadJSON('content/testimonios.json');
    if(settings){
      setText('.hero-copy h1', settings.hero_title);
      setText('.hero-copy .lead', settings.hero_lead);
      setText('.cta-row a.btn.cta', settings.cta_primary_label);
      setHref('.cta-row a.btn.cta', settings.cta_primary_href);
      setText('.cta-row a.btn.ghost', settings.cta_secondary_label);
      setHref('.cta-row a.btn.ghost', settings.cta_secondary_href);
      setText('#cta .row a.btn.cta', settings.cta_bottom_label);
      setHref('#cta .row a.btn.cta', settings.cta_bottom_href);
      const grid = document.querySelector('#beneficios .grid3');
      if(grid && Array.isArray(settings.benefits)){
        grid.innerHTML = settings.benefits.map(b => `
          <div class="benefit">
            <div class="icon">${b.icon||''}</div>
            <h4>${b.title||''}</h4>
            <p>${b.text||''}</p>
          </div>`).join('');
      }
      const ag = document.querySelector('#agenda .grid3');
      if(ag && Array.isArray(settings.agenda_cards)){
        ag.innerHTML = settings.agenda_cards.map(c => `
          <div class="card">
            <h3>${c.title||''}</h3>
            <p>${c.desc||''}</p>
            <p><a class="btn" href="${c.cta_href||'lista-espera.html'}">${c.cta_label||'Añádete a la Lista de espera'}</a></p>
          </div>`).join('');
      }
    }
    if(testimonios && Array.isArray(testimonios.items)){
      const t = document.querySelector('#testimonios .testis');
      if(t){
        t.innerHTML = testimonios.items.map(i => `
          <blockquote class="card">“${i.quote||''}” <br><span>${i.author||''}</span></blockquote>`).join('');
      }
    }
  })();
})();