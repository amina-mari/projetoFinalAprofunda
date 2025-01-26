"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryData = void 0;
const model_1 = require("./model");
class RepositoryData {
    async save(despesa) {
        const despesaModel = new model_1.DespesaModel(despesa);
        await despesaModel.save();
    }
    async findAll() {
        const despesas = await model_1.DespesaModel.find();
        const translatedDespesas = despesas.map(item => {
            return {
                id: item._id.toString(),
                descricao: item.descricao,
                valor: item.valor,
                tipo: item.tipo,
                data: item.data,
                userId: item.userId
            };
        });
        return translatedDespesas;
    }
}
exports.RepositoryData = RepositoryData;
