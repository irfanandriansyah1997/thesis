import SampleHelper from '../sample-helper';

describe('Testing Sample Helper', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
    });

    it('add 2 number', () => {
        expect(SampleHelper.addNumber(10, 5)).toBe(15);
    });
});
