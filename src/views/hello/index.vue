<template>
  <div class="hello">
    aa
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'hello',
  data() {
    return {
      show: false,
    }
  },
  props: {
    msg: String
  },
  created() {
    this.getA()
  },
  methods: {
    async getA() {
      const res = await this.$store.dispatch('getAA')
      console.log(res)
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text_test {
  font-size: 10px;
  width: 200px;
  height: 300px;
  overflow: hidden;
  // white-space: normal;
  overflow: hidden;
  word-wrap: break-word;

  margin-left: 50%;
  transform: translateX(-50%);
}
.border_test {
  width: 60px;
  height: 60px;
  border: 10px solid red;
  border-radius: 15px;
  background: url(https://cmspic-10004025.image.myqcloud.com/6/e4deced0-ca37-11e9-b824-a9fe8e706bb5_size_138x141) no-repeat center;
  background-size: cover;
}
.outer_test {
    height: 10px;
    line-height: 10px;
  .icon_test {
    // font-size: 10px;
    padding-left: 30px;
    background: url(https://cmspic-10004025.image.myqcloud.com/6/e4deced0-ca37-11e9-b824-a9fe8e706bb5_size_138x141) no-repeat left;
    background-size: 30px 30px;
    // background-origin: content-box;
  }
}
.pic-width {
  width: 500px;
  height: 500px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hi {
  color: red;
}
</style>
