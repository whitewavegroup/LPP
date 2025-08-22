(function(){
  // Modal controls
  const openBtn = document.getElementById('openWaitlist');
  const overlay = document.getElementById('waitlistOverlay');
  const closeBtn = document.getElementById('closeModal');
  if(openBtn && overlay){
    openBtn.addEventListener('click', function(e){ e.preventDefault(); overlay.style.display='flex'; });
  }
  if(closeBtn){
    closeBtn.addEventListener('click', function(){ overlay.style.display='none'; });
  }
  if(overlay){
    overlay.addEventListener('click', function(e){ if(e.target===overlay){ overlay.style.display='none'; } });
  }
})();