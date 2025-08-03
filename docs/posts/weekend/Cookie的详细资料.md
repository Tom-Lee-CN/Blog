---
date: 2025-07-11
category:
  - frontend
tag:
  - node
  - backend
  - frontend
  - weekend
---

# Cookie 的详细资料

#### 1. 什么是 Cookie？

HTTP 是无状态的协议，每次客户端（如浏览器）向服务器发送请求时，服务器并不会记住之前的请求。这时候 **Cookie** 就派上用场了。Cookie 是由服务器生成并存储在客户端浏览器中的一小段数据。每次客户端发起请求时，浏览器会自动将 Cookie 发送给服务器，从而实现状态的保持。Cookie 可以用于以下几种场景：

- **会话管理**：如用户登录状态、购物车等。
- **个性化设置**：如用户偏好设置、主题等。
- **跟踪用户行为**：如记录用户访问网站的情况，常用于广告投放等场景。

#### 2. Cookie 的基本结构

Cookie 的格式是一个 `key=value` 的键值对，除此之外，Cookie 还可以包含一些属性。常见的 Cookie 属性如下：

- `Name`：Cookie 的名字（Key）。
- `Value`：Cookie 的值。
- `Domain`：指定 Cookie 适用的域名。
- `Path`：指定 Cookie 适用的 URL 路径。
- `Expires/Max-Age`：指定 Cookie 的过期时间或最大存活时间。`Expires` 是具体的日期时间，`Max-Age` 是秒数。
- `Secure`：只允许在 HTTPS 连接中传输该 Cookie。
- `HttpOnly`：限制客户端 JavaScript 访问 Cookie，增加安全性。
- `SameSite`：用于防止跨站请求伪造（CSRF）攻击，可以设置为 `Strict`、`Lax` 或 `None`。

#### 3. 前端如何操作 Cookie（JavaScript 示例）

JavaScript 提供了一些原生的 API 来操作浏览器中的 Cookie，如 `document.cookie`。

##### 3.1 设置 Cookie

```javascript
// 设置一个 Cookie，有效期为 7 天
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // 将天数转换为毫秒
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
setCookie("username", "JohnDoe", 7); // 设置一个名为 'username' 的 Cookie，有效期 7 天
AI写代码javascript运行;
```

##### 3.2 获取 Cookie

```javascript
// 获取指定名字的 Cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
let user = getCookie("username"); // 获取名为 'username' 的 Cookie 值
AI写代码javascript运行;
```

##### 3.3 删除 Cookie

```javascript
// 删除指定名字的 Cookie
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;"; // 设置 Max-Age 为负值删除 Cookie
}
eraseCookie("username"); // 删除 'username' 的 Cookie
AI写代码javascript运行;
```

##### 3.4 Cookie 操作注意事项

- Cookie 的大小限制通常为 4KB（包括名字、值和属性）。
- 每个域名下的 Cookie 数量通常限制为 20-50 个不等。
- JavaScript 操作 Cookie 时，如果设置了 `HttpOnly` 属性，Cookie 将无法通过 `document.cookie` 进行访问。

#### 4. 后端如何操作 Cookie（Spring 框架 Java 示例）

在后端使用 Spring 框架时，操作 Cookie 通常涉及设置 Cookie 到响应中，以及从请求中读取 Cookie。

##### 4.1 设置 Cookie

```java
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CookieController {

    @GetMapping("/set-cookie")
    public String setCookie(HttpServletResponse response) {
        // 创建一个 Cookie 对象
        Cookie cookie = new Cookie("username", "JohnDoe");

        // 设置 Cookie 的有效路径
        cookie.setPath("/");

        // 设置 Cookie 的有效期为 7 天
        cookie.setMaxAge(7 * 24 * 60 * 60);

        // 添加到响应中
        response.addCookie(cookie);

        return "Cookie 已设置";
    }
}
AI写代码java运行
```

##### 4.2 获取 Cookie

```java
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CookieController {

    @GetMapping("/get-cookie")
    public String getCookie(HttpServletRequest request) {
        // 从请求中获取所有 Cookie
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("username".equals(cookie.getName())) {
                    return "Cookie 值: " + cookie.getValue();
                }
            }
        }
        return "Cookie 不存在";
    }
}
AI写代码java运行
```

##### 4.3 删除 Cookie

```java
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CookieController {

    @GetMapping("/delete-cookie")
    public String deleteCookie(HttpServletResponse response) {
        // 创建一个名为 'username' 的 Cookie，并将其 Max-Age 设置为 0 以删除它
        Cookie cookie = new Cookie("username", null);
        cookie.setMaxAge(0);
        cookie.setPath("/");

        // 添加到响应中
        response.addCookie(cookie);

        return "Cookie 已删除";
    }
}
AI写代码java运行
```

#### 5. Cookie 安全性问题

##### 5.1 `HttpOnly` 属性

`HttpOnly` 是一种非常重要的安全属性。它防止客户端 JavaScript 读取 Cookie，降低了 XSS（跨站脚本攻击）的风险。设置 `HttpOnly` 时，Cookie 只能通过 HTTP 请求发送，JavaScript 无法访问该 Cookie。

在 Java 中，你可以通过以下方式设置 `HttpOnly`：

```java
cookie.setHttpOnly(true);  // 设置 HttpOnly 属性
AI写代码java运行
```

##### 5.2 `Secure` 属性

`Secure` 属性确保 Cookie 仅通过 HTTPS 传输，防止数据在传输过程中被窃取。你可以通过以下方式设置 `Secure`：

```java
cookie.setSecure(true);  // 设置 Secure 属性
AI写代码java运行
```

##### 5.3 `SameSite` 属性

`SameSite` 属性防止跨站请求伪造（CSRF）攻击，可以设置为：

- `Strict`：严格模式，禁止任何跨站请求携带 Cookie。
- `Lax`：宽松模式，允许部分跨站请求（如 GET 请求）携带 Cookie。
- `None`：允许跨站请求携带 Cookie，但要求使用 HTTPS 连接。

在 Java 中，你可以使用 `ResponseCookie` 类来设置 `SameSite` 属性：

```java
ResponseCookie cookie = ResponseCookie.from("username", "JohnDoe")
        .path("/")
        .maxAge(7 * 24 * 60 * 60)
        .httpOnly(true)
        .secure(true)
        .sameSite("Strict")
        .build();
response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
AI写代码java运行
```

#### 6. 示例：综合前后端操作 Cookie

##### 6.1 前端 JavaScript 设置 Cookie 并通过 Ajax 请求发送

```javascript
// 前端设置 Cookie 并发送 Ajax 请求
setCookie("username", "JohnDoe", 7);

fetch("/get-cookie", {
  method: "GET",
  credentials: "include", // 无论是同源还是跨域请求，都携带Cookie
})
  .then((response) => response.text())
  .then((data) => console.log(data));
AI写代码javascript运行;
```

##### 6.2 后端 Java 处理 Cookie 请求

```java
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000" allowCredentials = "true")  // 允许跨域请求并携带Cookie
public class CookieController {

    @GetMapping("/get-cookie")
    public String getCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("username".equals(cookie.getName())) {
                    return "Cookie 值: " + cookie.getValue();
                }
            }
        }
        return "Cookie 不存在";
    }
}
AI写代码java运行
```
