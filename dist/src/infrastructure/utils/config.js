"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureDependencies = configureDependencies;
const repository_1 = require("../database/repository");
const create_despesa_use_case_1 = require("../../application/use-cases/create-despesa-use-case");
const get_despesas_by_user_use_case_1 = require("../../application/use-cases/get-despesas-by-user-use-case");
const despesa_controller_1 = require("../../interface/despesa-controller");
const repository_2 = require("../genai/repository");
const chat_controller_1 = require("../../interface/chat-controller");
const create_chat_use_case_1 = require("../../application/use-cases/create-chat-use-case");
function configureDependencies() {
    const repositoryData = new repository_1.RepositoryData();
    const createDespesaUseCase = new create_despesa_use_case_1.CreateDespesaUseCase(repositoryData);
    const getDespesaByUserUseCase = new get_despesas_by_user_use_case_1.GetDespesasByUserUseCase(repositoryData);
    const despesaController = new despesa_controller_1.DespesaController(createDespesaUseCase, getDespesaByUserUseCase);
    const repositoryAI = new repository_2.RepositoryAI();
    const createChatUseCase = new create_chat_use_case_1.CreateChatUseCase(repositoryAI, repositoryData);
    const chatController = new chat_controller_1.ChatController(createChatUseCase);
    return {
        despesaController, chatController
    };
}
