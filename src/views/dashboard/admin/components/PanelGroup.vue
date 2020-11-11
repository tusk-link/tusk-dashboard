<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <chart-card :loading="loading" title="产品总数" :total="6">
        <a-tooltip slot="action" title="指标说明">
          <a-icon type="info-circle-o" />
        </a-tooltip>
        <div>
          <!-- <trend flag="up" style="margin-right: 16px;" :percentage="20">
            <span slot="term">周同比</span>
          </trend>
          <trend flag="down" percentage="30">
            <span slot="term">日同比</span>
          </trend> -->
        </div>
        <template slot="footer">日均销售额<span>￥ 234.56</span></template>
      </chart-card>
      <!-- <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            New Visits
          </div>
          <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
        </div>
      </div> -->

    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <chart-card :loading="loading" title="设备总数" :total="11">
        <a-tooltip slot="action" title="指标说明">
          <a-icon type="info-circle-o" />
        </a-tooltip>
        <div>
          <trend flag="up" style="margin-right: 16px;" :percentage="20">
            <span slot="term">周同比</span>
            <!-- 12% -->
          </trend>
          <trend flag="down" percentage="30">
            <span slot="term">日同比</span>
            <!-- 11% -->
          </trend>
        </div>
        <template slot="footer">日均销售额<span>￥ 234.56</span></template>
      </chart-card>
      <!-- <div class="card-panel" @click="handleSetLineChartData('messages')">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="message" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Messages
          </div>
          <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />
        </div>
      </div> -->
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <chart-card :loading="loading" title="在线设备" :total="9">
        <a-tooltip slot="action" title="指标说明">
          <a-icon type="info-circle-o" />
        </a-tooltip>
        <div>
          <trend flag="up" style="margin-right: 16px;" :percentage="20">
            <span slot="term">周同比</span>
            <!-- 12% -->
          </trend>
          <trend flag="down" percentage="30">
            <span slot="term">日同比</span>
            <!-- 11% -->
          </trend>
        </div>
        <template slot="footer">日均销售额<span>￥ 234.56</span></template>
      </chart-card>
      <!-- <div class="card-panel" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="money" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Purchases
          </div>
          <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" />
        </div>
      </div> -->
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <chart-card :loading="loading" title="消息总数" :total="1269548">
        <a-tooltip slot="action" title="指标说明">
          <a-icon type="info-circle-o" />
        </a-tooltip>
        <div>
          <trend flag="up" style="margin-right: 16px;" :percentage="20">
            <span slot="term">周同比</span>
            <!-- 12% -->
          </trend>
          <trend flag="down" percentage="30">
            <span slot="term">日同比</span>
            <!-- 11% -->
          </trend>
        </div>
        <template slot="footer">日均销售额<span>￥ 234.56</span></template>
      </chart-card>
      <!-- <div class="card-panel" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="shopping" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Shoppings
          </div>
          <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
        </div>
      </div> -->
    </el-col>
  </el-row>
</template>

<script>
// import CountTo from 'vue-count-to'
import ChartCard from '@/components/Charts/ChartCard'
import Trend from '@/components/Charts/Trend'

export default {
  components: {
    // CountTo
    ChartCard,
    Trend
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>

.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    .box-card {
      // border-radius: $generalRadius;
    }
    // height: 108px;
    // border-radius: $generalRadius;
    // cursor: pointer;
    // font-size: 12px;
    // position: relative;
    // overflow: hidden;
    // color: #666;
    // background: #fff;
    // box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    // border-color: rgba(0, 0, 0, .05);

    // &:hover {
    //   .card-panel-icon-wrapper {
    //     color: #fff;
    //   }

    //   .icon-people {
    //     background: #40c9c6;
    //   }

    //   .icon-message {
    //     background: #36a3f7;
    //   }

    //   .icon-money {
    //     background: #f4516c;
    //   }

    //   .icon-shopping {
    //     background: #34bfa3
    //   }
    // }

    // .icon-people {
    //   color: #40c9c6;
    // }

    // .icon-message {
    //   color: #36a3f7;
    // }

    // .icon-money {
    //   color: #f4516c;
    // }

    // .icon-shopping {
    //   color: #34bfa3
    // }

    // .card-panel-icon-wrapper {
    //   float: left;
    //   margin: 14px 0 0 14px;
    //   padding: 16px;
    //   transition: all 0.38s ease-out;
    //   border-radius: 6px;
    // }

    // .card-panel-icon {
    //   float: left;
    //   font-size: 48px;
    // }

    // .card-panel-description {
    //   float: right;
    //   font-weight: bold;
    //   margin: 26px;
    //   margin-left: 0px;

    //   .card-panel-text {
    //     line-height: 18px;
    //     color: rgba(0, 0, 0, 0.45);
    //     font-size: 16px;
    //     margin-bottom: 12px;
    //   }

    //   .card-panel-num {
    //     font-size: 20px;
    //   }
    // }
  }
}

@media (max-width:550px) {
  // .card-panel-description {
  //   display: none;
  // }

  // .card-panel-icon-wrapper {
  //   float: none !important;
  //   width: 100%;
  //   height: 100%;
  //   margin: 0 !important;

  //   .svg-icon {
  //     display: block;
  //     margin: 14px auto !important;
  //     float: none !important;
  //   }
  // }
}
</style>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.el-card{
  border-radius: $generalRadius;
}
</style>
