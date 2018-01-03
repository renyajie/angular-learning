/* tslint:disable:no-unused-variable component-selector-name one-line check-open-brace */
/* tslint:disable:*/
import { Component, forwardRef, Optional, SkipSelf } from '@angular/core';

// 一个component基类
export abstract class Base { name = 'Count Basie'; }

// 一个抽象类，用于providers的工厂方法
export abstract class Parent { name: string; }

const DifferentParent = Parent;

// Simpler syntax version that always provides the component in the name of `Parent`.
const provideTheParent =
  (component: any) => {
    return { provide: Parent, useExisting: forwardRef(() => component) };
  };

// Helper method to provide the current component instance in the name of a `parentType`.
// The `parentType` defaults to `Parent` when omitting the second parameter.
const provideParent =
  (component: any, parentType?: any) => {
    return { provide: parentType || Parent, useExisting: forwardRef(() => component) };
  };


///////// ParentFinder //////
@Component({
  selector: 'app-di-3-parent-finder',
  template: `
  <div>
    <h2>Parent Finder</h2>
    <alex></alex>
    <alice></alice>
  </div>`
})
export class ParentFinderComponent { }

///////// A - Grandparent //////
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'alex',
  template: `
    <div class="a">
      <h3>{{name}}</h3>
      <cathy></cathy>
      <craig></craig>
      <carol></carol>
    </div>`,
  // 产生循环引用的两种情况: 1. 类A->类B，类B-类A(或者更多); 2. 类A->类A
  // forwaredRef() 可以产生一个间接引用，确保所需的引用的类被定义后在引用
  providers: [{ provide: Parent, useExisting: forwardRef(() => AlexComponent) }],
})
// implements Parent也可以
export class AlexComponent extends Base
{
  name= 'Alex';
}

//////  Cathy ///////////
/**
 * 我们可以通过明确的component类型注入component
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cathy',
  template: `
  <div class="c">
    <h3>Cathy</h3>
    {{alex ? 'Found' : 'Did not find'}} Alex via the component class.<br>
  </div>`
})
export class CathyComponent {
  constructor( @Optional() public alex: AlexComponent ) { }
}

//////  Craig ///////////
/**
 * 不能通过基类注入component
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'craig',
  template: `
  <div class="c">
    <h3>Craig</h3>
    {{alex ? 'Found' : 'Did not find'}} Alex via the base class.
  </div>`
})
export class CraigComponent {
  constructor( @Optional() public alex: Base ) { }
}

///////// Carol //////////
const templateC = `
  <div class="c">
    <h3>{{name}}</h3>
    <p>My parent is {{parent?.name}}</p>
  </div>`;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'carol',
  template: templateC
})
export class CarolComponent {
  name= 'Carol';
  constructor( @Optional() public parent: Parent ) { }
}

///////// Alice //////////

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'alice',
  template: `
    <div class="a">
      <h3>{{name}}</h3>
      <barry></barry>
      <beth></beth>
      <bob></bob>
      <carol></carol>
    </div> `,
  providers:  [ provideParent(AliceComponent) ]
})
export class AliceComponent implements Parent
{
  name= 'Alice';
}

//////// Barry /////////
const templateB = `
  <div class="b">
    <div>
      <h3>{{name}}</h3>
      <p>My parent is {{parent?.name}}</p>
    </div>
    <carol></carol>
    <chris></chris>
  </div>`;

@Component({
  // tslint:disable-next-line:component-selector
  selector:   'barry',
  template:   templateB,
  providers:  [{ provide: Parent, useExisting: forwardRef(() => BarryComponent) }]
})
export class BarryComponent implements Parent {
  name = 'Barry';
  constructor( @SkipSelf() @Optional() public parent: Parent ) { }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chris',
  template: templateC
})
export class ChrisComponent {
  name= 'Chris';
  constructor( @Optional() public parent: Parent ) { }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector:   'beth',
  template:   templateB,
  providers:  [ provideParent(BethComponent, DifferentParent) ]
})
export class BethComponent implements Parent {
  name= 'Beth';
  constructor( @SkipSelf() @Optional() public parent: Parent ) { }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector:   'bob',
  template:   templateB,
  providers:  [ provideParent(BobComponent) ]
})
export class BobComponent implements Parent {
  name= 'Bob';
  constructor( @SkipSelf() @Optional() public parent: Parent ) { }
}
