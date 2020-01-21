1. decide on components
2. decide the state and where it lives
3. what changes when state changes
   i. what part of virtual dom changes becauses of stage changes.

Getting started

1. npx create-react-app my-app

Note - Render method is called when ever you make changes in state.

Deploying apps to github pages
1.Goto github
2.Create new repository and copy https or ssh url
3.Move to actual project
4.git remote add origin https://github.com/rsdoc/monsters-rolodex.git
5.yarn add gh-pages
6.goto package.json file and add an entry of "homepage":"https://rsdoc.github.io/monsters-rolodex"
7.add predeploy scripts to scripts object as "predeploy":"yarn build"
8.then add deploy scripts as "deploy":"gh-pages -d build"
9.from terminal - yarn deploy
10.clean gh-pages - rm -rf node_modules/gh-pages/.cache

11. published url for this repo - https://rsdoc.github.io/monsters-rolodex
