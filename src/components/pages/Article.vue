<template>
	<div class="article-list-wrapper">
		<div class="article-list-title">
			<div class="title">全部文章</div>
			<div class="search-wrapper">
				<input type="text" name="searchval" placeholder="搜索">
				<span class="iconfont icon-sousuo2"></span>
			</div>
		</div>
		<div class="article-list-body">
			<!-- 所有 -->
			<div class="article-item" v-for="(item, index) in articles" :key="index">
				<h2 @click="articlesDetailsFn(item.id)">{{item.title}}</h2>
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
					<div class="item">
						<span class="icon iconfont icon-dianzan2"></span>
						<span class="number">{{item.thumpUpCount}}</span>
					</div>
				</div>
			</div>
			<div class="pagger-wrapper">
				  <!--<el-pagination
				    layout="prev, pager, next"
				    :total="1000"
				    :page-size="20">
				  </el-pagination>-->
				  <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[5, 10, 20, 40]"
                            :page-size="pageSize"                                   
    						layout=" prev, pager, next, sizes, total,jumper"
                            :total="total"> 
                    </el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data() {
		return {
			currentPage: 1,
			total: 0,
			page: 1,
			pageSize: 5,
			pageNum:1 ,  
			articles: []
		}
	},
	mounted() {
		this.getArticles();
	},
	methods: {
		getArticles: function(){
			let para = {
				page: this.pageNum,
				size: this.pageSize,
				//size: 2
			};
			console.log(JSON.stringify(para))
			this.$axios({
				url:'/articles/findByPage',
				method: 'post',
				params: para,
				headers:{
					'Content-Type':'application/x-www-form-urlencoded'
				}					
			}).then((response) => {	
				console.log(response.data)
				this.total = response.data.data.total;
				this.currentPage = response.data.data.pageNum;			
				this.articles = response.data.data.list
			}).catch((error) => {				
				this.$Progress.fail()
			})
		},
	   	articlesDetailsFn: function(id){
            this.$router.push({ name: 'ArticleDetail', params: { id: id }})
        },
        handleSizeChange: function (size) {
			this.pageSize = size;
			this.getArticles();
        },
        handleCurrentChange: function(currentPage){
			this.currentPage = currentPage;
			this.pageNum = currentPage;
			this.getArticles();
        }
	}
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.article-list-wrapper{
	flex: 1;
	margin-top: 60px;
	margin-left: 30px;
    border-radius: 3px;
	.article-list-title{
        padding: 8px;
        margin-bottom: 10px;
        color: #666;
        background: #fff;
        border-bottom: 1px solid #f0f0f0;
		display: flex;
        font-size: 14px;
        align-items: center;
        .title{
			flex: 1;
        }
        .search-wrapper{
        	display: flex;
        	/*background: green;
        	width: 200px;*/
        	border: 1px solid #dcdcdc;
        	border-radius: 6px;
        	box-shadow: 2px 2px 2px rgba(0,0,0,.15);
        	input{
        		flex: 1;
        		height: 26px;
        		line-height: 26px;
        		border: none;
        		padding: none;
        		outline: none;
        		margin-left: 10px;
        	}
        	span{
        		font-size: 22px;
        		margin-left: 2px;
        		cursor: pointer;
        	}
        	
        }
	}
	.article-list-body{
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
		.pagger-wrapper{
			margin-top: 24px;
			padding: 24px;
			display: flex;
			background: #fff;
			justify-content: center;
			align-items: center;
		}
	}
}
</style>