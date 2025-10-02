import { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
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