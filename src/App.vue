<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <h1>Signup</h1>
                  <hr>
                  <full-name v-model="user.name"></full-name>

                  <div class="form-group">
                    <label for="mail">Email</label>
                    <input type="text" id="mail" class="form-control" v-model="user.email">
                  </div>

                  <div class="form-group">
                    <label for="Password">Password</label>
                    <input type="password" id="password" class="form-control" v-model="user.password">
                  </div>

                  <div class="form-group">
                    <label for="storeData">Store Data</label>
                    <input type="checkbox" id="storeData" v-model="user.storeData">
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button class="btn btn-primary" @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>

        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ user.name }} </p>
                        <p>Mail: {{user.email}} </p>
                        <p>Password: {{user.password}} </p>
                        <p>Store in Database?: {{user.storeData ? 'Yes' : 'No'}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/FullName.vue'
    export default {
      data() {
        return {
          user: {
            name: '',
            email: '',
            password: '',
            storeData: false
          },
          isSubmitted: false
        }
      },
      methods: {
        submitted() {
            this.isSubmitted = true;
        }
      },
      components: {
        FullName
      }
    }
</script>

<style>
</style>
