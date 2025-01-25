import supertest from 'supertest';
import app from '../../src/interface/index';
import mongoose from 'mongoose';
import { connectDB } from '../../src/infrastructure/database/connection';

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
        const response = await request.get("/despesas/CYOxmzg05ZdxON5HkS5p9ghkeNg2")

        expect(response.status).toBe(201)
        expect(response.body).toMatchObject({
            descricao: "descritiva",
            categoria: "categorica",
            valor: 123,
            tipo: "tipado",
            data: "de hoje"
        })
    })
})