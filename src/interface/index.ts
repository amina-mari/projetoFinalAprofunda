import express from 'express';
import { configureDependencies } from '../infrastructure/utils/config';
import { connectDB } from '../infrastructure/database/connection'
import dotenv from 'dotenv'
dotenv.config();
let cors = require('cors')
const bodyParser = require("body-parser")

const app = express();
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const {despesaController, chatController} = configureDependencies();

app.post('/despesas', (req, res) => despesaController.create(req, res));
app.get('/despesas/:userid', (req, res) => despesaController.findAll(req, res));
app.post('/chat', (req, res) => chatController.open(req, res));


if (require.main === module) {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  })
}