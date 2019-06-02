<template>
	<div class="recommendation-wapper">
		<div class="recommendation-title">
			热门推荐
		</div>
        <swiper></swiper>
        <div class="recommendation-title">
            列表推荐
        </div>
        <ul class="recommendation-list">
            <li>
                <a href="">
                    <div class="xh">1</div>
                    <div class="title">延禧攻略在日本播出<b>124345</b></div>
                    <span class="iconfont icon-dianzan"></span>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="xh">2</div>
                    <div class="title">小时候以为是真的<b>65666</b></div>
                    <span class="iconfont icon-fenxiang"></span>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="xh">3</div>
                    <div class="title">你以为的真的<b>65666</b></div>
                    <!-- <span class="iconfont icon-fenxiang"></span> -->
                </a>
            </li>
        </ul>
	</div>
</template>

<script>
import Swiper from "@/components/swiper/Swiper";
export default {
    name: "recommendation",
     components: {
        Swiper
    },
}
</script>
<style lang="scss" scoped>
    .recommendation-wapper{
    	flex: 1;
    	margin-top: 60px;
    	margin-left: 30px;
        border-radius: 3px;
        .recommendation-title{
            padding: 15px;
            margin-bottom: 10px;
            color: #666;
            background: #fff;
            border-bottom: 1px solid #f0f0f0;
            font-size: 14px;
    	}
        ul.recommendation-list{
            padding: 0;
            margin: 0;
            background: #fff;
            li{
                height: 30px;
                line-height: 30px;
                padding: 5px;
                border-bottom: 1px solid #f0f0f0;
                a{
                    text-decoration: none;
                    outline: none;
                    display: flex;
                    color: #666;
                    &:hover{
                         color: #444;
                    }
                    .xh{
                        width: 22px;
                        height: 22px;
                        line-height: 22px;
                        margin: 4px;
                    }
                    .title{
                        flex: 1;
                        b{
                            color: #999;
                            font-size:10px;
                            margin-left: 4px;
                        }
                    }
                }
                
                
            }
        }
    }
</style>