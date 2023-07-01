```markdown
# React Game

This is a simple React game application where users can play a word association game. Users are presented with a word and need to select the correct word type (noun, verb, adverb, or adjective) from the available options. The game tracks the user's score and provides feedback on their answers.

## Features

- Display a random word for the user to associate with a word type.
- Provide feedback on the correctness of the user's answers.
- Calculate the user's rank based on their final score.
- Allow the user to restart the game and play again.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Router: Library for handling routing within a React application.
- Axios: Promise-based HTTP client for making API requests.
- Bootstrap: CSS framework for styling the application.
```
## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/Mohamed0Hussein/Words-Game
   ```

2. Install the dependencies:
   - You need to run install the dependencies in the main directory 

    ```shell
   npm install
   ```
   - then you can run the script : 
   ```shell
   npm run initialize
   ```
   this will install the dependencies for both the server side and client side 


3. Start the project server:

   - run the following script to run the project 

   ```shell
   npm run project
   ```
   - this will start the server on port : 5000,
   - and automatically will begin the client on port : 3000

4. Open the application in your browser:

   ```
   http://localhost:3000
   ```

## Folder Structure

The project's folder structure is organized as follows:

```
|- repo
    |- client/
        |- public/
        |- src/
            |- components/
                |- Card.js
                |- cardStyle.css
            |- context/
                |- actions.js
                |- reducer.js
                |- appContext.js
            |- pages/
                |- Game.js
                |- gameStyle.css
                |- Landing.js
                |- style.css
            |- App.js
            |- index.css
            |- index.js
            |- logo.svg
        |- package.json
    |- server/ 
        |- router/
            |- baseRouter.ts
            |- rankRouter.ts
            |- wordsRouter.ts
        |- package.json
        |- server.ts
        |- TestData.json
        |- tsconfig.json
    |- package.json
    |- README.md

```

- The `public` folder contains the index.html file and other static assets.
- The `src` folder contains the application's source code.
- The `components` folder contains reusable React components.
- The `context` folder contains the application's context and state management.
- The `pages` folder contains the different pages or views of the application.
- `App.js` is the main component that serves as the entry point of the application.
- `index.js` is the entry point for rendering the React application.
```