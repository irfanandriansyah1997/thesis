/**
 * Abstract Error Helper Class
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.13
 */
abstract class ErrorHelperAbstract {
    /**
     * Log Debug Apps
     * @param {unknown} message - debug message
     * @return {void}
     */
    static logDebug(message: unknown): void {
        console.debug(message);
    }

    /**
     * Log Error
     * @param {Error} e - stacktrace error
     * @return {void}
     */
    static logError(e: Error): void {
        console.error(e);
    }
}

export default ErrorHelperAbstract;
