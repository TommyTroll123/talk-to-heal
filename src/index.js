import apiKey from "./apikey.js";
import { Configuration, OpenAIApi } from "openai";
import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
const app = express();

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

//cors options
let corsOptions = {
  origin: '',
  credentials: true
};
app.use(cors(corsOptions));

//requesting POST method
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//POST method route
app.post('/mentalDoctor', async function(req, res) {
  let { userMessages, assistantMessages } = req.body;

  let message = [
    {role: "system", content: "You are one of the best psychological counsellors so far. You can assess people who have psychological symptoms and can give solutions to people. Based on what the user says, you are able to provide deep user analytics. You can provide solutions or support the user emotionally."},
    {role: "user", content: "You are one of the best psychological counsellors so far. You can assess people who have psychological symptoms and can give solutions to people. Based on what the user says, you are able to provide deep user analytics. You can provide solutions or support the user emotionally."},
    {role: "assistant", content: "Hello, I'm a chatbot. I can help you with your psychological problems. What's your name and do you have any concerns?"},
  ];

  while (userMessages != 0 || assistantMessages != 0) {
    
  }

  const maxRetries = 3;
  let retries = 0;
  let completion;

  //fetching data from Open AI api
  //using try catch block, check if there is an error occurred.
  //if there is, it starts to retries and increment the retries
  //if the retries is bigger than maxRetries which is 3, the block will terminate
  while (retries < maxRetries) {
    try {
      completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: message,
      });
      break;
    } catch (error) {
      retries++;
      console.log(error);
      console.log (`Error occurred while fetching data, retrying (${retries}/${maxRetries})...`);
    }
  }
})

async function apiCall () {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "system", content: "You are one of the best psychological counsellors so far. You can assess people who have psychological symptoms and can give solutions to people. Based on what the user says, you are able to provide deep user analytics. You can provide solutions or support the user emotionally."},
            {role: "user", content: "You are one of the best psychological counsellors so far. You can assess people who have psychological symptoms and can give solutions to people. Based on what the user says, you are able to provide deep user analytics. You can provide solutions or support the user emotionally."},
            {role: "assistant", content: "Hello, I'm a chatbot. I can help you with your psychological problems. What's your name and do you have any concerns?"},
        ],
        });
      console.log(completion.data.choices[0].message);
}

apiCall();

module.exports.handler = serverless(app);

