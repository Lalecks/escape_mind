# Escape Mind
**[escape_mind](https://escapemind.sarahmauriaucourt.fr/)**, escape game online!

## Table of contents
* [Context](#context)
* [Built With](#built-with)
* [Functionalities](#functionalities)
* [Getting Started](#getting-started)
* [Authors](#authors)
* [Sources](#sources)
* [Project status](#project-status)

## Context

## Built With

* [Laravel](https://laravel.com/) - PHP framework

## Functionalities

## Getting Started
### Back-end
Install dependencies.
```
$ npm install
$ composer install
```

If getting 500 server error.
```
$ php artisan key:generate
$ php artisan db:seed
```

Start the server.
```
php artisan serve
```

Running migrations & seedings.
```shell
$ php artisan migrate
$ php artisan migrate --seed
```

If inserting the data doesn't work.

```shell
$ composer dump-autoload 
$ php artisan migrate:fresh
$ php artisan migrate --seed
```

Create all flags
```shell
$ php artisan vendor:publish [0]
$ php artisan view:clear
```

### Front-end
Automatic compilation of Sass and JS at each registration.
```shell
$ npm run watch
```

Minify CSS & JS files.
```shell
$ npm run prod
```

### GitHub memo
Switches to another branch or restores files from the working tree
```shell
$ git checkout <commit>
```

Reset to HEAD after
```shell
$ git reset HEAD^ -- force
or
$ git reset --hard origin/master
```

### Preview
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


## Authors
* **Sarah Mauriaucourt** - *Developer & webdesigner* - [sarah-mrcrt](https://github.com/sarah-mrcrt)
* **Alexandre Lavaud** - *Developer* - [Lalecks](https://github.com/Lalecks)
* **Camille Kozak** - *Graphic designer*
* **Mondine Odin** - *Sound designer & videographer* 
* **Antony Deschodt** - *Sound designer & videographer*

## Sources
* Photographies : 
    - [Pixabay](https://pixabay.com/)
    - [Pexels](https://www.pexels.com/)
    - [Unsplash](https://unsplash.com/)
* Web resources :
    - *GreenSock* Copyright (c) 2021 [Jack Doyle](https://greensock.com/standard-license)
    - *Mouse* Copyright (c) 2020 [Dezigner Bay](https://www.youtube.com/watch?v=_UR74tkspqc)
    - *Rellax* Copyright (c) 2016 [Moe Amaya](https://github.com/dixonandmoe/rellax)
    - *Glitch effect* 2021 Copyright (c) [Sagar Mistry](https://codepen.io/sbmistry/pen/LYPZYMy)
    - *Vertical scroll indicator* Copyright (c) 2021 [Paul O'Brien](https://codepen.io/paulobrien/pen/JWdoXm)
    - *Highlight Active Nav Link On Page Scroll* Copyright (c) 2021 [Danilo Bilanoski](https://codepen.io/dbilanoski/pen/LabpzG)
    - *Menu burger* Copyright (c) 2021 [Akshay Nair](https://codepen.io/phenax/pen/Wrjgmx)
    - *Video player* Copyright (c) 2021 [OrlandoJC](https://github.com/OrlandoJC/videoPlayer)
    - *Tabs* Copyright (c)
    - *Zoom article* Copyright (c) 2021 [Pixel|Acorn](https://codepen.io/pixelacorn/pen/eNObea)    
    - *Countdown timer* Copyright (c) 2021 [Máté Végh](https://codepen.io/matevegh/pen/GZVqLL)

## Project status
The development of the application is in progress.