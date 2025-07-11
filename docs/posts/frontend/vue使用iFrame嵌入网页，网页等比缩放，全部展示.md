---
date: 2025-07-11
category:
  - frontend
tag:
  - vue
  - frontend
---

# vue 使用 iFrame 嵌入网页，网页等比缩放，全部展示

```html
<div class="iframe_box">
  <iframe
    class="frameDom"
    :id="`bi_iframe${index}`"
    @load="adjustIframe('bi_iframe'+index)"
    :key="item.count"
    :src="item.iframeUrl"
    frameborder="0"
    scrolling="no"
    allowfullscreen
    sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-downloads"
  >
  </iframe>
</div>

<script setup>
  /**
   * 等比例缩放
   */
  const previewObj = ref({
    //内嵌地址的宽高
    widthValue: 1800,
    heightValue: 600,
  });
  const adjustIframe = (div) => {
    var iframe = document.getElementById(div);
    // 获取父级容器的宽高  //iframe_box设置的高宽 最好给固定值 在这里可以直接拿到
    var containerWidth = 600;
    var containerHeight = 200;

    // 计算缩放比例
    var scaleWidth = containerWidth / previewObj.value.widthValue;
    var scaleHeight = containerHeight / previewObj.value.heightValue;
    var scale = Math.min(scaleWidth, scaleHeight); // 选择较小的缩放比例以保持宽高比
    // 应用缩放和定位
    iframe.style.transformOrigin = "top left";
    iframe.style.transform = `scale(${scale}) translate(-50%, -50%)`;

    // 如果需要，可以调整iframe的宽高以匹配容器
    // 但由于我们使用了scale，所以通常不需要这样做
    iframe.style.width = `${previewObj.value.widthValue}px`;
    iframe.style.height = `${previewObj.value.heightValue}px`;
  };
</script>

<style lang="scss">
  .iframe_box {
    width: 600px;
    height: 200px;
    position: relative;
    overflow: hidden;
    .frameDom {
      width: 100%;
      height: 100%;
      border: none;
      position: absolute;
      top: 50%;
      left: 50%;
      /* 初始不应用缩放 */
      transform: none;
      transition: transform 0.3s ease;
      /* 可选的过渡效果 */
    }
  }
</style>
```
