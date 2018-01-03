import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { TestComponent } from './test.component';

describe('SyncComponent (inline template)', () => {
  
  let comp:    TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  
  beforeEach(() => {
      //创建环境，声明Component  
      TestBed.configureTestingModule({
          declarations: [ TestComponent ],
          providers: [
            //在test中不做改变时，用这个可以自动检测改变
            /*
            {
              provide: ComponentFixtureAutoDetect,
              useValue: true
            }
            */
          ]
      });
      
      //相当于创建了一个Component的工厂
      fixture = TestBed.createComponent(TestComponent);
      
      //创建一个测试实例
      comp = fixture.componentInstance; 
      
      //通过CSS选择器来选择h1元素，找到是的第一个h1, queryAll返回所有符合条件的元素
      de = fixture.debugElement.query(By.css('h1'));
      el = de.nativeElement; 
  });

  //这里可以写很多it测试，每次调用前都会循环创建一次
  it('should display original title', () => {
      //有了ComponentFixtureAutoDetect，如果不做改变就可以不调用detectChanges()
      fixture.detectChanges();
      expect(el.textContent).toContain(comp.title);
  })

  it('should display a different test title', () => {
      //修改值，并检测修改，必须调用
      comp.title = 'Test Title';
      fixture.detectChanges();
      expect(el.textContent).toContain('Test Title');
  })

  it('no title in the DOM until call `detectChanges`', () => {
      expect(el.textContent).toEqual('');
  })
});
