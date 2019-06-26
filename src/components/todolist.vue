<template>
  <div id="tab" class="main">
    <h2>小目标列表</h2>
    <div class="list">
      <h3>添加小目标</h3>
      <input
        type="text"
        class="text-keyword"
        placeholder="输入小目标后，按回车确认"
        @keyup.13="addList"
        v-model="addText"
      >
      <p>共有{{list.length}}条目标，{{noend === 0 ? "全部完成了" : "已完成" + (list.length - noend) + "条，还有" + noend + "条未完成" }}</p>
      <p>
        <input type="radio" name="chooseType" checked="true" @click="chooseList(1)"><label>所有目标</label>
        <input type="radio" name="chooseType" @click="chooseList(2)"><label>已完成目标</label>
        <input type="radio" name="chooseType" @click="chooseList(3)"><label>未完成目标</label>
      </p>
    </div>
    <ul class="ulTable">
      <li class="li1" v-for="(item,index) in newList" v-bind:key="item.name+index" :class="{'eidting':curIndex === index}">
        <div>
          <span class="status-span" :class="{'status-end':item.status}" @click="changeType(index)"></span>
          <span @dblclick="curIndex=index">{{item.name}}</span>
          <span class="close" @click="deleteItem(index)">X</span>
        </div>
        <input
          type="text"
          class="text2"
          v-model="item.name"
          @keyup.enter="edited"
          @keyup.esc="cancelEdit(item)"
          @focus="editBefore(item.name)"
          v-focus
        >
      </li>
    </ul>
    <h1>
      <router-link to="vuexdemo">跳转至vuex练习</router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'todolist',
  data () {
    return {
      addText: '',
      list: [{
        name: '11111',
        status: false
      }, {
        name: '22222',
        status: false
      }, {
        name: '33333',
        status: false
      }, {
        name: '44444',
        status: false
      }],
      newList: [],
      beforeEditText: '',
      curIndex: '',
      curType: 1
    }
  },

  computed: {
    noend: function () {
      return this.list.filter(item => item.status === false).length
    }
  },

  methods: {
    addList () {
      this.list.push({
        name: this.addText,
        status: false
      })
      this.addText = ''
    },

    changeType (index) {
      this.list[index].status = !this.list[index].status
      this.chooseList(this.curType)
    },

    chooseList (type) {
      console.log('type', type)
      this.curType = type
      switch (type) {
        case 1: this.newList = this.list
          break
        case 2: this.newList = this.list.filter(item => item.status === true)
          break
        case 3: this.newList = this.list.filter(item => item.status === false)
          break
      }
    },

    deleteItem (index) {
      this.list.splice(index, 1)
      this.newList = this.list
      this.chooseList(this.curType)
    },

    editBefore (name) {
      this.beforeEditText = name
    },

    edited () {
      console.log('this.curIndex', this.curIndex)
      this.curIndex = ''
    },

    cancelEdit (val) {
      // 上面说了输入框利用v-model绑定了当前项（比如这一项，{name:"HTML5",status:false}）的name,当在输入框编辑的时候，比如改成‘HTML’,实际上当前项的name已经变成了‘HTML’，所以，这一步就是把之前保存的beforeEditText赋值给当前项的name属性，起到一个恢复原来值得作用！
      val.name = this.beforeEditText
      this.curIndex = ''
    }

  },

  mounted () {
    this.newList = this.list
  },

  // 自定义指令
  directives: {
    'focus': {
      update (el) {
        el.focus()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{font-family: "微软雅黑";font-size: 14px;}
  input{font-size: 14px;}
  body,ul,div,html{padding: 0;margin: 0;}
  .hidden{display: none;}
  .main{width: 800px;margin: 0 auto;}
  li{list-style-type: none;line-height: 40px;position: relative;border: 1px solid transparent;padding: 0 20px;}
  li .status-span{display: block;width: 10px;height: 10px;background: #ccc;margin: 14px 10px 0 0 ;float: left;}
  li .status-span.status-end{
      background: #09f;
  }
  li .close{position: absolute;color: #f00;font-size: 20px;line-height: 40px;height: 40px;right: 20px;cursor: pointer;display: none;top: 0;}
  li:hover{border: 1px solid #09f;}
  li:hover .close{display: block;}
  li div{display: block;}
  li.eidting div{display: none;}
  li .text2{height: 40px;padding-left: 10px;box-sizing: border-box;margin-left: 10px;width: 80%;display: none;}
  li.eidting .text2{display: block;}
  li .text-keyword{height: 40px;padding-left: 10px;box-sizing: border-box;margin-left: 10px;width: 80%;display: none;}
  .text-keyword{box-sizing: border-box;width: 100%;height: 40px;padding-left: 10px;outline: none;}
</style>
