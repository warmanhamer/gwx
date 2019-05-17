// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
});
/* 
  <template>
  <div id="app">
    <div class="nav" v-for="(val,i) in msg" :key="i">
      <HelloWorld :name="val.name" :age="val.age"/>
    </div>
  </div>
</template>
*/