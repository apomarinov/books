## Hotel Management Platform
#### What you need
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Git

#### How to run

- Clone this repo
- Run `docker-compose up -d`
- View installation process `docker logs -f app` and wait for DONE message
- Go to [localhost](http://localhost)

If you see Laravels error ***No Application Encryption Key Has Been Specified***
- Run `docker exec -it app bash`
- Run `cd /var/www/html && php artisan config:cache`
