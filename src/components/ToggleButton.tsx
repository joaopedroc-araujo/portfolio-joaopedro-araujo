import { useTheme } from '../context/ThemeContext';
import sunMode from '../assets/lighterSun.svg';
import moonMode from '../assets/darkMoon.svg';

function ToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className='flex flex-row-reverse justify-center items-center ml-auto mr-20'
        >
            {theme === 'light' ? (
                <img src={moonMode} alt='Light Mode' className='w-6 h-6 lg:h-10 ' />
            ) : (
                <img src={sunMode} alt='Dark Mode' className='w-6 h-6 lg:h-10 ' />
            )}
        </button>
    );
}

export default ToggleButton;