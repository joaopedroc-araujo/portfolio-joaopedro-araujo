import mylogo from '../assets/logoport-removebg-preview.png';
import ToggleButton from './ToggleButton';
import { useTheme } from '../context/ThemeContext';
import logoBranco from '../assets/logobranco.png';
import { Link } from 'react-router-dom';
import Menu from './Menu';

function Header() {
    const { theme } = useTheme();
    return (
        <header>
            {theme === 'light' ?
                (<>
                    <div
                        className='h-20 border-b-2 border-gray-300 shadow-md flex flex-row lg:h-24 sticky top-0 z-10'
                    >
                        <Link to='/'>
                            <img
                                src={mylogo}
                                alt='Logo light mode'
                                className='h-16 ml-4 mt-2 mb-1 lg:h-20 lg:ml-7' />
                        </Link>
                        <ToggleButton />
                        <Menu />
                    </div>
                </>) :
                (<>
                    <div
                        className='h-20 border-b-2 border-gray-300 shadow-md shadow-gray-400 flex flex-row lg:h-24 sticky top-0 z-10'
                    >
                        <Link to='/'>
                            <img
                                src={logoBranco}
                                className='h-16 ml-4 mt-2 mb-1 lg:h-20 lg:ml-7'
                                alt='Logo dark mode' />
                        </Link>
                        <ToggleButton />
                        <Menu />
                    </div>
                </>)
            }

        </header>
    )
}

export default Header;