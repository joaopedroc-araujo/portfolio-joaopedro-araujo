function MinhasInfos() {
    return (
        <div id="sobre-mim" className="mt-10 flex flex-col items-center w-full p-4 pl-1 lg:text-lg lg:w-[60%] lg:mt-14 lg:mx-auto">
            <h1 className="text-xl font-bold mb-2 lg:mb-7">Sobre mim</h1>
            <p className="text-justify lg:text-center m-4">
                Estudante de Desenvolvimento Web pela {''}
                <a href="https://www.betrybe.com/" target='_blank' rel="noreferrer" className="no-underline text-green-600 font-bold">
                    Trybe. {''}
                </a>
                Desenvolvedor Frontend, com experiência em projetos individuais e em grupo. Dentre as tecnologias que utilizei estão:
                React, React hooks, React Router, Redux, Context API e testes unitários com Jest e RTL. Além disso, tenho conhecimento em
                Git e Github, frameworks CSS como Bootstrap e Tailwind CSS, e metodologias ágeis como Scrum e Kanban.
                No módulo de Backend já estudei Docker e o básico de MySQL.
            </p>
        </div>
    )
}

export default MinhasInfos;