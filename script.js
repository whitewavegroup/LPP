(function(){
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=>{
      nav.style.display = (nav.style.display==='flex' ? 'none' : 'flex');
    });
  }
})();