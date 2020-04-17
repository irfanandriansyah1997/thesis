/* eslint-disable class-methods-use-this */
/**
 * Resize Observer Mock
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.17
 */
class ResizeObserver {
    private callback: ResizeObserverCallback;

    private entries: ResizeObserverEntry[] = [];

    public disconnect = jest.fn();

    /**
     * Unobserve Element
     * @param target
     */
    public unobserve(target: Element): void {
        if (!(target instanceof Element)) {
            throw new Error('target is not element');
        }
    }

    /**
     * Observe Element
     * @param target
     */
    public observe(target: Element): void {
        if (target instanceof Element) {
            this.entries.push({
                target: {
                    ...target,
                    scrollHeight: 300
                },
                borderBoxSize: {
                    blockSize: 1,
                    inlineSize: 1
                },
                contentBoxSize: {
                    blockSize: 1,
                    inlineSize: 1
                },
                contentRect: {
                    bottom: 0,
                    height: 300,
                    left: 0,
                    right: 0,
                    toJSON: jest.fn(),
                    top: 0,
                    width: 100,
                    x: 0,
                    y: 0
                }
            });

            this.callback(this.entries, this);
        } else {
            throw new Error('target is not element');
        }
    }

    constructor(callback: ResizeObserverCallback) {
        this.callback = callback;
    }
}

export default ResizeObserver;
