import{_ as n,c as a,d as e,o as p}from"./app-DQ3pSZK-.js";const t={};function i(l,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="前端必备技能-全面解析-session-在-web-开发中的应用" tabindex="-1"><a class="header-anchor" href="#前端必备技能-全面解析-session-在-web-开发中的应用"><span>前端必备技能：全面解析 Session 在 Web 开发中的应用</span></a></h1><p><strong>目录</strong></p><p><a href="https://blog.csdn.net/qq_53123067/article/details/143867803#t0" target="_blank" rel="noopener noreferrer">初识Session</a></p><p><a href="https://blog.csdn.net/qq_53123067/article/details/143867803#t1" target="_blank" rel="noopener noreferrer">Session工作原理</a></p><p><a href="https://blog.csdn.net/qq_53123067/article/details/143867803#t2" target="_blank" rel="noopener noreferrer">Session配置使用</a></p><hr><h4 id="初识session" tabindex="-1"><a class="header-anchor" href="#初识session"><span>初识Session</span></a></h4><p>​ <strong>什么是Session</strong>：是在<a href="https://so.csdn.net/so/search?q=%E5%AE%A2%E6%88%B7%E7%AB%AF&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">客户端</a>和服务器之间维持用户状态的一种机制，由于HTTP协议本身是无状态的，每次请求都是独立的，服务器无法直接记住之前的请求状态，Session就是为了弥补这个问题让服务器能够在多个请求之间存储并识别用户的状态信息。</p><blockquote><p>简单来说Session就是一个用于<strong>跟踪用户会话的数据存储结构</strong>：</p><p>1）<strong>会话开始</strong>：当用户首次访问网站时服务器会生成一个唯一的Session ID，并将其发送给客户端(通常通过浏览器的Cookie存储)，这标识着该用户的会话。</p><p>​ <strong>解释</strong>：Session ID是服务器用来识别、操作存储session值对象的，在服务器端Session的存储方式有文件方式、数据库方式、Session ID就是用来这边这个文件，也就是说识别数据库中的某一条记录，其会以类似cookie的方式返回给客户端</p><p>2）<strong>会话维持</strong>：在之后的每次请求中客户端会自动将Session ID发送给服务器，服务器通过这个ID查找到该用户的会话信息从而识别用户。</p><p>3）<strong>会话结束</strong>：当用户关闭浏览器或者Session到期，服务器会销毁该用户的会话数据。</p></blockquote><p>了解HTTP协议的无状态性是进一步学习Session认证机制的必要前提，HTTP协议的无状态性指的是客户端的每次HTTP请求都是独立的，连续多个请求之间没用直接关系，服务器不会主动保存每次HTTP请求的状态·，如下所示：</p><p><img src="https://i-blog.csdnimg.cn/direct/0727f77846214b4eb009aea8764d0dad.png" alt="img"></p><p>对于超市来说，为了方便收银员在进行结算时给VIP用户打折，超市可以为每个VIP用户发放会员卡，这种会员卡就是类似cookie的机制，如下所示：</p><p><img src="https://i-blog.csdnimg.cn/direct/9e6662517b464e3dbcc0bf87ecb8929e.png" alt="img"></p><p>但是会存在一些人通过伪造会员卡来骗过超市收银员获取不正当利益，为了防止客户伪造会员卡，收银员在拿到客户出示的会员卡之后，可以在收银机上进行刷卡认证，只有收银机确认存在的会员卡才能被正常使用，这种会员卡+刷卡认证的设计理念就是<strong>Session认证机制的精髓</strong>：</p><p><img src="https://i-blog.csdnimg.cn/direct/da10342781b64f48907883aeb08ef4c6.png" alt="img"></p><p>​ <strong>Session的特点</strong>：Session特点主要有以下这几个方面：</p><blockquote><p>1）<strong>状态保持</strong>：即便HTTP协议本身是无状态的，Session使得用户的多次请求能够关联在一起。</p><p>2）<strong>服务器端存储</strong>：Session的数据通常存储在服务器端，不同于Cookie，Session中的数据不会直接暴露给用户。</p><p>3）<strong>个性化设置</strong>：Session可以用于存储用户的偏好设置，如主题颜色、语言等信息。</p></blockquote><p>​ <strong>Session与cookie的区别</strong>：都是Web开发中用于保持客户端和服务器之间状态的技术，但它们的工作原理和使用场景有一些重要的区别，了解它们之间的关系有助于更好地管理用户状态：</p><table><thead><tr><th style="text-align:center;">区别</th><th style="text-align:center;">Session</th><th style="text-align:center;">Cookie</th></tr></thead><tbody><tr><td style="text-align:center;">存储位置</td><td style="text-align:center;">存储服务器端</td><td style="text-align:center;">存储客户端浏览器</td></tr><tr><td style="text-align:center;">存储方式</td><td style="text-align:center;">存储更多的数据（如用户的登录信息、购物车内容等）</td><td style="text-align:center;">存储少量的数据（如用户偏好设置、认证信息等）</td></tr><tr><td style="text-align:center;">生命周期</td><td style="text-align:center;">通常在用户关闭浏览器后就会过期</td><td style="text-align:center;">生命周期可以由开发者设置</td></tr><tr><td style="text-align:center;">安全性能</td><td style="text-align:center;">数据存储在服务器端，不容易被客户端直接访问和篡改</td><td style="text-align:center;">比Session更容易被窃取或篡改（例如通过 XSS 攻击）</td></tr><tr><td style="text-align:center;">使用场景</td><td style="text-align:center;">适合存储较为敏感的信息，如用户的登录状态、购物车内容等</td><td style="text-align:center;">适合存储一些小型、轻量级、可公开的数据</td></tr></tbody></table><p>​ <strong>为什么需要Session和cookie</strong>：主要源于web系统的发展和变迁：</p><blockquote><p>1）web1.0：强调资源共享，http协议是一种无状态的协议</p><p>2）web2.0：强调资源交互，引入session和cookie机制记录状态，实现请求之间的依赖</p><p>3）web3.0：强调的是双赢</p></blockquote><h4 id="session工作原理" tabindex="-1"><a class="header-anchor" href="#session工作原理"><span>Session工作原理</span></a></h4><p>​ Session是Web开发中用来保持客户端和服务器之间的状态的一种机制，它通常用于在用户与网站交互时，跨多个请求保持用户的信息，比如登录状态、购物车内容等，以下是 Session 的工作原理简述：</p><blockquote><p>1）<strong>客户端发起请求</strong>：当用户首次访问一个网站时，客户端向服务器发送一个请求。</p><p>2）<strong>服务器生成Session ID</strong>：服务器接收到请求后会生成一个唯一的Session ID(会话标识符)，这个Session ID是用来唯一标识该用户会话的通常是一个随机的字符串。</p><p>3）<strong>服务器发送Session ID到客户端</strong>：服务器通过HTTP响应将Session ID发送给客户端，通常是通过Cookie来传递这个Session ID。</p><p>4）<strong>客户端保存Session ID</strong>：客户端浏览器收到服务器发送的Cookie 后，会将Session ID存储在本地，之后客户端在每一次向该服务器发送请求时，都会携带这个SessionID。</p><p>5）<strong>后续请求携带Session ID</strong>：当客户端发起后续请求时浏览器会自动将存储的Session ID通过Cookie附带到HTTP请求头中(例如：Cookie: JSESSIONID=123456)。</p><p>6）<strong>服务器根据Session ID查找会话数据</strong>：服务器接收到客户端请求后会从请求中读取Session ID，并用这个ID查找服务器端存储的会话数据。</p><p>7）<strong>服务器更新Session数据</strong>：服务器根据需要更新用户的Session数据(例如：更新用户登录状态、购物车内容等)。</p><p>8）<strong>会话结束或超时</strong>：如果用户关闭浏览器或者会话超时，Session会被销毁。</p></blockquote><p><img src="https://i-blog.csdnimg.cn/direct/a164c73cb6e14f97b3c90dad5305177b.png" alt="img"></p><h4 id="session配置使用" tabindex="-1"><a class="header-anchor" href="#session配置使用"><span>Session配置使用</span></a></h4><p>接下来我们开始讲解如何使用Session进行身份认证，这里我们使用Node中的Express框架，来实现如何在项目当中进行身份认证，终端执行如下命令进行安装操作Session的中间件：</p><div class="language-coffeescript line-numbers-mode" data-highlighter="prismjs" data-ext="coffeescript"><pre><code><span class="line">npm install express<span class="token operator">-</span>session</span>
<span class="line"><span class="token constant">AI</span>写代码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>express-session中间件安装完成之后，需要通过app.use()来注册session中间件，代码如下：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// 1. 导入session中间件</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express-session&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 配置session中间件</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">&#39;keyboard cat&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 加密字符串</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token literal-property property">resave</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 即使session没有改变，依然保存</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token literal-property property">saveUninitialized</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 即使session没有初始化，依然保存</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token constant">AI</span>写代码javascript</span>
<span class="line">运行</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当express-session中间件配置成功后，即可通过req.session来访问和使用session对象，从而存储用户的关键信息，如下所示：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/api/login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 判断用户提交的登录信息是否正确</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>username <span class="token operator">!==</span> <span class="token string">&#39;admin&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>password <span class="token operator">!==</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;用户名或密码错误&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    res<span class="token punctuation">.</span>session<span class="token punctuation">.</span>user <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span> <span class="token comment">// 保存用户信息到session中</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    res<span class="token punctuation">.</span>session<span class="token punctuation">.</span>isLogin <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 标记用户已经登录</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;登录成功&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token constant">AI</span>写代码javascript</span>
<span class="line">运行</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以直接从req.session对象中获取之前存储的数据，如下所示：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// 获取用户姓名接口</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/username&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 判断用户是否登录</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;用户未登录&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>user<span class="token punctuation">.</span>username <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token constant">AI</span>写代码javascript</span>
<span class="line">运行</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用req.session.destory()函数即可清空服务器保存的session信息，如下所示：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">// 退出登录接口</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/api/logout&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    req<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 销毁session信息</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;退出登录成功&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36)]))}const o=n(t,[["render",i]]),r=JSON.parse('{"path":"/posts/frontend/%E5%89%8D%E7%AB%AF%E5%BF%85%E5%A4%87%E6%8A%80%E8%83%BD%EF%BC%9A%E5%85%A8%E9%9D%A2%E8%A7%A3%E6%9E%90%20Session%20%E5%9C%A8%20Web%20%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8.html","title":"前端必备技能：全面解析 Session 在 Web 开发中的应用","lang":"en-US","frontmatter":{"date":"2025-07-11T00:00:00.000Z","category":["frontend"],"tag":["node","frontend","session"]},"headers":[],"git":{"updatedTime":1754230536000,"contributors":[{"name":"Tom-Lee-CN","username":"Tom-Lee-CN","email":"tomweichat@qq.com","commits":2,"url":"https://github.com/Tom-Lee-CN"}],"changelog":[{"hash":"e251e99be8c279a900a61cafedc241ff9ce78ba5","time":1754230536000,"email":"tomweichat@qq.com","author":"Tom-Lee-CN","message":"document adjustment"},{"hash":"8d428f94ebfcda93c3a044c829c12a31c9eb29cc","time":1752246480000,"email":"tomweichat@qq.com","author":"Tom-Lee-CN","message":"新增一批技术文档"}]},"filePathRelative":"posts/frontend/前端必备技能：全面解析 Session 在 Web 开发中的应用.md","excerpt":"\\n<p><strong>目录</strong></p>\\n<p><a href=\\"https://blog.csdn.net/qq_53123067/article/details/143867803#t0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">初识Session</a></p>\\n<p><a href=\\"https://blog.csdn.net/qq_53123067/article/details/143867803#t1\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Session工作原理</a></p>"}');export{o as comp,r as data};
