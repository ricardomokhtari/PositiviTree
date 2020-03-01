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

# DevPost Summary

## Inspiration

Mental health is becoming more and more of a recognised issue in the current media climate. Social media particularly has played a complex role in affecting individual's self-esteem. [Multiple studies](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6266525/) have linked high social media use to people with social limitations and insecurities. We hope that our web-app provides a lightweight and friendly method for helping people deal with issues around self-esteem and social anxiety. By providing simple interactive app that encourages optimism and self-confidence, we hope to encourage positive behavioural changes and help stabilise vulnerable persons.

## What it does

The web-app prompts and listens to the user speak about anything. The app rewards comments it analyses as positive, by growing the adorable positiviTree and giving it a smiley-face. For negative comments, the app shrinks the positiviTree and gives it a sad face. When the app detects highl concerning sentiments from the user, a helpline to samaritans is provided and the user is urged to contact them.

## How we built it 

- The frontend was developed using a `reactJS` framework.
- Graphics were designed by Sarah, and animated within the `reactJS` framework. 
- Audio is recorded by the website, and piped to the google API for transcription. 
- The raw text is then piped to a backend server hosted on `nodeJS`. 
- The nodeJS server launches a `child_process` in python, which runs sentiment analysis using the `vaderSentiment` package. 
- Sentiment analysis is returned to the frontend, along with the `warningLevel` (in case the user is in urgent need of mental health support). 
- These values then instruct the 'growth' or 'shrinkage' of the positiviTree.

## Challenges we ran into 

- Implementing the 'growing' and 'shrinking' of the positiviTree in react proved tricky.
- Capturing and successfully piping audio from the frontend to the google API also proved an obstacle we had to work around.

## Things we learned

- ReactJS
- Manipulating microphone audio on the frontend using `AudioContext`
- Versioning with `git` 

## What's next?

- Deploying the web-app to a dedicated server. 
- Deploying the backend to a dedicated server.
- Developing a user database, and more personalised prompts to encourage positive thinking. 

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
