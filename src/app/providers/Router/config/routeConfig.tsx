import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Layout } from '../ui/Layout';

export const RoutePaths = {
    MAIN: '/',
    ABOUT: '/about',
    ARTICLES: '/articles',
    PROFILE: '/profile',
    NOT_FOUND: '*'
} as const;

export const routeConfig = createBrowserRouter([
    {
        path: RoutePaths.MAIN,
        element: <Layout />,
        children: [
            {
                path: RoutePaths.MAIN,
                element: <MainPage />
            },
            {
                path: RoutePaths.ABOUT,
                element: <AboutPage />
            },
            {
                path: RoutePaths.NOT_FOUND,
                element: <NotFoundPage />
            }
        ]
    }
]);
