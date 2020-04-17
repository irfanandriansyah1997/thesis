/* eslint-disable @typescript-eslint/no-explicit-any */
import ValidatorHelper from './validator.helper';
import LogHelperAbstract from '../abstract/log/log-helper.abstract';

/**
 * Generate Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.17
 */
class ResizeObserverHelper extends LogHelperAbstract {
    private observer: ResizeObserver | false = false;

    private callback: ResizeObserverCallback | undefined;

    constructor() {
        super();

        this.execute = this.execute.bind(this);
        this.executeCommandObserver = this.executeCommandObserver.bind(this);
    }

    /**
     * Setter Callback Resize Observer
     * @param {ResizeObserverCallback} callback - callback observer
     * @return {ResizeObserverHelper}
     */
    public registerCallback(callback: ResizeObserverCallback): this {
        try {
            const check = ResizeObserverHelper.callbackGuard(callback);

            if (check === undefined) {
                this.callback = callback;
            } else {
                throw new Error(check);
            }
        } catch (e) {
            ResizeObserverHelper.logError(e.message);
        }

        return this;
    }

    /**
     * Observe Resize Observer
     * @param {Element} target - element
     * @return {ResizeObserverHelper}
     */
    public observe(target: Element): this {
        try {
            this.executeCommandObserver('observe', target);
        } catch (e) {
            ResizeObserverHelper.logError(e.message);
        }

        return this;
    }

    /**
     * Observe Resize Observer
     * @param {Element} target - element
     * @return {ResizeObserverHelper}
     */
    public unobserve(target: Element): this {
        try {
            this.executeCommandObserver('unobserve', target);
        } catch (e) {
            ResizeObserverHelper.logError(e.message);
        }

        return this;
    }

    /**
     * Execute Command ResizeObserver
     * @param {string} functionName - fn name
     * @param {Element} target - element
     */
    private executeCommandObserver(fn: string, target: Element): void {
        const { observer } = this;
        const checkTarget = ResizeObserverHelper.targetGuard('observe', target);
        const checkObserver = ResizeObserverHelper.observerGuard(
            observer as ResizeObserver
        );

        if (checkTarget === undefined && checkObserver === undefined) {
            (observer as ResizeObserver)[fn](target);
        }
        if (ValidatorHelper.verifiedIsNotEmpty(checkTarget)) {
            throw new Error(checkTarget);
        }
        if (ValidatorHelper.verifiedIsNotEmpty(checkObserver)) {
            throw new Error(checkObserver);
        }
    }

    /**
     * Execute Command ResizeObserver
     * @param {string} functionName - fn name
     * @param {Element} target - element
     */
    public execute(): this {
        try {
            const { callback } = this;
            if (ValidatorHelper.verifiedIsNotEmpty(callback)) {
                this.observer = ResizeObserverHelper.install(
                    callback as ResizeObserverCallback
                );
            } else {
                throw new Error(
                    '[Error] method registerCallback is not implemented'
                );
            }
        } catch (e) {
            ResizeObserverHelper.logError(e);
        }

        return this;
    }

    /**
     * Install Resize Observer
     * @return {ResizeObserver | false}
     */
    static install(callback: ResizeObserverCallback): ResizeObserver | false {
        try {
            if (ResizeObserver) {
                return new ResizeObserver(callback);
            }

            throw new Error(
                '[Error] Resize Observer is not supported in your browser 😔'
            );
        } catch (e) {
            ResizeObserverHelper.logError(e.message);

            return false;
        }
    }

    /**
     * Checking Observer Parameter
     * @param {ResizeObserver} observer
     * @return {string | undefined}
     */
    static observerGuard(observer: ResizeObserver): string | undefined {
        if (typeof observer === 'undefined') {
            return `[Error] observer is undefined`;
        }
        if (!(observer instanceof ResizeObserver)) {
            return `[Error] parameter 1 is not of type 'ResizeObserver'. method execute is not implemented`;
        }

        return undefined;
    }

    /**
     * Checking Callback Parameter
     * @param {ResizeObserverCallback} callback - callback observer
     * @return {string | undefined}
     */
    static callbackGuard(callback: ResizeObserverCallback): string | undefined {
        if (typeof callback === 'undefined') {
            return `[Error] Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.`;
        }
        if (typeof callback !== 'function') {
            return `[Error] Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.`;
        }

        return undefined;
    }

    /**
     * Checking target observer
     * @param {string} functionName - function name
     * @param {Element} targer - dom element
     * @return {string | undefined}
     */
    static targetGuard(
        functionName: string,
        target: Element
    ): string | undefined {
        if (typeof target === 'undefined') {
            return `Failed to execute '${functionName}' on 'ResizeObserver': 1 argument required, but only 0 present.`;
        }
        if (!(target instanceof (window as any).Element)) {
            return `Failed to execute '${functionName}' on 'ResizeObserver': parameter 1 is not of type 'Element'.`;
        }

        return undefined;
    }
}

export default ResizeObserverHelper;
