<template lang="">
    <div>
        <input :value="value" @input="updateInput" class="input" type="text">
    </div>
</template>

<script>
export default {
    name: 'my-input',
    props: {
        value: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>

<style scoped>
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}
    
</style>