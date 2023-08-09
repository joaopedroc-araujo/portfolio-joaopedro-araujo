import { useTheme } from '../context/ThemeContext';
import sunMode from '../assets/lighterSun.svg';
import moonMode from '../assets/darkMoon.svg';

function ToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className='flex flex-row-reverse justify-start items-center ml-auto'
        >
            {theme === 'light' ? (
                <img src={moonMode} alt='Light Mode' className='w-6 h-6 mt-4 mr-7 lg:h-10 lg:mr-12' />
            ) : (
                <img src={sunMode} alt='Dark Mode' className='w-6 h-6 mt-4 mr-7 lg:h-10 lg:mr-12' />
            )}
        </button>
    );
}

export default ToggleButton;