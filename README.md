# ✍️ Multi input react component

##### 🌎 https://multi-input-react-component.firebaseapp.com/

A [React](https://reactjs.org/) component, that consists of multiple input elements.

It works like:

-   Edit items: simply using the inputs
-   Delete items: clicking on the X
-   Add new item: simply after starting to type into the last input
-   The component should have an onChange event handler which should be called with an array of
    the actual items excluding the last empty one when the user clicks save. For example:
    [‘first’, ‘second’, ‘third’]
-   The component should be able to be updated at any time via its props.
-   Use PropTypes
-   Deploy the solution and send us the link to your working multi input

The application is intended to run in the browser (see list of compatible browsers in`package.json`s `"browserslist":` field).

## Prerequisite

You should have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

## 🏃 Getting started (for development)

The app is actually a slightly modified (Custom [ESLint](https://eslint.org/) config and [Stylelint](https://stylelint.io/) added, and I use [styled-components](https://github.com/styled-components/styled-components) for styling.) [`create-react-app`](https://github.com/facebook/create-react-app). Original create-react-app README file is at `./README-CRA.md` if you need help with that.

1.  Install (dev)dependencies with:

```bash
npm install
```

2.  To start the dev/webserver (also live-reloads changes), type in your terminal:

```bash
npm run start
```

It will automagically open up your default browser with the URL.

## 🚀 Deployment

The app is tested to be deployed to firebase. If you would like to deploy it yourself, you should follow the steps [here.](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#firebase)

## ⚛️ Atomic Design

You may have noticed the `atoms` and `molecules` folders. Thats because I usually organise my components with the [Atomic Design](http://atomicdesign.bradfrost.com/) methodology. It is awesome. Go, check it out.

---

### ☑️ TODOs

-   write tests for the components with logic
-   use visual comparison tests for the presentational components
