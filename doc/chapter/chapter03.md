# chapter 03

```
npm install -g sequelize-cli

sequelize model:generate --models-path src/server/models --migrations-path src/server/models/migrations --name Post --attributes text:text

sequelize db:migrate --migrations-path src/server/models/migrations --config src/server/config/index.js

```