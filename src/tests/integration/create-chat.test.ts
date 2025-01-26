import supertest from 'supertest';
import app from '../../src/interface/index';
import mongoose from 'mongoose';
import { connectDB } from '../../src/infrastructure/database/connection';


const request = supertest(app);

describe("Create Chat Integration Test", () => {
    it("Create Gemini Chat", async() => {
        const response = await request.post("/chat").send({
            uuid: "123456",
            message: "hello, Gemini!"
        })

        expect(response.status).toBe(201)
        expect(response.body).toMatchObject({

        })
    })
})