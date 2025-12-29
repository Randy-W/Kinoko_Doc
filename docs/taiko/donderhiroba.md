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
        { sender: 'other', text: '(可爱小咚图像...)' }
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
修改的是你的**称号**，而不是你的玩家名。
:::


## 绑定了之后可以做什么？
目前只可以预览你的小咚装扮和皇冠和评价信息。

发送`/我的小咚`试试吧！
<Chatbox :messages="chatMessages3" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />


> 🚧把看成绩这件事做得有趣、实用、不和其它工具重复的样子...还需要等我进一步开发...


## 更新广场信息
发送`/更新广场`即可，这会更新你的小咚装扮和皇冠与评价信息。
<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />
