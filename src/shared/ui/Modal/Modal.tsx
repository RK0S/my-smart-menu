import { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useMount } from 'shared/lib/hooks/useMount/useMount';

import cls from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
    isOpened: boolean;
    className?: string;
}

interface KeyboardEvent {
    key: string;
}

export const Modal = (props: ModalProps) => {
    const { children, onClose, isOpened, className } = props;
    const isMounted = useMount({ isOpened });

    const onKeyDown = useCallback(
        (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpened, onKeyDown]);

    if (!isMounted) {
        return null;
    }

    const toClose = isMounted && !isOpened;

    return (
        <Portal>
            <div className={classNames(cls.modal, {}, [className])}>
                <div
                    className={classNames(cls.overlay, {}, [])}
                    tabIndex={0}
                    role="button"
                    onClick={onClose}
                    aria-hidden="true"
                />
                <div
                    className={classNames(
                        cls.content,
                        { [cls.closing]: toClose, [cls.opening]: isOpened },
                        []
                    )}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
