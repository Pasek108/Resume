<h1 align="center">Resume - Readme</h1>
<p align="center">
  <strong>
    My personal portfolio website written in Angular
  </strong>
</p>

<!-- 
<div align="center">
  <a href="https://www.ur.edu.pl/pl/kolegia/kolegium-nauk-przyrodniczych">
    <img src="_for_readme/ur_banner.jpg?">
  </a>
</div>-->

<br>

# Table of Contents
* [Overview :sparkles:](#overview-sparkles)
  * [About](#about)
  * [Features](#features)
  * [Technologies](#technologies)
  * [Setup](#setup)
  * [Acknowledgements](#acknowledgements)
 
<!--
* [Details :scroll:](#details-scroll)
  * [User interface](#user-interface)
  * [Project structure](#project-structure)
  * [Code organization](#code-organization)
-->
<br>

# Overview :sparkles:

## About
My personal portfolio website written in Angular.

Check out the [live version](https://pasek108.github.io/Resume/).

<br>

![preview](/_for_readme/preview.png)

## Technologies
Languages:
- JavaScript
- TypeScript
- CSS
- HTML

Libraries and frameworks:
- [Angular](https://angular.dev) 19.0.0
- [Tailwind CSS](https://tailwindcss.comangu) 3.4.17
- [FontAwesome](https://fontawesome.com) 6.7.2
- [GoogleFonts](https://fonts.google.com)
  
Programs:
- [VSCode](https://code.visualstudio.com)
- [ShareX](https://getsharex.com)
- [GIMP](https://www.gimp.org)

## Features
- a

<br>

> [!NOTE]  
> Room for improvements:
> - a

## Setup
- Use [live version](https://pasek108.github.io/Resume/).

- Download this repository and:
  1. Open project in VSCode
  2. Run `npm install`
  3. Run `ng serve` or `ng serve --host <your-ip> --disable-host-check` for preview in local network
  4. Open generated address in the browser

- Deployment for GitHub:
  1. Run `ng build --output-path docs --base-href /Resume/`
  2. Move conetent from `/docs/browser` to `/docs`
  3. In `main-XXX.js` and `styles-XXX.css` files replace all '/images' with 'images'

## Acknowledgements
- [Animate on scroll](https://medium.com/@nemanjablagojevic/animate-elements-on-scroll-with-intersection-observer-in-angular-f91d98a92d13)
- [Router fade animation](https://arminzia.com/blog/angular-router-fade-animation)
- [SVG backgrounds and patterns](https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/)
- [Favicon emoji](https://fav-gen.com/favicon-emoji) 

<br>

<!-- 

# Details :scroll:

## User interface

### Header section
![header section](/_for_readme/UI/header_section.png)
Text

## Project structure
- :file_folder: Befunge93Interpreter (project folder)
  - :page_facing_up: *github and prepros config files*
  - :page_facing_up: *github readme file*
  - :page_facing_up: *index.html and favicon.ico files*
  - :file_folder: _for_readme - :page_facing_up: *files for readme*
  - :file_folder: js - :page_facing_up: *scripts used in the project*
  - :file_folder: css
    - :page_facing_up: *css files compiled by prepros*
    - :file_folder: less - :page_facing_up: *less files*
  - :file_folder: language
    - :file_folder: en - :page_facing_up: *files for english language*
    - :file_folder: pl - :page_facing_up: *files for polish language*
  - :file_folder: nyan_cats
    - :page_facing_up: *nyan cat icon*
    - :file_folder: default - :page_facing_up: *files for default nyan cat*
    - :file_folder: gameboy - :page_facing_up: *files for gameboy nyan cat*
    - :file_folder: rasta - :page_facing_up: *files for rasta nyan cat*
    - :file_folder: christmas - :page_facing_up: *files for christmas nyan cat*
    - :file_folder: mexican - :page_facing_up: *files for mexican nyan cat*

## Code organization

![program diagram](/_for_readme/program_diagram.png)

> [!WARNING]  
> Classes must be loaded from bottom to the top to avoid situation when class does not exist in the time of its objects creation

-->
