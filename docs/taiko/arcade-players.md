<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages1: [
        { sender: 'me', text: '上海哪有鼓' },
        { sender: 'other', text:'...\nID:310104002【天天玩上海徐汇汇银广场店】\n地址：上海市徐汇区华山路2088号汇银广场7M楼\n...' },
        { sender: 'me', text: '/绑定机厅 310104002 ttw' },
        { sender: 'other', text:`绑定成功！给【天天玩上海徐汇汇银广场店】绑定了【ttw】作为别名。
之后可以发送【ttwx人】和【ttw几人】来汇报和查询人数哦！`},
      ],
      chatMessages2: [
        { sender: 'me', text: 'ttw几人' },
        { sender: 'other', text:`暂时还无人汇报哦` },
        { sender: 'me', text: 'ttw1人' },
        { sender: 'other', text:`汇报成功，现在1人！` },
        { sender: 'me', text: 'ttw几人' },
        { sender: 'other', text:`你在1分钟0秒前汇报了【ttw1人】` },
        { sender: 'me', text: 'ttw-1人' },
        { sender: 'other', text:`汇报成功，现在0人！` },
        { sender: 'me', text: 'ttw+3人' },
        { sender: 'other', text:`汇报成功，现在3人！` },
        { sender: 'me', text: 'ttw几人' },
        { sender: 'other', text:`你在1分钟0秒前汇报了【ttw3人】` },
      ],
      chatMessages3: [
        { sender: 'me', text: '/本群机厅' },
        { sender: 'other', text:'id: 310104002 【天天玩上海徐汇汇银广场店】 别名【ttw】' }
      ],
      chatMessages4: [
        { sender: 'me', text: '/机厅人数' },
        { sender: 'other', text:'天天玩上海徐汇汇银广场店：0人' }
      ],
      chatMessages5: [
        { sender: 'me', text: '/解绑机厅 ttw' },
        { sender: 'other', text:'解绑成功！' }
      ],
    };
  },
};
</script>


# 机厅人数
可以给群绑定机厅，然后由群友汇报人数。以此汇总机厅人数来安排出勤计划。

::: danger 注意⚠️
QQ官方Bot版菌菌不支持这个功能
:::

## 绑定机厅
机厅与群是通过`机厅的ID`和为`机厅定的别名`进行绑定的。机厅的ID请通过[查鼓点](../taiko/find-arcades.md)来查询。得到ID后，发送`/绑定机厅 (ID) (别名)`来将群与机厅绑定。

<Chatbox :messages="chatMessages1" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

> [!TIP] 机厅绑定规则
> - 一个群可以绑定多个机厅，一个**机厅也可以绑定多个别名**。
> - 别名与机厅的绑定是每个群独立的。本群绑定的机厅别名在别的群不会生效；别的群给不同的机厅起了一个和本群一样的别名也不会互相影响。
> - 机厅人数是所有群共享的，不同群可以给同一个机厅汇报和查询人数。

::: details 机厅ID是哪来的？
那个ID是由菌菌自己定义的ID，由机厅所在市的6位的市级行政区划代码加上对该市所有机厅的顺序编号组成。
:::

## 查询与汇报人数
就像菌菌提示的那样，直接发送`(别名)(人数)人`和`(别名)几人`来汇报和查询人数。

> [!NOTE]
> 在汇报人数的`(别名)(人数)人`中，`(人数)`的部分也可以包含`+`、`-`两个运算符，使用运算符代表在最新汇报的人数基础上加或减去本次汇报的人数。

<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

## 其它操作
机厅列表、一键查询所有机厅人数、解绑机厅

### 群机厅列表
发送`/本群机厅`即可查看本群绑定了的机厅和它们对应的别名。

<Chatbox :messages="chatMessages3" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

### 查询所有机厅人数
发送`/机厅人数`即可一键查询本群绑定了的所有机厅的人数。

<Chatbox :messages="chatMessages4" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

### 与机厅解除绑定
发送`/解绑机厅 (别名)`即可将已绑定的机厅解绑。

<Chatbox :messages="chatMessages5" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />