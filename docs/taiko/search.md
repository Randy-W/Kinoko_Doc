<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages1: [
        { sender: 'me', text: '查歌 百花' },
        { sender: 'other', image:'../search_1.png' },
      ],
      chatMessages2: [
        { sender: 'me', text: '查歌 hyakka' },
        { sender: 'other', image:'../search_1.png' },
      ],
      chatMessages3: [
        { sender: 'me', text: '鬼id764' },
        { sender: 'other', text:`【百花繚乱】(以下略
`,image:'../search_3.png' },
      ],
      chatMessages4: [
        { sender: 'me', text: '提示：先打出“/”，在消息列表里选“/查歌”。\n查到id后，长按菌菌头像就可以@菌菌，然后输入难度+id' },
        { sender: 'me', text: '@菌菌 /查歌 百花' },
        { sender: 'other', image:'../search_1.png' },
        { sender: 'me', text: '@菌菌 鬼id764' },
        { sender: 'other', text:`【百花繚乱】(以下略
`,image:'../search_3.png' },
      ],
    };
  },
};
</script>


# 查歌
这里的查歌是指通过**歌曲曲名来查歌**（具体来说是查谱面。

用菌菌查歌时，**先**通过曲名来查找歌曲的id，**再**通过id加上难度来查找具体的谱面。  

除此之外，还可以[**通过歌曲别名来查歌**](../taiko/alia-search.md)，这一部分请参考下节的内容。

<!-- > [!TIP] 明确
>  菌菌曲库中的`id`和部分人所知道的`uniqueId`、`曲id`没有任何关系 -->

## 先通过关键字查找歌曲id
发送 `"查歌"+关键字` 来使用关键词查歌，这里的`关键字`应当是**曲名**或者**汉化曲名**中的一部分。

<Chatbox :messages="chatMessages1" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko_no2.png" />

当`关键字`是由英文字母和数字组成时，会将它作为日语的罗马音对歌曲的曲名进行匹配：

<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko_no2.png" />

> [!TIP] 提示
> 日文曲名的罗马音均为机翻进行匹配的，可能会出现一定程度的错误。

## 再通过id查询谱面
发送`难度 "id" 查到曲名前的编号`来让菌菌发出谱面吧。

<Chatbox :messages="chatMessages3" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko_no2.png" />

其中，`难度`的部分是民间的简略称呼，它们的对应关系如下：
<table><thead><tr><th>简单</th><th>普通</th><th>困难</th><th>魔王</th><th>魔王(里)</th></tr></thead><tbody><tr><td>梅</td><td>竹</td><td>松</td><td>鬼</td><td>里</td></tr></tbody></table>


# 针对QQ官方Bot的优化
因为使用官方bot时，打出“/”会弹出指令列表，所以我在指令列表中加入了“/查歌”功能。**省得去@了**。当然，你手动@菌菌然后输入“查歌 关键词”也是可以用的。

::: tip 简单来说
**这个“/查歌”功能和“查歌”完全一样，只是多了个“/”**

你仍然需要先查id、再查谱面
:::

<Chatbox :messages="chatMessages4" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />
