"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_chat_use_case_1 = require("../../src/application/use-cases/create-chat-use-case");
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
const chatRepositoryMock = {
    open: jest.fn()
};
describe("CreateChatUseCase Unit Test", () => {
    let createChatUseCase = new create_chat_use_case_1.CreateChatUseCase(chatRepositoryMock, despesaRepositoryMock);
    it("The use use is calling correctly it's dependencies", async () => {
        await createChatUseCase.execute("123456", "my new message");
        expect(despesaRepositoryMock.findAll).toHaveBeenCalled();
        expect(chatRepositoryMock.open).toHaveBeenCalled();
    });
});
