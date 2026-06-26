<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessagesMain: [
        { sender: 'me', text: '/rt' },
        { sender: 'other', image:'../rating/1.jpg' },
      ],
      chatMessagesStar: [
        { sender: 'me', text: '/rt 10星' },
        { sender: 'other', text:`我找个笔画一下...
这里就不放完整的了，你可以直接去QQ里试着发一下` },
        { sender: 'other', image:'../rating/2.jpg' },

      ],
      chatMessagesSong: [
        { sender: 'me', text: '/rt 百花缭乱' },
        { sender: 'other', image:'../rating/3.jpg' },

      ],
      chatMessagesSeries: [
        { sender: 'me', text: '/rt 季曲系列' },
        { sender: 'other', image:'../rating/4.jpg' },

      ],
      chatMessagesStatic: [
        { sender: 'me', text: '/rt rt10.4' },
        { sender: 'other', text:`我找个笔画一下...
这里就不放完整的了，你可以直接去QQ里试着发一下` },
        { sender: 'other', image:'../rating/5.jpg' },

      ],
      chatMessagesAliasStatic: [
        { sender: 'me', text: '/rt 10.4' },
        { sender: 'other', text:'提示：你正在按照别名查歌，"10.4"指的是别名表格里填的菌菌过关难度。\n如果你要查Rating定数的10.4，请使用"/rt rt10.4"', image:'../rating/8.jpg' },

      ],
      chatMessagesStats: [
        { sender: 'me', text: '/rt 统计' },
        { sender: 'other', text:`我找个笔画一下...
这里就不放完整的了，你可以直接去QQ里试着发一下` },
        { sender: 'other', image:'../rating/6.jpg' },

      ],
      chatMessagesRadar: [
        { sender: 'me', text: '/rt 体力' },
        { sender: 'other', image:'../rating/7.jpg' },

      ],
    };
  },
};
</script>

# Rating

菌菌的太鼓 Rating 是一个民间自制的推分参考系统。

::: warning 注意
这个 Rating 系统的定数、算法等都是民间自制的，可以用于推分娱乐、水平参考。

但它不能代表官方，也不是官方认可的成绩。
:::


## 指令速查

这篇文档比较长，你可以慢慢看，也可以从这里的索引直接跳转

