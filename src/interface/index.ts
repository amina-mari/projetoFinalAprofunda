import express from 'express';
import cors from 'cors';
import { configureDependencies } from '../infrastructure/utils/config';
import { connectDB } from '../infrastructure/database/connection'
import dotenv from 'dotenv'
dotenv.config();

const app = express();
connectDB();

let corsOptions = {
  origin: [
    'https://projeto-final-aprofunda-six.vercel.app/',
    'https://projeto-final-aprofunda-mariana-aminas-projects.vercel.app/',
    'https://projeto-final-aprofunda-git-main-mariana-aminas-projects.vercel.app/'
  ]
}

app.use(cors(corsOptions));
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