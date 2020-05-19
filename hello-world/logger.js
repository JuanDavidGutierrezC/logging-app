'use strict';

const winston = require('winston');


const custom = winston.format.printf((info) => {
    return `{'level': '${info.level.toUpperCase()}', 'message': '${info.message}', 'service':'${info.service}'}"`;
});

let options = {
    defaultMeta : {service: "LAMBDA"},
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        custom
    ),
    transports: [
        new (winston.transports.Console)({
            timestamp: true,
            colorize: true,
        }),

    ]
};

const logger = winston.createLogger(options);

logger.setContext = function(context){
    options.defaultMeta = {service: context.functionName};
    logger.configure(options);
};

module.exports = logger;