<template>
  <div class="edit-page">
    <ul class="usr">
      <li>
        <span>头像<i>*</i></span>
        <img
          :src="userInfo.img"
        >
      </li>
      <li>
        <span>姓名<i>*</i></span>
        <input
          v-model="userInfo.name"
          type="text"
          placeholder="请输入姓名"
        >
      </li>
      <li>
        <span>手机号</span>
        <input
          v-model="userInfo.phone"
          type="text"
          placeholder="请输入手机号"
        >
      </li>
    </ul>
    <button
      class="saveBtn"
      @click="editUserMsg"
    >
      保存
    </button>
  </div>
</template>

<script>
import {
  mapGetters, mapMutations
} from 'vuex'

export default {
  data() {
    return {
      userInfo: {
        name: '',
        img: '',
        company: '',
        city: '',
        intr: '',
        wChat: 'wx',
        selfChatCode: 'https://rocket-dev.woa.com/images/rocket.png',
        companyChatCode: '',
        title: '前端开发工程师',
        phone: '15811240124'
      },
      items: [{
        value: 'cwx',
        name: '企业微信'
      }, {
        value: 'wx',
        name: '个人微信'
      }]
    }
  },
  computed: {
    ...mapGetters({
      info: 'user/info'
    })
  },
  mounted() {
    this.userInfo = {
      ...this.userInfo,
      ...this.info
    }
  },
  methods: {
    ...mapMutations({
      setUser: 'user/setUserInfo'
    }),
    editUserMsg() {
      if (this.userInfo.name) {
        this.setUser(this.userInfo)
        wx.showToast({
          icon: 'none',
          title: '保存成功'
        })
        uni.navigateBack()
      }
    },
    radioChange(key) {
      console.log(key)
      this.userInfo.wChat = key
    }
  }
}
</script>

<style lang="scss">
.edit-page {
  height: 100vh;
  background-color: #eff2fa;
  .saveBtn {
    margin: 0 50rpx;
    color: #fff;
    line-height: 80rpx;
    font-size: 30rpx;
    text-align: center;
    background-color: #4a73ec;
    border-radius: 40rpx;
  }
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #fff;
    padding:  0 20rpx;
  }
  ul {
    margin-bottom: 20rpx;
  }
  .usr {
    li:first-child {
      img {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
      }
      span {
        flex: 1;
        vertical-align: top;
        font-size: 36rpx;
        line-height: 80rpx;
      }
    }
  }
  .wx {
    .wchat-code{
      flex: 1;
      text-align: right;
      img {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
      }
      span {
        flex: 1;
        vertical-align: top;
        font-size: 36rpx;
        line-height: 80rpx;
      }
    }
  }
  li {
    display: flex;
    padding: 20rpx;
    border-bottom: 2rpx solid #eff2fa;
    span {
      display: inline-block;
      font-size: 36rpx;
      line-height: 60rpx;
      margin-right: 10rpx;
      i {
        display: inline-block;
        font-style: normal;
        color: red;
      }
    }
    input {
      margin-left: 30rpx;
      flex: 1;
      display: inline-block;
      line-height: 60rpx;
      height: 60rpx;
    }
    .radio {
      flex: 1;
      text-align: right;
      margin-left: 20rpx;
      line-height: 60rpx;
    }
    .upload {
      flex: 1;
      text-align: right;
    }
  }
}

</style>
