# positiviTree

This project aims to improve the mental health of users, using positive and self-affirmation. [Research](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4814782/) indicates that the positive affirmation of users 'good' thoughts and opinions can lead to a more positive mental outlook. This decreases their stress, increases well being, improves academic performance, and can improve openess to behavioural change. 

## Concept

- Positive reinforcememnt of 'good' thoughts
    1. The user speaks their mind to the web-app.
        - Speech processed by [natural language processing](./backend/basic_sent_anal.py).
        - Sentiment analysis is [processed](./backend/basic_sent_anal.py).
    2. The positiviTree grows or shrinks depending on whether the thoughts are 'good' or 'bad'. 
        - Additionally, phrases which are strongly indicative of poor mental health trigger a warning, and respond with a helpline.
    3. The feedback from the positiviTree positively affirms the user's 'good' thoughts, and gives negative feedback for bad self-image.
- Responses aimed at helping the user talk
    1. UNK

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

## Init

- `npm install`
- `node node/server.js`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
