function LgMenu() {
    return (
        <div className='hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:space-x-4 lg:ml-auto'>
            <a
                href="#inicio"
                className='block text-center hover:text-gray-400 px-2 py-4 text-xl cursor-pointer'
            >
                Início
            </a>
            <a href='#sobre-mim'
                className='block text-center hover:text-gray-400 px-2 py-4 text-xl cursor-pointer'
            >
                Sobre mim
            </a>
            <a
                href='#habilidades'
                className='block text-center hover:text-gray-400 px-2 py-4 text-xl cursor-pointer'
            >
                Habilidades
            </a>
            <a
                href='#projetos'
                className='block text-center hover:text-gray-400 px-2 py-4 text-xl cursor-pointer'
            >
                Projetos
            </a>
            <a
                href='#contatos'
                className='block text-center hover:text-gray-400 px-2 py-4 text-xl cursor-pointer'
            >
                Contatos
            </a>
            <a
                href='https://github.com/joaopedroc-araujo/portfolio-joaopedro-araujo'
                className='block text-center hover:text-gray-400 px-2 py-4 text-xl cursor-pointer'
                target='_blank'
                rel="noreferrer"
            >
                Veja o código
            </a>
        </div>
    )
}

export default LgMenu;