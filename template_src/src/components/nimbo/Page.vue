<template>
  <div class="nb-page">
    <slot></slot>
  </div>
</template>

<script>


export default {
  name: 'page',
  mounted(){
      //this.msg = document.getElementById("demo").src;
     // alert('mounted')
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
.nb-page{
  padding: 20px;
  position: absolute;
  top:0px;
  left:0%;
  width: 100%;
  bottom:0px;
  background: white;
}
</style>
