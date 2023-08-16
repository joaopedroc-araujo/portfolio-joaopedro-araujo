import mylogo from '../assets/logoport-removebg-preview.png';
import ToggleButton from './ToggleButton';
import { useTheme } from '../context/ThemeContext';
import logoBranco from '../assets/logobranco.png';
import HamburgerMenu from './HamburgerMenu';
import LgMenu from './LgMenu';

function Header() {
    const { theme } = useTheme();
    return (
        <>
            <header className='sticky top-0 z-10'>
                {theme === 'light' ?
                    (
                        <>
                            <div
                                className='h-20 border-b-2 border-gray-300 shadow-md flex flex-row lg:h-24 align-middle bg-[#f9fafb]'
                            >
                                <a href='/'>
                                    <img
                                        src={mylogo}
                                        alt='Logo light mode'
                                        className='h-16 ml-4 mt-2 mb-1 lg:h-20 lg:ml-7' />
                                </a>
                                <LgMenu />
                                <ToggleButton />
                                <HamburgerMenu />
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                className='h-20 border-b-2 border-gray-300 shadow-md shadow-gray-400 flex flex-row lg:h-24 align-middle bg-[#090C10]'
                            >
                                <a href='/'>
                                    <img
                                        src={logoBranco}
                                        className='h-16 ml-5 mt-2 mb-1 lg:h-20 lg:ml-7'
                                        alt='Logo dark mode' />
                                </a>
                                <LgMenu />
                                <ToggleButton />
                                <HamburgerMenu />
                            </div>
                        </>
                    )
                }
            </header>
        </>
    )
}

export default Header;