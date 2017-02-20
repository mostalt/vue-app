<template>
  <div>
    <h3>TEST COMPONENT</h3>
    <p>{{msg}} sdsads</p>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    propMessage: String
  }
})

export default class App extends Vue {
  // initial data
  msg = 123

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    console.log('greeting: ' + this.msg)
  }
}

</script>
