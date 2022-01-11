# Thinking\-In\-React

### [React로 사고하기](https://ko.reactjs.org/docs/thinking-in-react.html) 공식문서를 보고 구현한 레포지토리 입니다.

<br>

# 구현단계

- 기존 Class 기반 컴포넌트를 함수형 컴포넌트로 변경 ✅
- Catagory가 추가될것을 고려하여 검색 알고리즘 재설계 ✅
- 간단한 스타일 작성 ✅
- React18 Suspence 적용해보기

# Learned

최소한의 State만을 유지할수 있게 설계하기

- 애플리케이션은 가장 최소한의 state 만을 유지
- 이를 통해 나머지 모든 것들이 필요에 따라 그때그때 계산되도록 하기

State를 정하기 위한 기준

- 부모로부터 props를 통해 전달 -> State가 아님
- 시간이 지나도 변하지 않는다 -> State가 아님
- 컴포넌트 안의 다른 state나 props를 가지고 계산 가능하다 -> State가 아님

State를 유지해야하는 컴포넌트 정하는법

- 특정 state가 있어야 하는 모든 컴포넌트들의 상위에 있는 하나의 컴포넌트
- state를 소유하는 컴포넌트를 하나 만들어서 공통 오너 컴포넌트의 상위 계층에 추가
- 하위 컴포넌트에서는 콜백함수를 통하여 상위 컴포넌트의 State를 변경
