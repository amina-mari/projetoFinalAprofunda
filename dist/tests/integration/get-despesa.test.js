"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const interface_1 = __importDefault(require("../../src/interface"));
const mongoose_1 = __importDefault(require("mongoose"));
const request = (0, supertest_1.default)(interface_1.default);
describe("Create Despesa Integration Test", () => {
    beforeAll(async () => {
        await mongoose_1.default.connect(process.env.MONGODB_URI);
    });
    afterAll(async () => {
        await mongoose_1.default.connection.dropDatabase();
        await mongoose_1.default.connection.close();
    });
    it("Create Despesa Integration Test", async () => {
        const response = await request.get("/despesas/CYOxmzg05ZdxON5HkS5p9ghkeNg2");
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({
            descricao: "descritiva",
            categoria: "categorica",
            valor: 123,
            tipo: "tipado",
            data: "de hoje"
        });
    });
});
