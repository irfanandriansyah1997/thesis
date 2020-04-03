import { BadgesPropsInterface } from '../interface/component.interface';
import { ComponentDefaultSize } from '../../../../shared/interface/component/component-size.interface';
import { UnitTestingFixtureInterface } from '../../../../shared/interface/unit-testing/unit-testing.interface';

test.skip('it is not snowing', (): void => {});

const size: ComponentDefaultSize[] = ['big', 'default', 'small'];

const FixtureBadges: UnitTestingFixtureInterface<
    BadgesPropsInterface,
    string[]
> = {
    input: size.map(
        (item: ComponentDefaultSize): BadgesPropsInterface => ({
            children: 'badges',
            size: item
        })
    ),
    output: size.map((item: ComponentDefaultSize): string[] => [
        'flex',
        'relative',
        'ui-atomic-badges',
        `ui-atomic-badges--size-${item}`
    ])
};

export default FixtureBadges;
