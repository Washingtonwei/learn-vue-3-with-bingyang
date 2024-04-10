<template>
  <!--The most basic form of data binding is text interpolation using the "Mustache" syntax (double curly braces)-->
  <h1>message: {{ message }}</h1>

  <hr />

  <!--{{message}} refers to the message we defined in data-->
  <h1>number: {{ number }}</h1>

  <h1>doubleNum(50): {{ doubleNum(50) }}</h1>

  <h1>number * 2 = {{ number * 2 }}</h1>

  <h1>
    {{ number > 150 ? 'number is great than 150' : 'number is less than 150' }}
  </h1>

  <h1 v-text="number"></h1>

  <hr />

  <h1>harry: {{ harry }}</h1>

  <h1>harry.name: {{ harry.name }}</h1>

  <h1>hogwartsWizards: {{ hogwartsWizards }}</h1>

  <h1>hogwartsWizards[0]: {{ hogwartsWizards[0] }}</h1>
  <hr />

  <h1>rawHtml: {{ rawHtml }}</h1>

  <h1 v-text="rawHtml"></h1>

  <h1 v-html="rawHtml"></h1>
</template>

<script setup>
let message = 'Hello, Vue!'
let number = 50

function doubleNum(num) {
  return num * 2
}

let harry = {
  id: 1001,
  name: 'Harry Potter',
  house: 'Gryffindor',
  age: 17, // Age during the final battle of Hogwarts
  wand: {
    core: 'Phoenix feather',
    wood: 'Holly'
  }
}
const hogwartsWizards = [
  {
    id: 1001,
    name: 'Harry Potter',
    house: 'Gryffindor',
    age: 17,
    wand: {
      core: 'Phoenix feather',
      wood: 'Holly'
    }
  },
  {
    id: 1002,
    name: 'Hermione Granger',
    house: 'Gryffindor',
    age: 17,
    wand: {
      core: 'Dragon heartstring',
      wood: 'Vine'
    }
  },
  {
    id: 1003,
    name: 'Ron Weasley',
    house: 'Gryffindor',
    age: 17,
    wand: {
      core: 'Unicorn hair',
      wood: 'Willow'
    }
  },
  {
    id: 1004,
    name: 'Draco Malfoy',
    house: 'Slytherin',
    age: 17,
    wand: {
      core: 'Dragon heartstring',
      wood: 'Hawthorn'
    }
  }
]

let rawHtml = '<span style="color: red">This should be red.</span>'
</script>

<style lang="scss" scoped></style>
