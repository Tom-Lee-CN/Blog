---
date: 2025-06-16
category:
  - frontend
tag:
  - css
  - html
---
# CSS基础



### SEO
常用方法

1. 标签语义化
2. 竞价排名(花钱)
3. 网页制作成 HTML 后缀

网页头部三大标签

1. title 网页标题
2. description 网页描述
3. 网页关键词



#### Favicon 图标
```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" >
```

### 字体与块级效果
```css
.text{
  /* 字体缩进 */
  text-indent: 1em;
  height: 50px;
  /* 字体行高,垂直居中 注意字体要设置一致，否则可能偏上或偏下 */
  line-height: 50px;
  /* 水平居中 */
  text-align: center;
  /* 字体粗细 取值100~900，默认400 */
  font-weight: 100;
  /* 字体斜体取值为italic */
  font-style: normal;
  /* 字体装饰线 取值为underline下划线，overline删除线，line-through顶划线，blink闪烁线*/
  text-decoration: underline line-through;
  /* 字体大小写 取值为small-caps小型的大写梯子，normal正常字体*/
  font-variant: small-caps;
  /* 字体对齐方式 取值为left左对齐，right右对齐，center居中，justify两端对齐 */
  text-algin: left;
  /* 行内块和行内垂直对齐 取值为auto自动，length百分比偏移量 */
  /* 取值为sub文本下标，super文本上标，top顶部对齐，text-top文本顶部对齐,middle居中对齐，bottom底部对齐，text-bottom文本底部对齐 */
  vertical-algin: auto;
}
```

### 文字与边框阴影shadow
```css
.element{
  /*
  参数依次是元素右边，元素下边，模糊距离，阴影颜色，
  如果不需要阴影模糊，则可以将第三个参数直接删除。
  */
  border-shadow: 1px 1px 1px #cccccc;
  text-shadow: 1px 1px 1px #cccccc;
  /* 多层文字阴影 */
  text-shadow: 1px 1px 1px #cccccc, 1px 1px 1px #cccccc;
  text-shadow: inset 1px 1px 1px #cccccc;
}
```

### offsetWidth、offsetHeight

```css
/* 是元素的 高度和宽度且是只读属性, 例如offsetWidth=width+pading-left+padding-right+ border-left+border-right*/
element.offsetWidth

```

### 边框效果border

```css
.box{
  /* 圆角边框 */
  border-radius: 8px;
}
```

### 过渡效果transition
```css
.element{
  /*
  参数依次是 要过渡的CSS属性名称，过渡效果持续时间，过渡期间的速度如何变化，过渡开始前的延迟时间
  第三个参数可选值有ease、linear、ease-in、ease-out、ease-in-out以及 cubic-bezier
  */
  transition: all 1s ease 0s;
}
```

### 2D 变形 <font style="color:rgb(0, 0, 0);">transform</font>
```css
.element:hover{
  /* 平面转换的原点 */
  transform-origin: left center;
  /* 鼠标元素在元素时，放大至1.7倍 */
  transform: scale(1.7);
  /* 向右移动10px， 向下移动20px 亦可百分比translateX translateY*/
  transform: translate(10px, 20px);
  /* 旋转90度 rotateX rotateY按不同的方向旋转*/
  transform: rotate(90deg);
  /* 斜切 */
  transform: skew(10deg, 2deg);
  /* 变形(极少使用) */
  transform: matrix();
}
```

#### 动画效果<font style="color:rgb(0, 0, 0);">keyframes</font>
```css
/* 定义关键帧声明 */
@keyframes warning{
  0%{
    text-shadow: 0px 10px 4px #000000;
  }
  50%{
    text-shadow: 0px 0px 40px #000000;
  }
  100%{
    text-shadow: 0px 0px 4px #000000;
  }
}

.element{
  /* 使用动画，参数依次是 关键字名，动画持续时间，无限循环，alternate反向播放，调数函数linear是匀速运动，延迟0.4秒*/
  animation: warning 1.5s infinite ease-in 0.4s;
  /* 动画暂停 */
  animation-play-state: paused
}
```

<font style="color:rgb(0, 0, 0);">CSS3动画缩写语法可以接受全部7个独立动画属性的值。除了上例中使用的之外，还可以设定animation-delay（动画开始前的延时），animation-play-state（值可以是running或paused，用于控制动画的播放和暂停），最后还有animation-fill-mode，这个属性到现在我也没找到用武之地（默认值是none）。当然也可以不用缩写语法，而是像下面这样将它们一个一个单独列出来：</font>

