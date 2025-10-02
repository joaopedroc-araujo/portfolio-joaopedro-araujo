import ToggleButton from './ToggleButton';
import { useTheme } from '../context/ThemeContext';
import HamburgerMenu from './HamburgerMenu';
import LgMenu from './LgMenu';
import Image from 'next/image';

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
                                    <Image
                                        src="/logoport-removebg-preview.png"
                                        alt='Logo light mode'
                                        width={80}
                                        height={80}
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
                                    <Image
                                        src="/logobranco.png"
                                        width={80}
                                        height={80}
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