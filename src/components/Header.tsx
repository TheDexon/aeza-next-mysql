export default function Header() {
  
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Логотип */}
        <a href="#" className="text-2xl font-black tracking-widest text-white">
          AEZA
        </a>

        {/* Навигация */}
        <nav className="hidden items-center gap-8 text-slate-300 md:flex">
          <a
            href="#services"
            className="transition duration-200 hover:text-blue-400"
          >
            Услуги
          </a>

          <a
            href="#advantages"
            className="transition duration-200 hover:text-blue-400"
          >
            Преимущества
          </a>

          <a
            href="#contact"
            className="transition duration-200 hover:text-blue-400"
          >
            Контакты
          </a>
        </nav>

        {/* Кнопка */}
        <a
          href="#contact"
          className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition duration-200 hover:bg-blue-500"
        >
          Начать
        </a>
      </div>
    </header>
  );
  
}
