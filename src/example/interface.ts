interface NameInfo {
    firstName: string,
    lastName: string
}

const getFullName = ({ firstName, lastName}: NameInfo): string => {
    return `${firstName} ${lastName}`
}

getFullName({
    firstName: 'haha',
    lastName: 'harlem'
})

interface Vegetable {
    color?: string,
    readonly type: string,
    // [prop: string]: any // 接口额外的任意属性
}

const getVegetable = ({ color, type }:Vegetable) => {
    return `a ${color ? (color + ' ') : ''}${type}`
}

const vegetableInfo = {
    type: 'tomato',
    color: 'red',
    size: 2, // 定义一个对象，可以添加新的属性
}
console.log(getVegetable(vegetableInfo))

let vegetableObj: Vegetable = {
    type: 'tomato'
}

// vegetableObj.type = 'harlem' // is a read-only property.

type AddFunc = (num1: number, num2:number) => number // 类型别名
const add: AddFunc = (n1, n2) => n1 + n2

// 接口继承
interface Vegetables {
    color: string
}
interface Tomato extends Vegetables {
    radius: number
}
interface Carrot extends Vegetables {
    length: number
}

const tomato: Tomato = {
    color: 'red',
    radius: 1
}
const carrot: Carrot = {
    length: 2,
    color: 'red'
}

// 混合类型接口
interface Counter {
    (): void,
    count: number
}

const getCounter = (): Counter => {
    const c = () => { c.count ++ }
    c.count = 0
    return c
}

const counter: Counter = getCounter()

counter()
console.log(counter.count)

counter()
console.log(counter.count)

counter()
console.log(counter.count)