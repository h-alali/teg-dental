
const btn=document.getElementById('menuBtn');
const nav=document.getElementById('mobileNav');
if(btn && nav){
  btn.addEventListener('click',()=>{
    nav.style.display=nav.style.display==='block'?'none':'block';
  });
}
document.querySelectorAll('#mobileNav a').forEach(a=>{
  a.addEventListener('click',()=>nav.style.display='none');
});
document.querySelectorAll('form[data-demo]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const msg=form.querySelector('.success');
    if(msg) msg.style.display='block';
  });
});
