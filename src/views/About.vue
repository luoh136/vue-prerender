<template>
  <div class="about">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '等待加载'
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.msg = '异步加载数据'
    }
  }
}
</script>