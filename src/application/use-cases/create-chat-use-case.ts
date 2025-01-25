import { Despesa } from "../../domain/despesa";
import { ChatRepository } from "../repositores/chat-repository";
import { DespesaRepository } from "../repositores/depesa-repository";

export class CreateChatUseCase {
    constructor(
        private chatRepository: ChatRepository,
        private despesas: DespesaRepository
    ){}

    async execute(uid: string, userMessage: string): Promise<any> {
        const transactions = await this.despesas.findAll();
        
        const despesasByUser = transactions.filter(despesa => despesa.userId === uid);

        return await this.chatRepository.open(despesasByUser, uid, userMessage);
    }
}
