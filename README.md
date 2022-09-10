# proficio-interview-task

This is a project for a job interview in [Proficio](https://proficio.cz/).

## Run project (dev mode)

Despite the fact, that this project is supposed to be a simple frontened app, I simulate fetching data from server.
To do it, I used [Json server](https://www.npmjs.com/package/json-server). App fetch data from `localhost` on port `3000`.

### Run Json Server

To run Json server, we change working directory to `proficio-task\data` and then run `npx json-server --watch db.json --port 3000 --id trcid`.

### Run App in dev mode

To run App in dev, we change working directory to `proficio-task` and then simply run script `npm run dev`.

## Build Project

How to build project and other options and scripts, you can find in [README](./proficio-task/) `proficio-task` folder.

## Run Tests

You can run some simple tests of some components by chhanging working directory to `proficio-task` and running script `npm run test:unit`
