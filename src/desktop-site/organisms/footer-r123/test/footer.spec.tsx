import React from 'react';
import { render } from 'enzyme';
import FooterComponent from '../footer.component';
import { DefaultFooterR123 } from '../storybook/templates/template-footer.stories';

describe('Testing footer r123 in organisms component ', () => {
    it('should render component working properly', () => {
        render(<FooterComponent {...DefaultFooterR123} />);
    });
});
