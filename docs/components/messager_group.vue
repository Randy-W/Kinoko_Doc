<template>
  <div class="Chatbox_group">
    <div class="chatbox-messages">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message', message.senderId === myId ? 'my-message' : 'other-message']"
      >
        <div class="avatar-container">
          <img :src="message.avatar" alt="头像" class="avatar" />
        </div>

        <div class="message-body">
          <div class="nickname">{{ message.nickname }}</div>

          <div class="content-container">
            <template v-if="message.image && !message.text">
              <img :src="message.image" alt="图片" class="message-image-alone standalone-image" />
            </template>
            <template v-else>
              <div
                class="message-bubble"
                :style="{ 
                  backgroundColor: message.senderId === myId ? '#0099ff' : '#ffffff', 
                  color: message.senderId === myId ? '#fff' : '#333' 
                }"
              >
                <span v-if="message.text" class="message-content">{{ message.text }}</span>
                <img v-if="message.image" :src="message.image" alt="图片" class="message-image" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="chatbox-footer">
      <input type="text" class="message-input" placeholder="" v-model="newMessage" @keyup.enter="sendMessage" />
      <button class="send-button" @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chatbox_group',
  props: {
    // 消息对象需包含：senderId, nickname, avatar, text, image
    messages: {
      type: Array,
      required: true,
      default: () => [],
    },
    // 当前登录用户的ID，用于区分左右
    myId: {
      type: [String, Number],
      default: 'me'
    }
  },
  data() {
    return {
      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.$emit('send-message', this.newMessage);
        this.newMessage = '';
      }
    },
  },
};
</script>

<style scoped>
/* 还原容器样式 */
.Chatbox_group {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  border: 1px solid #eeedf2;
  border-radius: 8px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  background-color: #f1f1f1; /* 还原背景色 */
}

.chatbox-messages {
  flex: 1;
  padding: 10px 8px; /* 紧凑布局 */
  overflow-y: auto;
  min-height: auto; /* 建议设定高度 */
}

.message {
  display: flex;
  margin-bottom: 12px; /* 缩小间距 */
}

/* 消息布局方向控制 */
.other-message {
  flex-direction: row;
}
.my-message {
  flex-direction: row-reverse;
}

/* 头像控制 */
.avatar-container {
  display: flex;
  align-items: flex-start;
  margin: 0 6px; /* 缩小头像左右间距 */
}

.avatar {
  width: 36px; /* 稍微缩小头像更显紧凑 */
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

/* 昵称与气泡的容器 */
.message-body {
  display: flex;
  flex-direction: column;
  max-width: 75%;
}

.other-message .message-body {
  align-items: flex-start;
}
.my-message .message-body {
  align-items: flex-end;
}

.nickname {
  font-size: 11px; 
  color: #888;
  margin-bottom: 0px; 
  margin-top: -6px;
  padding: 0 2px;
}

.message-bubble {
  padding: 8px 10px;
  border-radius: 8px;
  word-break: break-word;
}

.message-content {
  font-size: 16px;
  word-break: break-word;
  white-space: pre-wrap;
}

/* 图片处理 */
.message-image {
  max-width: 100%;
  border-radius: 6px;
  margin-top: 4px;
  display: block;
}

.standalone-image {
  max-width: 100%;
  border-radius: 8px;
  max-height: 200px;
  display: block;
}

.chatbox-footer {
  display: flex;
  align-items: center;
  padding: 7px;
  background-color: #f3f2f7;
  border-top: 1px solid #eeedf2;
  margin-top: -10px;
}

.message-input {
  flex: 1;
  padding: 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #ffffff;
  margin-right: 8px;
  outline: none;
}

.send-button {
  padding: 5px 15px;
  background-color: #0099ff; 
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
}

.send-button:hover {
  background-color: #0056b3;
}
</style>