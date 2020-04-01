import ComponentHelper from '../component.helper';

describe('Testing Component Helper', () => {
    beforeEach(() => {
        global.console = {
            ...global.console,
            error: jest.fn(),
            debug: jest.fn()
        };
    });

    it('check is urbanindo icon', () => {
        expect(ComponentHelper.isUrbanindoIcon('uif-icon')).toBe(true);
        expect(ComponentHelper.isUrbanindoIcon('rui-icon-a')).toBe(false);
    });

    it('check param is urbanindo icon with undefined parameter', () => {
        try {
            ComponentHelper.isUrbanindoIcon((undefined as unknown) as string);
        } catch (e) {
            expect(e.message).toBe(
                'Cannot convert undefined or null to object'
            );

            expect(global.console.error).toHaveBeenCalledTimes(1);
        }
    });

    it('check is rumah123 icon', () => {
        expect(ComponentHelper.isRumah123Icon('uif-icon')).toBe(false);
        expect(ComponentHelper.isRumah123Icon('rui-icon-a')).toBe(true);
    });

    it('check param is rumah123 icon with undefined parameter', () => {
        try {
            ComponentHelper.isRumah123Icon((undefined as unknown) as string);
        } catch (e) {
            expect(e.message).toBe(
                'Cannot convert undefined or null to object'
            );

            expect(global.console.error).toHaveBeenCalledTimes(1);
        }
    });

    it('testing method registerAttributeStyle working properly', () => {
        expect(ComponentHelper.registerAttributeStyle(10)).toBe('10px');
        expect(ComponentHelper.registerAttributeStyle('auto')).toBe('auto');
        expect(ComponentHelper.registerAttributeStyle(undefined)).toBe(
            'initial'
        );
    });
});
