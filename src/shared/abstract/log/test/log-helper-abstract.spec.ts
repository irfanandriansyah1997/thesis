import LogHelperAbstract from '../log-helper.abstract';
/**
 * Log Mock Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.03.24
 */
class LogMockClass extends LogHelperAbstract {}

describe('Testing Abstract Log Helper', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
    });

    it('testing error log', () => {
        expect(global.console.error).toHaveBeenCalledTimes(0);

        LogMockClass.logError(new Error('testing'));

        expect(global.console.error).toHaveBeenCalledTimes(1);
    });

    it('testing debug log', () => {
        expect(global.console.debug).toHaveBeenCalledTimes(0);

        LogMockClass.logDebug('testing');

        expect(global.console.debug).toHaveBeenCalledTimes(1);
    });
});
