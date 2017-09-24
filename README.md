typescript-skeleton
===================
A [TypeScript][TYPESCRIPT] skeleton project with [Webpack][WEBPACK] bundling.

Project Structure
-----------------
As per the [CommonJS][COMMONJS] packages spec:
> A CommonJS package will observe the following:
>   * A package.json file must be in the top level directory
>   * Binary files should be in the "bin" directory,
>   * Javascript code should be under the "lib" directory
>   * Documentation should be under the "doc" directory
>   * Unit tests should be under the "test" directory

Bootstrap
---------
```sh
$ yarn install # Or alternatively: `npm install`
```

Testing
-------
```sh
$ yarn test # Or alternatively: `npm test`
```

Reference
---------
* [package.json @npm Documentation](https://docs.npmjs.com/files/package.json)
* [Packages/1.0 § Package Directory Layout @CommonJS Spec Wiki](http://wiki.commonjs.org/wiki/Packages/1.0#Package_Directory_Layout)
* [Yarn](https://yarnpkg.com/)

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.

[COMMONJS]: http://www.commonjs.org/
[TYPESCRIPT]: http://www.typescriptlang.org/
[WEBPACK]: https://webpack.js.org/
