// 05 TS中补充的六个类型

// 元组

let tuple: [string, number, boolean];
tuple = ["a", 2, false];
tuple = [2, "a", false];
tuple = ["a", 2];

tuple[1] = 3;

interface ITuple extends Array<number | string> {
    0: string;
    1: number;
    length: 2;
}

// 枚举
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER,
}

enum Roles1 {
    SUPER_ADMIN = 1,
    ADMIN,
    USER,
}

// any
let value: any;
value = 123;
value = "123";
value = false;

// void
// void 指没有任意类型

// never 永远不存在的值的类型
let neverVariable = (() => {
    while (true) { }
})();
// tslint:disable-next-line: no-console
console.log(typeof neverVariable);

// unknow
// unknow 值类型未知的类型

// 交叉类型，交叉类型指多个类型的集合，有点像实现了多个接口

const merge = <T, U>(arg1: T, arg2: U){
    let res = <T & U>{};
    res = Object.assign(arg1, arg2);
    return res;
}

const info1 = {
    name: "yimiao"
}

const info2 = {
    age: 18
}

const yimiaoInfo = merge(info1, info2);

// tslint:disable-next-line: no-console
console.log(yimiaoInfo.address);


// 联合类型
// 联合类型指对象几个类型中其中一个类型

const getLength = (content: string | number): number => {
    if (typeof content === "string") {
        return content.length;
    } else {
        return content.toString().length;
    }
}