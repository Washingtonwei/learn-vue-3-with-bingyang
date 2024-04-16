<template>
  <div>
    <header>
      <!-- We want header content here. -->
      <slot name="header"></slot>
    </header>
    <main>
      <!-- We want main content here. -->
      <slot name="main"></slot>
    </main>
    <footer>
      <!-- We want footer content here. -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped></style>
