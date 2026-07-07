export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb25,transparent_40%)]" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Надежный веб-хостинг
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white">
            Размещайте сайты
            <br />
            быстро, безопасно
            <br />и без лишних сложностей.
          </h1>

          <p className="mt-8 text-xl leading-8 text-slate-400">
            Современный веб-хостинг для лендингов, интернет-магазинов,
            корпоративных сайтов и веб-приложений.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Связаться
            </a>

            <a
              href="#services"
              className="rounded-xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:border-blue-500"
            >
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}