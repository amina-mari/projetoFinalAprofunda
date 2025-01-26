"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
class ChatController {
    constructor(createChatUseCase) {
        this.createChatUseCase = createChatUseCase;
    }
    async open(req, res) {
        const { uuid, message } = req.body;
        try {
            const chatSession = await this.createChatUseCase.execute(uuid, message);
            res.status(201).json(chatSession);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
exports.ChatController = ChatController;
