<script>
import Chatbox from '/components/messager.vue'
import Chatboxes from '/components/messager_group.vue'
export default {
  components: {
    Chatbox,
    Chatboxes,
  },
  data() {
    return {
      chatMessages: [
        { sender: 'other', text: `这里是菌菌，让我们继续往下探索吧。你可以点击右下角的下一页直接从太鼓功能看起，也可以看左侧的侧边栏来寻找你想参考的部分，或者直接看一页省流。` },
      ],
      messages1: [
  { 
    senderId: 'me', 
    nickname: '昊俣', 
    avatar: '../avatar_neko.png', 
    text: '喂？' 
  },
  { 
    senderId: '', 
    nickname: '菌菌', 
    avatar: '../avatar_kinoko_no2.png', 
    text: '听到了' 
  },
  { 
    senderId: 'me', 
    nickname: '昊俣', 
    avatar: '../avatar_neko.png', 
    text: '@菌菌 Bot 喂？' 
  },
  { 
    senderId: '', 
    nickname: '菌菌', 
    avatar: '../avatar_kinoko_no2.png', 
    text: '听到了' 
  },
  { 
    senderId: '', 
    nickname: '菌菌 Bot', 
    avatar: '../avatar_kinoko.png', 
    text: '听到了' 
  }
],
    };
  },
};
</script>


# 介绍
菌菌是一个在QQ中专为太鼓达人群设计的功能性机器人，同时也是一个拥有形象的原创角色。


## 版本区分


> [!IMPORTANT] 菌菌的版本区分
> 菌菌现在有两个版本：昵称旁带有QQ Bot标志的官方Bot版本、一直以来使用的第三方框架的版本。具体请看[菌菌版本区分](../quick_start/versions.md)
> 
> 官方bot在**群里使用时**，不加@就收不到消息。**小窗单独使用可以收得到**。所以建议小窗直接使用。

<!-- ### 区别

::: tip 最大的区别
官方bot在**群里使用时**，不加@就收不到消息。**小窗单独使用可以收得到**。

**只要能收到消息，就和菌菌一直以来的使用方法没有差异。无论消息是否以“/”开头都可以收得到。**
:::

<Chatboxes :messages="messages1" />

::: danger 务必注意
那个@必须在以下情况下之一才有效：**由自己打出、长按菌菌头像、打出/然后从指令列表里选择功能**

**复制自己或别人的消息里包含的@是无效的，尽管看起来没有区别**
::: -->


> 在功能使用上，我对[“查歌”](../taiko/search)和[“别名查歌”](../taiko/alia-search)做了对官方bot的易用性上的修改，请查看对应的文档。

<!-- ### 功能类型
菌菌主要包含太鼓达人游戏相关的功能，以及其它音乐游戏的相关功能和一些实用小功能。具体的功能介绍和使用方法请通过左侧侧边栏寻找你需要的功能来查阅。 -->

### 触发方式
菌菌是通过匹配消息开头、匹配消息末尾以及正则表达式等方法来识别用户发送的消息然后触发对应功能的。
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

<NCard title="🔛 领养菌菌" link="../kinoko/invite">
领养属于自己的菌菌
</NCard>