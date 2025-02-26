<script>
import Chatbox from '/components/messager.vue'
export default {
  components: {
    Chatbox,
  },
  data() {
    return {
      chatMessages1: [
        { sender: 'me', text: '/段位 绿' },
        { sender: 'other', image:'../dani_1.png' },
      ],
      chatMessages2: [
        { sender: 'me', text: '/段位' },
        { sender: 'other', text:`目前可以查询段位的版本有："2024夏", "虹2024", "虹2023", "虹2022", "虹2021", "虹2020", "绿", "蓝", "黄", "红", "白", "紫", "黄绿", "桃色", "空色", "KATSU-DON""

发送【/段位+版本】即可查段位表，如【/段位 绿】
或者发送段位名称来查历年该段位课题曲，如【/段位 十段】` },
      ],
      chatMessages3: [
        { sender: 'me', text: '/段位 十段' },
        { sender: 'other', image:'../dani_2.png' },
      ],
      chatMessages4: [
        { sender: 'me', text: '/段位 绿 十段' },
        { sender: 'other', image:'../dani_3.png' },
      ],
    };
  },
};
</script>


# 段位
通过这个功能可以查询`指定版本的段位信息`、`历代街机指定段位汇总信息`、`指定段位的详细信息`。

## 查指定版本
发送`/段位 (版本)`来查看同一个版本的所有段位。

<Chatbox :messages="chatMessages1" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

如果不知道有什么版本可以查，可以发送`/段位`来查看，同时也会附带一个简短的使用方法。

<Chatbox :messages="chatMessages2" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

## 查历代段位
发送`/段位 (段位)`来查看同一个版本的所有段位。其中`(段位)`的部分填入的是想查的段位名称。

<Chatbox :messages="chatMessages3" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />

## 查段位课题详情
需要将版本和段位结合来精确定位段位。发送`/段位 (版本) (段位)`来查询。

<Chatbox :messages="chatMessages4" 
myAvatar='../avatar_neko.png' 
otherAvatar="../avatar_kinoko.png" />