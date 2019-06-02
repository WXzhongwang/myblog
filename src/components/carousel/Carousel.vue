<template>
  <!-- indicator-position="outside" 滑动条 -->
  <el-carousel>
    <el-carousel-item v-for="(banner, index) in banners" :key="index">
      <img :src="banner.url" :alt="banner.alt">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
	const banners = [
		{
			url: "./static/images/1.jpg",
			alt: "1"
		},
		{
			url: "./static/images/2.jpg",
			alt: "2"
		},
		{
			url: "./static/images/3.jpg",
			alt: "3"
		}
	];
	export default{
		data(){
			return {
				banners: banners
			}
		}
	}
</script>
<style lang="scss" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel__item img{
	width: 100%;
	display: inline-block;
  }
</style>