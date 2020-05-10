let adds: (x: number, y: number) => number
adds = (arg1: number, arg2:number): number => arg1 + arg2

type Add = (x: number, y: number) =>number // 类型别名
let addFunc: Add
addFunc = (arg1: number, arg2:number): number => arg1 + arg2

type AddFunction = (arg1: number, arg2: number, arg3?: number) => number // 可选参数
let addFunction: AddFunction
addFunction = (x: number, y: number) => x + y
addFunction = (x: number, y: number, z: number) => x + y + z

let addFunction1 = (x: number, y = 3) => x + y
// addFunction1(1, '2') // error
addFunction1(1, 2) // success
// console.log(addFunction1(1, 2))

// const handleData = (arg1: number, ...args: number[]) => { // 扩展运算符
//     //
// }

function handleData(x: string): string[]
function handleData(x: number): number[] // 重载 =》只能通过function声明
function handleData(x: any): any { // 函数实体
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map(item => Number(item))
    }
}

console.log(handleData('abc'))
console.log(handleData(123))