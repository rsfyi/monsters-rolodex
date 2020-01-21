# React and github pages

- Decide how to divide projects into components
- Decide the state and where it lives
- What changes when state changes
  - What part of virtual dom changes becauses of state changes.

## Getting started

- npx create-react-app my-app
- Deploying apps to github pages
  - Goto github
  - Create new repository and copy https or ssh url
  - Move to actual project
  - git remote add origin - `https://github.com/rsdoc/monsters-rolodex.git`
  - yarn add gh-pages
  - goto package.json file and add an entry of - `"homepage":"https://rsdoc.github.io/monsters-rolodex"`
  - add predeploy scripts to scripts object as - `"predeploy":"yarn build"`
  - then add deploy scripts as - `"deploy":"gh-pages -d build"`
  - from terminal - yarn deploy
    - `clean gh-pages - rm -rf node_modules/gh-pages/.cache`
  - published url for this repo - `https://rsdoc.github.io/monsters-rolodex`
- Updating to latest version of packages or react version update
  - yarn list react react-dom react-scripts - list packages versions from package.json
  - ^ - this means when ever npm see commands like yarn update or npm update, it going to find latest stable version

`Render method is called when ever you make changes in state.`
