'use strict';
(() => {
 const dialog=document.querySelector('#enlarged');
 const image=document.querySelector('#large-image');
 const title=document.querySelector('#large-title');
 const note=document.querySelector('#large-note');
 let opener;
 const sprayIcon='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M10 12h12v16a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2zM12 8h8v4h-8zM14 4h5v4h-5z" fill="currentColor"/><path d="M21 6l7-3M22 8h8M22 10l7 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
 const details=document.createElement('div');details.className='overview-description';details.hidden=true;
 const toggle=document.createElement('button');toggle.className='overview-description-toggle';toggle.innerHTML=sprayIcon+'<span>Details</span>';toggle.hidden=true;toggle.setAttribute('aria-expanded','false');
 toggle.addEventListener('click',()=>{details.hidden=!details.hidden;toggle.setAttribute('aria-expanded',String(!details.hidden));});
 dialog.append(toggle,details);
 if(document.body.classList.contains('graffiti-overview')){
  const thumbnails=document.createElement('nav');thumbnails.className='artwork-thumbnails';thumbnails.setAttribute('aria-label','Choose an artwork');
  document.querySelectorAll('.graffiti-artwork').forEach(artwork=>{
   const thumb=document.createElement('button');thumb.setAttribute('aria-label','Enlarge '+artwork.dataset.title);
   const picture=document.createElement('img');picture.src=artwork.querySelector('img').getAttribute('src').replace('-preview.jpg','-mobile.jpg');picture.alt='';picture.decoding='async';
   thumb.append(picture);thumb.addEventListener('click',()=>artwork.click());thumbnails.append(thumb);
  });
  document.querySelector('.heading').after(thumbnails);
 }
 document.querySelectorAll('.graffiti-artwork').forEach(button=>{
  button.addEventListener('click',()=>{
   opener=button;
   image.src=button.querySelector('img').currentSrc;
   image.alt=button.dataset.title;
   title.textContent=button.dataset.title;
   note.textContent=button.dataset.size ? button.dataset.size+' · Original artwork by Fulatronik' : 'Original artwork by Fulatronik';
   details.hidden=true;toggle.hidden=false;toggle.setAttribute('aria-expanded','false');
   {
    details.replaceChildren();
    const meta=document.createElement('p');meta.textContent=[button.dataset.size,button.dataset.medium,button.dataset.year].filter(Boolean).join('    ');
    const story=document.createElement('p');story.className='overview-story';story.textContent=button.dataset.description;
    const credit=document.createElement('p');credit.textContent='Original artwork by Fulatronik';
    if(meta.textContent.trim())details.append(meta);
    if(story.textContent.trim())details.append(story);
    details.append(credit);note.textContent='';
   }
   dialog.showModal();
  });
  {
   const info=document.createElement('button');info.className='overview-info';info.innerHTML=sprayIcon;info.setAttribute('aria-label','Read '+button.dataset.title+' details');
   info.addEventListener('click',()=>{button.click();details.hidden=false;toggle.setAttribute('aria-expanded','true');});
   const wrapper=document.createElement('div');wrapper.className='overview-exhibit';button.before(wrapper);wrapper.append(button,info);
  }
 });
 document.querySelector('#close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{
  if(event.target!==dialog)return;
  const rect=dialog.getBoundingClientRect();
  if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();
 });
 dialog.addEventListener('close',()=>{image.removeAttribute('src');opener?.focus();});
})();
