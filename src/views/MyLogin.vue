<template>
  <div class="page-cover" style="overflow:hidden">
    <div class="login-text">景尚旅业</div>
    <div class="app-text">景尚日报</div>
    <div class="btn-wrap">
      <van-button @click.native="dengluhandler" round class="login-btn" type="info" color="#07C160">确认授权</van-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyLogin',
  components: {},
  created(){
    //需要验证token-----------------------------------


  },
  methods:{
    dengluhandler(){
      console.log(111);
      // 点击授权,跳转到index页面.
    }
  }
}
</script>

<style lang="less" scoped>
.page-cover{
  width: 7.5rem; 
  margin:0 auto;
  .login-text{
    font-size: .48rem;
    margin-top: 1rem;
    margin-left: .44rem;
    font-weight: bold;
    color: #333;
  }
  .app-text{
    font-size: .36rem;
    color: #666;
    text-align: center;
    margin-top: 1.33rem;
  }
  .btn-wrap{
    width: 90%;
    margin-left: 5%;
    .login-btn{
      width: 100%;
      margin-top: .1875rem;
    }
  }

}



</style>
