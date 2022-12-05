# chapter 03

```
npm install -g sequelize-cli

sequelize model:generate --models-path src/server/models --migrations-path src/server/migrations --name Post --attributes text:text

sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js

npm install --save-dev babel-plugin-require-context-hook
```