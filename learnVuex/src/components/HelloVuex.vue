<template>
    <div>
        <h2>hello vuex--------</h2>
        <h2>{{$store.state.counter}}</h2>
        <h2>{{$store.getters.powerCounter}}</h2>
        <h2>{{$store.getters.more20Stu}}</h2>
        <h2>{{$store.getters.more20StuLength}}</h2>
        <h2>{{$store.getters.moreAgeStu(18)}}</h2>
    </div>
</template>

<script>
export default {
    name: 'helloVuex',
    // props: {
    //     counter: Number
    // }
}
</script>

<style scoped>

</style>
