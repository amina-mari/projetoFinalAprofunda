import { Despesa } from "../../domain/despesa";

export interface ChatRepository {
    open(transactions: Despesa[], uuid: string, userMessage: string): Promise<any>;
}