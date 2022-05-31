import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import { routes } from './routes'
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3330, () => console.log('Server is running!') )