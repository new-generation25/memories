// 미션 데이터
const missionsData = {
    1: {
        title: "엄마와의 러브스토리",
        location: "봉황1935",
        code: "BH001",
        story: `안녕하세요, 여러분.
저는 강소영이라고 합니다.

이거 보이시죠?
1988년 9월 17일, 제가 태어난 날 아버지가 쓰신 메모예요.

'아이와 함께 하고 싶은 것들'

37년이 지났는데... 하나도 못 하셨어요.

왜냐면 제가... 19년 전에 고향을 떠났거든요.
아버지가 무뚝뚝하다는 이유로.

근데 이번에 내려와 보니 아버지가 건망증이 심해지셨어요.

이상하게 1988년, 제가 태어났을 때 이야기만은
잊고 싶지 않으신가 봐요.

첫 번째 소원은 '엄마와의 러브스토리 들려주기'

여기 봉황1935, 37년 전엔 '봉황다방'이었대요.
아버지가 엄마에게 고백한 장소죠.

풍선초를 들고 "이게 내 마음이오"라고 하셨대요.

풍선초 씨앗을 찾아보세요.
그 안에 비밀이 숨어있답니다.`,
        mission: "카페에서 풍선초 씨앗을 찾아 하트 모양을 확인하세요.",
        bonus: {
            question: "풍선초의 꽃말은 무엇일까요?",
            options: [
                "행운과 번영",
                "영원한 사랑과 추억",
                "우정과 신뢰",
                "감사와 존경"
            ],
            answer: 1
        }
    },
    2: {
        title: "목욕탕에서 같이 때밀기",
        location: "미야상회",
        code: "BH002",
        story: `두 번째 소원이에요.

'목욕탕에서 같이 때밀기'

사실 이건 좀 슬픈 이야기예요.

아버지는 아들을 원하셨대요.
근데 제가 딸로 태어났죠.

7살까지는 같이 목욕탕 갔는데
그 이후론 못 갔어요.

대신에...
매주 일요일마다 여기 미야상회에 들러서
제가 좋아하는 걸 사오셨대요.

상회 사장님이 그 모습을 다 기억하세요.

아버지가 37년 동안 매번 사오시던 게 뭘까요?
한번 찾아보세요.`,
        mission: "상회에서 아버지가 매주 사오시던 것을 찾으세요.",
        bonus: {
            question: "빙그레 바나나맛우유의 출시 연도는?",
            options: [
                "1970년",
                "1974년",
                "1980년",
                "1988년"
            ],
            answer: 1
        }
    },
    3: {
        title: "예쁜 사진 찍어주기",
        location: "능소화 고택",
        code: "BH003",
        story: `세 번째 소원이에요.

'예쁜 사진 찍어주기'

여기 능소화 고택이에요.

어렸을 때 아버지가 여기서 사진 찍자고 하셨어요.
"아빠가 제일 좋아하는 꽃이야"라고 하시면서요.

능소화는 여름에 피는 꽃인데
지금은 꽃이 없네요.

예전엔 봉황동 곳곳에 있었는데,
이제는 몇 집 남지 않았대요.

저와 아버지가 같이 찍은 사진이 없는 게 아쉬워요.

아버지는 제와 함께 사진 찍기를
계속 기다리셨을 거예요.

여러분, 여기서 사진 한 장 찍어주실래요?`,
        mission: "능소화 담벼락 앞에서 사진을 촬영하세요.",
        bonus: {
            question: "능소화의 꽃말은?",
            options: [
                "평화와 안정",
                "희망과 용기",
                "명예와 성공",
                "영원한 사랑"
            ],
            answer: 2
        }
    },
    4: {
        title: "좋아하는 음악 함께 듣기",
        location: "카페 탱자",
        code: "BH004",
        story: `네 번째 소원이에요.

'내가 좋아하는 음악 함께 듣기'

아버지는 음악을 정말 좋아하셨어요.
1980년대 가요, 팝송...

근데 집에선 항상 작게 들으셨어요.
제가 '시끄럽다'고 할까봐.

여기 카페 탱자, 예전엔 음악다방이었대요.

DJ분이 오래된 신청곡 쪽지를 발견했대요.

아버지가 저를 생각하며 신청한 노래.

"딸아이가 여섯 살입니다.
말재주가 없어서 사랑한다는 말을 못했습니다.
소영아, 듣고 있니?
아빠는 네가 웃을 때가 제일 행복하단다."

무뚝뚝하기만 했던 아버지...
이런 마음이셨구나.

지금이라도 알게 되어 다행이에요.`,
        mission: "별밤 라디오를 들으며 아버지의 마음을 느껴보세요.",
        bonus: {
            question: "아버지가 신청한 노래는?",
            options: [
                "김광석 - 이등병의 편지",
                "이문세 - 소녀",
                "조용필 - 킬리만자로의 표범",
                "신승훈 - 보이지 않는 사랑"
            ],
            answer: 1
        }
    },
    5: {
        title: "가족오락관에 나가기",
        location: "방하림",
        code: "BH005",
        story: `마지막 소원이에요.

'가족오락관에 같이 나가기'

아버지가 평생 보고 싶어 하셨던 프로그램이에요.

매주 일요일 저녁,
혼자 중얼거리셨대요.
"나도 저기 나가면 잘할 수 있을 텐데..."

근데 한 번도 도전하지 못하셨어요.

왜냐면 '가족'오락관이잖아요.
제가 같이 안 해드렸거든요.

그런데 MC분이 저를 기다리고 계셨어요.

"아버님이 한 달 전에 부탁하셨어요.
소영이가 이날 올 테니 마지막 소원을 이뤄주세요."

한 달 동안...
아버지가 이 모든 걸 준비하셨어요.

오늘의 모든 일들이 우연이 아니었어요.

아버지의 편지가 있어요.

"소영아, 다섯 가지 소원 모두 이뤘니?
네가 올까 안 올까 매일 불안했지만, 믿었어.
가족오락관에서 웃는 모습, 상상만 해도 행복했어.
이제 아빠의 소원은 다 이뤄졌어.
고마워, 소영아. 사랑한다."

여러분...
여기까지 함께해주셔서 정말 고마워요.`,
        mission: "MC와 함께 가족오락관 게임에 참여하세요.",
        bonus: {
            question: "'봉황 메모리즈'의 시작 연도는?",
            options: [
                "1980년",
                "1985년",
                "1988년",
                "1990년"
            ],
            answer: 2
        }
    }
};

