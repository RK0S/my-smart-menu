import { RouterProvider } from 'react-router-dom';
import { routeConfig } from './providers/Router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <div className="container">
                <RouterProvider router={routeConfig} />
            </div>
        </div>
    );
};
