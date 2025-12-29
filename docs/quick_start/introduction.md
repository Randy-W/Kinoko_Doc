<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages: [
        { sender: 'other', text: '这里是菌菌，让我们继续往下探索吧。你可以点击右下角的下一页直接从太鼓功能看起，也可以看左侧的侧边栏来寻找你想参考的部分哦。' },
      ],
    };
  },
};
</script>


# 介绍
菌菌是一个在QQ中专为太鼓达人群设计的功能性机器人，同时也是一个拥有形象的原创角色。



> [!IMPORTANT] 菌菌的版本区分
> 菌菌有**QQ官方bot版**和一直以来使用的**第三方bot框架**版。
> 
> 在使用上，两个版本没有本质区别。容易混淆的功能比如["/查歌"](../taiko/search)和["/别名查歌"](../taiko/alia-search)请前往对应页面查看具体使用方法
>
> **具体区别请看[版本区分](../quick_start/versions)**

<!-- ### 功能类型
菌菌主要包含太鼓达人游戏相关的功能，以及其它音乐游戏的相关功能和一些实用小功能。具体的功能介绍和使用方法请通过左侧侧边栏寻找你需要的功能来查阅。 -->

### 触发方式
菌菌是通过匹配消息开头、匹配消息末尾以及正则表达式等方法来识别用户发送的消息是否会触发功能的。
> [!TIP] 提示
> 简单来说，你需要按照一定的规则来编写你的消息再发送给菌菌，而不是当做类似ChatGPT、Deepseek等AI语言模型用自然语言的方式和菌菌对话。

## 接下来...
<Chatbox :messages="chatMessages" 
myAvatar='avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

<br>
<NCard title="📖 查歌" link="../taiko/search">
通过曲名→id精确查找谱面
</NCard>

<NCard title="✨ 别名查歌" link="../taiko/alia-search">
通过歌曲别名一句话问出谱面
</NCard>

<NCard title="☄️ 查段位" link="../taiko/dani">
挑战段位
</NCard>

<NCard title="🌤️ 广场绑定" link="../taiko/donderhiroba">
暂时...只可以看自己的小咚
</NCard>

<NCard title="🤤 加菌菌群" link="../kinoko/group">
获取菌菌表情包和最新动态（风控避难所
</NCard>