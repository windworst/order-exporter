<template lang="slm">
  .page
    svg.toggle width="16" height="16" xmlns="http://www.w3.org/2000/svg"
      g fill="none" fill-rule="evenodd" @click="isShow = !isShow"
        circle fill="#333" cx="8" cy="8" r="8"
        g stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"
            path d="M5 5l6 6M5 11l6-6" v-if="isShow"
            path d="M5 8 l6 0 M8 5 l0 6" v-else=""
    .content v-if="isShow"
      .title
      .action
        font-awesome-icon icon="play" size="3x" @click="onStart"
</template>

<style scoped lang="scss">
  .page {
    position: relative;
    margin: 1rem;
    width: 10rem;
    height: 10rem;
    .toggle {
      position: absolute;
      right: .2rem;
      top: .2;
    }
    .content {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      box-shadow:3px 3px 8px #ccc;
      border-radius: .2rem;
      display: flex;
      flex-direction: column;
      .title {
        flex: 1;
      }
      .action {
        flex: 1;
        align-self: center;
      }
    }
  }
</style>

<script>
import loadTaobaoOrder from '@/utils/taobao_fetch'

let data = {
  isShow: false
}

export default {
  name: 'Entry',
  methods: {
    onStart () {
      let res = loadTaobaoOrder()
      console.log(res)
    }
  },
  data: () => data
}
</script>
