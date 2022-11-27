This is the backend server for the SAMM android app.

# Prerequisite

Required : 
- [NodeJs](https://nodejs.org/)
- [MongoDB Community](https://www.mongodb.com/try/download/community)
- [MongoDB Shell](https://www.mongodb.com/try/download/shell)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)

Optional :
- [Postman](https://www.postman.com/)


# Installation

Install dependencies

```bash
npm install
```

Run server

```
npm run nodemon-dev
```

You can create your custom environment by creating a .env file at the root of the repository. Settings are `DEV_API_PORT`, `DEV_API_KEY`, `DEV_API_TOKEN_DURATION`, `DEV_MONGODB_HOST`, `DEV_MONGODB_PORT` and `DEV_MONGODB_NAME`. If .env file isn't present, default configuration will be used in `config.js`.


# References

[OpenClassrooms - NodeJS and MongoDB](https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb)
[Ákos Szokodi - Node config best practices](https://codingsans.com/blog/node-config-best-practices)