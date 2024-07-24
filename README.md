# Angular Tutorial
## Usage
- 명령어
  - ng generate service housing
    - 서비스 파일 생성
  - ng generate interface housinglocation
    - 인터페이스 파일 생성
  - ng generate component housingLocation
    - 컴포넌트 파일 생성
- Props
  - ```js
    <app-housing-location
    *ngFor="let housingLocation of housingLocationList"
    [housingLocation]="housingLocation"
    ></app-housing-location>
  - ```js
    // housing-location.component.ts
    @Input() housingLocation!: HousingLocation;
  - 컴포넌트 내부에서 Input 데코레이터로 정의
  - [속성명]="바인딩 값"
  - 위와 같은 형태로 작성해 컴포넌트로 데이터 전달
- Router
  - ```js
    import {RouterModule} from '@angular/router';
  - ```js
    template:
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  - RouterModule을 import해야 router-outlet 태그, [routerLink] 사용 가능
  - RouterOutlet 등을 별도로 import할 수도 있음
- inject
  - ```js
    housingService: HousingService = inject(HousingService);
    ```
  - 이렇게 inject를 할 경우, Angular 내부에서 싱글톤으로 해당 서비스를 만들어서 share하게끔 함
- Form
  - ```js
    <form [formGroup]="applyForm" (submit)="submitApplication()">
      <label for="first-name">First Name</label>
      <input id="first-name" type="text" formControlName="firstName" />
      <label for="last-name">Last Name</label>
      <input id="last-name" type="text" formControlName="lastName" />
      <label for="email">Email</label>
      <input id="email" type="email" formControlName="email" />
      <button type="submit" class="primary">Apply now</button>
    </form>
  - ```js
    applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    });
  - FormGroup을 import
  - 각 input에 formControlName과 component class applyForm의 속성과 일치시키기
- event binding
  - ```html
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    ```
  - 템플릿 참조 변수(#filter)를 사용하면 템플릿 및 구성 요소 클래스에서 DOM 요소와 직접 상호 작용 가능
  - 클래스에서는 @ViewChild('filter') filterInput!: ElementRef; ViewChild 데코레이터를 사용하면 됨.
