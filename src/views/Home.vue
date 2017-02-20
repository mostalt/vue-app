<template>
  <div class="page">
    <Counter/>
    <Hello/>
  </div>
</template>

<script>
  import Hello from '../components/Hello.vue'
  import Counter from '../components/Counter.vue'

  export default {
    components: {
      Hello,
      Counter
    }
  }

</script>
