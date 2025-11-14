const APP_KEY = 'bonghwang_memories_v2';
const typingSpeed = 25;

const missionPages = {
    "1": {
        id: "1",
        title: "봉황1935의 시작",
        location: "봉황1935",
        meta: ["PAGE 1", "메인 & 보너스"],
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

지금 봉황1935 바깥에는 이것 천지에요. 
빵빵하게 부풀려진 이것, 안에는 그당시 아버지의 마음이 담겨 있었데요.

그 안에 비밀이 숨어있답니다.`,
        mainTask: {
            key: "main-1",
            label: "메인 미션",
            title: "풍선초 키링 만들기",
            description: "현장에서 키링을 완성한 뒤 스태프에게 완료 QR 코드를 받아 입력하세요.",
            type: "code",
            codeHint: "완료 QR 코드를 입력하세요",
            codes: ["BH001-DONE", "KEYRING"]
        },
        bonusTasks: [{
            key: "bonus-1",
            label: "보너스 미션",
            title: "궁금한 장식",
            question: "카페 중앙 천장에 걸린, 악몽을 막아준다는 장식의 이름은 무엇일까요?",
            type: "text",
            answer: "드림캐처"
        }]
    },
    "2": {
        id: "2",
        title: "공원반점 쉼표",
        location: "공원반점 앞",
        meta: ["PAGE 2", "보너스"],
        story: `봉황동 골목을 걷다 보면 공원반점 앞 의자가 눈에 띄어요.
의자 옆에는 빨간 신발과 파란 신발 그림, 그리고 짧은 시 한 구절이 붙어 있답니다.

잠깐 멈춰 서서 시인의 마음을 읽어주세요.`,
        bonusTasks: [{
            key: "bonus-2",
            label: "보너스 미션",
            title: "시의 제목",
            question: "공원반점 앞에 붙어 있는 시의 제목은 무엇일까요?",
            type: "text",
            answer: "잠깐 멈춰"
        }]
    },
    "3": {
        id: "3",
        title: "씩스데이 골목",
        location: "씩스데이",
        meta: ["PAGE 3", "보너스"],
        story: `큼지막한 제주 감귤 상자가 쌓인 듯한 씩스데이는 지역 청년들이 만든 팝업 스토어예요.
현장 안내판에는 제주 오름의 이름이 적혀 있죠. 그중 하나를 찾아주세요.`,
        bonusTasks: [{
            key: "bonus-3",
            label: "보너스 미션",
            title: "여기 제주도?",
            question: "안내판에 적힌 제주 명칭 중 '벚꽃이 가장 많이 피는 제주도의 이름'은 무엇일까요?",
            type: "text",
            answer: "큰샘의오름"
        }]
    },
    "4": {
        id: "4",
        title: "패홍쉘터의 오후",
        location: "패홍쉘터",
        meta: ["PAGE 4", "보너스"],
        story: `패홍쉘터 벽면에는 김해 사람들이 사랑한 돼지고기 부위 소개가 붙어 있어요.
그중 하나는 오직 이 동네에서만 특별하게 불린답니다.`,
        bonusTasks: [{
            key: "bonus-4",
            label: "보너스 미션",
            title: "맛난다 맛나",
            question: "패홍쉘터 안내판에 적힌 김해 대표 돼지고기 부위는 무엇일까요?",
            type: "text",
            answer: "뒷고기"
        }]
    },
    "5": {
        id: "5",
        title: "미야상회의 약속",
        location: "미야상회",
        meta: ["PAGE 5", "메인 & 보너스"],
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

아버지가 목욕탕에서 오시는 길에 매번 사오시던 게 뭘까요?
한번 찾아보세요.`,
        mainTask: {
            key: "main-2",
            label: "메인 미션",
            title: "이 맛은?",
            question: "아버지가 목욕탕에서 오실 때마다 사 오신 음료는 무엇일까요?",
            type: "text",
            answer: "바나나맛 우유"
        },
        bonusTasks: [{
            key: "bonus-5",
            label: "보너스 미션",
            title: "출시년도 퀴즈",
            question: "빙그레 ㅇㅇㅇㅇ ㅇㅇ의 출시 연도는?",
            type: "text",
            answer: "1974"
        }]
    },
    "7": {
        id: "7",
        title: "능소화 포토존",
        location: "능소화 골목",
        meta: ["PAGE 7", "메인 & 보너스"],
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
        mainTask: {
            key: "main-3",
            label: "메인 미션",
            title: "대표 포토존",
            question: "능소화 골목에서 피는 대표 꽃은 무엇일까요?",
            type: "text",
            answer: "능소화"
        },
        bonusTasks: [{
            key: "bonus-7",
            label: "보너스 미션",
            title: "꽃 이름",
            question: "담장 안쪽 화분에 심어진 하얀 꽃의 이름은 무엇일까요? (힌트: 프랑스어 이름)",
            type: "text",
            answer: "아르모니"
        }]
    },
    "8": {
        id: "8",
        title: "호유오우의 가격표",
        location: "호유오우",
        meta: ["PAGE 8", "보너스"],
        story: `사바나 소품이 가득한 호유오우에는 오래된 전화기 모형이 있어요.
가격표 글자가 지워져 있는데 사장님이 살짝 알려주셨어요.`,
        bonusTasks: [{
            key: "bonus-8",
            label: "보너스 미션",
            title: "이건 얼마?",
            question: "사바나 전화기 모형의 가격은 얼마일까요?",
            type: "text",
            answer: "1300"
        }]
    },
    "9": {
        id: "9",
        title: "카페 탱자의 밤",
        location: "카페 탱자",
        meta: ["PAGE 9", "메인 & 보너스"],
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
        mainTask: {
            key: "main-4",
            label: "메인 미션",
            title: "별이 빛나는 봉황동",
            description: "라디오 부스에서 사연을 남기고 스태프에게 완료 QR 코드를 받아 입력하세요.",
            type: "code",
            codeHint: "완료 QR 코드를 입력하세요",
            codes: ["BH004-DONE", "STAR-NIGHT"]
        },
        bonusTasks: [
            {
                key: "bonus-6",
                label: "보너스 미션 6",
                title: "부모님 전상서",
                description: "부모님께 편지를 써서 스태프에게 보여주면 완료 QR을 받을 수 있어요.",
                type: "code",
                codeHint: "완료 QR 코드를 입력하세요",
                codes: ["BONUS-6"]
            },
            {
                key: "bonus-15",
                label: "보너스 미션 15",
                title: "벌밤지기",
                description: "DJ에게 사연을 전하고 받은 보너스 QR 코드를 입력하세요.",
                type: "code",
                codeHint: "완료 QR 코드를 입력하세요",
                codes: ["BONUS-15"]
            }
        ]
    },
    "10": {
        id: "10",
        title: "방하림의 무대",
        location: "방하림",
        meta: ["PAGE 10", "메인 & 보너스"],
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
        mainTask: {
            key: "main-5",
            label: "메인 미션",
            title: "가족오락관 게임",
            description: "현장 게임을 마친 뒤 제공받은 완료 QR 코드를 입력하세요.",
            type: "code",
            codeHint: "완료 QR 코드를 입력하세요",
            codes: ["BH005-DONE", "FAMILY"]
        },
        bonusTasks: [{
            key: "bonus-10",
            label: "보너스 미션",
            title: "영수증 인증",
            description: "방하림 지정 미션을 수행하고 받은 보너스 QR을 입력하세요.",
            type: "code",
            codeHint: "보너스 완료 QR 코드를 입력하세요",
            codes: ["BONUS-10"]
        }]
    },
    "11": {
        id: "11",
        title: "초입길의 기록",
        location: "초입길",
        meta: ["PAGE 11", "보너스"],
        story: `초입길 아카이브에는 1980년대 별밤 사연이 빼곡히 남아 있어요.
마지막 장에는 “초입길 사장님이 직접 적어주세요”라는 문장이 적혀 있죠.`,
        bonusTasks: [{
            key: "bonus-11",
            label: "보너스 미션",
            title: "누가 썼을까?",
            question: "초입길 사장님이 남긴 메시지에서 '별밤 DJ'로 언급된 인물은 누구일까요?",
            type: "text",
            answer: "초입길 사장님"
        }]
    }
};

