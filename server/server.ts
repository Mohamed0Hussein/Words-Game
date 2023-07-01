import express , {Application , Request,Response ,json} from 'express'
import statusCodes from 'http-status-codes'
import dotenv from 'dotenv'
import { baseRoutes,baseRouter } from './router/baseRouter'
dotenv.config()
const app : Application = express()

app.use(express.json())

const port = process.env.PORT || 5000
app.use(baseRoutes.base,baseRouter)
app.get('/' , (req : Request,res : Response) => {
    res.status(statusCodes.OK).json({msg: 'u landed safely'})
})

app.listen(port, () => {
    console.log(`Server up and running at port : ${port}`)
})