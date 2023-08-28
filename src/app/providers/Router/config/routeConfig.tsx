import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { Layout } from '../ui/Layout';

export const RoutePaths = {
    MAIN: '/',
    ABOUT: '/about',
    ARTICLES: '/articles',
    PROFILE: '/profile'
} as const

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
            }
        ]
    }
]);
