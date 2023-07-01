import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import data from "../TestData.json";

const rankRouter: Router = Router();

// Define the base route for rank
const baseRankRoute = "/rank";

// POST method to calculate the percentage score of the user compared to the stored scores
rankRouter.post("/", (req: Request, res: Response) => {
  const userScore = req.body.score;
  const totalScores = data.scoresList.length;
  const scoresDominated = data.scoresList.filter((score) => score < userScore).length;

  try {
    const finalScore = Number((scoresDominated / totalScores * 100).toFixed(2));
    res.status(StatusCodes.OK).json({ finalScore, scoresDominated });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json(error);
  }
});

export { rankRouter, baseRankRoute };
