<template>
  <div id="app">
    <myHeader :msg="msg"  @getind="send"/>
    <mySection :mains="msg[ind]"/>
  </div>
</template>
<script>
import myHeader from "./components/myheader"
import mySection from "./components/mysection"
export default {
  name: 'App',
  components: {
    myHeader,
    mySection
  },
  methods:{
    send(data){this.ind =data;
      // console.log(this.ind)
    }
  },
  data(){
      return {
        ind:0,
        msg:[
          {
            names:"code",
            age:29,
            flag:false
          },
          {
            names:"clannad",
            age:19,
            flag:false
          },
          {
            names:"red",
            age:49,
            flag:false
          },
          {
            names:"geass",
            age:99,
            flag:false
          }
        ]
      }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style:none;
  text-decoration: none;
  user-select: none;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
</style>
