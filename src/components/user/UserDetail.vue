<template>
    <div>
        <h3>Some User Details - ID: {{id}} </h3>
        <hr>
        <router-link 
            tag="button"
            class="btn btn-primary"
            :to="link">Edit</router-link>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                link: { name: 'userEdit', 
                        params: { id: this.id }, 
                        query: { locale: 'en' },
                        hash: '#data'}
            }
        }
    }
</script>