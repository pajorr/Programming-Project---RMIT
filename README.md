## To run this program, the following things are required:

PHP (we use PHP 7.2.12)
Composer
Any relational DB (ex: MySql/PostgreSql)
After cloning the project, copy the .env.example and name it .env then go to the project folder from terminal and run these following commands

- composer install
- php artisan key:generate
- php artisan jwt:secret
- A database is needed. Create your DB, but don't create any table. The tables will be migrated from the code.

In the .env file, complete your DB credentials. Our team uses MySql DB for this project.

- DB_CONNECTION= the DB you use (mysql/pgsql/etc)
- DB_HOST=127.0.0.1 or your Server IP address
- DB_PORT= your DB port
- DB_DATABASE= your DB name
- DB_USERNAME= your DB username
- DB_PASSWORD= your DB password
After that, run the following command to migrate the DB

php artisan migrate
If want to have some data in the DB table, we provide seeders. just run the following command to populate the DB.

php artisan DB:seed 

## Running the Program
To run the program, use the following command

php artisan serve
If the command is successfully running, it will say that the program is running on port 8000 of your localhost. Now you can test the APIs. to see the list of available API use the following command

php route:list or you can open 127.0.0.1:8000/api-tester

## Testing
Some test scripts are available inside the testing folder. We have both unit and feature testing. Too run the test script use the following command

.\vendor\bin\phpunit
