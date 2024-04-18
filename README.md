# Learn Vue 3 with Bingyang

Welcome! This repository is designed for my free YouTube course <a href="https://www.youtube.com/playlist?list=PLqq9AhcMm2oMvar6SRrKdCQsrBUbYicqA" target="_blank">"Learn Vue 3 with Bingyang" ![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a>. This repository provides hands-on coding examples covering a wide range of Vue.js concepts. Each Git branch within this repository focuses on a specific Vue.js feature or concept, offering a unique, isolated environment for learners to explore and understand Vue's capabilities in depth.

## Vue Concepts Covered

Here is a list of the concepts you will find in this repository. You can click on the branch name to access the tutorial code.

| Branch Name                                                  | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/mustache-notation" target="_blank">mustache-notation</a> | Vue utilizes the double curly braces {{   }} syntax to denote the places within the template where data should be interpolated. Whatever is inside the braces is treated as a JavaScript expression, and Vue will evaluate it and insert the result into the DOM at the respective location. The mustache notation or text interpolation is a fundamental concept used to bind data to the textual content of DOM elements. It abstracts away most of the direct DOM operations for you. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/v-bind" target="_blank">v-bind</a> | v-bind is a directive used to bind an HTML attribute to a JavaScript expression. It allows you to dynamically set one or more attributes of an HTML element to the value of a JavaScript expression. One important use case is manipulating an HTML element's class list and inline styles. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/reactivity" target="_blank">reactivity</a> | When a Vue instance is created, it adds all the ref() data to Vue's reactivity system, making them "reactive". When the reactive data change, the HTML will "react", updating to match the new values. This system makes it easy to build dynamic web applications where changes in the application state are immediately reflected in the UI without explicit DOM manipulation. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/v-on" target="_blank">v-on</a> | The v-on directive is used to listen to DOM events and execute some JavaScript when they occur. It offers many convenient key modifiers, like .prevent and .stop, and many key modifiers to simplify your job. If you want to access the original DOM event in an event handling function, you can pass it into a function using the special $event variable. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/v-model" target="_blank">v-model</a> | You can use v-model directive to create bidirectional or two-way data binding on form input. For example, input, text area, and select. Vue automatically picks the correct way to update the element based on the input type. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/v-model-vs-v-bind" target="_blank">v-model-vs-v-bind</a> | v-model = v-bind + @input Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/v-if" target="_blank">v-if</a> | The v-if directive is used for conditional rendering of elements. It evaluates a JavaScript expression, and if the expression returns a truthy value, the element and its children are rendered in the DOM. If the expression returns a falsy value, the element is not rendered. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/v-for" target="_blank">v-for</a> | The v-for directive is used for rendering a list of items by iterating over an array or an object. It allows you to template a block of HTML elements that will be rendered once for each item in the collection, creating a dynamic list of elements based on data from your Vue instance or component. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/array-change-detection" target="_blank">array-change-detection</a> | Vue is able to detect when a reactive array's mutation methods are called and trigger necessary updates. These mutation methods are: push(), pop(), shift(), unshift(), splice(), sort(), reverse(). Non-mutating array methods like filter(), concat(), and slice() do not mutate the original array but always return a new array. When working with non-mutating methods, you SHOULD replace the old array with the new one. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/computed-properties" target="_blank">computed-properties</a> | Computed properties allow you to define a property that is calculated based on other data properties in your Vue instance or component. When any of the dependencies change, Vue automatically recalculates the computed property and updates the DOM accordingly. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/watchers" target="_blank">watchers</a> | Vue watchers allow you to perform actions in response to changes in your component's data. Watchers are particularly useful for cases where you need to perform asynchronous or expensive operations in response to data changes, or when you need more fine-grained control over the reaction to changes than computed properties or methods can offer.<br/>I covered four scenarios of using watchers: <br> Scenario 1: Watch a "ref(primitive value)" <br> Scenario 2: Watch a property in a "ref(object)" <br> Scenario 3: Watch a "ref(object)" <br> Scenario 4: Watch an array of "ref(primitive value)", a property of a "ref(object)", and "ref(object)" <br> Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/watchEffect" target="_blank">watchEffect</a> | watchEffect is a function that automatically tracks reactive dependencies and re-runs when any of them change. Unlike watch, which requires specifying the exact reactive sources to observe, watchEffect works by implicitly tracking any reactive properties used inside its callback function. This makes it particularly useful for side effects that depend on multiple reactive sources or for simplifying component logic. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/template-refs" target="_blank">template-refs</a> | While Vue's declarative rendering model abstracts away most of the direct DOM operations for you, there may still be cases where we need direct access to the underlying DOM elements. To obtain the reference to a DOM element, we need to declare a ref() variable with a name that matches the template ref attribute's value. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/lifecycle-hooks" target="_blank">lifecycle-hooks</a> | Vue lifecycle hooks are functions that give you the opportunity to add your own code at specific stages of a component's lifecycle. From setup to unmounted, these hooks allow you to execute code at various points in a component's life, enabling you to integrate your logic seamlessly with Vue's reactivity system. The most commonly used hooks are onMounted, onUpdated, and onUnmounted. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/vue-components-intro" target="_blank">vue-components-intro</a> | Vue components allow developers to break down the application UI into smaller, manageable, and reusable pieces. Think of components as the building blocks of your front-end application. A component encapsulates its own structure (HTML), appearance (CSS), and behavior (JavaScript), encapsulating everything it needs to function independently. Components can be nested. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/vue-components-props" target="_blank">vue-components-props</a> | Props are a mechanism to pass data from a parent component to a child component, allowing the child to receive and use this data in its template or logic. Props are defined in the child component and specify the expected data that should be passed from the parent. Vue enforces a one-way data flow between components. This means that props should not be modified directly within the child component. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/vue-components-events" target="_blank">vue-components-events</a> | Component events are a core mechanism for child components to communicate with their parent components, typically used to signal state changes, user actions, or other significant events that the parent might need to know about. This event-driven communication is essential for maintaining a clean separation of concerns and enhancing component reusability in a Vue application. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/vue-components-v-model" target="_blank">vue-components-v-model</a> | v-model can be used on a component to implement a two-way binding. It simplifies the process of keeping the UI synchronized with the application data, allowing for an interactive user experience. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/vue-components-provide-inject" target="_blank">vue-components-provide-inject</a> | The provide/inject mechanism is used to create a dependency injection system between components. This feature allows deeper nested components to access data from their ancestor components without having to pass props all the way down through intermediate components. This is particularly useful for avoiding "prop drilling" (the process of passing data through multiple layers of components that do not need the data themselves) and can simplify the component architecture significantly. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/vue-slots-intro" target="_blank">vue-slots-intro</a> | Slots allow us to pass a template content from the parent component to a child component. A slot can be seen as a placeholder for template content. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/vue-named-slots" target="_blank">vue-named-slots</a> | Named slots provide a way to distribute content to specific locations within a component's template. This is particularly useful when designing a component that needs to support a more complex content structure than a single default slot can handle. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |
| <a href="https://github.com/Washingtonwei/learn-vue-3-with-bingyang/tree/vue-scoped-slots" target="_blank">vue-scoped-slots</a> | Scoped slots extend the basic functionality of slots by enabling the child component to pass data back to the parent through the slot props. This allows the parent component to access child component data and template structure within its slot, making the slots "scoped" to the parent's data environment. Watch the video: <a href="" target="_blank">![Static Badge](https://img.shields.io/badge/YouTube-white?logo=youtube&logoColor=red)</a> |

## How to Use This Repository

To make the most out of this tutorial series, follow these steps:

### 1. Clone the Repository

First, clone this repository to your local machine using Git:

```sh
git clone https://github.com/Washingtonwei/learn-vue-3-with-bingyang.git
```

### 2. Explore Available Branches

After cloning, you can list all the branches to see the different Vue concepts covered:

```sh
git branch --list -a
```

### 3. Switch Between Branches

To switch to a specific branch and explore a concept, use the following command:

```sh
git switch branch-name
```

Replace `branch-name` with the name of the branch you're interested in. Each branch contains a unique README.md file that provides detailed information about the concept covered.

### 4. Install Dependencies

```sh
npm install
```

### 5. Compile and Hot-Reload for Development

```sh
npm run dev
```

## Feedback

Your feedback is valuable to me! If you have any comments, suggestions, or questions about this tutorial series, please open an issue in this repository.

## License

This repository is licensed under the Apache License Version 2.0 - see the [LICENSE](LICENSE) file for details.
