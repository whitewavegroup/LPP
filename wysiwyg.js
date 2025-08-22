(function(){
  const KEY='lpp_inline_edits_v1';
  const editToggle=document.getElementById('editToggle');
  const bar=document.getElementById('editBar');
  const saveBtn=document.getElementById('saveEdits');
  const cancelBtn=document.getElementById('cancelEdits');
  const nodes=[...document.querySelectorAll('[data-editable]')];

  // Load saved edits
  try{
    const saved=JSON.parse(localStorage.getItem(KEY)||'{}');
    nodes.forEach((el,i)=>{ if(saved[i]) el.innerHTML=saved[i]; });
  }catch(e){}

  function setEditable(on){
    nodes.forEach(el=>el.setAttribute('contenteditable', on?'true':'false'));
    bar.hidden=!on;
    editToggle.style.display= on ? 'none':'block';
  }

  if(editToggle){
    editToggle.addEventListener('click', ()=> setEditable(true));
  }
  if(cancelBtn){
    cancelBtn.addEventListener('click', ()=> setEditable(false));
  }
  if(saveBtn){
    saveBtn.addEventListener('click', ()=>{
      const data={};
      nodes.forEach((el,i)=> data[i]=el.innerHTML);
      localStorage.setItem(KEY, JSON.stringify(data));
      setEditable(false);
      alert('✅ Cambios guardados en este navegador.');
    });
  }
})();