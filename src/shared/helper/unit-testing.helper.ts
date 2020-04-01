import LogHelperAbstract from '../abstract/log/log-helper.abstract';
import { UnitTestingFixtureInterface } from '../interface/unit-testing/unit-testing.interface';

/**
 * Unit Testing Helper
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.01
 */
class UnitTestingHelper extends LogHelperAbstract {
    /**
     * Helper Fixture Unit Testing
     * @param {UnitTestingFixtureInterface<input, output>} param - fixture variable
     * @return {void}
     */
    static fixture<x, y>(
        param: UnitTestingFixtureInterface<x, y>,
        fn: (input: x, output: y) => void
    ): void {
        try {
            const { input, output } = param;

            input.forEach((item: x, index: number): void => {
                fn(item, output[index]);
            });
        } catch (e) {
            UnitTestingHelper.logError(e);
        }
    }
}

export default UnitTestingHelper;