![](https://cdn.nlark.com/yuque/0/2025/png/27522692/1746785234480-c98ad10b-998e-4fa9-b166-83ecd1d72542.png)



### 鼠标样式
```css
/* 小手 */
cursor: pointer;
```

### 背景图片样式
```css
.element{
  /* 背景图片 */
  background-image: url(imgpath);
  /* 背景图片铺放方式repeat-y垂直平铺 */
  background-repeat: no-repeat;
  /* 背景图片位置取值有left right center top bottom  百分比取值亦可*/
  /* 通过图片定位可以形成精灵图 */
  background-position: left center;
  /* 背景图片固定位置，不受滚动条的移动而改变 */
  background-attachment: fixed;
  /* 
  背景图大小，cover保持背景图本身宽高比例并缩放到正好完全覆盖背景大小
  contain保持图片本身比例，并缩放到适应背景的大小
  可以取值两个数字分别为宽和高
  */
  background-size: 100%
}
```

### 图片

```js
img{
    object-fit:fill;  // 默认，不保证保持原有的比例，内容拉伸填充整个内容容器。
    object-fit:contain; // 保持原有尺寸比例。内容被缩放。
    object-fit:cover; // 保持原有尺寸比例。但部分内容可能被剪切。
    object-fit:none; // 保留原有元素内容的长度和宽度，也就是说内容不会被重置。
    object-fit:scale-down; // 保持原有尺寸比例。内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。
    object-fit:initial; // 设置为默认值
    object-fit:inherit; // 从该元素的父元素继承属性
}
```





### 列表布局

```html
<dl>
  <dt>CSS网站</dt>
  <dd>CSS网站123123</dd>
  <dd>CSS网站123123</dd>
  <dt>HTML网站</dt>
  <dd>HTML网站123123</dd>
  <dd>HTML网站123123</dd>
  <dt>JS网站</dt>
  <dd>JS网站123123</dd>
  <dd>JS网站123123</dd>
</dl>
```

### Flex 布局

```css
.element{
  display: flex;
  /* 设置主轴方向，取值为row默认从左到右，row-reverse反转，column为列，column-reverse反转后的列 */
  flex-direction: row;
  /* 换行方式 取值为norwrap默认不换行， wrap一行放不下时就换行，wrap-reverse从下到上换行为多行*/
  flex-wrap: nowrap;
  /* flex-direction和flex-wrap的一起的简要方式 */
  flex-flow: column wrap;
  /* 主轴的对齐方式 取值为flex-start沿主轴对齐，flex-end反主轴对齐，center居中，space-between三栏布局，space-around,space-evenly*/
  justify-content:flex-start;
  /* 交叉轴对齐方式 取值方式flex-start,flex-end,center, stretch默认,baseline*/
  align-items: flex-start;
  /* 多行对齐，如果只有一条轴线则无效 取值同上 */
  align-content: flex-start;
  /* 间距  主轴于交叉轴*/
  gap: 10px 20px
}
.element .childElement{
  /* 改变排列顺序 默认0 数值越小越靠前*/
  order: 3;
  /* 弹性成长，主轴有剩余空间时才生效 0为禁止放大，多个子item按照flex-grow的比例瓜分剩余空间*/
  flex-grow: 0;
  /* 弹性收缩，(主轴空间不足且禁止换行才有意义)子元素超过父元素大小是进行缩小， 多个子item按照flex-grow的比例分摊缩小空间*/
  flex-shrinik: 1;
  /* 弹性基值  定义元素基础宽度 auto*/
  flex-basis: 200px;
  /* 弹性简写 相当于flex-grow flex-shrinik flex-basis*/
  flex: 0 1 200px;
  /* 自我对齐 允许单个弹性项目覆盖默认的交叉轴对齐方式*/
  align-self: flex-start;

}
```



网页布局（layout）是 CSS 的一个重点应用。

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071001.gif)

布局的传统解决方案，基于[盒状模型](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)，依赖 [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 属性 + [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position)属性 + [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float)属性。它对于那些特殊布局非常不方便，比如，[垂直居中](https://css-tricks.com/centering-css-complete-guide/)就不容易实现。

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071002.png)

2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071003.jpg)

