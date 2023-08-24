import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
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
                    <a id="sobre-mim" className="menu-item" href="#sobre-mim">Sobre mim</a>
                    <a href='#habilidades' className='menu-item'>Habilidades</a>
                    <a href='#projetos' className='menu-item'>Projetos</a>
                    <a id="contact" className="menu-item" href="#contatos">Contatos</a>
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
