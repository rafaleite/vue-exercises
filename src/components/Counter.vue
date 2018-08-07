<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({ by: 20, duration: 1000 })">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['increment', 'decrement', 'asyncIncrement'])
  }
};
</script>
