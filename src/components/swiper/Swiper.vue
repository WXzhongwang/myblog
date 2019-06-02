<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(banner, index) in banners" :key="index">
      <a href="#">
      	<h3>文章标题</h3>
      	<img :src="banner.url" :alt="banner.alt">
      </a>
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
		},
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
<style scoped>
  .el-carousel__item a {
  	text-decoration: none;
  	position: relative;
  	outline: none;
  	width: 100%;
  	height: 100%;
  	display: block;
  }
  .el-carousel__item h3 {
  	position: absolute;
  	font-weight: 700;
    color: #fff;
    font-size: 14px;
    opacity: 0.75;
    line-height: 22px;
    margin: 0;
    z-index: 100;
    padding: 7px;
    width: 100%;
    background: rgba(0, 0, 0, .15);
  }
  .el-carousel__item h3:hover {
  	transition: .3s;
  	color: #16a085;
  	background: rgba(0, 0, 0, .3);
  }

  .el-carousel__item img{
  	width: 100%;
  	height: 200px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>