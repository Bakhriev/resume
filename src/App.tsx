import { Container } from "./components/Container";
import { StatCard } from "./components/StatCard";
import { Tag } from "./components/Tag";

import "./main.css";

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-clip bg-[#0a0a0f] text-white">
      <header className="py-[12px] bg-[#0a0a0fcc]">
        <Container>
          <div className="flex items-center gap-1 text-2xl">
            <span>&lt;</span>
            <span className="text-sky-300">Bakhriev</span>
            <span>/&gt;</span>
          </div>
        </Container>
      </header>
      <main className="grow">
        <section className="relative pt-[60px]">
          <Container>
            <div className="mb-[24px] max-tablet:text-center">
              <h2 className="text-2xl mb-[12px]">
                <span className="text-base text-sky-300">01.</span> Обо мне
              </h2>
              <p>Кто я и чем занимаюсь</p>
            </div>

            <div className="flex gap-20 items-start justify-between max-tablet:flex-col max-tablet:items-center max-tablet:text-center max-tablet:gap-10">
              <div className="flex flex-col gap-[12px] max-w-[500px]">
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

              <div className="grid grid-cols-2 gap-4 max-w-[400px] shrink-0 w-full">
                <StatCard
                  className="col-span-1 transition duration-300 hover:border-[var(--color-sky-300)] hover:shadow-[var(--glow)]  hover:-translate-y-[4px]"
                  title="2+"
                  text="лет опыта"
                />
                <StatCard
                  className="col-span-1 transition duration-300 hover:border-[var(--color-sky-300)] hover:shadow-[var(--glow)]  hover:-translate-y-[4px]"
                  title="20+"
                  text="проектов"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="pt-[120px] max-tablet:pt-[60px]">
          <Container>
            <div className="mb-[40px] max-tablet:text-center">
              <h2 className="text-2xl mb-[12px]">
                <span className="text-base text-sky-300">02.</span> Навыки
              </h2>
              <p>Технологии, с которыми я работаю каждый день</p>
            </div>
            <div className="grid grid-cols-3 gap-6 max-tablet:grid-cols-2 max-phone:grid-cols-1">
              <div className="p-7 max-tablet:p-4 border border-[#2a2a3a] rounded-2xl bg-[#12121a] transition duration-300 hover:border-[var(--color-sky-300)] hover:shadow-[var(--glow)]  hover:-translate-y-[4px]">
                <div className="flex gap-3 mb-[20px]">
                  <img
                    width={24}
                    height={24}
                    src="/icons/react-icon.svg"
                    alt=""
                  />
                  <span>Frontend Core</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Tag title={"HTML5"} />
                  <Tag title={"CSS3"} />
                  <Tag title={"Javascript"} />
                  <Tag title={"React"} />
                  <Tag title={"Typescript"} />
                </div>
              </div>

              <div className="p-7 max-tablet:p-4 border border-[#2a2a3a] rounded-2xl bg-[#12121a] transition duration-300 hover:border-[var(--color-sky-300)] hover:shadow-[var(--glow)]  hover:-translate-y-[4px]">
                <div className="flex gap-3 mb-[20px]">
                  <img
                    width={24}
                    height={24}
                    src="/icons/paint-icon.svg"
                    alt=""
                  />
                  <span>Styling & UI</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Tag title={"Tailwind CSS"} />
                  <Tag title={"CSS Modules"} />
                  <Tag title={"Figma"} />
                </div>
              </div>

              <div className="p-7 max-tablet:p-4 border border-[#2a2a3a] rounded-2xl bg-[#12121a] transition duration-300 hover:border-[var(--color-sky-300)] hover:shadow-[var(--glow)]  hover:-translate-y-[4px]">
                <div className="flex gap-3 mb-[20px]">
                  <img
                    width={24}
                    height={24}
                    src="/icons/tools-icon.svg"
                    alt=""
                  />
                  <span>Tools & State</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Tag title={"Redux Toolkit"} />
                  <Tag title={"Zustand"} />
                  <Tag title={"Vite"} />
                  <Tag title={"Webpack"} />
                  <Tag title={"Git"} />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};
