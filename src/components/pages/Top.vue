<template>
	<div class="rank-wapper">
		<div class="rank-title">
			排行
		</div>

        <div class="card-wrapper">
            <el-row>
              <el-col :span="6" v-for="(o, index) in 6" :key="o" :offset="index % 3 > 0 ? 3 : 0">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="@/assets/images/member.jpg" class="image">
                  <div class="description">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <div class="operation-box">
                          <div>
                              <span class="iconfont icon-dianzan2"></span>
                          </div>
                          <div>
                              <span class="iconfont icon-yuedu"></span>
                          </div>
                          <div>
                              <span class="iconfont icon-pinglun"></span>
                          </div>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
        </div>
        
	</div>
</template>
<script>
export default {
    data() {
    return {
      currentDate: new Date()
    };
    }
}
</script>
<style lang="scss" scoped>
    .rank-wapper{
    	flex: 1;
    	margin-top: 60px;
    	margin-left: 30px;
        border-radius: 3px;
        .rank-title{
            padding: 15px;
            margin-bottom: 10px;
            color: #666;
            background: #fff;
            border-bottom: 1px solid #f0f0f0;
            font-size: 14px;
    	}
        .card-wrapper{
            .el-card{
                margin-bottom: 15px;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                img{
                    width: 100%;
                    flex: 1;
                    box-sizing: border-box;
                    padding: 3px;
                    display: block;
                    border-color: #fff;
                    margin: none;                                        
                }
                .description{
                    padding: 14px;   
                    .bottom{
                        margin-top: 13px;
                        line-height: 12px;
                        .time{
                            font-size: 13px;
                            color: #999;
                        }
                        .operation-box{
                            border-top: 1px solid #16a085;
                            margin-top: 12px;
                            display: flex;
                            padding: 4px;
                            justify-content:center;
                            align-items: center;
                            div {
                                flex: 1;
                                display: flex;
                                justify-content:center;
                                align-items: center;
                                margin-top: 8px;
                                cursor: pointer;
                                .iconfont{
                                   color: #16a085;
                                   font-size: 18px;
                                   &:hover{
                                    color: #16aa85;
                                   }
                                }
                            }                            
                        }
                    }
                }
            }
        }
    }
</style>