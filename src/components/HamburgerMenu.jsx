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
                    <a id="home" className="menu-item" href="/">Início</a>
                    <a id="/sobre-mim" className="menu-item" href="#/sobre-mim">Sobre mim</a>
                    <a id="contact" className="menu-item" href="/contatos">Contatos</a>
                </Menu>
            </div>
        </div>
    );
}

export default BurgerMenu;
