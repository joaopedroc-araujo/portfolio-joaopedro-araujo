function MinhasInfos() {
    return (
        <div id="sobre-mim" className="mt-10 flex flex-col items-center w-full p-4 pl-1 lg:text-lg lg:w-[80%] lg:mt-14 lg:mx-auto">
            <h1 className="text-xl font-bold mb-2 lg:mb-7 lg:text-3xl">Sobre mim</h1>
            <span className="text-justify lg:text-justify m-5">
                Sou um desenvolvedor Fullstack com mais de um ano de experiência na área, formado pela {''}
                <a href="https://www.betrybe.com/" target='_blank' rel="noreferrer" className="no-underline text-green-600 font-bold">
                    Trybe{''}
                </a>
                {' '}e atualmente cursando Bacharelado em Engenharia de Software. Tenho experiência trabalhando em diversos projetos, tanto individuais quanto em equipe, utilizando tecnologias modernas para desenvolver aplicações eficientes e escaláveis.
                <br /><br />
                <strong>Tecnologias e habilidades:</strong>
                <ul className='ml-7' style={{ listStyleType: "disc" }}>
                    <li><strong>Frontend:</strong> React, React Native, React Hooks, React Router, Redux, Context API, testes unitários com Jest e RTL.</li>
                    <li><strong>Backend:</strong> Node.js, Express, Nest.JS, ORM (Sequelize), ODM (Mongoose), MySQL e MongoDB.</li>
                    <li><strong>Outras habilidades:</strong> Git e GitHub, Docker, metodologias ágeis (Scrum e Kanban), CI/CD, e frameworks CSS como Tailwind CSS e Bootstrap.</li>
                </ul>
            </span>
        </div>
    );
}

export default MinhasInfos;
