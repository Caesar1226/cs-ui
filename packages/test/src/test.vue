<template>
    <div class="cs-test" @click="handleClick">{{num}}</div>
</template>

<script>

    export default {
        name: 'CsTest',
        data() {
            return {
                num: 0
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
            handleClick: function(){
                this.num++;
            }
        }
    }
</script>

<style lang="scss">
    .cs-test {
        width: 100px;
        height: 100px;
        line-height: 100px;
        border-radius: 50%;
        font-size: 30px;
        text-align: center;
        background: #24292e;
        color: white;
    }
</style>
