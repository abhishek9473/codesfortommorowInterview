please create your db and update in config/config.json file

or run command >> npx sequelize-cli db:create

1> run migation file for create database table
  >> npx sequelize-cli db:migrate

this command create all table in database 

2>after this please run seeder file
>> npx sequelize db:seed:all

this command run seeder file and out data in table of user and service list

after this use login link for login and save token in header
and use all api.
