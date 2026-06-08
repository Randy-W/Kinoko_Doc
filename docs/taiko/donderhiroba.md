<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages: [
        { sender: 'me', text: '/绑定广场 114514' },
        { sender: 'other', text: '【田所浩二】...这是你的账号吧？\n请在广场设置一个包含“ド”的称号，然后回来再次发送这个绑定命令【/绑定广场 114514】，就可以确认绑定了' },
        { sender: 'me', text: '/绑定广场 114514' },
        { sender: 'other', text: '绑定成功！' },
      ],
      chatMessages2: [
        { sender: 'me', text: '/更新广场' },
        { sender: 'other', text: '更新成功！' }
      ],
      chatMessages3: [
        { sender: 'me', text: '/我的小咚' },
        { sender: 'other', text: '(你的小咚图像...)' }
      ],
      chatMessages4: [
        { sender: 'me', text: '查分 atoz' },
        { sender: 'other',image:'../song_score.jpg' }
      ],
    };
  },
};
</script>

# 和鼓众广场连接
你可以通过菌菌将自己的QQ与鼓众广场绑定，以获取自己的游戏信息。
::: danger 注意
**在普通版菌菌上绑定之后，QQ官方Bot版菌菌需要重新绑定，因为QQ官方Bot没办法知道你的QQ号。**

但是保存下来的鼓众广场用户信息只有一份，在两个版本的菌菌中是互通的。
:::

## 绑定方法
发送`/绑定广场`+`你的鼓众广场用户ID`，然后按照菌菌的提示操作即可。

<Chatbox :messages="chatMessages" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

::: tip 提示
修改的是你的**称号**，不是你的玩家名。
:::


## 绑定了之后可以做什么？

### 看小咚形象

发送`/我的小咚`试试吧！图片是透明底的，如果想用来做什么的话就省去你抠图的时间了
<Chatbox :messages="chatMessages3" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />


### 查分
发送`查分+关键词`或者`我<关键词>多少分`就可以用你输入的关键词查分了，和[别名查歌](../taiko/alia-search.md)的机制相同。

查询的难度是根据别名来的，如果没匹配到别名走模糊搜索的话，不指定难度默认发最高难度

<Chatbox :messages="chatMessages4" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

> 中间的评价刻度尺中，预测达标各个评价的成绩所使用的连打秒速是按照你当前分数里的秒速计算的。
>
> 如果你的连打太少导致即时全良都不能达到“极”评价时，也会提醒你补几个连打



## 更新广场信息
发送`/更新广场`即可，这会更新你的小咚装扮和皇冠与评价信息以及歌曲分数。
<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />
