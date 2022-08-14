import MaButton from '@misteraladin/frontend-ui/src/lib-components/atoms/button/MaButton.vue';
import '@misteraladin/frontend-ui/dist/styles/index.min.css';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('MaButton', MaButton);
})
