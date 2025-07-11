---
date: 2025-07-11
category:
  - frontend
tag:
  - node
  - backend
  - frontend
  - axios
  - fetch
  - ajax
---

# 为什么 javascript 开发人员应优先选择 axios 而不是 fetch

## 概述和语法

### Fetch

`Fetch()`是 Fetch API 中 JavaScript window 对象的一部分。它是内置的，因此用户不必安装它。`Fetch()`允许我们从 API 异步获取数据，而无需安装任何其他库。

```js
fetch(url)
  .then((res) => {
    // handle response
  })
  .catch((error) => {
    // handle error
  });
```

上面的代码是一个简单的`fetch()`的 get 请求。在 fetch()方法中，有一个强制性参数，即 url。url 是用户希望从中获取数据的路径。然后，通过 fetch()方法返回一个可以释放响应对象或因错误而拒绝它的 promise。

```js
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .catch((error) => console.log(error));
```

fetch()方法中的第二个参数是选项，它们是可选的。如果用户没有传参，则请求始终会得到，并且它将从给定的 URL 下载内容。如上所述，promise 返回响应对象，因此，用户需要使用另一种方法来获取响应主体。用户可以根据请求体的格式使用几种不同的方法。

response.json()
response.text()
response.blob()
response.formData()
response.arrayBuffer()
最受欢迎的是 response.json()。
不幸的是，内置 fetch()函数不在 Node.js 中，但是有一个类似于 node-fetch 的 polyfill 函数。在节点获取和浏览器之间的 fetch()函数，存在几种不同的形式。

Axios
Axios 是一个现代化第三方库，可以向 Node 或 XMLHttpRequest 或浏览器发送 HTTP 请求。作为现代图书馆，它基于 Promise API。Axios 具有一些优势，例如可以防止跨站点请求伪造（CSFR）攻击。为了能够使用 Axios 库，用户可以使用 CDN，npm，Yarn 或 Bower 安装它并将其导入到您的项目中。

```js
axios
  .get(url)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

上面的代码是一个 get 方法以及一个用于响应和错误的简单回调。用户创建配置对象时，可以定义一堆属性。最常见的是 url，baseURL，params，auth，headers，responseType，和 data。
作为响应，Axios 返回一个响应对象或错误对象的 promise。在响应对象中，有以下几个值：

data： 实际响应体
status：返回的 HTTP 状态代码，例如 200 或 404
statusText：做为文本消息的 HTTP 状态
headers：与请求相同
config：请求配置
request：XMLHttpRequest（XHR）对象

```js
axios({
  url: "http://api.com",
  method: "POST",
  header: {
    "Content-Type": "application/json",
  },
  data: { name: "Sabesan", age: 25 },
});
```

在 fetch()中，用户需要在中使用两个 promise。用户可以避免重复，并在 Axios 中编写更简洁明了的代码。

Axios 使用 data 属性，但 fetch()使用 body 属性来处理数据。fetch()的 data 是字符串化。在 fetch()中，URL 作为请求参数，但是在 Axios 中，URL 是配置对象。

JSON 格式
Fetch
使用 fetch()方法，用户需要使用一些方法对响应数据进行处理。当用户发送请求体时，用户需要对数据进行字符串化。

```js
fetch("url")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

在上面的代码中，用户需要使用响应数据来处理 response.json()的操作。当在 fetch()中处理 json 数据时，需要执行两个步骤。用户需要先发送实际的请求，然后在响应中回调.json()方法。

Axios
在 Axios 中，用户在请求中传递数据或从响应中获取数据，数据会自动进行字符串化。因此，不需要其他操作。

```js
axios
  .get("url")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

在上面的示例中，你可以看到只需要使用一个 then。
自动转换数据是 Axios 的一项不错的功能。

错误处理
Fetch
每次从 fetch()方法获取响应数据时，都需要检查状态是否成功，因为即使状态不成功，你也会得到响应数据。在 fetch()的情况下，当且仅当请求无法完成时，promise 才会被释放。

```js
fetch("url")
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

`Fetch()`不会引发网络错误。因此，在使用`fetch()`时，必须始终检查`response.ok`属性。您可以将此错误检查提取到一个函数中，以使其更易于重复使用。

```js
const checkError = (response) => {
  if (!response.ok) throw Error(response.statusText);
  return response.json();
};

fetch("url")
  .then(checkError)
  .then((data) => console.log(data))
  .catch((error) => console.log("error", error));
```

### Axios

