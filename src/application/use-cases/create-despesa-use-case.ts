import { Despesa } from '../../domain/despesa';
import { DespesaRepository } from '../repositores/depesa-repository';

export class CreateDespesaUseCase {
    constructor(private despesaRepository: DespesaRepository) {}

    async execute(params: Partial<Despesa>): Promise<Despesa> {
        const despesa = {
            ...params
        } as Despesa;

        await this.despesaRepository.save(despesa);
        
        return Promise.resolve(despesa);
    }
}