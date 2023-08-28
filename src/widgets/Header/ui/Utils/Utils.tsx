import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

interface UtilsProps {
    className?: string;
}

export const Utils = (props: UtilsProps) => {
    const { className } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <ThemeSwitcher />
            <div>RU</div>
        </div>
    );
};