// 로컬 스토리지 키
const STORAGE_KEY = 'bonghwangMemories';

// 진행 상황 불러오기
function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        return JSON.parse(saved);
    }
    return {
        completed: [],
        bonusCompleted: [],
        currentMission: 1
    };
}

// 진행 상황 저장
function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

// 진행률 업데이트
function updateProgressBar() {
    const progress = loadProgress();
    const percent = (progress.completed.length / 5) * 100;
    document.getElementById('progressBar').style.width = percent + '%';
    document.getElementById('progressText').textContent = 
        `${progress.completed.length}/5 완료`;
    
    // 미션 카드 상태 업데이트
    document.querySelectorAll('.mission-card').forEach(card => {
        const missionId = parseInt(card.dataset.mission);
        
        if (progress.completed.includes(missionId)) {
            card.classList.add('completed');
            card.classList.remove('locked');
            card.dataset.status = 'completed';
            const btn = card.querySelector('.btn-scan');
            if (btn) {
                btn.textContent = '✓ 완료';
                btn.style.background = '#4CAF50';
            }
        } else if (missionId <= progress.currentMission) {
            card.classList.remove('locked');
            card.dataset.status = 'unlocked';
        }
    });
    
    // 전체 완료 체크
    if (progress.completed.length === 5) {
        showCompleteModal();
    }
}

// QR 스캐너 열기
let html5QrCode;
function openScanner(missionId) {
    const progress = loadProgress();
    
    // 잠금 체크
    if (missionId > progress.currentMission) {
        alert('이전 미션을 먼저 완료해주세요!');
        return;
    }
    
    document.getElementById('scannerModal').style.display = 'block';
    
    // QR 스캐너 초기화
    if (!html5QrCode) {
        html5QrCode = new Html5Qrcode("qrReader");
    }
    
    html5QrCode.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: { width: 250, height: 250 }
        },
        onScanSuccess,
        onScanFailure
    ).catch(err => {
        console.error("QR 스캐너 오류:", err);
    });
}

// QR 스캔 성공
function onScanSuccess(decodedText) {
    closeScanner();
    validateCode(decodedText);
}

// QR 스캔 실패 (무시)
function onScanFailure(error) {
    // 스캔 실패는 무시
}

// 스캐너 닫기
function closeScanner() {
    if (html5QrCode) {
        html5QrCode.stop().then(() => {
            document.getElementById('scannerModal').style.display = 'none';
        }).catch(err => {
            console.error("스캐너 정지 오류:", err);
        });
    } else {
        document.getElementById('scannerModal').style.display = 'none';
    }
}

// 수동 코드 입력
function submitCode() {
    const code = document.getElementById('manualCode').value.trim();
    validateCode(code);
}

// 코드 검증
function validateCode(code) {
    console.log('스캔된 코드:', code);
    
    // URL에서 ID 추출 시도 (정규식 사용)
    if (code.includes('mission.html') || code.includes('http')) {
        const idMatch = code.match(/[?&]id=(\d+)/);
        if (idMatch) {
            const id = idMatch[1];
            console.log('추출된 ID:', id);
            if (missionsData[id]) {
                window.location.href = `mission.html?id=${id}`;
                return;
            }
        }
    }
    
    // 미션 데이터에서 코드 찾기 (BH001 형식)
    let foundMission = null;
    for (let id in missionsData) {
        if (missionsData[id].code === code.toUpperCase()) {
            foundMission = id;
            break;
        }
    }
    
    if (foundMission) {
        // 미션 페이지로 이동
        window.location.href = `mission.html?id=${foundMission}`;
    } else {
        console.error('인식 실패. 코드:', code);
        alert('올바른 QR 코드가 아닙니다!\n스캔된 값: ' + code);
    }
}

