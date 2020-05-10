const s = Symbol('harlem')
// console.log(s)

let s1 = Symbol.for('global_symbol')
let s2 = Symbol.for('global_symbol')
console.log(s1 === s2) // 注册全局的symbol
console.log(Symbol.keyFor(s1)) // 获取全局的symbol