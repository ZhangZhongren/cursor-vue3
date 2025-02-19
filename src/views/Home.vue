<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-primary mb-[20px] border-b pb-20">首页</h1>
      <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
        <p class="text-lg text-gray-700 mb-4 font-medium">当前计数：{{ counter.count }}</p>
        <p class="text-lg text-gray-700 mb-4 font-medium">双倍计数：{{ counter.doubleCount }}</p>
        <el-button 
          type="primary"
          @click="counter.increment"
          class="!bg-primary hover:!bg-primary/90 !text-white !px-6 !py-3 !rounded-lg !text-lg"
        >
          增加
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counter'

export default {
  name: 'Home',
  setup() {
    const counter = useCounterStore()
    return {
      counter
    }
  }
}
</script> 