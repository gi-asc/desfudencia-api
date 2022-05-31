import express from 'express'
import { makeCalculateMediaController } from './main/factories'
import { adapterRoute } from './main'
export const routes = express.Router()

routes.post('/media', adapterRoute(makeCalculateMediaController()))