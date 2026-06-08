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
        { sender: 'other', image:'../jrrp.jpg' },
      ],
      chatMessages2: [
        { sender: 'me', text: '/塔罗牌' },
        { sender: 'other', image:'../tlp.jpg' },
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

> [!TIP] 提示
> 今日人设的部分是从太鼓有史以来的**称号**中抽选的。
> 删除了一小部分不像人设的称号，但仍有一千多个。

___


# 塔罗牌
向菌菌发送`/塔罗牌`，可以抽卡。每天只能抽一张。

<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />