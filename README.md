# 봉황 메모리즈 - QR 미션 투어

봉리단길을 탐험하며 미션을 완료하는 인터랙티브 QR 코드 기반 투어 웹 애플리케이션입니다.

## 🎯 프로젝트 개요

봉황 메모리즈는 참여자들이 봉리단길 곳곳에 배치된 QR 코드를 스캔하여 미션을 수행하는 간단하고 재미있는 웹 기반 투어 시스템입니다.

## ✨ 주요 기능

- **닉네임 시스템**: 참여자가 닉네임을 입력하여 개인별 진행 상황 추적
- **QR 코드 기반**: 각 장소에 배치된 QR 코드를 스캔하여 미션 시작
- **두 가지 미션 타입**:
  - 메인 미션 (5개)
  - 보너스 미션 (11개)
- **두 가지 완료 방식**:
  - 주관식: 정답 입력
  - 체험형: 미션 완료 후 '완료 QR' 스캔
- **관리자 페이지**: 모든 참여자의 진행 상황 실시간 모니터링
- **완전한 오프라인 지원**: 로컬 스토리지 활용

## 📁 파일 구조

```
memories/
├── index.html          # 메인 페이지 (닉네임 입력)
├── page.html           # 미션 페이지
├── admin.html          # 관리자 페이지
├── script.js           # 핵심 로직
├── style.css           # 스타일시트
├── QR_GUIDE.md         # QR 코드 생성 가이드
└── README.md           # 프로젝트 문서
```

## 🚀 시작하기

### 1. 프로젝트 복제

```bash
git clone [repository-url]
cd memories
```

### 2. 로컬 서버 실행

간단한 HTTP 서버 실행:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server 필요)
npx http-server -p 8000
```

브라우저에서 `http://localhost:8000` 접속

### 3. QR 코드 생성

`QR_GUIDE.md` 파일을 참조하여 각 장소별 QR 코드를 생성합니다.

## 📍 페이지 및 미션 구조

### 페이지 목록

| 페이지 | 장소 | 메인 미션 | 보너스 미션 |
|--------|------|-----------|-------------|
| 1 | 봉황1935 | ✓ | 1개 |
| 2 | 공원반점 | - | 1개 |
| 3 | 싹스데이 | - | 1개 |
| 4 | 패총쉼터 | - | 1개 |
| 5 | 미야상회 | ✓ | 1개 |
| 6 | 초이블리 | - | 1개 |
| 7 | 능소화 포토존 | ✓ | 1개 |
| 8 | 호우오우 | - | 1개 |
| 9 | 탱자 | ✓ | 2개 |
| 10 | 방하림 | ✓ | 1개 |

### 미션 타입

**주관식 미션 (Quiz)**
- 참여자가 정답을 입력
- 정답 일치 시 자동 완료
- 띄어쓰기, 대소문자 무시하고 비교

**체험형 미션 (QR)**
- 현장에서 체험 완료
- 스태프 또는 지정된 위치에서 '미션완료 QR' 스캔
- 스캔 시 자동 완료 처리

## 🔧 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Storage**: LocalStorage (오프라인 지원)
- **반응형**: Mobile-first design
- **QR**: 표준 QR 코드 (URL 기반)

## 📱 사용자 플로우

1. **시작**: index.html에서 닉네임 입력
2. **미션 시작**: 현장 QR 코드 스캔 → 해당 페이지 접속
3. **미션 수행**:
   - 주관식: 정답 입력 후 제출
   - 체험형: 미션 수행 후 완료 QR 스캔
4. **진행 확인**: 로컬 스토리지에 자동 저장
5. **관리**: 관리자는 admin.html에서 모니터링

## 🛠️ 커스터마이징

### 미션 데이터 수정

`script.js` 파일의 `pagesData` 객체를 수정하여 미션 내용 변경 가능:

```javascript
const pagesData = {
    1: {
        location: "장소명",
        mainMission: {
            id: "main1",
            title: "미션 제목",
            description: "미션 설명",
            type: "quiz", // 또는 "qr"
            answer: "정답", // quiz 타입인 경우
            story: "스토리 텍스트" // 선택사항
        },
        bonusMissions: [
            // 보너스 미션들...
        ]
    }
    // ...
};
```

### 스타일 변경

`style.css` 파일에서 색상, 레이아웃 등 수정 가능

### 도메인 변경

QR 코드 생성 시 실제 배포 도메인으로 URL 변경 필요

## 🔐 관리자 기능

`admin.html` 페이지에서 제공되는 기능:

- 전체 참여자 목록 확인
- 각 참여자별 완료한 미션 목록
- 메인/보너스 미션 완료 통계
- 전체 데이터 초기화 (테스트용)

## 🧪 테스트

### 로컬 테스트

1. 닉네임 입력 확인
2. 페이지 직접 접속: `page.html?p=1`
3. 미션 완료 테스트
4. 관리자 페이지에서 데이터 확인

### QR 코드 테스트

1. QR 코드 생성기로 테스트 URL 생성
2. 스마트폰으로 스캔
3. 올바른 페이지 이동 확인

## 💾 데이터 구조

### LocalStorage 저장 형식

```javascript
// 닉네임
bonghwang_nickname: "사용자닉네임"

// 진행 상황 (사용자별)
bonghwang_progress: {
    "사용자1": { completed: ["main1", "bonus10", "main2"] },
    "사용자2": { completed: ["main1", "main2", "main3"] }
}
```

## 🚀 배포 방법

### GitHub Pages

1. GitHub 저장소에 푸시
2. Settings → Pages → Branch 선택 → Save
3. 배포된 URL로 QR 코드 생성

### QR 코드 URL 형식

```
# 장소 QR (미션 시작)
https://your-domain.com/page.html?p=1

# 미션 완료 QR (체험형 미션)
https://your-domain.com/page.html?p=1&complete=main1
```

자세한 내용은 `QR_GUIDE.md` 참조

## 📝 라이선스

This project is licensed under the MIT License.

## 👥 기여

버그 리포트, 기능 제안, Pull Request 환영합니다!

## 📞 문의

프로젝트 관련 문의사항은 이슈를 등록해주세요.

---

**마지막 업데이트**: 2025-11-14
**버전**: 2.0.0 (단순화 버전)
