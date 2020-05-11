import { SFC, Validator } from 'react';
import PropTypes from 'prop-types';

import {
    GridColumnSizeType,
    GridColumnPropsInterface,
    GridColumnDefaultSizeType,
    GridColumnViewportInterface
} from './interface/component.interface';

const viewportSize: GridColumnSizeType[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
];

/**
 * Grid Column Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.11
 */
const GridContainerComponent: SFC<GridColumnPropsInterface> = () => null;

GridContainerComponent.propTypes = {
    order: PropTypes.number,
    xs: PropTypes.shape({
        size: PropTypes.oneOf<GridColumnSizeType>(viewportSize)
    }) as Validator<GridColumnViewportInterface>,
    sm: PropTypes.shape({
        size: PropTypes.oneOf<GridColumnSizeType>(viewportSize)
    }) as Validator<GridColumnViewportInterface>,
    md: PropTypes.shape({
        size: PropTypes.oneOf<GridColumnSizeType>(viewportSize)
    }) as Validator<GridColumnViewportInterface>,
    lg: PropTypes.shape({
        size: PropTypes.oneOf<GridColumnSizeType>(viewportSize)
    }) as Validator<GridColumnViewportInterface>,
    xl: PropTypes.shape({
        size: PropTypes.oneOf<GridColumnSizeType>(viewportSize)
    }) as Validator<GridColumnViewportInterface>,
    defaultSize: PropTypes.oneOf<GridColumnDefaultSizeType>([
        ...viewportSize,
        'default'
    ]) as Validator<GridColumnDefaultSizeType>
};

GridContainerComponent.defaultProps = {
    order: undefined,
    xs: undefined,
    sm: undefined,
    md: undefined,
    lg: undefined,
    xl: undefined,
    defaultSize: undefined
};

export default GridContainerComponent;
