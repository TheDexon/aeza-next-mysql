export default function Services() {
  const services = [
    {
      title: "Веб-хостинг",
      text: "Быстрое размещение сайтов с высокой доступностью.",
    },
    {
      title: "Базы данных",
      text: "Поддержка MySQL, PostgreSQL и MongoDB.",
    },
    {
      title: "Node.js",
      text: "Запуск современных JavaScript-приложений.",
    },
  ];

  return (
    <section id="services" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-4xl font-bold text-white">
          Возможности платформы
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-slate-950 p-8"
            >
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="text-slate-400">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}