const defaultState = () => ({
    currentNickname: "",
    players: {}
});

function loadState() {
    try {
        const raw = localStorage.getItem(APP_KEY);
        if (!raw) return defaultState();
        const parsed = JSON.parse(raw);
        return {
            currentNickname: parsed.currentNickname || "",
            players: parsed.players || {}
        };
    } catch {
        return defaultState();
    }
}

function saveState(state) {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
}

function normalizeNickname(name) {
    return name.trim().replace(/\s+/g, " ");
}

function setNickname(name) {
    const clean = normalizeNickname(name);
    if (!clean) return false;
    const state = loadState();
    state.currentNickname = clean;
    if (!state.players[clean]) {
        state.players[clean] = {
            nickname: clean,
            createdAt: new Date().toISOString(),
            completions: {}
        };
    }
    saveState(state);
    return true;
}

function getCurrentNickname() {
    return loadState().currentNickname;
}

function recordCompletion(pageId, taskKey, detail) {
    const state = loadState();
    const nickname = state.currentNickname;
    if (!nickname) return;
    if (!state.players[nickname]) {
        state.players[nickname] = {
            nickname,
            createdAt: new Date().toISOString(),
            completions: {}
        };
    }
    const player = state.players[nickname];
    if (!player.completions[pageId]) {
        player.completions[pageId] = {};
    }
    player.completions[pageId][taskKey] = {
        ...detail,
        completedAt: new Date().toISOString()
    };
    saveState(state);
}

