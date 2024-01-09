function MinhasInfos() {
    return (
        <div id="sobre-mim" className="mt-10 flex flex-col items-center w-full p-4 pl-1 lg:text-lg lg:w-[80%] lg:mt-14 lg:mx-auto">
            <h1 className="text-xl font-bold mb-2 lg:mb-7 lg:text-3xl">Sobre mim</h1>
            <p className="text-justify lg:text-justify m-5">
                Estudante de Desenvolvimento Web pela {''}
                <a href="https://www.betrybe.com/" target='_blank' rel="noreferrer" className="no-underline text-green-600 font-bold">
                    Trybe. {''}
                </a>
                Sou um desenvolvedor Fullstack que trabalha com diversos projetos, tanto individuais quanto em equipe. As tecnologias que domino incluem:
                <ul
                    style={{ listStyleType: "disc" }}
                    className='ml-7'
                >
                    <li>No Frontend: React, React hooks, React Router, Redux, Context API e testes unitários com Jest e RTL.</li>
                    <li>No Backend: Node.JS, Express, bibliotecas ORM (Sequelize) e ODM (Mongoose), MySQL e MongoDB, além de Python básico.</li>
                    <li>Outras habilidades: Git e Github, frameworks CSS como Bootstrap e Tailwind CSS, metodologias ágeis como Scrum e Kanban e Docker.</li>
                </ul>
            </p>
        </div>
    )
}

export default MinhasInfos;