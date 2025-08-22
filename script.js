(function(){
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=>{
      nav.style.display = (nav.style.display==='flex' ? 'none' : 'flex');
    });
  }
  // Auto-resize textareas
  const autos = document.querySelectorAll('textarea');
  autos.forEach(t=>{
    const resize=()=>{ t.style.height='auto'; t.style.height=(t.scrollHeight+2)+'px'; };
    t.addEventListener('input', resize); resize();
  });
})();