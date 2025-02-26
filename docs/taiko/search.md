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
        { sender: 'other', text:`【百花繚乱】
收录平台： AC11~12增、无印~绿、虹2020~虹2024、AC14、11亚、12亚、巴西桃、海外虹、PSPDX、DS2、3DS2、Wii4、PTB、手机版plus、RC、NS RPG、NS1、NS2 MP、国行虹
所在分区：ナムコオリジナル
难度：★×8
BPM: 148
“谱面会分歧哦！”
国行街机已收录！
汉化曲名：【百花缭乱】`,image:'../search_3.png' },
      ],
    };
  },
};
</script>


# 查歌
这里的查歌是指通过**歌曲曲名来查歌**，具体来说是查谱面。

用菌菌查歌时，**先**通过`曲名`来查找歌曲的`id`，**再**通过`id`加上`难度`来查找具体的谱面。  

除此之外，还可以[**通过歌曲别名来查歌**](../taiko/alia-search.md)，这一部分请参考下节的内容。

<!-- > [!TIP] 明确
>  菌菌曲库中的`id`和部分人所知道的`uniqueId`、`曲id`没有任何关系 -->

### 先通过关键字查找歌曲id
发送 `"查歌"+关键字` 来使用关键词查歌，这里的`关键字`会被用来查查询歌曲的曲名。

<Chatbox :messages="chatMessages1" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

用于查歌的`关键字`将会匹配歌曲的`曲名`、`汉化曲名`。  
  

另外，当`关键字`是由英文字母和数字组成时，将会将它作为日语的`罗马音`对歌曲的`曲名`进行匹配：

<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

> [!TIP] 提示
> 日文曲名的罗马音均为机翻进行匹配的，可能会出现一定程度的错误。

### 再通过id查询谱面
发送`难度+"id"+查到曲名前的编号`来让菌菌发出谱面吧！

<Chatbox :messages="chatMessages3" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

其中，`难度`的部分是民间的简略称呼，它们的对应关系如下：
<table><thead><tr><th>简单</th><th>普通</th><th>困难</th><th>魔王</th><th>魔王(里)</th></tr></thead><tbody><tr><td>梅</td><td>竹</td><td>松</td><td>鬼</td><td>里</td></tr></tbody></table>
