<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages: [
        { sender: 'me', text: '/发起抽奖 草' },
        { sender: 'other', text: `【昊猫】在本群发起了名为【草】的抽奖！
直到发起者手动结束抽奖前都可以发送【/抽奖 草】来参加哦！` },
        { sender: 'me', text: '/我的抽奖' },
        { sender: 'other', text: '你在2024年06月27日 10时16分发起了【草】抽奖' },
        { sender: 'me', text: '/抽奖 草' },
        { sender: 'other', text: '昊猫 参加成功。（共1人）' },
        { sender: 'me', text: '/开奖' },
        { sender: 'other', text: `开奖了！！
在2025年02月26日 17时16分由【昊俣】发起的【草】抽奖中，从1人里选出了——
【昊俣】
恭喜！！！` },
      ],
    };
  },
};
</script>

::: danger 注意⚠️
QQ官方Bot版菌菌不支持这个功能
:::


# 杂项功能

## 抽奖
可以在群内通过菌菌发起抽奖。

> [!NOTE] 使用方法
> - 发送`/发起抽奖 (抽奖主题)`来发起一个抽奖活动
> - 发送`/抽奖 (抽奖主题)`来参与抽奖。
> - 发送`/我的抽奖`来查看你在本群发起过的抽奖。
> - 发送`/开奖 (抽奖主题)`来对自己发起过的抽奖进行开奖。注意当只发起了一个抽奖时，只发送`/开奖`即可。

<Chatbox :messages="chatMessages" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />