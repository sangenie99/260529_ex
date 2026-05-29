document.addEventListener("DOMContentLoaded", main);

const STORAGE_KEY = "cozy-daily-memos";

function main() {
  const memoForm = document.querySelector("#memoWriter");
  const memoList = document.querySelector("#memoList");
  const emptyState = document.querySelector("#emptyState");
  const memoInput = document.querySelector("#memo");
  const resetButton = document.querySelector("#resetButton");
  const clearAllButton = document.querySelector("#clearAll");
  const soundToggle = document.querySelector("#soundToggle");

  if (!memoForm || !memoList || !emptyState) return;

  let memos = loadMemos();
  let audioState = {
    context: null,
    nodes: [],
    playing: false,
  };

  renderMemos();

  memoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = memoInput.value.trim();
    if (!text) return;

    memos.unshift({
      id: Date.now(),
      text,
      createdAt: new Date().toISOString(),
    });

    saveMemos();
    memoForm.reset();
    renderMemos();
    memoInput.focus();
  });

  resetButton?.addEventListener("click", () => {
    memoForm.reset();
    memoInput.focus();
  });

  clearAllButton?.addEventListener("click", () => {
    const shouldClear = confirm("모든 메모를 삭제할까요?");
    if (!shouldClear) return;
    memos = [];
    saveMemos();
    renderMemos();
  });

  soundToggle?.addEventListener("click", async () => {
    if (!audioState.playing) {
      await startAmbientSound();
      soundToggle.textContent = "음악 끄기";
    } else {
      stopAmbientSound();
      soundToggle.textContent = "음악 켜기";
    }
  });

  function renderMemos() {
    memoList.innerHTML = "";

    if (memos.length === 0) {
      emptyState.classList.add("show");
      return;
    }

    emptyState.classList.remove("show");

    memos.forEach((memo, index) => {
      const card = document.createElement("article");
      card.className = `memo-card memo-tone-${index % 3}`;

      const time = document.createElement("time");
      time.className = "memo-date";
      time.dateTime = memo.createdAt;
      time.textContent = formatDate(memo.createdAt);

      const content = document.createElement("p");
      content.className = "memo-content";
      content.textContent = memo.text;

      const actions = document.createElement("div");
      actions.className = "memo-actions";

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-btn";
      deleteButton.type = "button";
      deleteButton.textContent = "삭제";
      deleteButton.addEventListener("click", () => {
        memos = memos.filter((item) => item.id !== memo.id);
        saveMemos();
        renderMemos();
      });

      actions.append(deleteButton);
      card.append(time, content, actions);
      memoList.append(card);
    });
  }

  function saveMemos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
  }

  async function startAmbientSound() {
    if (!audioState.context) {
      audioState.context = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioState.context.state === "suspended") {
      await audioState.context.resume();
    }

    if (audioState.playing) return;

    const ctx = audioState.context;
    const master = ctx.createGain();
    master.gain.value = 0.035;
    master.connect(ctx.destination);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 520;
    filter.Q.value = 0.8;
    filter.connect(master);

    const freqs = [220, 277.18, 329.63];
    const oscillators = freqs.map((freq, index) => {
      const osc = ctx.createOscillator();
      osc.type = index === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;
      const gain = ctx.createGain();
      gain.gain.value = index === 0 ? 0.4 : 0.14;
      osc.connect(gain);
      gain.connect(filter);
      osc.start();
      return { osc, gain };
    });

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.08;
    lfoGain.gain.value = 18;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    audioState.nodes = [...oscillators, { osc: lfo, gain: lfoGain }, { gain: master, filter }];
    audioState.playing = true;
  }

  function stopAmbientSound() {
    if (!audioState.context || !audioState.playing) return;

    audioState.nodes.forEach((node) => {
      try {
        node.osc?.stop();
      } catch {
        // Ignore nodes that already stopped.
      }
      try {
        node.osc?.disconnect();
      } catch {
        // Ignore disconnected nodes.
      }
      try {
        node.gain?.disconnect();
      } catch {
        // Ignore disconnected nodes.
      }
      try {
        node.filter?.disconnect();
      } catch {
        // Ignore disconnected nodes.
      }
    });

    audioState.nodes = [];
    audioState.playing = false;
  }
}

function loadMemos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function formatDate(value) {
  return new Date(value).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
