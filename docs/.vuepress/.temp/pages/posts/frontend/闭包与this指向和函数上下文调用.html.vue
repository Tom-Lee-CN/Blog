<template><div><h1 id="闭包与this和函数上下文调用" tabindex="-1"><a class="header-anchor" href="#闭包与this和函数上下文调用"><span>闭包与this和函数上下文调用</span></a></h1>
<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包"><span>闭包</span></a></h2>
<p>概念：可以访问到其他函数内部变量的函数</p>
<p>作用：解决变量污染（一般用于回调函数）</p>
<p>备注：非必要不用闭包，如果子函数一直没有接收到参数可能导致内存一直无法释放（函数未执行完成，知道运行完成后才会执行垃圾回收）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">power</span><span class="token punctuation">(</span><span class="token parameter">base<span class="token punctuation">,</span> exponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> base <span class="token operator">*</span> <span class="token function">power</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> exponent <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">power</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// → 8</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="this" tabindex="-1"><a class="header-anchor" href="#this"><span>this</span></a></h2>
<p>this的调用会指向当前执行上下文作用域。</p>
<p>三种指向</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 指向window</span></span>
<span class="line"><span class="token keyword">let</span> funTest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 指向funTest 指向构造函数创建的对象</span>
<span class="line">obj<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 指向当前执行上下文作用域</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="递归" tabindex="-1"><a class="header-anchor" href="#递归"><span>递归</span></a></h2>
<p>指一个函数调用自己，双函数指两个函数互相调用， 性能比循环差，非必要不用递归</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'haha'</span><span class="token punctuation">)</span></span>
<span class="line"> 	<span class="token keyword">return</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hehe'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="call-、apply、bind" tabindex="-1"><a class="header-anchor" href="#call-、apply、bind"><span>call 、apply、bind</span></a></h2>
<p>call和apply均用于函数调用，目的是修改函数中this的指向，不同是传参的方式。使用时，第一个参数是 新的this指向这个参数，剩余参数是函数的实参。</p>
<p>call</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Tom'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>apply</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Tom'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>bind</p>
<p>bind不会直接执行函数，但会得到一个修改this之后的新函数。如果在使用bind的同时传了实参那么函数的实参也固定死了。无法在使用新函数的时候传实参。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> newFn <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Tom'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


