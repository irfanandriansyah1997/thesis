import StringHelper from '../string.helper';
import { ComponentClassnameDefaultInterface } from '../../interface/component/component-default.interface';

describe('Testing String Helper', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
    });

    it('convert object to string success', () => {
        expect(
            StringHelper.objToString({
                'testing-1': true,
                'testing-2': false,
                'testing-3': true
            })
        ).toBe('testing-1 testing-3');
    });

    it('convert object to string with undefined', () => {
        try {
            StringHelper.objToString(
                (undefined as unknown) as ComponentClassnameDefaultInterface
            );
        } catch (e) {
            expect(e.message).toBe(
                'Cannot convert undefined or null to object'
            );

            expect(global.console.error).toHaveBeenCalledTimes(1);
        }
    });

    it('convert object to string with null', () => {
        try {
            StringHelper.objToString(
                (null as unknown) as ComponentClassnameDefaultInterface
            );
        } catch (e) {
            expect(e.message).toBe(
                'Cannot convert undefined or null to object'
            );

            expect(global.console.error).toHaveBeenCalledTimes(1);
        }
    });
});
