<template>
	<div class="article-detail-wrapper">
		<div class="article-detail-title">
			文章详情
		</div>
		<div class="article-box">
			<div class="article-box-title">
				<h1>Hello World</h1>
				<div class="meta">
					<div class="date">
						<span class="iconfont icon-shijian2"></span>
						<span class="value">2018-12-17</span>
					</div>
					<div class="catelog">
						<span class="iconfont icon-fenlei"></span>
						<span class="value">前端</span>
					</div>
					<div class="thumbup">
						<span class="iconfont icon-dianzan3"></span>
						<span class="value">点击</span>
					</div>
				</div>
			</div>
			<div class="article-body" v-compiledMarkdown>
				  内容
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		components: {
    	},
		data () {
			return {
				articleDetail: {}
			}
		},
		created(){
			this.$Progress.start()
		},
		mounted() {
			this.$Progress.finish()
		},
		methods: {

		},		
		directives:{
        	compiledMarkdown: {
        		bind: function(el){

        		}
        	}
		}
	}
</script>
<style lang="scss" scoped>
     .article-detail-wrapper{
    	flex: 1;
    	margin-top: 60px;
    	margin-left: 30px;
        border-radius: 3px;
        .article-detail-title{
            padding: 15px;
            margin-bottom: 10px;
            color: #666;
            background: #fff;
            border-bottom: 1px solid #f0f0f0;
            font-size: 14px;
    	}
    	.article-box{
    		background: #fff;
    		.article-box-title{
    			padding: 10px;
				h1{
					margin: 0;
					color: #40759b;
					text-align: left;
					border-bottom: 1px solid #d8e2eb;
					padding-bottom: 10px;
					font-weight: bold;
					font-size: 22px;
					line-height: 1.1;
				}
				.meta{
					padding: 0;
				    margin: 10px 0 0;
				    color: #333;
				    font-size: 14px;
				    line-height: 24px;
				    min-height: 24px;
				    text-indent: .15em;
				    display: flex;
				    .date{
				    	display: flex;
				    	margin-right: 8px;
				    	cursor: pointer;
						span{
							height: 16px;
						    line-height: 16px;
						    margin-right: 2px;
    						display: inline-block;
						}
				    }
				    .catelog{
				    	display: flex;
				    	margin-right: 8px;
				    	cursor: pointer;
						span{
							height: 16px;
						    line-height: 16px;
						    margin-right: 2px;
    						display: inline-block;
						}
				    }
				    .thumbup{
				    	display: flex;
				    	margin-right: 8px;
				    	cursor: pointer;
						span{
							height: 16px;
						    line-height: 16px;
						    margin-right: 2px;
    						display: inline-block;
						}
				    }
				}
    		}
    	}
    }
</style>