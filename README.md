# Fix Broken Dockerfile Build for Web App

## Task
You have joined a team working on a Node.js web application that uses a MySQL database. The team has provided a Docker Compose setup for local development. When you run the containers, the web service restarts and the logs show a 'connect ECONNREFUSED 127.0.0.1:3306' error. The MySQL service appears to be running. Your job is to diagnose and update the Compose file or environment settings so the web container can find and connect to the database.

## Setup Instructions

1. Make sure Docker and docker-compose are installed on your machine.
2. Build the images by running:
    ```
    ./install.sh
    ```
3. Start the services by running:
    ```
    ./run.sh
    ```

## What You Need to Do
- Diagnose and update the setup so the web container can connect to the database container successfully when using Docker Compose.

## How to Verify
- The web application container should start without restarting, and the logs should show a successful connection to the MySQL database ("Connected to MySQL database!").
- You can access the web app at http://localhost:3000 and it should display a message that it's running and connected to the database.

## Files Provided
- `Dockerfile`: Node.js web application build instructions
- `docker-compose.yml`: Defines web and database containers
- `index.js`: Simple Express.js server with MySQL connection
- `package.json`: Node.js app dependencies and scripts
- `install.sh`: Build images script
- `run.sh`: Build images and run containers

---

**Note:** Focus only on fixing the configuration so the web container can successfully connect to the database via Docker Compose. No code or logic changes are needed in the app itself.