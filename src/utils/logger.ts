import {createLogger, transports, format} from "winston";

const logger = createLogger({
    levels: {info: 2, error: 0},
    transports: new transports.Console(),
    format: format.simple()
})

export default logger