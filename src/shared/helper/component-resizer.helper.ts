import { useEffect, useState, useRef, useMemo, RefObject } from 'react';

import ResizeObserverHelper from './resizer-observer.helper';
import {
    ComponentResizeObserverCallbackType,
    ComponentResizeObserverCallbackOutput,
    ComponentResizeObserverOutputInteface
} from '../interface/component/component-resize-observer.interface';

/**
 * Component Resizer Helper
 * @param element
 * @param onResize
 */
function ComponentResizerHelper<T>(option: {
    ref?: RefObject<T>;
    onResize?: ComponentResizeObserverCallbackType;
}): ComponentResizeObserverCallbackOutput<T> {
    const defaultRef = useRef<T>(null);
    const ref = option.ref || defaultRef;
    const { onResize } = option;

    const [size, setSize] = useState<ComponentResizeObserverOutputInteface>({
        height: undefined,
        width: undefined
    });

    const previousSize = useRef<ComponentResizeObserverOutputInteface>({
        height: undefined,
        width: undefined
    });

    useEffect(() => {
        if (
            typeof ref !== 'object' ||
            ref === null ||
            !(ref.current instanceof Element)
        ) {
            return (): boolean => false;
        }

        const element = ref.current;
        const observer = new ResizeObserverHelper()
            .registerCallback((entries) => {
                if (Array.isArray(entries) && entries.length > 0) {
                    const entry = entries[0];

                    const newWidth = Math.round(entry.contentRect.width);
                    const newHeight = Math.round(entry.contentRect.height);

                    if (
                        previousSize.current.width !== newWidth ||
                        previousSize.current.height !== newHeight
                    ) {
                        const newSize = { width: newWidth, height: newHeight };
                        if (onResize) {
                            onResize(newSize);
                        } else {
                            previousSize.current.width = newWidth;
                            previousSize.current.height = newHeight;
                            setSize(newSize);
                        }
                    }
                }
            })
            .execute();

        observer.observe((element as unknown) as Element);

        return (): void => {
            observer.unobserve((element as unknown) as Element);
        };
    }, [ref, onResize]);

    return useMemo(() => ({ ref, width: size.width, height: size.height }), [
        ref,
        size ? size.width : null,
        size ? size.height : null
    ]);
}

export default ComponentResizerHelper;
