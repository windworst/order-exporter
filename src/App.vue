<template>
  <div id="__inject_page__">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#__inject_page__ {
  z-index: 10000000;
  position:fixed;
  right: 0;
  top: 0;
}
</style>
