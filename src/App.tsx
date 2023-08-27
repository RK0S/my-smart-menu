import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Counter } from './Counter';
import './styles/index.scss';
import { AboutPage } from './pages/AboutPage/AboutPage.async';
import { MainPage } from './pages/MainPage/MainPage.async';
import { useTheme } from './ThemeProvider/useTheme';
import { classNames } from './lib/classNames/classNames';

export const App = () => {
    const { theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <button onClick={toggleTheme}>toggle</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
            <Counter />
        </div>
    );
};
