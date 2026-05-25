import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const systemPrompt = `You are a news/digest bot powered by web search. The user describes what they want to receive on a schedule. Find the most recent and relevant items using live web search.

Rules:
- Return UP TO 4 bullet points (fewer is fine). Each bullet is ONE real, concrete event or fact. Never exceed 4.
- Keep each bullet short: 1-2 sentences, factual, no filler, no opinions, no intro, no conclusion.
- End EVERY bullet with a markdown source link: [Источник](URL). Use the real article URL.
- Use only fresh information available at the moment of the request. If the topic has no recent news, say so in one short line.
- Reply in the same language as the user's request. Default to Russian.
- No preamble ("Here are the news", "Вот свежие новости"). Output only the bullets.
`;
const fetchRoutineDigest_createServerFn_handler = createServerRpc({
  id: "61e62139df78d204e6c89473e839e6da2f40cd3a4b0ed08efcc0454d575e944f",
  name: "fetchRoutineDigest",
  filename: "src/lib/routineFetch.ts"
}, (opts) => fetchRoutineDigest.__executeServer(opts));
const fetchRoutineDigest = createServerFn({
  method: "POST"
}).inputValidator((userPrompt) => {
  if (typeof userPrompt !== "string" || !userPrompt.trim()) {
    throw new Error("Пустой запрос рутины");
  }
  return userPrompt.trim().slice(0, 500);
}).handler(fetchRoutineDigest_createServerFn_handler, async ({
  data: userPrompt
}) => {
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) throw new Error("OPENROUTER_API_KEY не задан на сервере");
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "perplexity/sonar-pro",
      messages: [{
        role: "system",
        content: systemPrompt
      }, {
        role: "user",
        content: userPrompt
      }]
    })
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`OpenRouter ${res.status}: ${body.slice(0, 200)}`);
  }
  const json = await res.json();
  const text = json.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error("Пустой ответ от модели");
  return {
    text
  };
});
export {
  fetchRoutineDigest_createServerFn_handler
};
