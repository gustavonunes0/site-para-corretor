const env = process.env.NODE_ENV && process.env.NODE_ENV === 'PRD' ? process.env : require('dotenv').config({ path: './.env' }).parsed;

exports.serverConfig = {
    port: env.SERVER_PORT
}

exports.mysqlConfig = {
    url: env.DATABASE_URL
}