import '../sass/main.scss';
import greetModule from './greeting';
import { MyEnum } from './enums';
import { MyInterface } from './models';

document.addEventListener('DOMContentLoaded', (): void => {
  document.querySelector('h1').textContent = greetModule.greet();
  document.querySelector('p').textContent = greetModule.greet2();

  const num = 666
  const myObject: MyInterface = {
    id: num,
    text: `${num}boilerplate`,
    type: MyEnum.Three
  }
  console.log('myObject', myObject);
});
