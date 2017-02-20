<template>
  <div class="page">
    <Counter/>
    <Test/>
    <Hello/>
  </div>
</template>

<script>
  import Hello from '../components/Hello.vue'
  import Counter from '../components/Counter.vue'
  import Test from '../components/Test.vue'

  export default {
    components: {
      Hello,
      Counter,
      Test
    }
  }

</script>
