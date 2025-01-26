"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChatUseCase = void 0;
class CreateChatUseCase {
    constructor(chatRepository, despesas) {
        this.chatRepository = chatRepository;
        this.despesas = despesas;
    }
    async execute(uid, userMessage) {
        const transactions = await this.despesas.findAll();
        const despesasByUser = transactions.filter(despesa => despesa.userId === uid);
        return await this.chatRepository.open(despesasByUser, uid, userMessage);
    }
}
exports.CreateChatUseCase = CreateChatUseCase;
