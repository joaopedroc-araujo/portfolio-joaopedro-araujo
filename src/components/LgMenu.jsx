import { Link } from 'react-scroll';

function LgMenu() {
    return (
        <div className='hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:space-x-4 lg:ml-auto'>
            <Link
                to="inicio"
                className='block text-center hover:text-gray-400 px-2 py-4 text-xl cursor-pointer'
                smooth={true}
                duration={500}
            >
                Início
            </Link>
            <Link to='sobre-mim'
                className='block text-center hover:text-gray-400 px-2 py-4 text-xl cursor-pointer'
                smooth={true}
                duration={1000}
            >
                Sobre mim
            </Link>
            <Link
                to='habilidades'
                className='block text-center hover:text-gray-400 px-2 py-4 text-xl cursor-pointer'
                smooth={true}
                duration={1000}
            >
                Habilidades
            </Link>
            <Link
                to='projetos'
                className='block text-center hover:text-gray-400 px-2 py-4 text-xl cursor-pointer'
                smooth={true}
                duration={1000}
            >
                Projetos
            </Link>
            <Link
                to='contatos'
                className='block text-center hover:text-gray-400 px-2 py-4 text-xl cursor-pointer'
                smooth={true}
                duration={1000}
            >
                Contatos
            </Link>
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