// 완주 모달
function showCompleteModal() {
    document.getElementById('completeModal').style.display = 'block';
}

// 뒤로가기
function goBack() {
    window.history.back();
}

// 홈으로 가기
function goToHome() {
    window.location.href = 'index.html';
}

// 미션 데이터 로드 (mission.html)
let currentMissionId;
let typingTimeout;
let isTyping = false;

function loadMissionData(id) {
    currentMissionId = parseInt(id);
    const mission = missionsData[id];
    
    if (!mission) {
        alert('잘못된 미션입니다!');
        goToHome();
        return;
    }
    
    // 헤더 설정
    document.getElementById('missionBadge').textContent = `미션 ${id}`;
    document.getElementById('missionTitle').textContent = mission.title;
    document.getElementById('missionLocation').textContent = `📍 ${mission.location}`;
    
    // 스토리 타이핑 효과
    typeStory(mission.story);
    
    // 미션 설명
    document.getElementById('missionDesc').textContent = mission.mission;
    
    // 보너스 퀴즈
    loadBonus(mission.bonus);
    
    // 완료 버튼 상태
    const progress = loadProgress();
    if (progress.completed.includes(currentMissionId)) {
        document.getElementById('completeBtn').textContent = '✓ 완료됨';
        document.getElementById('completeBtn').disabled = true;
    }
}

// 타이핑 효과
function typeStory(text) {
    const storyBox = document.getElementById('storyBox');
    storyBox.textContent = '';
    isTyping = true;
    
    let index = 0;
    const speed = 50; // 50ms per character
    
    function type() {
        if (index < text.length && isTyping) {
            storyBox.textContent += text.charAt(index);
            index++;
            storyBox.scrollTop = storyBox.scrollHeight; // 자동 스크롤
            typingTimeout = setTimeout(type, speed);
        } else {
            isTyping = false;
            document.getElementById('skipBtn').style.display = 'none';
        }
    }
    
    type();
}

// 스킵
function skipTyping() {
    isTyping = false;
    clearTimeout(typingTimeout);
    const mission = missionsData[currentMissionId];
    document.getElementById('storyBox').textContent = mission.story;
    document.getElementById('skipBtn').style.display = 'none';
}

// 보너스 퀴즈 로드
function loadBonus(bonus) {
    const quizBox = document.getElementById('quizBox');
    
    const progress = loadProgress();
    if (progress.bonusCompleted.includes(currentMissionId)) {
        quizBox.innerHTML = `
            <div class="quiz-result correct">
                ✓ 보너스 미션 완료!
            </div>
        `;
        return;
    }
    
    let html = `
        <div class="quiz-question">${bonus.question}</div>
        <div class="quiz-options">
    `;
    
    bonus.options.forEach((option, index) => {
        html += `
            <div class="quiz-option" onclick="selectOption(${index})">
                ${index + 1}. ${option}
            </div>
        `;
    });
    
    html += `
        </div>
        <div id="quizResult"></div>
    `;
    
    quizBox.innerHTML = html;
}

// 퀴즈 선택
function selectOption(index) {
    const mission = missionsData[currentMissionId];
    const options = document.querySelectorAll('.quiz-option');
    
    // 모든 옵션 클릭 비활성화
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    // 선택한 옵션 표시
    options[index].classList.add('selected');
    
    // 정답 체크
    const resultDiv = document.getElementById('quizResult');
    if (index === mission.bonus.answer) {
        options[index].classList.add('correct');
        resultDiv.innerHTML = `
            <div class="quiz-result correct">
                🎉 정답입니다! 보너스 포인트 획득!
            </div>
        `;
        
        // 보너스 완료 저장
        const progress = loadProgress();
        if (!progress.bonusCompleted.includes(currentMissionId)) {
            progress.bonusCompleted.push(currentMissionId);
            saveProgress(progress);
        }
    } else {
        options[index].classList.add('wrong');
        options[mission.bonus.answer].classList.add('correct');
        resultDiv.innerHTML = `
            <div class="quiz-result wrong">
                ❌ 아쉽습니다. 정답은 ${mission.bonus.answer + 1}번입니다.
            </div>
        `;
    }
}

// 미션 완료
function completeMission() {
    const progress = loadProgress();
    
    if (progress.completed.includes(currentMissionId)) {
        alert('이미 완료한 미션입니다!');
        return;
    }
    
    // 완료 확인
    if (!confirm('미션을 완료하셨나요?')) {
        return;
    }
    
    // 완료 처리
    progress.completed.push(currentMissionId);
    progress.currentMission = currentMissionId + 1;
    saveProgress(progress);
    
    // 버튼 비활성화
    const btn = document.getElementById('completeBtn');
    btn.textContent = '✓ 완료됨';
    btn.disabled = true;
    
    // 다음 미션 안내
    if (currentMissionId < 5) {
        document.getElementById('nextMission').style.display = 'block';
    } else {
        // 마지막 미션 완료
        alert('🎉 모든 미션을 완료하셨습니다!\n방하림에서 완주 선물을 받아가세요.');
        goToHome();
    }
}

// 페이지 로드 시
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    window.onload = function() {
        updateProgressBar();
    };
}
