<template>
    <div class='bar'>
        <h1>Bar</h1>
        <p>ajax数据：{{bar}} </p>
    </div>
</template>

<script>
    export default {
        name: "Bar",
        asyncData({store}) {
            return store.dispatch('fetchBar');
        },
        computed: {
            bar() {
                return this.$store.state.bar;
            }
        },
        created() {
            console.log('bar created');
        }
    }
</script>

<style scoped>
    .bar{
        background: blue;
    }
</style>
