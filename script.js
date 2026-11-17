(function(){
var r=document.documentElement;
document.getElementById('tt').addEventListener('click',function(){
var cur=r.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
r.setAttribute('data-theme',cur==='dark'?'light':'dark');
});
document.getElementById('qf').addEventListener('submit',function(e){
e.preventDefault();
var v=function(id){return document.getElementById(id).value.trim();};
var t='Hello Rohny Techs, I would like a quote.\nName: '+v('qn')+'\nService: '+v('qs')+'\nLocation: '+v('ql')+'\nDetails: '+v('qm');
window.open('https://wa.me/254790575716?text='+encodeURIComponent(t),'_blank');
});
})();

(function(){
var r=document.getElementById('kw'),bar=document.getElementById('bar'),n,kw,k;
function calc(){k=+r.value;kw=k/30/(5*0.75);n=Math.ceil(kw*1000/550);
document.getElementById('kwo').textContent=k;
document.getElementById('r1').textContent=kw.toFixed(1)+' kW';
document.getElementById('r2').textContent=n;
document.getElementById('r3').textContent=Math.round(n*2.6)+' m\u00b2';}
r.addEventListener('input',calc);calc();
document.getElementById('estbtn').addEventListener('click',function(){
document.getElementById('qs').value='Solar works';
document.getElementById('qm').value='From the estimator: about '+k+' kWh per month, roughly a '+kw.toFixed(1)+' kW system ('+n+' panels). Please advise.';
});
function sc(){bar.classList.toggle('on',window.scrollY>window.innerHeight*0.8);}
window.addEventListener('scroll',sc,{passive:true});sc();
})();

(function(){
var cats=['solar','plumbing','plumbing','plumbing','heating','water','heating','solar','plumbing','solar','irrigation','heating'];
var figs=[].slice.call(document.querySelectorAll('.gal figure'));
var lb=document.getElementById('lb'),li=lb.querySelector('img');
figs.forEach(function(f,i){
f.dataset.cat=cats[i]||'solar';f.tabIndex=0;f.setAttribute('role','button');
function open(){var im=f.querySelector('img');li.src=im.src;li.alt=im.alt;lb.showModal();}
f.addEventListener('click',open);
f.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
});
lb.addEventListener('click',function(){lb.close();});
var chips=[].slice.call(document.querySelectorAll('#chips button'));
chips.forEach(function(b){b.addEventListener('click',function(){
chips.forEach(function(c){c.setAttribute('aria-pressed',c===b?'true':'false');});
figs.forEach(function(f){f.hidden=b.dataset.f!=='all'&&f.dataset.cat!==b.dataset.f;});
});});
})();
