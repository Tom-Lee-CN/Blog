<template><div><h1 id="cookie与storage" tabindex="-1"><a class="header-anchor" href="#cookie与storage"><span>Cookie与Storage</span></a></h1>
<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>Cookie</span></a></h2>
<h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span><strong>说明</strong>：</span></a></h3>
<p>cookie由键值对字符串组成, 在设置Cookie时，可以指定以下属性：</p>
<p>对<code v-pre>document.cookie</code> 重新赋值即可新增该<code v-pre>Cookie</code>, 而不是替换掉整个<code v-pre>Cookies</code> 。</p>
<p>注意：如果需要替换某个<code v-pre>Cookie</code>, 必须保证<code v-pre>Domain</code>与<code v-pre>Path</code>一致。其中 Cookie 内容只能包括 Ascii 码字符，所以需要经过一层编码。</p>
<h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span><strong>使用方法</strong></span></a></h3>
<p><strong>expires</strong>：过期时间，使用GMT格式的日期。</p>
<p><strong>path</strong>：Cookie的路径，默认情况下属于当前页面。</p>
<p><strong>domain</strong>：Cookie的域名，默认情况下属于设置Cookie的域。</p>
<p><strong>secure</strong>：指定后，Cookie只有在使用SSL连接时才发送到服务器。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 设置cookie的方法，使用该方法是新增一条新的cookie而不是覆盖原有的cookie</span></span>
<span class="line">document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">"username=Tom;expires=Thu, 18 Dec 2043 12:00:00;GMT;path='www.baidu.com';"</span></span>
<span class="line"><span class="token comment">// 读取cookie</span></span>
<span class="line"><span class="token keyword">let</span> allCookie <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> username <span class="token operator">=</span> <span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 删除或修改cookie,只需将其过期时间设置为过去的时间即可：</span></span>
<span class="line">document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">"username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在nodejs中获取cookie" tabindex="-1"><a class="header-anchor" href="#在nodejs中获取cookie"><span>在nodejs中获取cookie</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 原生，需要手动分割以取出其中的有用值</span></span>
<span class="line">req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>cookies</span>
<span class="line"><span class="token comment">// express 安装cookie-parser用于解析cookie</span></span>
<span class="line">npm install <span class="token operator">--</span>save cookie<span class="token operator">-</span>parser</span>
<span class="line"><span class="token keyword">const</span> cookieParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"cookie-parser"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cookieParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> reqCookies <span class="token operator">=</span> req<span class="token punctuation">.</span>cookies</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="storage" tabindex="-1"><a class="header-anchor" href="#storage"><span>storage</span></a></h2>
<p><strong>说明</strong></p>
<ul>
<li>数据存储在用户浏览器中，其实是保存在硬盘中</li>
<li>页面刷新不丢失数据</li>
<li>sessionStorage和localStorage约 5M 左右</li>
</ul>
<h3 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage"><span>localstorage</span></a></h3>
<ul>
<li>使用localStorage 可以将数据永久存储在本地电脑中, 除非手动删除，否则关闭页面也会存在。</li>
<li>可以多窗口（页面）共享（同一浏览器可以共享）</li>
<li>以键值对的形式存储使用</li>
</ul>
<p>使用方法</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 设置和修改Storage  </span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 获取Storage</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 删除Storage</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sesstionstorage" tabindex="-1"><a class="header-anchor" href="#sesstionstorage"><span>sesstionStorage</span></a></h3>
<ul>
<li>生命周期为关闭浏览器窗口</li>
<li>在同一个窗口（页面）下数据可以共享</li>
<li>以键值对的形式存储使用</li>
<li>值存储的时候全部转换为字符串</li>
</ul>
<p>使用方法</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 设置和修改Storage  </span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 获取Storage</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 删除Storage</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


