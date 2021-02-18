<template>
    <div>
        <h2>个人档案</h2>
        <h2>{{$route.query.age}}</h2>
    </div>
</template>

<script>
export default {
    name: "Profile",

    created() {
        console.log('profile created +++++++');
    }
}
</script>

<style scoped>

</style>
