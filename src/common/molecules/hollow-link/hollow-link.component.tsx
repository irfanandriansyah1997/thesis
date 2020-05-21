import PropTypes from 'prop-types';
import React, { FunctionComponent } from 'react';

import LinkComponent from '../../atomic/link/link.component';
import IconComponent from '../../atomic/icon/icon.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { HollowLinkPropsInterface } from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Hollow Link Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.20
 */
const HollowLinkComponent: FunctionComponent<HollowLinkPropsInterface> = ({
    icon,
    active,
    ...res
}) => {
    const className: ComponentClassnameDefaultInterface = {
        'ui-molecules-hollow-link': true,
        'ui-molecules-hollow-link--active': ValidatorHelper.verifiedIsNotFalse(
            active
        ),
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };
    delete res.className;

    /**
     * Generate Icon Component
     * @return {ReactNode}
     */
    const IconLink: FunctionComponent = () => {
        if (icon) {
            return <IconComponent size={16}>{icon}</IconComponent>;
        }

        return null;
    };

    return (
        <LinkComponent
            noUnderline
            fontWeight={500}
            styling="heading-6"
            icon={<IconLink />}
            className={StringHelper.objToString(className)}
            {...res}
        />
    );
};

HollowLinkComponent.displayName = 'HollowLinkComponent';

HollowLinkComponent.propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.string
};

HollowLinkComponent.defaultProps = {
    active: false,
    icon: undefined
};

export default HollowLinkComponent;
