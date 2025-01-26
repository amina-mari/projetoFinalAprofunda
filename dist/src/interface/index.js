"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("../infrastructure/utils/config");
const connection_1 = require("../infrastructure/database/connection");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors = require('cors');
const app = (0, express_1.default)();
(0, connection_1.connectDB)();
app.use(express_1.default.json());
app.use(cors());
const { despesaController, chatController } = (0, config_1.configureDependencies)();
app.post('/despesas', (req, res) => despesaController.create(req, res));
app.get('/despesas/:userid', (req, res) => despesaController.findAll(req, res));
app.post('/chat', (req, res) => chatController.open(req, res));
if (require.main === module) {
    const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}
exports.default = app;
