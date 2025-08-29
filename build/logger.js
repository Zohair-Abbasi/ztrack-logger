class ZTrackLogger {
    formatMessage(level, message) {
        const timestamp = new Date().toISOString();
        return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
    }
    info(message) {
        console.log(this.formatMessage("info", message));
    }
    warn(message) {
        console.warn(this.formatMessage("warn", message));
    }
    error(message) {
        console.error(this.formatMessage("error", message));
    }
    debug(message) {
        if (process.env.NODE_ENV !== "production") {
            console.debug(this.formatMessage("debug", message));
        }
    }
}
// Export a default instance (easy to use directly)
const logger = new ZTrackLogger();
export default logger;
//# sourceMappingURL=logger.js.map