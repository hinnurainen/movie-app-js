[![CI](https://github.com/hinnurainen/movie-app-js/actions/workflows/secondmain.yml/badge.svg)](https://github.com/hinnurainen/movie-app-js/actions/workflows/secondmain.yml)

1.  Install Node JS and NPM in order to use the boilerplate. // Download link: https://nodejs.org/en/download/ //guide link: https://www.freecodecamp.org/news/how-to-install-node-js-and-npm-on-windows/

        + download Node from its homepage and install it.
        + restart your computer.
        + open your Terminal, type node -v. This command should output the version of your Node.
        + in your terminal, type npm -v. This command should output the version of your NPM.
        + After all these, you have NodeJS and NPM installed globally in your computer. :D

2.  Fork the project repo to your local computer and then start working.

    - in the project repo on Github, click fork icon on the right top corner, under your account icon.
    - forking it to your local repo.
    - create a new branch which is different to the main-branch where the final project stays on.
    - name your git branch as your name.

3.  Installing Node modules in your working directory.

    - in the directory where your forking repo stays, open the terminal.
    - type npm install. After this command you should see a folder named node_modules where all the packages stay in.

4.  How to start working with the boilerplate.

    - open file name package.json.
    - you can see a script tag named "webpack:dev". This is a running tag for development.
    - likewise, script tag named "webpack:prod" is for production mode.
    - start working in development mode, run in your terminal the command: npm run webpack:dev
    - ready to deploy, use this command: npm run webpack:prod

5.  Notifications:

    - you should start working on development mode by npm run webpack:dev
    - do no touch the dist folder cause it will be created automatically when running npm run webpack:prod. Everything in this folder is for serving to the browser when we deploy the website.
    - use src folder as you work.
    - html code will go to template.html. More html templates will come later on as the project grows bigger.
    - css codes should go to css folder and sub-folders and other files where it belong to.
    - JavaScript will go to js folder. We will discuss more about it later on.
    - use ES6 import/export syntax then you could seprate your JS files into multiple files.
    - use @import syntax to import other sub css code.

6.  Example how to code CSS first

    - we have variables about color like so: root: { --color-primary: orangage-red; }
    - we could put this code in src/css/abstracts/variables.css
    - then in main.css, @import './abstracts/variables.css'.
    - from now on, we could use the variables any where in other css files as we wish.
    - trying to separate your css into parts according to its functionality such as layouts, pages, components like buttons, cards, etc.

7.  How to naming your css class efficiently. We could use BEM methodology which is very efficient on big projects.
    - reference link: https://www.freecodecamp.org/news/a-quick-introduction-to-block-element-modifiers-bem-9df46d29b64c/

Happy Coding guys :D
