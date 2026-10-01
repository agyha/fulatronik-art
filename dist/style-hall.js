'use strict';
(() => {
 const room=document.querySelector('#room'),world=document.querySelector('#world'),dialog=document.querySelector('#enlarged');
 const graffiti=document.body.dataset.hall==='graffiti';
 const works=graffiti?[
 {title:'Peace and Love 2026',file:'peace-and-love-2026.png',x:0,z:-3192,angle:0,view:{x:0,z:-2200,yaw:0}},
 {title:'Live in the moment 2026',file:'live-in-the-moment-2026.png',x:-1792,z:-1700,angle:90,view:{x:-650,z:-1700,yaw:-90}},
 {title:'Love Birds 2026',file:'love-birds-2026.png',x:1792,z:-1700,angle:-90,view:{x:650,z:-1700,yaw:90}}
 ]:[
  {title:'Bull Shark - 2026',size:'48*24',file:'bull-shark-2026-48-24.png',x:0,z:-3192,angle:0,view:{x:0,z:-2200,yaw:0}},
  {title:'Echos of the Koi 2026',size:'30*30',file:'echos-of-the-koi-2026-30-30.png',x:-1792,z:-2200,angle:90,view:{x:-650,z:-2200,yaw:-90}},
  {title:'Shadows of the ocean 2026',size:'36*36',file:'shadows-of-the-ocean-2026-36-36.png',x:-1792,z:-700,angle:90,view:{x:-650,z:-700,yaw:-90}},
  {title:'DNA of the Ocean 2026',size:'30*40',file:'dna-of-the-ocean-2026-30-40.png',x:1792,z:-2200,angle:-90,view:{x:650,z:-2200,yaw:90}},
  {title:'Abyssal Reef 2026',size:'20*16',file:'abyssal-reef-2026-20-16.png',x:1792,z:-700,angle:-90,view:{x:650,z:-700,yaw:90}},
  {title:'Heart in the chaos 2020',size:'24*24',file:'heart-in-the-chaos-2020-24-24.png',x:-950,z:-3192,angle:0,view:{x:-950,z:-2500,yaw:0}}
 ];
 if(!graffiti){works.forEach(w=>{w.z*=1.65;w.view.z*=1.65;});}
 if(!graffiti){Object.assign(works[0],{x:200,z:-2808,angle:0,view:{x:200,z:-1750,yaw:0}});}
 const depth=graffiti?3200:5280;
 const obstacles=[];
 function box(cls,w,h,d,x,y,z,solid=false){
 plane(cls,w,h,x,y,z+d/2);plane(cls,w,h,x,y,z-d/2,180);
 plane(cls,d,h,x-w/2,y,z,-90);plane(cls,d,h,x+w/2,y,z,90);
 plane(cls,w,d,x,y-h/2,z,0,90);plane(cls,w,d,x,y+h/2,z,0,-90);
 if(solid)obstacles.push({x,z,w:w+260,d:d+260});
 }
 function collide(previous){if(graffiti)return;for(const o of obstacles){if(Math.abs(pose.x-o.x)<o.w/2&&Math.abs(pose.z-o.z)<o.d/2){pose.x=previous.x;pose.z=previous.z;break;}}}

 function plane(cls,w,h,x,y,z,ry=0,rx=0,text=''){
  const el=document.createElement('div');el.className='plane '+cls;el.textContent=text;
  Object.assign(el.style,{width:w+'px',height:h+'px',left:-w/2+'px',top:-h/2+'px',transform:`translate3d(${x}px,${y}px,${z}px) rotateY(${ry}deg) rotateX(${rx}deg)`});world.append(el);
 }
 plane('wall',3600,1100,0,-50,-depth);plane('wall',depth,1100,-1800,-50,-depth/2,90);plane('wall',depth,1100,1800,-50,-depth/2,-90);plane('wall',3600,1100,0,-50,0,180);
 plane('floor',3600,depth,0,500,-depth/2,0,90);plane('ceiling',3600,depth,0,-600,-depth/2,0,-90);plane('light',graffiti?1500:2300,graffiti?2400:4000,0,-595,-depth/2,0,-90);plane('sign',1100,460,0,-50,-8,180,0,'FULATRONIK · LET ART SPEAK');
 if(!graffiti){
 box('partition',1040,970,85,200,15,-2855,true);
 box('partition',520,1050,90,1150,-25,-4300,true);

 plane('sun-patch',2500,2900,100,497,-2200,0,90);
 for(const x of [-1200,1200]){
 box('track',22,25,4200,x,-505,-2640);
 for(const z of [-1000,-2400,-3800])box('spot',85,100,95,x,-445,z);
 }
 plane('rear-title',1250,140,-150,-460,-5272,0,0,'FULATRONIK');
 }
 let pose={x:graffiti?0:-550,z:-350,yaw:graffiti?0:6},entered=false,drag=null,dragged=false,lastFocus=null;
 const keys=new Set();
 function render(){const focal=Math.min(700,room.clientWidth*.72);room.style.perspective=focal+'px';room.style.perspectiveOrigin='50% 48%';world.style.transform=`translateZ(${focal}px) rotateY(${pose.yaw}deg) translate3d(${-pose.x}px,0,${-pose.z}px)`;}
 function enter(){entered=true;room.focus({preventScroll:true});}
 works.forEach((work,index)=>{ const placeholder=work.title.startsWith('Placeholder ');
  const button=document.createElement('button');button.className='picture';button.tabIndex=-1;button.setAttribute('aria-label','Enlarge '+work.title);
  button.style.transform=`translate3d(${work.x}px,-15px,${work.z}px) rotateY(${work.angle}deg)`;
  const frame=document.createElement('span');frame.className='frame';const img=document.createElement('img');img.src='assets/'+work.file;img.alt=work.title+(placeholder?' — temporary reference artwork':' by Fulatronik');img.draggable=false;frame.append(img);
  const caption=document.createElement('span');caption.className='caption';caption.textContent=work.title;if(work.size){const size=document.createElement('small');size.className='painting-size';size.textContent=work.size;caption.append(size);}const note=document.createElement('small');note.textContent=placeholder?'ARTWORK TO BE SELECTED':'FULATRONIK / CAMILA';caption.append(note);button.append(frame,caption);world.append(button);
  function enlarge(){keys.clear();lastFocus=document.activeElement;document.querySelector('#large-image').src=img.src;document.querySelector('#large-image').alt=img.alt;const largeTitle=document.querySelector('#large-title');largeTitle.textContent=work.title;if(work.size){const dimensions=document.createElement('small');dimensions.className='painting-size';dimensions.textContent=work.size;largeTitle.append(dimensions);}document.querySelector('#large-note').textContent=placeholder?'Temporary reference: Live in the moment. Final artwork to be selected.':'Original artwork by Fulatronik';dialog.showModal();}
  button.addEventListener('click',()=>{if(entered&&!dragged)enlarge();});
  const visit=document.createElement('button');visit.innerHTML=`<small>EXHIBIT 0${index+1}</small>${work.title}${work.size?'<small class="painting-size">'+work.size+'</small>':''}`;visit.addEventListener('click',()=>{enter();pose={...work.view};render();});document.querySelector('#exhibits').append(visit);
  const accessible=document.createElement('button');accessible.textContent='Enlarge '+work.title;accessible.className='accessible-art';accessible.addEventListener('click',enlarge);document.querySelector('#exhibits').append(accessible);
 });
 document.querySelector('#reset').addEventListener('click',()=>{enter();pose={x:graffiti?0:-550,z:-350,yaw:graffiti?0:6};render();});
 document.querySelector('#close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>lastFocus?.focus());
 room.addEventListener('keydown',e=>{const k=e.key.toLowerCase();if(['w','a','s','d','arrowleft','arrowright','arrowup','arrowdown'].includes(k)&&entered){if(!keys.has(k)){step(k);render();}keys.add(k);e.preventDefault();}});
 function step(k){const previous={...pose};const a=pose.yaw*Math.PI/180;if(k==='arrowleft')pose.yaw-=3;else if(k==='arrowright')pose.yaw+=3;else{const f=['w','arrowup'].includes(k)?1:['s','arrowdown'].includes(k)?-1:0;const s=k==='d'?1:k==='a'?-1:0;pose.x=Math.max(-1500,Math.min(1500,pose.x+(Math.sin(a)*f+Math.cos(a)*s)*25));pose.z=Math.max(-depth+300,Math.min(-250,pose.z+(-Math.cos(a)*f+Math.sin(a)*s)*25));collide(previous);}}
 window.addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));window.addEventListener('blur',()=>keys.clear());document.addEventListener('visibilitychange',()=>keys.clear());room.addEventListener('blur',()=>keys.clear());
 document.querySelectorAll('[data-key]').forEach(b=>{b.addEventListener('click',e=>{if(e.detail===0){enter();step(b.dataset.key);render();}});b.addEventListener('pointerdown',e=>{enter();step(b.dataset.key);render();keys.add(b.dataset.key);b.setPointerCapture(e.pointerId);e.preventDefault();});['pointerup','pointercancel','lostpointercapture'].forEach(type=>b.addEventListener(type,()=>keys.delete(b.dataset.key)));});
 room.addEventListener('pointerdown',e=>{if(!entered||e.target.closest('#entrance'))return;drag={x:e.clientX,yaw:pose.yaw};dragged=false;room.focus();});
 window.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x;if(Math.abs(dx)>5)dragged=true;pose.yaw=drag.yaw-dx*.18;render();});window.addEventListener('pointerup',()=>{drag=null;});window.addEventListener('pointercancel',()=>{drag=null;});
 let last=0;function tick(now){const dt=Math.min((now-last)/1000,.05);last=now;if(entered&&!dialog.open&&keys.size){const previous={...pose};const turn=(keys.has('arrowright')?1:0)-(keys.has('arrowleft')?1:0);pose.yaw+=turn*65*dt;const forward=(keys.has('w')||keys.has('arrowup')?1:0)-(keys.has('s')||keys.has('arrowdown')?1:0);const side=(keys.has('d')?1:0)-(keys.has('a')?1:0);const a=pose.yaw*Math.PI/180,speed=520*dt/(forward&&side?Math.SQRT2:1);pose.x=Math.max(-1500,Math.min(1500,pose.x+(Math.sin(a)*forward+Math.cos(a)*side)*speed));pose.z=Math.max(-depth+300,Math.min(-250,pose.z+(-Math.cos(a)*forward+Math.sin(a)*side)*speed));collide(previous);render();}requestAnimationFrame(tick);}window.addEventListener('resize',render);render();enter();requestAnimationFrame(tick);
})();










