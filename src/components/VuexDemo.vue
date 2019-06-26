<template>
  <div>
    <h2>我是从页面上直接获取的值，{{this.$store.state.count}}</h2>
    <h2>我是从getters获取的计算后的值，{{this.$store.getters.getStateCount}}</h2>

    <p>count的值，{{this.$store.state.count}}</p>
    <button @click="addFun">+</button>
    <button @click="reduction">-</button>

    <div style="border: 1px solid red; margin-top: 50px">{{count1}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'VuexDemo',
  data () {
    return {
      curId: 0
    }
  },
  computed: {
    ...mapState({
      count1: state => state.count
    })
  },

  methods: {
    addFun: function () {
      var n = 10
      this.$store.dispatch('addFun', n)
    },

    reduction: function () {
      var n = 10
      this.$store.dispatch('reductionFun', n)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
