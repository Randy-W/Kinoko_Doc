<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {

      chatMessagesView: [
        { sender: 'me', text: '/进步推荐' },
        { sender: 'other', image:'../stepup.png' },
      ],
      chatMessagesViewUpdate: [
        { sender: 'me', text: '/进步推荐' },
        { sender: 'other', text:'可以发送【/更新广场】来同步成绩哦', image:'../search_1.png' },
      ],
      chatMessagesSubmit: [
        { sender: 'me', text: '/进步推荐 提交' },
        { sender: 'other', text:'距离上次更新已经超过十分钟了，我先帮你更新一下广场吧。更新完成后会给你结算然后发新的课题\n如果你只是想刷新推荐歌曲列表而不自动更新广场，直接发送【/进步推荐 刷新】即可。' },
        { sender: 'other', text:'........' },

      ],
      chatMessagesRefresh: [
        { sender: 'me', text: '/进步推荐 刷新' },
        { sender: 'other', text:'我看看...你完成了3个课题（共52个）' },
        { sender: 'other', text:'新课题来了！' },
      ],
    };
  },
};
</script>

# 进步推荐

进步推荐会根据你保存在菌菌里的鼓众广场成绩，为你生成一轮练习课题。你可以把它当成“下一段时间可以照着打的歌单”：每首歌都会给出当前成绩、目标成绩或皇冠目标，以及完成进度。

## 指令速查

| 指令 | 用途 |
| --- | --- |
| `/进步推荐` | 查看当前课题；没有课题时生成新课题 |
| `/进步推荐 提交` | 结算当前课题，并领取新课题 |
| `/进步推荐 刷新` | 不自动更新广场，直接结算并刷新课题 |
| `/更新广场` | 同步最新鼓众广场成绩 |

## 使用前准备

这个功能依赖鼓众广场成绩。第一次使用前，需要先完成[绑定广场](../taiko/donderhiroba.md)


## 查看当前课题

发送`/进步推荐`即可查看当前课题。如果你还没有课题，菌菌会自动生成一轮新的。

<Chatbox :messages="chatMessagesView" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

## 提交并领取新课题

当你想结算这一轮课题，并领取下一轮新课题时，发送`/进步推荐 提交`。

如果距离上次更新广场已经超过十分钟，菌菌会先帮你更新广场，再进行结算。

<Chatbox :messages="chatMessagesSubmit" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />


如果你只是想换一轮推荐，不希望菌菌自动更新广场，可以发送`/进步推荐 刷新`。

<Chatbox :messages="chatMessagesRefresh" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />


## 推荐表怎么看？
拿到表后，不需要完全按照它刷完，挑自己喜欢的那几个课题完成就可以刷新进行下一轮推荐了。

- A组：会给你推荐较基础但比较适合你的歌。这是最推荐参考的部分。
- B组：更加朴素的算法，推荐范围会比A组更广，可能会有你不擅长的歌。
- C组：最近未全连、全良的谱面，会推荐你一口气完成目标。
- D组：比较越级的推荐，对于新手来说十分推荐参考，但是对于具有一定水平的玩家来说就要谨慎了（