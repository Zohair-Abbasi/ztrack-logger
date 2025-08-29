declare class ZTrackLogger {
    private formatMessage;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    debug(message: string): void;
}
declare const logger: ZTrackLogger;
export default logger;
