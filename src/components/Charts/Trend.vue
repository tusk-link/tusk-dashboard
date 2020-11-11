<!--
 * @Author: Drswith
 * @Date: 2020-11-11 21:25:04
 * @LastEditors: Drswith
 * @LastEditTime: 2020-11-11 21:48:39
 * @FilePath: \tusk-dashboard\src\components\Charts\Trend.vue
-->
<template>
  <div class="chart-trend">
    {{ term }}
    <span>{{ rate }}%</span>
    <span :class="['trend-icon', trend]"><a-icon :type="'caret-' + trend" /></span>
  </div>
</template>

<script>
export default {
  name: 'Trend',
  props: {
    term: {
      type: String,
      default: '',
      required: true
    },
    percentage: {
      type: Number,
      default: null
    },
    type: {
      type: Boolean,
      default: null
    },
    target: { // 对比数据
      type: Number,
      default: 0
    },
    value: { // 当前数据
      type: Number,
      default: 0
    },
    fixed: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      trend: this.type && 'up' || 'down',
      rate: this.percentage
    }
  },
  created() {
    const type = this.type === null ? this.value >= this.target : this.type
    this.trend = type ? 'up' : 'down'
    this.rate = (this.percentage === null ? Math.abs(this.value - this.target) * 100 / this.target : this.percentage).toFixed(this.fixed)
  }
}
</script>

<style lang="scss" scoped>
  .chart-trend {
    display: inline-block;
    font-size: 14px;
    line-height: 22px;

    .trend-icon {
      font-size: 12px;

      &.up, &.down {
        margin-left: 4px;
        position: relative;
        top: 1px;

        i {
          font-size: 12px;
          transform: scale(.83);
        }
      }

      &.up {
        color: #f5222d;
      }
      &.down {
        color: #52c41a;
        top: -1px;
      }
    }
  }
</style>
