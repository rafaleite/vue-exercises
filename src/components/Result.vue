<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Double is {{ doubleValue }} </p>
    <p>A: {{ $store.getters['counter/doubleCounter'] }}</p>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters('counter', {
      counter: 'stringCounter',
      doubleValue: 'doubleCounter'
    }),
    teste() {
      console.log(this.$store.getters['counter/doubleCounter'])
    }
  }
}
</script>
