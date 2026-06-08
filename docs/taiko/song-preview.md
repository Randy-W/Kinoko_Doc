<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages1: [
        { sender: 'me', text: '/播放 2354' },
        { sender: 'other', text:`我找到了23点54分，通往阳光旅途的前奏的鬼难度。
这谱我之前玩过！直接给你发，稍微等一会` },
        { sender: 'other', image:'../song_preview.png' },
      ],

      chatMessages2: [
        { sender: 'me', text: '/播放 2354 5区' },
        { sender: 'other', text:`我找到了23点54分，通往阳光旅途的前奏的鬼难度。
这谱我之前玩过！直接给你发，稍微等一会` },
        { sender: 'other', image:'../song_preview.png' },
      ],
    };
  },
};
</script>

# 播放谱面

发送`/播放 <关键词>`来让菌菌发出对应的谱面浏览视频

关键词的部分和[别名查歌](../taiko/alia-search.md)的查歌逻辑一样。

难度是由别名决定的，你也可以在别名前面加难度缩写来指定难度：

<table><thead><tr><th>简单</th><th>普通</th><th>困难</th><th>魔王</th><th>魔王(里)</th></tr></thead><tbody><tr><td>梅</td><td>竹</td><td>松</td><td>鬼</td><td>里</td></tr></tbody></table>

<Chatbox :messages="chatMessages1" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko_no2.png" />

## 演奏选项
> 开发中

你可以在指令末尾追加一些演奏选项。目前具备的演奏选项只有指定AI对战演奏中的区数。

### AI对战演奏的区数
在末尾加`<数字>区`可以指定让菌菌发送谱面浏览按照AI对战演奏中的区数划分的一部分。

<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko_no2.png" />




## 视频的缓存与清理
你可能会觉得这些视频占用了太多存储空间。不用担心，预览播放这些视频产生的数据被QQ算作了缓存数据而非聊天记录的一部分。

因此你可以在QQ的`设置`→`通用`→`存储空间`→`缓存数据`处点击`清理`按钮，即可清除这些视频缓存。