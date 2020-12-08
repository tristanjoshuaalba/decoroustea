---
title: ToDo List App using ReactJS
author: Tristan Alba
date: 2020-12-08
hero: ./images/screenshot-todo-list.png
excerpt: A simple productivity timer created using React
---
## Overview

In this exercise, we aim to create a basic to-do list app using ReactJS. 

Initially, I was trying to avoid making a to-do list because everyone seems to make it as one of the first projects to do when they are starting out with any programming language. 

To my surprise, I learned a couple of tricks like **CallBack Props** and **Accessibility Features** while following the MDN React ToDo List App Tutorial. 

*Disclaimer:* Most of this is inspired from the tutorial; however, I downsized this project and opted to remove the `EDIT` functionality, as it requires ton more UI workarounds (and code!) to do. Moreover, it feels like it does not add to my learning objectives that much. Besides, most beginner to-do list apps only have add and remove task features anyway.

## Our Apps' User Stories

As a user, I can:
- Read a list of tasks
- Add a task using the mouse or keyboard
- Mark any task as completed
- Delete any task

## Creating the Basic App Structure

I added the following chunks of code to the `App.js` file that corresponds to different `components` of the application. I will separate them later into different components later on.

### 1. ToDo List Form
```jsx 
    <form>
    <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
        Hey there, what do you need to do today? 🔥
        </label>
    </h2>
    <input 
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
        Add
        </button>
    </form>
```


### 2. List Counter
```jsx
    <h2 id = "list-heading">
    3 tasks remaining
    </h2>
```

### 3. ToDo List Items
```jsx
    <ul 
    role="list"
    className="todo-list stack-large stack-exception"
    aria-labelledby="list-heading"
    >
    <li className="todo stack-small">
        <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true}/>
        <label className="todo-label" htmlFor="todo-0">
            Eat
        </label>

        <button
            type="button"
            className="btn btn__danger"
            style={{"margin-left": 10}}
        > X <span className="visually-hidden"> Eat </span>
        </div>
    </li>
    </ul>
```

## Styling the App
After styling, the app should look like this:
<div className="Image__Small">
  <img
    src="./images/app-screenshot-2.png"
    title="Prettified ToDo List App"
    alt="Looking good!"
  />
</div>


## Finishing up the React Components
Then, I worked on making each part of the code as React Components:

### 1. Todo.JS
```jsx
    import React from "react";

    export default function Todo(props) {
        return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input
                    id={props.id}                                                                                                                                               
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />

                <label className="todo-label" htmlFor="todo-0">
                    {props.name}
                </label>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}
                    style={{"margin-left": 10}}
                    > X 
                <span className="visually-hidden">{props.name}</span>
                </button>
            </div>                                                               
        </li>
        );
    }
```

### 2. Form.js
```jsx
    import React, {useState} from "react"

    const Form = (props) => {

        const [name, setName] = useState('')

        function handleSubmit(e) {
            e.preventDefault();
            props.addTask(name)
            setName("");
        }
        
        function handleChange(e){
            setName(e.target.value);
        }

        return(
            <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
                Hey there, what do you need to do today? 🔥
            </label>
            </h2>
            <input 
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value = {name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
            Add
            </button>
        </form>
        )
    }

    export default Form;
```

The final `App.js` file is shown below:
```jsx
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import React, {useState} from "react";
import {nanoid} from "nanoid";



function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const addTask = (name) => {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
    // FILTERING AND COUNTING REMAINING TASKS
    const remainingTasks = tasks.filter(task => task.completed==false);
    const tasksNoun = remainingTasks.length!== 1 ? 'tasks' : 'task';
    const headingText = `${remainingTasks.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>📝 Todo List </h1>
      <Form addTask={addTask}/>

      <h2 id = "list-heading">
        {headingText}
      </h2> 

      <br>
      </br>

      <ul 
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}

      </ul>
    </div>
  );
}

export default App;
```

## Check it out:
- [React ToDo List App](http://react-todo-list.decoroustea.xyz/)
- [Github Link](https://github.com/tristanjoshuaalba/react-todo-list)

<div className="Image__Small">
  <img
    src="./images/screenshot-todo-list.png"
    title="Prettified ToDo List App"
    alt="Looking good!"
  />
</div>

## Useful references:
[React Todo List - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)


<!-- It's 2:47PM and I'm changing this file to make a new commit. 
My first post using `@narative/gatsby-theme-novela`. Novela is built by the team at [Narative](https://narative.co), and built for everyone that loves the web.

## Headers

# H1

It is recommended to NOT use H1s as it is reserved for the article heading. Any H1 is set as an H2.

## H2

### H3

#### H4

##### H5

###### H6

## Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

1. First ordered list item
2. Another item
3. Actual numbers don't matter, just that it's a number

- Unordered list can use asterisks

* Or minuses

- Or pluses

## Links

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

<div className="Image__Small">
  <img
    src="./images/article-image-2.jpg"
    title="Logo Title Text 1"
    alt="Alt text"
  />
</div>

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.

## Code and Syntax Highlighting

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

### JSX

```jsx
import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
```

## Blockquotes

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

## Horizontal Rule

Horizontal Rule

Three or more...

---

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

---

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum -->
