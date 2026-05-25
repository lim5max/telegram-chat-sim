import { createServerFn } from "@tanstack/react-start";
import systemPrompt from "../data/routinePrompt.md?raw";

export const fetchRoutineDigest = createServerFn({ method: "POST" })
  .inputValidator((userPrompt: string) => {
    if (typeof userPrompt !== "string" || !userPrompt.trim()) {
      throw new Error("Пустой запрос рутины");
    }
    return userPrompt.trim().slice(0, 500);
  })
  .handler(async ({ data: userPrompt }) => {
    const key = process.env.OPENROUTER_API_KEY;
    if (!key) throw new Error("OPENROUTER_API_KEY не задан на сервере");

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "perplexity/sonar-pro",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`OpenRouter ${res.status}: ${body.slice(0, 200)}`);
    }

    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = json.choices?.[0]?.message?.content?.trim();
    if (!text) throw new Error("Пустой ответ от модели");
    return { text };
  });
