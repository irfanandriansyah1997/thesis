import React from 'react';
import PropTypes from 'prop-types';
import { MapsPinPropsInterface } from './interface/component.interface';

import ImageComponent from '../../atomic/image/image.component';

/**
 * Maps Pin Component
 * @param {MapsPinPropsInterface} props - props in maps pin component
 */
const MapPinComponent: React.SFC<MapsPinPropsInterface> = ({
    alt,
    src
}: MapsPinPropsInterface) => (
    <ImageComponent width="32px" src={src} alt={alt} />
);

MapPinComponent.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

export default MapPinComponent;
