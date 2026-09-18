<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
  words: string[];
  intervalMs?: number;
}>();

const index = ref(0);
const reduced = ref(false);
let timer: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  reduced.value = mq.matches;

  if (!reduced.value) {
    timer = setInterval(() => {
      index.value = (index.value + 1) % props.words.length;
    }, props.intervalMs ?? 2200);
  }
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <span
    class="relative inline-block h-[1.15em] overflow-hidden align-bottom"
    :style="{ minWidth: Math.max(...words.map((w) => w.length)) + 'ch' }"
  >
    <Transition name="push">
      <span :key="index" class="absolute inset-0 whitespace-nowrap text-[var(--color-accent)]">
        {{ words[index] }}
      </span>
    </Transition>
    <span class="invisible">{{ words[0] }}</span>
  </span>
</template>

<style scoped>
.push-enter-active,
.push-leave-active {
  transition:
    transform 0.45s cubic-bezier(0.65, 0, 0.35, 1),
    opacity 0.3s ease;
}

.push-enter-from {
  transform: translateY(110%);
  opacity: 0;
}

.push-leave-to {
  transform: translateY(-110%);
  opacity: 0;
}
</style>
