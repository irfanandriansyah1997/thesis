/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react';

import AutoCompleteR123Component from '../../autocomplete-r123.component';
import ColorDefaultConstant from '../../../../../shared/constant/color.constant';
import TextDocsComponent from '../../../../../.storybook/component/atomic/text/text.component';
import HeadingDocsComponent from '../../../../../.storybook/component/atomic/heading/heading.component';
import CodingViewerDocsComponent from '../../../../../.storybook/component/molecules/code-viewer/code-viewer.component';
import {
    AutocompleteR123ValueInterface,
    AutocompleteR123OnChangeValueType,
    AutocompleteR123ResponseItemInterface
} from '../../interface/component.interface';

/**
 * Generate Docs
 */
const docs = (): string =>
    `<AutoCompleteR123Component\n` +
    `    onChange={onChangeValue}\n` +
    `    placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"\n` +
    `    value={option as AutocompleteR123ValueInterface[]}\n` +
    `    asyncService={\n` +
    `        SectionDefaultAutocompleteR123Component.onLoadData\n` +
    `    }\n` +
    `/>`;

/**
 * Section Default Autocomplete R123 Selection
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.15
 */
class SectionDefaultAutocompleteR123Component extends React.PureComponent<
    {},
    Record<string, unknown>
> {
    /**
     * On Load Data
     */
    static onLoadData(
        keyword: string
    ): Promise<AutocompleteR123ResponseItemInterface[]> {
        console.error(`search keyword : ${keyword}`);

        return new Promise<AutocompleteR123ResponseItemInterface[]>(
            (resolve) => {
                setTimeout(() => {
                    resolve([
                        {
                            id: 'f574128d9944326385f1aa7be08b8685',
                            type: 'location',
                            title: 'Cimahi, Jawa Barat',
                            subtitle: 'Kota @ Jawa Barat',
                            label: 'Lokasi',
                            multilanguagePlace: {
                                en: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: null
                                },
                                id: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: null
                                }
                            },
                            additionalInfo: null
                        },
                        {
                            id: '167411a051e8f85e5949b8712d5b59fa',
                            type: 'location',
                            title: 'Cimahi Selatan, Cimahi',
                            subtitle: 'Area @ Cimahi',
                            label: 'Lokasi',
                            multilanguagePlace: {
                                en: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: 'Cimahi Selatan'
                                },
                                id: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: 'Cimahi Selatan'
                                }
                            },
                            additionalInfo: null
                        },
                        {
                            id: 'f33fc7510f0d5ebfecbe278642ee00e1',
                            type: 'location',
                            title: 'Cimahi Utara, Cimahi',
                            subtitle: 'Area @ Cimahi',
                            label: 'Lokasi',
                            multilanguagePlace: {
                                en: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: 'Cimahi Utara'
                                },
                                id: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: 'Cimahi Utara'
                                }
                            },
                            additionalInfo: null
                        },
                        {
                            id: 'b9addc94e54625e8eb6b1ed933b89233',
                            type: 'location',
                            title: 'Cimahi Tengah, Cimahi',
                            subtitle: 'Area @ Cimahi',
                            label: 'Lokasi',
                            multilanguagePlace: {
                                en: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: 'Cimahi Tengah'
                                },
                                id: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: 'Cimahi Tengah'
                                }
                            },
                            additionalInfo: null
                        },
                        {
                            id: '03e972a7c369bd9d403d617462dda67c',
                            type: 'location',
                            title: 'Cimahi, Kuningan',
                            subtitle: 'Area @ Kuningan',
                            label: 'Lokasi',
                            multilanguagePlace: {
                                en: {
                                    level1: 'Jawa Barat',
                                    level2: 'Kuningan',
                                    level3: 'Cimahi'
                                },
                                id: {
                                    level1: 'Jawa Barat',
                                    level2: 'Kuningan',
                                    level3: 'Cimahi'
                                }
                            },
                            additionalInfo: null
                        },
                        {
                            id: 'e9777c44179b0ef4d9896eb26a1e61b2',
                            type: 'location',
                            title: 'Cimahi, Bandung',
                            subtitle: 'Area @ Bandung',
                            label: 'Lokasi',
                            multilanguagePlace: {
                                en: {
                                    level1: 'Jawa Barat',
                                    level2: 'Bandung',
                                    level3: 'Cimahi'
                                },
                                id: {
                                    level1: 'Jawa Barat',
                                    level2: 'Bandung',
                                    level3: 'Cimahi'
                                }
                            },
                            additionalInfo: null
                        },
                        {
                            id: 'befbb5ef1f78f44b241b9772a8f7b076',
                            type: 'location',
                            title: 'Leuwi Gajah, Cimahi',
                            subtitle: 'Area @ Cimahi',
                            label: 'Lokasi',
                            multilanguagePlace: {
                                en: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: 'Leuwi Gajah'
                                },
                                id: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: 'Leuwi Gajah'
                                }
                            },
                            additionalInfo: null
                        },
                        {
                            id: 'hos6494785',
                            type: 'listing',
                            title:
                                'Rumah mewah asri citeurep kota Cimahi jarang ada bonus motor',
                            subtitle: 'Cimahi Utara, Cimahi, Jawa Barat',
                            label: 'Rumah',
                            multilanguagePlace: {
                                en: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: 'Cimahi Utara'
                                },
                                id: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: 'Cimahi Utara'
                                }
                            },
                            additionalInfo: null
                        },
                        {
                            id: 'hos6494737',
                            type: 'listing',
                            title:
                                'Rumah idaman termurah citeurep Cimahi Utara jarang ada bonus motor',
                            subtitle: 'Cimahi Utara, Cimahi, Jawa Barat',
                            label: 'Rumah',
                            multilanguagePlace: {
                                en: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: 'Cimahi Utara'
                                },
                                id: {
                                    level1: 'Jawa Barat',
                                    level2: 'Cimahi',
                                    level3: 'Cimahi Utara'
                                }
                            },
                            additionalInfo: null
                        },
                        {
                            id: 'las2330661',
                            type: 'listing',
                            title: 'kavling di Bandung barat cimahi',
                            subtitle: 'Cisarua, Bandung Barat, Jawa Barat',
                            label: 'Tanah',
                            multilanguagePlace: {
                                en: {
                                    level1: 'Jawa Barat',
                                    level2: 'Bandung Barat',
                                    level3: 'Cisarua'
                                },
                                id: {
                                    level1: 'Jawa Barat',
                                    level2: 'Bandung Barat',
                                    level3: 'Cisarua'
                                }
                            },
                            additionalInfo: null
                        },
                        {
                            id: 'hos4714431',
                            type: 'listing',
                            title:
                                'Huniyan murah ready stock DP 5 jta all in SHM di kota cimahi bandung',
                            subtitle: 'Cileunyi, Bandung, Jawa Barat',
                            label: 'Rumah',
                            multilanguagePlace: {
                                en: {
                                    level1: 'Jawa Barat',
                                    level2: 'Bandung',
                                    level3: 'Cileunyi'
                                },
                                id: {
                                    level1: 'Jawa Barat',
                                    level2: 'Bandung',
                                    level3: 'Cileunyi'
                                }
                            },
                            additionalInfo: null
                        }
                    ]);
                }, 2000);
            }
        );
    }

    constructor(props: {}) {
        super(props);
        this.state = {
            option: []
        };

        this.onChangeValue = this.onChangeValue.bind(this);
    }

    /**
     * On Change
     */
    public onChangeValue({ object }: AutocompleteR123OnChangeValueType): void {
        this.setState({ option: object });
    }

    render(): ReactNode {
        const { onChangeValue } = this;
        const { option } = this.state;

        return (
            <>
                <HeadingDocsComponent>Usage</HeadingDocsComponent>
                <TextDocsComponent>
                    Basic usage Autocomplete R123
                </TextDocsComponent>
                <CodingViewerDocsComponent sourceCode={docs()}>
                    <div
                        style={{
                            margin: '-30px -20px',
                            width: 'calc(100% + 40px)',
                            height: 'calc(100% + 40px)',
                            padding: '30px 20px',
                            background: ColorDefaultConstant.grayR123
                        }}
                    >
                        <AutoCompleteR123Component
                            onChange={onChangeValue}
                            placeholder="Cari berdasarkan lokasi, area sekitar, nama property, nama project, atau nama developer"
                            value={option as AutocompleteR123ValueInterface[]}
                            asyncService={
                                SectionDefaultAutocompleteR123Component.onLoadData
                            }
                        />
                    </div>
                </CodingViewerDocsComponent>
            </>
        );
    }
}

export default SectionDefaultAutocompleteR123Component;
