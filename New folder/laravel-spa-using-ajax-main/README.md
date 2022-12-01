# Laravel SPA Using Ajax

## Installation

Clone the repo locally:

```
git clone https://github.com/KhineZinThaw/laravel-spa-using-ajax.git

cd laravel-spa-using-ajax
```

Install PHP dependencies:

```
composer install
```

Install NPM dependencies:

```
npm install
```

Build assets:

```
npm run dev
```

Setup configuration:

```
cp .env.example .env
```

Generate application key:

```
php artisan key:generate
```

Create database and configure in `.env` file

eg.

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_spa_using_ajax
DB_USERNAME=root
DB_PASSWORD=
```

Run database migrations:

```
php artisan migrate
```

Run database seeder:

```
php artisan db:seed
```

Run the dev server:

```
php artisan serve
```

Visit `localhost:8000` in your browser and login with:

## User List
![User List](./public/screenshot/user_list.png)

## User Create
![User Create](./public/screenshot/user_create.png)

## User Edit
![User Edit](./public/screenshot/user_edit.png)

## User Delete
![User delete](./public/screenshot/user_delete.png)