Flex 布局将成为未来布局的首选方案。本文介绍它的语法，[下一篇文章](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)给出常见布局的 Flex 写法。网友 [JailBreak](http://vgee.cn/) 为本文的所有示例制作了 [Demo](http://static.vgee.cn/static/index.html)，也可以参考。

以下内容主要参考了下面两篇文章：[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) 和 [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)。

#### 一、Flex 布局是什么？

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

> ```css
> .box{
> display: flex;
> }
> ```

行内元素也可以使用 Flex 布局。

> ```css
> .box{
> display: inline-flex;
> }
> ```

Webkit 内核的浏览器，必须加上`-webkit`前缀。

> ```css
> .box{
> display: -webkit-flex; /* Safari */
> display: flex;
> }
> ```

注意，设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

#### 二、基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

#### 三、容器的属性

以下6个属性设置在容器上。

> - flex-direction
> - flex-wrap
> - flex-flow
> - justify-content
> - align-items
> - align-content

##### 3.1 flex-direction属性

`flex-direction`属性决定主轴的方向（即项目的排列方向）。

> ```css
> .box {
> flex-direction: row | row-reverse | column | column-reverse;
> }
> ```

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)

它可能有4个值。

> - `row`（默认值）：主轴为水平方向，起点在左端。
> - `row-reverse`：主轴为水平方向，起点在右端。
> - `column`：主轴为垂直方向，起点在上沿。
> - `column-reverse`：主轴为垂直方向，起点在下沿。

##### 3.2 flex-wrap属性

默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png)

> ```css
> .box{
> flex-wrap: nowrap | wrap | wrap-reverse;
> }
> ```

它可能取三个值。

（1）`nowrap`（默认）：不换行。

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png)

（2）`wrap`：换行，第一行在上方。

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg)

（3）`wrap-reverse`：换行，第一行在下方。

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg)

##### 3.3 flex-flow

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

> ```css
> .box {
> flex-flow: <flex-direction> || <flex-wrap>;
> }
> ```

##### 3.4 justify-content属性

`justify-content`属性定义了项目在主轴上的对齐方式。

> ```css
> .box {
> justify-content: flex-start | flex-end | center | space-between | space-around;
> }
> ```

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)

它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。

> - `flex-start`（默认值）：左对齐
> - `flex-end`：右对齐
> - `center`： 居中
> - `space-between`：两端对齐，项目之间的间隔都相等。
> - `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

##### 3.5 align-items属性

`align-items`属性定义项目在交叉轴上如何对齐。

> ```css
> .box {
> align-items: flex-start | flex-end | center | baseline | stretch;
> }
> ```

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

> - `flex-start`：交叉轴的起点对齐。
> - `flex-end`：交叉轴的终点对齐。
> - `center`：交叉轴的中点对齐。
> - `baseline`: 项目的第一行文字的基线对齐。
> - `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

##### 3.6 align-content属性

`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

> ```css
> .box {
> align-content: flex-start | flex-end | center | space-between | space-around | stretch;
> }
> ```

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)

该属性可能取6个值。

> - `flex-start`：与交叉轴的起点对齐。
> - `flex-end`：与交叉轴的终点对齐。
> - `center`：与交叉轴的中点对齐。
> - `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
> - `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
> - `stretch`（默认值）：轴线占满整个交叉轴。

#### 四、项目的属性

以下6个属性设置在项目上。

> - `order`
> - `flex-grow`
> - `flex-shrink`
> - `flex-basis`
> - `flex`
> - `align-self`

##### 4.1 order属性

`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

> ```css
> .item {
> order: <integer>;
> }
> ```

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png)

##### 4.2 flex-grow属性

`flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

> ```css
> .item {
> flex-grow: <number>; /* default 0 */
> }
> ```

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)

如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

##### 4.3 flex-shrink属性

`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

> ```css
> .item {
> flex-shrink: <number>; /* default 1 */
> }
> ```

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg)

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

##### 4.4 flex-basis属性

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

> ```css
> .item {
> flex-basis: <length> | auto; /* default auto */
> }
> ```

它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。

##### 4.5 flex属性

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

> ```css
> .item {
> flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
> }
> ```

该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

##### 4.6 align-self属性

