## 기능 개발 목록

- [x] 상수목록 작성

  - [x] 주문 가격 및 메뉴 목록 작성
  - [x] 12월 날짜와 요일 작성
  - [x] 증정 메뉴 작성
  - [x] 총혜택 금액과 이벤트 배지 작성

- [x] 메뉴 총 금액 계산 구현

- [x] 출력 기능 구현

  - [x] 주문메뉴 출력
  - [x] 할인 전 총주문 금액 출력
  - [x] 증정메뉴 출력

- [x] 할인 기능 구현

  - [x] 크리스마스 디데이 할인: 크리스마스까지만 하루에 100원씩 할인금액 적용
    - [x] 다른 이벤트는 12월동안 진행
  - [x] 평일, 주말할인: 평일에는 디저트, 주말에는 메인메뉴 2,023원 할인
    - [x] 평일 주말 구분
  - [x] 특별 할인: 달력에 별이있는 매주 일요일 + 크리스마스 당일 1,000원 추가 할인
  - [x] 증정 이벤트: 할인전 총 주문금액이 12만원 이상일 경우 샴페인 1개 증정
  - [x] 해당없을 경우 '없음' 출력

- [x] 유의사항 구현

  - [x] 이벤트는 총 주문금액 10,000원 이상부터 적용
  - [x] 음료만 주문 시 주문 불가
  - [x] 최대 주문개수 20개 이하 제한

- [x] 예외 처리 구현, [ERROR]로 시작하는 throw문 작성

  - [x] 날짜는 1~31 사이의 숫자만 가능
  - [x] 메뉴는 1이상의 숫자만 입력, 중복메뉴 입력 불가, 메뉴형식을 지켜야함

- [x] jest를 이용한 테스트 코드 작성
  - [x] 메뉴 총 금액 계산 구현
  - [x] 할인 기능 구현
    - [x] 크리스마스 디데이 할인: 크리스마스까지만 하루에 100원씩 할인금액 적용
    - [x] 다른 이벤트는 12월동안 진행
    - [x] 평일 주말 구분
    - [x] 특별 할인: 달력에 별이있는 매주 일요일 + 크리스마스 당일 1,000원 추가 할인
    - [x] 평일, 주말할인: 평일에는 디저트, 주말에는 메인메뉴 2,023원 할인
    - [x] 증정 이벤트: 할인전 총 주문금액이 12만원 이상일 경우 샴페인 1개 증정
    - [x] 해당없을 경우 '없음' 출력
  - [x] 유의사항 구현
  - [x] 예외 처리 구현

### 참고 사항

- 총혜택 금액 = 할인 금액의 합계 + 증정 메뉴의 가격
- 할인 후 예상 결제 금액 = 할인 전 총주문 금액 - 할인 금액

📦src
┣ 📂component
┃ ┣ 📂calculation
┃ ┃ ┣ 📜MenuCalculation.js
┃ ┃ ┗ 📜TotalDiscount.js
┃ ┣ 📂discount
┃ ┃ ┣ 📜ChristmasCountdown.js
┃ ┃ ┗ 📜DayWeekDiscount.js
┃ ┣ 📜ErrorHandling.js
┃ ┗ 📜data.js
┣ 📜App.js
┣ 📜InputView.js
┣ 📜OutputView.js
┗ 📜index.js

📦**tests**
┣ 📂componentTest
┃ ┣ 📂calculationTest
┃ ┃ ┣ 📜MenuCalculation.test.js
┃ ┃ ┗ 📜TotalDiscount.test.js
┃ ┣ 📂discountTest
┃ ┃ ┣ 📜ChristmasCountdown.test.js
┃ ┃ ┗ 📜DayWeekDiscount.test.js
┃ ┗ 📜ErrorHandling.test.js
┗ 📜ApplicationTest.js
