import express from 'express';
import { BACK_PORT } from './config';
import { PrismaClient } from '@prisma/client';
import cors from 'cors'
import caseRoutes from './routes/cases'
import applicationRoute from './routes/application'

const app = express();
const PORT = BACK_PORT;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json())

app.use('/api/cases', caseRoutes)
app.use('/img', express.static('img'));
app.use('/api/application', applicationRoute )

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is working!' })
})

app.use((req, res) => {
    res.status(404).json({error:"Route not found"})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)

})

process.on("SIGTERM", async () => {
    await prisma.$disconnect()
    process.exit(0)
})