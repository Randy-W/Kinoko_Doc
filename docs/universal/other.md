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
      chatMessages2: [
        { sender: 'me', text: '/随机表情' },
        { sender: 'other', text:'请注意菌菌表情包的使用规范哦！', image:'../sticker_sample.jpg' },
      ],
    };
  },
};
</script>




# 杂项功能

## 抽奖
可以在群内通过菌菌发起抽奖。
::: danger 注意⚠️
QQ官方Bot版菌菌不支持这个功能
:::

> [!NOTE] 使用方法
> - 发送`/发起抽奖 (抽奖主题)`来发起一个抽奖活动
> - 发送`/抽奖 (抽奖主题)`来参与抽奖。
> - 发送`/我的抽奖`来查看你在本群发起过的抽奖。
> - 发送`/开奖 (抽奖主题)`来对自己发起过的抽奖进行开奖。注意当只发起了一个抽奖时，只发送`/开奖`即可。

<Chatbox :messages="chatMessages" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

## 随机表情
随机不重样的菌菌表情包大放送！多可爱呀！
<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

::: danger 菌菌表情包使用规范
- 本表情包可以免费下载并自由用于社交软件中个人表达、交流互动等非商业性目的而无需经过本人授权。
- 禁止擅自将本表情包及角色形象(菌菌)用于任何商业性用途，包括但不限于广告宣传、产品销售、品牌代言等。任何商业性使用行为均须事先获得本人的书面授权。对于不确定用途是否为商业行为的，如任何形式的印刷、玩家组织的线下比赛宣传、个人视频创作中引用等，建议通过本人确认并申请授权再使用以免造成不必要的误会。(实际上，这里的“商用”是白名单制，即超出事先约定的使用范围均算作商用。在引用前务必注意。)
- 使用者在使用本表情包时，应尊重原作品的设计理念，不得对其进行恶意篡改、歪曲或解读。
- 禁止所有菌菌图片稿件用于Stable Diffusion等图片生成式AI的模型训练。对于部分AIGC服务平台会对用户上传的图片都纳入自身模型训练的，也属于本范畴。
- 本人对于因使用本表情包及角色形象而引发的任何纠纷、争议或损失不承担任何责任。使用者应自行承担因使用本表情包及角色形象而产生的一切法律后果。 

**用户一经下载本系列表情包，即视为同意并遵守上述使用条例。请务必在使用前认真阅读并理解本条例内容，以确保您的使用行为符合规定。**
:::
