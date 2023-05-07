<template>
  <div>
    <!-- <el-button @click="handlePrompt(true)">show</el-button> -->
    <transition name="el-zoom-in-bottom">
      <el-card class="fix_right_bottom" v-if="visible">
        <div style="padding: 14px;">
          <span style="font-size: 14px;">
            发现新版本，点击"更新"获取。
          </span>
          <div class="button_group">
            <el-button size="mini" @click="handlePrompt(false)">关闭</el-button>
            <el-button type="primary" size="mini" @click="refreshApp">更新</el-button>
          </div>
        </div>
      </el-card>
    </transition>
  </div>
</template>

<script>
export default {
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, { once: true })

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // We'll also need to add 'refreshing' to our data originally set to false.
      if (this.refreshing) return
      this.refreshing = true
      // Here the actual reload of the page occurs
      console.log('window.location.reload()')
      window.location.reload()
    })
  },
  data() {
    return {
      visible: false,
      registration: null,
      refreshing: false
    }
  },
  methods: {
    handlePrompt(val) {
      this.visible = val
    },
    updateAvailable(event) {
      this.registration = event.detail
      this.visible = true
    },
    refreshApp() {
      this.visible = false
      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!this.registration || !this.registration.waiting) return
      // Send message to SW to skip the waiting and activate the new SW
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' })
      
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.fix_right_bottom {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
.button_group {
  margin-top: 10px;
}
</style>