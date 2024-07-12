**Laravel10-vue-survey-app**

**Installation using Docker**

1. Clone the project using Git.
2. Copy `.env.example` to `.env`. Adjust the `DB_*` parameters.
3. Navigate to the project root directory and run `docker-compose up -d web`.
4. Run `composer install` inside the PHP container.
5. Run `php artisan key:generate --ansi` inside the PHP container.
6. Run `php artisan migrate` inside the PHP container.
7. Open in browser [http://localhost](http://localhost).
