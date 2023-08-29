import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

interface SwitchersProps {
    className?: string;
}

export const Switchers = (props: SwitchersProps) => {
    const { className } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
    );
};
