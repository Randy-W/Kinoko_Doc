<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages1: [
        { sender: 'me', text: '/jrrp' },
        { sender: 'other', image:'../jrrp.png' },
      ],
    };
  },
};
</script>

# 今日人品

向菌菌发送`/jrrp`，可以看每天的人品值。~~超人气功能~~
<Chatbox :messages="chatMessages1" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

> [!TIP]
> 今日人设的部分是从太鼓有史以来的**称号**中抽选的。
> 删除了一小部分不像人设的称号，但仍有一千多个。