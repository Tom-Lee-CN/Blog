---
date: 2025-06-16
category:
  - backend
tag:
  - node
  - backend
  - frontend
  - upload


---



# nodeJs中间件Multer详解_使用express实现本地文件/图片上传到服务器指定目录

最终实现的效果，更改Input的值后，将图片显示出来、输入描述信息，提交后，图片上传到后台对应的路径下。
![Multer 实现本地文件/图片上传](https://i-blog.csdnimg.cn/blog_migrate/3bef0e0df4fc8d6329bdbacd185c0087.png)

## Multer

- Multer 是一个node.js中间件，用于处理 `multipart/form-data`类型的表单数据，主要用于上传文件。
- 在form表单上要加上 enctype=“multipart/form-data” 的属性。
- Multer 不会处理任何非 multipart/form-data 类型的表单数据。
- 不要将 Multer 作为全局中间件使用，因为恶意用户可以上传文件到一个你没有预料到的路由，应该只在你需要处理上传文件的路由上使用。

## 1. 安装

终端中输入以下命令
`npm install --save multer`
或者使用yarn命令
`yarn add multer -S`

## 2. 简单使用

```javascript
const express=require("express");
const multer=require("multer");
const app=express();

app.post("/upload",uploadFile,(req,res)=>{
    //这里的req.body是经过uploadFile中间件进行处理后的,包含了表单中所有的提交内容
    console.log(req.body);
    res.send("文件上传成功");
})

//自定义中间件
function uploadFile(req,res,next){
	//dest 值为文件存储的路径;single方法,表示上传单个文件,参数为表单数据对应的key
	let upload=multer({dest:"attachment/"}).single("photo");
	upload(req,res,(err)=>{
		//打印结果看下面的截图
	    console.log(req.file);
		if(err){
	        res.send("err:"+err);
	    }else{
	        //将文件信息赋值到req.body中，继续执行下一步
	        req.body.photo=req.file.filename;
	        next();
	    }
	})
}
app.listen(3000);
AI写代码javascript运行123456789101112131415161718192021222324252627
```

表单提交文件，访问 localhost:3000/upload 接口后，就可以在attachment 目录里看到刚刚上传的文件，为了避免命名冲突，Multer 默认会修改上传的文件名为随机字符。如果想自定义文件名称， 可以在 DiskStorage 中配置。
![Multer 实现本地文件/图片上传](https://i-blog.csdnimg.cn/blog_migrate/f16dc7627d59876bb6e56de1fc049ff6.png)
req.file 打印结果如下图：
![Multer 实现本地文件/图片上传](https://i-blog.csdnimg.cn/blog_migrate/30bbfc8b9b0abe61ac4fe489f52e3533.png)
每个文件（req.file）具有下面的信息:

| 属性         | 描述                          | 说明                       |
| ------------ | ----------------------------- | -------------------------- |
| fieldname    | Field name 由表单指定         |                            |
| originalname | 用户计算机上的文件的名称      |                            |
| encoding     | 文件编码                      |                            |
| mimetype     | 文件的 MIME 类型              |                            |
| size         | 文件大小（字节单位）          |                            |
| destination  | 保存路径                      | 可以在 DiskStorage 中设置  |
| filename     | 保存在 destination 中的文件名 | 可以在 DiskStorage 中设置  |
| path         | 已上传文件的完整路径          | 可以在 DiskStorage 中设置  |
| buffer       | 一个存放了整个文件的 Buffer   | 可以在 MemoryStorag 中设置 |

## 3. 方法

### 3.1 multer(options).single(fieldname)

上传单个文件内容，如一次只上传一张图片。fieldname为上传时文件的字段名称。

```javascript
//上传单个图片
let upload=multer({dest:"attachment/"}).single("photo");
AI写代码javascript运行12
```

上传的数据格式如下：
![Multer 实现本地文件/图片上传](https://i-blog.csdnimg.cn/blog_migrate/e9c2e116671489b31ab13be74905bc82.png)

### 3.2 multer(options).array(fieldname[,maxCount])

适用于同一个字段，一次上传多个文件的情况，例如发状态时，选择多张图片发送。接受一个以 fieldname 命名的文件数组。可以指定 maxCount 来限制上传的最大数量。这些文件的信息保存在 req.files。

```javascript
//一次最多上传3个文件
let upload=multer({dest:"attachment/"}).array("photo",3);
AI写代码javascript运行12
```

上传的数据格式如下：
![Multer 实现本地文件/图片上传](https://i-blog.csdnimg.cn/blog_migrate/05e2e5222ba3f357b1e92568653ba62a.png)

### 3.3 multer(options).fields(fields)

适用于上传多个字段的情况。接受指定 fields 的混合文件。这些文件的信息保存在 req.files。fields 是一个对象数组，具有 name 和可选的 maxCount 属性。

```javascript
let fieldsList=[
    {name:"photo1"},
    {name:"photo2",maxCount:2}
]
let upload=multer({dest:"attachment/"}).fields(fieldsList);
AI写代码javascript运行12345
```

上传的数据格式如下：
![Multer 实现本地文件/图片上传](https://i-blog.csdnimg.cn/blog_migrate/6b1552dba8ff059b0f1b4ef4297c2d7a.png)

### 3.4 multer(options).none()

接收只有文本域的表单，如果上传任何文件，会返回 “LIMIT_UNEXPECTED_FILE” 错误。

```javascript
let upload=multer({dest:"attachment/"}).none();
AI写代码javascript运行1
```

### 3.5 multer(options).any()

接收一切上传的文件。

```javascript
let upload=multer({dest:"attachment/"}).any();
AI写代码javascript运行1
```

## 4. multer(options) 配置项

Multer 接受一个 options 对象，其中最基本的是 dest 属性，这将告诉 Multer 将上传文件保存在哪。如果省略 options 对象，这些文件将保存在内存中，永远不会写入磁盘，options 配置如下：

| 属性值          | 描述                               |
| --------------- | ---------------------------------- |
| dest or storage | 在哪里存储文件                     |
| limits          | 限制上传数据的大小                 |
| fileFilter      | 文件过滤器，控制哪些文件可以被接受 |
| preservePath    | 保存包含文件名的完整文件路径       |

### 4.1 dest

指定上传文件的存储路径。文件名默认为随机字符。如果想自定义文件名称， 使用下面 DiskStorage 来配置。

```javascript
var upload = multer({dest:"attachment/"});
AI写代码javascript运行1
```

### 4.2 storaged 存储引擎

**DiskStorage 磁盘存储引擎**

磁盘存储引擎可以让你控制文件的存储。有两个属性，属性值都是函数。destination，指定文件存储的路径；filename，指定文件的存储名称。

```javascript
const multer=require("multer");
const path=require("path");

//获取绝对路径
let fullPath=path.resolve(__dirname+"/attachment");
//设置文件的名称
let filename="";
let storage=multer.diskStorage({
	//设置存储路径
    destination:(req,file,cb)=>{
        console.log("destination:",file);//打印结果如下图
        cb(null,fullPath);
    },
    //设置存储的文件名
    filename:(req,file,cb)=>{
        console.log("filename:",file);//打印结果如下图
        //获取文件的扩展名
        let extname=path.extname(file.originalname);
        filename=file.fieldname+"-"+Date.now()+extname;
        cb(null,filename);
    }
})
let upload=multer({storage});
AI写代码javascript运行1234567891011121314151617181920212223
```

参数 file 中包含以下内容：
![Multer 实现本地文件/图片上传](https://i-blog.csdnimg.cn/blog_migrate/5327618ba48c4943362a588a6c2782a4.png)
**MemoryStorage 内存存储引擎**

- 内存存储引擎将文件存储在内存中的 Buffer 对象，它没有任何选项。
- 当使用内存存储引擎，文件信息将包含一个 buffer 字段，里面包含了整个文件数据。
- 当使用内存存储，上传非常大的文件，或者非常多的小文件，会导致你的应用程序内存溢出。

```javascript
var storage = multer.memoryStorage()
var upload = multer({storage})
AI写代码javascript运行12
```

### 4.3 limits

用来指定一些数据大小的限制，设置 limits 可以帮助保护你的站点抵御拒绝服务 (DoS) 攻击。

| 属性          | 值类型 | 默认值               | 描述                                                         |
| ------------- | ------ | -------------------- | ------------------------------------------------------------ |
| files         | Number | 无限                 | 在 multipart 表单中，上传文件的最大数量                      |
| fileSize      | Number | 无限                 | 上传时，每一个文件最大长度 (单位：bytes)                     |
| fields        | Number | 无限                 | 非文件 field 的最大数量（提交表单时，可以提交非文件的字段的数量） |
| fieldNameSize | Number | 100 bytes            | 上传时，每一个 field 名字的最大长度                          |
| fieldSize     | Number | 1048576 bytes，即1MB | 上传时，每一个 field 的最大长度                              |
| parts         | Number | 无限                 | 在 multipart 表单中，part 传输的最大数量(fields + files)     |
| headerPairs   | Number | 2000                 | 在 multipart 表单中，键值对最大组数                          |

```javascript
const multer=require("multer");
let upload=multer({
        limits:{
        	files:2, //最多上传2个文件
            fileSize:5120 //设置单个文件最大为 5kb
        }
    });
AI写代码javascript运行1234567
```

### 4.4 fileFilter

fileFilter 为一个函数，用来控制什么文件可以上传以及什么文件应该跳过。

```javascript
function fileFilter (req, file, cb) {

  // 通过调用cb,用boolean值来指示是否应接受该文件

  // 拒绝这个文件，使用`false`，像这样:
  cb(null, false)

  // 接受这个文件，使用`true`，像这样:
  cb(null, true)

  // 如果有问题，你可以总是这样发送一个错误:
  cb(new Error('I don\'t have a clue!'))

}
AI写代码javascript运行1234567891011121314
```

## 5. 错误处理机制

当遇到一个错误，multer 将会把错误发送给 express。如果你想捕捉 Multer 错误，你可以使用 multer 对象下的 MulterError 类 (即 err instanceof multer.MulterError)。

```javascript
var multer = require("multer")
var upload = multer().single("photo")

upload(req, res, function (err) {
	if (err instanceof multer.MulterError) {
	  // 捕捉 Multer 错误
	} else if (err) {
	  // 捕捉 express 错误
	} else {
	  // 上传成功
	}
})
```

## 6. 完整案例

项目结构如下：
![Multer 实现本地文件/图片上传](https://i-blog.csdnimg.cn/blog_migrate/207e38f69c391a7e68899d40c11b8e36.png)
代码如下：

```javascript
//index.js
const express=require("express");
const app=express();
const uploadFile=require("./uploadfile");

//使用uploadFile中间件
app.post("/upload",uploadFile,(req,res)=>{
    console.log(req.body);
    //将req.body里的数据存储到数据库
    res.send("文件上传成功");
})
app.listen(3000);
//uploadFile.js
const multer=require("multer");
const path=require("path");

module.exports=(req,res,next)=>{
    let fullPath=path.resolve(__dirname+"/attachment");
    let filename="";
    let storage=multer.diskStorage({
    	//设置文件存储路径
        destination:(req,file,cb)=>{
            cb(null,fullPath);
        },
        //设置文件存储名称
        filename:(req,file,cb)=>{
            let extname=path.extname(file.originalname);
            filename=file.fieldname+"-"+Date.now()+extname;
            cb(null,filename);
        }
    })
	//上传单张图片
    let upload=multer({storage}).single("photo");
    upload(req,res,(err)=>{
       if (err instanceof multer.MulterError) {
            res.send("multererr:"+err);
        }else if(err){
            res.send("err:"+err);
        }else{
        	//上传成功后，将图片写在req.body.photo中，继续住下执行
            req.body.photo=filename;
            next();
        }
    })
}
```

## 7. 前端代码

简单写个例子，在前端试一下

```html
<form action="http://localhost:3000/upload" method="POST" enctype="multipart/form-data">
	<p>
		<img width="80" src="" alt="">
		<input type="file" name="photo">
	</p>
	<p>
		<input type="text" name="desc" placeholder="请输描述信息">	
	</p>
	<button type="submit">提交</button>
</form>
<script>
	let $img=document.getElementsByTagName("img")[0];
	let $input=document.getElementsByName("photo")[0];
	$input.addEventListener("change",changeHandler);
	function changeHandler(){
		//显示选中的图片
		let f=$input.files[0];
		let src=window.URL.createObjectURL(f);
		$img.src=src;
	}
</script>
```



