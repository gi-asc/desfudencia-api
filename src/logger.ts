import pino from "pino";
export default pino({
    enabled: true,
    level: 'info',
    transport: {
    target: 'pino-pretty'
    },
})