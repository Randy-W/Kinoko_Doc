<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages1: [
        { sender: 'me', text: '马戏团是什么歌' },
        { sender: 'other', text:`你找的是不是：鬼 id2555
【SoulStone -闇喰イサァカス団-
        --清風明月（Drop×葉月ゆら）】`, image:'../search4.png' },
      ],
      chatMessages2: [
        { sender: 'me', text: '/更新别名' },
        { sender: 'other', text:`更新中，稍等！` },
        { sender: 'other', text:`更新完成` },
      ],
      chatMessages3: [
        { sender: 'me', text: '百花缭乱有什么别名' },
        { sender: 'other', text:`这首歌是【百花繚乱】，它有以下这些别名：
百花
分歧
画龙点睛系列
画龙系列
武斗
国行待机音乐

如果末尾有里谱的标注在查歌时请忽略。` }
      ],
      chatMessages4: [
        { sender: 'me', text: 'id764是什么歌' },
        { sender: 'other', text:`你找的是不是：鬼 id764
【百花繚乱】（以下略`, image:'../search_3.png' },],
chatMessages5: [
        { sender: 'me', text: 'dofad是什么歌' },
        { sender: 'other', text:`你找的是不是：里 id1609
【Re：End of a Dream
        --uma vs. モリモリあつし】`, image:'../无语.jpg' },],

        chatMessages6: [
        { sender: 'me', text: '@菌菌 马戏团是什么歌' },
        { sender: 'other', text:`你找的是不是：鬼 id2555
【SoulStone -闇喰イサァカス団-
        --清風明月（Drop×葉月ゆら）】\n（谱面图略` },
        { sender: 'me', text: '提示：直接打出“/”，然后选择“/别名查歌”，再输入关键词就行了' },
        { sender: 'me', text: '@菌菌 /别名查歌 马戏团' },
        { sender: 'other', text:`你找的是不是：鬼 id2555
【SoulStone -闇喰イサァカス団-
        --清風明月（Drop×葉月ゆら）】\n（谱面图略` },
        ]
    };
  },
};
</script>


# 别名查歌
相比于关键字查询的方式，这是一种快速查到谱面的方法。  

## 使用方法
直接发送`关键字+"是什么歌"`就可以查询了。  
这里的`关键字`将会用来匹配歌曲的别名，需要和别名完全相同的时候才能匹配成功。


<Chatbox :messages="chatMessages1" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko_no2.png" />

另外，当没有通过`关键字`匹配到别名时，菌菌会把输入的`关键字`进行一次普通的[查歌](../taiko/search.md)流程，如果**只找到了一首歌**就会把最高难度的谱面发出来。比如...
<Chatbox :messages="chatMessages5" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko_no2.png" />

## 针对QQ官方Bot的优化
因为使用官方bot时，打出“/”会弹出指令列表，所以我在指令列表中加入了“**/别名查歌**”功能。省得去@了。**小窗自己用不需要@**

当然，你手动@菌菌然后输入“xxx是什么歌”也是可以用的。

::: tip
**这个“/别名查歌 xxx”功能和“xxx是什么歌”完全一样**

**只是把“xxx是什么歌”里面的“xxx”放到“/别名查歌”后面而已**
:::

<Chatbox :messages="chatMessages6" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />


## 添加别名
如果对歌曲别名有新的想法，可以进入[太鼓歌曲别名收集表](https://www.kdocs.cn/l/cauSVZId2ohu)来填写别名。像大家填好的那样，在对应歌曲后方写上你想添加的别名即可。  
在表格中添加完成后，需要向菌菌发送`/更新别名`来将表格的内容应用给菌菌。就像这样：

> [!NOTE] 注意
> **在填写时，请遵守[别名规范](../taiko/alia-search-requirement.md)**

<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko_no2.png" />

<!-- > [!IMPORTANT] 注意
> - 表格里的歌曲可能会因为菌菌曲库的更新而落后。如果已经通过搜索之类的方法确定了表格内并没有新加入的歌，你可以自己在**对应分区的工作表的最后一行手动添加该歌曲，填入歌曲的id和曲名即可。**
> 
> - 注意id必须正确，也避免添加已经存在的歌曲，添加前请务必确认表格中缺少该歌曲。 -->


## 查看别名
发送`"(别名)有什么别名"`可以快速查看该歌曲的所有别名，也就是**通过别名查别名**。
<Chatbox :messages="chatMessages3" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko_no2.png" />

## 另外...
为了符合直觉，通过别名查歌和通过别名查别名的时候，可以将`别名`改成`id+数字编号`，菌菌自动转换成[查歌](../taiko/search.md)流程中的`通过id查谱面`，等同于`最高难度 id+数字编号`。比如：
<Chatbox :messages="chatMessages4" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko_no2.png" />