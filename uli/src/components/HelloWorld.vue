<template>
  <h2>
    <p>name:{{name}}</p>
    <p>age:{{age}}</p>
  </h2>
  
</template>

<script>
export default {
  props:{
    name:String,
    age:{
      type:[Number,String],
      default:"啊哒哒哒",
      required: true
    }
  }
}
</script>

<style>

</style>
