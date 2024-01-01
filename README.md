<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# broadcastArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Broadcast an array to a specified shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
broadcastArray = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var broadcastArray = require( 'path/to/vendor/umd/array-base-broadcast-array/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.broadcastArray;
})();
</script>
```

#### broadcastArray( x, inShape, outShape )

Broadcasts an array to a specified shape.

```javascript
var x = [ 1, 2 ];

var out = broadcastArray( x, [ 2 ], [ 2, 2 ] );
// returns {...}

var shape = out.shape;
// returns [ 2, 2 ]

var strides = out.strides;
// returns [ 0, 1 ]

var ref = out.ref;
// returns [ 1, 2 ]

var bool = ( x === ref );
// returns true

var data = out.data;
// returns [ [ 1, 2 ] ]
```

The function returns an object having the following properties:

-   **ref**: reference to the original input array.
-   **data**: broadcasted array.
-   **shape**: broadcasted array shape.
-   **strides**: broadcasted array strides. Strides describe how to iterate over broadcasted array dimensions.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The broadcasted array shares the same data as the input array. As more than one element of a broadcasted array may refer to the same memory location, writing to the broadcasted array may affect multiple elements. If you need to write to the broadcasted array, copy the array **before** performing operations which may mutate elements.
-   The function throws an error if a provided input shape is [incompatible][@stdlib/ndarray/base/broadcast-shapes] with a provided output shape.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create a 2x1 array:
var x = [
    [ 1 ],
    [ 2 ]
];

// Broadcast the array to 3x2x4:
var o = broadcastArray( x, [ 2, 1 ], [ 3, 2, 4 ] );
// returns {...}

// Retrieve the shape:
var sh = o.shape;
// returns [ 3, 2, 4 ]

// Retrieve the array "strides":
var st = o.strides;
// returns [...]

// Initialize loop indices:
var i0 = 0;
var i1 = 0;
var i2 = 0;

// Iterate over elements in the broadcasted array...
var i;
var j;
var k;
for ( i = 0; i < sh[ 0 ]; i++ ) {
    i1 = 0;
    for ( j = 0; j < sh[ 1 ]; j++ ) {
        i2 = 0;
        for ( k = 0; k < sh[ 2 ]; k++ ) {
            console.log( 'y[%s] = %d', [ i, j, k ].join( ',' ), o.data[ i0 ][ i1 ][ i2 ] );
            i2 += st[ 2 ];
        }
        i1 += st[ 1 ];
    }
    i0 += st[ 0 ];
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-broadcast-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-broadcast-array

[test-image]: https://github.com/stdlib-js/array-base-broadcast-array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-broadcast-array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-broadcast-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-broadcast-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-broadcast-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-broadcast-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-broadcast-array/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-broadcast-array/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-broadcast-array/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-broadcast-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-broadcast-array/main/LICENSE

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/umd

</section>

<!-- /.links -->
