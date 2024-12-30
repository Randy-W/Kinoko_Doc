<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages1: [
        { sender: 'me', text: '/小游戏' },
        { sender: 'other', text:`来玩小游戏吧。根据听到的音乐，回答列出曲名的序号（数字）
1.SORA‐Ⅱ グリーゼ581
2.命に嫌われている。（里）
3.冬竜 ～Toryu～（表）
4.Central Dogma Pt．1（表）
5.ひよこ鑑定士さん
6.ノるどん2000
7.仙酌絶唱のファンタジア
8.Taiko Drum Monster（里）` },
      ],
      chatMessages2: [
        { sender: 'me', text: '/本群小游戏排名' },
        { sender: 'other', text:`第一名：昊猫，总共答对12题` },
      ],
      chatMessages3: [
        { sender: 'me', text: '4' },
        { sender: 'other', text:`回答错误
剩余4次机会` },
        { sender: 'me', text: '5' },
        { sender: 'other', text:`回答正确
正确答案是:2.命に嫌われている。（里）
本回合优胜者是【昊猫】` },
      ],
      chatMessages4: [
        { sender: 'me', text: '/小游戏设置' },
        { sender: 'other', text:`命令格式：
小游戏设置 畅玩
小游戏设置 限制 <冷却时间（秒）> <一次周期内可玩的次数>
小游戏设置 禁用` },
        { sender: 'me', text: '/小游戏设置 限制 300 2' },
        { sender: 'other', text:`设置成功` },
        { sender: 'me', text: '/小游戏设置 畅玩' },
        { sender: 'other', text:`设置成功` },
      ],
    };
  },
};
</script>

# 小游戏
听谱面的鼓点来猜歌曲的小游戏。
> [!NOTE] 提示
> 不要在群友正常交流时玩上头哦！

## 来！游戏要开始咯！
发送`/小游戏`来开始游戏！

<Chatbox :messages="chatMessages1" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

发送`答案前的数字编号`来进行`抢答`！

<Chatbox :messages="chatMessages3" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

## 查看排名和设置
发送`/本群小游戏排名`就可以看到排名了，只显示前三名哦。
<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

**为了避免`/小游戏`功能打扰到群友正常交流，可以对它限制频率或者关闭。**  
要进行限制，需要发送`/小游戏设置 限制 <冷却时间（秒）> <一次周期内可玩的次数>`  
完全禁止和取消限制分别是`/小游戏设置 禁用`和`/小游戏设置 畅玩`

<Chatbox :messages="chatMessages4" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

> [!NOTE] 注意
> 小游戏设置需要管理员或群主才可以操作。在没有进行设置时，小游戏默认是`限制`模式。