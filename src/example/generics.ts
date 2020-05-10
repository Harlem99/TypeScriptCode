// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value)
// }
// console.log(getArray<number>(123, 4).map(item => item.toFixed()))

// const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
//     return new Array(times).fill([param1, param2])
// }
// console.log(getArray(1, 'a', 3))

// type GetArray = <T>(arg: T, times: number) => T[] // 泛型类型

// interface GetArray<T> { // 泛型类型
//     (arg: T, times: number): T[],
//     array: T[]
// }

// 泛型约束
interface ValueWithLength {
    length: number
}

const getArray = <T extends ValueWithLength>(arg: T, times: number): T[] => {
    return new Array(times).fill(arg)
}
getArray([1, 2], 3)
// getArray(12, 4) // error Argument of type '12' is not assignable to parameter of type 'ValueWithLength'

const getProperty = <T, K extends keyof T>(obj: T, key: K) => { // 泛型约束中使用类型参数
    return obj[key]
}

const x = { a: 1, b: 3, c:3}

getProperty(x, 'a')
// getProperty(x, 'm') //Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c"'