| 指令示例 | 用途 |
| --- | --- |
| `/rt` | [查看自己的 Rating 分表](../taiko/rating.md#查看自己的-rating-分表) |
| `/rt 10星` | [查看指定星级的定数表](../taiko/rating.md#按星级查定数表) |
| `/rt 百花缭乱` | [查单曲 Rating](../taiko/rating.md#查单曲-rating) |
| `/rt 季曲系列` | [查一个关键词匹配到的多首歌](../taiko/rating.md#一次查多首歌) |
| `/rt rt10.4` | [按定数查歌曲](../taiko/rating.md#按-rating-定数查歌曲) |
| `/rt 统计` | [查看 Rating 统计图](../taiko/rating.md#查看-rating-统计) |
| `/rt 体力` | [让分表按指定六维能力排序](../taiko/rating.md#按六维能力排序) |

最后，是Rating计算方法、Rating怎么看、以及其它说明。



## 使用前准备

Rating 依赖鼓众广场成绩，所以需要先绑定广场。请直接看[绑定广场](../taiko/donderhiroba.md)对应的文档

如果已经绑定过，只要成绩有变化，记得先发送`/更新广场`。


## 查看自己的 Rating 分表

发送`/rt`可以查看自己的 Rating 分表。

<Chatbox :messages="chatMessagesMain" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

图中，前20首将参与Rating和六维数值的计算，下面的“候补乐曲”是当前获得Rating没进前20但经过推分也可以进入前20的谱面。


## 按星级查定数表

发送`/rt <星数>星`可以查看指定星级的 Rating 定数表，例如`/rt 10星`。

<Chatbox :messages="chatMessagesStar" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

这张表会把同一星级下已经纳入 Rating 系统的谱面按 Rating 定数整理出来，并带上你自己的成绩一起显示。

## 查单曲 Rating

发送`/rt 关键词`可以查单曲 Rating。

这里的关键词使用的是[别名查歌](../taiko/alia-search.md)一样的逻辑，可以填歌曲别名、曲名片段、`id`，也可以在前面加难度缩写。

<Chatbox :messages="chatMessagesSong" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

单曲图会显示这首谱面的 良率-Rating 曲线，这对于推分目标来说十分有用。


## 一次查多首歌

如果在上面说的“查单曲 Rating”中的关键词匹配到多首歌时，菌菌会把这些歌整理成列表。例如某个系列别名、出处作品别名、或者大家常用的一组歌曲别名等。

<Chatbox :messages="chatMessagesSeries" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />


## 按 Rating 定数查歌曲

发送`/rt rt定数`可以查看某个 Rating 定数下的歌曲，例如`/rt rt10.4`。

<Chatbox :messages="chatMessagesStatic" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

这里要特别注意：`/rt 10.4`和`/rt rt10.4`不是一回事。

<Chatbox :messages="chatMessagesAliasStatic" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

`/rt 10.4`会走别名查歌逻辑，查的是别名表里填的“菌菌难度 10.4”。如果你想查 Rating 定数，前面一定要多写一个`rt`。

## 查看 Rating 统计

发送`/rt 统计`可以查看自己的 Rating 统计图。它会汇总近期出勤、Rating 曲线、成绩变化和一些成绩小统计。

<Chatbox :messages="chatMessagesStats" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

## 按六维能力排序

发送`/rt 大歌力`、`/rt 体力`、`/rt 高速力`、`/rt 精度力`、`/rt 节奏处理`、`/rt 复合处理`，可以让分表按对应能力项排序。

<Chatbox :messages="chatMessagesRadar" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

这个功能适合看自己某一类谱面的强项和短板。比如想知道体力相关的高贡献曲，就可以发送`/rt 体力`。


## 借物表
Rating系统不是菌菌设计的，我只做了一些易用性上的调整。

[**Rating系统仓库**](https://github.com/OurTaiko/taiko-rating-analyzer)。

你也可以用他们的[网页版Rating系统](https://rating.ourtaiko.org/)，通过[菌菌控制台](https://kinoko.zorua.cn/account?tab=public)中`账号信息→第三方访问`创建一个API密钥就可以将分数导入了。

[**定数来源**](https://fumen-database.com/difficulty)

是常用的日本太鼓wiki制定的，具备一定的权威性。




## Rating 是怎么计算的

其实和其它音游的计算方法差不多，先给每个谱面准备一个定数，然后把成绩按照良率结合定数来算出你获得了多少Rating得分。

主要区别：这个Rating计算的不是排名靠前谱面的平均分，而是**中位数**

具体流程大概是这样：

1. 只取已经纳入 Rating 系统的谱面，目前主要计算魔王难度相关成绩。
2. 对每首歌计算良率：`(良 + 可 / 2) / 总音符数`。全良会按`100%`处理，准确率低于`75%`的成绩不会参与计算。
3. 用“定数”和“良率”算出这首歌的单曲 Rating。简单说，定数会先换成谱面难度侧的数值，准确率会换成成绩表现侧的数值，然后再把这两边合成一个单曲 Rating。

::: details 单曲 Rating 的详细计算过程

设谱面 Rating 定数为 $C$，它在定数映射表中对应的难度侧数值为 $X$。准确率 $a$ 的计算为：

$$
a=\operatorname{clamp}\left(\frac{\text{良}+\text{可}/2}{\text{总音符数}},0,1\right)
$$

如果这条成绩是全良记录，菌菌会直接按 $a=1$ 计算。之后用 $a$ 计算成绩侧数值 $Y$：

$$
Y(a)=
\begin{cases}
0, & a \le 0.75 \\
16730(a-0.75)^{3.805}, & 0.75 < a \le 0.8278 \\
56.4468a-45.7187, & 0.8278 < a \le 0.9793 \\
v_{g2}+\dfrac{f(a)-v_{g2}}{v_1-v_{g2}}(15.5-v_{g2}), & 0.9793 < a \le 1
\end{cases}
$$

其中：

$$
f(t)=0.2246e^{120(t-0.972)}+9.02,\quad
v_{g2}=f(0.9793),\quad
v_1=f(1)
$$

接着计算合成参数 $p$ 和 $w$：

$$
p=150-\sqrt{\max\left(0,22500-\frac{(X-Y)^2}{2}\right)}
$$

$$
T_w=25-\frac{(X-15.5)^2}{25}-\frac{(Y-23)^2}{69}
$$

$$
w=
\begin{cases}
\max(0.5,\sqrt{T_w}-4), & T_w \ge 0 \\
0.5, & T_w < 0
\end{cases}
$$

最终单曲 Rating 为：

$$
R_{\text{song}}=
\begin{cases}
X^wY^{1-w}, & p=0 \\
\left(wX^p+(1-w)Y^p\right)^{1/p}, & p \ne 0
\end{cases}
$$

:::

4. 把你成绩中所有谱面按单曲 Rating 排序，总 Rating 主要看前 20 首的中位数；当前 20 首整体表现已经很高时，会再按加权平均给一点高分补偿。
5. 六维能力对应定数中的留个谱面维度定数，计算方法和Rating本身差不多。


## Rating怎么看？
发`/rt`得到你的分表，看其中的前20首。想要得到最有效的练习，建议选择自己够一够就能打出来的分，过难、过简单的都不太合适。选择这前20首里比较普遍的定数，发送`/rt rt<定数>`来查相似定数的歌，就可以开练了。

同时这前20首也能代表你的分数情况，也算是你能拿得出手的歌了。你可以这些歌曲的共同点看出你的擅长处和薄弱点。要是里面逆天歌很多，你也可以向别人炫耀你是个绝活哥（

至于六维，我建议是将它作为反映自己长处的参考，而不是作为练习方向的参考。在达到一个很顶尖的水平之前，其实练什么都能提升，只要练习方式别走歪路就行了（比如坚持硬扛手法）

不用对自己六维图像的形状产生任何的焦虑，大家都是这么过来的，玩就是了。当你真的因为某个薄弱点难以提升水平，此时的你比任何人、任何数值计算的系统都要更清楚自己的弱点。

## 写在最后
你可以发现，菌菌把所有关于`/rt`的功能全部浓缩在这里了。只要你不发送以`/rt`开头的指令，就不会看到任何关于这个Rating系统的东西。

官方直到现在也没有任何一个可以用来评价自己水平的数值，我想，可能南梦宫对于太鼓达人这款游戏的定位就是这样的吧：只要玩得开心就好了。无论是挑战高难度谱面享受音游的爽感、或者是开七星八星的一些流行音乐感受鼓点和音乐的结合，这都是太鼓达人这款游戏的一部分。在当下普遍又快又急又容易变得功利的环境里还能保持这份纯粹也算是一件难得的事了。

如果你也不喜欢被数值定义自己，不要发`/rt`就可以了，菌菌把选择权留给了你。