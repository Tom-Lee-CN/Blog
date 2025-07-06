<template><div><h1 id="js执行环境-作用域-上下文" tabindex="-1"><a class="header-anchor" href="#js执行环境-作用域-上下文"><span>JS执行环境+作用域(上下文)</span></a></h1>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2>
<h3 id="执行环境" tabindex="-1"><a class="header-anchor" href="#执行环境"><span>执行环境</span></a></h3>
<ul>
<li>执行环境(执行上下文)是<code v-pre>JS</code>中非常重要的一个概念。</li>
<li>每个执行环境都有一个与之关联的<strong>虚拟对象</strong>(执行上下文对象)</li>
<li>执行环境中定义的所有<strong>变量</strong>和<strong>函数</strong>都保存在这个<strong>执行上下文对象</strong>中，供解析器在处理数据时使用。</li>
</ul>
<h3 id="预处理" tabindex="-1"><a class="header-anchor" href="#预处理"><span>预处理</span></a></h3>
<ul>
<li>将变量和函数作为执行上下文对象的属性放到这个对象上的这个过程，被称为<code v-pre>预处理</code></li>
<li>预处理发生在代码将要执行之前</li>
<li>虽然<code v-pre>JS</code>是解释执行的语言，但是在解释执行之前，还是有个<strong>预处理</strong>的过程</li>
<li>为代码的执行做准备，提前检查出代码中的错误</li>
<li>算是做了一个通篇扫描的过程</li>
<li>这也是之前讲过的变量的声明提升和函数提升的原因</li>
</ul>
<h3 id="全局执行上下文对象" tabindex="-1"><a class="header-anchor" href="#全局执行上下文对象"><span>全局执行上下文对象</span></a></h3>
<ul>
<li>形成于<code v-pre>JS</code>代码将要执行之前</li>
<li>是最顶层的执行上下文</li>
<li>浏览器中是<code v-pre>window</code>对象</li>
<li>所有全局变量和全局函数都是<code v-pre>window</code>对象的属性和方法</li>
<li>全局变量和全局函数会一直存在，直到页面关闭</li>
<li>随着页面的关闭而销毁</li>
</ul>
<h4 id="全局的预处理" tabindex="-1"><a class="header-anchor" href="#全局的预处理"><span>全局的预处理</span></a></h4>
<ol>
<li>将通过<code v-pre>var</code>声明的全局变量添加为<code v-pre>window</code>的属性，值为<code v-pre>undefined</code></li>
<li>将使用<code v-pre>function</code>关键字声明的全局函数添加为<code v-pre>window</code>的方法，值为函数体</li>
</ol>
<h3 id="函数执行上下文对象" tabindex="-1"><a class="header-anchor" href="#函数执行上下文对象"><span>函数执行上下文对象</span></a></h3>
<ul>
<li>必须要调用函数才会创建</li>
<li>形成于函数内代码将要执行之前</li>
<li>每个函数都有自己的函数执行上下文对象</li>
<li>局部变量和局部函数随着函数调用结束而销毁</li>
<li>随着函数调用结束而销毁</li>
</ul>
<h4 id="函数的预处理" tabindex="-1"><a class="header-anchor" href="#函数的预处理"><span>函数的预处理</span></a></h4>
<ol>
<li>将通过<code v-pre>var</code>声明的局部变量添加为函数执行上下文对象的属性，值为<code v-pre>undefined</code></li>
<li>将实参赋值给形参，并添加为函数执行上下文对象</li>
<li>将使用<code v-pre>function</code>关键字声明的局部函数添加为函数执行上下文对象的方法，值为函数体</li>
</ol>
<h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域"><span>作用域</span></a></h3>
<blockquote>
<p>作用域（scope）指的是变量存在的范围。在 <code v-pre>ES5</code> 的规范中，<code v-pre>JS</code>只有两种作用域：一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。<code v-pre>ES6</code> 又新增了块级作用域，暂时不涉及。</p>
</blockquote>
<ul>
<li>没有在任何函数内部声明的变量是全局变量，在任何函数内部都可以获取并更改</li>
<li>函数内部通过<code v-pre>var</code>声明的变量，在全局是无法获取的</li>
<li>代码写好，作用域就确定了</li>
<li>函数内部非<code v-pre>var</code>关键字声明的变量，为全局变量</li>
<li>没有块作用域</li>
<li>如果有函数嵌套，则会由内而外形成作用域链</li>
</ul>
<p>作者：零寂前端
链接：https://juejin.cn/post/7023761652122124319
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
</div></template>


