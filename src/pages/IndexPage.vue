<template>
  <q-page class="row items-center justify-evenly">
    <q-btn
      no-caps
      label="Show Quasar Version at the buttom of page"
      @click="onclickFun"
    />
  </q-page>
</template>

<script setup lang="ts">
import { defineCustomElement } from 'vue';
import MyTest from './MyTest.vue';

defineOptions({
  name: 'IndexPage',
});

const onclickFun = () => {
  const MyVueElement = defineCustomElement(MyTest);
  customElements.define('my-vue-element', MyVueElement);
  document.body.appendChild(new MyVueElement());
};
</script>
