import React, { SFC } from 'react';
import { render, shallow } from 'enzyme';

import LinkComponent from '../link.component';
import IconComponent from '../../icon/icon.component';
import ColorDefaultConstant from '../../../../shared/constant/color.constant';

describe('Testing link component in atomic component', () => {
    it('Should render link component correctly', () => {
        const link = render(<LinkComponent>Link</LinkComponent>);

        expect(link.text()).toContain('Link');
        expect(link.hasClass('ui-atomic-link')).toBe(true);
        expect(link.find('span').hasClass('ui-atomic-text')).toBe(true);
        expect(
            link.find('span').hasClass('ui-atomic-text--styling-default')
        ).toBe(true);
        expect(
            link.find('span').hasClass('ui-atomic-text--typeface-primary')
        ).toBe(true);
        expect(link.find('span').hasClass('ui-atomic-link--children')).toBe(
            true
        );
        expect(link.hasClass('ui-atomic-link--styling-underline-none')).toBe(
            false
        );
    });

    it('Should render link component without underline correctly', () => {
        const link = render(<LinkComponent noUnderline>Link</LinkComponent>);

        expect(link.hasClass('ui-atomic-link--styling-underline-none')).toBe(
            true
        );
    });

    it('Should render link component with color correctly', () => {
        const link = render(
            <LinkComponent color="warning">Link</LinkComponent>
        );

        expect(link.prop('style')).toHaveProperty(
            'color',
            ColorDefaultConstant.warning
        );
    });

    it('Should render link component with icon', () => {
        // eslint-disable-next-line require-jsdoc-except/require-jsdoc
        const Icon: SFC = () => (
            <IconComponent color="primary" size={18}>
                rui-icon-save
            </IconComponent>
        );

        const link = render(
            <LinkComponent icon={<Icon />} noUnderline>
                Save
            </LinkComponent>
        );

        expect(link.find('span').hasClass('ui-atomic-link__icon')).toBe(true);
    });

    it('Test link component with onClick event', () => {
        const callback = jest.fn();
        const wrapper = shallow(
            <LinkComponent onClick={callback}>Save</LinkComponent>
        );

        wrapper.simulate('click');

        expect(callback).toBeCalledTimes(1);
    });
});
