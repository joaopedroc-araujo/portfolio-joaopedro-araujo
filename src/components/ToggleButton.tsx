import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';

function ToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className='flex flex-row-reverse justify-center items-center ml-auto mr-20'
        >
            {theme === 'light' ? (
                <Image src="/darkMoon.svg" alt='Light Mode' width={40} height={40} className='w-6 h-6 lg:h-10 ' />
            ) : (
                <Image src="/lighterSun.svg" alt='Dark Mode' width={40} height={40} className='w-6 h-6 lg:h-10 ' />
            )}
        </button>
    );
}

export default ToggleButton;