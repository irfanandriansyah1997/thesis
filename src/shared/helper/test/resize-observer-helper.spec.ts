/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable no-new */
import ResizeObserverHelper from '../resizer-observer.helper';
import ResizeObserver from '../__mocks__/resizer-observer';

describe('Testing Resize Observer Helper With ResizeObserver Undefined', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
    });

    it('register callback in this helper', () => {
        try {
            const callback = jest.fn((entry) => entry);
            new ResizeObserverHelper().registerCallback(callback).execute();
        } catch (e) {
            expect(e.message).toBe(
                '[Error] Resize Observer is not supported in your browser 😔'
            );
        }
    });

    it('testing method install', () => {
        try {
            expect(
                ResizeObserverHelper.install(
                    (undefined as unknown) as ResizeObserverCallback
                )
            ).toBeFalsy();
        } catch (e) {
            expect(e.message).toBe(
                '[Error] Resize Observer is not supported in your browser 😔'
            );
        }
    });
});

describe('Testing Resize Observer Helper', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
        // @ts-ignore
        global.ResizeObserver = ResizeObserver;
    });

    afterEach(() => {
        // @ts-ignore
        global.ResizeObserver = undefined;
    });

    it('testing create object Resize Observer Helper', () => {
        const instance = new ResizeObserverHelper();

        expect(instance).toBeInstanceOf(ResizeObserverHelper);
    });

    it('testing all method public', () => {
        const instance = new ResizeObserverHelper()
            .registerCallback(jest.fn())
            .execute();

        expect(instance.registerCallback(jest.fn())).toBeInstanceOf(
            ResizeObserverHelper
        );
        expect(instance.observe(document.createElement('p'))).toBeInstanceOf(
            ResizeObserverHelper
        );
        expect(instance.unobserve(document.createElement('p'))).toBeInstanceOf(
            ResizeObserverHelper
        );
    });

    it('register callback in this helper', () => {
        const callback = jest.fn((entry) => entry);
        const instance = new ResizeObserverHelper()
            .registerCallback(callback)
            .execute();
        instance.observe(document.createElement('p'));

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback.mock.results[0].value.length).toBe(1);
    });

    it('register callback in this helper with wrong parameter', () => {
        try {
            const instance1 = new ResizeObserverHelper()
                .registerCallback((5 as unknown) as ResizeObserverCallback)
                .execute();
            instance1.observe(document.createElement('p'));
        } catch (e) {
            expect(e.message).toBe(
                `[Error] Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.`
            );
        }

        try {
            const instance2 = new ResizeObserverHelper()
                .registerCallback(
                    (undefined as unknown) as ResizeObserverCallback
                )
                .execute();
            instance2.observe(document.createElement('p'));
        } catch (e) {
            expect(e.message).toBe(
                `[Error] Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.`
            );
        }
    });

    it('register observer in this helper with wrong parameter', () => {
        try {
            const instance1 = new ResizeObserverHelper()
                .registerCallback(jest.fn())
                .execute();
            instance1.observe((5 as unknown) as Element);
        } catch (e) {
            expect(e.message).toBe(
                `Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.`
            );
        }

        try {
            const instance2 = new ResizeObserverHelper()
                .registerCallback(jest.fn())
                .execute();
            instance2.observe((undefined as unknown) as Element);
        } catch (e) {
            expect(e.message).toBe(
                `Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element'.`
            );
        }
    });

    it('testing method observerGuard with wrong parameter', () => {
        try {
            ResizeObserverHelper.observerGuard(
                (undefined as unknown) as ResizeObserver
            );
        } catch (e) {
            expect(e.message).toBe(
                `[Error] Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.`
            );
        }
    });

    it('testing method uobserve with wrong parameter', () => {
        try {
            const instance2 = new ResizeObserverHelper()
                .registerCallback(jest.fn())
                .execute();
            instance2.unobserve((undefined as unknown) as Element);
        } catch (e) {
            expect(e.message).toBe(`target is not element`);
        }
    });
});
