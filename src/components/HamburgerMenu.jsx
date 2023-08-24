import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import './HamburgerMenu.css';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleStateChange = (state) => {
        setIsOpen(state.isOpen);
    };

    return (
        <div className='lg:hidden'>
            <div className='relative z-10'>
                <Menu
                    isOpen={isOpen}
                    onStateChange={handleStateChange}
                    right
                >
                    <Link
                        to="inicio"
                        className="menu-item"
                        smooth={true}
                        duration={500}
                    >
                        Início
                    </Link>
                    <Link
                        to="sobre-mim"
                        className="menu-item"
                        smooth={true}
                        duration={500}
                    >
                        Sobre mim
                    </Link>
                    <Link
                        to="habilidades"
                        className="menu-item"
                        smooth={true}
                        duration={500}
                    >
                        Habilidades
                    </Link>
                    <Link
                        to="projetos"
                        className="menu-item"
                        smooth={true}
                        duration={500}
                    >
                        Projetos
                    </Link>
                    <Link
                        to="contatos"
                        className="menu-item"
                        smooth={true}
                        duration={500}
                    >
                        Contatos
                    </Link>
                    <a
                        href='https://github.com/joaopedroc-araujo/portfolio-joaopedro-araujo'
                        className='menu-item'
                        target='_blank'
                        rel="noreferrer"
                    >
                        Veja o código
                    </a>
                </Menu>
            </div>
        </div>
    );
}

export default BurgerMenu;
