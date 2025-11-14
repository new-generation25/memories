// 미션 데이터 - 페이지 번호 기반
const pagesData = {
    1: {
        location: "봉황1935",
        mainMission: {
            id: "main1",
            title: "풍선초 키링 만들기",
            description: "마음을 담은 키링을 만들어보세요.",
            type: "qr", // qr 또는 quiz
            story: `안녕하세요!\n봉황1935에 오신 것을 환영합니다.\n\n이곳에서 풍선초 키링을 만들어보세요.\n마음을 담아 소중한 사람을 위한 선물을 만들어보는 건 어떨까요?`
        },
        bonusMissions: [
            {
                id: "bonus10",
                title: "궁금한 것들",
                description: "봉황1935 카페 안 중앙에는 꿩의 깃털로 만든 무언가가 있습니다. 악몽을 막아주는 이것은 무엇일까요?",
                type: "quiz",
                answer: "드림캐쳐"
            }
        ]
    },
    2: {
        location: "공원반점",
        bonusMissions: [
            {
                id: "bonus11",
                title: "잠깐 멈춰",
                description: "빨간색 신호등. 풀린 신발끈. 길냥이. 들꽃. 시. 이 시의 제목은?",
                type: "quiz",
                answer: "멈추게 하는것"
            }
        ]
    },
    3: {
        location: "싹스데이",
        bonusMissions: [
            {
                id: "bonus12",
                title: "여기 제주도야?",
                description: "벚꽃과 유채꽃이 많은 제주도의 오름 이름은?",
                type: "quiz",
                answer: "큰사슴이오름"
            }
        ]
    },
    4: {
        location: "패총쉼터",
        bonusMissions: [
            {
                id: "bonus7",
                title: "맛난다 맛나",
                description: "김해 부원동는 고기집들이 모여 ㅇㅇㅇ거리가 있습니다. 김해에서 유명한 이 고기는 무엇일까요?",
                type: "quiz",
                answer: "뒷고기"
            }
        ]
    },
    5: {
        location: "미야상회",
        mainMission: {
            id: "main2",
            title: "아 이맛은?",
            description: "아버지가 목욕탕에 들렀다가 꼭 사오는 이것은 무엇일까요?",
            type: "quiz",
            answer: "바나나맛 우유",
            story: `미야상회에 오신 것을 환영합니다!\n\n옛날 아버지들은 목욕탕 다녀오시면서\n항상 사오시던 것이 있었죠.\n\n그것이 무엇일까요?`
        },
        bonusMissions: [
            {
                id: "bonus8",
                title: "출시년도 퀴즈",
                description: "바나나맛 우유의 출시년도는?",
                type: "quiz",
                answer: "1974"
            }
        ]
    },
    6: {
        location: "초이블리",
        bonusMissions: [
            {
                id: "bonus14",
                title: "누구야?",
                description: "초이블리 간판에 있는 매력적인 캐릭터는 누구일까요?",
                type: "quiz",
                answer: "초이블리 사장님"
            }
        ]
    },
    7: {
        location: "능소화 포토존",
        mainMission: {
            id: "main3",
            title: "봉리단길 대표 포토존",
            description: "봉리단길의 유명 포토존이 여럿 있지만 여름에 핫한 꽃이 피는 이곳 이 꽃의 이름은?",
            type: "quiz",
            answer: "능소화",
            story: `능소화 포토존에 오신 것을 환영합니다!\n\n여름에 아름답게 피는 이 꽃의 이름을 아시나요?\n봉리단길의 대표 포토존입니다.`
        },
        bonusMissions: [
            {
                id: "bonus9",
                title: "꽃과 함께",
                description: "봉황동의 유명한 능소화 포토존 앞에도 꽃이 있습니다. 그 꽃집의 이름은?",
                type: "quiz",
                answer: "아르모니"
            }
        ]
    },
    8: {
        location: "호우오우",
        bonusMissions: [
            {
                id: "bonus13",
                title: "이건 얼마?",
                description: "호우오우 샤브샤브의 가격은 앤화로 얼마일까요?",
                type: "quiz",
                answer: "1300"
            }
        ]
    },
    9: {
        location: "탱자",
        mainMission: {
            id: "main4",
            title: "별이 빛나는 봉황동",
            description: "밤에 봉황동의 DJ에게 사연과 함께 노래를 신청하세요",
            type: "qr",
            story: `탱자에 오신 것을 환영합니다!\n\n밤이 되면 이곳은 특별한 공간이 됩니다.\nDJ에게 사연과 함께 노래를 신청해보세요.`
        },
        bonusMissions: [
            {
                id: "bonus6",
                title: "부모님 전상서",
                description: "그리운 누군가, 보고 싶은 누군가에게 편지를 써보세요.",
                type: "qr"
            },
            {
                id: "bonus16",
                title: "별밤지기",
                description: "8090 인기 라디오프로그램 '별이 빛나는 밤에'에서 제일 오랫동안 DJ를 맡은 별밤지기는?",
                type: "quiz",
                answer: "이문세"
            }
        ]
    },
    10: {
        location: "방하림",
        mainMission: {
            id: "main5",
            title: "가족오락관",
            description: "가족오락관이 한참 진행중입니다. 게임에 참여하세요",
            type: "qr",
            story: `방하림에 오신 것을 환영합니다!\n\n가족오락관이 진행중입니다.\n게임에 참여하여 즐거운 시간을 보내세요!`
        },
        bonusMissions: [
            {
                id: "bonus15",
                title: "영수증 인증",
                description: "봉리단길에서 잘 즐기셨나요? 마지막 보상수령 지점에서 봉리단길에서 지출한 영수증을 마지막 지점에서 제시하면 미션이 완료 됩니다.",
                type: "qr"
            }
        ]
    }
};

