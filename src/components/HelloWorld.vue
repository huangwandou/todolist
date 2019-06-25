<template>
  <div id="tab">
    <div class="tab-tit">
      <a href="javascript:;" @click="curId=0" :class="{'cur':curId === 0}">html</a>
      <a href="javascript:;" @click="curId=1" :class="{'cur':curId === 1}">css</a>
      <a href="javascript:;" @click="curId=2" :class="{'cur':curId === 2}">javascript</a>
      <a href="javascript:;" @click="curId=3" :class="{'cur':curId === 3}">vue</a>
    </div>
    <div class="tab-con">
      <div v-show="curId===0">html</div>
      <div v-show="curId===1">css</div>
      <div v-show="curId===2">javascript</div>
      <div v-show="curId===3">vue</div>
    </div>
    <h1>
      <router-link to="todolist">跳转至todolist</router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      curId: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #tab{
        width: 600px;
        margin: 0 auto;
    }
    .tab-tit{
        font-size: 0;
        width: 600px;
    }
    .tab-tit a{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        width: 25%;
        text-align: center;
        background: #ccc;
        color: #333;
        text-decoration: none;
    }
    .tab-tit .cur{
        background: #09f;
        color: #fff;
    }
    .tab-con div{
        border: 1px solid #ccc;
        height: 400px;
        padding-top: 20px;
    }
</style>
