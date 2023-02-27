import express, { Request, Response } from 'express'
import cors from 'cors'
import connectDb from './database'
import userRouter from './routes/users'
import courseRouter from './routes/courses'

import dotenv from 'dotenv'

dotenv.config()

const app: express.Application = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/users', userRouter)
app.use('/courses', courseRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('')
})

const startServer = async () => {
    try {
        connectDb(`${process.env.MONGODB_URL}`)
        app.listen(port, () => {
            console.log(`app is running on http://localhost:${port}`)
        })
    } catch (e) {
        console.log(e)
    }
}

startServer()