function getCompletion(pageId, taskKey) {
    const state = loadState();
    const nickname = state.currentNickname;
    if (!nickname) return null;
    const player = state.players[nickname];
    if (!player) return null;
    return player.completions?.[pageId]?.[taskKey] || null;
}

function normalizeInput(value) {
    return value.replace(/\s+/g, "").replace(/[^\w가-힣]/g, "").toLowerCase().trim();
}

function compareAnswers(userAnswer, correctAnswer) {
    if (!userAnswer || !correctAnswer) return false;
    return normalizeInput(userAnswer) === normalizeInput(correctAnswer);
}

function formatAnswerHint(answer) {
    if (!answer) return "정답을 입력하세요";
    return answer.split(/\s+/).map(word => "ㅇ".repeat(word.length)).join(" ");
}

/* Intro page -------------------------------------------------- */

function initIntroPage() {
    const nicknameInput = document.getElementById("nicknameInput");
    const nicknameButton = document.getElementById("nicknameButton");
    const status = document.getElementById("nicknameStatus");
    const resetButton = document.getElementById("resetAppButton");

    const state = loadState();
    if (state.currentNickname) {
        nicknameInput.value = state.currentNickname;
        status.textContent = `현재 참여자: ${state.currentNickname}`;
    }

    nicknameButton?.addEventListener("click", () => {
        if (setNickname(nicknameInput.value)) {
            status.textContent = `현재 참여자: ${normalizeNickname(nicknameInput.value)}`;
            alert("닉네임을 저장했습니다!");
        } else {
            alert("닉네임을 입력해주세요.");
        }
    });

    resetButton?.addEventListener("click", () => {
        if (confirm("정말 모든 데이터를 삭제할까요?")) {
            localStorage.removeItem(APP_KEY);
            alert("데이터를 초기화했습니다.");
            location.reload();
        }
    });
}

