// @flow

// Ковариантность, контрвариантность, инвариантность
// Объекты инвариантны
// Сайд эффекты сбрасывают проверки
// unsealed object почти не проверяется

function func(number: number): 'hello' {
  return 'hello';
}

function func2(str: string): 4 {
  return 4;
}

const test = {
  a: func2,
  b: func
};

type TTest = $ObjMap<typeof test, <V>(() => V) => V>;

const test2: TTest = {
  a: 5,
  b: 'hello'
};
const temp = Object.values;
Object.prototype.values = temp;
const a = Object.values({});