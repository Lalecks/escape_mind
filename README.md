# Escape Mind
**[escape_mind](https://escapemind.sarahmauriaucourt.fr/)**, is a dematerialized escape game played online. During 25 minutes, the player follows the story of Sacha Ramirez, a scientist at the origin of an artificial intelligence named Kiara. Kiara has become dangerous and is about to be unplugged. To say goodbye, Sacha connects to her one last time. He has to be quick and clever so that Sacha can get out before she is unplugged, which will lead to her death at the same time. 

## Table of contents
* [Context](#context)
* [Built With](#built-with)
* [Functionalities](#functionalities)
* [Getting Started](#getting-started)
* [Authors](#authors)
* [Sources](#sources)
* [Project status](#project-status)

## Context
We are 5 students of the Polytechnic University of Hauts-de-France. In order to realize our end of degree project, we composed a motivated and multidisciplinary team to create a virtual escape game.

## Built With
* [Laravel](https://laravel.com/) - PHP framework
* [Sass](https://sass-lang.com/) 
* [JavaScript](https://www.javascript.com/) 

## Functionalities
![Functionalities](./public/functionalities.png)

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
$ php artisan serve
or
$ php -S localhost:8000 -t public
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
* Photographies: 
    - [Pixabay](https://pixabay.com/)
    - [Pexels](https://www.pexels.com/)
    - [Unsplash](https://unsplash.com/)
* Web resources:
    - *GreenSock* Copyright (c) 2021 [Jack Doyle](https://greensock.com/standard-license)
    - *Mouse* Copyright (c) 2020 [Dezigner Bay](https://www.youtube.com/watch?v=_UR74tkspqc)
    - *Rellax* Copyright (c) 2016 [Moe Amaya](https://github.com/dixonandmoe/rellax)
    - *Glitch effect* Copyright (c) 2021 [Sagar Mistry](https://codepen.io/sbmistry/pen/LYPZYMy)
    - *Noise background* Copyright (c) 2021 [Mathieu S.](https://codepen.io/iceable/pen/yLBrZOd)
    - *Vertical scroll indicator* Copyright (c) 2021 [Paul O'Brien](https://codepen.io/paulobrien/pen/JWdoXm)
    - *Highlight Active Nav Link On Page Scroll* Copyright (c) 2021 [Danilo Bilanoski](https://codepen.io/dbilanoski/pen/LabpzG)
    - *Menu burger* Copyright (c) 2021 [Akshay Nair](https://codepen.io/phenax/pen/Wrjgmx)
    - *Video player* Copyright (c) 2021 [OrlandoJC](https://github.com/OrlandoJC/videoPlayer)
    - *Tabs* Copyright (c) [W3Schools](https://www.w3schools.com/howto/howto_js_vertical_tabs.asp)
    - *Magnifier* Copyright (c) 2021 [Pixel|Acorn](https://codepen.io/pixelacorn/pen/eNObea)    
    - *Countdown timer* Copyright (c) 2021 [Máté Végh](https://codepen.io/matevegh/pen/GZVqLL)

## Project status
The development of the application is completed.