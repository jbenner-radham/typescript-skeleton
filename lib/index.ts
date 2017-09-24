async function foo() {
    const value = await bar();
    console.log(value);
}

function bar() {
    return new Promise((resolve, reject) => {
        return resolve(4);
    });
}

(async function run() {
    await foo();
}());

console.log(['hello world'].includes('hello world'));
console.log('x'.padStart(5, 'ab'));
