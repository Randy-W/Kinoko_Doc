<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages1: [
        { sender: 'me', text: '/喷喷图' },
        { sender: 'other', text: '我问问大厅店员...'},
        { sender: 'other', image:'../splatoon/1.jpg' },
        { sender: 'me', text: '/喷喷图 3' },
        { sender: 'other', text: '我问问鬼福...'},
        { sender: 'other', image:'../splatoon/1.jpg' },
      ],
      chatMessages2: [
        { sender: 'me', text: '/喷喷工' },
        { sender: 'other', text: '我问问熊老板...'},
        { sender: 'other', image:'../splatoon/2.jpg'},
      ]
    };
  },
};
</script>

# Splatoon 3
这是面向Splatoon3（斯普拉遁3）的模块。

## 查对战日程
发送`/喷喷图` 来查询对战日程，可以在指令后加数字代表获取向后推多少个日程。

<Chatbox :messages="chatMessages1" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

## 查打工日程
发送`/喷喷工` 来查询打工日程。
<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />