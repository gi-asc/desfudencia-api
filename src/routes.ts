import express from 'express'
import { makeCalculateMediaController } from './main/factories'
import { adapterRoute } from './main'
import { makeFindAddressController } from './main/factories/controllers/cep/makeFindAddressController'
export const routes = express.Router()

routes.post('/media', adapterRoute(makeCalculateMediaController()))
routes.post('/cep', adapterRoute(makeFindAddressController()))