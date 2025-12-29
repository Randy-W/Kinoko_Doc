<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages1: [
        { sender: 'me', text: '/帮助maimaiDX' },
        { sender: 'other', image:'../helpmaimaidx.jpg' },
        { sender: 'me', text: '/b50' },
        { sender: 'other', text:`...`},
      ]
    };
  },
};
</script>

::: danger 注意⚠️
QQ官方Bot版菌菌不支持这个功能
:::


# 面向舞萌DX的功能
菌菌也包含了除了歌曲有关的舞萌DX相关功能，可以发送`/帮助maimaiDX`来查看具体功能和使用方法。  
由于是通过对开源的[舞萌DX插件](https://github.com/Yuri-YuzuChaN/nonebot-plugin-maimaidx)删减修改而来，故不再详细说明。（应该都会用的吧？

<Chatbox :messages="chatMessages1" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

![帮助maimaiDX](/helpmaimaidx.jpg)