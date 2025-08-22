(function(){
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
      if(nav.style.display==='flex'){ nav.style.flexDirection='column'; nav.style.alignItems='flex-start'; }
    });
  }
})();