/* Mission page -------------------------------------------------- */

let currentMission = null;
let typingTimer;
let completionToken = null;

function initMissionPage() {
    const params = new URLSearchParams(window.location.search);
    const pageId = params.get("id");
    completionToken = params.get("token");
    currentMission = missionPages[pageId];

    if (!currentMission) {
        alert("등록되지 않은 미션 페이지입니다.");
        window.location.href = "index.html";
        return;
    }

    document.getElementById("missionBadge").textContent = `PAGE ${pageId}`;
    document.getElementById("missionTitle").textContent = currentMission.title;
    document.getElementById("missionLocation").textContent = `📍 ${currentMission.location}`;
    document.getElementById("missionMeta").textContent = currentMission.meta?.join(" · ") || "";

    const skipBtn = document.getElementById("skipBtn");
    skipBtn?.addEventListener("click", () => {
        clearTimeout(typingTimer);
        document.getElementById("storyBox").textContent = currentMission.story;
        skipBtn.style.display = "none";
    });

    typeStory(currentMission.story);
    renderTasks("mainTask", "main", currentMission.mainTask);
    renderTasks("bonusTask", "bonus", currentMission.bonusTasks);
}

function typeStory(text) {
    const storyBox = document.getElementById("storyBox");
    storyBox.textContent = "";
    let index = 0;

    function type() {
        if (index < text.length) {
            storyBox.textContent += text.charAt(index);
            index += 1;
            storyBox.scrollTop = storyBox.scrollHeight;
            typingTimer = setTimeout(type, typingSpeed);
        } else {
            document.getElementById("skipBtn").style.display = "none";
        }
    }

    type();
}

function renderTasks(sectionId, baseKey, taskData) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.innerHTML = "";
    if (!taskData) {
        section.style.display = "none";
        return;
    }
    const tasks = Array.isArray(taskData) ? taskData : [taskData];
    section.style.display = "block";
    tasks.forEach((task, index) => {
        const key = task.key || (tasks.length === 1 ? baseKey : `${baseKey}-${index + 1}`);
        const card = buildTaskCard(key, task, baseKey);
        section.appendChild(card);
    });
}

function buildTaskCard(taskKey, task, baseKey) {
    const wrapper = document.createElement("article");
    wrapper.className = "task-block";
    let record = getCompletion(currentMission.id, taskKey);
    if (!record) {
        record = tryCompleteWithToken(taskKey, task);
    }

    const pieces = [];
    pieces.push(`<div class="task-type">${task.label || (baseKey === "main" ? "메인 미션" : "보너스 미션")}</div>`);
    if (task.title) pieces.push(`<h3>${task.title}</h3>`);
    if (task.description) pieces.push(`<p class="task-desc">${task.description}</p>`);
    if (task.question) pieces.push(`<p class="task-desc"><strong>질문</strong> · ${task.question}</p>`);

    if (record) {
        pieces.push(`<div class="task-status success">✓ 완료됨 · ${new Date(record.completedAt).toLocaleString()}</div>`);
        wrapper.innerHTML = pieces.join("");
        return wrapper;
    }

    if (task.type === "text") {
        pieces.push(`
            <div class="task-input" data-key="${taskKey}">
                <input type="text" placeholder="${formatAnswerHint(task.answer)}">
                <button data-submit>제출</button>
            </div>
        `);
    } else if (task.type === "code") {
        pieces.push(`
            <div class="task-input" data-key="${taskKey}">
                <input type="text" placeholder="${task.codeHint || "완료 QR 코드를 입력하세요"}">
                <button data-submit>코드 입력</button>
            </div>
            <p class="task-hint">${task.codeHint || "현장에서 받은 완료 QR 코드를 입력하세요."}</p>
        `);
    } else {
        pieces.push(`<p class="muted">준비 중인 미션입니다.</p>`);
    }

    wrapper.innerHTML = pieces.join("");
    const button = wrapper.querySelector("[data-submit]");
    if (button) {
        button.addEventListener("click", () => handleTaskSubmit(taskKey, task, baseKey));
    }
    return wrapper;
}

