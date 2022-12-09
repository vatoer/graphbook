# chapter 03

```
npm install -g sequelize-cli

sequelize model:generate --models-path src/server/models --migrations-path src/server/migrations --name Post --attributes text:text

sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js

npm install --save-dev babel-plugin-require-context-hook

sequelize seed:generate --name fake-post --seeders-path .\src\server\seeders\

sequelize db:seed:all --seeders-path src/server/seeders --config src/server/config/index.js

sequelize model:generate --models-path src/server/models --migrations-path src/server/migrations --name User --attributes avatar:string,username:string

sequelize migration:create --migrations-path src/server/migrations --name add-userId-to-post

sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js

```

on error migration 
```
sequelize db:migrate:undo --migrations-path src/server/migrations --config src/server/config/index.js
```

You can also revert all migrations at once, or only revert to one specific migration so that
you can go back to a specific timestamp:

```
sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js --migrations-path src/server/migrations --config src/server/config/index.js
```

Seeding foreign key data
```
sequelize seed:generate --name fake-users --seeders-path src/server/seeders
```

The following command will undo
all the seeds

```
sequelize db:seed:undo:all --seeders-path src/server/seeders --config src/server/config/index.js
```

rerun seed
```
sequelize db:seed:all --seeders-path src/server/seeders --config src/server/config/index.js
```

chat model
```
sequelize model:generate --models-path src/server/models --migrations-path src/server/migrations --name Chat --attributes firstName:string, lastName:string,email:string
```

Generate the migration for our association table, as follows:
```
sequelize migration:create --migrations-path src/server/migrations --name create-user-chats
```

rerun migrations
```
sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js
```

message mode 
```
sequelize model:generate --models-path src/server/models --migrations-path src/server/migrations --name Message --attributes text:string,userId:integer,chatId:integer
```

```
sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js
```
