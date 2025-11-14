const APP_KEY = 'bonghwang_memories_v2';
const ADMIN_PASSWORD = '1935';
const ADMIN_SESSION_KEY = 'bonghwang_admin_access';
const typingSpeed = 25;
let progressBannerEl = null;

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
            description: "미션을 완료하고 스태프에게 완료 코드를 받으세요.",
            type: "code",
            codeHint: "완료 코드를 입력하세요",
            codes: ["BLOOM"]
        },
        bonusTasks: [{
            key: "bonus-10",
            label: "보너스 미션",
            title: "궁금한 장식",
            question: "카페 중앙 천장에 걸린, 악몽을 막아준다는 장식의 이름은 무엇일까요?",
            type: "text",
            answer: "드림캐처"
        }]
    },
    "2": {
        id: "2",
        title: "공원반점의 쉼",
        location: "공원반점 앞",
        meta: ["PAGE 2", "보너스"],
        story: `공원방점의 주방장 사장님은 시인이세요. 마을에서 다양한 문학활동도 하시지요.공원반점 벽면에는 시가 적혀있어요.
        빨간색 신호등. 
        풀린 신발끈. 
        길냥이. 
        들꽃. 
        시.`,
        bonusTasks: [{
            key: "bonus-2",
            label: "보너스 미션",
            title: "시의 제목",
            question: "공원반점 담벼락에 적혀 있는 이 시의 제목은 무엇일까요?",
            type: "text",
            answer: "멈추게 하는 것"
        }]
    },
    "3": {
        id: "3",
        title: "싹스데이 골목",
        location: "싹스데이",
        meta: ["PAGE 3", "보너스"],
        story: `싹스데이는 여러 종류의 양말을 판매하고 있습니다. 그중에서 특색있는 양말을 찾아보세요.`,
        bonusTasks: [{
            key: "bonus-3",
            label: "보너스 미션",
            title: "여기는 제주도?",
            question: "'벚꽃과 유채꽃이 많은 제주도의 오름 이름은?' 정답은 이 안에 있습니다.",
            type: "text",
            answer: "큰샘의오름"
        }]
    },
    "4": {
        id: "4",
        title: "패총쉼터의 오후",
        location: "패총쉼터",
        meta: ["PAGE 4", "보너스"],
        story: `패총쉼터는 오래 전부터 마을 분들의 쉼터 역할을 했습니다.
그리고 김해에서 유명한 그것을 홍보하기 위한 표지판에 새로 세워졌어요.`,
        bonusTasks: [{
            key: "bonus-4",
            label: "보너스 미션",
            title: "맛난다 맛나",
            question: "김해 부원동에는 ㅇㅇㅇ 거리가 있습니다. 김해에서 유명한 돼지고기의 이 부위는?",
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
        title: "봉리단길 포토존",
        location: "포토존 골목",
        meta: ["PAGE 7", "메인 & 보너스"],
        story: `세 번째 소원이에요.

'예쁜 사진 찍어주기'

여기 능소화 고택이에요.

어렸을 때 아버지가 여기서 사진 찍자고 하셨어요.
"아빠가 제일 좋아하는 꽃이야"라고 하시면서요.

ㅇㅇㅇ는 여름에 피는 꽃인데
지금은 꽃이 없네요.

예전엔 봉황동 곳곳에 있었는데,
이제는 몇 집 남지 않았대요.

저와 아버지가 같이 찍은 사진이 없는 게 아쉬워요.

아버지는 제와 함께 사진 찍기를
계속 기다리셨을 거예요.

지금은 겨울이라 꽃이 다 떨어졌지만 여름이 되면 또 다시 필거에요.
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
            question: "봉황동의 유명한 능소화 포토존 앞에도 꽃이 있습니다. 그 꽃집의 이름은?",
            type: "text",
            answer: "아르모니"
        }]
    },
    "8": {
        id: "8",
        title: "샤브맛집 호우오우",
        location: "호우오우",
        meta: ["PAGE 8", "보너스"],
        story: `아직 동네에 살고 있는 지영이가 추천해 준 집이에요. 혼자 식사하기에도 좋데요.`,
        bonusTasks: [{
            key: "bonus-8",
            label: "보너스 미션",
            title: "이건 얼마?",
            question: "호우오우 샤브샤브의 가격은 앤화로 얼마일까요?",
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
            title: "별이 빛나는 봉황동 밤에",
            description: "미션을 완료하고 스태프에게 완료 코드를 받으세요.",
            type: "code",
            codeHint: "완료 코드를 입력하세요",
            codes: ["STARLIGHT"]
        },
        bonusTasks: [
            {
                key: "bonus-6",
                label: "보너스 미션 6",
                title: "부모님 전상서",
                description: "미션을 완료하고 스태프에게 완료 코드를 받으세요.",
                type: "code",
                codeHint: "완료 코드를 입력하세요",
                codes: ["LETTER"]
            },
            {
                key: "bonus-16",
                label: "보너스 미션",
                title: "별밤",
                question: "8090 인기 라디오프로그램 '별이 빛나는 밤에'에서 제일 오랫동안 DJ를 맡은 별밤지기는?",
                type: "text",
                answer: "이문세"
            }
        ]
    },
    "10": {
        id: "10",
        title: "가족오락관",
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
            description: "미션을 완료하고 스태프에게 완료 코드를 받으세요.",
            type: "code",
            codeHint: "완료 코드를 입력하세요",
            codes: ["UNITY"]
        },
        bonusTasks: [{
            key: "bonus-15",
            label: "보너스 미션",
            title: "영수증 인증",
            description: "미션을 완료하고 스태프에게 완료 코드를 받으세요.",
            type: "code",
            codeHint: "완료 코드를 입력하세요",
            codes: ["RECEIPT"]
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

const mainMissionOrder = ["1", "5", "7", "9", "10"];

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
    updateGlobalProgressBanner();
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
    updateGlobalProgressBanner();
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

function getProgressCounts(nickname) {
    const state = loadState();
    const player = state.players[nickname];
    if (!player || !player.completions) {
        return { main: 0, bonus: 0 };
    }
    let main = 0;
    let bonus = 0;
    Object.values(player.completions).forEach(tasks => {
        Object.keys(tasks).forEach(key => {
            if (key.startsWith("main")) main += 1;
            else if (key.startsWith("bonus")) bonus += 1;
        });
    });
    return { main, bonus };
}

function renderGlobalProgressBanner() {
    if (progressBannerEl || !document.body) return;
    progressBannerEl = document.createElement("div");
    progressBannerEl.id = "globalProgress";
    progressBannerEl.className = "progress-banner";
    document.body.prepend(progressBannerEl);
    document.body.classList.add("has-progress-banner");
    updateGlobalProgressBanner();
}

function updateGlobalProgressBanner() {
    if (!progressBannerEl) return;
    const nickname = getCurrentNickname();
    if (!nickname) {
        progressBannerEl.innerHTML = `<span>닉네임을 저장하면 진행 현황이 여기 표시됩니다.</span>`;
        return;
    }
    const counts = getProgressCounts(nickname);
    progressBannerEl.innerHTML = `
        <span class="progress-name">${nickname}</span>
        <span>메인미션 ${counts.main}개</span>
        <span>보너스미션 ${counts.bonus}개</span>
    `;
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
let mainMissionLocked = false;

function initMissionPage() {
    const params = new URLSearchParams(window.location.search);
    const pageId = params.get("id");
    completionToken = params.get("token");
    currentMission = missionPages[pageId];
    mainMissionLocked = shouldLockMainMission(pageId);

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
    const storyBox = document.getElementById("storyBox");
    if (mainMissionLocked) {
        if (storyBox) {
            storyBox.textContent = "메인미션은 1단계부터 순서대로 진행해주세요.";
            storyBox.classList.add("story-locked");
        }
        skipBtn?.style.setProperty("display", "none");
    } else {
        storyBox?.classList.remove("story-locked");
        skipBtn?.addEventListener("click", () => {
            clearTimeout(typingTimer);
            if (storyBox) {
                storyBox.textContent = currentMission.story;
            }
            skipBtn.style.display = "none";
        });
        typeStory(currentMission.story);
    }
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
    const isMainSection = baseKey === "main";
    const tasks = Array.isArray(taskData) ? taskData : [taskData];
    if (!tasks.length) {
        section.style.display = "none";
        return;
    }
    if (isMainSection && mainMissionLocked) {
        section.style.display = "block";
        section.innerHTML = `
            <article class="task-block task-main locked">
                <div class="task-type is-main">메인 미션</div>
                <p class="task-desc">메인미션은 1단계부터 시작하세요.</p>
            </article>
        `;
        return;
    }
    section.style.display = "block";
    tasks.forEach((task, index) => {
        const key = task.key || (tasks.length === 1 ? baseKey : `${baseKey}-${index + 1}`);
        const card = buildTaskCard(key, task, baseKey);
        section.appendChild(card);
    });
}

function buildTaskCard(taskKey, task, baseKey) {
    const wrapper = document.createElement("article");
    wrapper.className = `task-block ${baseKey === "main" ? "task-main" : "task-bonus"}`;
    let record = getCompletion(currentMission.id, taskKey);
    if (!record) {
        record = tryCompleteWithToken(taskKey, task);
    }

    const pieces = [];
    pieces.push(`<div class="task-type ${baseKey === "main" ? "is-main" : "is-bonus"}">${task.label || (baseKey === "main" ? "메인 미션" : "보너스 미션")}</div>`);
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
                <input type="text" placeholder="${task.codeHint || "완료 코드를 입력하세요"}">
                <button data-submit>코드 입력</button>
            </div>
            <p class="task-hint">${task.codeHint || "현장에서 받은 완료 코드를 입력하세요."}</p>
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

function shouldLockMainMission(pageId) {
    const mission = missionPages[pageId];
    if (!mission?.mainTask) return false;
    const idx = mainMissionOrder.indexOf(pageId);
    if (idx <= 0) return false;
    const prevId = mainMissionOrder[idx - 1];
    const prevMission = missionPages[prevId];
    if (!prevMission?.mainTask) return false;
    const prevKey = prevMission.mainTask.key || "main";
    return !getCompletion(prevId, prevKey);
}

function goToIntro() {
    window.location.href = "index.html";
}

/* Admin page -------------------------------------------------- */

function initAdminPage() {
    enforceAdminPassword(loadAdminDashboard);
}

function enforceAdminPassword(onAuthorized) {
    const gate = document.getElementById("adminGate");
    if (!gate) {
        onAuthorized?.();
        return;
    }

    const saved = sessionStorage.getItem(ADMIN_SESSION_KEY);
    if (saved === "granted") {
        gate.remove();
        onAuthorized?.();
        return;
    }

    const form = gate.querySelector("form");
    const input = gate.querySelector("input");
    const error = gate.querySelector(".gate-error");
    const cancelBtn = gate.querySelector("[data-cancel]");

    const grantAccess = () => {
        sessionStorage.setItem(ADMIN_SESSION_KEY, "granted");
        gate.remove();
        onAuthorized?.();
    };

    form?.addEventListener("submit", event => {
        event.preventDefault();
        if (input?.value.trim() === ADMIN_PASSWORD) {
            grantAccess();
        } else {
            if (error) {
                error.textContent = "비밀번호가 올바르지 않습니다.";
                error.style.display = "block";
            }
            if (input) {
                input.value = "";
                input.focus();
            }
        }
    });

    cancelBtn?.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}

function loadAdminDashboard() {
    const state = loadState();
    const tableBody = document.querySelector("#adminTable tbody");
    const summary = document.getElementById("adminSummary");
    const exportBtn = document.getElementById("exportButton");
    const clearBtn = document.getElementById("clearDataButton");

    const players = Object.values(state.players);
    if (!players.length) {
        if (tableBody) {
            tableBody.innerHTML = `<tr><td colspan="3" class="muted">저장된 기록이 없습니다.</td></tr>`;
        }
        if (summary) {
            summary.textContent = "참여 기록이 없습니다.";
        }
    } else {
        if (tableBody) {
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
        }

        if (summary) {
            summary.textContent = `총 ${players.length}명의 기록이 저장되어 있습니다.`;
        }
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
    renderGlobalProgressBanner();
    if (page === "index") initIntroPage();
    if (page === "mission") initMissionPage();
    if (page === "admin") initAdminPage();
});

