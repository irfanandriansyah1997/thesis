import { UnitTestingFixtureInterface } from '../../../../shared/interface/unit-testing/unit-testing.interface';
import { ButtonPropsInterface } from '../interface/component.interface';

test.skip('it is not shown', (): void => {});

const FixtureButton: UnitTestingFixtureInterface<
    ButtonPropsInterface,
    ButtonPropsInterface
> = {
    input: [
        {
            size: 'default',
            theme: 'primary',
            children: 'close'
        },
        {
            size: 'default',
            theme: 'secondary',
            outline: false
        }
    ],
    output: [
        {
            size: 'default',
            theme: 'primary',
            children: 'close'
        },
        {
            size: 'default',
            theme: 'secondary',
            outline: false
        }
    ]
};

export default FixtureButton;
