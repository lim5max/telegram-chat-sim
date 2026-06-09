import{c as d}from"./createLucideIcon-zvpSDjYJ.js";import{S as u,C as r,t as l}from"./index-Cd3vEe19.js";const y=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],$=d("sparkles",y),m="chatlogix:customStyleUsage";function a(){return new Date().toISOString().slice(0,10)}function i(){try{const t=localStorage.getItem(m);if(!t)return{date:a(),used:0};const e=JSON.parse(t);return e.date!==a()?{date:a(),used:0}:e}catch{return{date:a(),used:0}}}function S(t){try{localStorage.setItem(m,JSON.stringify(t))}catch{}}function h(){return Math.max(0,r-i().used)}function T(){return i().prompt}function _(t){const e=i();if(e.used>=r)return{ok:!1,remaining:0,reason:"quota"};const n={date:a(),used:e.used+1,prompt:t.trim()};return S(n),{ok:!0,remaining:r-n.used}}function f(t){return u.find(e=>e.id===t)??u[0]}const p=`Давай покажу, как этот стиль будет выглядеть на примере — вот один день из чата «Здоровое питание»:

🗓 Что обсуждалось вчера 28.04.2026
Всего было написано **112 сообщений**`,g=`Интересные ссылки:
[Калькулятор КБЖУ онлайн]
[Подборка рецептов на неделю]`;function w(t,e){const n=f(t),s=n.samples[e];let o;return t==="custom"?o=`${`${n.emoji} Саммари в вашем стиле`}

${s.bullets.join(`

`)}`:o=[`${n.emoji} ${s.header}`,"",...s.bullets.map(c=>`• ${c}`)].join(`
`),t!=="custom"?[p,"",o,"",g].join(`
`):o}function C(t,e){return e==="custom"?[{label:"🎨 Посмотреть другие стили",action:`summary-style-pick:${t}`}]:[{label:"✅ Сохранить стиль",action:`summary-save:${t}:${e}`},{label:"🎨 Посмотреть другие стили",action:`summary-style-pick:${t}`},{label:"✏️ Изменить в настройках",action:`summary-edit:${t}:${e}`}]}function E(t){l(`Стиль выбран: ${t.styleLabel}`,{description:"Показать пример саммари за вчера в чате?",action:{label:"Показать в чате",onClick:t.onShow}})}function I(t){l("Свой стиль — на тарифе PRO",{description:"3 кастомных генерации в сутки. Опишите тон одной строкой.",action:t?{label:"Купить PRO",onClick:t}:void 0})}export{$ as S,w as a,C as b,_ as c,T as d,h as e,I as f,E as s};
