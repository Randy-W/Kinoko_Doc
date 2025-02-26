<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages1: [
        { sender: 'me', text: '百花缭乱歌在哪' },
        { sender: 'other', text:`这首歌的汉化曲名为【百花缭乱】，收录于南梦宫原创音乐区，位于分类文件夹中第144个（共504曲），在分类文件夹中靠上的位置，正着找就好。`,image:'../song_loc.png' },
      ],
      chatMessages2: [
        { sender: 'me', text: '查歌 百花' },
        { sender: 'other', image:'../search_1.png' },
        { sender: 'me', text: '位置id764' },
        { sender: 'other', text:`这首歌的汉化曲名为【百花缭乱】，收录于南梦宫原创音乐区，位于分类文件夹中第144个（共504曲），在分类文件夹中靠上的位置，正着找就好。`,image:'../song_loc.png' },
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


# 歌曲位置
这是一个帮助你查询歌曲在**国行太鼓之达人街机**中位置的功能，方便不熟悉汉化曲名的老玩家和不熟悉曲库的新玩家快速找歌。有两种方式查找歌曲位置。

### 通过id查找
与[查歌](../taiko/search.md)类似，先查找歌曲的`id`，然后再通过`id`来找位置。  
只需要把[查歌](../taiko/search.md)流程中`难度+"id"+数字编号`里面的`难度`改成`"位置"`两个字。就像这样：


<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

### 通过别名查找
和[别名查歌](../taiko/alia-search.md)类似，发送`别名+"歌在哪"`就可以直接得到歌曲位置了。  
也就是把[别名查歌](../taiko/alia-search.md)中`别名+"是什么歌"`里的`是什么歌`改成`歌在哪`。就像这样：

<Chatbox :messages="chatMessages1" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />
