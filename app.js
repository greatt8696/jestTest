/*typeScript로 블록 생성 만들기

  환경 설정 하고

  ts-node 설치

  설치 명령어
  ------------------------------------------------------
  npm install -D typescript ts-node @types/node
  ------------------------------------------------------

  tsconfig.json 만들기

  ------------------------------------------------------
  tsc --init
  ------------------------------------------------------

  tsconfig.json에서 paths 사용할거라

  설치 명령어
  ------------------------------------------------------
  npm install -D tsconfig-paths
  ------------------------------------------------------

  우리가 필요한 모듈 설치

  머클루트와 해시값이 필요하니까
  crypto-js, merkle 설치

  설치 명령어
  ------------------------------------------------------
  npm install crypto-js merkle
  npm i --save-dev @types/crypto-hs
  npm i --save-dev @types/merkle
  ------------------------------------------------------
 
  제네시스 블록만들기 

  테스트 해보쟈

  만든것들 테스트 해보자

   typeScript로 블록체인을 만들어 봤는데 객체 지향적인 방법으로 코드를 작성하고 
   OOP 객체지향프로그래밍 

   OOP는 프로그램의 설계 방법 개념중 한가지.

   OOP는 프로그램을 단순히 실행 데이터 처리 방법만이 아니라 

   수많은 객체라는 단위를 만들어서 이 객체를 가지고 동작하는 상호작용을 서술한 방식이다. 

   OOP에서 객체는 하나의 역할을 수행하는 함수와 변수들의 묶음 데이터로 보면 된다. 

   이런 객체지향 프로그래밍은 프로그램을 만들때 제일 작은 단위부터 만들어가는 방식을 선호한다.

   작성된 코드가 어려운 단점이 있고 이런 단점을 보완하기 위해 테스트 라이브러리를 사용한다. 

   그냥 개발이 아니라 테스트 코드를 작성하면서 개발해 나가는게

   TDD(Test_Driven Development)

   그래서 우리도 테스트 해보려고 Jest 라는 애를 써보자

   설치 명령어 

   --------------------------------------------------
   npm i -D ts-jest @types/jest babel-core
   npm i -D @babel/preset-typescript @babel/preset-env
   --------------------------------------------------
   
 
*/