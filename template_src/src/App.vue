<template>
  <div class="none">
    
    
    <nb-page>
        <nb-header>My header</nb-header>
        <router-link to="/page">Page 2</router-link>
<img id="demo" src="./assets/logo.png">
    <h1>{{ msg }}</h1>

    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    </ul>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


</style>
