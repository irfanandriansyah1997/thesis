import React, { SFC } from 'react';
import { render } from 'enzyme';

import UnitTestingHelper from '../../../../shared/helper/unit-testing.helper';
import ButtonComponent from '../button.component';
import IconComponent from '../../icon/icon.component';
import { ButtonPropsInterface } from '../interface/component.interface';
import FixtureButton from './fixture-button-component.spec';

describe('Testing button component in atomic component ', () => {
    it('Should render button component', () => {
        render(
            <ButtonComponent size="default" theme="primary">
                Primary
            </ButtonComponent>
        );
    });

    it('Test props in button component', () => {
        const button = render(
            <ButtonComponent size="default" theme="primary">
                Primary
            </ButtonComponent>
        );

        expect(button.text()).toContain('Primary');
        expect(button.hasClass('ui-atomic-button')).toBe(true);
        expect(button.hasClass('ui-atomic-button--size-default')).toBe(true);
        expect(button.hasClass('ui-atomic-button--theme-primary')).toBe(true);
    });

    it('Should render button with fixture', () => {
        UnitTestingHelper.fixture<ButtonPropsInterface, ButtonPropsInterface>(
            FixtureButton,
            (
                input: ButtonPropsInterface,
                output: ButtonPropsInterface
            ): void => {
                const button = render(<ButtonComponent {...input} />);

                expect(
                    button.hasClass(`ui-atomic-button--theme-${output.theme}`)
                ).toBe(true);
                expect(
                    button.hasClass(`ui-atomic-button--size-${output.size}`)
                ).toBe(true);
                expect(button).toHaveProperty('children');
            }
        );
    });

    it('Should render button with icon', () => {
        // eslint-disable-next-line require-jsdoc-except/require-jsdoc
        const Icon: SFC = () => (
            <IconComponent color="primary" size={18}>
                close
            </IconComponent>
        );

        const button = render(
            <ButtonComponent size="default" theme="primary" icon={<Icon />}>
                Close
            </ButtonComponent>
        );

        expect(button.find('span').hasClass('ui-atomic-button__icon')).toBe(
            true
        );
    });
});
