"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_despesas_by_user_use_case_1 = require("../../src/application/use-cases/get-despesas-by-user-use-case");
const despesaRepositoryMock = {
    findAll: jest.fn(() => {
        return Promise.resolve([
            {
                id: "",
                descricao: "",
                categoria: "",
                valor: 123,
                tipo: "",
                data: "",
                userId: "123"
            },
            {
                id: "",
                descricao: "",
                categoria: "",
                valor: 123,
                tipo: "",
                data: "",
                userId: "123456"
            }
        ]);
    }),
    save: jest.fn()
};
describe("Get Despesas By User Use Case Unit Tests", () => {
    const getDespesasByUserUseCase = new get_despesas_by_user_use_case_1.GetDespesasByUserUseCase(despesaRepositoryMock);
    it("Expect the execute function to call the right callbacks", () => {
        getDespesasByUserUseCase.execute("123456");
        expect(despesaRepositoryMock.findAll).toHaveBeenCalled();
    });
    it("Expect a correct result of the function", async () => {
        const despesas = await getDespesasByUserUseCase.execute("123456");
        expect(despesas).toMatchObject([{
                id: "",
                descricao: "",
                categoria: "",
                valor: 123,
                tipo: "",
                data: "",
                userId: "123456"
            }]);
    });
});
