import { motion } from "motion/react";
import { Container } from "./components/Container";

import "./main.css";
import { StatCard } from "./components/StatCard";

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-clip bg-[#0a0a0f] text-white">
      <header className="fixed top-0 w-full py-[12px] bg-[#0a0a0fcc]">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-2xl">
            <span>&lt;</span>
            <span className="text-sky-300">React</span>
            <span>/&gt;</span>
          </div>

          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <a href="#">Обо мне</a>
              </li>
              <li>
                <a href="#">Навыки</a>
              </li>
              <li>
                <a href="#">Опыт</a>
              </li>
              <li>
                <a href="#">Проекты</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
      <main className="grow pt-[180px]">
        <section>
          <Container>
            <div className="mb-[40px]">
              <h2 className="text-2xl mb-[12px]">
                <span className="text-base text-sky-300">01.</span> Обо мне
              </h2>
              <p>Кто я и чем занимаюсь</p>
            </div>
            <div className="flex gap-20">
              <div className="flex flex-col gap-[24px]">
                <p>
                  Я фронтенд разработчик и верстальщик с 2+ годами опыта
                  создания современных веб-приложений. Специализируюсь на
                  React-экосистеме, дизайн-системах и перформансе.
                </p>
                <p>
                  Верстаю с учётом дальнейшей разработки: отвечаю за компоненты,
                  их логику и стили.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-[500px] w-full">
                <StatCard className="col-span-1" title="2+" text="лет опыта" />
                <StatCard className="col-span-1" title="20+" text="проектов" />
              </div>
            </div>
          </Container>
        </section>

        <section className="pt-[180px]">
          <Container>
            <div className="mb-[40px]">
              <h2 className="text-2xl mb-[12px]">
                <span className="text-base text-sky-300">02.</span> Навыки
              </h2>
              <p>Технологии, с которыми я работаю каждый день</p>
            </div>
          </Container>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};