// 로컬 스토리지 키
const STORAGE_NICKNAME = 'bonghwang_nickname';
const STORAGE_PROGRESS = 'bonghwang_progress';

// 닉네임 가져오기
function getNickname() {
    return localStorage.getItem(STORAGE_NICKNAME) || '';
}

// 닉네임 설정
function setNickname(nickname) {
    localStorage.setItem(STORAGE_NICKNAME, nickname);
}

// 진행 상황 불러오기
function loadProgress() {
    const nickname = getNickname();
    if (!nickname) return null;

    const allProgress = JSON.parse(localStorage.getItem(STORAGE_PROGRESS) || '{}');
    return allProgress[nickname] || { completed: [] };
}

// 진행 상황 저장
function saveProgress(progress) {
    const nickname = getNickname();
    if (!nickname) return;

    const allProgress = JSON.parse(localStorage.getItem(STORAGE_PROGRESS) || '{}');
    allProgress[nickname] = progress;
    localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(allProgress));
}

// 미션 완료 처리
function completeMission(missionId) {
    const progress = loadProgress();
    if (!progress) return false;

    if (!progress.completed.includes(missionId)) {
        progress.completed.push(missionId);
        saveProgress(progress);
        return true;
    }
    return false;
}

// 미션 완료 여부 확인
function isMissionCompleted(missionId) {
    const progress = loadProgress();
    if (!progress) return false;
    return progress.completed.includes(missionId);
}

// 정답 비교 (띄어쓰기, 대소문자 무시)
function compareAnswers(userAnswer, correctAnswer) {
    if (!userAnswer || !correctAnswer) return false;

    const normalize = (str) => str.replace(/\s+/g, '').toLowerCase().trim();
    return normalize(userAnswer) === normalize(correctAnswer);
}

// 타이핑 효과
let typingInterval;
function typeText(element, text, speed = 30) {
    return new Promise((resolve) => {
        element.textContent = '';
        let index = 0;

        typingInterval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
            } else {
                clearInterval(typingInterval);
                resolve();
            }
        }, speed);
    });
}

// 타이핑 스킵
function skipTyping() {
    if (typingInterval) {
        clearInterval(typingInterval);
    }
}

// 관리자: 모든 사용자 진행 상황 가져오기
function getAllProgress() {
    return JSON.parse(localStorage.getItem(STORAGE_PROGRESS) || '{}');
}

// 관리자: 진행 상황 초기화
function resetAllData() {
    if (confirm('정말 모든 데이터를 초기화하시겠습니까?')) {
        localStorage.removeItem(STORAGE_PROGRESS);
        alert('모든 데이터가 초기화되었습니다.');
        location.reload();
    }
}

// 뒤로가기
function goBack() {
    window.history.back();
}

// 홈으로
function goHome() {
    window.location.href = 'index.html';
}
