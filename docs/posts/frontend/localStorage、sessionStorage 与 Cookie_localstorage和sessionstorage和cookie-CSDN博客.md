---
date: 2025-07-11
category:
  - frontend
tag:
  - node
  - frontend
  - storage
---

# 前端数据存储全解析：localStorage、sessionStorage 与 Cookie

1. ## 一、本地存储概述

2. #### 1. 什么是本地存储？

3. 本地存储（Local Storage）是指在用户浏览器中存储数据的方式，它允许 [Web 应用程序](https://so.csdn.net/so/search?q=Web 应用程序&spm=1001.2101.3001.7020)将数据保存在用户设备上，实现页面间数据共享和浏览器关闭后的数据持久化。相比传统的 Cookie，本地存储具有以下显著优势：

4. - **存储容量大**：相比 Cookie 的 4KB 限制，`localStorage` 和 `sessionStorage` 通常可存储 5-10MB 数据（具体限制因浏览器而异）
   - **不随 HTTP 请求发送**：本地存储的数据不会在每次网络请求时自动发送到服务器，减少了不必要的网络流量
   - **简单易用的 API**：提供了直观的键值对存储方式，使用更加便捷
   - **数据操作更安全**：存储的数据仅在同源页面可访问，提供了基本的数据隔离

5. #### 2. localStorage 与 sessionStorage 的区别

6. 尽管 `localStorage` 和 `sessionStorage` 都属于 Web Storage API，它们在数据生命周期上有本质区别：

7. | 特性     | localStorage                                   | sessionStorage                                   |
   | :------- | :--------------------------------------------- | :----------------------------------------------- |
   | 生命周期 | 持久化存储，除非手动删除，否则永久保存         | 仅在当前会话期间有效，关闭页面或标签页后自动清除 |
   | 作用域   | 同源页面共享数据                               | 仅限于创建它的标签页内共享数据                   |
   | 适用场景 | 用户偏好设置、主题配置、身份验证令牌等长期数据 | 表单数据暂存、页面状态、单次会话的数据传递       |

8. #### 3. 浏览器上查看存储数据

9. 开发者可以通过浏览器开发工具轻松查看和管理存储的数据：

10. 1. 打开浏览器开发者工具（F12 或右键"检查"）
    2. 导航至"应用程序"或"存储"选项卡
    3. 在左侧面板中选择 localStorage、sessionStorage 或 Cookies
    4. 查看、编辑或删除存储的数据

11. ### 二、localStorage 的用法

12. #### 1. 存储数据

13. 使用 `setItem()` 方法将数据存储到 localStorage 中：

14. ```javascript
    // 基本存储
    localStorage.setItem("username", "Alice");
    // 也可以使用直接赋值的方式（不推荐，但可行）
    localStorage.theme = "dark";
    AI写代码javascript;
    运行;
    ```

15. #### 2. 读取数据

16. 使用 `getItem()` 方法获取存储的数据：

17. ```javascript
    // 读取存储的数据
    const username = localStorage.getItem("username");
    console.log(username); // 输出：Alice
    // 访问不存在的数据
    const nonExistent = localStorage.getItem("nonExistent");
    console.log(nonExistent); // 输出：null
    AI写代码javascript;
    运行;
    ```

18. #### 3. 删除数据

19. 使用 `removeItem()` 方法删除指定的存储数据：

20. ```javascript
    // 删除单个数据
    localStorage.removeItem("username");
    AI写代码javascript;
    运行;
    ```

21. #### 4. 清空所有数据

22. 使用 `clear()` 方法清除所有存储的数据：

23. ```javascript
    // 清空所有 localStorage 数据
    localStorage.clear();
    AI写代码javascript;
    运行;
    ```

24. #### 5. 更新数据

25. 复用 `setItem()` 方法即可更新已存在的数据：

26. ```javascript
    // 更新现有数据
    localStorage.setItem("username", "Bob");
    AI写代码javascript;
    运行;
    ```

27. #### 6. 获取存储键名

28. 使用 `key(index)` 方法获取指定索引位置的键名：

29. ```javascript
    // 假设存储了多个数据
    localStorage.setItem("username", "Alice");
    localStorage.setItem("theme", "dark");
    localStorage.setItem("language", "en");
    // 获取索引为 1 的键名
    const secondKey = localStorage.key(1);
    console.log(secondKey); // 可能输出：'theme'（顺序不保证）
    AI写代码javascript;
    运行;
    ```

30. #### 7. 存储对象和数组

31. localStorage 只能存储字符串，需要使用 JSON 序列化/反序列化存储复杂数据结构：

32. ```javascript
    // 存储对象
    const user = {
      name: "Alice",
      age: 25,
      preferences: {
        theme: "dark",
        notifications: true,
      },
    };
    localStorage.setItem("user", JSON.stringify(user));
    // 读取对象
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser.preferences.theme); // 输出：dark
    // 存储数组
    const todos = [
      { id: 1, text: "学习 JavaScript", completed: true },
      { id: 2, text: "掌握 Web Storage API", completed: false },
    ];
    localStorage.setItem("todos", JSON.stringify(todos));
    // 读取数组
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(storedTodos[1].text); // 输出：掌握 Web Storage API
    AI写代码javascript;
    运行;
    ```

33. #### 8. Vue 3 中使用 localStorage

34. 在 Vue 3 中集成 localStorage 的实际应用：

35. ```html
    <script setup>
      import { ref, onMounted, watch } from "vue";
      // 定义响应式状态
      const theme = ref("light");
      const username = ref("");
      const savedNotes = ref([]);
      // 组件挂载时从 localStorage 加载数据
      onMounted(() => {
        // 加载主题设置
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          theme.value = savedTheme;
        }
        // 加载用户名
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
          username.value = savedUsername;
        }
        // 加载笔记列表
        const notes = localStorage.getItem("notes");
        if (notes) {
          savedNotes.value = JSON.parse(notes);
        }
      });
      // 监听变化并保存到 localStorage
      watch(theme, (newTheme) => {
        localStorage.setItem("theme", newTheme);
        // 可以在这里应用主题变化
        document.documentElement.setAttribute("data-theme", newTheme);
      });
      watch(username, (newUsername) => {
        localStorage.setItem("username", newUsername);
      });
      // 添加新笔记的方法
      const addNote = (noteText) => {
        const newNote = {
          id: Date.now(),
          text: noteText,
          createdAt: new Date().toISOString(),
        };
        savedNotes.value.push(newNote);
        localStorage.setItem("notes", JSON.stringify(savedNotes.value));
      };
      // 删除笔记的方法
      const removeNote = (noteId) => {
        savedNotes.value = savedNotes.value.filter(
          (note) => note.id !== noteId
        );
        localStorage.setItem("notes", JSON.stringify(savedNotes.value));
      };
    </script>
    AI写代码html
    ```

36. ### 三、sessionStorage 的用法

37. sessionStorage 的 API 与 localStorage 完全相同，区别仅在于数据的生命周期。

38. #### 1. 存储数据

39. ```javascript
    // 存储会话数据
    sessionStorage.setItem(
      "cartItems",
      JSON.stringify([
        { id: 101, name: "商品A", quantity: 2 },
        { id: 102, name: "商品B", quantity: 1 },
      ])
    );
    // 存储表单临时状态
    sessionStorage.setItem("formProgress", "2"); // 记录用户填到第二步
    AI写代码javascript;
    运行;
    ```

40. #### 2. 读取数据

41. ```javascript
    // 读取购物车数据
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
    console.log(cartItems); // 输出购物车商品数组
    // 读取表单进度
    const formProgress = sessionStorage.getItem("formProgress");
    console.log(`继续从第 ${formProgress} 步开始填写`);
    AI写代码javascript;
    运行;
    ```

42. #### 3. 实际应用案例：多步骤表单

43. ```javascript
    // 保存表单数据到 sessionStorage
    function saveFormStep(stepNumber, formData) {
      sessionStorage.setItem(`formStep${stepNumber}`, JSON.stringify(formData));
      sessionStorage.setItem("currentStep", stepNumber);
    }
    // 从 sessionStorage 恢复表单数据
    function loadFormStep(stepNumber) {
      const savedData = sessionStorage.getItem(`formStep${stepNumber}`);
      return savedData ? JSON.parse(savedData) : null;
    }
    // 获取当前步骤
    function getCurrentStep() {
      return sessionStorage.getItem("currentStep") || "1";
    }
    // 示例：保存第一步表单数据
    saveFormStep(1, {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
    });
    // 示例：加载之前保存的表单数据
    const stepOneData = loadFormStep(1);
    if (stepOneData) {
      // 填充表单字段
      document.getElementById("firstName").value = stepOneData.firstName;
      document.getElementById("lastName").value = stepOneData.lastName;
      document.getElementById("email").value = stepOneData.email;
    }
    ```

44. #### 4. Vue 3 中使用 sessionStorage

45. ```html
    <script setup>
      import { ref, onMounted } from 'vue';
      // 定义多步骤表单状态
      const currentStep = ref(1);
      const formData = ref({
        step1: { name: '', email: '' },
        step2: { address: '', city: '' },
        step3: { payment: '', terms: false }
      });
      // 组件挂载时恢复表单状态
      onMounted(() => {
        const savedStep = sessionStorage.getItem('currentStep');
        if (savedStep) {
          currentStep.value = parseInt(savedStep);
        }
        // 恢复每个步骤的数据
        for (let i = 1; i <= 3; i++) {
          const stepData = sessionStorage.getItem(`formStep${i}`);
          if (stepData) {
            formData.value[`step${i}`] = JSON.parse(stepData);
          }
        }
      });
      // 进入下一步
      const nextStep = () => {
        // 保存当前步骤数据
        sessionStorage.setItem(`formStep${currentStep.value}`,
          JSON.stringify(formData.value[`step${currentStep.value}`]));
        // 前进到下一步
        currentStep.value++;
        sessionStorage.setItem('currentStep', currentStep.value);
      };
      // 返回上一步
      const prevStep = () => {
        currentStep.value--;
        sessionStorage.setItem('currentStep', currentStep.value);
      };
      // 提交表单
      const submitForm = () => {
        // 保存最后一步数据
        sessionStorage.setItem(`formStep${currentStep.value}`,
          JSON.stringify(formData.value[`step${currentStep.value}`]));
      }
        // 提交所有数据到服务器
        const allFormData = {
          ...formData.value.step1,
          ...formData.value.step2,
          ...formData.value.step3
        };
        // 提交后清除会话数据
        sessionStorage.clear();
        // TODO: 发送数据到服务器
        console.log('提交表单数据:', allFormData);
      };
    </script>
    AI写代码html
    ```

46. ### 四、localStorage 与 sessionStorage 的区别详解

47. #### 1. 数据的持久性与作用域

48. | 特性       | localStorage                                | sessionStorage             |
    | :--------- | :------------------------------------------ | :------------------------- |
    | 持久性     | 长期存储，无过期时间                        | 临时存储，会话结束即销毁   |
    | 作用域     | 同源（协议+域名+端口）的所有窗口/标签页共享 | 仅在创建数据的标签页内有效 |
    | 窗口间通信 | 可通过 `storage` 事件实现不同窗口间通信     | 无法跨标签页共享数据       |

49. #### 2. 进阶应用：Storage 事件

50. localStorage 的更改可通过 `storage` 事件在不同窗口间同步：

51. ```javascript
    // 在其他打开的同源窗口/标签页中监听 localStorage 变化
    window.addEventListener("storage", (event) => {
      console.log("存储变化:", {
        key: event.key, // 变化的键名
        oldValue: event.oldValue, // 旧值
        newValue: event.newValue, // 新值
        url: event.url, // 触发变化的页面 URL
      });
      // 根据变化更新当前页面状态
      if (event.key === "theme") {
        document.body.className = event.newValue;
      }
    });
    ```

52. #### 3. 设计更健壮的存储方案

53. 对于复杂应用，可以设计封装更好的存储方案：

54. ```javascript
    // 创建增强型本地存储管理器
    const storageManager = {
      /**
       * 存储数据，支持设置过期时间
       * @param {string} key - 存储键名
       * @param {*} value - 要存储的值
       * @param {number} [expiryInSeconds] - 过期时间（秒）
       */
      set(key, value, expiryInSeconds) {
        const data = {
          value,
          timestamp: Date.now(),
        };
        // 添加过期时间（如果指定）
        if (expiryInSeconds) {
          data.expiry = Date.now() + expiryInSeconds * 1000;
        }
        localStorage.setItem(key, JSON.stringify(data));
        return true;
      },
      /**
       * 获取数据，自动处理过期逻辑
       * @param {string} key - 存储键名
       * @param {*} [defaultValue] - 默认值（如果数据不存在或已过期）
       */
      get(key, defaultValue = null) {
        const item = localStorage.getItem(key);
        if (!item) return defaultValue;
        try {
          const data = JSON.parse(item);
          // 检查是否过期
          if (data.expiry && data.expiry < Date.now()) {
            this.remove(key);
            return defaultValue;
          }
          return data.value;
        } catch (err) {
          // 解析错误时返回原始值
          return item;
        }
      },
      /**
       * 删除数据
       * @param {string} key - 存储键名
       */
      remove(key) {
        localStorage.removeItem(key);
      },
      /**
       * 清除所有数据
       */
      clear() {
        localStorage.clear();
      },
      /**
       * 获取所有存储的键名
       * @returns {string[]} 键名数组
       */
      keys() {
        return Object.keys(localStorage);
      },
      /**
       * 清除所有过期数据
       */
      clearExpired() {
        const keys = this.keys();
        for (const key of keys) {
          const item = localStorage.getItem(key);
          try {
            const data = JSON.parse(item);
            if (data.expiry && data.expiry < Date.now()) {
              this.remove(key);
            }
          } catch (err) {
            // 忽略非 JSON 数据
          }
        }
      },
    };
    // 使用示例
    storageManager.set("userPreferences", {
      theme: "dark",
      fontSize: "medium",
    });
    storageManager.set("authToken", "xyz123", 3600); // 1小时过期
    const prefs = storageManager.get("userPreferences");
    const token = storageManager.get("authToken");
    ```

55. ### 五、Cookie 详解

56. #### 1. 什么是 Cookie？

57. Cookie 是服务器发送到用户浏览器并保存的小段文本，它会在浏览器下次向同一服务器发起请求时被携带并发送到服务器上。Cookie 主要用于以下三个方面：

58. - **会话状态管理**：如用户登录状态、购物车内容、游戏分数等需要记录的信息
    - **个性化设置**：如用户自定义设置、主题等
    - **浏览器行为跟踪**：如跟踪分析用户行为、广告投放等

59. #### 2. Cookie 的基本结构

60. Cookie 由多个字段组成，其核心字段和常用属性包括：

61. | 属性              | 描述                              |
    | :---------------- | :-------------------------------- |
    | `Name`            | Cookie 的名称                     |
    | `Value`           | Cookie 的值                       |
    | `Domain`          | 指定 Cookie 可用的域名            |
    | `Path`            | 指定 Cookie 可用的路径            |
    | `Expires/Max-Age` | 设置 Cookie 的过期时间            |
    | `Secure`          | 限制 Cookie 仅在 HTTPS 连接中传输 |
    | `HttpOnly`        | 禁止 JavaScript 访问 Cookie       |
    | `SameSite`        | 控制跨站请求时是否发送 Cookie     |

62. #### 3. Cookie 的工作原理

63. Cookie 存储在浏览器中，每个浏览器的安装目录下都有专门的文件夹存放不同域下的 Cookie。当浏览器向某个域发起 HTTP 请求时，会自动将该域下的 Cookie 添加到请求头中一并发送。

64. 需要注意的是，Cookie 存在一些限制：

65. - 每个域名下 Cookie 的大小限制为 4KB
    - 每个域名能够设置的 Cookie 数量通常为 20-50 个（取决于浏览器）
    - Cookie 会随每个 HTTP 请求发送，增加了网络开销

66. #### 4. 现代前端操作 Cookie 的方法

67. ##### 4.1 使用原生 JavaScript API

68. ```javascript
    // 设置 Cookie 的通用函数
    function setCookie(name, value, options = {}) {
      // 默认选项
      const defaultOptions = {
        path: "/", // 默认路径为根目录
        expires: undefined, // 默认无过期时间（会话期间有效）
        secure: false, // 默认不启用安全标志
        sameSite: "Lax", // 默认使用 Lax 模式（防止 CSRF，但允许一般导航）
      };
      // 合并选项
      options = { ...defaultOptions, ...options };
      // 构建 Cookie 字符串
      let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
        value
      )}`;
      // 添加过期时间
      if (options.expires) {
        if (options.expires instanceof Date) {
          cookieString += `; expires=${options.expires.toUTCString()}`;
        } else if (typeof options.expires === "number") {
          const date = new Date();
          date.setTime(date.getTime() + options.expires * 1000);
          cookieString += `; expires=${date.toUTCString()}`;
        }
      }
      // 添加路径
      if (options.path) {
        cookieString += `; path=${options.path}`;
      }
      // 添加域名
      if (options.domain) {
        cookieString += `; domain=${options.domain}`;
      }
      // 添加安全标志
      if (options.secure) {
        cookieString += "; secure";
      }
      // 添加 HttpOnly 标志
      if (options.httpOnly) {
        cookieString += "; httpOnly";
      }
      // 添加 SameSite 设置
      if (options.sameSite) {
        cookieString += `; samesite=${options.sameSite}`;
      }
      // 设置 Cookie
      document.cookie = cookieString;
    }
    // 获取 Cookie 值
    function getCookie(name) {
      const cookieName = `${encodeURIComponent(name)}=`;
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
          return decodeURIComponent(cookie.substring(cookieName.length));
        }
      }
      return null;
    }
    // 删除 Cookie
    function deleteCookie(name, options = {}) {
      // 设置过期时间为过去的日期，强制浏览器删除
      setCookie(name, "", {
        ...options,
        expires: new Date(0),
      });
    }
    // 使用示例
    // 设置一个7天有效的 Cookie
    setCookie("username", "Alice", {
      expires: 7 * 24 * 60 * 60, // 7天（秒数）
      secure: true,
      sameSite: "Strict",
    });
    // 获取 Cookie
    const username = getCookie("username");
    console.log(username); // 输出: Alice
    // 删除 Cookie
    deleteCookie("username");
    ```

69. ##### 4.2 实现 Cookie 管理器

70. ```javascript
    // 创建更完善的 Cookie 管理器
    const CookieManager = {
      /**
       * 设置 Cookie
       * @param {string} name - Cookie 名称
       * @param {string} value - Cookie 值
       * @param {Object} options - Cookie 选项
       */
      set(name, value, options = {}) {
        if (!name || typeof name !== "string") {
          throw new Error("Cookie name must be a non-empty string");
        }
        return setCookie(name, value, options);
      },
      /**
       * 获取 Cookie
       * @param {string} name - Cookie 名称
       * @returns {string|null} Cookie 值或 null
       */
      get(name) {
        return getCookie(name);
      },
      /**
       * 删除 Cookie
       * @param {string} name - Cookie 名称
       * @param {Object} options - Cookie 选项
       */
      delete(name, options = {}) {
        return deleteCookie(name, options);
      },
      /**
       * 检查 Cookie 是否存在
       * @param {string} name - Cookie 名称
       * @returns {boolean} 存在返回 true，否则 false
       */
      exists(name) {
        return this.get(name) !== null;
      },
      /**
       * 获取所有 Cookie
       * @returns {Object} 包含所有 Cookie 的对象
       */
      getAll() {
        const cookies = {};
        const cookieArray = document.cookie.split(";");
        for (let i = 0; i < cookieArray.length; i++) {
          const parts = cookieArray[i].trim().split("=");
          if (parts.length >= 2) {
            const name = decodeURIComponent(parts[0]);
            const value = decodeURIComponent(parts.slice(1).join("="));
            cookies[name] = value;
          }
        }
        return cookies;
      },
    };
    // 使用示例
    CookieManager.set("theme", "dark", {
      expires: 30 * 24 * 60 * 60, // 30天有效期
      secure: true,
      sameSite: "Lax",
    });
    CookieManager.set("sessionId", "abc123", {
      sameSite: "Strict",
      // 会话期间有效（默认情况）
    });
    // 检查 Cookie 是否存在
    if (CookieManager.exists("theme")) {
      console.log("主题已设置:", CookieManager.get("theme"));
    }
    // 获取所有 Cookie
    console.log("当前所有 Cookie:", CookieManager.getAll());
    ```

71. ##### 4.3 Vue 3 中使用 Cookie

72. 在 Vue 3 应用中集成 Cookie 管理：

73. ```javascript
    <script setup>
    import { ref, onMounted, watch } from 'vue';
    import { CookieManager } from './utils/cookie-manager'; // 引入上面定义的 Cookie 管理器
    // 定义响应式状态
    const isLoggedIn = ref(false);
    const userPreferences = ref({
      theme: 'light',
      fontSize: 'medium'
    });
    // 组件挂载时从 Cookie 加载数据
    onMounted(() => {
      // 检查登录状态
      const authToken = CookieManager.get('authToken');
      if (authToken) {
        isLoggedIn.value = true;
        // 这里可以发送请求验证 token 有效性
      }
      // 加载用户偏好设置
      const theme = CookieManager.get('theme');
      if (theme) {
        userPreferences.value.theme = theme;
      }
      const fontSize = CookieManager.get('fontSize');
      if (fontSize) {
        userPreferences.value.fontSize = fontSize;
      }
    });
    // 监听偏好设置变化并保存到 Cookie
    watch(() => userPreferences.value.theme, (newTheme) => {
      CookieManager.set('theme', newTheme, {
        expires: 90 * 24 * 60 * 60, // 90天有效期
        sameSite: 'Lax'
      });
      // 应用主题变化
      document.documentElement.setAttribute('data-theme', newTheme);
    });
    watch(() => userPreferences.value.fontSize, (newSize) => {
      CookieManager.set('fontSize', newSize, {
        expires: 90 * 24 * 60 * 60, // 90天有效期
        sameSite: 'Lax'
      });
      // 应用字体大小变化
      document.documentElement.style.fontSize =
        newSize === 'small' ? '14px' :
        newSize === 'medium' ? '16px' : '18px';
    });
    // 登录方法
    const login = (credentials) => {
      // 模拟登录请求
      // axios.post('/api/login', credentials)
      //   .then(response => {
      // 登录成功，设置认证 Cookie
      CookieManager.set('authToken', 'jwt_token_here', {
        expires: 7 * 24 * 60 * 60, // 7天有效期
        secure: true,
        sameSite: 'Strict'
      });
      isLoggedIn.value = true;
      //   })
    };
    // 登出方法
    const logout = () => {
      // 删除认证 Cookie
      CookieManager.delete('authToken');
      isLoggedIn.value = false;
    };
    </script>
    ```

74. #### 5. Cookie 安全性与最佳实践

75. ##### 5.1 Cookie 安全标志

76. - **HttpOnly**：防止 JavaScript 访问 Cookie，减少 XSS 攻击风险

    - **Secure**：限制 Cookie 仅通过 HTTPS 连接传输，防止中间人攻击

    - **SameSite**：

      控制跨站请求时是否发送 Cookie，减少 CSRF 攻击风险

      - `Strict`：仅同站点请求发送 Cookie
      - `Lax`：允许部分跨站请求（如导航）发送 Cookie
      - `None`：允许跨站请求发送 Cookie，但必须同时设置 Secure 标志

77. ##### 5.2 Cookie 安全最佳实践

78. 1. **使用 HTTPS**：为网站启用 HTTPS，并为所有 Cookie 设置 `Secure` 标志
    2. **敏感数据保护**：为包含认证信息的 Cookie 设置 `HttpOnly` 和 `SameSite=Strict`
    3. **合理的过期时间**：根据数据敏感性设置合适的过期时间，不要无限期存储敏感数据
    4. **最小权限原则**：限制 Cookie 的作用域（使用 `Path` 和 `Domain` 属性）
    5. **数据加密**：对存储在 Cookie 中的敏感数据进行加密
    6. **分离敏感数据**：将敏感数据（如认证令牌）与非敏感数据（如用户偏好）分开存储

79. ```javascript
    // 安全 Cookie 设置示例
    // 认证令牌 - 高安全性配置
    CookieManager.set("authToken", "jwt_token_here", {
      expires: 1 * 60 * 60, // 1小时过期
      secure: true,
      httpOnly: true, // 注意：这只能在服务器端设置
      sameSite: "Strict",
      path: "/api", // 限制只在 API 请求时发送
    });
    // 用户偏好 - 较低安全性要求
    CookieManager.set("theme", "dark", {
      expires: 365 * 24 * 60 * 60, // 一年过期
      sameSite: "Lax",
    });
    ```

80. ### 六、存储方案对比与选择指南

81. #### 1. localStorage vs sessionStorage vs Cookie 对比

82. | 特性         | localStorage        | sessionStorage             | Cookie                     |
    | :----------- | :------------------ | :------------------------- | :------------------------- |
    | 存储容量     | 5-10MB              | 5-10MB                     | 4KB                        |
    | 生命周期     | 永久，除非手动删除  | 会话期间，关闭标签页即失效 | 可配置过期时间             |
    | 与服务器通信 | 不随请求发送        | 不随请求发送               | 自动随请求发送             |
    | 访问范围     | 同源所有标签页/窗口 | 仅创建它的标签页           | 同源所有标签页，可限制路径 |
    | 可配置性     | 较低                | 较低                       | 较高（过期时间、路径等）   |
    | 安全性       | 基本，仅限同源      | 基本，仅限同源同标签页     | 可配置安全属性和策略       |
    | API 易用性   | 简单直观            | 简单直观                   | 相对复杂                   |

83. #### 2. 选择适合的存储方案

84. 根据不同的使用场景选择合适的存储方案：

85. - 选择 localStorage 的场景:
      - 需要长期存储的数据（主题设置、用户偏好）
      - 较大容量的数据（用户创建的内容、缓存）
      - 不需要与服务器交互的数据
      - 多标签页需要共享的数据
    - 选择 sessionStorage 的场景:
      - 一次会话中需要临时保存的数据
      - 表单填写进度或向导式流程中的数据
      - 避免数据被其他标签页访问的场景
      - 不希望数据长期存储的情况
    - 选择 Cookie 的场景:
      - 需要与服务器通信的数据（身份验证凭证）
      - 需要更细粒度控制（过期时间、域、路径）的数据
      - 需要增强安全性的数据（通过 HttpOnly、Secure 等）
      - 需要支持旧版浏览器的场景

86. #### 3. 混合存储策略

87. 对于复杂应用，通常需要结合多种存储方案：

88. ```javascript
    // 混合存储策略实现
    const StorageManager = {
      // 存储长期用户偏好 - 使用 localStorage
      savePreferences(preferences) {
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
      },
      // 存储会话相关状态 - 使用 sessionStorage
      saveSessionState(state) {
        sessionStorage.setItem('sessionState', JSON.stringify(state));
      },
      // 存储身份验证信息 - 使用 Cookie
      saveAuthData(token, expiresInSeconds) {
        CookieManager.set('authToken', token, {
          expires: expiresInSeconds,
          secure: true,
          sameSite: 'Strict'
        });
      },
      // 针对不同环境的缓存策略
      cacheData(key, data, options = {}) {
        const { persistent = false, expires } = options;
        if (persistent) {
          // 持久缓存 - 使用 localStorage
          if (expires) {
            // 带过期时间的数据
            const item = {
              value: data,
              expiry: Date.now() + (expires * 1000)
            };
            localStorage.setItem(key, JSON.stringify(item));
          } else {
            // 无过期时间的数据
            localStorage.setItem(key, JSON.stringify(data));
          }
        } else {
          // 临时缓存 - 使用 sessionStorage
          sessionStorage.setItem(key, JSON.stringify(data));
        }
      },
      // 获取缓存数据，自动处理不同存储和过期逻辑
      getCachedData(key, options = {}) {
        const { persistent = false, defaultValue = null } = options;
        // 尝试从指定存储获取数据
        const storage = persistent ? localStorage : sessionStorage;
        const item = storage.getItem(key);
        if (!item) return defaultValue;
        try {
          const parsed = JSON.parse(item);
          // 检查是否包含过期信息
          if (parsed && parsed.expiry) {
            if (Date.now() > parsed.expiry) {
              // 数据已过期，删除并返回默认值
              storage.removeItem(key);
              return defaultValue;
            }
            return parsed.value;
          }
          return parsed;
        } catch (e) {
          // 解析错误，返回原始值
          return item;
        }
      }
    }
    // 使用示例
    // 保存用户偏StorageManager.savePreferences({
      theme: 'dark',
      fontSize: 'large',
      notifications: true
    });
    // 保存会话状态
    StorageManager.saveSessionState({
      currentPage: 3,
      formData: { name: 'John', email: 'john@example.com' }
    });
    // 缓存API响应，持久化但设置过期时间
    StorageManager.cacheData('productList', productData, {
      persistent: true,
      expires: 3600 // 1小时过期
    });
    // 获取缓存数据
    const products = StorageManager.getCachedData('productList', {
      persistent: true,
      defaultValue: []
    });
    ```

89. ### 七、高级应用与性能优化

90. #### 1. IndexedDB 简介

91. 对于更复杂的数据存储需求，Web Storage API 和 Cookie 可能不足以满足。IndexedDB 提供了一个完整的客户端数据库解决方案：

92. - 支持存储大量结构化数据
    - 支持索引和事务
    - 支持复杂查询和游标
    - 支持二进制数据（如文件、图像）

93. 虽然 IndexedDB 超出了本文讨论范围，但在处理大量数据或复杂数据结构时值得考虑。

94. #### 2. 存储性能优化

95. 无论选择哪种存储方式，都应该遵循以下性能最佳实践：

96. ```javascript
    // 1. 批量操作而非频繁小操作
    function batchStorageUpdate(updates) {
      // 读取现有数据一次
      const existingData = JSON.parse(localStorage.getItem('appData') || '{}');
      // 批量更新
      Object.entries(updates).forEach(([key, value]) => {
        existingData[key] = value;
      });
      // 一次性写入
      localStorage.setItem('appData', JSON.stringify(existingData));
    }
    // 使用示例
    batchStorageUpdate({
      'user.lastLogin': Date.now(),
      'user.visits': 10,
      'settings.theme': 'dark'
    });
    // 2. 合理组织数据结构，避免存储冗余信息
    const appData = {
      // 区分不同类型的数据
      user: {
        id: 12345,
        name: 'John Doe',
        email: 'john@example.com'
      },
      settings: {
        theme: 'dark',
        notifications: true
      },
      cache: {
        // 缓存数据和过期时间
        products: {
          data: [...],
          expires: Date.now() + 3600000
        }
      }
    };
    localStorage.setItem('appData', JSON.stringify(appData));
    // 3. 定期清理过期数据
    function cleanupStorage() {
      // 清理 localStorage 过期数据
      try {
        const appData = JSON.parse(localStorage.getItem('appData') || '{}');
        let changed = false;
        // 检查缓存部分的过期数据
        if (appData.cache) {
          for (const [key, entry] of Object.entries(appData.cache)) {
            if (entry.expires && entry.expires < Date.now()) {
              delete appData.cache[key];
              changed = true;
            }
          }
        }
        // 只在有变更时写入
        if (changed) {
          localStorage.setItem('appData', JSON.stringify(appData));
        }
      } catch (e) {
        console.error('清理存储时出错:', e);
      }
    }
    // 定期执行清理
    setInterval(cleanupStorage, 60 * 60 * 1000); // 每小时清理一次
    ```
