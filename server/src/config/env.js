import 'dotenv/config'

const port = Number(process.env.PORT || 4000)

if (Number.isNaN(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be a valid TCP port.')
}

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port,
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  databaseUrl: process.env.DATABASE_URL,
}
