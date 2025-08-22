(function(){
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      nav.style.display = nav.style.display === 'block' ? '' : 'block';
    });
  }
})();