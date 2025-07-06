<template><div><h1 id="cookie的跨域传输" tabindex="-1"><a class="header-anchor" href="#cookie的跨域传输"><span>Cookie的跨域传输</span></a></h1>
<h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述"><span>问题描述</span></a></h2>
<p>1.后端已设置允许跨域，使用Express传递携带session的cookie给前端，在响应体的<code v-pre>set-cookie</code> 里面有值，但前端没有存储cookie同时在Application中并没有存储cookie值。</p>
<p>2.原因是前端没有设置允许跨域传递cookie，给<code v-pre>xhr</code>的属性<code v-pre>withCredentials</code>赋值为true即可。</p>
<h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h3>
<p>1.后端允许跨域</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 设置允许跨域的域名</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Origin'</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Methods'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-headers'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Max-age'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 允许跨域传递cookie</span></span>
<span class="line">	res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Access-Control-Allow-Credentials'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.前端请求允许携带cookie</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">;</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://127.0.0.1:80</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 允许携带cookie</span></span>
<span class="line">xhr<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token function">f</span> <span class="token punctuation">(</span><span class="token parameter">xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"请求失败!"</span><span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2>
<ol>
<li>
<p>跨域传递cookie 前后端的域名和协议需要一致，端口号不用一致。</p>
</li>
<li>
<p>设置跨域传递cookie后，POST请求传递的数据格式只能是以下方式</p>
</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">application/x-www-form-urlencoded</span>
<span class="line">multipart/form-data</span>
<span class="line">text/plain</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


