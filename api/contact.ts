import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import wss from "../webSockets/server";
const prisma = new PrismaClient();
const app = express();

// Configuração do CORS antes de qualquer rota
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// Rota OPTIONS para pre-flight requests
app.options("/api/contact", cors());

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Criar ou encontrar usuário
    const user = await prisma.user.upsert({
      where: { email },
      update: { name },
      create: {
        email,
        name,
      },
    });

    // Criar mensagem
    const newMessage = await prisma.message.create({
      data: {
        content: message,
        userEmail: user.email,
      },
    });
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(newMessage)); // Enviar a nova mensagem aos clientes
      }
    });

    res.json({ success: true, message: newMessage });
  } catch (error) {
    console.error("Error processing message:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to process message" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
