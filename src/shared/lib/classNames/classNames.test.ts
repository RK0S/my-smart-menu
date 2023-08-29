import { classNames } from './classNames';

describe('classNames.test', () => {
    test('with first class', () => {
        expect(classNames('js')).toEqual('js');
    });

    test('with first and third classes', () => {
        expect(classNames('js', {}, ['cls'])).toEqual('js cls');
    });

    test('with all classes', () => {
        const expected = 'js cls1 cls2 hovered';
        expect(classNames('js', { hovered: true }, ['cls1', 'cls2'])).toEqual(expected);
    });

    test('with all classes and 1 falsy', () => {
        const expected = 'js cls1 cls2 hovered';
        expect(classNames(
            'js',
            { hovered: true, active: false },
            ['cls1', 'cls2']
        ))
            .toEqual(expected);
    });

    test('with all classes and 2 falsy', () => {
        const expected = 'js cls1 cls2 hovered';
        expect(classNames(
            'js',
            { hovered: true, active: false, visited: undefined },
            ['cls1', 'cls2']
        ))
            .toEqual(expected);
    });
});
