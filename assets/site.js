(function(){
 const page=decodeURIComponent(location.pathname.split('/').pop()||'index.html');
 const CFG={"tag": "AQA A-Level Business (7138)", "cta": ["formula_reference.html", "Formula reference"], "units": [["guide_3_1_1_business_and_objectives.html", "3.1.1 Business & objectives"], ["guide_3_1_2_forms_of_business_and_stakeholders.html", "3.1.2 Forms & stakeholders"], ["guide_3_1_3_marketing_management.html", "3.1.3 Marketing"], ["guide_3_1_4_financial_management.html", "3.1.4 Finance"]], "groups": [["Study Tools", [["six_marker_lab.html", "6-Mark Analyse Lab"], ["nine_mark_lab.html", "9-Mark Assess Lab"], [null, "15-Mark Evaluate Lab"], ["redraft.html", "Redraft"], [null, "Calculations"], [null, "Knowledge Quiz"]]], ["Unit 3.1", [["unit31/index.html", "Unit 3.1 Complete Notes"], ["guide_3_1_1_business_and_objectives.html", "Business & objectives", "3.1.1"], ["guide_3_1_2_forms_of_business_and_stakeholders.html", "Forms & stakeholders", "3.1.2"], ["guide_3_1_3_marketing_management.html", "Marketing", "3.1.3"], ["guide_3_1_4_financial_management.html", "Finance", "3.1.4"]]], ["Units 3.2\u20133.3", [[null, "3.2.1 People management"], [null, "3.2.2 Operations"], [null, "3.2.3 Business culture"], [null, "3.3.1 Business & society"], [null, "3.3.2 External environment"], [null, "3.3.3 Strategy"], [null, "3.3.4 Change"]]]]};const units=CFG.units;const R=(document.currentScript&&document.currentScript.dataset.root)||'';
 const grp=(id,label,items)=>`<li><button aria-expanded="false" aria-controls="${id}">${label}</button><ul class="nk-menu" id="${id}">${items.map(([h,t,n])=>`<li><a href="${h?R+h:''}">${n?`<span>${n}</span>`:''}${t}</a></li>`).join('')}</ul></li>`;
 const hdr=document.createElement('header');hdr.className='site-hdr';
 hdr.innerHTML=`<div class="site-hdr__in"><a class="nk-brand" href="${R}index.html"><b>Nishkam School West London</b><small>${CFG.tag}</small></a>
 <button class="nk-burger" aria-label="Open menu" aria-expanded="false" aria-controls="siteNav"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>
 <div role="navigation" aria-label="Main"><ul class="nk-nav" id="siteNav"><li><a href="${R}index.html">Home</a></li>${CFG.groups.map((g,i)=>grp('m-'+i,g[0],g[1])).join('')}<li><a class="nk-cta" href="${R}${CFG.cta[0]}">${CFG.cta[1]}</a></li></ul></div></div>`;
 const skip=document.createElement('a');skip.className='nk-skip';skip.href='#main';skip.textContent='Skip to content';
 const bar=document.createElement('div');bar.className='nk-progress';bar.setAttribute('aria-hidden','true');
 document.body.prepend(bar);document.body.prepend(hdr);document.body.prepend(skip);
 const main=document.querySelector('main');if(main&&!main.id)main.id='main';
 hdr.querySelectorAll('a').forEach(a=>{if(decodeURIComponent(a.getAttribute('href')).split('/').pop()===page&&!(R&&page==='index.html'&&a.getAttribute('href')===R+'index.html')){a.setAttribute('aria-current','page');}});
 const nav=hdr.querySelector('.nk-nav'),burger=hdr.querySelector('.nk-burger');
 const closeMenus=except=>hdr.querySelectorAll('.nk-nav button').forEach(b=>{if(b!==except){b.setAttribute('aria-expanded','false');document.getElementById(b.getAttribute('aria-controls')).classList.remove('open');}});
 hdr.querySelectorAll('.nk-nav button').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();const o=b.getAttribute('aria-expanded')==='true';closeMenus(b);b.setAttribute('aria-expanded',String(!o));document.getElementById(b.getAttribute('aria-controls')).classList.toggle('open',!o);}));
 document.addEventListener('click',e=>{if(!hdr.contains(e.target))closeMenus();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenus();setNav(false);}});
 const setNav=o=>{nav.classList.toggle('open',o);burger.setAttribute('aria-expanded',String(o));burger.setAttribute('aria-label',o?'Close menu':'Open menu');document.body.classList.toggle('nav-open',o);};
 burger.addEventListener('click',()=>setNav(!nav.classList.contains('open')));
 const top=document.createElement('button');top.className='nk-to-top';top.setAttribute('aria-label','Back to top');top.textContent='↑';
 top.onclick=()=>scrollTo({top:0,behavior:'smooth'});document.body.append(top);
 addEventListener('scroll',()=>{const h=document.documentElement;const p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);bar.style.width=(p*100)+'%';top.classList.toggle('show',h.scrollTop>600);},{passive:true});
 const ui=units.findIndex(u=>u[0]===page);
 if(ui>=0&&main){const p=document.createElement('nav');p.className='nk-pager';p.setAttribute('aria-label','Unit navigation');
  p.innerHTML=(ui>0?`<a href="${R+units[ui-1][0]}"><small>← Previous</small>${units[ui-1][1]}</a>`:'')+(ui<units.length-1?`<a class="next" href="${R+units[ui+1][0]}"><small>Next →</small>${units[ui+1][1]}</a>`:'');
  const f=main.querySelector('footer');f?main.insertBefore(p,f):main.append(p);}
})();

document.querySelectorAll('.site-hdr .nk-nav > li > button').forEach(b=>b.addEventListener('click',()=>{const m=document.getElementById(b.getAttribute('aria-controls'));if(innerWidth>1000){const r=b.getBoundingClientRect();m.style.left=Math.min(r.left,innerWidth-m.offsetWidth-12)+'px';}else m.style.left='';}));
