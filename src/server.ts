import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import SwaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
export const app = express();

app.use(cors());
app.use(express.json());
app.use('/doc', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));
app.use(routes);
app.listen(process.env.PORT || 3330, () => console.log('Server is running!'));
