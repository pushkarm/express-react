import express, { Express, Request, Response , Application } from 'express';
import UserRouter from './routes/user.route';
import Database from './db';
import cors, { CorsOptions } from 'cors';

const app: Application = express();
const port = process.env.PORT || 4000;

const db = new Database();
db.sequelize?.sync();

const corsOptions: CorsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

// TODO: should do all initilization here

const userRouter = new UserRouter();
app.use("/users", userRouter.getRouter());

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});