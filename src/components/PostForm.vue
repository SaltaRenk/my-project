<template lang="">
    <form @submit.prevent>
            <h4>Posts Discribe</h4>
            <my-input v-model="post.title" type="text" placeholder="Название"></my-input>
            <my-input v-model="post.body" type="text" placeholder="Описание"></my-input>
            <my-button class="btn" style="align-self: flex-end; margin-top: 15px;" @click="createPost">Создать пост</my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            console.log(this.post);
            this.post = {
                title: '',
                body: ''
            }
        }
    }
    
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
   
</style>