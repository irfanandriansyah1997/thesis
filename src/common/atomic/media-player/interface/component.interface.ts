import { Options } from 'react-youtube';

/**
 * Media Player Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.06.08
 */
export type MediaPlayerPropsInterface = Options & {
    youtubeId: string;
    className?: string;
};
