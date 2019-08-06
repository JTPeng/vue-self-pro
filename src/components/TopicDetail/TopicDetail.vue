<template>
  <div>
    <Split/>
    <div class="topicDetailContent">
      <section class="topicDetail">
        <!-- 头部大图 -->
        <div class="tdBigPic">
          <img src="./images/big.jpg" alt=""/>
        </div>
        <Split/>
        <ul class="commentList">
          <li class="commentItem" v-for="(commentList,index) in commentLists[0].result" :key="index">
            <!--    commentList数组        -->
            <div v-for="(selectWomen,index) in commentList" :key="index">
              <div v-for="(women,index) in selectWomen" :key="index">
                <div class="selectWomen" v-if="women.type === 0">
                  <div class="selectTop">
                    <img :src="women.avatar" alt="" class="selectBigPic"/>
                    <span class="">{{women.nickname}}</span>
                  </div>
                  <p class="selectContent">
                    {{women.title}}
                  </p>
                  <div class="selectBG">
                    <img :src="women.picUrl" alt=""/>
                  </div>
                  <p class="selectLook">
                    <i class="iconfont icon-eye"></i>
                    <span>{{women.readCount}}人看过</span>
                  </p>
                </div>
              </div>
            </div>
            <Split/>
            <ul class="userComment">
              <!--{{commentList.topics}}-->
              <li v-for="(comment,index) in commentList.topics" :key="index">
                <div class="commentLeft">
                  <div class="userPicText">
                    <img :src="comment.picUrl" alt=""/>
                    <span>{{comment.nickname}}</span>
                  </div>
                  <p class="userContent">
                    {{comment.title}}
                  </p>
                  <p class="userSuggest">{{comment.subTitle}}</p>
                  <p class="userLook">
                    <i class="iconfont icon-eye"></i>
                    <span>{{comment.readCount}}人看过</span>
                  </p>
                </div>
                <div class="commentRight">
                  <img :src="comment.picUrl" alt=""/>
                </div>
              </li>
            </ul>
            <Split/>
            <div class="aboutUser" v-if="commentList.look">
              <!-- {{commentList}} 代表包裹look/topics的对象 -->
              <div class="userHead">
                <img :src="commentList.look.avatar" alt="">
                <span>{{commentList.look.nickname}}</span>
              </div>
              <p class="userText">{{commentList.look.content}}</p>
              <div class="contentPic"  v-for="(detail,index) in commentList.look.lookPics" :key="index">
                <img :src="detail.picUrl" alt="">
                <div class="goodsText">
                  <span>{{JSON.parse(detail.tagInfo).comment[0].itemName}}<span></span></span>
                  <span class="price">￥{{JSON.parse(detail.tagInfo).comment[0].price}}</span>
                </div>
              </div>
              <div class="userLook">
                <i class="iconfont icon-eye"></i>
                <span>{{commentList.look.readCount}}人看过</span>
              </div>

            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";
  import {reqComment} from "../../api/index.js";

  export default {
    name: "TopicDetail",
    data() {
      return {
        topicDetail: [
          {id: 1, title: "messages001", content: "detail001"},
          {id: 3, title: "messages003", content: "detail003"},
          {id: 5, title: "messages005", content: "detail005"}
        ],
        commentLists: [
          {id: 1}
        ], // 评论数据数组
				page:0,
      };
    },
    async mounted() {
			this.showTopicDetail(this.$route);
			const url = "/topic/v1/find/recAuto.json";
      const res = await reqComment(url, ++this.page, 1);
      // console.log(res);
      if (res.code === '200') {
        this.commentLists = [{...this.commentLists[0], ...res.data}];
				// this.commentLists = res.data.result;
				console.log(this.commentLists)
      }
      // console.log(this.commentLists);
      // console.log(this.commentLists[0].result[0].look);  //object
      // console.log(this.commentLists[0].result)
      // console.log(this.commentLists[0].result[0]); // arr
      // console.log(this.commentLists[0].result[0].topics[0]); // object
      // console.log(this.commentLists[0].result[0].topics[0].type);  // object
      this.$nextTick(() => {
        this.scroll = new BScroll(".topicDetailContent", {
					click: true,
					pullDownRefresh:{
						threshold:-10,
						stop:20
					},
          pullUpLoad: {
            threshold: -10
          },
					probeType:3,
					startY:0,
				});
				this.scroll.on("pullingDown", async()=>{
					const res = await reqComment(url, ++this.page, 5);
					if (res.code === '200') {
						console.log(this.commentLists[0].result,res.data.result)
						this.commentLists = [{...this.commentLists[0],...res.data}];
						// this.commentLists = [{...this.commentLists[0].result,...res.data}];
						// this.commentLists = res.data.result;
						console.log(this.commentLists)
					}
					this.scroll.finishPullDown()
				})
				this.scroll.on("pullingUp", async()=>{
					const res = await reqComment(url, ++this.page, 5);
					if (res.code === '200') {
						console.log(this.commentLists[0].result,res.data.result)
						this.commentLists = [{...this.commentLists[0],...res.data}];
						// this.commentLists = [{...this.commentLists[0].result,...res.data}];
						// this.commentLists = res.data.result;
						console.log(this.commentLists)
					}
					this.scroll.finishPullUp()
				})
      });

    },
    watch: {
      $route(value) {
        this.showTopicDetail(value);
      }
    },
    methods: {
      showTopicDetail(value) {
        const id = value.params.id;
        this.detail = this.topicDetail.find(detail => detail.id === +id);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topicDetailContent
    width 100%
    height 600px
    /* 内容评论 */

    .topicDetail
      width 100%

      .tdBigPic
        width 100%
        background-color #ffffff
        box-sizing border-box
        padding 10px

        img
          width 100%

    .commentList
      width 100%
      box-sizing border-box
      padding 10px

      .commentItem
        width 100%

        .selectWomen
          width 100%

          .selectTop
            width 100%
            display flex
            align-items center

            .selectBigPic
              border-radius 50%
              width 30px
              height 30px

            span
              color #000
              margin-left 10px
              font-size 16px

          .selectContent
            font-size 20px
            margin-top 10px
            color #000
            overflow hidden

          .selectBG
            margin-top 10px

            img
              width 100%
              height 200px

          .selectLook
            display flex
            align-items center

            i
              font-size 25px

            span
              margin-left 5px
              font-size 16px

      .userComment
        width 100%
        box-sizing border-box
        padding 15px
        background-color #fff

        li
          width 100%
          display flex

          .commentLeft
            width 60%
            background-color #fff

            .userPicText
              width 100%
              display flex
              align-items center

              img
                width 30px
                height 30px
                border-radius 50%

              span
                font-size 16px
                margin-left 10px

            .userContent
              margin-top 10px
              font-size 18px

            .userSuggest
              margin-top 8px
              font-size 14px
              color #c0c0c0

            .userLook
              margin-top 15px
              display flex
              align-items center

              i
                font-size 25px

              span
                margin-left 5px
                font-size 16px

          .commentRight
            width 40%

            img
              width 100%
              height 120px
              border-radius 5px

      .aboutUser
        width: 100%
        box-sizing border-box
        padding 10px

        .userHead
          width: 100%
          display flex
          align-items center

          img
            width 40px
            height 40px
            border-radius 50%

          span
            margin-left 10px

        .userText
          font-size 18px
          line-height 22px

        .contentPic
          width 100%
          margin-top 10px
          position relative

          img
            width 100%

          .goodsText
            position absolute
            left 200px
            top 200px
            font-size 14px
            display flex
            flex-direction column
            background-color #fff
            padding 4px 8px
            border-radius 5px

            span
              display inline-block
              color #000

              span
                width 8px
                height 8px
                border-radius 50%
                background-color #f48f18
                margin-left 10px

            .price
              color #f00
              margin-top 5px
              text-align right

        .userLook
          color #333
          display flex
          align-items center

          i
            font-size 28px

          span
            font-size 18px
</style>