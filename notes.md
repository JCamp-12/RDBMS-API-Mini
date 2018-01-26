Databse - 'all your base belong to us'
  - tables
    -rows
      -columns

1) Install knex globally 
  - command for npm is npm install -g knex

2) add knex to our project
  - command for npm is npm install knex, in root folder

3) create a knex instance
  - command is knex init, to generate knexfile.js, in root folder

  4) add sqlite3 package
    - command npm install sqlite3

  5) add Zoos Table
 - Zoos Table should have the following columns:
  - id: primary key, automincrements.
  - name: unique, alphanumeric up to 255 characters long.
  - created_at: should automatically default to the current date and time.