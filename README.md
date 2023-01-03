# OpenAI Template
This project is a starter kit for using OpenAI and its API layer. It is baked in with Authentication, Session Management, Token Tracking, as well as Billing (currently disabled). This MVP will answer specific questions or simplify complicated topics, all with an added bonus - No ads! ChatGPT has opened up a ton of unknowns. But 1 thing is for certain. Those who understand how to enter the right prompts will get the most out of this groundbreaking tech.

## Introduction

To start using the project, you will need the following. Node version 14 or above, MongoDB Cloud, an OpenAI account and key and Python.

### Starting Guide

Prepare the following items

- OpenAI account + API Key
- MongoDB Cloud instance database (free tier) + Cluster/Login
- NodeJS
- StripeJS (not required unless implementing billing)

### Installation

- Perform a NPM install or Yarn in the rood directory to install modules
- Update the ENV keys (or ENV.DEV) for your environemnt (for OpenAI, Mongo Etc)
- - MongoDB requires Cluster, Database, Username and Password
- For PC `npm run api` to start the instance of the project
- For Mac `npm run apimac` to start the instance of the project
- Start the Create React App using `npm start`

On first run, the database will initialise with an admin user at `/routes/middleware/mongo.js` which can be updated

You will be able to login with the following details:
`Username: admin@domain.com // Password: KeepingHumanSafe101`

You should have an instance of the backend and frontend running.

For more information, please follow the video attached to this project. This is a starter template. Support is not included as part of the download. Debugging and such will need to be performed at on your own, as well as implementing features.

There is the option to add Stripe, which is currently configured for subscriptions, you will need to connect the Stripe API, Webook URL, and create pricing plans (tempalates provided).

## Adding Prompts

The following steps need to be completed to add one new prompt on the backend and frontend.

### Part 1: Frontend
Head to `./src/tools/` to add the option to use a prompt on the frontend:

- Copy an existing prompt structure, and relabel the title, description, examples (eg, summarize.js -> helloworld.js)
- Update the intended backend url call path on the prompt to `/helloworld`
- Then import the new file add and it to the array on index.js

### Part 2: Backend
Head to `/routes/ai/` to add to the backend a new file

- Copy an existing file prompt call such as (eg. summarize.js -> hellowworld.js)
- Update the listen POST path to `/helloworld`
- Import the new file and add it to the array on index.js

Restart the client and backend server. The new prompt should show up. I've added an example hello world for testing purposes.

### Part 3: Customise Promtps
Udpate the backend and frontend queries to define the kind of prompt you want to query OpenAI with, as well as the kind of output you wish. There are examples for plaintext and listed prompts as part of this process.

## Publishing the Project

If you want to go live and publish the project, you will need a live domain and hosting. You can run NPM run build, and this will build the create react app the the build folder, which the web server will use as reference for the project online.

## First Experiment WIP

#chatGPT "what's one of the hardest concepts for a human mind to visualize? Write a
prompt for an Al image generator to try and create that image."

Here's what it came up with, and here's how MidJourney visualized it:

"Produce an art work from a text input. Use it to create your own unique piece of generative art to either just preview it or mint it as an NFT and store it on the Ethereum blockchain forever."

#aiart #midjourney
