<template>
  <h1>{{ message }}</h1>

  <!-- replaceText is the name of a function defined in the script -->
  <button v-on:click="replaceText('v-on is fun!')">Replace text</button>

  <!-- v-on:click shortens to @click -->
  <button @click="replaceText('v-on is fun!')">Replace text</button>

  <hr />

  <!-- using $event special variable to access native DOM event -->
  <p>An input field where the user can ONLY enter numbers:</p>
  <input type="text" @keydown="handleInput($event)" />

  <hr />
  <p>A demo of preventing the default behavior of an event.</p>
  <p>Right click in the cyan box below will not show the context menu:</p>
  <div
    style="width: 100px; height: 100px; background-color: aqua"
    @contextmenu.prevent="console.log('Show a custom context menu instead.')"
  ></div>

  <hr />

  <p>A demo of stopping event propagation:</p>

  <div id="mouseover" @mouseover="fun1">
    <textarea @mouseover.stop="fun2($event)">This is a text area.</textarea>
  </div>
  <!-- Since textarea is nested within div, mouseover textarea also means mouseover the parent div. -->

  <hr />
  <div>
    Press down the "Enter" key will trigger a console log print:
    <input
      type="text"
      @keydown.enter="console.log('You pressed the Enter key.')"
    />
  </div>
  <div>
    Press down the "Arrow Down" key will trigger a console log print:
    <input
      type="text"
      @keydown.down="console.log('You pressed the Arrow Down key.')"
    />
  </div>
  <div>
    Press down the "Space" key will trigger a console log print:
    <input
      type="text"
      @keydown.space="console.log('You pressed the Space key.')"
    />
  </div>
  <div>
    Press down the "b" key will trigger a console log print:
    <input type="text" @keydown.b="console.log('You pressed the B key.')" />
  </div>
  <div>
    Press down the "Ctrl c" will trigger a console log print:
    <input type="text" @keydown.ctrl.c="console.log('You pressed Ctrl c.')" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('Hello, v-on!')

function replaceText(msg) {
  message.value = msg
}

function handleInput(event) {
  // get the key code of the key pressed by user
  let keyCode = event.keyCode
  // if the key pressed is not a number key (0 - 9), don't show in the input box
  if (keyCode < 48 || keyCode > 57) {
    // vanilla JS code:
    event.preventDefault()
  }
}

function fun1() {
  console.log('mouse over div')
}

function fun2(event) {
  console.log('mouse over textarea')
}
</script>

<style scoped>
#mouseover {
  text-align: right;
  background-color: purple;
  width: 300px;
  height: 300px;
}
</style>
