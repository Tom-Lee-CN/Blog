# 闭包与this和函数上下文调用

## 闭包

概念：可以访问到其他函数内部变量的函数

作用：解决变量污染（一般用于回调函数）

备注：非必要不用闭包，如果子函数一直没有接收到参数可能导致内存一直无法释放（函数未执行完成，知道运行完成后才会执行垃圾回收）

```js
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8
```

## this

this的调用会指向当前执行上下文作用域。

三种指向

```js
fun() // 指向window
let funTest = new fun() 指向funTest 指向构造函数创建的对象
obj.set() // 指向当前执行上下文作用域
```

## 递归

指一个函数调用自己，双函数指两个函数互相调用， 性能比循环差，非必要不用递归

```js
function a(){
	console.log('haha')
 	return b()
}
function b(){
	console.log('hehe')
	return a()
}
```

## call 、apply、bind

call和apply均用于函数调用，目的是修改函数中this的指向，不同是传参的方式。使用时，第一个参数是 新的this指向这个参数，剩余参数是函数的实参。

call

```js
fn.call({name:'Tom'},10, 20)
```

apply

```js
fn.apply({name:'Tom'},[10,20])
```

bind

bind不会直接执行函数，但会得到一个修改this之后的新函数。如果在使用bind的同时传了实参那么函数的实参也固定死了。无法在使用新函数的时候传实参。

```js
let newFn = fn.bind({name:'Tom'},10, 20)
```

