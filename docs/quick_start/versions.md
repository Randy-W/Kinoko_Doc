<script>
import Chatbox from '/components/messager_group.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
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


# 版本区分

菌菌现在有两个版本：昵称旁带有QQ Bot标志的官方Bot版本、一直以来使用的没有标志的版本

两个版本只靠那个标志区分。

## 区别

::: tip 最大的区别
官方bot在**群里使用时**，不加@就收不到消息。**小窗单独使用可以收得到**。

只要能收到消息，就和菌菌一直以来的使用方法没有差异。
:::

<Chatbox :messages="messages1" />

::: danger 务必注意
那个@必须在以下情况下之一才有效：由自己打出、长按菌菌头像、打出/然后从指令列表里选择功能

**复制自己或别人的消息里包含的@是无效的，尽管看起来没有区别**
:::


在功能使用上，我对[“查歌”](../taiko/search)和[“别名查歌”](../taiko/alia-search)做了对官方bot的易用性上的修改，请查看对应的文档。