在 Axios 中，处理错误非常容易，因为 Axios 会引发网络错误。如果返回错误响应 404，则 Promise 将被拒绝并返回错误。因此，您需要捕获一个错误，然后可以检查它是什么类型的错误。

```js
axios
  .get("url")
  .then((response) => console.log(response))
  .catch((error) => {
    if (error.response) {
      // When response status code is out of 2xxx range
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      //When no response was received after request was made
      console.log(error.request);
    } else {
      // Error
      console.log(error.message);
    }
  });
```

下载进度
在加载大量资源时，进度指示器对于网速较慢的用户非常有用。在以前实施的进度指标中。开发者使用 XMLHttpRequest.onprogress 作为回调处理程序。

Fetch
在 fetch()中，要跟踪下载进度，可以使用 response.body 属性的 ReadableStream 对象。它逐块提供主体数据，并允许你计算及时消耗了多少数据。

```js
// original code: https://github.com/AnthumChris/fetch-progress-indicators
const element = document.getElementById("progress");

fetch("url")
  .then((response) => {
    if (!response.ok) {
      throw Error(response.status + " " + response.statusText);
    }

    // ensure ReadableStream is supported
    if (!response.body) {
      throw Error("ReadableStream not yet supported in this browser.");
    }

    // store the size of the entity-body, in bytes
    const contentLength = response.headers.get("content-length");

    // ensure contentLength is available
    if (!contentLength) {
      throw Error("Content-Length response header unavailable");
    }

    // parse the integer into a base-10 number
    const total = parseInt(contentLength, 10);

    let loaded = 0;

    return new Response(
      // create and return a readable stream
      new ReadableStream({
        start(controller) {
          const reader = response.body.getReader();

          read();
          function read() {
            reader
              .read()
              .then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }
                loaded += value.byteLength;
                progress({ loaded, total });
                controller.enqueue(value);
                read();
              })
              .catch((error) => {
                console.error(error);
                controller.error(error);
              });
          }
        },
      })
    );
  })
  .then((response) =>
    // construct a blob from the data
    response.blob()
  )
  .then((data) => {
    // insert the downloaded image into the page
    document.getElementById("img").src = URL.createObjectURL(data);
  })
  .catch((error) => {
    console.error(error);
  });

function progress({ loaded, total }) {
  element.innerHTML = Math.round((loaded / total) * 100) + "%";
}
```

上面的示例演示了`ReadableStream`在下载图像时，向用户提供即时反馈的用法。

### Axios

在 Axios 中，也可以实现进度指示器，并可以安装和实现就绪模块，因此它甚至更容易。称为 Axios 进度条。

```js
loadProgressBar();

function downloadFile(url) {
  axios
    .get(url, { responseType: "blob" })
    .then((response) => {
      const reader = new window.FileReader();
      reader.readAsDataURL(response.data);
      reader.onload = () => {
        document.getElementById("img").setAttribute("src", reader.result);
      };
    })
    .catch((error) => {
      console.log(error);
    });
}
```

HTTP 拦截
当你需要检查或更改从应用程序到服务器的 HTTP 请求或以其他方式（例如，身份验证，日志记录等）进行监听时，拦截对我们来说就很重要。

Fetch
Fetch()默认情况下不提供 HTTP 拦截。可以覆盖 fetch()方法并定义在发送请求期间需要发生的事情，但是与使用 Axios 的功能相比，它将花费更多的代码并且可能更加复杂。你可以覆盖全局 fetch()方法并定义自己的拦截器，如以下代码所示：

```js
fetch = ((originalFetch) => {
  return (...arguments) => {
    const result = originalFetch.apply(this, arguments);
    return result.then(console.log("Request was sent"));
  };
})(fetch);

fetch("url")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

### Axios

`Axios`中 HTTP 拦截是该库的主要功能之一———这就是为什么你不需要创建其他代码的原因。

```js
// request interceptors
axios.interceptors.request.use((config) => {
  console.log("Request was sent");
  return config;
});

// response interceptors
axios.interceptors.response.use((response) => {
  // do an operation on response
  return response;
});

axios
  .get("url")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

在上面的代码中，axios.interceptors.request.use()和 axios.interceptors.response.use()方法用于定义要在发送 HTTP 请求之前运行的代码。

响应超时
Fetch
Fetch()通过 AbortController 接口提供响应超时功能。

