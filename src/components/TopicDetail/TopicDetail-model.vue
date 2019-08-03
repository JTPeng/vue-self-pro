<template>
	<div>
		<p>id:{{$route.params.id}}</p>
		<p>title:{{detail.title}}</p>
    <p>content:{{detail.content}}</p>
	</div>
</template>

<script>
	export default {
		name:'TopicDetail',
		data() {
			return {
				topicDetail: [
        { id: 1, title: "messages001", content: "detail001" },
        { id: 3, title: "messages003", content: "detail003" },
        { id: 5, title: "messages005", content: "detail005" }
      ],
      detail: {}
			}
		},
		mounted(){
			this.showTopicDetail(this.$route)
		},
		watch:{
			$route(value){
				this.showTopicDetail(value);
			}
		},
		methods: {
			showTopicDetail(value){
				const id = value.params.id
				this.detail = this.topicDetail.find(detail => detail.id === +id);
			}
		},
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>