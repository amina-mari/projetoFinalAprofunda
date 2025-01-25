import { beforeEach } from "node:test";
import { CreateChatUseCase } from "../../src/application/use-cases/create-chat-use-case";

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
}

const chatRepositoryMock = {
    open: jest.fn()
}

describe("CreateChatUseCase Unit Test", () => {
    let createChatUseCase: CreateChatUseCase = new CreateChatUseCase(chatRepositoryMock, despesaRepositoryMock);

    it("The use use is calling correctly it's dependencies", async () => {
        await createChatUseCase.execute("123456", "my new message");

        expect(despesaRepositoryMock.findAll).toHaveBeenCalled();
        expect(chatRepositoryMock.open).toHaveBeenCalled();
    })
})