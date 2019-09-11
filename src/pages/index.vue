<template lang="pug">
  div.container
    div
      logo
      h1.title nuxtjs-template
      h2.subtitle My tiptop Nuxt.js project
      div.mod
        p {{ counter }}
        button(@click="increment") + 
        button(@click="decrement") -
      div.links
        a(href="https://nuxtjs.org/", title="Documentation", target="_blank").button--green Documentation
        a(href="https://github.com/nuxt/nuxt.js", title="GitHub", target="_blank").button--grey GitHub
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import { CounterStoreModule } from '~/store/modules/counter'
@Component({
  components: {
    Logo
  }
})
export default class Home extends Vue {
  get counter() {
    return CounterStoreModule.value
  }

  increment() {
    CounterStoreModule.increment(1)
  }

  decrement() {
    CounterStoreModule.decrement(1)
  }
}
</script>

<style lang="sass">
.container
  margin: 0 auto
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.title
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px

.links
  padding-top: 15px
</style>
