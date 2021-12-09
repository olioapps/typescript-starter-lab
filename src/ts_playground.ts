const str = 'Hello World!';
console.log(str);
console.log(str.toLocaleLowerCase());

const greet = (person: string, date: Date) => {
  console.log(`Hello ${person}, the date is ${date.toDateString()}`);
};

greet('Ian', new Date);

let inferenceTest = 'This is a test';
//@ts-expect-error
inferenceTest = 9;
inferenceTest = 'Test concluded.';

// const untypedIncrement = (x) => x + 1;
const increment = (x: number) => x + 1;
// const untypedIncrement2 = x => x + 2;
// const illegalIncrement = x: number => x + 2;

const printAll = (strs: string | string[] | null) => {
  if(strs && Array.isArray(strs)) {
    for(let s of strs) {
      console.log(s.toUpperCase());
    }
  } else console.log(strs);
}
printAll('this is a test of the memergency broadcast system');
// printAll(['test', 'testing', 1, 2, 3, 'test']);
printAll(['testing', 'test', '1', '2']);

const multiplyAll = (
  values: number[] | undefined,
  factor: number
): number[] | undefined => {
  if(!values) return values
  return values.map(x => x * factor)
}
console.log(multiplyAll([1, 2, 3, 4, 5], 17983));
console.log(multiplyAll(undefined, 987348));

type Container = {
  value: number | null | undefined,
  factor: number
}
const multiplyContainer = (
  container: Container
) : number | Container => {
  if( container.value != null) {
    return container.value * container.factor
  } else return container
}
console.log('checking equality narrowing: ');
console.log(multiplyContainer({ value: 759823, factor: 0 }));

console.log('checking in operator narrowing')
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Cat = { run: () => void, swim: () => void };
type Human = { run: () => void, swim: () => void, fly: () => void };
function move(animal: Fish | Bird | Cat | Human ) {
  if("swim" in animal) {
    return animal.swim();
  }
  else return animal.fly();
}
//worth noting that even though a human can fly, it never will since it has swim and will always exit from the first conditional statement.

const fly = (): void => console.log("I'm flying!");
const swim = () => console.log("I'm swimming!");
//@ts-expect-error
const run = (): undefined => console.log("I'm running!");
const parrot = { fly };
const minnow = { swim };
const lion = { run, swim };
const me = { run, swim, fly };
move(me);

const isFish = (pet: Fish | Bird): pet is Fish => {
  return (pet as Fish).swim != undefined;
}
console.log(isFish(minnow));
console.log(isFish(parrot));
console.log(isFish(lion)); //uh oh
console.log(isFish(me)); //double uh oh

type Input = string;
type Output = string;
const customMap = (arr: Input[], fn: (arg: Input) => Output): Output[] => {
  return arr.map(fn);
}
const input = ['this', 'is', 'a', 'test'];
const regex = /[aeiou]/g;
const mapFn = (s: string) => s.replace(regex, '');
// I guess the output of mapFn can be inferred which is why we don't need to specify the output type.
const whatIsThis = mapFn('this is a string, what is the type of output?');
console.log(customMap(input, mapFn));

function longest<Type extends { length: number}>(a: Type, b: Type) {
  return a.length >= b.length ? a : b
}
const arrowLongest = <T extends { length: number}>(a: T, b: T)  => {
  return a.length >= b.length ?  a : b
}

interface indexedDict {
  readonly [index: number]: string,
  name: string,
  readonly age: number
}
const person: indexedDict = {
  name: 'Bob',
  age: 23
}
console.log(person.age);
console.log(typeof(person.age));
person.name = 'Randy';
//@ts-expect-error
person[5] = 'test'

//Generics
function identity<Type>(arg: Type): Type { return arg };
const otherIdentity = <Type>(arg: Type): Type => arg;

//as function signature
interface GenericFunction {
  <Type>(arg: Type): Type;
}
const genericIdentity: GenericFunction = input => input;
const someValue = genericIdentity('hello world');

//as type paramater
interface SomeFunc<T> {
  (arg: T): T
}
const multiplier: SomeFunc<number> = x => x * 10;
