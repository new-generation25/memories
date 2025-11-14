# QR 코드 생성 가이드

## 개요
봉황 메모리즈는 각 장소마다 QR 코드를 배치하여 참여자들이 스캔할 수 있도록 합니다.

## QR 코드 종류

### 1. 장소 QR 코드 (미션 시작)
각 장소에 배치되는 QR 코드입니다. 참여자가 스캔하면 해당 페이지로 이동합니다.

**URL 형식:**
```
https://your-domain.com/page.html?p={페이지번호}
```

**예시:**
- 페이지 1 (봉황1935): `https://your-domain.com/page.html?p=1`
- 페이지 2 (공원반점): `https://your-domain.com/page.html?p=2`
- 페이지 3 (싹스데이): `https://your-domain.com/page.html?p=3`
- 페이지 4 (패총쉼터): `https://your-domain.com/page.html?p=4`
- 페이지 5 (미야상회): `https://your-domain.com/page.html?p=5`
- 페이지 6 (초이블리): `https://your-domain.com/page.html?p=6`
- 페이지 7 (능소화 포토존): `https://your-domain.com/page.html?p=7`
- 페이지 8 (호우오우): `https://your-domain.com/page.html?p=8`
- 페이지 9 (탱자): `https://your-domain.com/page.html?p=9`
- 페이지 10 (방하림): `https://your-domain.com/page.html?p=10`

### 2. 미션 완료 QR 코드
체험 미션(type: "qr")을 완료한 후 스캔하는 QR 코드입니다.

**URL 형식:**
```
https://your-domain.com/page.html?p={페이지번호}&complete={미션ID}
```

**예시:**
- 메인미션1 완료: `https://your-domain.com/page.html?p=1&complete=main1`
- 메인미션4 완료: `https://your-domain.com/page.html?p=9&complete=main4`
- 보너스미션6 완료: `https://your-domain.com/page.html?p=9&complete=bonus6`

## 페이지별 미션 매핑

| 페이지 | 장소 | 메인 미션 | 보너스 미션 |
|--------|------|-----------|-------------|
| 1 | 봉황1935 | main1 (QR) | bonus10 (주관식) |
| 2 | 공원반점 | - | bonus11 (주관식) |
| 3 | 싹스데이 | - | bonus12 (주관식) |
| 4 | 패총쉼터 | - | bonus7 (주관식) |
| 5 | 미야상회 | main2 (주관식) | bonus8 (주관식) |
| 6 | 초이블리 | - | bonus14 (주관식) |
| 7 | 능소화 포토존 | main3 (주관식) | bonus9 (주관식) |
| 8 | 호우오우 | - | bonus13 (주관식) |
| 9 | 탱자 | main4 (QR) | bonus6 (QR), bonus16 (주관식) |
| 10 | 방하림 | main5 (QR) | bonus15 (QR) |

## QR 코드 생성 방법

### 온라인 QR 코드 생성기 사용
1. https://www.qr-code-generator.com/ 방문
2. URL 입력
3. QR 코드 다운로드
4. 인쇄 또는 디지털 디스플레이

### 권장 사이즈
- 인쇄용: 최소 3cm x 3cm
- 디지털 디스플레이: 200px x 200px 이상

## 배치 가이드

### 장소 QR 코드
- 장소 입구나 눈에 잘 띄는 곳에 배치
- "QR 코드를 스캔하여 미션을 시작하세요!" 안내문 함께 부착

### 미션 완료 QR 코드
- 체험 미션을 관리하는 스태프가 소지
- 또는 미션 완료 확인 후 보여줄 수 있는 위치에 배치
- "미션 완료 QR" 라벨 부착 권장

## 테스트 방법

1. QR 코드 생성 후 스마트폰으로 스캔
2. 올바른 페이지로 이동하는지 확인
3. 닉네임이 설정되어 있는지 확인
4. 미션 완료 후 완료 QR 스캔 테스트

## 주의사항

- 모든 QR 코드는 반드시 실제 배포 도메인으로 생성해야 합니다
- 테스트 시에는 localhost나 개발 서버 URL 사용
- QR 코드가 손상되지 않도록 코팅 또는 보호 처리 권장
