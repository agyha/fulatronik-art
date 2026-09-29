'use strict';
const works = Array.isArray(window.FULATRONIK_ARTWORKS) ? window.FULATRONIK_ARTWORKS : [];
const $ = (selector) => document.querySelector(selector);
$('#year').textContent = new Date().getFullYear();
const menu = $('.menu-toggle');
function closeMenu(){ menu.setAttribute('aria-expanded','false'); $('#navigation').classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); $('#navigation').classList.toggle('open', open); });
$('#navigation').addEventListener('click', event => { if(event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => document.getElementById(button.dataset.close).close()));
function openArtwork(work) {
  if (!work || work.placeholder) return;
  $('#art-title').textContent = work.title;
  $('#art-image').src = work.image;
  $('#art-image').alt = work.alt || work.title;
  $('#art-meta').textContent = [work.code, work.year, work.medium, work.dimensions].filter(Boolean).join(' · ');
  $('#art-story').textContent = work.story || '';
  $('#art-dialog').showModal();
}
const actualWorks = works.filter(work => !work.placeholder);
for (const [index, work] of works.entries()) {
  const card = document.createElement(work.placeholder ? 'article' : 'button');
  card.className = work.placeholder ? 'placeholder-card' : 'art-card';
  if(work.placeholder){
    const panel = document.createElement('div'); panel.className = 'art-placeholder';
    const number = document.createElement('span'); number.className='slot-number'; number.textContent=String(index+1).padStart(2,'0');
    const label = document.createElement('span'); label.textContent='ARTWORK TO BE SELECTED';
    panel.append(number,label); card.append(panel);
  } else {
    const img = document.createElement('img'); img.src=work.image; img.alt=work.alt || work.title; img.loading='lazy';
    card.append(img); card.addEventListener('click', () => openArtwork(work));
  }
  const title=document.createElement('h3'); title.textContent=work.title;
  const meta=document.createElement('p'); meta.textContent=work.placeholder ? 'Reserved for a future painting' : [work.code,work.year].filter(Boolean).join(' / ');
  card.append(title,meta); $('#artwork-grid')?.append(card);
}

if ($('#artwork-empty')) $('#artwork-empty').hidden=works.length>0;
let wall=0;
function showWall(){
  const angles=[0,-90,90];
  $('#hall-room').style.transform=`translateZ(${matchMedia('(max-width:600px)').matches?20:140}px) rotateY(${angles[wall]}deg)`;
  $('#hall-position').textContent=`${['Main wall','Left wall','Right wall'][wall]} · ${wall+1} of 3`;
  document.querySelectorAll('.room-wall').forEach((element,index)=>{element.inert=index!==wall;});
}
function openHall(kind){
 const style=kind==='style';const count=style?5:1;
 $('#hall-title').textContent=style?'My Style Hall':'Graffiti Art Hall';
 $('#hall-dialog').classList.toggle('style-hall',style);
 $('#hall-dialog').classList.toggle('multi-picture-hall',style);
 $('#hall-help').textContent=style ? 'Bull Shark - 2026 and four picture placeholders. The remaining spaces use a temporary reference painting. Use the arrows to explore all three walls, or select a picture for a closer look.' : 'Peace and Love 2026. Select the painting for a closer look.';
 $('#hall-viewport').hidden=false;$('#hall-flat-gallery').hidden=true;$('#hall-gallery').textContent='View as gallery';
 $('#hall-prev').hidden=false;$('#hall-next').hidden=false;$('#hall-position').hidden=false;
 $('#hall-flat-gallery').replaceChildren();
 document.querySelectorAll('.wall-art').forEach(el=>el.replaceChildren());
 $('.room-label').innerHTML=style?'MY STYLE HALL<br><small>FULATRONIK BY CAMILA</small>':'GRAFFITI ART HALL<br><small>FULATRONIK BY CAMILA</small>';
 for(let i=0;i<count;i++){
  const title=style?(i===0?'Bull Shark - 2026':'My Style Hall / Placeholder '+String(i+1).padStart(2,'0')):'Peace and Love 2026';
  const record=style && i===0?{title,image:'assets/bull-shark-2026.png',alt:'Bull Shark - 2026 by Fulatronik',code:'',year:'',story:''}:style?{...actualWorks[0],title,code:'ARTWORK TO BE SELECTED',year:'',story:'Temporary reference image: Live in the moment. The final painting for this space will be selected later.'}:{title,image:'assets/peace-and-love-2026.png',alt:'Peace and Love 2026 by Fulatronik',code:'',year:'',story:''};
  const frame=document.createElement('button');frame.className='hall-picture';frame.setAttribute('aria-label',title);
  const image=document.createElement('img');image.src=record.image;image.alt=style && i>0?title+' — temporary Live in the moment reference':record.alt;
  const label=document.createElement('span');label.textContent=style && i>0?'PLACEHOLDER '+String(i+1).padStart(2,'0'):title;
  frame.append(image,label);frame.addEventListener('click',()=>openArtwork(record));
  const flat=frame.cloneNode(true);flat.addEventListener('click',()=>openArtwork(record));$('#hall-flat-gallery').append(flat);
  document.getElementById('wall-'+['back','left','right'][i%3]+'-art').append(frame);
 }
 wall=0;showWall();$('#hall-dialog').showModal();
}
$('#enter-hall').addEventListener('click',()=>openHall('graffiti'));
$('#enter-style-hall').addEventListener('click',()=>openHall('style'));
$('#hall-prev').addEventListener('click',()=>{wall=(wall+2)%3;showWall();});
$('#hall-next').addEventListener('click',()=>{wall=(wall+1)%3;showWall();});
$('#hall-dialog').addEventListener('keydown',event=>{if($('#art-dialog').open)return;if(event.key==='ArrowRight'){event.preventDefault();$('#hall-next').click();}if(event.key==='ArrowLeft'){event.preventDefault();$('#hall-prev').click();}});
$('#hall-gallery').addEventListener('click',()=>{
 const flat=$('#hall-flat-gallery').hidden;
 $('#hall-flat-gallery').hidden=!flat;$('#hall-viewport').hidden=flat;
 $('#hall-prev').hidden=flat;$('#hall-next').hidden=flat;$('#hall-position').hidden=flat;
 $('#hall-gallery').textContent=flat?'Return to 3D hall':'View as gallery';
});
window.addEventListener('resize',()=>{if($('#hall-dialog').open)showWall();});
// Decorative brick courses, kept outside the accessibility tree.
document.querySelectorAll('.brick').forEach(wallElement=>{
  const texture=document.createElement('div');texture.className='brick-texture';texture.setAttribute('aria-hidden','true');
  for(let row=0;row<24;row++){
    const course=document.createElement('div');course.className='brick-row';
    for(let brick=0;brick<24;brick++)course.append(document.createElement('i'));
    texture.append(course);
  }
  wallElement.prepend(texture);
});

const siteConfig=window.FULATRONIK_SITE || {};
$('#mailing-list').addEventListener('click',()=>{
  if(siteConfig.mailingListUrl && /^https:\/\//i.test(siteConfig.mailingListUrl)) window.open(siteConfig.mailingListUrl,'_blank','noopener,noreferrer');
  else $('#mailing-dialog').showModal();
});
if(siteConfig.inquiryUrl && /^(https:\/\/|mailto:)/i.test(siteConfig.inquiryUrl)) document.querySelectorAll('.inquiry-link').forEach(link=>{link.href=siteConfig.inquiryUrl;});
$('#art-inquiry').addEventListener('click',()=>{
  if(siteConfig.inquiryUrl && /^(https:\/\/|mailto:)/i.test(siteConfig.inquiryUrl)) window.open(siteConfig.inquiryUrl,'_blank','noopener,noreferrer');
  else $('#inquiry-dialog').showModal();
});






$('#events-link').addEventListener('click',()=>$('#events-dialog').showModal());
