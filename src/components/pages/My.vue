<template>
	<div class="my-wrapper">
		<div class="single-member effect-1">
			<div class="member-image">
				<img src="@/assets/images/member.jpg" alt="">
			</div>
			<div class="member-info">
				<h3>Dick</h3>
				<h5>一只欲求不满的"井底之蛙"</h5>
				<h5><a href="mailto:1528683621@qq.com">1528683621@qq.com</a></h5>
				<p>程序员？面向对象编程？哈哈哈，没对象你编毛线的程。</p>
				<div class="social-touch">
					<a class="" href="#">
						<i class="iconfont icon-QQ"></i>
					</a>
					<a class="" href="#">
						<i class="iconfont icon-wei_xin"></i>
					</a>
					<a class="" href="#">
						<i class="iconfont icon-weibo"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style lang="scss" scoped>
    .my-wrapper{
    	margin-left: 30px;
        border-radius: 3px;
        margin: 60px auto 0;
        .single-member{
        	width: 280px; 
        	background-color: #fff; 
        	text-align: center; 
        	top: 60px;
        	position: relative;
        	.member-image{
        		img{
        			max-width: 100%; 
        			vertical-align: middle;
        		}
        	}
			.member-info{
				h3{
					font-size: 24px; 
					font-weight: normal;
					 margin: 10px 0 0; 
					 text-transform: uppercase;
				}
				h5{
					font-size: 16px;
					font-weight: 300;
					margin: 0 0 15px; 
					line-height: 22px;
					a{
						text-decoration: none;
						outline: none;
						color: rgb(100, 206, 170); 
					}
				}
				p{
					font-size: 14px; 
					font-weight: 300; 
					line-height: 22px; 
					padding: 0 30px; 
					margin-bottom: 10px;
				}
				.social-touch{
					a{
						display: inline-block; 
						width: 27px; 
						height: 27px; 
						vertical-align: middle; 
						margin: 6px; 
						outline: none;
						text-decoration: none;
						background-repeat: no-repeat; 
						opacity: 0.7; 
						transition: 0.3s;
						border-radius: 50%;
						&:hover{
							opacity: 1; 
							transition: 0.3s;
						}
						.iconfont{
							font-size: 27px;
							&.icon-QQ{
								color: rgb(68, 188, 233);
								opacity: 1;
							}
							&.icon-wei_xin{
								color: rgb(117, 219, 78);
								opacity: 1;
							}
							&.icon-weibo{
								color: rgb(239, 32, 67);
								opacity: 1;
							}
						}
					}
				}
			}
			&.effect-1{
				border-radius: 5px 5px 0 0; 
				padding-bottom: 40px;
				.member-image{
					border: 2px solid #fff; 
					border-radius: 60px 0; 
					display: inline-block; 
					margin-top: -72px; 
					overflow: hidden; 
					transition: 0.3s;
					img{
						transition: 0.3s; 
						border-radius: 60px 0;
					}
				}
				.member-info{
					.social-touch{
						background-color: rgb(100, 206, 170); 
						position: absolute; 
						left: 0; bottom: 0; 
						height: 5px;
						overflow: hidden; 
						padding: 5px 0 0; 
						width: 100%; 
						transition: 0.3s;
					}
				}
				&:hover img{
					transition: 0.3s; 
					border-radius: 60px 0;
				}
				&:hover .member-image{
					border-color: rgb(100, 206, 170); 
					transition: 0.3s; 
					border-radius: 50%;
				}
				&:hover .social-touch{
					padding: 6px 0; 
					height: 38px; 
					transition: 0.3s;
				}
			}
        }
    }
</style>
