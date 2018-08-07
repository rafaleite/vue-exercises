<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Double is {{doubleValue}} </p>
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      counter: 'stringCounter',
      doubleValue: 'doubleCounter'
    })
  }
}
</script>
