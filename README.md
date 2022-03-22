# ts-express-api-template

### Installation

```bash
$ npm install
```

### Running the app

```bash
$ npm run start
```

## **Structure**

- `src`: 메인 로직 `src`에는 도메인 별로 패키지를 구성
- `config` 및 `util` 폴더: 메인 로직은 아니지만 `src` 에서 필요한 부차적인 파일들을 모아놓은 폴더
- 도메인 폴더 구조
    
    > Request(시작) / Response(끝) ⇄ Router (*Route.ts) ⇄ Controller (*Controller.ts) ⇄ Service (CUD) / Provider (R) ⇄ DAO (DB)
    > 

<br>

```
├── config                              # 
│   ├── baseResponseStatus.ts           # Response 시의 Status들을 모아 놓은 곳.
│   ├── database.ts                     # 데이터베이스 관련 설정
│   ├── express.ts                      # express Framework 설정 파일
│   ├── jwtMiddleware.ts                # jwt 관련 미들웨어 파일
│   ├── secret.ts                       # 서버 key 값들
│   ├── winston.ts                      # logger 라이브러리 설정
├── * log                               # 생성된 로그 폴더
├── * node_modules                      # 외부 라이브러리 폴더 (package.json 의 dependencies)
├── src                                 #
│   ├── app                             # 앱에 대한 코드 작성
│ 	 │   ├── User                        # User 도메인 폴더
│ 	 │   │   ├── userDao.ts              # User 관련 데이터베이스
│ 	 │   │   ├── userController.ts       # req, res 처리
│ 	 │   │   ├── userProvider.ts         # R에 해당하는 서버 로직 처리
│ 	 │   │   ├── userService.ts          # CUD에 해당하는 서버 로직 처리
│ 	 │   │   ├── userType.ts             # User 객체에 대한 Type  
├── .gitignore                          # git 에 포함되지 않아야 하는 폴더, 파일들을 작성 해놓는 곳
├── index.ts                            # 포트 설정 및 시작 파일                     		
├── * package-lock.json              	 
├── package.json                        # 프로그램 이름, 버전, 필요한 모듈 등 노드 프로그램의 정보를 기술
├── tsconfig.json                       # 타입스크립트 설정 파일
└── README.md
```


<br>

## **Usage**

### **[Node.js](https://nodejs.org/ko/)**

- `npm run start` 를 통해서 파일을 실행한다.
- node는 js 파일을 실행할 때 `package.json` 이라는 파일을 통해서 어떤 환경으로 구동하는지, 어떤 라이브러리들을 썼는지(dependencies) 등의 기본적인 설정값 들을 참고한다.
- `npm install` npm(node package manager)을 통해 package.json에 있는 dependencies 등을 참고하여 node_modules 폴더를 생성하고 라이브러리 파일을 다운로드 한다. 이 라이브러리들은 사용하고 싶은 파일에서 require 하여 사용할 수 있다.

### **[Express](https://expressjs.com/ko/)**
- config > express.ts 에서 express 프레임워크를 기반으로 한 app 모듈을 export 하도록 하여 어느 폴더에서든 사용할 수 있도록 구성했다.
- 도메인별로 해당 파일에 다음과 같이 Route 폴더를 추가하여 express.ts에서 만든 app 모듈을 사용할 수 있도록 구성했다.
- `index.ts`에서 express에서 만든 app이 3000번 포트를 Listen 하도록 구성했다.

### **[TypeScript](https://typescript-kr.github.io/)**
- 자바스크립트(JavaScript)를 기반으로 정적 타입 문법을 추가한 프로그래밍 언어
- 컴파일 시 Type Error를 빌드가 아닌 컴파일 작업에서 바로 수정할 수 있도록 하기 위해 사용했다.

### **[mysql2](https://www.npmjs.com/package/mysql2)**
- Database는 Mysql을 사용하여 데이터를 영구 저장할 수 있도록 했다. 
- Database는 config > database.ts에 mysql2 라이브러리를 사용해 구성했다. 

### **[winston](https://www.npmjs.com/package/winston)**
- Log는 winston, winston-daily-rotate-file 라이브러리를 사용해 구성했다. 
- 서버 접근 시에 생기게 될 log 폴더에서 로그를 확인할 수 있다.

### **[PM2](https://pm2.keymetrics.io/)**
- JavaScript 런타임 Node.js의 프로세스 관리자
- 무중단 서비스를 위해 PM2를 사용했다.
