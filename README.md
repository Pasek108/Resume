<h1 align="center">Resume - Readme</h1>
<p align="center">
  <strong>
    My personal portfolio website written in Angular
  </strong>
</p>

<div align="center">
  <img src="_for_readme/banner.png?">
</div>

<br>

# Table of Contents
* [Overview :sparkles:](#overview-sparkles)
  * [About](#about)
  * [Features](#features)
  * [Technologies](#technologies)
  * [Setup](#setup)
  * [Acknowledgements](#acknowledgements)
* [Details :scroll:](#details-scroll)
  * [User interface](#user-interface)

<br>

# Overview :sparkles:

## About
My personal portfolio website, built with Angular, includes detailed and well-organized information about me and my projects. Its responsive layout and animations make the presentation visually appealing.

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
- [PowerToys](https://learn.microsoft.com/en-us/windows/powertoys/)
- [ShareX](https://getsharex.com)
- [GIMP](https://www.gimp.org)

## Features
- Router and scroll animations
- Responsive layout for all devices
- Clear and detailed presentation
- Properly linked websites and GitHub projects
- Well-described GitHub projects
- Downloadable PDF resume
- Skills section
- Selected projects section
- Education and experience sections
- Organized project data structure
- Project filtering and pagination
- Overview of all projects with images
- Technologies used in projects
- Live version and source code links for projects
- Contact form
- Social media and portfolio links

<br>

> [!NOTE]  
> Room for improvements:
> - More projects
> - Certificates
> - Non formal education (cirriculums and courses without certificates)
> - Details on used software

## Setup
- Use [live version](https://pasek108.github.io/Resume/).

- Download this repository and:
  - Open project in VSCode
  - Run `npm install`
  - Run `ng serve` or `ng serve --host <your-ip> --disable-host-check` for preview in local network
  - Open generated address in the browser

- Deployment for GitHub:
  - Run `ng build --output-path docs --base-href /Resume/`
  - Move conetent from `/docs/browser` to `/docs`
  - In `main-XXX.js` and `styles-XXX.css` files replace all '/images' with 'images'

## Acknowledgements
- [Animate on scroll](https://medium.com/@nemanjablagojevic/animate-elements-on-scroll-with-intersection-observer-in-angular-f91d98a92d13)
- [Router fade animation](https://arminzia.com/blog/angular-router-fade-animation)
- [SVG backgrounds and patterns](https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/)
- [Favicon emoji](https://fav-gen.com/favicon-emoji) 

<br>

# Details :scroll:

## User interface

### Header
![header](/_for_readme/UI/header.png)
Each view share a navbar user can move around webiste by clicking on navbar names. On moblie navbar turns into collapsed menu. Header section with name of the view is placed at the top of the scrollable view. 

### Footer
![footer](/_for_readme/UI/footer.png)
Footer is also part of every view. It is placed at the bottom of view. It has round, decorative shape and contains quote for making it less boring. It has contact links, copyright and author info.  

### Intro
![intro](/_for_readme/UI/intro.png)
Intro is a first section of About view. It contains brief info about me, content of the about view, link to my PDF resume file and the most important links (github, codepen, linkedin).

### What I Do
![what i do](/_for_readme/UI/what-i-do.png)
Intro is a first section of About view. It contains brief info about me, content of the about view, link to my PDF resume file and the most important links (github, codepen, linkedin).

### Skills
![skills](/_for_readme/UI/skills.png)
Intro is a first section of About view. It contains brief info about me, content of the about view, link to my PDF resume file and the most important links (github, codepen, linkedin).

### Selected projects
![selected projects](/_for_readme/UI/selected-projects.png)
Intro is a first section of About view. It contains brief info about me, content of the about view, link to my PDF resume file and the most important links (github, codepen, linkedin).

### Education
![education](/_for_readme/UI/education.png)
Intro is a first section of About view. It contains brief info about me, content of the about view, link to my PDF resume file and the most important links (github, codepen, linkedin).

### Experience
![experience](/_for_readme/UI/experience.png)
Intro is a first section of About view. It contains brief info about me, content of the about view, link to my PDF resume file and the most important links (github, codepen, linkedin).

### Projects
![projects](/_for_readme/UI/projects.png)
Intro is a first section of About view. It contains brief info about me, content of the about view, link to my PDF resume file and the most important links (github, codepen, linkedin).

### Contact
![contact](/_for_readme/UI/contact.png)
Intro is a first section of About view. It contains brief info about me, content of the about view, link to my PDF resume file and the most important links (github, codepen, linkedin).


