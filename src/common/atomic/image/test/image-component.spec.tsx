import React from 'react';
import { render, shallow } from 'enzyme';
import ImageComponent from '../image.component';
import UnitTestingHelper from '../../../../shared/helper/unit-testing.helper';
import { ComponentImageDefaultPropsInterface } from '../../../../shared/interface/component/component-image.inteface';
import FixtureImages from './fixture-image-component.spec';

describe('Testing image component in atomic component', () => {
    it('Test render image component', () => {
        render(
            <ImageComponent
                src="1.jpg"
                alt="alt"
                width={40}
                height={40}
                objectFit="cover"
                type="circle"
            />
        );
    });

    it('Test attribute style in image component', () => {
        const avatar = render(
            <ImageComponent
                src="1.jpg"
                alt="alt"
                width={40}
                objectFit="fill"
                type="circle"
            />
        );

        expect(avatar.prop('alt')).toBe('alt');
        expect(avatar.prop('src')).toBe('1.jpg');
        expect(avatar.hasClass('ui-atomic-image')).toBe(true);
        expect(avatar.hasClass('ui-atomic-image--type-circle')).toBe(true);
        expect(avatar.prop('style')).toHaveProperty('width', '40px');
        expect(avatar.prop('style')).toHaveProperty('height', 'initial');
        expect(avatar.prop('style')).toHaveProperty('overflow', 'initial');
        expect(avatar.prop('style')).toHaveProperty('object-fit', 'fill');
    });

    it('Testing invoke on click', () => {
        const invoke = jest.fn();
        const avatar = shallow(
            <ImageComponent
                src="1.jpg"
                alt="alt"
                objectFit="fill"
                type="circle"
                onClick={invoke}
            />
        );

        expect(invoke).toBeCalledTimes(0);
        avatar.simulate('click');
        expect(invoke).toBeCalledTimes(1);
    });

    it('Testing image with fixture', () => {
        UnitTestingHelper.fixture<
            ComponentImageDefaultPropsInterface,
            ComponentImageDefaultPropsInterface
        >(
            FixtureImages,
            (
                input: ComponentImageDefaultPropsInterface,
                output: ComponentImageDefaultPropsInterface
            ): void => {
                const avatar = render(<ImageComponent {...input} />);

                expect(avatar.prop('alt')).toBe(output.alt);
                expect(avatar.prop('src')).toBe(output.src);
                expect(avatar.hasClass('ui-atomic-image')).toBe(true);
                expect(
                    avatar.hasClass(`ui-atomic-image--type-${output.type}`)
                ).toBe(true);
                expect(avatar.prop('style')).toHaveProperty(
                    'width',
                    output.width
                );
                expect(avatar.prop('style')).toHaveProperty(
                    'height',
                    output.height
                );
                expect(avatar.prop('style')).toHaveProperty(
                    'overflow',
                    output.overflow
                );
                expect(avatar.prop('style')).toHaveProperty(
                    'object-fit',
                    output.objectFit
                );
            }
        );
    });
});
