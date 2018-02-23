<template>
  <div class="header">
      <div class="bar">


      <h1><slot>Header</slot></h1> 
            </div>
  </div>
</template>

<script>


export default {
  name: 'header',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
    height: 50px;
}
.bar{
    position: absolute;
    top:0px;
    width: 100%;
    height: 50px;
    background: blue;
    left: 0px;
    color: white;
    padding: 0px 20px;
    h1{
        font-size: 20px;
    }
}
</style>
