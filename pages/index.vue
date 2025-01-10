<script setup lang="ts">
const { chapters } = useCourse()
const first_lesson = chapters[0].lessons[0]
</script>

<template>
  <div class="index">
    <h3 class="text-xl font-bold text-center">index page</h3>
    <nuxt-link v-if="first_lesson" :to="first_lesson.path">Go to first lesson</nuxt-link>
  </div>
</template>
