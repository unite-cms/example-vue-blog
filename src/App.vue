<template>
  <div id="app">
    <PageHeader />
    <router-view></router-view>    
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
body {
  background: #efefef;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #3eaf7c;
}

.block {
  box-sizing: border-box;
  border-radius: 3px;
  height: 100%;
  background: white;
  box-shadow: 0 5px 7px 0 rgba(0,0,0,0.1);
  transition: all 0.2s ease-out;
  overflow: hidden;
  position: relative;
  padding: 30px;
}

.block .back {
  font-size: 14px;
  font-weight: bold;
  height: auto;
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 7px 15px 5px;
  background: #3eaf7c;
  color: white;
  border-radius: 2px;
  line-height: 100%;
  text-transform: uppercase;
  text-decoration: none;
}

</style>
