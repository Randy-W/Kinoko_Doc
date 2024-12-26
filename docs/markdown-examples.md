<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages: [
        { sender: 'me', text: '/help' },
        { sender: 'other', text: '这里是帮助菜单，发送形如【/help 查歌】的格式来查看内容\n-----------------------------------\n/help bot	|  查看自我介绍\n/help 查歌	|  查歌功能的使用方法\n/help 别名查歌	|  通过歌曲别名来查歌\n/help 歌曲位置	|  查找歌曲在国行虹版街机中的位置\n/help 段位	|  查历年街机版段位课题\n/help 难易度表	|  来自DonderNote网站的表\n/help 小游戏	|  猜歌小游戏的玩法\n/help 查鼓点	|  通过音游地图查鼓点\n/help 邀请	|  如何邀请菌菌去其它群\n/help 杂项功能	|  一些小功能\n/help 喷喷	|  面向Splatoon3的功能\n/help 发电	|  菌菌很可爱请给我钱！\n/help 周边	|  实物周边！菌菌还有这个？' },
      ],
    };
  },
};
</script>

# 一个消息框的实例
有了这个消息框，之后写帮助就可以直接写示例了

<Chatbox :messages="chatMessages" 
myAvatar='avatar_neko.png' 
otherAvatar="avatar_kinoko.png" />