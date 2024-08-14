# Weapp Icon Button

🌞 微信小程序图标按钮自定义组件

> 更多微信小程序开发工具，查看 [微信小程序开发全家桶](https://www.liiiiiiu.com/dev/weapp-dev-bucket)

## 安装

图标按钮依赖于 [vant-weapp](https://vant-ui.github.io/vant-weapp/#/quickstart)，***务必先安装 Vant Weapp***

```bash
npm i @vant/weapp -S --production

npm i weapp-icon-button
```

> 注意：在小程序中使用npm包前，需先[构建 npm](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

## 使用

图标按钮相关参数可查看源码 properties 字段，或参考 [Button 按钮](https://vant-ui.github.io/vant-weapp/#/button)

```javascript
// index.json

{
  "component": true,
  "usingComponents": {
    "icon-button": "weapp-icon-button/IconButton/IconButton",
  }
}
```

```html
<icon-button
  size="large"
  type="default"
  icon="like"
  icon-size="1.6em"
  bind:click="onClick"
/>

<icon-button
  size="normal"
  type="primary"
  icon="like"
>
  <view class="text-xs">客服</view>
  <button open-type="contact" class="absolute inset-0 z-10 w-full h-full opacity-0"></button>
</icon-button>

<icon-button
  type="info"
  plain
  image="/light.png"
/>

<icon-button
  size="small"
  type="warning"
  icon="user"
  disabled
/>

<icon-button
  size="mini"
  type="danger"
  plain
  icon="user-o"
  loading
  loading-type="spinner"
/>
```

![WeChat12fc6259092106a585ca1a34d68623bd.jpg](https://s2.loli.net/2024/08/14/2Uh4wg3IAYTNc6u.jpg)