
// import { slide as Menu } from 'react-burger-menu';
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react';

function BurgerMenu() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='lg:hidden mt-5'>
            <Hamburger toggled={isOpen} toggle={setOpen} direction="left" />
        </div>
    );
}

export default BurgerMenu;
