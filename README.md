<h2><b>미니 프로젝트</b></h2>
<h2>PickCar</h2>
<h4>프로젝트 설명: 무슨 중고차를 사야할지 링크와 게시글을 남기고, 댓글로 의견을 남길수 있다.</h4>
<h4>📆 기간: 2022.08.12 ~ 2022.08.19</h4>

<hr/>

<h3>Stack</h3>
Client:


- Javascript
- React
- Redux

UI:

- styled components
- css

Function

```bash
/src
  ├── components //컴포넌트 폴더
  │   └── common ──┬─ Comment // 댓글을 작성하는 컴퍼넌트
  │                ┝─ Header // 페이지의 헤더
  │                ┕─ ImagePicker // 이미지를 post, get (미구현)
  │
  ├── pages //다운로드한 폰트 관리
  │   ┝── detail
  │   │   ┝── Detail // 상세페이지
  │   │   ┕── styles // 상세페이지의 css
  │   │
  │   ┝── write
  │   │   ┝── Write // 작성페이지
  │   │   ┕── styles // 작성페이지의 css
  │   │
  │   ┝── Home // 메인 페이지
  │   │
  │   │
  │   ┕── Register // 로그인과 회원가입 페이지
  │
  ├── redux
  │    ┝── config
  │    │       ┕── configStore
  │    │
  │    ┕── Slice... // 각 종 슬라이스
  │
  ├── styles ─── GlobalStyle 전역 css 관리
  │
  │
  ├── App.js
  └── index.js

```

## 🧑🏻‍💻 Members

| 이름   | 담당 API                     | 역할                       |
| ------ | ---------------------------- | -------------------------- |
| 문동환 | 메인페이지, 로그인, 회원가입 | 가입과 로그인, 깃허브 관리 |
| 김대연 | 게시글 CRUD                  | 게시글 관련 담당           |
| 김연중 | 댓글 CRD                     | 댓글 컴퍼넌트 담당         |
