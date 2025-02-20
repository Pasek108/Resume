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
  * [Projects data](#projects-data)

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
- Each view shares a navbar, allowing users to navigate through the website by clicking on the navbar items.
- On mobile devices, the navbar transforms into a collapsible menu for better usability.
- A header section displaying the name of the current view is positioned at the top of the scrollable content area, providing clear context to the user.

---

### Footer
![footer](/_for_readme/UI/footer.png)
The footer is a consistent part of every view, positioned at the bottom of the page.

It contains:
- A round, decorative shape and an inspiring quote to add visual appeal.
- Contact links for easy access to my communication channels.
- Copyright information and author details.

---

### Intro
![intro](/_for_readme/UI/intro.png)
The Intro section is the first part of the About view, providing a quick overview of who I am.

It includes:
- A brief introduction about me and my background.
- A structured content list outlining the 'About' view.
- A direct link to download my resume in PDF format.
- Links to my most important professional profiles, such as GitHub, CodePen, and LinkedIn.

---

### What I Do
![what i do](/_for_readme/UI/what-i-do.png)
The "What I Do" section offers a more detailed look at my expertise and activities.

It is divided into four categories:
- Programming – Covers the programming languages I use and my technical proficiency.
- Challenges – Showcases the platforms I use for coding challenges and problem-solving.
- Improvements – Highlights my continuous improvement efforts and the tools I use for self-enhancement.
- Learning – Focuses on the topics and technologies I am currently studying.

---

### Skills
![skills](/_for_readme/UI/skills.png)
The Skills section presents my self-assessed competencies. It includes both skills I am comfortable with and those I have had some exposure to.

The skills are categorized into four columns:
- Languages – Programming languages I have experience with.
- Frameworks and Libraries – Technologies I have worked with in various projects.
- Programs and Tools – Software and utilities I frequently use.
- Other – Additional skills that do not fit into the above categories.

Below the skills table, there is a button that reveals additional skills when clicked.

---

### Selected projects
![selected projects](/_for_readme/UI/selected-projects.png)
This section provides a brief overview of my six best projects, showcasing their key aspects. Users interested in more projects can navigate to the Projects view for a complete list.

---

### Education
![education](/_for_readme/UI/education.png)
My formal education is presented in a timeline format, with detailed descriptions of each stage of my academic journey. This provides insight into my background and learning path.

---

### Experience
![experience](/_for_readme/UI/experience.png)
Similar to the Education section, my professional experience is displayed on a timeline with descriptions of my roles, responsibilities, and achievements in various positions.

---

### Projects
![projects](/_for_readme/UI/projects.png)
The Projects view presents an overview of all my projects, offering users an interactive experience to explore my work.

Each project entry includes:
- A carousel showcasing images of the project.
- The project title.
- The group or category it belongs to.
- A detailed description of the project.
- The relevant skills used in its development.
- Links to the GitHub repository and live demo for further exploration.

Users can filter projects based on:
- Group – Categorizing projects for easier browsing.
- Search Text – Allowing users to find projects using keywords.
- Skills – Users can select one or multiple skills to filter projects that match their expertise.

Filtered projects are displayed in paginated views, and users can navigate through them. Additionally, they can adjust the number of projects displayed per page.

---

### Contact
![contact](/_for_readme/UI/contact.png)
The Contact section provides various ways to get in touch with me and includes a contact form for direct communication.

It also lists websites where my work is showcased, allowing visitors to explore more of my projects and contributions.


## Projects data
All of the projects are contained in a single file, projects_data.json.

This file organizes data into three categories:
- groups – names of the project groups
- skills – names of the skills
- projects – data related to individual projects

Each project entry includes:
- name – the name of the project
- images – a list of images for the carousel
- description – a short description of the project
- live_version – a link to the live version of the project
- github_repo – a link to the GitHub repository of the project
- skills – a list of skill IDs used in the project
- group – the ID of the group that the project belongs to
- hidden – a flag indicating whether the project should be hidden from display

```
{
  "groups": [
    "Personal projects",
    "TOP - The Odin Project",
    "FM - Frontend Mentor",
    "UR - University of Rzeszów",
    "Other"
  ],
  "skills": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    ... And more ...
  ],
  "projects": [
    {
      "name": "TicTacToe",
      "images": [
        "images/TicTacToe/main-menu.png",
        "images/TicTacToe/multiplayer-lobby.png",
        "images/TicTacToe/win-movable.png",
        "images/TicTacToe/movable.png",
        "images/TicTacToe/one-mark.png"
      ],
      "description": "Three tic-tac-toe versions in two modes, vs AI, vs player locally and multiplayer in real-time.",
      "live_version": "https://tic-tac-toe-alqu.onrender.com/",
      "github_repo": "https://github.com/Pasek108/TicTacToe",
      "skills": [2, 4, 42, 45, 34, 0],
      "group": 0,
      "hidden": false
    },
    ... And more ...
}
```
