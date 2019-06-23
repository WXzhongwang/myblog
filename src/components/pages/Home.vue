<template>
	<div class="blog-wrapper">
		<!-- 轮播图 -->
		<carousel></carousel>
		<div class="article-list">
			<div class="hot-article-title">
				<div class="title">热门文章</div>
				<div class="link">
					 <router-link to="/all-articles">
			            <span>全部文章>></span>
			        </router-link>
				</div>
			</div>
			<!-- 最新文章 -->
			<div class="article-item" v-for="(item, index) in articles" :key="index">
				<h2 @click="articlesDetailsFn(item.id)">{{ item.title }}</h2>
				<div class="article-extra">
					<div class="catalog-wrapper">
						<span class="iconfont icon-fenlei"></span>
						<span class="catalog">
							<span v-for="(obj, index) in item.tags" :key="index">
								{{obj.name}}
							</span>				
						</span>
					</div>
					<div class="date">
						<span class="iconfont icon-shijian2"></span>
						<span class="date-clock">{{item.publishTime}}</span>
					</div>
				</div>
				<div class="article-review">
					<div class="default-img">
						<img :src="item.thumbnail" alt="">
					</div>
					<div class="article-abstract">						
						<p>{{item.content.substring(0, 90)}}</p>						
					</div>
				</div>
				<div class="article-relative">
					<div class="item">
						<span class="icon iconfont icon-yuedu"></span>
						<span class="number">{{item.visitRecordCount}}</span>
					</div>
					<!--<div class="item">
						<span class="icon iconfont icon-pinglun5"></span>
						<span class="number">{{item.comment}}</span>
					</div>-->
					<div class="item" @click="thumpUpCount(item.id,item)">
						<span class="icon iconfont icon-dianzan2"></span>
						<span class="number">{{item.thumpUpCount}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Carousel from "@/components/carousel/Carousel";
export default {
  name: 'Home',
  components: {
  	Carousel
  },
  data() {
  	return {
  		articles: []
  	}
  },
  created(){
  	this.$Progress.start()
  },
  mounted() {
  	this.$Progress.finish()
  	this.getArticles()
  },

  methods: {
  	getArticles: function(){
  		this.$axios.get("/articles/hot").then((response) => {
  			console.log(response.data.data);
  			this.articles = response.data.data
  		}).catch((error) => {
			console.log(error)
			 this.$Progress.fail()
  		})
  	},
   	articlesDetailsFn: function(id){
        this.$router.push({ name: 'ArticleDetail', params: { id: id }})
    },
    thumpUpCount: function(id, item){
    	this.$axios.get("/articles/thumbup/" + id).then((response) => {
  			console.log(response.data.succ);
  			if(response.data.succ){  			
			  	this.$message({
			  		showClose: true,
		          	message: '点赞成功！',
		          	type: 'success'
		          	});
  				item.thumpUpCount++;
  			}else{
  				this.$message({
		          showClose: true,
		          message: '点过了！',
		          type: 'warning'
	        	})
  			}
  			//this.articles = response.data.data
  		}).catch((error) => {
			console.log(error)
			this.$Progress.fail()
  		})
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
	.blog-wrapper{ 
		margin-left: 30px;
		margin-top: 60px;
		border-sizing: border-box;
		flex: 1;
		.hot-article-title{
			margin-top: 15px;
			display: flex;
			padding: 15px;
            margin-bottom: 10px;
            background: #fff;
            border-bottom: 1px solid #f0f0f0;
            font-size: 14px;
            .title{
            	flex: 1;
            	color: #666;
            	font-weight: 700;
            }
            .link{
            	cursor: pointer;
            	a{
            		color: #666;
            		outline: none;
            		text-decoration: none;
            	}
            	
            }
		}
		.article-list{
			.article-item{
				margin-top: 15px;
				background: #e6e6e6;
				padding: 15px;
				border-radius: 3px;
				h2{
					padding: 10px 0;
					color: #16a085;
					font-weight: 700;
					cursor:pointer;
					&:hover{
						padding-left: 7px;
						transition: all .3s ease;
						color: #d9a800;
					}
					
				}	
				.article-extra{
					display: flex;
					.catalog-wrapper{
						margin-right: 18px;
						color: #666;
						.catalog{
							font-size: 14px;
						}
					}
					.date{
						color: #666;
						.date-clock{
							font-size: 14px;
						}
					}
				}
				.article-review{
					margin-top: 12px;
					display: flex;
					.default-img{
						width: 65px;
						height: 65px;
						margin: 0 15px;
						@include center();
						img{
							width: 100%;
						}
					}
					.article-abstract{
						flex: 1;
						width:0;
						p{
					        overflow-wrap:break-word;
						}    			
					}
				}
				.article-relative{
					display: flex;
					justify-content: flex-end;
					.item{
						cursor: pointer;
						margin-right: 8px;
						height: 20px;
						display: flex;
						.icon{
							font-size: 18px;
							line-height: 18px;
						}
						.number{
							font-size: 14px;
							color: #999;
							line-height: 18px;
							margin-left: 6px;
						}
					}
				}
			}
		}
	}
</style>
