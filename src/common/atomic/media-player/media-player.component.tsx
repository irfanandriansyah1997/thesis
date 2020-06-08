import PropTypes from 'prop-types';
import { Options } from 'react-youtube';
import React, { FunctionComponent, lazy, Suspense } from 'react';

import StringHelper from '../../../shared/helper/string.helper';
import ValidatorHelper from '../../../shared/helper/validator.helper';
import { MediaPlayerPropsInterface } from './interface/component.interface';

const YoutubeFrame = lazy(() => import('react-youtube'));

/**
 * Media Player Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.06.08
 */
const MediaPlayerComponent: FunctionComponent<MediaPlayerPropsInterface> = ({
    youtubeId,
    height,
    width,
    playerVars,
    className
}) => {
    const option: Options = {
        height,
        width,
        playerVars
    };

    return (
        <div
            className={StringHelper.objToString({
                'ui-molecules-media-player': true,
                [`${className}`]: ValidatorHelper.verifiedIsNotEmpty(className)
            })}
        >
            <Suspense fallback={null}>
                <YoutubeFrame
                    opts={option}
                    videoId={youtubeId}
                    className="ui-molecules-media-player__iframe"
                />
            </Suspense>
        </div>
    );
};

MediaPlayerComponent.propTypes = {
    className: PropTypes.string,
    height: PropTypes.string,
    playerVars: PropTypes.shape({}),
    width: PropTypes.string,
    youtubeId: PropTypes.string.isRequired
};

MediaPlayerComponent.defaultProps = {
    width: undefined,
    height: undefined,
    className: undefined,
    playerVars: undefined
};

export default MediaPlayerComponent;
