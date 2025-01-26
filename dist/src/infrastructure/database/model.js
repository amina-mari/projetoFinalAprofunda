"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DespesaModel = void 0;
const mongoose_1 = require("mongoose");
const DespesaSchema = new mongoose_1.Schema({
    descricao: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
});
exports.DespesaModel = (0, mongoose_1.model)('despesas', DespesaSchema);
