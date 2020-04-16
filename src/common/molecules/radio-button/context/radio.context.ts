/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';

import { ComponentRadioContextInterface } from '../../../../shared/interface/component/component-input.interface';

const RadioContext = createContext<ComponentRadioContextInterface>({
    name: '',
    value: undefined,
    type: 'radio',
    onChange: () => {}
});

export default RadioContext;
