import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
ch = logging.StreamHandler()
formatter = logging.Formatter('{"service":"%(name)s", "level":"%(levelname)s", "message":"%(message)s"}')
ch.setFormatter(formatter)
logger.handlers = [ch]

def lambda_handler(event, context):
    logger.name = context.function_name

    logger.debug('This is a debug log. event {}, context {}'.format(event, context))
    logger.info('This is an info log')
    logger.error('something went wrong')

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "hello world from python"
        }),
    }
