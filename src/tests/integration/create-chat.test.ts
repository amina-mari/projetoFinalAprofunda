import supertest from 'supertest';
import app from '../../interface';
import mongoose from 'mongoose';

const request = supertest(app);

describe("Create Chat Integration Test", () => {
    beforeEach(async () => {
        await mongoose.connect(process.env.MONGODB_URI as string)
    })

    afterEach(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    })

    it("Create Gemini Chat", async() => {
        await request.post("/despesas").send({
            descricao: "descritiva",
            categoria: "categorica",
            valor: 123,
            tipo: "tipado",
            data: "de hoje",
            userId: "CYOxmzg05ZdxON5HkS5p9ghkeNg2"
        })

        const response = await request.post("/chat").send({
            uid: "CYOxmzg05ZdxON5HkS5p9ghkeNg2",
            message: "hello, Gemini!"
        })

        expect(response.status).toBe(201)
        expect(response.body).toMatchObject([])
    })
})