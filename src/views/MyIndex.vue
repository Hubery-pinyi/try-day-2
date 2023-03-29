<template>
  <div>
    <!-- 页面 -->
    <div class="page-cover">
      <!-- 背景+日期 -->
      <div class="news-header">
        <div class="years">{{ year_Calendar }}年 </div>
        <div class="weeks">{{ week_Calendar }}</div>
        <div class="date">{{ month_Calendar }}月{{ date_Calendar }}日
          <van-icon @click="openCalendar" name="arrow-down" />
        </div>
      </div>

      <!-- 没有新闻的显示 -->
      <van-empty description="当前暂无新闻" v-if="newsList.length<=0" />
      <!-- 图片+内容 渲染 -->
      <div v-if="newsList.length>0">
        我是图片
        我是新闻列表

      </div>

    </div>

    <!-- 签阅 -->
    <div class="footer_wrap" v-if="newsList.length>0">
      <div class="qianyue qianyue_box" :class="{'active':time_load>=0}" v-if="!isSigned" @click="sign">签阅 <span v-if="time_load>=0">({{ time_load }})</span></div>
      <div class="yiqianyue qianyue_box" v-if="isSigned"><van-icon name="passed" />您已于{{year_signed}}年{{month_signed}}月{{date_signed}}日签阅本内容</div>
    </div>

    <!-- 日历组件 -->
    <van-calendar v-model="showCalendar" color="#1989fa" @confirm="onCalendarConfirm" :min-date="minDate" :max-date="maxDate" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否显示日历
      date: '',
      showCalendar: false,
      minDate: new Date(2022, 10, 1),
      maxDate: new Date(2023, 3, 28),
      // 初始化日历
      year_Calendar: new Date().getFullYear(),
      month_Calendar: new Date().getMonth() + 1,
      week_Calendar:'',
      date_Calendar: new Date().getDate(),
      // 签阅倒计时
      time_load:10,
      isSigned:false,

      // 格式化签阅的时间
      year_signed:new Date().getFullYear(),
      month_signed:new Date().getMonth()+1,
      date_signed:new Date().getDate(),
      // 新闻列表
      newsList:[]
    }
  },
  created() {
    // 确定星期几
    let week = new Date().getDay()
    this.chooseWeek(week)
    // 签约倒计时
    this.timeLoad()

  },
  methods: {
    // 选择日历
    onCalendarConfirm(date) {
      this.year_Calendar = date.getFullYear()
      this.month_Calendar = date.getMonth() + 1
      this.date_Calendar = date.getDate()
      let week = date.getDay()
      this.chooseWeek(week)
      this.showCalendar = false
    },
    // 将阿拉伯数字转变为星期几
    chooseWeek(week) {
      if (week === 1) {
        this.week_Calendar = '星期一'
      }else if(week===2){
        this.week_Calendar = '星期二'
      }else if (week === 3) {
        this.week_Calendar = '星期三'
      } else if (week === 4) {
        this.week_Calendar = '星期四'
      } else if (week === 5) {
        this.week_Calendar = '星期五'
      } else if (week === 6) {
        this.week_Calendar = '星期六'
      }else if(week===0){
        this.week_Calendar = '星期日'
      }
    },
    //打开日历
    openCalendar() {
      this.showCalendar = true
    },
    // 签阅倒计时
    timeLoad(){
      let timer=setInterval(()=>{
        this.time_load--
      },1000)
      if(this.time_load<=0){
        clearInterval(timer)
      }
    },
    // 签阅
    sign(){
      this.isSigned=true
    }
  },
}


</script>

<style lang="less" scoped>
html {
  background-color: #EBEAE6;

  .page-cover {
    width: 7.5rem;
    margin: 0 auto;

    .news-header {
      position: relative;
      width: 100%;
      height: 1.34rem;
      background-image: url(../assets/news-header.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;

      .years {
        position: absolute;
        left: 3.8rem;
        top: .3rem;
        font-weight: bold;
        color: #131114;
      }

      .weeks {
        position: absolute;
        left: 4.8rem;
        top: .3rem;
        font-weight: bold;
        color: #131114;
      }

      .date {
        position: absolute;
        color: #2c8283;
        font-size: .33rem;
        line-height: .42rem;
        font-weight: bold;
        left: 5.7rem;
        top: .35rem;

      }

    }
  }
  .footer_wrap{
    width: 100%;
    .qianyue_box{
      position: fixed;
      bottom: 0;
      width: 7.5rem;
      height: 1rem;
      background-color: pink;
      line-height: 1rem;
      text-align: center;
      font-size: .34rem;
      // 固定定位到最后
      bottom: 0;
      
    }
    .yiqianyue{
      color:#3975c6;
      background-color: white;
    }
    .qianyue{
      color:white;
      background-color: #3975c6;
    }
    .active{
      color:white;
      background-color: #EFEFEF;
    }
  }
}
</style>
