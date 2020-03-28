/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactNode } from 'react';
import { storiesOf } from '@storybook/react';

import DefaultTemplateDocsComponent from '../component/templates/default/default-templates.component';
import { DocumentRouterModuleType } from '../../src/shared/interface/documentation/documentation-router.interface';

/**
 * Storybook Documentation Builder
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.28
 */
class StorybookDocumentationBuilder {
    private componentName: string;

    private descriptionComponent: string | undefined;

    private section: DocumentRouterModuleType | undefined = undefined;

    private markdown: unknown | undefined = undefined;

    private documentation: ReactNode | undefined = undefined;

    constructor(componentName: string) {
        this.componentName = componentName;
    }

    /**
     * Getter label documentation component
     * @return {string}
     */
    private get formattedSection(): string {
        const { section } = this;

        if (section) {
            const label = {
                common: 'Common Component',
                desktop: 'Desktop Component',
                mobile: 'Mobile Component'
            };

            return label[section];
        }

        return '';
    }

    /**
     * Getter label documentation component
     * @return {string}
     */
    private get formattedLabel(): string {
        const { componentName, formattedSection } = this;

        return `R123 Styleguide|${formattedSection}/${componentName}`;
    }

    /**
     * Setter Section Storybook
     * @param {DocumentRouterModuleType} section - type section common / desktop / mobile
     * @return {StorybookDocumentationBuilder}
     */
    public setSection(
        section: DocumentRouterModuleType
    ): StorybookDocumentationBuilder {
        this.section = section;

        return this;
    }

    /**
     * Setter Description Component
     * @param {string} description - description this component
     * @return {StorybookDocumentationBuilder}
     */
    public setDescriptionComponent(
        description: string
    ): StorybookDocumentationBuilder {
        this.descriptionComponent = description;

        return this;
    }

    /**
     * Setter Markdown Component
     * @param {string} description - description this component
     * @return {StorybookDocumentationBuilder}
     */
    public setMarkdownFile(markdown: unknown): StorybookDocumentationBuilder {
        this.markdown = markdown;

        return this;
    }

    /**
     * Register Documentation
     * @param {ReactNode} component - documentation component
     * @return {StorybookDocumentationBuilder}
     */
    public registerDocumentation(
        component: ReactNode
    ): StorybookDocumentationBuilder {
        this.documentation = component;

        return this;
    }

    /**
     * Execute generate storybook
     * @return {void}
     */
    public execute(): void {
        const {
            section,
            markdown,
            documentation,
            componentName,
            formattedLabel,
            descriptionComponent
        } = this;

        try {
            if (section && descriptionComponent && documentation) {
                storiesOf(formattedLabel, module).add(
                    componentName,
                    () => (
                        <DefaultTemplateDocsComponent
                            componentName="Icon"
                            description="Testing Icon Component"
                        >
                            {documentation}
                        </DefaultTemplateDocsComponent>
                    ),
                    {
                        notes: {
                            markdown
                        }
                    }
                );
            } else if (section === undefined) {
                throw new Error('[Error] method setSection not implemented');
            } else if (descriptionComponent === undefined) {
                throw new Error(
                    '[Error] method setDescription not implemented'
                );
            } else if (documentation === undefined) {
                throw new Error(
                    '[Error] method registerDocumentation not implemented'
                );
            }
        } catch (e) {
            console.error(e);
        }
    }
}

export default StorybookDocumentationBuilder;