`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

> ```css
> .item {
> align-self: auto | flex-start | flex-end | center | baseline | stretch;
> }
> ```

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png)

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

（完）

### Grid布局

#### 一、概述

网格布局（Grid）是最强大的 CSS 布局方案。

它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。

![img](https://cdn.beekka.com/blogimg/asset/201903/1_bg2019032501.png)

上图这样的布局，就是 Grid 布局的拿手好戏。

Grid 布局与 [Flex 布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是**一维布局**。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是**二维布局**。Grid 布局远比 Flex 布局强大。

#### 二、基本概念

学习 Grid 布局之前，需要了解一些基本概念。

##### 2.1 容器和项目

采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。

> ```markup
> <div>
> <div><p>1</p></div>
> <div><p>2</p></div>
> <div><p>3</p></div>
> </div>
> ```

上面代码中，最外层的`<div>`元素就是容器，内层的三个`<div>`元素就是项目。

注意：项目只能是容器的顶层子元素，不包含项目的子元素，比如上面代码的`<p>`元素就不是项目。Grid 布局只对项目生效。

##### 2.2 行和列

容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）。

![img](https://cdn.beekka.com/blogimg/asset/201903/1_bg2019032502.png)

上图中，水平的深色区域就是"行"，垂直的深色区域就是"列"。

##### 2.3 单元格

行和列的交叉区域，称为"单元格"（cell）。

正常情况下，`n`行和`m`列会产生`n x m`个单元格。比如，3行3列会产生9个单元格。

##### 2.4 网格线

划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。

正常情况下，`n`行有`n + 1`根水平网格线，`m`列有`m + 1`根垂直网格线，比如三行就有四根水平网格线。

![img](https://cdn.beekka.com/blogimg/asset/201903/1_bg2019032503.png)

上图是一个 4 x 4 的网格，共有5根水平网格线和5根垂直网格线。

#### 三、容器属性

Grid 布局的属性分成两类。一类定义在容器上面，称为容器属性；另一类定义在项目上面，称为项目属性。这部分先介绍容器属性。

##### 3.1 display 属性

`display: grid`指定一个容器采用网格布局。

> ```css
> div {
> display: grid;
> }
> ```

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032504.png)

上图是`display: grid`的[效果](https://jsbin.com/guvivum/edit?html,css,output)。

默认情况下，容器元素都是块级元素，但也可以设成行内元素。

> ```css
> div {
> display: inline-grid;
> }
> ```

上面代码指定`div`是一个行内元素，该元素内部采用网格布局。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032505.png)

上图是`display: inline-grid`的[效果](https://jsbin.com/qatitav/edit?html,css,output)。

> 注意，设为网格布局以后，容器子元素（项目）的`float`、`display: inline-block`、`display: table-cell`、`vertical-align`和`column-*`等设置都将失效。

##### 3.2 grid-template-columns 属性， grid-template-rows 属性

容器指定了网格布局以后，接着就要划分行和列。`grid-template-columns`属性定义每一列的列宽，`grid-template-rows`属性定义每一行的行高。

> ```css
> .container {
> display: grid;
> grid-template-columns: 100px 100px 100px;
> grid-template-rows: 100px 100px 100px;
> }
> ```

[上面代码](https://jsbin.com/qiginur/edit?css,output)指定了一个三行三列的网格，列宽和行高都是`100px`。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032506.png)

除了使用绝对单位，也可以使用百分比。

> ```css
> .container {
> display: grid;
> grid-template-columns: 33.33% 33.33% 33.33%;
> grid-template-rows: 33.33% 33.33% 33.33%;
> }
> ```

**（1）repeat()**

有时候，重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用`repeat()`函数，简化重复的值。上面的代码用`repeat()`改写如下。

> ```css
> .container {
> display: grid;
> grid-template-columns: repeat(3, 33.33%);
> grid-template-rows: repeat(3, 33.33%);
> }
> ```

`repeat()`接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。

`repeat()`重复某种模式也是可以的。

> ```css
> grid-template-columns: repeat(2, 100px 20px 80px);
> ```

[上面代码](https://jsbin.com/cokohu/edit?css,output)定义了6列，第一列和第四列的宽度为`100px`，第二列和第五列为`20px`，第三列和第六列为`80px`。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032507.png)

**（2）auto-fill 关键字**

有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用`auto-fill`关键字表示自动填充。

> ```css
> .container {
> display: grid;
> grid-template-columns: repeat(auto-fill, 100px);
> }
> ```

[上面代码](https://jsbin.com/himoku/edit?css,output)表示每列宽度`100px`，然后自动填充，直到容器不能放置更多的列。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032508.png)

除了`auto-fill`，还有一个关键字`auto-fit`，两者的行为基本是相同的。只有当容器足够宽，可以在一行容纳所有单元格，并且单元格宽度不固定的时候，才会有[行为差异](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)：`auto-fill`会用空格子填满剩余宽度，`auto-fit`则会尽量扩大单元格的宽度。

**（3）fr 关键字**

为了方便表示比例关系，网格布局提供了`fr`关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为`1fr`和`2fr`，就表示后者是前者的两倍。

> ```css
> .container {
> display: grid;
> grid-template-columns: 1fr 1fr;
> }
> ```

[上面代码](https://jsbin.com/hadexek/edit?html,css,output)表示两个相同宽度的列。

![img](https://cdn.beekka.com/blogimg/asset/201903/1_bg2019032509.png)

`fr`可以与绝对长度的单位结合使用，这时会非常方便。

> ```css
> .container {
> display: grid;
> grid-template-columns: 150px 1fr 2fr;
> }
> ```

[上面代码](https://jsbin.com/remowec/edit?html,css,output)表示，第一列的宽度为150像素，第二列的宽度是第三列的一半。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032510.png)

**（4）minmax()**

`minmax()`函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

> ```css
> grid-template-columns: 1fr 1fr minmax(100px, 1fr);
> ```

上面代码中，`minmax(100px, 1fr)`表示列宽不小于`100px`，不大于`1fr`。

**（5）auto 关键字**

`auto`关键字表示由浏览器自己决定长度。

> ```css
> grid-template-columns: 100px auto 100px;
> ```

上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了`min-width`，且这个值大于最大宽度。

**（6）网格线的名称**

`grid-template-columns`属性和`grid-template-rows`属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。

> ```css
> .container {
> display: grid;
> grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
> grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
> }
> ```

上面代码指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。

网格布局允许同一根线有多个名字，比如`[fifth-line row-5]`。

**（7）布局实例**

`grid-template-columns`属性对于网页布局非常有用。两栏式布局只需要一行代码。

> ```css
> .wrapper {
> display: grid;
> grid-template-columns: 70% 30%;
> }
> ```

上面代码将左边栏设为70%，右边栏设为30%。

传统的十二网格布局，写起来也很容易。

> ```css
> grid-template-columns: repeat(12, 1fr);
> ```

##### 3.3 grid-row-gap 属性， grid-column-gap 属性， grid-gap 属性

`grid-row-gap`属性设置行与行的间隔（行间距），`grid-column-gap`属性设置列与列的间隔（列间距）。

> ```css
> .container {
> grid-row-gap: 20px;
> grid-column-gap: 20px;
> }
> ```

[上面代码](https://jsbin.com/mezufab/edit?css,output)中，`grid-row-gap`用于设置行间距，`grid-column-gap`用于设置列间距。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032511.png)

`grid-gap`属性是`grid-column-gap`和`grid-row-gap`的合并简写形式，语法如下。

> ```css
> grid-gap: <grid-row-gap> <grid-column-gap>;
> ```

因此，上面一段 CSS 代码等同于下面的代码。

> ```css
> .container {
> grid-gap: 20px 20px;
> }
> ```

如果`grid-gap`省略了第二个值，浏览器认为第二个值等于第一个值。

> 根据最新标准，上面三个属性名的`grid-`前缀已经删除，`grid-column-gap`和`grid-row-gap`写成`column-gap`和`row-gap`，`grid-gap`写成`gap`。

##### 3.4 grid-template-areas 属性

网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。`grid-template-areas`属性用于定义区域。

> ```css
> .container {
> display: grid;
> grid-template-columns: 100px 100px 100px;
> grid-template-rows: 100px 100px 100px;
> grid-template-areas: 'a b c'
>                     'd e f'
>                     'g h i';
> }
> ```

上面代码先划分出9个单元格，然后将其定名为`a`到`i`的九个区域，分别对应这九个单元格。

多个单元格合并成一个区域的写法如下。

> ```css
> grid-template-areas: 'a a a'
>                   'b b b'
>                   'c c c';
> ```

上面代码将9个单元格分成`a`、`b`、`c`三个区域。

下面是一个布局实例。

> ```css
> grid-template-areas: "header header header"
>                   "main main sidebar"
>                   "footer footer footer";
> ```

上面代码中，顶部是页眉区域`header`，底部是页脚区域`footer`，中间部分则为`main`和`sidebar`。

如果某些区域不需要利用，则使用"点"（`.`）表示。

> ```css
> grid-template-areas: 'a . c'
>                   'd . f'
>                   'g . i';
> ```

上面代码中，中间一列为点，表示没有用到该单元格，或者该单元格不属于任何区域。

> 注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为`区域名-start`，终止网格线自动命名为`区域名-end`。
>
> 比如，区域名为`header`，则起始位置的水平网格线和垂直网格线叫做`header-start`，终止位置的水平网格线和垂直网格线叫做`header-end`。

##### 3.5 grid-auto-flow 属性

划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行，即下图数字的顺序。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032506.png)

这个顺序由`grid-auto-flow`属性决定，默认值是`row`，即"先行后列"。也可以将它设成`column`，变成"先列后行"。

> ```css
> grid-auto-flow: column;
> ```

[上面代码](https://jsbin.com/xutokec/edit?css,output)设置了`column`以后，放置顺序就变成了下图。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032512.png)

`grid-auto-flow`属性除了设置成`row`和`column`，还可以设成`row dense`和`column dense`。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。

[下面的例子](https://jsbin.com/wapejok/edit?css,output)让1号项目和2号项目各占据两个单元格，然后在默认的`grid-auto-flow: row`情况下，会产生下面这样的布局。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032513.png)

上图中，1号项目后面的位置是空的，这是因为3号项目默认跟着2号项目，所以会排在2号项目后面。

现在修改设置，设为`row dense`，表示"先行后列"，并且尽可能紧密填满，尽量不出现空格。

> ```css
> grid-auto-flow: row dense;
> ```

[上面代码](https://jsbin.com/helewuy/edit?css,output)的效果如下。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032514.png)

上图会先填满第一行，再填满第二行，所以3号项目就会紧跟在1号项目的后面。8号项目和9号项目就会排到第四行。

如果将设置改为`column dense`，表示"先列后行"，并且尽量填满空格。

> ```css
> grid-auto-flow: column dense;
> ```

[上面代码](https://jsbin.com/pupoduc/1/edit?html,css,output)的效果如下。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032515.png)

上图会先填满第一列，再填满第2列，所以3号项目在第一列，4号项目在第二列。8号项目和9号项目被挤到了第四列。

##### 3.6 justify-items 属性， align-items 属性， place-items 属性

`justify-items`属性设置单元格内容的水平位置（左中右），`align-items`属性设置单元格内容的垂直位置（上中下）。

> ```css
> .container {
> justify-items: start | end | center | stretch;
> align-items: start | end | center | stretch;
> }
> ```

这两个属性的写法完全相同，都可以取下面这些值。

> - start：对齐单元格的起始边缘。
> - end：对齐单元格的结束边缘。
> - center：单元格内部居中。
> - stretch：拉伸，占满单元格的整个宽度（默认值）。

> ```css
> .container {
> justify-items: start;
> }
> ```

[上面代码](https://jsbin.com/gijeqej/edit?css,output)表示，单元格的内容左对齐，效果如下图。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032516.png)

> ```css
> .container {
> align-items: start;
> }
> ```

[上面代码](https://jsbin.com/tecawur/edit?css,output)表示，单元格的内容头部对齐，效果如下图。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032517.png)

`place-items`属性是`align-items`属性和`justify-items`属性的合并简写形式。

> ```css
> place-items: <align-items> <justify-items>;
> ```

下面是一个例子。

> ```css
> place-items: start end;
> ```

如果省略第二个值，则浏览器认为与第一个值相等。

##### 3.7 justify-content 属性， align-content 属性， place-content 属性

`justify-content`属性是整个内容区域在容器里面的水平位置（左中右），`align-content`属性是整个内容区域的垂直位置（上中下）。

> ```css
> .container {
> justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
> align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
> }
> ```

这两个属性的写法完全相同，都可以取下面这些值。（下面的图都以`justify-content`属性为例，`align-content`属性的图完全一样，只是将水平方向改成垂直方向。）

> - start - 对齐容器的起始边框。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032519.png)

> - end - 对齐容器的结束边框。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032518.png)

> - center - 容器内部居中。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032520.png)

> - stretch - 项目大小没有指定时，拉伸占据整个网格容器。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032521.png)

> - space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032522.png)

> - space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032523.png)

> - space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032524.png)

`place-content`属性是`align-content`属性和`justify-content`属性的合并简写形式。

> ```css
> place-content: <align-content> <justify-content>
> ```

下面是一个例子。

> ```css
> place-content: space-around space-evenly;
> ```

如果省略第二个值，浏览器就会假定第二个值等于第一个值。

##### 3.8 grid-auto-columns 属性， grid-auto-rows 属性

有时候，一些项目的指定位置，在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。

`grid-auto-columns`属性和`grid-auto-rows`属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与`grid-template-columns`和`grid-template-rows`完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。

[下面的例子](https://jsbin.com/sayuric/edit?css,output)里面，划分好的网格是3行 x 3列，但是，8号项目指定在第4行，9号项目指定在第5行。

> ```css
> .container {
> display: grid;
> grid-template-columns: 100px 100px 100px;
> grid-template-rows: 100px 100px 100px;
> grid-auto-rows: 50px; 
> }
> ```

上面代码指定新增的行高统一为50px（原始的行高为100px）。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032525.png)

##### 3.9 grid-template 属性， grid 属性

`grid-template`属性是`grid-template-columns`、`grid-template-rows`和`grid-template-areas`这三个属性的合并简写形式。

`grid`属性是`grid-template-rows`、`grid-template-columns`、`grid-template-areas`、 `grid-auto-rows`、`grid-auto-columns`、`grid-auto-flow`这六个属性的合并简写形式。

从易读易写的角度考虑，还是建议不要合并属性，所以这里就不详细介绍这两个属性了。

#### 四、项目属性

下面这些属性定义在项目上面。

##### 4.1 grid-column-start 属性， grid-column-end 属性， grid-row-start 属性， grid-row-end 属性

项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。

> - `grid-column-start`属性：左边框所在的垂直网格线
> - `grid-column-end`属性：右边框所在的垂直网格线
> - `grid-row-start`属性：上边框所在的水平网格线
> - `grid-row-end`属性：下边框所在的水平网格线

> ```css
> .item-1 {
> grid-column-start: 2;
> grid-column-end: 4;
> }
> ```

[上面代码](https://jsbin.com/yukobuf/edit?css,output)指定，1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032526.png)

上图中，只指定了1号项目的左右边框，没有指定上下边框，所以会采用默认位置，即上边框是第一根水平网格线，下边框是第二根水平网格线。

除了1号项目以外，其他项目都没有指定位置，由浏览器自动布局，这时它们的位置由容器的`grid-auto-flow`属性决定，这个属性的默认值是`row`，因此会"先行后列"进行排列。读者可以把这个属性的值分别改成`column`、`row dense`和`column dense`，看看其他项目的位置发生了怎样的变化。

[下面的例子](https://jsbin.com/nagobey/edit?html,css,output)是指定四个边框位置的效果。

> ```css
> .item-1 {
> grid-column-start: 1;
> grid-column-end: 3;
> grid-row-start: 2;
> grid-row-end: 4;
> }
> ```

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032527.png)

这四个属性的值，除了指定为第几个网格线，还可以指定为网格线的名字。

> ```css
> .item-1 {
> grid-column-start: header-start;
> grid-column-end: header-end;
> }
> ```

上面代码中，左边框和右边框的位置，都指定为网格线的名字。

这四个属性的值还可以使用`span`关键字，表示"跨越"，即左右边框（上下边框）之间跨越多少个网格。

> ```css
> .item-1 {
> grid-column-start: span 2;
> }
> ```

[上面代码](https://jsbin.com/hehumay/edit?html,css,output)表示，1号项目的左边框距离右边框跨越2个网格。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032528.png)

这与[下面的代码](https://jsbin.com/mujihib/edit?html,css,output)效果完全一样。

> ```css
> .item-1 {
> grid-column-end: span 2;
> }
> ```

使用这四个属性，如果产生了项目的重叠，则使用`z-index`属性指定项目的重叠顺序。

##### 4.2 grid-column 属性， grid-row 属性

`grid-column`属性是`grid-column-start`和`grid-column-end`的合并简写形式，`grid-row`属性是`grid-row-start`属性和`grid-row-end`的合并简写形式。

> ```css
> .item {
> grid-column: <start-line> / <end-line>;
> grid-row: <start-line> / <end-line>;
> }
> ```

下面是一个例子。

> ```css
> .item-1 {
> grid-column: 1 / 3;
> grid-row: 1 / 2;
> }
> /* 等同于 */
> .item-1 {
> grid-column-start: 1;
> grid-column-end: 3;
> grid-row-start: 1;
> grid-row-end: 2;
> }
> ```

上面代码中，项目`item-1`占据第一行，从第一根列线到第三根列线。

这两个属性之中，也可以使用`span`关键字，表示跨越多少个网格。

> ```css
> .item-1 {
> background: #b03532;
> grid-column: 1 / 3;
> grid-row: 1 / 3;
> }
> /* 等同于 */
> .item-1 {
> background: #b03532;
> grid-column: 1 / span 2;
> grid-row: 1 / span 2;
> }
> ```

[上面代码](https://jsbin.com/volugow/edit?html,css,output)中，项目`item-1`占据的区域，包括第一行 + 第二行、第一列 + 第二列。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032529.png)

斜杠以及后面的部分可以省略，默认跨越一个网格。

> ```css
> .item-1 {
> grid-column: 1;
> grid-row: 1;
> }
> ```

上面代码中，项目`item-1`占据左上角第一个网格。

##### 4.3 grid-area 属性

`grid-area`属性指定项目放在哪一个区域。

> ```css
> .item-1 {
> grid-area: e;
> }
> ```

[上面代码](https://jsbin.com/qokexob/edit?css,output)中，1号项目位于`e`区域，效果如下图。

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032530.png)

`grid-area`属性还可用作`grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end`的合并简写形式，直接指定项目的位置。

> ```css
> .item {
> grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
> }
> ```

下面是一个[例子](https://jsbin.com/duyafez/edit?css,output)。

> ```css
> .item-1 {
> grid-area: 1 / 1 / 3 / 3;
> }
> ```

##### 4.4 justify-self 属性， align-self 属性， place-self 属性

`justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。

