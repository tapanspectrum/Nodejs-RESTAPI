import pino from 'pino';

const l = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL,
},pino.destination('./logFile'));
l.fatal('fatal')
l.error('error')
l.warn('warn')
l.info('info')
l.debug('debug')
l.trace('trace')

export default l;
