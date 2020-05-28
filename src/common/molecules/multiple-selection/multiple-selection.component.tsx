/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
    FunctionComponent,
    ChangeEvent,
    useState,
    ReactNode
} from 'react';

import TextComponent from '../../atomic/text/text.component';
import DropdownComponent from '../dropdown/dropdown.component';
import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import DropdownItemComponent from '../dropdown/dropdown-item.component';
import {
    MultipleSelectionPropsInterface,
    MultipleSelectionItemPropsInterface,
    MultipleSelectionHeadingPropsInterface
} from './interface/component.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

const ItemComponentName = 'MultipleSelectionItemComponent';
const HeadingComponentName = 'MultipleSelectionHeadingComponent';

/**
 * Multiple Selection Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.27
 */
const MultipleSelectionComponent: FunctionComponent<MultipleSelectionPropsInterface> = ({
    value,
    onSearch,
    onChange,
    children,
    placeholder,
    ...res
}) => {
    const [textValue, setTextValue] = useState<string>('');
    const [selected] = useState<boolean>(
        ValidatorHelper.verifiedIsNotEmpty(value)
    );
    const className: ComponentClassnameDefaultInterface = {
        'ui-molecules-multiple-selection': true,
        [`${res.className}`]: ValidatorHelper.verifiedIsNotEmpty(res.className)
    };
    delete res.className;

    /**
     * On Change Edit Text
     * @param {ChangeEvent<HTMLInputElement>} target - target param edit text
     * @return {void}
     */
    const onChangeSearch = ({
        target
    }: ChangeEvent<HTMLInputElement>): void => {
        setTextValue(target.value);
        onSearch({
            query: target.value
        });

        onChange({
            query: target.value,
            object: value || []
        });
    };

    /**
     *
     */
    const generateToogleComponent = (): ReactNode => {
        return (
            <div className="ui-molecules-multiple-selection__toggle">
                {selected && (
                    <TextComponent color="text" styling="heading-5" tag="p">
                        {placeholder}
                    </TextComponent>
                )}
                <input {...res} value={textValue} onChange={onChangeSearch} />
            </div>
        );
    };

    return (
        <DropdownComponent
            scroll
            type="list"
            name="testing"
            trigger="click"
            label={generateToogleComponent()}
            className={StringHelper.objToString(className)}
        >
            {React.Children.toArray(children)
                .filter((item: any) => {
                    return (
                        item.type.displayName === HeadingComponentName ||
                        item.type.displayName === ItemComponentName
                    );
                })
                .map((item: any) => {
                    if (item.type.displayName === HeadingComponentName) {
                        const {
                            key,
                            ...resItem
                        }: MultipleSelectionHeadingPropsInterface = item.props;

                        return <DropdownItemComponent key={key} {...resItem} />;
                    }

                    const {
                        key,
                        ...resItem
                    }: MultipleSelectionItemPropsInterface = item.props;

                    return (
                        <DropdownItemComponent key={key}>
                            {resItem.children}
                        </DropdownItemComponent>
                    );
                })}
        </DropdownComponent>
    );
};

export default MultipleSelectionComponent;
