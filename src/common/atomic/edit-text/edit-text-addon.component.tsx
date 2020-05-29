import React, { SFC } from 'react';
import PropTypes, { Validator } from 'prop-types';

import EditTextComponent from './edit-text.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { EditTextAddonInterface } from './interface/component.interface';
import ColorDefaultConstant from '../../../shared/constant/color.constant';
import { ColorType } from '../../../shared/interface/common/color.interface';
import { ComponentFontWeightTypography } from '../../../shared/interface/component/component-typography.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Edit Text Component
 * @author Cathrine <Cathrine@99.co>
 * @since 2020.05.20
 */
const EditTextAddOnComponent: SFC<EditTextAddonInterface> = ({
    children,
    fontSize,
    fontWeight,
    color,
    position,
    ...res
}: EditTextAddonInterface) => {
    const classNameContainer: ComponentClassnameDefaultInterface = {
        'ui-atomic-edit-text__addOnContainer': true,
        flex: true,
        relative: true,
        [`ui-atomic-edit-text__addOnContainer--${position}`]: true
    };

    return (
        <div className={StringHelper.objToString(classNameContainer)}>
            {children ? (
                <span
                    className={StringHelper.objToString({
                        [`ui-atomic-edit-text__addOn`]: true
                    })}
                    style={{
                        fontSize: ValidatorHelper.isNumber(fontSize)
                            ? `${fontSize}px`
                            : undefined,
                        fontWeight,
                        color: ValidatorHelper.verifiedKeyIsExist(
                            ColorDefaultConstant,
                            color
                        )
                            ? ColorDefaultConstant[color as ColorType]
                            : undefined
                    }}
                >
                    {children}
                </span>
            ) : null}
            <EditTextComponent {...res} />
        </div>
    );
};

EditTextAddOnComponent.defaultProps = {
    fontSize: 13,
    fontWeight: 400,
    color: 'addOnText',
    position: 'right'
};

EditTextAddOnComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.oneOf<ComponentFontWeightTypography>([
        300,
        400,
        500,
        600,
        700
    ]) as Validator<ComponentFontWeightTypography>,
    color: PropTypes.oneOf(Object.keys(ColorDefaultConstant)) as Validator<
        ColorType
    >,
    position: PropTypes.oneOf(['left', 'right']) as Validator<'left' | 'right'>
};

export default EditTextAddOnComponent;
