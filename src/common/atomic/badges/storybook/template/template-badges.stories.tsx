/* eslint-disable no-alert */
import { action } from '@storybook/addon-actions';
import { BadgesPropsInterface } from '../../interface/component.interface';

export const BadgeDefaultDocsTemplate: BadgesPropsInterface[] = [
    {
        color: 'actionR123',
        children: 'Badges Action R123',
        size: 'default',
        rounded: false,
        transparent: false
    },
    {
        color: 'featuredR123',
        children: 'Badges Featured R123',
        size: 'default',
        rounded: true,
        transparent: false
    },
    {
        color: 'newPropertyR123',
        children: 'Badges New R123',
        size: 'default',
        rounded: false,
        transparent: false
    },
    {
        color: 'premiumR123',
        children: 'Badges Premium R123',
        size: 'default',
        rounded: true,
        transparent: false,
        onCloseBadges: (): void => {
            action('close click')();
            alert('close click');
        }
    }
];

export const BadgeTransparentDocsTemplate: BadgesPropsInterface[] = [
    {
        color: 'primary',
        children: 'Badges Dengan Transparent',
        size: 'default',
        rounded: true,
        transparent: true
    },
    {
        color: 'secondary',
        children: 'Badges Tanpa Transparent',
        size: 'default',
        rounded: true,
        transparent: false
    }
];

export const BadgeSizeDocsTemplate: BadgesPropsInterface[] = [
    {
        color: 'premiumR123',
        children: 'Small Size Badges',
        size: 'small',
        rounded: true,
        transparent: false
    },
    {
        color: 'premiumR123',
        children: 'Default Size Badges',
        size: 'default',
        rounded: true,
        transparent: false
    },
    {
        color: 'premiumR123',
        children: 'Big Size Badges',
        size: 'big',
        rounded: true,
        transparent: false
    }
];
