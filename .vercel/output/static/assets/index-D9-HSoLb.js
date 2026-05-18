import{u as c,j as e,L as xe,a as Y,R as pe,r as b}from"./index-B2NpQMKb.js";import{c as g}from"./createLucideIcon-DTcjfsc5.js";const be=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],he=g("app-window",be);const fe=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],ge=g("bot",fe);const ye=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Z=g("chevron-left",ye);const ke=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],ee=g("ellipsis-vertical",ke);const je=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],H=g("mic",je);const ve=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],te=g("paperclip",ve);const we=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Se=g("phone",we);const Ne=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ae=g("search",Ne);const $e=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],ne=g("send",$e);const Ce=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],Me=g("smile",Ce);const _e=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Pe=g("users",_e);const Ie=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ze=g("x",Ie),X=()=>{const s=new Date;return`${String(s.getHours()).padStart(2,"0")}:${String(s.getMinutes()).padStart(2,"0")}`};let Ae=1e3;const Q=()=>++Ae,Te=[{id:1,from:"bot",time:"09:42",text:`👋 Привет! Я — ChatLogix.

Помогаю управлять потоком информации и улучшаю взаимодействие между участниками чатов. Работаю как внутри добавленных чатов, так и лично для вас.

С чего начнём?`,buttons:[{label:"📊 Расскажи о пользе для чата",action:"onboard-admin"},{label:"✨ Расскажи о пользе для меня",action:"onboard-user"}]}];function Fe(){const s=c(o=>o.tabMode),m=c(o=>o.setTabMode);return e.jsxs("div",{className:"min-h-screen flex flex-col",children:[e.jsx("div",{className:"sticky top-0 z-20 backdrop-blur-xl bg-background/70 border-b border-white/8",children:e.jsxs("div",{className:"max-w-[640px] mx-auto px-3 py-2 flex gap-2",children:[e.jsx("button",{onClick:()=>m("private"),className:`flex-1 text-[12px] font-medium py-2 rounded-full transition ${s==="private"?"bg-white/15 text-white":"bg-white/5 text-muted-foreground"}`,children:"💬 ЛС с ботом"}),e.jsx("button",{onClick:()=>m("group"),className:`flex-1 text-[12px] font-medium py-2 rounded-full transition ${s==="group"?"bg-white/15 text-white":"bg-white/5 text-muted-foreground"}`,children:"🔥 Группа"}),e.jsxs(xe,{to:"/home",className:"text-[12px] font-medium py-2 px-3 rounded-full bg-gradient-to-r from-[oklch(0.55_0.16_225)] to-[oklch(0.58_0.14_245)] text-white flex items-center gap-1",children:[e.jsx(he,{size:13})," Mini App"]})]})}),s==="private"?e.jsx(Le,{}):e.jsx(Be,{})]})}function Le(){const s=Y(),m=pe.useSearch(),o=c(t=>t.sendAnonymous),i=c(t=>t.chats),f=c(t=>t.totalAnonSentToday),x=c(t=>t.superSummaryOn),p=c(t=>t.setSuperSummary),$=c(t=>t.superPodcastOn),k=c(t=>t.setSuperPodcast),y=c(t=>t.superPodcastSubscription),M=c(t=>t.superPodcastFreeMinutesUsed),[v,_]=b.useState(Te),[C,B]=b.useState(!1),[w,r]=b.useState(""),[S,h]=b.useState("idle"),[P,O]=b.useState("idle"),[N,q]=b.useState(null),[U,G]=b.useState(""),[E,oe]=b.useState(!1),[re,R]=b.useState(!1),[K,ie]=b.useState(null),D=b.useRef(null),I=c(t=>t.toggleFeature),le=c(t=>t.pushMessage),ce=c(t=>t.setActiveChat),de=c(t=>t.setTabMode);b.useEffect(()=>{D.current?.scrollTo({top:D.current.scrollHeight,behavior:"smooth"})},[v,C]),b.useEffect(()=>{if(m.anon){const t=i.find(d=>d.id===m.anon&&d.anonymous?.active);t&&(q(t.id),h("compose"),n({text:`📣 Чат «${t.name}»
Напиши анонимное сообщение. Никто не узнает автора 🤫`})),s({to:"/",replace:!0})}},[]);const n=t=>{B(!0),setTimeout(()=>{B(!1),_(d=>[...d,{id:Q(),from:"bot",time:X(),...t}])},500)},V=t=>_(d=>[...d,{id:Q(),from:"user",time:X(),text:t}]),ue=t=>{R(!1),ie(t);const d=i.find(T=>T.id===t);if(!d)return;const a=["💬","💡","📊","🗂","📍"],l=d.topics.map(()=>Math.floor(Math.random()*40+8));l.sort((T,W)=>W-T);const u=d.topics.map((T,W)=>`${a[W%a.length]} ${T} (**${l[W]} сообщений**)`).join(`
`),j=200,A=Math.min(d.used,j),me=d.used>j?`Обработано **${A} из ${d.used}** сообщений (бесплатный лимит — ${j}/день). Увеличить можно в настройках.`:`Саммари обрабатывает бесплатно до **${j} сообщений/день**.`;le(d.id,{from:"bot",text:`В любом активном чате одна и та же история: однотипные вопросы, флуд, тяжело читать все сообщения если пропустил пару дней в чате, потухающая активность через время.

Меня зовут **ChatLogix**, я AI-ассистент этого чата. У меня есть навыки для чата чтобы:

🎯 Держать участников чата в курсе происходящего сводками и подкастом
🔎 Отвечать на вопросы исходя из истории чата
🛡 Чистить чат от флуда, спама и наплыва ботов
🎙️ Расшифровывать голосовые сообщения
🎉 Поддерживать активность чата за счёт развлекательных навыков

Если нужного навыка нет — расскажите свою идею в ЛС, мы посмотрим и попробуем сделать.

А ещё у меня есть персональные навыки, которые работают в ЛС бота. И помогают настроить поток информации под себя.

[✨ Узнать про личную пользу в боте](open-bot-personal)`}),n({text:`📨 Я отправил приветствие в «**${d.name}**» — посмотреть можно во вкладке «🔥 Группа» сверху.`,buttons:[{label:"👀 Открыть чат и посмотреть",action:`view-group-welcome:${d.id}`}]}),n({text:`⚠️ Я не вижу историю сообщений в «**${d.name}**»

Для корректной работы бота зайдите в настройки чата → «История сообщений» → включите хотя бы один раз. После этого можете выключить обратно, если хотите.`}),setTimeout(()=>{n({text:`Готово 👌 ChatLogix добавлен в «**${d.name}**»!

🗓 Что обсуждалось вчера
Всего было написано **${d.used} сообщений**

${u}

${me} Завтра тоже автоматически пришлю такое в чат.

Настроить эмодзи, время и периодичность отправки можно в настройках.`,buttons:[{label:"⚙️ Настроить саммари",action:"onboard-admin-settings"},{label:"🛡 Расскажи про антиспам",action:`onboard-admin-show-antispam:${t}`}]})},800)},z=(t,d)=>{switch(d&&V(d),t){case"open-app":setTimeout(()=>s({to:"/home"}),200);break;case"onboard-admin":n({text:`Давай покажу, как работает саммари чата. Вот пример — одно саммари за день в чате **«Здоровое питание»**:

🗓 Что обсуждалось вчера 28.04.2026
Всего было написано **112 сообщений**

🥗 Интервальное голодание 16/8 — опыт участников (**31 сообщение**)
🏋️ Питание до и после тренировки (**24 сообщения**)
🧴 Разбор составов протеиновых батончиков (**18 сообщений**)
📋 Меню на неделю — делимся рецептами (**15 сообщений**)

Интересные ссылки:
[Калькулятор КБЖУ онлайн]
[Подборка рецептов на неделю]

Такое саммари приходит в чат **каждое утро**. Участникам не нужно листать сотни сообщений — всё ключевое в одном посте.

Хочешь так же в своём чате?`,buttons:[{label:"➕ Добавить бота и включить",action:"onboard-admin-addbot"},{label:"🎤 Расскажи про расшифровку голосовых",action:"onboard-admin-preview-voice"}]});break;case"onboard-admin-preview-voice":n({text:`🎤 Расшифровка голосовых

Когда кто-то отправляет голосовое или кружочек — бот автоматически добавляет текстовую версию под сообщением.

Участникам не нужно слушать — просто читают. Бесплатно **30 мин/мес** на чат.

Чтобы включить — сначала добавьте бота в чат 👇`,buttons:[{label:"➕ Добавить бота и включить",action:"onboard-admin-addbot"},{label:"🛡 Расскажи про антиспам",action:"onboard-admin-preview-antispam"}]});break;case"onboard-admin-preview-antispam":n({text:`🛡 Антиспам

Бот автоматически удаляет спам, рекламу и флуд. Фильтрует мат с помощью AI — даже обходы через транслит и лит-спик.

Free-тариф — базовая защита навсегда, Pro — умные фильтры и еженедельный отчёт.

Чтобы включить — добавьте бота в чат 👇`,buttons:[{label:"➕ Добавить бота и включить",action:"onboard-admin-addbot"},{label:"🎙 Расскажи про подкаст чата",action:"onboard-admin-preview-podcast"}]});break;case"onboard-admin-preview-podcast":n({text:`🎙 Chat Podcast

Теперь можно слушать что обсуждалось вчера — за рулём, на прогулке или по дороге на работу. Выпуск приходит в чат каждое утро сразу после текстового саммари.

Чтобы включить — добавьте бота в чат 👇`,buttons:[{label:"➕ Добавить бота и включить",action:"onboard-admin-addbot"},{label:"📚 Расскажи про базу знаний",action:"onboard-admin-preview-kb"}]});break;case"onboard-admin-preview-kb":n({text:`📚 База знаний

Знаете это чувство, когда точно помнишь что обсуждали, но найти не можешь? База знаний это решает.

Участники пишут /faq прямо в чате — бот ищет по истории и отвечает с ссылками на нужные сообщения.

Чтобы включить — добавьте бота в чат 👇`,buttons:[{label:"➕ Добавить бота и включить",action:"onboard-admin-addbot"},{label:"💬 Расскажи про поиск в сети",action:"onboard-admin-preview-askBot"}]});break;case"onboard-admin-preview-askBot":n({text:`💬 Поиск в сети

Участники упоминают **@ChatLogixBot** в чате с вопросом — бот спрашивает inline-кнопками, где искать: в сети или в базе знаний чата.

Работает как универсальный эксперт: свежие данные из интернета, ответы на технические вопросы, разбор сообщений через reply.

Бесплатно. Авто-включается при первом mention в чате — можно отключить в настройках. Лимиты антиспама: 1/мин, 15/ч, 50/день на пользователя.

Чтобы включить — добавьте бота в чат 👇`,buttons:[{label:"➕ Добавить бота и включить",action:"onboard-admin-addbot"},{label:"🎭 Расскажи про анонимные сообщения",action:"onboard-admin-preview-anon"}]});break;case"onboard-admin-preview-anon":n({text:`🎭 Анонимные сообщения

Участники пишут через бота — автор скрыт от всех. Полезно для честной обратной связи. Лимит — 3 сообщения в день на человека.

Чтобы включить — добавьте бота в чат 👇`,buttons:[{label:"➕ Добавить бота и включить",action:"onboard-admin-addbot"}]});break;case"onboard-admin-addbot":R(!0);break;case"onboard-admin-settings":setTimeout(()=>{s(K?{to:"/chat/$chatId",params:{chatId:K}}:{to:"/home"})},200);break;case"onboard-user":{if(i.filter(l=>l.summary?.active).length===0){n({text:`ChatLogix пока нет ни в одном из ваших чатов.

Чтобы получать Super-Summary, бот должен быть добавлен хотя бы в один чат. Попросите админа добавить @ChatLogixBot с правами администратора — или добавьте сами, если вы админ.`,buttons:[{label:"➕ Добавить бота и включить",action:"onboard-admin-addbot"}]});break}n({text:`Покажу, как не читать все чаты и быть в курсе.

Super-Summary — одна сводка по всем твоим чатам, каждое утро в личку:

🚀 **Твоя сводка за сегодня:**

🏢 **Рабочий чат**
— Дедлайн по проекту перенесли на пятницу (47 сообщ.)
— Новый дизайн главной одобрили (23 сообщ.)
🔗 [Figma-макет], [Таск в Jira]

🏠 **ЖК Новый Город**
— Отключение воды 30.04 с 10:00 до 18:00 (31 сообщ.)
— Собрание жильцов в субботу (12 сообщ.)
🔗 [Объявление УК]

💪 **Здоровое питание**
— Интервальное голодание 16/8 — опыт участников (28 сообщ.)
— Подборка рецептов на неделю (15 сообщ.)
🔗 [Калькулятор КБЖУ]

Вместо десятков чатов — одно сообщение с главным. Хочешь получать такой каждый день?`,buttons:[{label:"✨ Включить Super-Summary",action:"onboard-user-enable"},{label:"🎧 Расскажи про Super Podcast",action:"onboard-user-show-podcast"}]});break}case"onboard-user-enable":p(!0),n({text:`Готово 👌 Super-Summary будет приходить каждый день в 09:00.

Чаты, где вчера было тихо, в отчёт не попадают — только то, где что-то обсуждали.

Кстати, эту сводку можно ещё и слушать — Super Podcast озвучивает её каждое утро.`,buttons:[{label:"⚙️ Настроить Super-Summary",action:"open-app"},{label:"🎧 Расскажи про Super Podcast",action:"onboard-user-show-podcast"}]});break;case"onboard-user-show-podcast":n({text:`🎧 Super Podcast

Это расширенная аудио-версия Super-Summary. Можно слушать за рулём, на прогулке или по дороге на работу — не нужно читать. Приходит одним голосовым сообщением каждое утро.`,buttons:[{label:"🎧 Включить Super Podcast",action:"onboard-user-podcast"},{label:"🕵️ Расскажи про анонимные сообщения",action:"onboard-user-show-anon"}]});break;case"onboard-user-podcast":k(!0),n({text:`🎧 Super Podcast включён!

Первый выпуск придёт завтра вместе с Super-Summary. Выбрать голос и управлять подпиской можно в настройках.`,buttons:[{label:"⚙️ Настроить Super Podcast",action:"open-app"},{label:"🕵️ Расскажи про анонимные сообщения",action:"onboard-user-show-anon"}]});break;case"onboard-user-show-anon":{const a=i.filter(l=>l.anonymous?.active);n({text:`🕵️ Анонимные сообщения

Пиши в чат через бота — никто не узнает, кто автор. Полезно для честной обратной связи или когда хочется сказать правду.${a.length>0?`

Доступно в ${a.length} чатах: ${a.map(l=>l.name).join(", ")}`:`

Пока нет чатов с включённой функцией. Попросите админа активировать.`}`,buttons:a.length>0?[{label:"🎭 Написать анонимно",action:"anon-start"},{label:"⚙️ Настроить анонимные сообщения",action:"open-app"}]:[{label:"⚙️ Настроить анонимные сообщения",action:"open-app"}]});break}case"user-settings":{const a=x?"включён":"выключен",l=$?y?`подписка до ${y.expiresAt}`:`${16-M} из 16 бесп. мин`:"выключен",u=E?"игнорируются":"учитываются",j=i.filter(A=>A.anonymous?.active).length;n({text:`✨ Персональные навыки

Это навыки, которые работают лично для вас прямо внутри бота — не привязаны к конкретному чату.

🚀 Super-Summary: ${a}
🎙 Super Podcast: ${l}
🎭 Анонимные сообщения: доступно в ${j} чатах
🙈 Видимость: сообщения ${u}`,buttons:[{label:"🚀 Super-Summary",action:"summary-info"},{label:"🎙 Super Podcast",action:"podcast-info"},{label:"🎭 Анонимное сообщение",action:"anon-start"},{label:E?"🔄 Учитывать мои сообщения":"🚫 Игнорировать мои сообщения",action:"toggle-ignore-me"}]});break}case"summary-info":{n(x?{text:`🚀 Super-Summary работает

Сводка приходит каждое утро. Последний раз присылал сегодня`,buttons:[{label:"📋 Показать последний Super-Summary",action:"show-last-summary"},{label:"🔕 Отключить Super-Summary",action:"disable-super-summary"}]}:{text:`🚀 Super-Summary

Когда чатов много, легко что-то пропустить. Super-Summary собирает саммари из всех чатов, где есть ты и ChatLogix в одно сообщение каждое утро

Вместо отдельных саммари внутри каждого чата, вы получаете одно сообщение с итогами по всем группам.

Если какой-то чат не попал в ваше Super-Summary, бот не знает, что вы в нем — проявитесь, написав в нем любое сообщение, и на следующий день саммари из этого чата будет включено в Super-Summary

Включи, чтобы получать такую сводку каждое утро.`,buttons:[{label:"✅ Включить Super-Summary",action:"enable-super-summary"}]});break}case"enable-super-summary":p(!0),n({text:`🚀 Super-Summary включен!

Завтра утром скину первую сводку. Чаты, где вчера было тихо, в отчет не попадают — только то, где что-то обсуждали`,buttons:[{label:"🔕 Отключить Super-Summary",action:"disable-super-summary"}]});break;case"disable-super-summary":p(!1),n({text:`🔕 Super-Summary отключен

Ежедневные сводки больше приходить не будут. Если ты передумаешь, можно включить заново`,buttons:[{label:"✅ Включить Super-Summary",action:"enable-super-summary"}]});break;case"show-last-summary":{const a=i.filter(u=>u.summary?.active);let l;a.length>0?l=a.map(u=>{const j=u.topics.slice(0,2).map(A=>`${A} (${Math.floor(Math.random()*200+50)} сообщений)`).join(`
`);return`📌 ${u.name}
${j}`}).join(`

`):l="Нет активных чатов для саммари",n({text:`Твой super-summary за последние 24 часа:

${l}`});break}case"podcast-info":{if(!$)n({text:`🎙 Super Podcast

Расширенная версия Super-Summary в формате подкаста. Приходит ежедневно вместе с Super-Summary. Первые 16 минут — бесплатно.

Один выпуск в день, приходит в ЛС сразу после Super-Summary`,buttons:[{label:"🎙 Включить подкаст",action:"enable-super-podcast"},{label:"📋 Показать последний Super-Summary",action:"show-last-summary"}]});else{const a=y?`Подписка активна до ${y.expiresAt}`:`Осталось ${16-M} из 16 бесплатных минут`;n({text:`🎙 Super Podcast включён

${a}

Один выпуск в день, приходит в ЛС сразу после Super-Summary`,buttons:[{label:"⚙️ Настроить Super Podcast",action:"configure-podcast"},{label:"🚫 Отключить Super Podcast",action:"disable-super-podcast"}]})}break}case"enable-super-podcast":k(!0),n({text:`🎙 Super Podcast включён.

У тебя есть 16 бесплатных минут. Первый выпуск придёт завтра утром.`,buttons:[{label:"⚙️ Настроить Super Podcast",action:"configure-podcast"}]});break;case"disable-super-podcast":k(!1),n({text:"🎙 Super Podcast выключен. Super-Summary продолжит приходить текстом. Включить обратно можно в настройках.",buttons:[{label:"🎙 Включить подкаст",action:"enable-super-podcast"}]});break;case"configure-podcast":setTimeout(()=>s({to:"/me"}),200);break;case"toggle-ignore-me":{const a=!E;oe(a),n(a?{text:"✅ Готово, твои сообщения не попадут в общее саммари тех чатов, где я есть. Если передумаешь — жми ниже.",buttons:[{label:"🔄 Учитывать мои сообщения",action:"toggle-ignore-me"}]}:{text:"✅ Готово, твои сообщения снова в саммари",buttons:[{label:"🚫 Игнорировать мои сообщения",action:"toggle-ignore-me"}]});break}case"create-skill-start":O("compose"),n({text:`🪄 Создание навыка

Расскажи об идее по такому плану — так нам быстрее понять и оценить:

1️⃣ **Тип** — навык для чата или личный (работает в ЛС бота)?
2️⃣ **Что делает** — какую задачу или боль закрывает?
3️⃣ **Как работает** — пример или сценарий: что происходит и когда?

Если на какой-то пункт ответа нет — пропусти. Пиши свободно, без шаблонов.`});break;case"help":n({text:"💬 Есть вопрос или предложение? Напиши нам в @chatlogix_support",buttons:[{label:"📱 Открыть Mini App",action:"open-app"}]});break;case"addbot":n({text:"Для добавления бота в чат нажми на кнопку ниже",buttons:[{label:"🤖 Добавить бота в чат",action:"addbot-go"}]});break;case"addbot-go":n({text:"В реальном Telegram здесь откроется диалог добавления бота в чат."});break;case"anon-start":if(f>=3){n({text:"Лимит анонимных сообщений (3/3) на сегодня исчерпан."});break}h("pick"),n({text:"Выбери чат для анонимного сообщения:",buttons:i.filter(a=>a.anonymous?.active).map(a=>({label:`${a.emoji??""} ${a.name}`.trim(),action:`anon-pick:${a.id}`}))});break;case"anon-confirm-send":{if(N&&U){o(N,U);const a=i.find(l=>l.id===N);n({text:`✅ Анонимно отправлено в «${a?.name}»`,buttons:[{label:"Открыть чат",action:`open-group:${N}`}]})}h("idle"),q(null),G("");break}case"anon-edit":h("compose"),n({text:"Окей, отредактируй и отправь снова."});break;default:if(t.startsWith("onboard-admin-show-antispam:")){const a=t.split(":")[1];n({text:`🛡 Антиспам

В чатах часто бывает флуд, спам, наплыв ботов и токсичность. Антиспам помогает избавить чат от всего этого мусора.

При включении сразу доступно: удаление спама и рекламы, антифлуд, запрет ссылок от новичков и капча при входе.

Есть Pro-режим с расширенным функционалом: AI-фильтр мата, умный слоу-мод, кастомная капча, приветствие новичков и еженедельный отчёт.`,buttons:[{label:"🛡 Включить антиспам",action:`onboard-admin-antispam:${a}`},{label:"🎤 Расскажи про расшифровку",action:`onboard-admin-show-voice:${a}`}]});break}if(t.startsWith("onboard-admin-show-voice:")){const a=t.split(":")[1];n({text:`🎤 Расшифровка голосовых

Когда кто-то отправляет голосовое или кружочек — бот добавляет текстовую версию прямо под сообщением. Участникам не нужно слушать — просто читают.

А ещё расшифровки попадают в саммари, делая сводку полнее и полезнее.`,buttons:[{label:"🎤 Включить расшифровку",action:`onboard-admin-voice:${a}`},{label:"🎙 Расскажи про подкаст чата",action:`onboard-admin-show-podcast:${a}`}]});break}if(t.startsWith("onboard-admin-show-podcast:")){const a=t.split(":")[1];n({text:`🎙 Подкаст чата

Теперь можно слушать что обсуждалось вчера — за рулём, на прогулке или по дороге на работу. Выпуск приходит в чат каждое утро сразу после текстового саммари.`,buttons:[{label:"🎙 Включить подкаст",action:`onboard-admin-podcast:${a}`},{label:"📚 Расскажи про базу знаний",action:`onboard-admin-show-kb:${a}`}]});break}if(t.startsWith("onboard-admin-show-kb:")){const a=t.split(":")[1];n({text:`📚 База знаний

Знаете это чувство, когда точно помнишь что обсуждали, но найти не можешь? База знаний это решает.

Участники пишут /faq прямо в чате — бот ищет по истории и отвечает с ссылками на нужные сообщения.`,buttons:[{label:"📚 Включить базу знаний",action:`onboard-admin-kb:${a}`},{label:"💬 Расскажи про поиск в сети",action:`onboard-admin-show-askBot:${a}`}]});break}if(t.startsWith("onboard-admin-show-askBot:")){const a=t.split(":")[1];n({text:`💬 Поиск в сети

Участники упоминают **@ChatLogixBot** в чате с вопросом — бот спрашивает inline-кнопками, где искать: в сети или в базе знаний чата (если включена).

Работает как универсальный эксперт: свежие данные из интернета, ответы на технические вопросы, разбор сообщений через reply. Бесплатно, лимиты антиспама: 1/мин, 15/ч, 50/день на пользователя.

Авто-включается при первом mention в чате — можно отключить в настройках.`,buttons:[{label:"💬 Включить поиск в сети",action:`onboard-admin-askBot:${a}`},{label:"🎭 Расскажи про анонимные сообщения",action:`onboard-admin-show-anon:${a}`}]});break}if(t.startsWith("onboard-admin-show-anon:")){const a=t.split(":")[1];n({text:`🎭 Анонимные сообщения

Участники пишут через бота — автор скрыт от всех. Полезно для честной обратной связи. Лимит — 3 сообщения в день на человека.`,buttons:[{label:"🎭 Включить анонимные сообщения",action:`onboard-admin-anon:${a}`},{label:"⚙️ Настроить анонимные сообщения",action:"onboard-admin-settings"}]});break}if(t.startsWith("onboard-admin-antispam:")){const a=t.split(":")[1];I(a,"antispam");const l=i.find(u=>u.id===a);n({text:`🛡 Антиспам включён в «${l?.name}»!

Сейчас работает: удаление спама и рекламы, антифлуд, запрет ссылок от новичков, капча при входе.

Добавить свои стоп-слова, настроить фильтры медиа или перейти на Pro-тариф можно в настройках.`,buttons:[{label:"⚙️ Настроить антиспам",action:"onboard-admin-settings"},{label:"🎤 Расскажи про расшифровку",action:`onboard-admin-show-voice:${a}`}]});break}if(t.startsWith("onboard-admin-voice:")){const a=t.split(":")[1];I(a,"voice");const l=i.find(u=>u.id===a);n({text:`🎤 Расшифровка включена в «${l?.name}»!

Вам доступно 30 минут в месяц на бесплатном тарифе. Расширить количество минут и выбрать голос озвучки можно в настройках.`,buttons:[{label:"⚙️ Настроить расшифровку",action:"onboard-admin-settings"},{label:"🎙 Расскажи про подкаст чата",action:`onboard-admin-show-podcast:${a}`}]});break}if(t.startsWith("onboard-admin-podcast:")){const a=t.split(":")[1];I(a,"podcast");const l=i.find(u=>u.id===a);n({text:`🎙 Подкаст включён в «${l?.name}»!

Теперь каждое утро вместе с саммари будет приходить аудио-выпуск — можно слушать по дороге на работу. По умолчанию озвучка приходит с мужским голосом длительностью до 4 минут. Первая неделя бесплатно.

Сменить голос или оформить подписку можно в настройках.`,buttons:[{label:"⚙️ Настроить подкаст",action:"onboard-admin-settings"},{label:"📚 Расскажи про базу знаний",action:`onboard-admin-show-kb:${a}`}]});break}if(t.startsWith("onboard-admin-kb:")){const a=t.split(":")[1],l=i.find(u=>u.id===a);n({text:`📚 База знаний активирована в «${l?.name}»!

Сейчас начнётся индексация последних 10 000 сообщений — это займёт несколько минут. Когда всё будет готово, пришлём уведомление в чат.

После этого участники смогут искать через /faq, а новые сообщения будут автоматически попадать в базу.`,buttons:[{label:"⚙️ Настроить базу знаний",action:"onboard-admin-settings"},{label:"💬 Расскажи про поиск в сети",action:`onboard-admin-show-askBot:${a}`}]});break}if(t.startsWith("onboard-admin-askBot:")){const a=t.split(":")[1];I(a,"askBot");const l=i.find(u=>u.id===a);n({text:`💬 Поиск в сети включён в «${l?.name}»!

Теперь любой участник может упомянуть @ChatLogixBot в чате с вопросом — бот ответит и подскажет, где искать (в сети или в базе знаний чата, если включена).

Бесплатно. Антиспам: 1 запрос в минуту, 15 в час, 50 в день на пользователя. Отключить можно в настройках.`,buttons:[{label:"⚙️ Настроить поиск в сети",action:"onboard-admin-settings"},{label:"🎭 Расскажи про анонимные сообщения",action:`onboard-admin-show-anon:${a}`}]});break}if(t.startsWith("onboard-admin-anon:")){const a=t.split(":")[1];I(a,"anonymous");const l=i.find(u=>u.id===a);n({text:`🎭 Анонимные сообщения включены в «${l?.name}»!

Теперь участники могут писать через бота так, чтобы никто не узнал автора. Удобно для честной обратной связи. Каждый может отправить до 3 сообщений в день.

Разрешить или запретить отправку медиа можно в настройках.`,buttons:[{label:"⚙️ Настроить анонимные сообщения",action:"onboard-admin-settings"}]});break}if(t.startsWith("anon-pick:")){const a=t.split(":")[1];q(a),h("compose");const l=i.find(u=>u.id===a);n({text:`📣 Чат «${l?.name}»
Напиши сообщение.`})}if(t.startsWith("open-group:")&&n({text:"Переключи режим вверху на «🔥 Группа», чтобы увидеть сообщение."}),t.startsWith("view-group-welcome:")){const a=t.split(":")[1];ce(a),de("group")}break}},J=()=>{if(!w.trim())return;const t=w.trim();if(r(""),V(t),S==="compose"&&N){G(t),h("confirm"),n({text:`Подтверди отправку:

«${t}»`,buttons:[{label:"✅ Отправить анонимно",action:"anon-confirm-send"},{label:"✏️ Редактировать",action:"anon-edit"}]});return}if(P==="compose"){O("idle"),n({text:`✅ Спасибо, идея у команды!

Если что-то будет непонятно — напишем уточнить. Как только реализуем — придёт уведомление сюда же.`});return}n({text:"Используй кнопки ниже или открой Mini App 👇",buttons:[{label:"📱 Открыть Mini App",action:"open-app"}]})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sticky top-[44px] z-10 backdrop-blur-xl bg-background/60 border-b border-white/8",children:e.jsxs("div",{className:"px-3 h-14 flex items-center gap-3 max-w-[640px] mx-auto",children:[e.jsx("button",{className:"w-8 h-8 -ml-1 flex items-center justify-center text-foreground/80",children:e.jsx(Z,{size:22})}),e.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center",style:{background:"var(--gradient-primary)"},children:e.jsx(ge,{size:18})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-[15px] font-semibold truncate",children:"ChatLogixBot"}),e.jsx("div",{className:"text-[11px] text-[oklch(0.85_0.15_155)]",children:"bot · online"})]}),e.jsx("button",{className:"w-9 h-9 flex items-center justify-center text-foreground/70",children:e.jsx(ae,{size:18})}),e.jsx("button",{className:"w-9 h-9 flex items-center justify-center text-foreground/70",children:e.jsx(Se,{size:18})}),e.jsx("button",{className:"w-9 h-9 -mr-1 flex items-center justify-center text-foreground/70",children:e.jsx(ee,{size:18})})]})}),e.jsx("div",{ref:D,className:"flex-1 overflow-y-auto px-3 py-4",children:e.jsxs("div",{className:"max-w-[640px] mx-auto space-y-2",children:[e.jsx("div",{className:"text-center",children:e.jsx("span",{className:"text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground",children:"сегодня"})}),v.map(t=>e.jsx(We,{msg:t,onAction:z},t.id)),C&&e.jsx("div",{className:"flex justify-start",children:e.jsxs("div",{className:"bg-white/8 rounded-2xl px-3 py-2.5 flex gap-1",children:[e.jsx(F,{})," ",e.jsx(F,{delay:120})," ",e.jsx(F,{delay:240})]})})]})}),e.jsx("div",{className:"backdrop-blur-xl bg-background/80 border-t border-white/8",children:e.jsxs("div",{className:"max-w-[640px] mx-auto px-2.5 py-2 flex flex-col gap-1.5",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(L,{label:"🛠 Logix для твоего чата",onClick:()=>s({to:"/chats"})}),e.jsx(L,{label:"➕ Добавить бота в чат",onClick:()=>z("addbot")})]}),e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(L,{label:"✨ Logix для тебя",onClick:()=>z("user-settings")}),e.jsx(L,{label:"❔ Помощь",onClick:()=>z("help")})]})]}),e.jsx(L,{label:"💡 Создать свой навык",onClick:()=>z("create-skill-start")})]})}),e.jsx("div",{className:"sticky bottom-0 backdrop-blur-xl bg-background/70 border-t border-white/8",children:e.jsxs("div",{className:"max-w-[640px] mx-auto px-2.5 py-2.5 flex items-center gap-2",children:[e.jsx("button",{className:"w-9 h-9 flex items-center justify-center text-foreground/70",children:e.jsx(te,{size:20})}),e.jsxs("div",{className:"flex-1 bg-white/8 rounded-3xl px-4 py-2.5 flex items-center gap-2",children:[e.jsx("input",{value:w,onChange:t=>r(t.target.value),onKeyDown:t=>t.key==="Enter"&&J(),placeholder:S==="compose"&&N?`🎭 Анонимно в «${i.find(t=>t.id===N)?.name}»…`:P==="compose"?"🪄 Опиши идею навыка своими словами…":"Сообщение",className:"flex-1 bg-transparent outline-none text-[14px]"}),e.jsx("button",{className:"text-foreground/60",children:e.jsx(Me,{size:20})})]}),e.jsx("button",{onClick:J,className:"w-10 h-10 rounded-full flex items-center justify-center text-white",style:{background:"var(--gradient-primary)"},children:w.trim()?e.jsx(ne,{size:18}):e.jsx(H,{size:18})})]})}),re&&e.jsx(Ee,{chats:i,onPick:ue,onClose:()=>R(!1)})]})}function Be(){const s=Y(),m=c(r=>r.chats),o=c(r=>r.activeChatId),i=c(r=>r.setActiveChat),f=c(r=>r.setTabMode),x=c(r=>r.messagesByChat),p=c(r=>r.pushMessage),$=c(r=>r.markSpamDeleted),k=c(r=>r.adminAlerts[o]??0),y=m.find(r=>r.id===o),M=x[o]??[],[v,_]=b.useState(""),C=b.useRef(null);b.useEffect(()=>{C.current?.scrollTo({top:C.current.scrollHeight,behavior:"smooth"})},[M.length,o]),b.useEffect(()=>{const r={"kurery-msk":[{author:"Дима",text:"Сегодня дождь, заказы летят 🚴"},{author:"Аня",text:"Кто-нибудь видел, лимит на бонус подняли?"},{author:"Олег",text:"+1 к смене ночью, платят ×2"}],"product-chatlogix":[{author:"Лена",text:"Новый CSAT 4.7 — пушка 🔥"},{author:"Игорь",text:"Завтра демо в 17:00, не пропустите"}],"react-ru":[{author:"Polina",text:"use(Promise) внутри Suspense — кайф"},{author:"Dan",text:"RSC + TanStack — норм комбо?"}],"startup-club":[{author:"Артём",text:"Кто знает фонды на seed в EU?"},{author:"Marina",text:"Могу заинтродьюсить 👇"}],"chatlogix-night":[{author:"Tim",text:"Ночной билд прошёл ✅"}]},S=setInterval(()=>{const h=r[o];if(!h||h.length===0)return;const P=h[Math.floor(Math.random()*h.length)];p(o,{from:"member",author:P.author,text:P.text})},12e3);return()=>clearInterval(S)},[o,p]);const B=r=>{r.startsWith("kb-open")&&s({to:"/chat/$chatId",params:{chatId:o},hash:"f-kb"}),(r==="open-bot-dm"||r==="open-bot-personal")&&f("private")},w=()=>{if(!v.trim())return;const r=v.trim();if(_(""),r.toLowerCase().startsWith("/faq")){const h=r.replace(/^\/faq\s*/i,"").trim()||"запрос";p(o,{from:"user",text:r}),setTimeout(()=>{p(o,{from:"bot",text:`📚 По теме «${h}»:

1. Главное обсуждение (23 сообщ.)
2. Похожая тема (17 сообщ.)
3. Старый тред (11 сообщ.)`})},500);return}if(/заработ|💰💰|быстро.*деньг|earn.*\$|http/i.test(r)&&y.antispam?.active){p(o,{from:"user",text:r}),setTimeout(()=>{const h=(c.getState().messagesByChat[o]??[]).slice(-1)[0];h&&$(o,h.id),p(o,{from:"bot",text:"❌ Сообщение удалено антиспамом"})},600);return}p(o,{from:"user",text:r}),setTimeout(()=>{p(o,{from:"bot",text:"Попробуй: `/faq тема` для базы знаний, или спам-фразу для проверки антиспама."})},500)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"px-3 pt-2 max-w-[640px] mx-auto w-full flex gap-1.5 overflow-x-auto",children:m.map(r=>{const S=r.id===o;return e.jsxs("button",{onClick:()=>i(r.id),className:`text-[11px] whitespace-nowrap px-2.5 py-1.5 rounded-full transition ${S?"bg-white/18 text-white":"bg-white/6 text-muted-foreground"}`,children:[r.emoji," ",r.name]},r.id)})}),e.jsx("div",{className:"sticky top-[44px] z-10 backdrop-blur-xl bg-background/60 border-b border-white/8 mt-2",children:e.jsxs("div",{className:"px-3 h-14 flex items-center gap-3 max-w-[640px] mx-auto",children:[e.jsx("button",{className:"w-8 h-8 -ml-1 flex items-center justify-center text-foreground/80",children:e.jsx(Z,{size:22})}),e.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center",style:{background:y.avatarColor},children:e.jsx("span",{className:"text-[14px]",children:y.emoji||y.initial})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-[15px] font-semibold truncate",children:y.name}),e.jsxs("div",{className:"text-[11px] text-muted-foreground flex items-center gap-1",children:[e.jsx(Pe,{size:11})," ",y.members.toLocaleString("ru")," · ChatLogix"]})]}),e.jsx("button",{onClick:()=>s({to:"/chat/$chatId",params:{chatId:o}}),className:"w-9 h-9 flex items-center justify-center text-foreground/70",children:e.jsx(ae,{size:18})}),e.jsx("button",{className:"w-9 h-9 -mr-1 flex items-center justify-center text-foreground/70",children:e.jsx(ee,{size:18})})]})}),k>0&&e.jsx("div",{className:"px-3 pt-2 max-w-[640px] mx-auto",children:e.jsxs("div",{className:"rounded-xl bg-[oklch(0.65_0.22_25)]/15 border border-[oklch(0.65_0.22_25)]/30 px-3 py-2 text-[12px] flex items-center gap-2",children:[e.jsx("span",{children:"⚠️ Антиспам"}),e.jsxs("span",{className:"text-muted-foreground",children:["Удалено ",k," сообщений"]}),e.jsx("button",{onClick:()=>s({to:"/chat/$chatId",params:{chatId:o},hash:"f-antispam"}),className:"ml-auto text-[oklch(0.82_0.13_240)] font-medium",children:"Настроить"})]})}),e.jsx("div",{ref:C,className:"flex-1 overflow-y-auto px-3 py-4",children:e.jsxs("div",{className:"max-w-[640px] mx-auto space-y-2",children:[e.jsx("div",{className:"text-center",children:e.jsx("span",{className:"text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground",children:"сегодня"})}),M.map(r=>e.jsx(qe,{msg:r,onAction:B},r.id))]})}),e.jsx("div",{className:"sticky bottom-0 backdrop-blur-xl bg-background/80 border-t border-white/8",children:e.jsxs("div",{className:"max-w-[640px] mx-auto px-2.5 pb-2.5 pt-1 flex items-center gap-2",children:[e.jsx("button",{className:"w-9 h-9 flex items-center justify-center text-foreground/70",children:e.jsx(te,{size:20})}),e.jsx("div",{className:"flex-1 bg-white/8 rounded-3xl px-4 py-2.5 flex items-center gap-2",children:e.jsx("input",{value:v,onChange:r=>_(r.target.value),onKeyDown:r=>r.key==="Enter"&&w(),placeholder:"/faq тема, или текст…",className:"flex-1 bg-transparent outline-none text-[14px]"})}),e.jsx("button",{onClick:w,className:"w-10 h-10 rounded-full flex items-center justify-center text-white",style:{background:"var(--gradient-primary)"},children:v.trim()?e.jsx(ne,{size:18}):e.jsx(H,{size:18})})]})})]})}function se(s,m){const o=[],i=/(\*\*(.+?)\*\*|\[([^\]]+?)\]\(([^)]+?)\)|\[([^\]]+?)\])/g;let f=0,x,p=0;for(;(x=i.exec(s))!==null;){if(x.index>f&&o.push(s.slice(f,x.index)),x[2])o.push(e.jsx("strong",{children:x[2]},p++));else if(x[3]&&x[4]){const $=x[4],k=x[3];o.push(e.jsx("button",{onClick:()=>m?.($),className:"font-semibold text-[oklch(0.75_0.14_230)] hover:underline cursor-pointer",children:k},p++))}else x[5]&&o.push(e.jsx("span",{className:"text-[oklch(0.75_0.14_230)]",children:x[5]},p++));f=i.lastIndex}return f<s.length&&o.push(s.slice(f)),o}function F({delay:s=0}){return e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse",style:{animationDelay:`${s}ms`}})}function We({msg:s,onAction:m}){const o=s.from==="user";return s.from==="system"?e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground text-center max-w-[90%]",children:s.text})}):e.jsx("div",{className:`flex ${o?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`max-w-[82%] flex flex-col ${o?"items-end":"items-start"}`,children:[e.jsxs("div",{className:`rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed whitespace-pre-wrap ${o?"rounded-tr-md text-white":"bg-white/10 rounded-tl-md"}`,style:o?{background:"linear-gradient(135deg, oklch(0.50 0.14 225), oklch(0.52 0.14 240))"}:void 0,children:[o?s.text:se(s.text,m),e.jsx("div",{className:`text-[10px] mt-1 ${o?"text-white/70":"text-muted-foreground"} text-right`,children:s.time})]}),s.buttons&&e.jsx("div",{className:"mt-1.5 flex flex-col gap-1",children:s.buttons.map((f,x)=>e.jsx("button",{onClick:()=>m(f.action,f.label),className:"w-full text-[12px] px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition text-center font-medium",children:f.label},x))})]})})}function qe({msg:s,onAction:m}){const o=s.from==="user",i=s.from==="system",f=s.from==="member";return i?e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-muted-foreground text-center max-w-[90%]",children:s.text})}):e.jsx("div",{className:`flex ${o?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:`max-w-[82%] flex flex-col ${o?"items-end":"items-start"}`,children:[e.jsxs("div",{className:`rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed whitespace-pre-wrap ${o?"rounded-tr-md text-white":"bg-white/10 rounded-tl-md"} ${s.deleted?"opacity-60 italic":""}`,style:o?{background:"linear-gradient(135deg, oklch(0.50 0.14 225), oklch(0.52 0.14 240))"}:void 0,children:[f&&s.author&&e.jsx("div",{className:"text-[12px] font-semibold mb-0.5",style:{color:"oklch(0.78 0.15 200)"},children:s.author}),s.voice?e.jsxs("div",{className:"flex items-center gap-2.5 min-w-[180px]",children:[e.jsx("button",{className:"w-9 h-9 rounded-full flex items-center justify-center text-white",style:{background:"var(--gradient-primary)"},onClick:()=>m("voice-play"),children:e.jsx(H,{size:14})}),e.jsx("div",{className:"flex-1 text-[10px] text-muted-foreground",children:s.voice.duration})]}):se(s.text,m),e.jsx("div",{className:`text-[10px] mt-1 ${o?"text-white/70":"text-muted-foreground"} text-right`,children:s.time})]}),s.buttons&&s.buttons.length>0&&e.jsx("div",{className:"mt-1.5 flex flex-col gap-1 w-full max-w-[320px]",children:s.buttons.map((x,p)=>e.jsx("button",{onClick:()=>m(x.action),className:"w-full text-[12px] px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition text-center font-medium",children:x.label},p))})]})})}function Ee({chats:s,onPick:m,onClose:o}){return e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:o,children:[e.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),e.jsxs("div",{className:"relative w-full max-w-[340px] rounded-2xl bg-[oklch(0.18_0.01_260)] border border-white/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"px-4 py-3 flex items-center justify-between border-b border-white/8",children:[e.jsx("span",{className:"text-[15px] font-semibold",children:"Добавить бота в чат"}),e.jsx("button",{onClick:o,className:"w-8 h-8 flex items-center justify-center text-foreground/60 hover:text-foreground transition",children:e.jsx(ze,{size:18})})]}),e.jsx("div",{className:"py-2 max-h-[320px] overflow-y-auto",children:s.map(i=>e.jsxs("button",{onClick:()=>m(i.id),className:"w-full px-4 py-3 flex items-center gap-3 hover:bg-white/8 active:bg-white/12 transition text-left",children:[e.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center text-[14px] shrink-0",style:{background:i.avatarColor},children:i.emoji||i.initial}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"text-[14px] font-medium truncate",children:[i.name," ",i.emoji??""]}),e.jsxs("div",{className:"text-[11px] text-muted-foreground",children:[i.members.toLocaleString("ru")," участников"]})]})]},i.id))})]})]})}function L({label:s,onClick:m}){return e.jsx("button",{onClick:m,className:"text-[13px] font-medium py-2.5 px-3 rounded-xl bg-white/8 hover:bg-white/14 text-white text-center transition active:scale-[0.98]",children:s})}export{Fe as component};
