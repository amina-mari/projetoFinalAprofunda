import supertest from 'supertest';
import app from '../../interface';
import mongoose from 'mongoose';

const request = supertest(app);

describe("Create Despesa Integration Test", () => {

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URI as string)
    })

    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    })

    it("Create Despesa Integration Test", async () => {
        await request.post("/despesas").send({
            descricao: "descritiva",
            categoria: "categorica",
            valor: 123,
            tipo: "tipado",
            data: "de hoje",
            userId: "CYOxmzg05ZdxON5HkS5p9ghkeNg2"
        })

        const response = await request.get("/despesas/CYOxmzg05ZdxON5HkS5p9ghkeNg2")

        expect(response.status).toBe(200)
        expect(response.body).toMatchObject([{
            descricao: "descritiva",
            categoria: "categorica",
            valor: 123,
            tipo: "tipado",
            data: "de hoje"
        }])
    })
})