<script setup lang="ts">
const { chapters } = useCourse();
</script>

<template>
    <div class="mb-12 prose">
      <h1>
        <span class="font-medium">
          Course:
          <span class="font-bold">Mastering Nuxt 3</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] flex flex-col"
      >
        <h3 class="mb-4 font-bold">Chapters</h3>
        <!-- All the lessons for the course listed here -->
        <ul>
          <li class="mb-4" v-for="chapter in chapters" :key="chapter.slug"></li>
          <div v-for="chapter in chapters" :key="chapter.slug">
            <h4 class="mb-4 font-bold">{{ chapter.title }}</h4>
            <ul class="mb-8">
              <li v-for="(lesson, index) in chapter.lessons" :key="lesson.slug">
                <nuxt-link
                  class="block pl-2 mb-3 font-semibold"
                  :to="lesson.path"
                  :class="{
                    'text-blue-500': lesson.path === $route.fullPath,
                  }"
                >
                  <span class="text-gray-500">{{ index + 1 }}.</span>
                  {{ lesson.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </ul>
      </div>

      <div class="prose p-12 bg-red-100 rounded-md w-[65ch]">
        <NuxtPage />
      </div>
    </div>
</template>
