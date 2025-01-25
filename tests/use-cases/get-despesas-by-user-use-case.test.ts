import { GetDespesasByUserUseCase } from "../../src/application/use-cases/get-despesas-by-user-use-case";
import { DespesaRepository } from "../../src/application/repositores/depesa-repository";

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
        ])
    }),
    save: jest.fn()
} as DespesaRepository

describe("Get Despesas By User Use Case Unit Tests",() => {
    const getDespesasByUserUseCase: GetDespesasByUserUseCase = new GetDespesasByUserUseCase(despesaRepositoryMock);


    it("Expect the execute function to call the right callbacks", () => {
        getDespesasByUserUseCase.execute("123456");

        expect(despesaRepositoryMock.findAll).toHaveBeenCalled()
    })

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
        }])
    })
})