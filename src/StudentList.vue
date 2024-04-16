<template>
  <ul>
    <li v-for="student in list" :key="student.id">
      <slot :stu="student">
        {{ student.name }}
      </slot>
    </li>
  </ul>
</template>

<script setup>
defineProps(['list'])
</script>

<style scoped></style>