`align-self`属性设置单元格内容的垂直位置（上中下），跟`align-items`属性的用法完全一致，也是只作用于单个项目。

> ```css
> .item {
> justify-self: start | end | center | stretch;
> align-self: start | end | center | stretch;
> }
> ```

这两个属性都可以取下面四个值。

> - start：对齐单元格的起始边缘。
> - end：对齐单元格的结束边缘。
> - center：单元格内部居中。
> - stretch：拉伸，占满单元格的整个宽度（默认值）。

下面是`justify-self: start`的例子。

> ```css
> .item-1  {
> justify-self: start;
> }
> ```

![img](https://cdn.beekka.com/blogimg/asset/201903/bg2019032532.png)

`place-self`属性是`align-self`属性和`justify-self`属性的合并简写形式。

> ```css
> place-self: <align-self> <justify-self>;
> ```

下面是一个例子。

> ```css
> place-self: center center;
> ```

如果省略第二个值，`place-self`属性会认为这两个值相等。

#### 五、参考链接

- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/), by Chris House
- [Understanding the CSS Grid Layout Module](https://webdesign.tutsplus.com/series/understanding-the-css-grid-layout-module--cms-1079), by Ian Yates
- [How to Build an Off-Canvas Navigation With CSS Grid](https://webdesign.tutsplus.com/tutorials/how-to-build-an-off-canvas-navigation-with-css-grid--cms-28191), Ian Yates
- [Introduction to the CSS Grid Layout With Examples](https://code.tutsplus.com/tutorials/introduction-to-css-grid-layout-with-examples--cms-25392), Dogacan Bilgili
- [Learn CSS Grid](http://learncssgrid.com/), Jonathan Suh
- [How I stopped using Bootstrap's layout thanks to CSS Grid](https://blog.theodo.fr/2018/03/stop-using-bootstrap-layout-thanks-to-css-grid/), Cédric Kui

（完）

### 渐变背景

```css
.box{
  background-image: linear-gradient(
    /* 角度 to right, to top */
    45deg,
    red,
    green
  );
  /* 半透明背景 */
  background-image: linear-gradient(
    transparent,
    rgba(0, 0, 0, 0.5)
  );
  /* 透明度 */
  opacity: 0
}
```

### 文字超出省略号
```css
p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
```

### 媒体查询

```css
@media screen and (max-width: 768px) and (min-width: 320px){
  body {
    background-color: black;
  }
}

// <!-- 缩放大小为原本的两倍，设置浏览器宽度为设备的宽度 -->
<meta name="viewport" content="initial-scale=2.0, width=device-width" />
```

优先在 body 标签设置字体大小，其余地方一律设置 em，其原因是 em 跟随父级字体大小变化，当所有元素都百分比字体最终会就会应用到 body 的字体大小。

em单位：目标元素尺寸÷上下文元素尺寸＝百分比尺寸

假设字体大小为 48px

那么 48 / 16 = 3  所以该字体是 3em

rem单位：1rem = 浏览器设置的字体大小 。 可以在html中设置font-size :62.5% 使1rem = 10px;










