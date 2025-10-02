import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';

interface BurgerState {
    isOpen: boolean;
}

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleStateChange = (state: BurgerState) => {
        setIsOpen(state.isOpen);
    };

    const closeMenu = () => setIsOpen(false);

    return (
        <div className='lg:hidden'>
            <div className='relative z-10'>
                <Menu
                    isOpen={isOpen}
                    onStateChange={handleStateChange}
                    right
                >
                    <a href="#inicio" className="menu-item" onClick={closeMenu}>
                        Início
                    </a>
                    <a href="#sobre-mim" className="menu-item" onClick={closeMenu}>
                        Sobre mim
                    </a>
                    <a href="#habilidades" className="menu-item" onClick={closeMenu}>
                        Habilidades
                    </a>
                    <a href="#projetos" className="menu-item" onClick={closeMenu}>
                        Projetos
                    </a>
                    <a href="#contatos" className="menu-item" onClick={closeMenu}>
                        Contatos
                    </a>
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