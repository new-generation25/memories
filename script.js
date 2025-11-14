const APP_KEY = 'bonghwang_memories_v2';
const typingSpeed = 25;

const missionPages = {
    "1": {
        id: "1",
        title: "봉황1935의 시작",
        location: "봉황1935",
        meta: ["PAGE 1", "메인 & 보너스"],
        story: `안녕하세요, 저는 강소영이에요.

봉황1935에 오면 항상 1988년으로 시간이 거슬러 올라가죠.
아버지가 엄마에게 풍선초를 건네며 고백하던 순간,
"이게 내 마음이오"라고 말하셨대요.

아버지는 기억을 잃어 가면서도 이 장면만은 잊고 싶지 않으신가 봐요.
여기서 다시 마음을 이어 붙여주세요.`,
        mainTask: {
            label: "메인 미션",
            title: "풍선초 키링 만들기",
            description: "현장에서 키링을 완성한 뒤 스태프에게 완료 QR 코드를 받아 입력하세요.",
            type: "code",
            codeHint: "완료 QR 코드를 입력하세요",
            codes: ["BH001-DONE", "KEYRING"]
        },
        bonusTask: {
            label: "보너스 미션",
            title: "궁금한 장식",
            question: "카페 중앙 천장에 걸린, 악몽을 막아준다는 장식의 이름은 무엇일까요?",
            type: "text",
            answer: "드림캐처"
        }
    },
    "2": {
        id: "2",
        title: "공원반점 쉼표",
        location: "공원반점 앞",
        meta: ["PAGE 2", "보너스"],
        story: `봉황동 골목을 걷다 보면 공원반점 앞 의자가 눈에 띄어요.
의자 옆에는 빨간 신발과 파란 신발 그림, 그리고 짧은 시 한 구절이 붙어 있답니다.

잠깐 멈춰 서서 시인의 마음을 읽어주세요.`,
        bonusTask: {
            label: "보너스 미션",
            title: "시의 제목",
            question: "공원반점 앞에 붙어 있는 시의 제목은 무엇일까요?",
            type: "text",
            answer: "잠깐 멈춰"
        }
    },
    "3": {
        id: "3",
        title: "씩스데이 골목",
        location: "씩스데이",
        meta: ["PAGE 3", "보너스"],
        story: `큼지막한 제주 감귤 상자가 쌓인 듯한 씩스데이는 지역 청년들이 만든 팝업 스토어예요.
현장 안내판에는 제주 오름의 이름이 적혀 있죠. 그중 하나를 찾아주세요.`,
        bonusTask: {
            label: "보너스 미션",
            title: "여기 제주도?",
            question: "안내판에 적힌 제주 명칭 중 '벚꽃이 가장 많이 피는 제주도의 이름'은 무엇일까요?",
            type: "text",
            answer: "큰샘의오름"
        }
    },
    "4": {
        id: "4",
        title: "패홍쉘터의 오후",
        location: "패홍쉘터",
        meta: ["PAGE 4", "보너스"],
        story: `패홍쉘터 벽면에는 김해 사람들이 사랑한 돼지고기 부위 소개가 붙어 있어요.
그중 하나는 오직 이 동네에서만 특별하게 불린답니다.`,
        bonusTask: {
            label: "보너스 미션",
            title: "맛난다 맛나",
            question: "패홍쉘터 안내판에 적힌 김해 대표 돼지고기 부위는 무엇일까요?",
            type: "text",
            answer: "뒷고기"
        }
    },
    "5": {
        id: "5",
        title: "미야상회의 약속",
        location: "미야상회",
        meta: ["PAGE 5", "메인 & 보너스"],
        story: `미야상회 냉장고에는 매주 일요일이면 비어 있는 칸이 있어요.
아버지가 목욕탕에서 돌아오는 길마다 사오던 그 음료 때문이죠.
사장님은 여전히 그 빈자리를 지켜보고 계세요.`,
        mainTask: {
            label: "메인 미션",
            title: "이 맛은?",
            question: "아버지가 목욕탕에서 오실 때마다 사 오신 음료는 무엇일까요?",
            type: "text",
            answer: "바나나맛 우유"
        },
        bonusTask: {
            label: "보너스 미션",
            title: "출시년도 퀴즈",
            question: "빙그레 ㅇㅇㅇㅇ ㅇㅇ의 출시 연도는?",
            type: "text",
            answer: "1974"
        }
    },
    "7": {
        id: "7",
        title: "능소화 포토존",
        location: "능소화 골목",
        meta: ["PAGE 7", "메인 & 보너스"],
        story: `능소화 담장이 이어진 골목에서 아버지는 늘 사진을 찍자고 하셨죠.
꽃이 없어도 여러분의 웃음이 색을 채워 줄 거예요.`,
        mainTask: {
            label: "메인 미션",
            title: "대표 포토존",
            question: "능소화 골목에서 피는 대표 꽃은 무엇일까요?",
            type: "text",
            answer: "능소화"
        },
        bonusTask: {
            label: "보너스 미션",
            title: "꽃 이름",
            question: "담장 안쪽 화분에 심어진 하얀 꽃의 이름은 무엇일까요? (힌트: 프랑스어 이름)",
            type: "text",
            answer: "아르모니"
        }
    },
    "8": {
        id: "8",
        title: "호유오우의 가격표",
        location: "호유오우",
        meta: ["PAGE 8", "보너스"],
        story: `사바나 소품이 가득한 호유오우에는 오래된 전화기 모형이 있어요.
가격표 글자가 지워져 있는데 사장님이 살짝 알려주셨어요.`,
        bonusTask: {
            label: "보너스 미션",
            title: "이건 얼마?",
            question: "사바나 전화기 모형의 가격은 얼마일까요?",
            type: "text",
            answer: "1300"
        }
    },
    "9": {
        id: "9",
        title: "카페 탱자의 밤",
        location: "카페 탱자",
        meta: ["PAGE 9", "메인 & 보너스"],
        story: `별밤 라디오 부스가 남겨진 카페 탱자에서는 지금도 DJ가 사연을 읽어줘요.
사연을 남기면 특별한 완료 QR을 받을 수 있답니다.`,
        mainTask: {
            label: "메인 미션",
            title: "별이 빛나는 봉황동",
            description: "라디오 부스에서 사연을 남기고 스태프에게 완료 QR 코드를 받아 입력하세요.",
            type: "code",
            codeHint: "완료 QR 코드를 입력하세요",
            codes: ["BH004-DONE", "STAR-NIGHT"]
        },
        bonusTask: {
            label: "보너스 미션",
            title: "벌밤지기",
            question: "탱자에 전시된 라디오 기록 중 '별이 빛나는 밤에'를 오랫동안 진행한 DJ는 누구일까요?",
            type: "text",
            answer: "이문세"
        }
    },
    "10": {
        id: "10",
        title: "방하림의 무대",
        location: "방하림",
        meta: ["PAGE 10", "메인 & 보너스"],
        story: `방하림에서는 지금도 작은 가족오락관 무대가 열립니다.
무대 옆 탁자에는 우승팀에게만 공개되는 QR 카드가 숨겨져 있어요.`,
        mainTask: {
            label: "메인 미션",
            title: "가족오락관 게임",
            description: "현장 게임을 마친 뒤 제공받은 완료 QR 코드를 입력하세요.",
            type: "code",
            codeHint: "완료 QR 코드를 입력하세요",
            codes: ["BH005-DONE", "FAMILY"]
        },
        bonusTask: {
            label: "보너스 미션",
            title: "영수증 인증",
            description: "방하림 지정 미션을 수행하고 받은 보너스 QR을 입력하세요.",
            type: "code",
            codeHint: "보너스 완료 QR 코드를 입력하세요",
            codes: ["BONUS-10"]
        }
    },
    "11": {
        id: "11",
        title: "초입길의 기록",
        location: "초입길",
        meta: ["PAGE 11", "보너스"],
        story: `초입길 아카이브에는 1980년대 별밤 사연이 빼곡히 남아 있어요.
마지막 장에는 “초입길 사장님이 직접 적어주세요”라는 문장이 적혀 있죠.`,
        bonusTask: {
            label: "보너스 미션",
            title: "누가 썼을까?",
            question: "초입길 사장님이 남긴 메시지에서 '별밤 DJ'로 언급된 인물은 누구일까요?",
            type: "text",
            answer: "초입길 사장님"
        }
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

function initMissionPage() {
    const params = new URLSearchParams(window.location.search);
    const pageId = params.get("id");
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
    renderTask("mainTask", "main", currentMission.mainTask);
    renderTask("bonusTask", "bonus", currentMission.bonusTask);
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

function renderTask(containerId, taskKey, task) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (!task) {
        container.style.display = "none";
        return;
    }
    container.style.display = "block";

    const record = getCompletion(currentMission.id, taskKey);
    const completed = !!record;

    const header = `
        <div class="task-type">${task.label || (taskKey === "main" ? "메인 미션" : "보너스 미션")}</div>
        <h3>${task.title || ""}</h3>
        ${task.description ? `<p class="task-desc">${task.description}</p>` : ""}
        ${task.question ? `<p class="task-desc"><strong>질문</strong> · ${task.question}</p>` : ""}
    `;

    let body = "";
    if (completed) {
        body = `<div class="task-status success">✓ 완료됨 · ${new Date(record.completedAt).toLocaleString()}</div>`;
    } else if (task.type === "text") {
        body = `
            <div class="task-input" data-task="${taskKey}">
                <input type="text" placeholder="${formatAnswerHint(task.answer)}">
                <button data-submit="${taskKey}">제출</button>
            </div>
        `;
    } else if (task.type === "code") {
        body = `
            <div class="task-input" data-task="${taskKey}">
                <input type="text" placeholder="${task.codeHint || "완료 QR 코드를 입력하세요"}">
                <button data-submit="${taskKey}">코드 입력</button>
            </div>
            <p class="task-hint">${task.codeHint || "현장 스태프에게서 받은 코드를 입력하세요."}</p>
        `;
    } else {
        body = `<p class="muted">준비 중인 미션입니다.</p>`;
    }

    container.innerHTML = header + body;

    if (!completed) {
        const submitBtn = container.querySelector(`button[data-submit="${taskKey}"]`);
        submitBtn?.addEventListener("click", () => handleTaskSubmit(taskKey, task));
    }
}

function handleTaskSubmit(taskKey, task) {
    const nickname = getCurrentNickname();
    if (!nickname) {
        alert("먼저 안내 페이지에서 닉네임을 등록해주세요!");
        return;
    }

    const wrapper = document.querySelector(`[data-task="${taskKey}"]`);
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

    renderTask(taskKey === "main" ? "mainTask" : "bonusTask", taskKey, task);
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

