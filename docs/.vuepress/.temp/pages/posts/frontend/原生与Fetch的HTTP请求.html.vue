<template><div><h1 id="原生与fetch的http请求" tabindex="-1"><a class="header-anchor" href="#原生与fetch的http请求"><span>原生与Fetch的HTTP请求</span></a></h1>
<h2 id="原生请求" tabindex="-1"><a class="header-anchor" href="#原生请求"><span>原生请求</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 发起GET请求</span></span>
<span class="line"><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">;</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'http://127.0.0.1:3000?name=tom&amp;password=123456'</span><span class="token punctuation">)</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Error:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>xhr<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 发起POST请求</span></span>
<span class="line"><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">;</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token string">'http://127.0.0.1:3000/post/userInfo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-type'</span><span class="token punctuation">,</span> <span class="token string">'application/x-www-formurlencoded'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Error:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>xhr<span class="token punctuation">.</span>statis<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"12312321"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"131123@qq.com"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http传参方式" tabindex="-1"><a class="header-anchor" href="#http传参方式"><span>HTTP传参方式</span></a></h3>
<h4 id="get传参" tabindex="-1"><a class="header-anchor" href="#get传参"><span>GET传参</span></a></h4>
<h5 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一</span></a></h5>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code><span class="line">// URL传参</span>
<span class="line">xhr.open('GET', 'www.baidu.com?name=tom&amp;password=1231')</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="post传参" tabindex="-1"><a class="header-anchor" href="#post传参"><span>POST传参</span></a></h4>
<h5 id="方法一-1" tabindex="-1"><a class="header-anchor" href="#方法一-1"><span>方法一</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// json传参</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-type'</span><span class="token punctuation">,</span> <span class="token string">'application/json;charset=utf-8'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// JSON.stringify是将对象传为json字符串，json.parser方法是将json字符串转换为对象</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 表单格式传参</span></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">data<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>keyA<span class="token punctuation">,</span>valueA<span class="token punctuation">)</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-type'</span><span class="token punctuation">,</span><span class="token string">'application/x-www-form-urlencoded'</span><span class="token punctuation">)</span></span>
<span class="line">data<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>keyB<span class="token punctuation">,</span>valueB<span class="token punctuation">)</span></span>
<span class="line">xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fetch-请求" tabindex="-1"><a class="header-anchor" href="#fetch-请求"><span>fetch 请求</span></a></h2>
<p><strong>说明</strong></p>
<p>fetch 是 JavaScript 中用于发起网络请求的现代 API，它提供了一种更简洁、更强大的方式来处理网络通信。fetch 方法返回一个 Promise 对象，该 Promise 会在请求完成时被解决（resolved），并返回一个 Response 对象，开发者可以通过这个对象来获取服务器的响应数据。</p>
<p><strong>基本语法</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 处理响应</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 处理错误</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>url</code>：必选参数，表示要请求的资源的 URL。</li>
<li><code v-pre>options</code>：可选参数，是一个包含请求配置信息的对象，例如请求方法（<code v-pre>GET</code>、<code v-pre>POST</code> 等）、请求头、请求体等。</li>
</ul>
<h3 id="简单的-get-请求示例" tabindex="-1"><a class="header-anchor" href="#简单的-get-请求示例"><span>简单的 GET 请求示例</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/todos/1'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 检查响应状态是否为 200 - 299</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">HTTP error! status: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>response<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 将响应数据解析为 JSON 格式</span></span>
<span class="line">    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Fetch error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码解释</strong>
1.首先调用 fetch 方法发起一个 GET 请求到指定的 URL。
2.then 方法中的回调函数接收一个 Response 对象，通过检查 response.ok 属性来判断请求是否成功。如果不成功，抛出一个错误。
3.接着使用 response.json() 方法将响应数据解析为 JSON 格式，该方法返回一个新的 Promise。
4.第二个 then 方法中的回调函数接收解析后的 JSON 数据并打印到控制台。
5.如果请求过程中出现错误，会被 catch 方法捕获并打印错误信息。</p>
<h3 id="发送-post-请求示例" tabindex="-1"><a class="header-anchor" href="#发送-post-请求示例"><span>发送 POST 请求示例</span></a></h3>
<p>下面是一个使用 <code v-pre>fetch</code> 方法发送 POST 请求的示例，用于向服务器发送 JSON 数据：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'foo'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'bar'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/posts'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span></span>
<span class="line">     <span class="token comment">// 重要！允许前端携带cookie发送到后端</span></span>
<span class="line">     <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">'include'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">HTTP error! status: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>response<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Fetch error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码解释</strong>
1.定义了一个包含要发送数据的对象 data。
2.在 fetch 方法的第二个参数 options 中指定请求方法为 POST，设置请求头 Content-Type 为 application/json，并使用 JSON.stringify 方法将数据对象转换为 3.JSON 字符串作为请求体。
4.后续处理与 GET 请求类似，检查响应状态、解析响应数据并处理可能的错误。
5.Response 对象的常用方法</p>
<h4 id="response-对象提供了多种方法来处理响应数据-以下是一些常用的方法" tabindex="-1"><a class="header-anchor" href="#response-对象提供了多种方法来处理响应数据-以下是一些常用的方法"><span>Response 对象提供了多种方法来处理响应数据，以下是一些常用的方法：</span></a></h4>
<p>response.json()：将响应数据解析为 JSON 格式。
response.text()：将响应数据解析为文本格式。
response.blob()：将响应数据解析为二进制大对象（Blob）格式，常用于处理图片、音频等二进制数据。
response.arrayBuffer()：将响应数据解析为 ArrayBuffer 格式，用于处理二进制数据。
例如，使用 response.text() 方法获取文本响应：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://example.com/text.txt'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">text</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Fetch error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项</strong>
浏览器兼容性
虽然 fetch 是现代 API，但在一些旧版本的浏览器中可能不被支持。可以使用 whatwg-fetch 等 polyfill 来解决兼容性问题。</p>
<p><strong>CORS</strong>（跨域资源共享）
如果请求的资源位于不同的域名下，需要服务器端正确配置 CORS 头，否则请求会被浏览器阻止。</p>
<p><strong>错误处理</strong>
fetch 方法只有在网络错误（如无法连接到服务器）时才会拒绝 Promise，对于 HTTP 错误（如 404、500 等），Promise 仍然会被解决，需要手动检查 response.ok 属性来处理 HTTP 错误。</p>
<p><strong>总结</strong>
fetch 方法为 JavaScript 开发者提供了一种强大且灵活的方式来处理网络请求。通过使用 fetch，可以方便地发送 GET、POST 等各种类型的请求，并处理服务器的响应数据。在使用过程中，需要注意浏览器兼容性、CORS 问题和错误处理等方面，以确保应用的稳定性和可靠性。希望本文能帮助你更好地掌握 fetch 方法的使用。</p>
</div></template>


