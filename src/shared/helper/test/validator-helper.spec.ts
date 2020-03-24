import ValidatorHelper from '../validator.helper';
import { DefaultDynamicObject } from '../../interface/common/object.interface';

describe('Validator Helper', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
    });

    it('testing method is number', () => {
        expect(ValidatorHelper.isNumber(10)).toBe(true);
        expect(ValidatorHelper.isNumber('a')).toBe(false);
    });

    it('testing method is string', () => {
        expect(ValidatorHelper.isString(10)).toBe(false);
        expect(ValidatorHelper.isString('a')).toBe(true);
    });

    it('verirified variable is not empty', () => {
        expect(ValidatorHelper.verifiedIsNotEmpty(null)).toBe(false);
        expect(ValidatorHelper.verifiedIsNotEmpty(undefined)).toBe(false);
        expect(ValidatorHelper.verifiedIsNotEmpty('')).toBe(false);
        expect(ValidatorHelper.verifiedIsNotEmpty('is defined')).toBe(true);
    });

    it('verirified variable is not false', () => {
        expect(ValidatorHelper.verifiedIsNotFalse(null)).toBe(false);
        expect(ValidatorHelper.verifiedIsNotFalse(undefined)).toBe(false);
        expect(ValidatorHelper.verifiedIsNotFalse(false)).toBe(false);
        expect(ValidatorHelper.verifiedIsNotFalse(true)).toBe(true);
    });

    it('check key is exist success', () => {
        expect(
            ValidatorHelper.verifiedKeyIsExist({ test1: 'hello' }, 'test')
        ).toBe(false);

        expect(
            ValidatorHelper.verifiedKeyIsExist({ test1: 'hello' }, undefined)
        ).toBe(false);

        expect(
            ValidatorHelper.verifiedKeyIsExist({ test: 'hello' }, 'test')
        ).toBe(true);
    });

    it('check key is exist with wrong parameter', () => {
        try {
            ValidatorHelper.verifiedKeyIsExist(
                (undefined as unknown) as DefaultDynamicObject,
                'test'
            );
        } catch (e) {
            expect(e.message).toBe(
                'Cannot convert undefined or null to object'
            );

            expect(global.console.error).toHaveBeenCalledTimes(1);
        }
    });
});
