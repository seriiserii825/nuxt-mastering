<script setup>
const course = useCourse();
const route = useRoute();

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});
useHead({
  title: `${lesson.value.title} - ${course.title}`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: lesson.value.text,
    },
  ],
})
</script>
<template>
  <div>
    <p class="mt-0 mb-1 font-bold uppercase text-slate-400">
      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex mt-2 mb-8 space-x-4">
      <nuxt-link
        v-if="lesson.sourceUrl"
        target="_blank"
        class="font-normal text-gray-500 text-md"
        :href="lesson.sourceUrl"
      >
        Download Source Code
      </nuxt-link>
      <nuxt-link
        v-if="lesson.downloadUrl"
        class="font-normal text-gray-500 text-md"
        target="_blank"
        :href="lesson.downloadUrl"
      >
        Download Video
      </nuxt-link>
    </div>
    <VideoPlayer class="mb-6" v-if="lesson.videoId" :videoId="lesson.videoId" />
    <p>{{ lesson.text }}</p>
  </div>
</template>

