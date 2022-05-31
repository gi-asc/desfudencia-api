import { ServerError } from "../errors/serverError"
import logger from "../logger"
import { HttpResponse } from "../protocols/http"

export const badRequest = (error: Error): HttpResponse => {
  logger.error({error: error.message, success: false})
  return {
    statusCode: 400,
    body: error,
}
}

export const serverError = (error: Error): HttpResponse => 
  {
  logger.error({error: error.message, success: false})
  return {
    statusCode: 500,
    body: new ServerError(error.stack)
  }
}

export const ok = (data: any, request: any): HttpResponse => {
  logger.info({request, response: data, success: true})
  return {
    statusCode: 200,
    body: data
  }
}