import UnitTestingHelper from '../unit-testing.helper';

describe('Unit Testing Helper', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
    });

    it('Testing running method fixture', () => {
        UnitTestingHelper.fixture<
            Record<string, unknown>,
            Record<string, unknown>
        >(
            {
                input: [
                    {
                        name: 1
                    }
                ],
                output: [
                    {
                        name: 1
                    }
                ]
            },
            (
                input: Record<string, unknown>,
                output: Record<string, unknown>
            ): void => {
                expect(input).toStrictEqual(output);
            }
        );
    });
});
