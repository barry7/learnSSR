<template>
    <div class='foo'>
        <h1>Foo</h1>
        <p>ajax数据：{{foo}} </p>
    </div>
</template>

<script>
    export default {
        name: "Foo",
        asyncData({store}) {
            return store.dispatch('fetchFoo');
        },
        computed: {
            foo() {
                return this.$store.state.foo;
            }
        },
        created() {
            console.log('foo created');
        }
    }
</script>

<style scoped>
    .foo{
        background: yellow;
    }
</style>
