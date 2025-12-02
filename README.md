# Tic tac toe
Main front-end repository - React 19

# Installation

**First you need to clone this project**  

Then you need to install all dependencies of the project:

- Download LTS version of Node
- Install Node

**Install & Run the project**

- Install every required packages `npm install`
- Run the project `npm start` and go to `http://localhost:3000/`

**Run the project with Docker**

- Install Docker
- Build for DEV `docker build -t react-image:09-03-2025 --target=dev .`
- Build for PROD `docker build -t react-image:09-03-2025 --target=prod .`
- Inspect the build `docker run -it react-image sh`
- Run `docker run --name react-image -p 8080:80 -d react-image`
- Go to this link to see the application `http://localhost:8080`

# Quality code

**Run lint**

- Run `npm lint` #TODO

**Run tests**

- Run jest test `npm run-script test-jest`
- Run playwright test `npm run test-playwright`

  Fork repository: https://github.com/anthony-bt/ReactJSApp.git
