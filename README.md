<h2><b>미니 프로젝트</b></h2>
<h2>🚗 PickCar</h2>
<h4>프로젝트 설명: 무슨 중고차를 사야할지 링크와 게시글을 남기고, 댓글로 의견을 남길수 있다.</h4>
<h4>📆 기간: 2022.08.12 ~ 2022.08.19</h4>

<hr/>

<h2>🔧 STACK</h2>

### Client:

- Javascript
- React
- Redux

### UI:

- styled components
- css

</hr>

### 🔎 Function

![스크린샷 2022-08-18 오후 2 42 46](https://user-images.githubusercontent.com/97071355/185303557-5dede769-c641-447d-ba0d-56b20abf96fe.png)

#### 메인 페이지

게시글을 볼수 있고 작성페이지, 로그인, 회원가입을 클릭할 수 있다.


![스크린샷 2022-08-18 오후 2 43 38](https://user-images.githubusercontent.com/97071355/185303610-17fd6dbc-6d39-40bb-8eee-03bdfbf0d0b9.png)

![스크린샷 2022-08-18 오후 2 43 28](https://user-images.githubusercontent.com/97071355/185303651-7bd19fb1-c2e8-401e-aea4-2b30fddd9d52.png)

#### 회원가입과 로그인 모달

상세페이지를 보다가 댓글을 달고싶거나 게시글을 작성하고싶을때 회원가입과 로그인을 바로 할수있도록 했다.


![스크린샷 2022-08-18 오후 2 44 53](https://user-images.githubusercontent.com/97071355/185303704-4ec76d3f-a6c9-44d7-a85d-a101073269be.png)

#### 작성 페이지

작성하기 버튼을 통해 작성페이지로 갈수있다.

http로 시작하는 url만 받을수 있도록 설정했으며, 내용이 적혀있지 않으면 alert를 띄우도록 하였다.


![스크린샷 2022-08-18 오후 2 44 08](https://user-images.githubusercontent.com/97071355/185303780-05836e92-477d-4ddd-aeaa-75aa146da99a.png)

#### 상세페이지와 댓글

상세페이지에서는 작성자만이 수정이나 삭제를 할 수 있도록 했으며, 다른사람이 시도시 alert를 띄우도록 하였다.

댓글은 내용이 아무것도 없을 시 alert를 띄우게 하였다.


</hr>

## 📁 File Directory

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

</hr>

## 🧑🏻‍💻 Members

| 이름   | 담당 API                     | 역할                       |
| ------ | ---------------------------- | -------------------------- |
| 문동환 | 메인페이지, 로그인, 회원가입 | 가입과 로그인, 깃허브 관리 |
| 김대연 | 게시글 CRUD                  | 게시글 관련 담당           |
| 김연중 | 댓글 CRD                     | 댓글 컴퍼넌트 담당         |

</hr>

## After

문동환: 한 페이지에 너무 많은 기능과 JSX를 넣은것 같아서 다음에는 컴퍼넌트와 기능별로 나눠서 만들도록 해야겠다.

      백엔드와 같이 좀 더 시간을 들여서 API를 만들 필요가 있을것 같고

김대연: 
김연중: 

