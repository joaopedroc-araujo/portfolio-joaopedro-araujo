/* eslint-disable react/prop-types */
import { useTheme } from '../context/ThemeContext';

function Layout({ children }) {
    const { theme } = useTheme();

    return (
        <div
            className={`min-h-screen ${theme === 'light' ? 'bg-light-bg text-light-text' : 'bg-dark-bg text-dark-text'
                }`}
        >
            {children}
        </div>
    );
}

export default Layout;