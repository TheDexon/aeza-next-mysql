const advantages = [
  {
    title: "Высокая производительность",
    text: "Современное оборудование обеспечивает быструю загрузку сайтов и приложений.",
  },
  {
    title: "Безопасность",
    text: "SSL, регулярные обновления и защита данных для ваших проектов.",
  },
  {
    title: "Поддержка 24/7",
    text: "Помощь специалистов в любое время суток.",
  },
  {
    title: "Гибкость",
    text: "Поддержка популярных языков программирования и баз данных.",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-4xl font-bold text-white">
          Почему выбирают нас
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-8"
            >
              <h3 className="mb-3 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}