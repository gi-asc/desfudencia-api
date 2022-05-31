import express from 'express'
import { adapterRoute } from './adapters/adpterRoute'
import { makeCalculateMediaController } from './factories/makeCalculateMediaController'
export const routes = express.Router()

routes.post('/media', adapterRoute(makeCalculateMediaController()))