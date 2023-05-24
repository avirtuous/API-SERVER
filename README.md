### 시작

## 시작가이드
1. npm install (node 16.17.1)
2. npm start (package.json -> "start": "npx nodemon app.js") - nodemon
3. 


## .gitignore

/node_modules
.env

### 빌드 

1. docker settings file -> Dockerfile

### 기능구현 

/auth -> 보안관련 기능 구현
/login
1. 로그인
2. oauth-Token(access Token, refresh Token)
3. kakao 본인인증 (kakao cert server)
4. password sha-256 encoding (password login 시 DB 저장)
5. email 인증
6. 로그인 history 구현
7. jwt local Storage 저장
8. 간편인증 (Samsung SDS Nexsign 간편인증 사용)

/logout
1. 로그아웃 기능 구현(redirect to login page)
2. 로그아웃 history 구현
3. jwt local Storage 삭제
4. 


/push
1. firebase fcm push알람 보내기


### DB 
POSTGRESQL 15

