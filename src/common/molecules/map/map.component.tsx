import React, { SFC, useState } from 'react';
import PropTypes from 'prop-types';
import GoogleMapComponent from 'google-map-react';

import MapPinComponent from './map-pin.component';
import StringHelper from '../../../shared/helper/string.helper';
import { MapsPropsInterface } from './interface/component.interface';
import { DefaultLocationMapsMarkerInterface } from '../../../shared/interface/common/location.interface';
import { ComponentClassnameDefaultInterface } from '../../../shared/interface/component/component-default.interface';

/**
 * Map Component
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.02
 */
const MapComponent: SFC<MapsPropsInterface> = ({
    width,
    height,
    mapKey,
    options,
    onClick,
    location,
    mapOptions
}) => {
    const [draggable, setDraggable] = useState<boolean>(false);
    const [mouseDownDelay, setMouseDownDelay] = useState<number | undefined>(
        undefined
    );
    const [mouseUpDelay, setMouseUpDelay] = useState<number | undefined>(
        undefined
    );

    const name: ComponentClassnameDefaultInterface = {
        'ui-molecules-map': true,
        relative: true
    };

    /**
     * @description Adjust marker on mouse down
     */
    const onChildMouseDown = (
        childKey: unknown,
        childProps: unknown,
        mouse: DefaultLocationMapsMarkerInterface
    ): void => {
        setDraggable(false);
        if (mouseDownDelay !== undefined) {
            clearTimeout(mouseDownDelay);
        }

        setMouseDownDelay(
            (setTimeout(() => {
                if (mapOptions && mapOptions.onChildMouseDown) {
                    mapOptions.onChildMouseDown(childKey, childProps, mouse);
                }
            }, 500) as unknown) as number
        );
    };

    /**
     * @description Adjust marker on mouse up
     */
    const onChildMouseUp = (
        childKey: unknown,
        childProps: unknown,
        mouse: DefaultLocationMapsMarkerInterface
    ): void => {
        setDraggable(true);
        if (mouseUpDelay !== undefined) {
            clearTimeout(mouseUpDelay);
        }

        setMouseUpDelay(
            (setTimeout(() => {
                if (mapOptions && mapOptions.onChildMouseUp) {
                    mapOptions.onChildMouseUp(childKey, childProps, mouse);
                }
            }, 500) as unknown) as number
        );
    };

    return (
        <div
            className={StringHelper.objToString(name)}
            style={{ width, height }}
        >
            <GoogleMapComponent
                center={location}
                zoom={18}
                onClick={onClick || undefined}
                draggable={draggable}
                bootstrapURLKeys={{
                    key: mapKey
                }}
                options={{
                    fullscreenControl: false,
                    panControl: false,
                    zoomControl: false,
                    scrollwheel: false,
                    ...options
                }}
                {...mapOptions}
                onChildMouseDown={onChildMouseDown}
                onChildMouseMove={onChildMouseUp}
                onChildMouseUp={onChildMouseUp}
            >
                <MapPinComponent
                    src="https://public.urbanindo.com/map-markers/default-marker.svg"
                    alt="location"
                    {...location}
                />
            </GoogleMapComponent>
        </div>
    );
};

MapComponent.defaultProps = {
    options: {},
    mapOptions: {},
    onClick: undefined
};

MapComponent.propTypes = {
    onClick: PropTypes.func,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mapKey: PropTypes.string.isRequired,
    options: PropTypes.oneOfType([PropTypes.object]),
    location: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    }).isRequired,
    mapOptions: PropTypes.shape({
        onChildMouseDown: PropTypes.any,
        onChildMouseUp: PropTypes.any
    })
};

export default MapComponent;
