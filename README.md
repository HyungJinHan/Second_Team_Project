<hr>

<div align='center'>
  <img width='50%' src='.\frontend\public\soloFitness.svg'></img>
 </div>

<hr>
<br>

### <b>AI를 기반으로 진행하는 Wanted 팀의 스마트 헬스케어 서비스 '나 혼자 피트니스' 프로젝트</b>

<br><br>

## 1. Collaborator

- 팀장 : 한형진(총괄)
- 팀원
  - `AI Modeling` : 김찬진 | 이진주
  - `Front-End` : 정영윤
  - `Back-End` : 홍현호

<br><br>

## 2. Tech

- Front-End
  <br><br>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=424242">&nbsp;
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">&nbsp;
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">

- Back-End
  <br><br>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/Mysql-4479A1?style=for-the-badge&logo=Mysql&logoColor=white">&nbsp;

- Edit Tool
  <br><br>
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/Mysql Workbench-4479A1?style=for-the-badge&logo=Mysql&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/Jupyter Notebook-F37626?style=for-the-badge&logo=Jupyter&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/PyCharm-000000?style=for-the-badge&logo=PyCharm&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">&nbsp;
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">

<br><br>

## 3. Project Management (22.11.03 ~ 22.12.14)

### 프로젝트 개발 방식

- #### `Front-End`

  `Figma`를 활용하여 UI/UX 설계, `React`를 기반으로 작업 진행.
  <br>

- #### `Back-End`

  `Node.js`와 `FastAPI`를 통한 서버 통신, `MySQL`로 데이터베이스 설계.
  <br>

- #### `AI Model`

  `Python`의 `MediaPipe`를 메인으로 사용자의 운동 자세에 대한 실시간 피드백 구현.

  <br>

### 프로젝트 소스코드 형상관리

- `VS Code`를 통한 `GitHub`와의 `Clone` 연동 후 작업

  <br>

- `GitHub`의 `Project`를 통한 일정, 작업 조율 및 관리

  <br>

- `issue` 사용을 통한 예정 사항, 아이디어 회의 및 각자 할 일 정리

  <br>

- 공동 `Repository` 생성 후, 개별적인 `branch` 생성과 팀장을 통한 `merge` 작업으로 프로젝트 관리

  <br>

- 도움이 될 만한 코드의 예제 실습 후, 참고 사항으로 커밋 예정

  <br>

### 프로젝트 패키지 설치 & 웹 실행

- 프로젝트 경로에 3개의 `Terminal` 생성, `Terminal`에 각각의 명령어 입력

  <br>

  `frontend`

  1. `cd frontend` (frontend 폴더로 이동)

  2. `npm i` (frontend 패키지 설치)

  3. `npm start` (localhost:3000)

  <br>

  `backend`

  1. `cd backend` (backend 폴더로 이동)

  2. `npm i` (backend 패키지 설치)

  3. `npm run dev` (localhost:8008)

  <br>

  `python`

  1. `cd backend` (backend 폴더로 이동)

  2. `python -m venv venv` (python 가상환경 설정)

  3. `cd venv/Scripts`

  4. `./activate` or `activate`

  5. `cd ../../` (backend 폴더로 이동)

  6. `pip install -r requirements.txt` (해당 프로젝트에서 사용한 패키지를 가상환경에 설치)

  7. `uvicorn main:app --reload` (localhost:8000)

<br><br>

## 4. 프로젝트 상세 내용

<div align='center'>
  
  |목차 & 기획 의도|
  |---|
  |![1-10](https://user-images.githubusercontent.com/104360734/206967379-80af7ae6-ef23-4628-9612-3a76f859da7a.gif)|
  <br>
  
  |사용한 Tech & AI Model|
  |---|
  |![11-20](https://user-images.githubusercontent.com/104360734/206968728-dd87835c-dbea-455a-9de7-40d23913af04.gif)|
  <br>
  
  |개발 기간 & DB/기능 설계도|
  |---|
  |![21-26](https://user-images.githubusercontent.com/104360734/206969230-a75d9ecc-9142-425c-8bce-fe635b0c3acb.gif)|
  <br>
  
  |UI / UX|
  |---|
  |<div align='center'>일반 로그인 & 회원가입</div>|
  |![27-28](https://user-images.githubusercontent.com/104360734/206975724-af4a2395-a5b7-4c64-81f5-c83cc1d1ff60.gif)|
  |<div align='center'>메인 화면 & 검색</div>|
  |![29-31](https://user-images.githubusercontent.com/104360734/206975745-51fee449-c077-4ba2-a2c9-2e648a16968c.gif)|
  |<div align='center'>운동 시작</div>|
  |![32](https://user-images.githubusercontent.com/104360734/206976405-0b52d62d-3f87-4f72-9555-1d5dd3b8071e.gif)|
  |<div align='center'>챌린지/랭킹</div>|
  |![33](https://user-images.githubusercontent.com/104360734/206976429-8759050a-41f3-4cf5-ba55-e9ae815b14f4.gif)|
  |<div align='center'>마이 페이지</div>|
  |![34](https://user-images.githubusercontent.com/104360734/206975541-1d2f3350-15b9-4a01-86d2-ab5a212af491.gif)|
  |<div align='center'>센터 업주 로그인 & 회원가입</div>|
  |![35](https://user-images.githubusercontent.com/104360734/206975570-6497edce-090f-4504-97df-b9e9c83ecf6d.gif)|
  |<div align='center'>센터 회원조회 & 콘텐츠 업로드</div>|
  |![36-37](https://user-images.githubusercontent.com/104360734/206975603-a3cd7942-9ce6-4e95-b379-8bde7179effe.gif)|
  |<div align='center'>관리자 페이지</div>|
  |![38-39](https://user-images.githubusercontent.com/104360734/206975655-aae12e10-7c94-4572-9f99-0147947aaa39.gif)|
  <br>
  
  |시행 착오 / 개선 사항|
  |---|
  |<div align='center'>시행 착오</div>|
  |![40-42](https://user-images.githubusercontent.com/104360734/206975680-15113704-f52d-4248-b937-1d6b2edfde98.gif)|
  |<div align='center'>개선 사항 & 참고 문헌<div>|
  |![43-46](https://user-images.githubusercontent.com/104360734/206975697-f5b69a68-cb59-4c4f-8248-760788e81ab9.gif)|
  <br>
  
  |Wanted 팀원 소개|
  |---|
  |![47-49](https://user-images.githubusercontent.com/104360734/206973748-e9d56d3e-d15a-4d8c-8ea2-040bcfa81c96.gif)|

</div>
