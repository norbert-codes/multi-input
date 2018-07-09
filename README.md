# ✍️ Multi input react component

##### 🌎 https://multi-input-react-component.firebaseapp.com/

A [React](https://reactjs.org/) component, that consists of multiple input elements.

It works like:

-   Edit items: using the inputs
-   Delete items: clicking on the X
-   Add new item: on starting to type into the last input
-   The component has an `onChange` event handler which should be called with an array of
    the actual items excluding the last empty one when the user clicks save. For example:
    `[‘first’, ‘second’, ‘third’]`

The application is intended to run in the browser (see list of compatible browsers in`package.json`s `"browserslist":` field).

## Prerequisite

You should have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

## 🏃 Getting started (for development)

The app is actually a slightly modified (Custom [ESLint](https://eslint.org/) config and [Stylelint](https://stylelint.io/) added, and I use [styled-components](https://github.com/styled-components/styled-components) for styling.) [create-react-app](https://github.com/facebook/create-react-app). Original create-react-app README file is at [`./README-CRA.md`](https://github.com/nygdjs/multi-input/blob/master/README-CRA.md) if you need help with that.

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

You may have noticed the [`atoms`](https://github.com/nygdjs/multi-input/tree/master/src/components/atoms), [`molecules`](https://github.com/nygdjs/multi-input/tree/master/src/components/molecules), and [`organisms`](https://github.com/nygdjs/multi-input/tree/master/src/components/organisms) folders. Thats because I usually organise my components with the [Atomic Design](http://atomicdesign.bradfrost.com/) methodology. It is awesome. Go, check it out.

## 💅 styled-components

- For the styling I used [styled-components](https://github.com/styled-components/styled-components), which is my favorite CSS-in-JS solution so far. It supports the "dumb" presentational components wrapped in container components pattern very well.  
- A library, called [styled-system](https://github.com/jxnblk/styled-system) is also in the mix for the easy and consistent styling (also serves as a basic design-system). With the help of `styled-system` it is particularly easy to style components in place for the actual context, so you won't pollute encapsulated styles with context dependent styling, eg. to apply margin when inside a certain other component.
    - Check the API reference and docs [here](https://github.com/jxnblk/styled-system).  
    - See it in action[ here.](https://github.com/nygdjs/multi-input/blob/master/src/components/organisms/MultiInput.jsx#L23)  
    - An example:
```js
// Your Button.jsx file
import styled from 'styled-components';
import { space } from 'styled-system';

const Button = styled.button`
    background-color: papayawhip;
    border: 1px solid hotpink;
    color: black;
    cursor: pointer;
    font-size: 1em;
    overflow: hidden;
    overflow-wrap: break-word;
    padding: 0.5em;
    text-align: center;
    text-transform: uppercase;
    ${space} // <-- this is where the magic happens
`;

export default Button;

// An example usage in eg. SearchBar.jsx
import React from 'react';
import Button from './Button';
import SearchField from './SearchField';

const SearchBar = props => (
    <div>
        <SearchField/>
        <Button m="1em"/> //<-- Apply contextual styling (margin in this case) 
    </div>
);

export default SearchBar;

```

---

### ☑️ TODOs

- Make it themeable with [ThemeProvider](https://www.styled-components.com/docs/advanced#theming)
-   write tests for the components with logic (Jest)
-   use visual comparison tests for the presentational components
-   document components visually (storybook or [Kit](https://github.com/c8r/kit))
