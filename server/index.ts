import bodyParser from 'body-parser';
import express, { Express, Request, Response , Application } from 'express';

const app: Application = express();
const port = 8000;

// app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next()
});


const user = {
  email: 'electronic@getMaxListeners.com',
  password: '123456'
}

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.send('hello')
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
