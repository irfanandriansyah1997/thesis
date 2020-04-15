import React from 'react';
import { render, shallow } from 'enzyme';

import BadgesComponent from '../badges.component';
import IconComponent from '../../icon/icon.component';
import FixtureBadges from './fixture-badge-component.spec';
import { BadgesPropsInterface } from '../interface/component.interface';
import UnitTestingHelper from '../../../../shared/helper/unit-testing.helper';

describe('Testing badges component in atomic component ', () => {
    it('Test render badge component', () => {
        const badges = render(
            <BadgesComponent color="info100">badges</BadgesComponent>
        );

        expect(badges.text()).toContain('badges');
        expect(badges.hasClass('ui-atomic-badges')).toBe(true);
        expect(badges.prop('style')).toHaveProperty(
            'background-color',
            'rgba(215,244,254,1)'
        );
        expect(badges.prop('style')).toHaveProperty('border-radius', '20px');
    });

    it('Test render badge component not rounded', () => {
        const badges = render(
            <BadgesComponent color="info100" rounded={false}>
                badges
            </BadgesComponent>
        );

        expect(badges.prop('style')).toHaveProperty('border-radius', '0');
    });

    it('Test render badge component with close dialog', () => {
        const callback = jest.fn();
        const badges = shallow(
            <BadgesComponent color="info100" onCloseBadges={callback}>
                badges
            </BadgesComponent>
        );

        badges.find(IconComponent).simulate('click');

        expect(callback).toBeCalledTimes(1);
    });

    it('Test render badge component without color', () => {
        const badges = render(<BadgesComponent>badges</BadgesComponent>);

        expect(badges.prop('style')).toHaveProperty(
            'background-color',
            'rgba(51,63,72,1)'
        );
    });

    it('Testing badge with fixture', () => {
        UnitTestingHelper.fixture<BadgesPropsInterface, string[]>(
            FixtureBadges,
            (input: BadgesPropsInterface, output: string[]): void => {
                const badges = render(<BadgesComponent {...input} />);

                output.forEach((item: string): void => {
                    expect(badges.hasClass(item)).toBe(true);
                });
            }
        );
    });
});
