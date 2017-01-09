+++
title = "ASM.js in 30 Seconds"
date = "2013-05-22"
+++

Everyone loves faster Javascript, which is why Mozilla's ASM.js is such big news. This is my 5 second overview.

ASM.js is a subset of javascript that allows for further optimization.

You can mark your JS code as being ASM.js complaint by adding *"use asm;"* to your file/function(similar to **"use strict"**).

ASM.js contains type hints and lacks a garbage collector. These differences make it highly optimizable (roughly half as fast as native).

ASM.js can be compiled ahead of time(not just JIT).

The type hints look like(still valid js)\:
```javascript
var integerVariable = variable | 0;
var doubleVariable  = +variable;
```
*ASM.js can't manipulate Objects or Strings.*

ASM.js uses an ArrayBuffer as its memory heap.

ASM.js isn't intended to be written mere mortals. Its a target for compilers like Emscripten. So you would write C/C++ code and compile it to ASM.js.

ASM is ready now, sort of. Since it is just javascript it will run right now everywhere javascript will. You will only see the performance benefit on browsers that have implemented ASM optimizations(Firefox Nightly, hopefully Chrome in the future).

Converting JS to ASM.js would be non-trivial.
