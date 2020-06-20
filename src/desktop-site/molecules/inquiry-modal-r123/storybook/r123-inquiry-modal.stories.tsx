import React from 'react';

import StorybookDocumentationBuilder from '../../../../.storybook/builder/storybook-documentation.builder';
import DividerDocsComponent from '../../../../.storybook/component/atomic/divider/divider.component';
import SectionInquiryModalSuccessComponent from './section/section-success.stories';
import SectionInquiryModalFailedComponent from './section/section-failed.stories';
import '../style/style.scss';

((): void => {
    new StorybookDocumentationBuilder('Inquiry Modal R123', 'molecules')
        .setSection('desktop')
        .setDescriptionComponent('Listing Inquiry R123 Component')
        .registerDocumentation(
            <>
                <SectionInquiryModalSuccessComponent
                    show={false}
                    onCloseDialog={(): void => undefined}
                />
                <DividerDocsComponent />
                <SectionInquiryModalFailedComponent
                    show={false}
                    onCloseDialog={(): void => undefined}
                />
            </>
        )
        .execute();
})();
