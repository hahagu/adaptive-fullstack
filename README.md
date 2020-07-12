# Adaptive Full-Stack V2

A repository containing the source for Adaptive web template with Laravel as backend and VueJS as frontend.

This repository is kept up-to-date with each releases.

## Prerequisites

-   PHP + MySQL

-   Composer - <a href="https://getcomposer.org/download/">Download Link</a>

-   NodeJs - <a href="https://nodejs.org/en/">Download Link</a>

## Installation

1. Clone or download the repository and upload to your server.

2. Installer Laravel dependencies with `composer install`

3. Install VueJS dependencies with `npm install`

4. Copy the file `.env.example` to `.env` and add the following information:

-   Database credentials (`DB_HOST`, `DB_PORT`, ...)

-   Application url (`APP_URL`).

5. Generate application key with `php artisan key:generate`

6. Generate JWT key with `php artisan jwt:secret`

7. Launch database migrations with `php artisan migrate --seed`, and `php artisan migrate:refresh --seed` for auto cleaning the database.

8. Build front with `npm run dev` or `npm run prod` for production builds.

9. Run `php artisan storage:link` to create a symbolic link to storage.

10. Set your host to serve the `public` folder.

.htaccess is preconfigured for VueJS in the `public` directory.

If SSH access and/or site root directory change is not not accessible,
add the following code on your **Root** directory's .htaccess file.

```
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule ^(.*)$ public/$1 [L]
</IfModule>
```

Please note that this approach may **NOT** be secure!

## Auto Deployment (cPanel)

**Note that everything on the deployment folder will be permanently deleted!**

**Also, Application and JWT key will not be generated, as this invalidates the previous keys.**

**Key generation should be done manually when installing for the first time.**

1. Set up GIT repository cloning with cPanel.

2. Copy `.deploy-config.example` file to `.deploy-config`, and edit the DEPLOYPATH variable to your deployment folder.

3. Copy `.env.example` file to `.env`, and edit to match the server configuration.

4. Deploy HEAD Commit from cPanel.

## Configuration

-   App name, motto, themes and etc. can be changed from changing
    variables in `resources/js/mixin.js`
-   JWT token expiration can be set
    by changing the value of `JWT_TTL` in .env file.
-   If you do not wish to use HTTPS, edit out the `Handle HTTPS` section from
    `.htaccess` file in `public` directory

## Usage

Log as admin with `admin@test.com:Passw0rd!` or as user with `user@test.com:Passw0rd!`


## Update History

### 2020/07/12 - Version 2.0

- Laravel updated to V7
- Vue updated
- Authentication function updated
- jQuery completely removed
- Bootstrap updated to V5
- Animations has been replaced completely with Velocity JS