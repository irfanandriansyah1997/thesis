import ObjectHelper from '../object.helper';

describe('Testing Component Helper', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
    });

    it('testing exclude desctructure object working properly', () => {
        expect(
            ObjectHelper.excludeDestructureObject(
                {
                    name: 'test',
                    age: 15
                },
                ['age']
            )
        ).toStrictEqual({ name: 'test' });
    });

    it('exclude desctructure object with wrong parameter', () => {
        try {
            ObjectHelper.excludeDestructureObject(undefined, ['age']);
        } catch (e) {
            expect(e.message).toBe(
                '[Error] parameter obj must be Record<string, any> type'
            );

            expect(global.console.error).toHaveBeenCalledTimes(1);
        }
    });
});
