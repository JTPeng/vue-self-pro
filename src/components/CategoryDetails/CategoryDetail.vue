<template>
  <div>
    <div class="categoryDetail">
      <div class="swiper-container" v-if="detail">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(img,index) in detail.contentArr.swipers" :key="index">
            <img :src="img" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- 内容区域-->
      <div class="categoryContent" v-if="detail">
        <ul class="contentList">
          <li class="contentItem" v-for="(textImage,index) in detail.contentArr.textImages" :key="index">
            <img :src="textImage.images" alt="">
            <span>{{textImage.text}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  // 引入Swiper
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";

  // swiper图片引入
  import b1 from './images/tuijian/b1.jpg';
  import b2 from './images/tuijian/b2.jpg';
  import b3 from './images/tuijian/b3.jpg';
  // tuijian图片
  import s1 from './images/tuijian/s1.png'
  import s2 from './images/tuijian/s2.png'
  import s3 from './images/tuijian/s3.png'
  import s4 from './images/tuijian/s4.png'
  import s5 from './images/tuijian/s5.png'
  import s6 from './images/tuijian/s6.png'
  import s7 from './images/tuijian/s7.png'
  import s8 from './images/tuijian/s8.png'
  import s9 from './images/tuijian/s9.png'
  import s10 from './images/tuijian/s10.png'
  // summer轮播图片
  import b_1 from './images/summerCool/b1.jpg'
  import b_2 from './images/summerCool/b2.jpg'
  // summer图片
  import s_1 from './images/summerCool/s1.jpg'
  import s_2 from './images/summerCool/s2.png'
  import s_3 from './images/summerCool/s3.png'
  import s_4 from './images/summerCool/s4.png'
  import s_5 from './images/summerCool/s5.png'
  import s_6 from './images/summerCool/s6.png'
  import s_7 from './images/summerCool/s7.png'
  import s_8 from './images/summerCool/s8.png'
  import s_9 from './images/summerCool/s9.png'

  export default {
    name: 'CategoryDetails',
    data() {
      return {
        images: [b1, b2, b3],
        categoryDetailArr: [],
        detail: {
          id: 1,
          contentArr: {
            swipers: [b_1, b_2, b_2, b_1],
            textImages: [
              {images: s_1, text: '清爽美食'},
              {images: s_2, text: '降温好物'},
              {images: s_3, text: '烈日防晒'},
              {images: s_4, text: '夏季养生'},
              {images: s_5, text: '防蚊驱虫'},
              {images: s_6, text: '夏凉末品'},
              {images: s_7, text: '清凉洗护'},
              {images: s_8, text: '夏日穿梭'},
              {images: s_9, text: '室内必备'}
            ]
          }
        },
      }
    },
    mounted() {
      this.showTopicDetail(this.$route);
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
      setTimeout(() => {
        this.categoryDetailArr = [
          {
            id: 1,
            contentArr: {
              swipers: [b_1, b_2, b_2, b_1],
              textImages: [
                {images: s_1, text: '清爽美食'},
                {images: s_2, text: '降温好物'},
                {images: s_3, text: '烈日防晒'},
                {images: s_4, text: '夏季养生'},
                {images: s_5, text: '防蚊驱虫'},
                {images: s_6, text: '夏凉末品'},
                {images: s_7, text: '清凉洗护'},
                {images: s_8, text: '夏日穿梭'},
                {images: s_9, text: '室内必备'}
              ]
            }
          },
          {
            id: 2,
            contentArr: {
              swipers: [b1, b2, b3, b2, b1],
              textImages: [
                {images: s1, text: '员工精选好物'},
                {images: s2, text: '夏日美食哈哈'},
                {images: s3, text: '居家好物特价'},
                {images: s4, text: '环保厨房好物'},
                {images: s5, text: '员工精选好物'},
                {images: s6, text: '环保厨房好物'},
                {images: s7, text: '居家好物特价'},
                {images: s8, text: '夏日美食哈哈'},
                {images: s9, text: '员工精选好物'},
                {images: s10, text: '夏日美食哈哈'}
              ]
            }
          },
          {
            id: 3,
            contentArr: {
              swipers: [b_1, b_2, b_2, b_1],
              textImages: [
                {images: s_1, text: '清爽美食'},
                {images: s_2, text: '降温好物'},
                {images: s_3, text: '烈日防晒'},
                {images: s_4, text: '夏季养生'},
                {images: s_5, text: '防蚊驱虫'},
                {images: s_6, text: '夏凉末品'},
                {images: s_7, text: '清凉洗护'},
                {images: s_8, text: '夏日穿梭'},
                {images: s_9, text: '室内必备'}
              ]
            }
          },
          {
            id: 4,
            contentArr: {
              swipers: [b1, b2, b3, b2, b1],
              textImages: [
                {images: s1, text: '员工精选好物'},
                {images: s2, text: '夏日美食哈哈'},
                {images: s3, text: '居家好物特价'},
                {images: s4, text: '环保厨房好物'},
                {images: s5, text: '员工精选好物'},
                {images: s6, text: '环保厨房好物'},
                {images: s7, text: '居家好物特价'},
                {images: s8, text: '夏日美食哈哈'},
                {images: s9, text: '员工精选好物'},
                {images: s10, text: '夏日美食哈哈'}
              ]
            }
          },
          {
            id: 5,
            contentArr: {
              swipers: [b_1, b_2, b_2, b_1],
              textImages: [
                {images: s_1, text: '清爽美食'},
                {images: s_2, text: '降温好物'},
                {images: s_3, text: '烈日防晒'},
                {images: s_4, text: '夏季养生'},
                {images: s_5, text: '防蚊驱虫'},
                {images: s_6, text: '夏凉末品'},
                {images: s_7, text: '清凉洗护'},
                {images: s_8, text: '夏日穿梭'},
                {images: s_9, text: '室内必备'}
              ]
            }
          },
          {
            id: 6,
            contentArr: {
              swipers: [b1, b2, b3, b2, b1],
              textImages: [
                {images: s1, text: '员工精选好物'},
                {images: s2, text: '夏日美食哈哈'},
                {images: s3, text: '居家好物特价'},
                {images: s4, text: '环保厨房好物'},
                {images: s5, text: '员工精选好物'},
                {images: s6, text: '环保厨房好物'},
                {images: s7, text: '居家好物特价'},
                {images: s8, text: '夏日美食哈哈'},
                {images: s9, text: '员工精选好物'},
                {images: s10, text: '夏日美食哈哈'}
              ]
            }
          },
          {
            id: 7,
            contentArr: {
              swipers: [b_1, b_2, b_2, b_1],
              textImages: [
                {images: s_1, text: '清爽美食'},
                {images: s_2, text: '降温好物'},
                {images: s_3, text: '烈日防晒'},
                {images: s_4, text: '夏季养生'},
                {images: s_5, text: '防蚊驱虫'},
                {images: s_6, text: '夏凉末品'},
                {images: s_7, text: '清凉洗护'},
                {images: s_8, text: '夏日穿梭'},
                {images: s_9, text: '室内必备'}
              ]
            }
          },
          {
            id: 8,
            contentArr: {
              swipers: [b1, b2, b3, b2, b1],
              textImages: [
                {images: s1, text: '员工精选好物'},
                {images: s2, text: '夏日美食哈哈'},
                {images: s3, text: '居家好物特价'},
                {images: s4, text: '环保厨房好物'},
                {images: s5, text: '员工精选好物'},
                {images: s6, text: '环保厨房好物'},
                {images: s7, text: '居家好物特价'},
                {images: s8, text: '夏日美食哈哈'},
                {images: s9, text: '员工精选好物'},
                {images: s10, text: '夏日美食哈哈'}
              ]
            }
          },
          {
            id: 9,
            contentArr: {
              swipers: [b_1, b_2, b_2, b_1],
              textImages: [
                {images: s_1, text: '清爽美食'},
                {images: s_2, text: '降温好物'},
                {images: s_3, text: '烈日防晒'},
                {images: s_4, text: '夏季养生'},
                {images: s_5, text: '防蚊驱虫'},
                {images: s_6, text: '夏凉末品'},
                {images: s_7, text: '清凉洗护'},
                {images: s_8, text: '夏日穿梭'},
                {images: s_9, text: '室内必备'}
              ]
            }
          },
          {
            id: 10,
            contentArr: {
              swipers: [b1, b2, b3, b2, b1],
              textImages: [
                {images: s1, text: '员工精选好物'},
                {images: s2, text: '夏日美食哈哈'},
                {images: s3, text: '居家好物特价'},
                {images: s4, text: '环保厨房好物'},
                {images: s5, text: '员工精选好物'},
                {images: s6, text: '环保厨房好物'},
                {images: s7, text: '居家好物特价'},
                {images: s8, text: '夏日美食哈哈'},
                {images: s9, text: '员工精选好物'},
                {images: s10, text: '夏日美食哈哈'}
              ]
            }
          },
          {
            id: 11,
            contentArr: {
              swipers: [b_1, b_2, b_2, b_1],
              textImages: [
                {images: s_1, text: '清爽美食'},
                {images: s_2, text: '降温好物'},
                {images: s_3, text: '烈日防晒'},
                {images: s_4, text: '夏季养生'},
                {images: s_5, text: '防蚊驱虫'},
                {images: s_6, text: '夏凉末品'},
                {images: s_7, text: '清凉洗护'},
                {images: s_8, text: '夏日穿梭'},
                {images: s_9, text: '室内必备'}
              ]
            }
          },
          {
            id: 12,
            contentArr: {
              swipers: [b1, b2, b3, b2, b1],
              textImages: [
                {images: s1, text: '员工精选好物'},
                {images: s2, text: '夏日美食哈哈'},
                {images: s3, text: '居家好物特价'},
                {images: s4, text: '环保厨房好物'},
                {images: s5, text: '员工精选好物'},
                {images: s6, text: '环保厨房好物'},
                {images: s7, text: '居家好物特价'},
                {images: s8, text: '夏日美食哈哈'},
                {images: s9, text: '员工精选好物'},
                {images: s10, text: '夏日美食哈哈'}
              ]
            }
          },
          {
            id: 13,
            contentArr: {
              swipers: [b_1, b_2, b_2, b_1],
              textImages: [
                {images: s_1, text: '清爽美食'},
                {images: s_2, text: '降温好物'},
                {images: s_3, text: '烈日防晒'},
                {images: s_4, text: '夏季养生'},
                {images: s_5, text: '防蚊驱虫'},
                {images: s_6, text: '夏凉末品'},
                {images: s_7, text: '清凉洗护'},
                {images: s_8, text: '夏日穿梭'},
                {images: s_9, text: '室内必备'}
              ]
            }
          },
          {
            id: 14,
            contentArr: {
              swipers: [b1, b2, b3, b2, b1],
              textImages: [
                {images: s1, text: '员工精选好物'},
                {images: s2, text: '夏日美食哈哈'},
                {images: s3, text: '居家好物特价'},
                {images: s4, text: '环保厨房好物'},
                {images: s5, text: '员工精选好物'},
                {images: s6, text: '环保厨房好物'},
                {images: s7, text: '居家好物特价'},
                {images: s8, text: '夏日美食哈哈'},
                {images: s9, text: '员工精选好物'},
                {images: s10, text: '夏日美食哈哈'}
              ]
            }
          },
          {
            id: 15,
            contentArr: {
              swipers: [b_1, b_2, b_2, b_1],
              textImages: [
                {images: s_1, text: '清爽美食'},
                {images: s_2, text: '降温好物'},
                {images: s_3, text: '烈日防晒'},
                {images: s_4, text: '夏季养生'},
                {images: s_5, text: '防蚊驱虫'},
                {images: s_6, text: '夏凉末品'},
                {images: s_7, text: '清凉洗护'},
                {images: s_8, text: '夏日穿梭'},
                {images: s_9, text: '室内必备'}
              ]
            }
          }
        ]
      }, 1000)
    },
    watch: {
      $route(value) {
        this.showTopicDetail(value);
      }
    },
    methods: {
      showTopicDetail(value) {
        console.log(1);
        const id = value.params.id;
        // this.detail = this.categoryDetailArr.find(detail => detail.id === +id);
        this.detail = this.categoryDetailArr.find(detail => {
          console.log(detail.id === +id);
          return detail.id === +id
        });
        console.log(this.detail);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .categoryDetail
    width 100%

    .swiper-container
      width 100%
      height 100%

      .swiper-wrapper
        width 100%
        height 100%

        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap

          img
            width 100%
            height 100px

    /* 分类内容区域 */

    .categoryContent
      width 100%

      .contentList
        width 100%
        display flex
        justify-content space-between
        flex-wrap wrap

        .contentItem
          width 30%
          text-align center

          img
            width 90%
            border-radius 50%

          span
            font-size 14px

</style>