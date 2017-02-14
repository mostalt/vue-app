<template>
  <div class="counter-wrapper">
    <div class="counter">
      {{count}}
    </div>
    <button @click="$store.commit('INCREMENT')">Increment</button>
    <button @click="$store.commit('DECREMENT')">Decrement</button>
  </div>
</template>

<script>
  export default {
    computed: {
      count () {
        return this.$store.state.count
      }
    }
  }
</script>
