# README

This is the [Express](https://expressjs.com) [Hello world](https://expressjs.com/en/starter/hello-world.html) example on [Render](https://render.com).

The app in this repo is deployed at [https://express.onrender.com](https://express.onrender.com).

## Deployment

See https://render.com/docs/deploy-node-express-app or follow the steps below:

Create a new web service with the following values:
  * Build Command: `yarn`
  * Start Command: `node app.js`

That's it! Your web service will be live on your Render URL as soon as the build finishes.


# BRIEF INTRODUCTION

The project is meant to be deployed on Render and it is used by:
 * HoloLens device -> uses upload file endpoint
 * Jupiter Metaplatform Web App -> uses the retrieve file endpoint 

The Server is a simple local storage to upload and retrieve files, and act as an intermediary between the other two parties
