<template>
	<div class="tag-wrapper">
		<div class="tag-title">
			全部标签
		</div>

        <el-tag v-for="(item, index) in tags" :key="index" :type="generate(index)" >{{item.name}}</el-tag>
		 <!--
        <el-tag type="success">标签二</el-tag>
		<el-tag type="info">标签三</el-tag>
		<el-tag type="warning">标签四</el-tag>
		<el-tag type="danger">标签五</el-tag> -->
	</div>
</template>
<script>
	export default{
        data() {
            return {
                tags: [],
                text: ["success","info","warning","danger"]
            }
          },
          created(){
            this.$Progress.start()
          },
          mounted() {
            this.$Progress.finish()
            this.getTags()
          },
          methods: {
            getTags: function(){
                this.$axios.get("/tags/all").then((response) => {
                    console.log(response.data.data)
                    this.tags = response.data.data
                }).catch((error) => {
                    console.log(error)
                    this.$Progress.fail()
                })
            },
            generate: function(index){
                return this.text[index % 4]
            }
          }
    }
</script>
<style lang="scss" scoped>
    .tag-wrapper{
    	flex: 1;
    	margin-top: 60px;
    	margin-left: 30px;
        border-radius: 3px;
        .tag-title{
            padding: 15px;
            margin-bottom: 10px;
            color: #666;
            background: #fff;
            border-bottom: 1px solid #f0f0f0;
            font-size: 14px;
    	}
    }
</style>