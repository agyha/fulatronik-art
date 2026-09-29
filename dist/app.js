'use strict';
const legacy={work:'work.html',exhibition:'art-hall.html',artist:'meet-camila.html',contact:'connect.html'};
if((location.pathname.endsWith('/')||location.pathname.endsWith('/index.html'))&&legacy[location.hash.slice(1)])location.replace(legacy[location.hash.slice(1)]);
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
function closeMenu(){menu?.setAttribute('aria-expanded','false');nav?.classList.remove('open');}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav?.classList.toggle('open',open);});
nav?.addEventListener('click',closeMenu);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>document.getElementById(b.dataset.close)?.close()));
const config=window.FULATRONIK_SITE||{};
for(const [id,dialog,url] of [['mailing-list','mailing-dialog',config.mailingListUrl],['art-inquiry','inquiry-dialog',config.inquiryUrl],['events-link','events-dialog','']])document.getElementById(id)?.addEventListener('click',()=>{if(url&&/^(https:\/\/|mailto:)/i.test(url))window.open(url,'_blank','noopener,noreferrer');else document.getElementById(dialog)?.showModal();});
