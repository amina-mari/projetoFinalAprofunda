"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesaController = void 0;
class DespesaController {
    constructor(createDespesaUseCase, getDespesaByUserUseCase) {
        this.createDespesaUseCase = createDespesaUseCase;
        this.getDespesaByUserUseCase = getDespesaByUserUseCase;
    }
    create(req, res) {
        const params = req.body;
        console.log(params);
        const despesa = this.createDespesaUseCase.execute(params);
        res.status(201).json(despesa);
    }
    async findAll(req, res) {
        const userId = req.params.userId;
        const despesas = await this.getDespesaByUserUseCase.execute(userId);
        res.status(200).json(despesas);
    }
}
exports.DespesaController = DespesaController;
