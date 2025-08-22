
async function loadContent(){
  try{
    const res = await fetch('content.json?v='+(new Date().getTime()));
    const data = await res.json();
    // Hero
    document.getElementById('hero_title').textContent = data.hero_title;
    document.getElementById('hero_sub').textContent = data.hero_subtitle;
    document.querySelectorAll('.cta-main').forEach(a=>a.textContent = data.hero_cta);
    // Benefits
    document.getElementById('benefits_title').textContent = data.benefits_title;
    const bl = document.getElementById('benefits_list'); bl.innerHTML='';
    data.benefits.forEach(t=>{ const li=document.createElement('li'); li.textContent=t; bl.appendChild(li); });
    // Scripture
    document.getElementById('scripture_title').textContent = data.scripture_block_title;
    const sc = document.getElementById('scripture_block'); sc.innerHTML='';
    data.scripture_block.forEach(v=>{ const d=document.createElement('div'); d.className='verse'; d.textContent=v; sc.appendChild(d); });
    // Testimonials
    document.getElementById('testi_title').textContent = data.testimonials_title;
    const tt = document.getElementById('testi_block'); tt.innerHTML='';
    data.testimonials.forEach(t=>{ const d=document.createElement('div'); d.className='testi'; d.innerHTML = `<p>“${t.quote}”</p><cite>— ${t.name}</cite>`; tt.appendChild(d); });
    // Footer CTA
    document.getElementById('cta_footer_text').textContent = data.cta_footer_text;
    document.getElementById('cta_footer_btn').textContent = data.cta_footer_btn;
  }catch(e){ console.warn('No se pudo cargar content.json', e); }
}
document.addEventListener('DOMContentLoaded', loadContent);
