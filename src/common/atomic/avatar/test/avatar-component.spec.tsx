import React from 'react';
import { render, shallow } from 'enzyme';

import AvatarComponent from '../avatar.component';

describe('Testing avatar component in atomic component', () => {
    it('Test render avatar component', () => {
        render(
            <AvatarComponent
                src="1.jpg"
                alt="alt"
                size={40}
                objectFit="cover"
                type="circle"
            />
        );
    });

    it('Test attribute style in avatar component', () => {
        const avatar = render(
            <AvatarComponent
                src="1.jpg"
                alt="alt"
                size={40}
                objectFit="fill"
                type="circle"
            />
        );

        expect(avatar.prop('alt')).toBe('alt');
        expect(avatar.prop('src')).toBe('1.jpg');
        expect(avatar.hasClass('ui-atomic-avatar')).toBe(true);
        expect(avatar.prop('style')).toHaveProperty('width', '40px');
        expect(avatar.prop('style')).toHaveProperty('height', '40px');
        expect(avatar.prop('style')).toHaveProperty('overflow', 'hidden');
        expect(avatar.prop('style')).toHaveProperty('object-fit', 'fill');
    });

    it('Testing invoke on click', () => {
        const invoke = jest.fn();
        const avatar = shallow(
            <AvatarComponent
                src="1.jpg"
                alt="alt"
                size={40}
                objectFit="fill"
                type="circle"
                onClick={invoke}
            />
        );

        expect(invoke).toBeCalledTimes(0);
        avatar.simulate('click');
        expect(invoke).toBeCalledTimes(1);
    });
});
