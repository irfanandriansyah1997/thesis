import PropTypes from 'prop-types';
import React, { FunctionComponent, Validator } from 'react';

import LinkComponent from '../../../common/atomic/link/link.component';
import {
    FooterLinkInterface,
    FooterTabContentInterface
} from './interface/component.interface';

/**
 * Footer Upper Section Tab Item Component
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.18
 */
const FooterUpperSectionTabItemComponent: FunctionComponent<FooterTabContentInterface> = ({
    menu
}: FooterTabContentInterface) => {
    return (
        <div>
            {menu.map(({ text, to }) => {
                return (
                    <LinkComponent
                        href={to}
                        key={`${text}-${to}`}
                        className="ui-organism-footer-r123__upper-section__active-content"
                    >
                        {text}
                    </LinkComponent>
                );
            })}
        </div>
    );
};

FooterUpperSectionTabItemComponent.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            to: PropTypes.string
        })
    ).isRequired as Validator<FooterLinkInterface[]>
};

FooterUpperSectionTabItemComponent.defaultProps = {
    menu: []
};

export default FooterUpperSectionTabItemComponent;
