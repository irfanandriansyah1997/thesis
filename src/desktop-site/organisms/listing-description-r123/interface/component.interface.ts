import { MapsPropsInterface } from '../../../../common/molecules/map/interface/component.interface';
import { ExpandTextToggleButtonInterface } from '../../../../common/molecules/expand-text/interfaces/component.interface';

/**
 * Listing Description Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export interface ListingDescriptionR123PropsInterface {
    content: ListingDescriptionContent;
    contentToggleSelector: ExpandTextToggleButtonInterface;
    map: Omit<MapsPropsInterface, 'mapOptions' | 'options' | 'onClick'>;
}

/**
 * Listing Description Content Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export type ListingDescriptionContent = {
    title: string;
    description: string;
};
