<template>
  <div class="none">

    <nb-page>
        <nb-header><a @click="$router.go(-1)"> back</a> Page 2</nb-header>
        pagina 2
    </nb-page>

  </div>
</template>

<script>

import Header from './components/nimbo/Header.vue';

export default {
  name: 'app',
  components:{'nb-header': Header},
  mounted(){
      //this.msg = document.getElementById("demo").src;
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
