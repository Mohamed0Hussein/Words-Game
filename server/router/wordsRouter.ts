import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import data from "../TestData.json";

const words = data.wordList;
const wordsRouter: Router = Router();

// Shuffle an array randomly
function shuffle(array: any[]) {
  array.sort(() => Math.random() - 0.5);
}

// Filter words by their part of speech
const verbs = words.filter((word) => word.pos === "verb");
const nouns = words.filter((word) => word.pos === "noun");
const adverbs = words.filter((word) => word.pos === "adverb");
const adjectives = words.filter((word) => word.pos === "adjective");

// Define the base route for words
const baseWordsRoute = "/words";

// GET method to get the list of words for the game
wordsRouter.get("/", (_, res: Response) => {
  // To guarantee that there is at least 1 verb, 1 noun, 1 adverb, and 1 adjective
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const userList = [verb, adjective, adverb, noun];

  while (userList.length < 10) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    if (!userList.includes(randomWord)) {
      userList.push(randomWord);
    }
  }

  shuffle(userList);

  res.status(StatusCodes.ACCEPTED).json({ words: userList });
});

export { wordsRouter, baseWordsRoute };
