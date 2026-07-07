"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  console.clear();
  console.log("=== НАЧАЛО ОТПРАВКИ ===");

  setLoading(true);
  setSuccess(false);
  setError("");

  const formData = new FormData(e.currentTarget);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  console.log("Данные формы:", data);

  try {
    console.log("Отправляем fetch...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("HTTP Status:", response.status);
    console.log("Response OK:", response.ok);

    const result = await response.json();

    console.log("Ответ сервера:", result);

    if (!response.ok) {
      console.error("Сервер вернул ошибку");
      throw new Error(result.message ?? "Ошибка отправки");
    }

    console.log("Устанавливаем success");

    setSuccess(true);
    setError("");

    e.currentTarget.reset();

    console.log("Форма очищена");
  } catch (err) {
    console.error("ПОПАЛИ В CATCH");
    console.error(err);

    setSuccess(false);

    setError(
      err instanceof Error
        ? err.message
        : "Не удалось отправить заявку. Попробуйте позже."
    );
  } finally {
    console.log("FINALLY");
    setLoading(false);
    console.log("=== КОНЕЦ ===");
  }
}

  return (
    <section id="contact" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Обратная связь
        </h2>

        <p className="mb-12 text-center text-slate-400">
          Оставьте заявку, и мы свяжемся с вами в ближайшее время.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-white/10 bg-slate-950 p-10"
        >
          <input
            name="name"
            type="text"
            required
            placeholder="Ваше имя"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Телефон"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"
          />

          <textarea
            name="message"
            required
            rows={6}
            placeholder="Сообщение"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Отправка..." : "Отправить заявку"}
          </button>

          {success && (
            <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-center text-green-400">
              ✅ Спасибо! Ваша заявка успешно отправлена.
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center text-red-400">
              ❌ {error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
