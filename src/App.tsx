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
                  <svg width={24} height={24}>
                    <use xlinkHref="/__spritemap#sprite-react-icon"></use>
                  </svg>

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
                  <svg width={24} height={24}>
                    <use xlinkHref="/__spritemap#sprite-paint-icon"></use>
                  </svg>
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
                  <svg width={24} height={24}>
                    <use xlinkHref="/__spritemap#sprite-tools-icon"></use>
                  </svg>
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

        <section className="pt-[120px] max-tablet:pt-[60px]">
          <Container>
            <div className="mb-[40px] max-tablet:text-center">
              <h2 className="text-2xl">
                <span className="text-base text-sky-300">03.</span> Немного кода
                с этого проекта
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 max-tablet:grid-cols-1">
              <div className="border border-[#2a2a3a] rounded-xl overflow-clip">
                <div className="p-4 bg-gray-900">
                  <span className="text-sm text-orange-400">
                    components/Container.tsx
                  </span>
                </div>
                {/*  */}
                <div className="p-4">
                  <div>
                    <span className="text-sky-300">import </span>
                    <span className="text-sky-300">type </span>
                    <span>
                      <span className="text-yellow-300">{"{ "}</span>
                      <span>FC</span>
                      <span className="text-yellow-300">{" }"}</span>
                    </span>
                    <span className="text-sky-300"> from </span>
                    <span className="text-sky-400">"react";</span>
                  </div>
                  <div className="pb-4">
                    <span className="text-sky-300">import </span>
                    <span>
                      <span className="text-yellow-300">{"{ "}</span>
                      <span>twMerge</span>
                      <span className="text-yellow-300">{" }"}</span>
                    </span>
                    <span className="text-sky-300"> from </span>
                    <span className="text-sky-400">"tailwind-merge";</span>
                    <span>
                      {/* from "react"; import {twMerge} from "tailwind-merge"; */}
                    </span>
                  </div>
                  {/*  */}
                  <div className="pb-4">
                    <span className="text-green-500">interface </span>
                    <span className="text-cyan-300">
                      IContainer <span className="text-yellow-300">{"{"}</span>
                    </span>
                    <span className="text-green-300 pl-4 block">
                      className?:{" "}
                      <span className="text-green-500">string;</span>
                    </span>
                    <span className="text-green-300 pl-4 block">
                      children?:{" "}
                      <span className="text-green-500">
                        <span className="text-cyan-300">React</span>.ReactNode;
                      </span>
                    </span>
                    <span className="text-yellow-300">{`}`}</span>
                  </div>
                  {/*  */}
                  <div>
                    <span className="text-sky-300">export </span>
                    <span className="text-green-500">const </span>
                    <span className="text-cyan-300">Container: </span>
                    <span className="text-green-500">FC</span>
                    <span className="text-yellow-300">{`<`}</span>
                    <span className="text-green-500">IContainer</span>
                    <span className="text-yellow-300">{`> `}</span>
                    <span className="text-sky-300">= </span>
                    <span className="text-yellow-300">{`({ `}</span>
                    <span className="text-white">className, </span>
                    <span className="text-white">children </span>
                    <span className="text-yellow-300">{`}) `}</span>
                    <span className="text-green-500">
                      {`=> `} <span className="text-yellow-300">{`{`}</span>
                    </span>
                    <span className="block pl-4 text-sky-300">
                      return <span className="text-yellow-300">{`(`}</span>
                    </span>
                    <span className="block pl-8 text-green-500">
                      {`<div`}{" "}
                      <span className="text-sky-300">
                        {`className=`}
                        <span className="text-yellow-300">{`{`}</span>
                      </span>
                    </span>
                    <span className="block pl-12 text-cyan-300">
                      twMerge<span className="text-yellow-300">{`(`}</span>
                    </span>
                    <span className="block pl-14 text-blue-300">
                      `max-w-[1280px] w-full mx-auto px-[15px] ${`{`}
                      <span className="text-white">className</span>
                      {`}`}`,
                    </span>
                    <span className="block pl-12 text-yellow-300">
                      {`)}`}
                      <span className="text-green-500">{`>`}</span>{" "}
                    </span>
                    <span className="block pl-12">
                      <span className="text-white">
                        <span className="text-yellow-300">{`{`}</span>children
                        <span className="text-yellow-300">{`}`}</span>
                      </span>
                    </span>
                    <span className="block pl-8 text-green-500">{`</div>`}</span>
                    <span className="block pl-4 text-yellow-300">{`);`}</span>
                    <span className="block text-yellow-300">{`};`}</span>
                  </div>
                </div>
              </div>
              <div className="border border-[#2a2a3a] rounded-xl overflow-clip">
                <div className="p-4 bg-gray-900">
                  <span className="text-sm text-orange-400">
                    components/Tag.tsx
                  </span>
                </div>

                <div className="p-4">
                  <div>
                    <span className="text-sky-300">import </span>
                    <span className="text-sky-300">type </span>
                    <span>
                      <span className="text-yellow-300">{"{ "}</span>
                      <span>FC</span>
                      <span className="text-yellow-300">{" }"}</span>
                    </span>
                    <span className="text-sky-300"> from </span>
                    <span className="text-sky-400">"react";</span>
                  </div>
                  <div className="pb-4">
                    <span className="text-sky-300">import </span>
                    <span>
                      <span className="text-yellow-300">{"{ "}</span>
                      <span>twMerge</span>
                      <span className="text-yellow-300">{" }"}</span>
                    </span>
                    <span className="text-sky-300"> from </span>
                    <span className="text-sky-400">"tailwind-merge";</span>
                    <span>
                      {/* from "react"; import {twMerge} from "tailwind-merge"; */}
                    </span>
                  </div>
                  {/*  */}
                  <div className="pb-4">
                    <span className="text-green-500">interface </span>
                    <span className="text-cyan-300">
                      ITag <span className="text-yellow-300">{"{"}</span>
                    </span>
                    <span className="text-green-300 pl-4 block">
                      className?:{" "}
                      <span className="text-green-500">string;</span>
                    </span>
                    <span className="text-green-300 pl-4 block">
                      title: <span className="text-green-500">string;</span>
                    </span>
                    <span className="text-yellow-300">{`}`}</span>
                  </div>
                  {/*  */}
                  <div>
                    <span className="text-sky-300">export </span>
                    <span className="text-green-500">const </span>
                    <span className="text-cyan-300">Tag: </span>
                    <span className="text-green-500">FC</span>
                    <span className="text-yellow-300">{`<`}</span>
                    <span className="text-green-500">ITag</span>
                    <span className="text-yellow-300">{`> `}</span>
                    <span className="text-sky-300">= </span>
                    <span className="text-yellow-300">{`({ `}</span>
                    <span className="text-white">className, </span>
                    <span className="text-white">title </span>
                    <span className="text-yellow-300">{`}) `}</span>
                    <span className="text-green-500">
                      {`=> `} <span className="text-yellow-300">{`{`}</span>
                    </span>
                    <span className="block pl-4 text-sky-300">
                      return <span className="text-yellow-300">{`(`}</span>
                    </span>
                    <span className="block pl-8 text-green-500">
                      {`<div`}{" "}
                      <span className="text-sky-300">
                        {`className=`}
                        <span className="text-yellow-300">{`{`}</span>
                      </span>
                    </span>
                    <span className="block pl-12 text-cyan-300">
                      twMerge<span className="text-yellow-300">{`(`}</span>
                    </span>
                    <span className="block pl-14 text-blue-300">
                      `border border-[#2a2a3a] text-[0.8rem] rounded-[8px]
                      bg-[#1a1a24] px-[12px] py-[4px] ${`{`}
                      <span className="text-white">className</span>
                      {`}`}`,
                    </span>
                    <span className="block pl-12 text-yellow-300">
                      {`)}`}
                      <span className="text-green-500">{`>`}</span>{" "}
                    </span>
                    <span className="block pl-12">
                      <span className="text-white">
                        <span className="text-yellow-300">{`{`}</span>title
                        <span className="text-yellow-300">{`}`}</span>
                      </span>
                    </span>
                    <span className="block pl-8 text-green-500">{`</div>`}</span>
                    <span className="block pl-4 text-yellow-300">{`);`}</span>
                    <span className="block text-yellow-300">{`};`}</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pt-[120px] max-tablet:pt-[60px]">
          <Container>
            <div className="mb-[40px] max-tablet:text-center">
              <h2 className="text-2xl">
                <span className="text-base text-sky-300">04.</span> Проекты
              </h2>
            </div>
            <div className="border border-[#2a2a3a] rounded-2xl">
              <div className="grid gap-2 grid-cols-2 max-tablet:grid-cols-1 max-tablet:gap-6 p-4">
                <div className="self-stretch">
                  <Tag
                    title="Featured"
                    className="text-purple-400 w-fit mb-3 inline-block"
                  />
                  <h3 className="text-2xl mb-3">Krutyak</h3>
                  <p className="mb-5">
                    Сайт для кейтеринговой компании «Крутяк» — современный,
                    адаптивный и удобный сайт с презентацией услуг и
                    мероприятий. Реализовано Слайды, модальные окна,
                  </p>
                  <div className="mb-5">
                    <span className="inline-block mb-2">Библиотеки:</span>
                    <div className="flex flex-wrap gap-2">
                      <Tag title="Swiper" />
                      <Tag title="Imask" />
                      <Tag title="Fancybox" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    <a
                      target="_blank"
                      href="https://github.com/Bakhriev/krutyak"
                      className="flex items-center gap-2 text-white px-3 py-2 rounded-[10px] bg-gray-800 transition-colors hover:bg-gray-900 text-xs"
                    >
                      <svg width={14} height={14}>
                        <use xlinkHref="/__spritemap#sprite-github-icon"></use>
                      </svg>
                      <span>Github</span>
                    </a>
                    <a
                      target="_blank"
                      href="https://krutyak.netlify.app"
                      className="flex items-center gap-2 text-white px-3 py-2 rounded-[10px] transition-colors bg-gray-800 hover:bg-gray-900 text-xs"
                    >
                      <svg width={14} height={14}>
                        <use xlinkHref="/__spritemap#sprite-link-icon"></use>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
                <div className="bg-[url(/images/krutyak_cite_screen.jpg)] bg-cover bg-center max-tablet:min-h-[350px] max-phone:min-h-[300px] rounded-lg"></div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pt-[120px] max-tablet:pt-[60px] pb-[40px]">
          <Container>
            <div className="mb-[40px] text-center">
              <h2 className="text-2xl mb-3">
                <span className="text-base text-sky-300">04.</span> Контакты
              </h2>
              <p>Давай сделаем что-нибудь крутое вместе</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:muratbakhriev@gmail.com"
                className="overflow-hidden flex flex-col gap-2 items-center border border-[#2a2a3a] max-w-[300px] w-full rounded-[14px] transition p-6 transition duration-300 hover:border-[var(--color-sky-300)] hover:shadow-[var(--glow)]  hover:-translate-y-[4px]"
              >
                <svg width={48} height={48}>
                  <use xlinkHref="/__spritemap#sprite-mail-icon"></use>
                </svg>
                <span>EMail</span>
                <span>muratbakhriev@gmail.com</span>
              </a>

              <a
                target="_blank"
                href="https://github.com/Bakhriev"
                className="overflow-hidden max-w-[300px] w-full flex flex-col gap-2 items-center border border-[#2a2a3a] rounded-[14px] transition p-6 transition duration-300 hover:border-[var(--color-sky-300)] hover:shadow-[var(--glow)]  hover:-translate-y-[4px]"
              >
                <svg width={48} height={48}>
                  <use xlinkHref="/__spritemap#sprite-github-icon"></use>
                </svg>
                <span>Github</span>
                <span>https://github.com/Bakhriev</span>
              </a>

              <a
                target="_blank"
                href="https://t.me/nfithr"
                className="overflow-hidden max-w-[300px] w-full flex flex-col gap-2 items-center border border-[#2a2a3a] rounded-[14px] transition p-6 transition duration-300 hover:border-[var(--color-sky-300)] hover:shadow-[var(--glow)]  hover:-translate-y-[4px]"
              >
                <svg width={48} height={48}>
                  <use xlinkHref="/__spritemap#sprite-telegram-icon"></use>
                </svg>
                <span>Telegram</span>
                <span>@nfithr</span>
              </a>
            </div>
          </Container>
        </section>
      </main>

      <footer></footer>
      {/*  */}
    </div>
  );
};