```js
const controller = new AbortController();
const signal = controller.signal;
const options = {
  method: "POST",
  signal: signal,
  body: JSON.stringify({
    firstName: "Sabesan",
    lastName: "Sathananthan",
  }),
};
const promise = fetch("/login", options);
const timeoutId = setTimeout(() => controller.abort(), 5000);

promise
  .then((response) => {
    /* handle the response */
  })
  .catch((error) => console.error("timeout exceeded"));
```

在上面的代码中，使用 AbortController.AbortController()构造函数，你需要创建一个 AbortController 对象。该对象允许你稍后中止请求。正如我在上一篇文章“深入了解 JavaScript 的 Fetch API ”中提到的那样，我们讨论了 signal 为什么是 AbortController 的属性，该属性是只读的。signal 提供一种与请求通信或中止请求的方法。如果服务器在不到五秒钟内没有响应，则通过调用 controller.abort()终止操作。

Axios
通过使用配置对象中的可选项 timeout 属性，可以设置终止请求之前的毫秒数。

```js
axios({
  method: "post",
  url: "/login",
  timeout: 5000, // 5 seconds timeout
  data: {
    firstName: "Sabesan",
    lastName: "Sathananthan",
  },
})
  .then((response) => {
    /* handle the response */
  })
  .catch((error) => console.error("timeout exceeded"));
```

JavaScript 开发人员选择 Axios 而不是选择 Axios 的原因之一就是：fetch()是易于设置超时。

并发请求
Fetch
要同时发出多个请求，可以使用内置 Promise.all()方法。只需将 fetch()请求数组传递给 Promise.all()，然后再传递一个 async 函数来处理响应。

```js
Promise.all([
  fetch("https://api.github.com/users/sabesansathananthan"),
  fetch("https://api.github.com/users/rcvaram"),
])
  .then(async ([res1, res2]) => {
    const a = await res1.json();
    const b = await res2.json();
    console.log(a.login + " has " + a.public_repos + " public repos on GitHub");
    console.log(b.login + " has " + b.public_repos + " public repos on GitHub");
  })
  .catch((error) => {
    console.log(error);
  });
```

### Axios

您可以使用 Axios 提供的方法`axios.all()`,来获得上述结果。将所有获取的请求作为数组传递给该`axios.all()`方法。使用`axios.spread()`函数将响应数组的属性分配给单独的变量，如下所示：

```js
axios
  .all([
    axios.get("https://api.github.com/users/sabesansathananthan"),
    axios.get("https://api.github.com/users/rcvaram"),
  ])
  .then(
    axios.spread((obj1, obj2) => {
      // Both requests are now complete
      console.log(
        obj1.data.login +
          " has " +
          obj1.data.public_repos +
          " public repos on GitHub"
      );
      console.log(
        obj2.data.login +
          " has " +
          obj2.data.public_repos +
          " public repos on GitHub"
      );
    })
  );
```

向后兼容
向后兼容也称为浏览器兼容性。

Fetch
Fetch()仅支持 Chrome 42 +，Safari 10.1 +，Firefox 39+和 Edge 14+。完整的兼容表可在“Can I Use?”中找到。为了实现 fetch()不支持的 Web 浏览器，可以使用 fetch()的 polyfill 之类的方法填充 windows.fetch()。
使用 polyfill，请通过 npm 命令安装它：

```js
npm install whatwg-fetch --save
```

如果出于某种原因需要通过 polyfill 实现，则可以通过导出使用它：

```js
import {fetch as fetchPolyfill} from 'whatwg-fetch'

window.fetch(...)   // use native browser version
fetchPolyfill(...)  // use polyfill implementation
```

请记住，在某些旧的浏览器中，你可能还需要一个 promise 的 polyfill。

Axios
Axios 不像 fetch()。Axios 提供了广泛的浏览器支持。甚至像 IE11 这样的旧版浏览器也可以毫无问题地运行 Axios。完整的兼容性表可通过 Axios 的文档获得。

结论
对于大多数 HTTP 请求来说，Axios 都用一个安装包提供了易于使用的 API。
还有一些用于 HTTP 通信的替代库，例如 ky，这是一个基于 window.fetch 的小巧优雅的 HTTP 客户端；superagent，一个基于 XMLHttpRequest 的小型渐进式客户端 HTTP 请求库。
但是对于有大量 HTTP 请求的应用程序以及需要良好错误处理或 HTTP 拦截的应用程序，Axios 是更好的解决方案。
对于只有几个简单 API 调用的小型项目，fetch()可能是一个很好的解决方案。
