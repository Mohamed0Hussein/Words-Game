import {Router} from "express";
import { rankRouter,baseRankRoute } from "./rankRouter";
import { wordsRouter,baseWordsRoute } from "./wordsRouter";
const baseRouter : Router = Router()
const baseRoutes = {
    base:'/api'
}

baseRouter.use(baseRankRoute,rankRouter)
baseRouter.use(baseWordsRoute,wordsRouter)



export {baseRouter,baseRoutes}