import { defineCustomElement } from 'vue';
import MyTest from './MyTest.vue';

const MyVueElement = defineCustomElement(MyTest);
customElements.define('my-vue-element', MyVueElement);

export default function useTest() {
  const a = document.body.appendChild(new MyVueElement());
  setTimeout(() => {
    document.body.removeChild(a);
  }, 3000);
}