function tryCompleteWithToken(taskKey, task) {
    if (!completionToken || task.type !== "code" || !task.codes?.length) return null;
    const normalized = normalizeInput(completionToken);
    const match = task.codes.some(code => normalizeInput(code) === normalized);
    if (!match) return null;
    recordCompletion(currentMission.id, taskKey, { method: "token", value: completionToken });
    completionToken = null;
    return getCompletion(currentMission.id, taskKey);
}

function handleTaskSubmit(taskKey, task, baseKey) {
    const nickname = getCurrentNickname();
    if (!nickname) {
        alert("먼저 안내 페이지에서 닉네임을 등록해주세요!");
        return;
    }

    const wrapper = document.querySelector(`.task-input[data-key="${taskKey}"]`);
    if (!wrapper) return;

    const input = wrapper.querySelector("input");
    const value = input?.value.trim();
    if (!value) {
        alert("값을 입력해주세요.");
        return;
    }

    if (task.type === "text") {
        if (!compareAnswers(value, task.answer)) {
            alert("정답이 아닙니다. 다시 시도해보세요.");
            return;
        }
        recordCompletion(currentMission.id, taskKey, { method: "text", value });
    } else if (task.type === "code") {
        const normalized = normalizeInput(value);
        const match = task.codes?.some(code => normalizeInput(code) === normalized);
        if (!match) {
            alert("코드가 올바르지 않습니다.");
            return;
        }
        recordCompletion(currentMission.id, taskKey, { method: "code", value });
    }

    if (baseKey === "main") {
        renderTasks("mainTask", "main", currentMission.mainTask);
    } else {
        renderTasks("bonusTask", "bonus", currentMission.bonusTasks);
    }
}

function goToIntro() {
    window.location.href = "index.html";
}

/* Admin page -------------------------------------------------- */

function initAdminPage() {
    const state = loadState();
    const tableBody = document.querySelector("#adminTable tbody");
    const summary = document.getElementById("adminSummary");
    const exportBtn = document.getElementById("exportButton");
    const clearBtn = document.getElementById("clearDataButton");

    const players = Object.values(state.players);
    if (!players.length) {
        tableBody.innerHTML = `<tr><td colspan="3" class="muted">저장된 기록이 없습니다.</td></tr>`;
        summary.textContent = "참여 기록이 없습니다.";
    } else {
        tableBody.innerHTML = players.map(player => {
            const completedList = Object.entries(player.completions || {}).flatMap(([pageId, tasks]) => {
                return Object.entries(tasks).map(([taskKey, record]) => `${pageId}-${taskKey} (${new Date(record.completedAt).toLocaleDateString()})`);
            });
            return `
                <tr>
                    <td><strong>${player.nickname}</strong></td>
                    <td>${new Date(player.createdAt).toLocaleDateString()}</td>
                    <td>${completedList.length ? completedList.join("<br>") : "<span class='muted'>미완료</span>"}</td>
                </tr>
            `;
        }).join("");

        summary.textContent = `총 ${players.length}명의 기록이 저장되어 있습니다.`;
    }

    exportBtn?.addEventListener("click", () => {
        const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "bonghwang-memories-data.json";
        a.click();
        URL.revokeObjectURL(url);
    });

    clearBtn?.addEventListener("click", () => {
        if (confirm("모든 기록을 삭제할까요? (되돌릴 수 없습니다)")) {
            localStorage.removeItem(APP_KEY);
            alert("삭제했습니다.");
            location.reload();
        }
    });
}

/* Entry point -------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page || "index";
    if (page === "index") initIntroPage();
    if (page === "mission") initMissionPage();
    if (page === "admin") initAdminPage();
});

