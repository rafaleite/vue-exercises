<template>
    <p>Counter is: {{ $store.state.counter }}</p>
</template>

<script>
    export default {
      computed: {
        counter() {
          return this.$store.state.counter
        }
      }
    }
</script>
