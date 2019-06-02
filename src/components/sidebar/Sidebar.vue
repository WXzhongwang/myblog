<template>
	 <transition name="el-fade-in-linear">
 		 <aside>
 		 	<div id="sidebar">
 		 		<div class="user-img">
					<img src="@/assets/images/cat.jpg" alt="">
				</div>
				<div class="description">
					<div class="name">咸鱼不太闲</div>
					<div class="line"></div>
					<div class="area">井底之蛙</div>
				</div>
				<div class="blog-info">
					<div class="article">
						<router-link :to="{ path: '/all-articles' }">
						<span class="number">{{ data.articles }}</span>
						<span class="icon iconfont icon-24"></span>
						</router-link>
					</div>
					<div class="comment">
						<router-link :to="{ path: '/catalog' }">
						<span class="number">{{ data.categories }}</span>
						<span class="icon iconfont icon-fenlei"></span>
						</router-link>
					</div>
					<div class="tag">
						<router-link :to="{ path: '/tags' }">
						<span class="number">{{ data.tags }}</span>
						<span class="icon iconfont icon-biaoqian"></span>
						</router-link>
					</div>
				</div>
				<div class="menu">
					<ul>
						<li><router-link :to="{path: '/home'}">首页</router-link></li>
						<li><router-link :to="{path: '/catalog'}">分类</router-link></li>
						<li><router-link :to="{path: '/recommendation'}">推荐</router-link></li>
						<li><router-link :to="{path: '/top'}">排行</router-link></li>
						<li><router-link :to="{path: '/my'}">我</router-link></li>
					</ul>
				</div>
 		 	</div>
 		 </aside>
	 </transition>
</template>
<script>
  export default {
    name: 'sidebar',
    data(){
    	return {
			data: {
				"categories": 0,
				"articles": 0,
				"tags": 0	
			}
    	}
    },
    mounted() {
  		this.getSideBar()
  	},

  	methods: {
	  	getSideBar: function(){
	  		this.$axios.get("/articles/sidebar").then((response) => {
	  			//console.log(response.data.data)
	  			this.data = response.data.data
	  		}).catch((error) => {
				 this.$Progress.fail()
	  		})
	  	}
	  }
  }
</script>
<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
aside{
	margin-top: 60px;
	min-width: 260px;
	max-width: 370px;
	#sidebar {
		text-align: center;
		background: #ffffff;
		border: px2rem(2) solid #f0f0f0;
		border-radius: px2rem(16);
		display: flex;
		flex-direction: column;		
		.user-img {
			width: px2rem(200);
			height: px2rem(200);
			flex: 1;
			margin: 20px auto;		
			img{
				width: 100%;
				max-width: 100%;
				@include center();
				border: px2rem(2) solid #ccc;
				border-radius: 50%;
			}
		}
		.description{
			display: flex;
			flex-direction: column;
			margin: 20px auto;	
			.name {	
				padding: 8px;
				color: #666;
				flex: 1;
				cursor: pointer;
				&:hover{
					color: #333;
				}
			}
			.line{
				height: 0;
				border-top: 2px solid #dcdcdc;
				flex: 1;
				margin: 7px auto;
				width: 150px;
				border-sizing: border-box;
			}
			.area{
				padding: 8px;
				color: #999;
			}
		}
		.blog-info{
			display: flex;
			padding: 8px 20px;
			margin: 20px 0;	
			border-sizing: border-box;
			.article{
				flex: 1;
				a{
					text-decoration: none;
					outline:none;
					display: flex;
					flex-direction: column;
					.icon{
						margin: 8px;
						font-size: 22px;
					}
					.number{
						padding: 8px;
						border-sizing: border-box;
						color: #333;
					}
				}
				
			}
			.comment{
				flex: 1;
				a{
					text-decoration: none;
					outline:none;
					display: flex;
					flex-direction: column;
					.icon{
						margin: 8px;
						font-size: 22px;
					}
					.number{
						padding: 8px;
						border-sizing: border-box;
						color: #333;
					}
				}
			}
			.tag{
				flex: 1;
				a{
					text-decoration: none;
					outline:none;
					display: flex;
					flex-direction: column;
					.icon{
						margin: 8px;
						font-size: 22px;
					}
					.number{
						padding: 8px;
						border-sizing: border-box;
						color: #333;
					}
				}
			}
		}
		.menu{
			ul{
				display: block;
				list-style: none;
				li{
					line-height: 50px;
					cursor: pointer;
					border-top: 1px solid #f0f0f0;
					a{
						text-decoration: none;
						color: #666;
						outline: none;
						&:hover{
						color: rgb(1.0, 197, 167);
						}
					}
				}
			}
		}
	}
}

</style>
