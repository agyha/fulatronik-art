'use strict';
(() => {
 const room=document.querySelector('#room'),world=document.querySelector('#world'),dialog=document.querySelector('#enlarged');
 const graffiti=document.body.dataset.hall==='graffiti';
 const works=graffiti?[
 {title:'Peace and Love 2026',file:'peace-and-love-2026.png',x:0,z:-3192,angle:0,view:{x:0,z:-2200,yaw:0}},
 {title:'Live in the moment 2026',file:'live-in-the-moment-2026.png',x:-1792,z:-1700,angle:90,view:{x:-650,z:-1700,yaw:-90}},
 {title:'Love Birds 2026',file:'love-birds-2026.png',x:1792,z:-1700,angle:-90,view:{x:650,z:-1700,yaw:90}}
 ]:[
  {title:'Bull Shark - 2026',file:'bull-shark-2026.png',x:0,z:-3192,angle:0,view:{x:0,z:-2200,yaw:0}},
  {title:'Placeholder 02',file:'fula-211-live-in-the-moment-2026.jpeg',x:-1792,z:-2200,angle:90,view:{x:-650,z:-2200,yaw:-90}},
  {title:'Placeholder 03',file:'fula-211-live-in-the-moment-2026.jpeg',x:-1792,z:-700,angle:90,view:{x:-650,z:-700,yaw:-90}},
  {title:'Placeholder 04',file:'fula-211-live-in-the-moment-2026.jpeg',x:1792,z:-2200,angle:-90,view:{x:650,z:-2200,yaw:90}},
  {title:'Placeholder 05',file:'fula-211-live-in-the-moment-2026.jpeg',x:1792,z:-700,angle:-90,view:{x:650,z:-700,yaw:90}}
 ];
 function plane(cls,w,h,x,y,z,ry=0,rx=0,text=''){
  const el=document.createElement('div');el.className='plane '+cls;el.textContent=text;
  Object.assign(el.style,{width:w+'px',height:h+'px',left:-w/2+'px',top:-h/2+'px',transform:`translate3d(${x}px,${y}px,${z}px) rotateY(${ry}deg) rotateX(${rx}deg)`});world.append(el);
 }
 plane('wall',3600,1100,0,-50,-3200);plane('wall',3200,1100,-1800,-50,-1600,90);plane('wall',3200,1100,1800,-50,-1600,-90);plane('wall',3600,1100,0,-50,0,180);
 plane('floor',3600,3200,0,500,-1600,0,90);plane('ceiling',3600,3200,0,-600,-1600,0,-90);plane('light',1500,2400,0,-595,-1600,0,-90);plane('sign',1100,460,0,-50,-8,180,0,'FULATRONIK · LET ART SPEAK');
 let pose={x:0,z:-350,yaw:0},entered=false,drag=null,dragged=false,lastFocus=null;
 const keys=new Set();
 function render(){const focal=Math.min(700,room.clientWidth*.72);room.style.perspective=focal+'px';room.style.perspectiveOrigin='50% 48%';world.style.transform=`translateZ(${focal}px) rotateY(${pose.yaw}deg) translate3d(${-pose.x}px,0,${-pose.z}px)`;}
 function enter(){entered=true;room.focus({preventScroll:true});}
 works.forEach((work,index)=>{ const placeholder=!graffiti && index>0;
  const button=document.createElement('button');button.className='picture';button.tabIndex=-1;button.setAttribute('aria-label','Enlarge '+work.title);
  button.style.transform=`translate3d(${work.x}px,-15px,${work.z}px) rotateY(${work.angle}deg)`;
  const frame=document.createElement('span');frame.className='frame';const img=document.createElement('img');img.src='assets/'+work.file;img.alt=work.title+(placeholder?' — temporary reference artwork':' by Fulatronik');img.draggable=false;frame.append(img);
  const caption=document.createElement('span');caption.className='caption';caption.textContent=work.title;const note=document.createElement('small');note.textContent=placeholder?'ARTWORK TO BE SELECTED':'FULATRONIK / CAMILA';caption.append(note);button.append(frame,caption);world.append(button);
  function enlarge(){keys.clear();lastFocus=document.activeElement;document.querySelector('#large-image').src=img.src;document.querySelector('#large-image').alt=img.alt;document.querySelector('#large-title').textContent=work.title;document.querySelector('#large-note').textContent=placeholder?'Temporary reference: Live in the moment. Final artwork to be selected.':'Original artwork by Fulatronik';dialog.showModal();}
  button.addEventListener('click',()=>{if(entered&&!dragged)enlarge();});
  const visit=document.createElement('button');visit.innerHTML=`<small>EXHIBIT 0${index+1}</small>${work.title}`;visit.addEventListener('click',()=>{enter();pose={...work.view};render();});document.querySelector('#exhibits').append(visit);
  const accessible=document.createElement('button');accessible.textContent='Enlarge '+work.title;accessible.className='accessible-art';accessible.addEventListener('click',enlarge);document.querySelector('#exhibits').append(accessible);
 });
 document.querySelector('#reset').addEventListener('click',()=>{enter();pose={x:0,z:-350,yaw:0};render();});
 document.querySelector('#close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>lastFocus?.focus());
 room.addEventListener('keydown',e=>{const k=e.key.toLowerCase();if(['w','a','s','d','arrowleft','arrowright','arrowup','arrowdown'].includes(k)&&entered){if(!keys.has(k)){step(k);render();}keys.add(k);e.preventDefault();}});
 function step(k){const a=pose.yaw*Math.PI/180;if(k==='arrowleft')pose.yaw-=3;else if(k==='arrowright')pose.yaw+=3;else{const f=['w','arrowup'].includes(k)?1:['s','arrowdown'].includes(k)?-1:0;const s=k==='d'?1:k==='a'?-1:0;pose.x=Math.max(-1500,Math.min(1500,pose.x+(Math.sin(a)*f+Math.cos(a)*s)*25));pose.z=Math.max(-2900,Math.min(-250,pose.z+(-Math.cos(a)*f+Math.sin(a)*s)*25));}}
 window.addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));window.addEventListener('blur',()=>keys.clear());document.addEventListener('visibilitychange',()=>keys.clear());room.addEventListener('blur',()=>keys.clear());
 document.querySelectorAll('[data-key]').forEach(b=>{b.addEventListener('click',e=>{if(e.detail===0){enter();step(b.dataset.key);render();}});b.addEventListener('pointerdown',e=>{enter();step(b.dataset.key);render();keys.add(b.dataset.key);b.setPointerCapture(e.pointerId);e.preventDefault();});['pointerup','pointercancel','lostpointercapture'].forEach(type=>b.addEventListener(type,()=>keys.delete(b.dataset.key)));});
 room.addEventListener('pointerdown',e=>{if(!entered||e.target.closest('#entrance'))return;drag={x:e.clientX,yaw:pose.yaw};dragged=false;room.focus();});
 window.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x;if(Math.abs(dx)>5)dragged=true;pose.yaw=drag.yaw-dx*.18;render();});window.addEventListener('pointerup',()=>{drag=null;});window.addEventListener('pointercancel',()=>{drag=null;});
 let last=0;function tick(now){const dt=Math.min((now-last)/1000,.05);last=now;if(entered&&!dialog.open&&keys.size){const turn=(keys.has('arrowright')?1:0)-(keys.has('arrowleft')?1:0);pose.yaw+=turn*65*dt;const forward=(keys.has('w')||keys.has('arrowup')?1:0)-(keys.has('s')||keys.has('arrowdown')?1:0);const side=(keys.has('d')?1:0)-(keys.has('a')?1:0);const a=pose.yaw*Math.PI/180,speed=520*dt/(forward&&side?Math.SQRT2:1);pose.x=Math.max(-1500,Math.min(1500,pose.x+(Math.sin(a)*forward+Math.cos(a)*side)*speed));pose.z=Math.max(-2900,Math.min(-250,pose.z+(-Math.cos(a)*forward+Math.sin(a)*side)*speed));render();}requestAnimationFrame(tick);}window.addEventListener('resize',render);render();enter();requestAnimationFrame(tick);
})();



