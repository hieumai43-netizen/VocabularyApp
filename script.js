let currentIndex = 0;
let filteredData = [...vocabularyData];

const categorySelect = document.getElementById("categorySelect");
const modeSelect = document.getElementById("modeSelect");
const optionBtn = document.getElementById("optionBtn");
const optionBox = document.getElementById("optionBox");
const randomCheck = document.getElementById("randomCheck");
const speedSelect = document.getElementById("speedSelect");

function initCategory() {
  const categories = ["Tất cả danh mục", ...new Set(vocabularyData.map(w => w.category))];

  categorySelect.innerHTML = categories.map(c => `
    <option value="${c}">☑ ${c}</option>
  `).join("");
}

function filterCategory() {
  const selected = categorySelect.value;

  if (selected === "Tất cả danh mục") {
    filteredData = [...vocabularyData];
  } else {
    filteredData = vocabularyData.filter(w => w.category === selected);
  }

  currentIndex = 0;
  renderCard();
}

function getMainLanguage(word) {
  const mode = modeSelect.value;

  if (mode === "jp") {
    return {
      text: word.jp,
      reading: word.kana,
      lang: "ja-JP"
    };
  }

  if (mode === "en") {
    return {
      text: word.en,
      reading: word.ipa,
      lang: "en-US"
    };
  }

  if (mode === "cn") {
    return {
      text: word.cn,
      reading: word.pinyin,
      lang: "zh-CN"
    };
  }

  return {
    text: word.ko,
    reading: word.koreanReading,
    lang: "ko-KR"
  };
}

function renderCard() {
  const word = filteredData[currentIndex];
  if (!word) return;

  const main = getMainLanguage(word);

  document.getElementById("mainWord").textContent = main.text;
  document.getElementById("mainReading").textContent = main.reading;

  document.getElementById("countBadge").textContent = `${currentIndex + 1} / ${filteredData.length}`;
  document.getElementById("progressText").textContent = `${currentIndex + 1} / ${filteredData.length} từ`;
  document.getElementById("bottomCount").textContent = `Từ ${currentIndex + 1} / ${filteredData.length}`;

  const percent = Math.round(((currentIndex + 1) / filteredData.length) * 100);
  document.getElementById("percentText").textContent = `${percent}%`;
  document.getElementById("progressBar").style.width = `${percent}%`;

  document.getElementById("wordTable").innerHTML = `
    <div>
      <span class="tag vi">VI</span>
      <b>${word.vi}</b>
      <span></span>
      <span></span>
    </div>

    <div>
      <span class="tag ja">JA</span>
      <span>${word.jp}</span>
      <span>${word.kana}</span>
      <button onclick="speak('${word.jp}', 'ja-JP')">🔊</button>
    </div>

    <div>
      <span class="tag en">EN</span>
      <span>${word.en}</span>
      <span>${word.ipa}</span>
      <button onclick="speak('${word.en}', 'en-US')">🔊</button>
    </div>

    <div>
      <span class="tag cn">CN</span>
      <span>${word.cn}</span>
      <span>${word.pinyin}</span>
      <button onclick="speak('${word.cn}', 'zh-CN')">🔊</button>
    </div>

    <div>
      <span class="tag ko">KO</span>
      <span>${word.ko}</span>
      <span>${word.koreanReading}</span>
      <button onclick="speak('${word.ko}', 'ko-KR')">🔊</button>
    </div>
  `;

  document.getElementById("exampleList").innerHTML = `
    <p>
      <span class="tag vi">VI</span>
      <span>${word.examples.vi}</span>
    </p>

    <p>
      <span class="tag ja">JA</span>
      <span>${word.examples.jp}</span>
      <button onclick="speak('${word.examples.jp}', 'ja-JP')">🔊</button>
    </p>

    <p>
      <span class="tag en">EN</span>
      <span>${word.examples.en}</span>
      <button onclick="speak('${word.examples.en}', 'en-US')">🔊</button>
    </p>

    <p>
      <span class="tag cn">CN</span>
      <span>${word.examples.cn}</span>
      <button onclick="speak('${word.examples.cn}', 'zh-CN')">🔊</button>
    </p>

    <p>
      <span class="tag ko">KO</span>
      <span>${word.examples.ko}</span>
      <button onclick="speak('${word.examples.ko}', 'ko-KR')">🔊</button>
    </p>
  `;
}

function speak(text, lang) {
  speechSynthesis.cancel();

  const voice = new SpeechSynthesisUtterance(text);
  voice.lang = lang;
  voice.rate = Number(speedSelect.value);

  speechSynthesis.speak(voice);
}

function speakMain() {
  const word = filteredData[currentIndex];
  const main = getMainLanguage(word);

  speak(main.text, main.lang);
}

function nextCard() {
  if (randomCheck.checked) {
    currentIndex = Math.floor(Math.random() * filteredData.length);
  } else {
    currentIndex = (currentIndex + 1) % filteredData.length;
  }

  resetStatus();
  renderCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + filteredData.length) % filteredData.length;

  resetStatus();
  renderCard();
}

function markGood() {
  const badge = document.getElementById("statusBadge");
  badge.textContent = "Đã nhớ";
  badge.className = "remembered";
}

function markBad() {
  resetStatus();
}

function resetStatus() {
  const badge = document.getElementById("statusBadge");
  badge.textContent = "Chưa nhớ";
  badge.className = "";
}

function reviewLater() {
  nextCard();
}

optionBtn.addEventListener("click", () => {
  optionBox.classList.toggle("hidden");
});

categorySelect.addEventListener("change", filterCategory);

modeSelect.addEventListener("change", () => {
  renderCard();
});

initCategory();
renderCard();