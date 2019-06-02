<template>
	<div class="catalog-wrapper">
		<div class="catalog-title">
			所有分类
		</div>
        <div class="card-body">
            <div v-for="(item, index) in categories" :key="index">
                <div class="card-pannel">
                    <h2 class="sort"><i class="iconfont icon-fenlei2"></i>{{item.name}}</h2>
                    <div class="card-item" v-for="(itemSubCategory, indexInside) in item.subCategories" :key="indexInside">
                        <h4>{{itemSubCategory.name}}</h4>
                        <img :src="itemSubCategory.thumbnail">
                        <strong>{{itemSubCategory.description}}</strong>
                    </div>                
                </div>
                <div class="clear"></div>
            </div>
        </div>
	</div>
</template>
<script>
	export default{
      name: 'Home',          
      data() {
        return {
            categories: []
        }
      },
      created(){
        this.$Progress.start()
      },
      mounted() {
        this.$Progress.finish()
        this.getCategories()
      },
      methods: {
        getCategories: function(){
            this.$axios.get("/categories/all").then((response) => {
                console.log(response.data);
                this.categories = response.data.data
                // let obj = [];
                // for(int i =0; i< categories.length;i++){
                //     if(categories[i].ParentCategoryID == "" || categories[i].ParentCategoryID == null){
                //         categories[i].children = [];
                //         for(int j = i + 1; j < categories.length - i;j++){
                //             if(categories[i].ID == categories[j].ParentCategoryID){
                //                 categories[i].children.push(categories[j])
                //             }
                //         }
                //     }
                // }
            }).catch((error) => {
                console.log(error)
                 this.$Progress.fail()
            })
        }
        // ,
        // articlesDetailsFn: function(id){
        //     this.$router.push({ name: 'ArticleDetail', params: { id: id }})
        // }
      }
	}
</script>
<style lang="scss" scoped>
    .catalog-wrapper{
    	flex: 1;
    	margin-top: 60px;
    	margin-left: 30px;
        border-radius: 3px;
    	.catalog-title{
            padding: 15px;
            margin-bottom: 10px;
            color: #666;
            background: #fff;
            border-bottom: 1px solid #f0f0f0;
            font-size: 14px;
    	}
        .card-body{
            border: 1px solid #f0f0f0;
            border-radius: 3px;
            background: #fff;
            .card-pannel{
                padding: 10px;
                .sort{
                    font-size: 18px;
                    font-weight: 600;
                    margin: 12px 0;
                    /*border-bottom: 1px solid #eaeaea;*/
                    i {
                        font-size:20px;
                        margin: 0 5px 5px 8px;
                    }
                }
                .card-item{
                    cursor: pointer;
                    width: 28%;
                    margin: 0 8px 10px 0;
                    text-align: left;
                    height: 80px;
                    color: #bbb;
                    background-color: #f6f6f6;
                    border-radius: 5px;
                    padding: 6px 16px; 
                    overflow: hidden;
                    text-decoration: none;
                    float: left;
                    h4{
                        color: #64854c;
                        font-size: 16px;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        line-height: 1.1;
                        text-align: left;
                    }
                    img{
                        float: left;
                        margin-left: 10px;
                        margin-right: 10px;
                        width: 100%;
                        max-width: 32px;
                        max-height: 32px;
                        border-radius: 5px;
                    }
                    strong{
                        display: block;
                        color: #666;
                        text-align: left;
                        font-size: 12px;
                    }
                }
            }
            .clear{
                clear: both;
            }
        }
    }
</style>