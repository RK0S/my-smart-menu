import { useState, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Logo } from 'shared/ui/Logo/Logo';
import { Modal } from 'shared/ui/Modal/Modal';
import { Nav } from '../Nav/Nav';
import { Switchers } from '../Switchers/Switchers';
import cls from './Header.module.scss';

export const Header = () => {
    const [isOpened, setIsOpened] = useState(false);

    const onOpen = useCallback(() => {
        setIsOpened(true);
    }, []);

    const onClose = useCallback(() => {
        setIsOpened(false);
    }, []);

    return (
        <header className={classNames(cls.header, {}, [])}>
            <div>
                <Logo />
            </div>
            <Nav />
            <div className={cls['right-side']}>
                <Switchers className={cls.utils} />
                <Button variant="outlined" onClick={onOpen}>
                    Войти
                </Button>
            </div>
            <Modal isOpened={isOpened} onClose={onClose}>
                dfgdfg
            </Modal>
        </header>
    );
};
