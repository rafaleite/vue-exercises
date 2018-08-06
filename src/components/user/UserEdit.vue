<template>
  <div>
    <h3>Edit the User</h3>
    <p>{{ $route.params.id }} - {{ $route.query.locale }}</p>

    <button class="btn btn-primary" @click="confirmed = !confirmed">Confirm</button>
    <div style="height:700px"></div>
    <p id="data">Some extra data</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        confirmed: false
      }
    },
    beforeRouteLeave (to, from, next) {
      if(this.confirmed) {
        next()
      } else {
        if(confirm('Are tou sure?')) {
          next()
        } else {
          next(false)
        }
      }
    }
  }
</script>
