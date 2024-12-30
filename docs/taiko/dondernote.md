<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages: [
        { sender: 'me', text: '/绑定账号 114 514' },
        { sender: 'other', text: '添加用户信息成功！' },
        { sender: 'me', text: '/难易度表 10' },
        { sender: 'other', text: '我找个笔画一下...' },
      ],
    };
  },
};
</script>

# 难易度表
[Donder Note](https://hatahata.outsystemscloud.com/DonderNote/)是一个用于手动记录太鼓歌曲成绩的网站，成绩需要手动填写，并非游戏内直接导入成绩。  
需要先注册Donder Note账号并绑定，填写完你的歌曲达成情况之后，发送【/难易度表 (难度星级数字)】就可以得到你的难易度表。
绑定账号可以使用群临时会话，如果没办法临时会话也可以加好友私聊进行。示例：  
【/绑定账号 114(用户名) 514(密码)】

<Chatbox :messages="chatMessages" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />