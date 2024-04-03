<template>
  <div>Hello world!</div>
  <span>{{ version }}</span>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed } from 'vue';

defineOptions({ name: 'MyTest' });

const $q = useQuasar();

const version = computed(() => $q.version);
</script>

<style scoped lang="scss"></style>
