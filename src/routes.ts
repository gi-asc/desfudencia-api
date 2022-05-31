import express from 'express'
import { adapterRoute } from './main/adapters/adpterRoute'
import { makeFindAddressController } from './main/factories/controllers/cep/makeFindAddressController'
import { makeCalculateMediaController } from './main/factories/controllers/media/makeCalculateMediaController'
export const routes = express.Router()

routes.post('/media', adapterRoute(makeCalculateMediaController()))
routes.post('/cep', adapterRoute(makeFindAddressController()))