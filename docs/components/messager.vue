<template>
    <div class="chatbox">
      <!-- <div class="chatbox-header">聊天窗口</div> -->
      <div class="chatbox-messages">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['message', message.sender === 'me' ? 'my-message' : 'other-message']"
        >
          <div class="avatar-container">
            <img
              :src="message.sender === 'me' ? myAvatar : otherAvatar"
              alt="头像"
              class="avatar"
            />
          </div>
          <div
            class="message-bubble"
            :style="{ backgroundColor: message.sender === 'me' ? '#0099ff' : '#ffffff', color: message.sender === 'me' ? '#fff' : '#333' }"
          >
            <span v-if="message.text" class="message-content">{{ message.text }}</span>
            <img v-if="message.image" :src="message.image" alt="图片" class="message-image" />
          </div>
        </div>
      </div>
      <div class="chatbox-footer">
        <input type="text" class="message-input" placeholder="请输入消息..." v-model="newMessage" />
        <button class="send-button" @click="sendMessage">发送</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Chatbox',
    props: {
      messages: {
        type: Array,
        required: true,
        default: () => [],
      },
      myAvatar: {
        type: String,
        required: true,
        default: () => 'path/to/default-my-avatar.png',
      },
      otherAvatar: {
        type: String,
        required: true,
        default: () => 'path/to/default-other-avatar.png',
      },
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
  .chatbox {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    border: 1px solid #eeedf2;
    border-radius: 8px;
    overflow: hidden;
    font-family: Arial, sans-serif;
  }
  
  .chatbox-header {
    background-color: #0099ff;
    color: #fff;
    text-align: center;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  
  .chatbox-messages {
    flex: 1;
    background-color: #f1f1f1;
    padding: 10px;
    overflow-y: auto;
  }
  
  .message {
    display: flex;
    margin-bottom: 15px;
  }
  
  .my-message {
    flex-direction: row-reverse;
  }
  
  .other-message {
    flex-direction: row;
  }
  
  .avatar-container {
    display: flex;
    align-items: flex-start;
    margin: 0 10px;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  .message-bubble {
    max-width: 70%;
    padding: 10px 15px;
    border-radius: 8px;
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  }
  
  .message-content {
    font-size: 14px;
    word-break: break-word;
    white-space: pre-wrap;
  }
  
  .message-image {
    max-width: 100%;
    border-radius: 10px;
    margin-top: 5px;
  }
  
  .chatbox-footer {
    display: flex;
    align-items: center;
    padding: 7px;
    background-color: #f3f2f7;
  }
  
  .message-input {
    flex: 1;
    padding: 5px;
    border: none;
    border-radius: 4px;
    background-color: #ffffff;
    margin-right: 10px;
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
    transition: background-color 0.3s;
  }
  
  .send-button:hover {
    background-color: #0056b3;
  }
  </style>
  