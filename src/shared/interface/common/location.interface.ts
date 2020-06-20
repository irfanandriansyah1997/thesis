/**
 * Location Maps Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.02
 */
export interface DefaultLocationMapsInterface {
    lat: number;
    lng: number;
}

export interface DefaultLocationMapsMarkerInterface
    extends DefaultLocationMapsInterface {
    x: number;
    y: number;
}
