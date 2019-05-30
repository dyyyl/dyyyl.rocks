---
title: "React Hooks 101"
date: 2019-01-05 10:00:00
description: In preparation for my first live coding event!
---

### Preamble 🧘🏽‍♂️

Over the years, a lot of work has been put into helping React developers leverage top-down data flow between components, however reusing stateful logic between React components can be very painful.

Often, we wrangle with complex components that cannot be broken down into more atomic, reuseable pieces of code due to inherently stateful logic just cannot be abstracted into a function or another component.

&nbsp;

### The Hook ⚓️

> _Hooks apply the React philosophy (explicit data flow and composition) inside a component, rather than just between the components._

> -- <cite>Dan Abromov</cite>

We run into these problems every day - animations, form handling, and managing external data sources are all incredibly tricky at scale across components, making complex components tricky to reason about.

These increasingly monolithic components are difficult to refactor or test, due to the tightly coupled and often duplicated logic between other components and lifecycle methods. Patterns such as render props and higher-order components aim to solve some of these problems, but are themselves quite complex and add unnecessary nesting to our code.

Hooks help us organize logic inherent to a component into atomic, reusable units!

Some advantages include:

- Hooks minify very well compared to classes, so adopting Hooks could immediately reduce your bundle size
- They are incredibly easy to read!
- Hooks are regular JavaScript functions, allowing us to make custom hooks for every situation!
- Hooks complex problems into one-liners and share them across your application or with the React community
- Now we can NPM everything!

&nbsp;

### The Catch 🎣

At their core, React Hooks™ are JavaScript functions with a catch. Two, to be precise! 🐟 🐠

The _Rules of Hooks_ can be summarized as:

- Hooks can only ever be called at the top level - they cannot be called inside of loops or conditions or nested functions
- Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks.
- Hooks can only be called from React function components. Don’t call Hooks from regular JavaScript functions or React Classes™.

> **Note**: The only other place Hooks can be called from are within your own custom hooks! Tune in next time for more on that ~

### The Code 👨🏽‍💻

Below is a class component that renders a button that increases a counter by one each time it is clicked.

&nbsp;

```jsx
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    count: 0,
  };

  setCount = () => {
    const count = this.state.count + 1;
    this.setState(count);
  };

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times!`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times!`;
  }

  render() {
    return (
      <Fragment>
        <p>You clicked {this.state.count} times!</p>
        <button onClick={() => this.setCount()}>Click me</button>
      </Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

&nbsp;

and again, but _with React Hooks_:

```jsx
import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <Fragment>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

As always, you can find me on Twitter [@dyyyyyyyyyl][twitter] or [Github][dyl]

[twitter]: https://twitter.com/dyyyyyyyyyl
[dyl]: http://github.com/dyyyl

&nbsp;
