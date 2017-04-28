# 1636

Base16 to/from Base36 conversion.

This library is for converting from base16 to base36 and then back to base16. It isn't intended to be universal. It won't go from base36 to base16 and back and this use case is beyond the scope of this library.

## Install

```sh
npm i 1636 --save
```

### Use

```js
var base = require('1636');
var b16  = 'bec0ef52ba44d576f529f82b25d8d550261c783ccb3e4c8d4da9c27abcecdf8a'
var b36  = base.to36(b16)
console.log(b36) // 11ogl0dnef9xafyqe04r3bm57go62hz7hyym6pxwj6wyarwui2yy
var back = base.to16(b36)
console.log(b16 == back) // true
```

### License MIT
