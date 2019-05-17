<template>
  <div class="nav">
    <p :class="{active:i==ind}" v-for="(val,i) in msg" :key="i" @click="fn(i)">{{val.names}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ind: 0
    };
  },
  props: ["msg"],
  methods: {
    fn(index) {
      this.ind = index;
      this.$emit("getind", index);
    }
  }
};
</script>

<style>
.nav {
  width: 100%;
  height: 2rem;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
}
.nav p {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav p.active {
  background: #fff;
  color: #000;
  font-weight: bold;
}
</style>
