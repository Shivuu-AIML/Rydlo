import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { env } from './config/env.js'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js'
import healthRoutes from './modules/health/health.routes.js'

const app = express()

app.disable('x-powered-by')
app.use(helmet())
app.use(cors({ origin: env.clientUrl }))
app.use(express.json({ limit: '100kb' }))
app.use(morgan(env.nodeEnv === 'production' ? 'combined' : 'dev'))

app.use('/api/health', healthRoutes)
app.use(notFoundHandler)
app.use(errorHandler)

export default app
