(() => {
  const questions = [
    { q: "LoLで勝利するための最終目標はどれ？", options: ["敵チャンピオンを全員倒し続ける", "敵のネクサスを破壊する", "ドラゴンをすべて倒す", "最も多くのゴールドを集める"], answer: 1, explanation: "最終目標は敵のネクサスを破壊することです。キルやオブジェクトは、その目標につなげるための手段です。" },
    { q: "ミニオンを倒して得られる主なメリットは？", options: ["ゴールドを得て、成長につなげる", "必ず試合に勝てる", "敵の視界がすべて消える", "味方全員のレベルが上がる"], answer: 0, explanation: "ミニオンから得られるゴールドや経験値は、アイテム購入やレベルアップにつながります。" },
    { q: "敵チャンピオンがマップ上で見えなくなったとき、基本的に大切なのは？", options: ["必ず敵はリコールしたと考える", "ミニマップや視界を確認し、位置を警戒する", "味方のタワーから離れて追いかける", "何も考えず同じ場所に留まる"], answer: 1, explanation: "見えていない敵が別のレーンへ移動している可能性があります。視界やミニマップ、味方からの情報を使って危険を予測します。" },
    { q: "ジャングルの主な役割として適切なのは？", options: ["常にトップレーンだけにいる", "マップ全体を見て、各レーンの支援やオブジェクトを判断する", "味方のミニオンをすべて倒す", "タワーを守ることだけに集中する"], answer: 1, explanation: "ジャングラーはジャングルで成長しながら、ガンクやオブジェクトなどマップ全体に関わる判断をします。" },
    { q: "サポートの仕事として適切なのは？", options: ["自分のキル数だけを増やす", "視界を確保し、味方の保護や仕掛けを助ける", "常に味方から離れて行動する", "アイテムを一切買わない"], answer: 1, explanation: "サポートは視界、保護、妨害、仕掛けなどを通じて味方が動きやすい状況を作ります。" },
    { q: "集団戦で、遠距離からダメージを出すチャンピオンが意識したいことは？", options: ["敵の真ん中へ必ず突っ込む", "安全な位置を保ちながら攻撃する", "味方の位置を確認しない", "体力が少ない敵だけを追って深追いする"], answer: 1, explanation: "ダメージを出し続けるには、生き残ることと位置取りが重要です。危険な敵や味方の状況を見て攻撃対象を選びます。" },
    { q: "タワーを攻略するときに役立つ考え方は？", options: ["ミニオンや味方と協力して進む", "敵が近くても一人で必ず攻撃する", "ミニマップを見ない", "タワーは勝利条件と関係がない"], answer: 0, explanation: "ミニオンや味方と協力して進むことで、タワーから受ける攻撃や敵の反撃に対応しやすくなります。" },
    { q: "CC（クラウドコントロール）とは何？", options: ["ゴールドを増やすアイテム", "敵の移動や行動を制限する効果", "マップの別名", "試合後の評価画面"], answer: 1, explanation: "スタンやスネアなど、敵の移動や行動を制限する効果を指します。具体的な効果はスキルによって異なります。" },
    { q: "ドラゴンなどのオブジェクトに向かう前に大切なことは？", options: ["味方の位置や視界を確認し、準備する", "必ず一人で先に攻撃する", "他のレーンの状況は無視する", "体力や人数差を確認しない"], answer: 0, explanation: "オブジェクト周辺の視界、味方の位置、体力、人数差などを確認すると、戦うかどうかを判断しやすくなります。" },
    { q: "LoLでゴールドを得る主な意味は？", options: ["チャットの色を変える", "アイテムを購入してチャンピオンを強化する", "敵のレベルを下げる", "自動的にネクサスを破壊する"], answer: 1, explanation: "ゴールドはアイテム購入に使われ、チャンピオンの能力を高めます。どのアイテムが適切かはチャンピオンや試合状況によって変わります。" }
  ];

  const content = document.getElementById("quiz-content");
  const counter = document.getElementById("quiz-counter");
  const scoreLive = document.getElementById("quiz-score-live");
  const nextBtn = document.getElementById("quiz-next");
  const restartBtn = document.getElementById("quiz-restart");
  const resultEl = document.getElementById("quiz-result");
  if (!content || !nextBtn) return;

  let order = [];
  let current = 0;
  let selected = null;
  let answers = [];

  function startQuiz() {
    order = questions.map((_, i) => i);
    // 初回は出題順を固定。復習時も内容を比較しやすくする。
    current = 0;
    selected = null;
    answers = [];
    resultEl.hidden = true;
    restartBtn.hidden = true;
    nextBtn.hidden = false;
    nextBtn.disabled = true;
    nextBtn.textContent = "回答する";
    renderQuestion();
  }

  function renderQuestion() {
    const q = questions[order[current]];
    counter.textContent = `問題 ${current + 1} / ${questions.length}`;
    scoreLive.textContent = `回答済み ${answers.length} 問`;
    content.innerHTML = `<h3 class="quiz-question"></h3><div class="answer-options quiz-options"></div><div id="quiz-feedback" class="quiz-feedback" hidden></div>`;
    content.querySelector(".quiz-question").textContent = q.q;
    const options = content.querySelector(".quiz-options");
    q.options.forEach((text, i) => {
      const label = document.createElement("label");
      label.className = "answer-option quiz-option";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "quiz-answer";
      input.value = i;
      input.addEventListener("change", () => {
        selected = i;
        nextBtn.disabled = false;
      });
      const span = document.createElement("span");
      span.textContent = text;
      label.append(input, span);
      options.append(label);
    });
  }

  function submitAnswer() {
    const q = questions[order[current]];
    answers.push({ questionIndex: order[current], selected, correct: selected === q.answer });
    content.querySelectorAll("input").forEach(input => input.disabled = true);
    content.querySelectorAll(".quiz-option").forEach((label, i) => {
      if (i === q.answer) label.classList.add("is-correct");
      else if (i === selected) label.classList.add("is-wrong");
    });
    const feedback = document.getElementById("quiz-feedback");
    feedback.hidden = false;
    const strong = document.createElement("strong");
    strong.textContent = selected === q.answer ? "正解！" : "不正解";
    const p = document.createElement("p");
    p.textContent = q.explanation;
    feedback.append(strong, p);
    nextBtn.textContent = current === questions.length - 1 ? "結果を見る" : "次の問題";
    nextBtn.dataset.state = "answered";
    scoreLive.textContent = `回答済み ${answers.length} 問`;
  }

  function showResults() {
    const correct = answers.filter(a => a.correct).length;
    content.hidden = true;
    nextBtn.hidden = true;
    restartBtn.hidden = false;
    resultEl.hidden = false;
    resultEl.innerHTML = `<p class="eyebrow">QUIZ COMPLETE</p><h3 class="result-heading"></h3><p class="result-note">間違えた問題は解説を読み返して、基本の考え方を確認しましょう。</p><div id="quiz-review"></div>`;
    resultEl.querySelector("h3").textContent = `${questions.length}問中 ${correct}問正解`;
    const review = resultEl.querySelector("#quiz-review");
    answers.forEach((a, i) => {
      const q = questions[a.questionIndex];
      const item = document.createElement("div");
      item.className = "quiz-feedback";
      const strong = document.createElement("strong");
      strong.textContent = `${i + 1}. ${a.correct ? "正解" : "要復習"}：${q.q}`;
      const p = document.createElement("p");
      p.textContent = `正解：${q.options[q.answer]}。${q.explanation}`;
      item.append(strong, p);
      review.append(item);
    });
    counter.textContent = "結果";
    scoreLive.textContent = `正答率 ${Math.round(correct / questions.length * 100)}%`;
  }

  nextBtn.addEventListener("click", () => {
    if (nextBtn.dataset.state === "answered") {
      if (current < questions.length - 1) {
        current++;
        selected = null;
        nextBtn.dataset.state = "";
        nextBtn.textContent = "回答する";
        nextBtn.disabled = true;
        renderQuestion();
      } else {
        showResults();
      }
    } else {
      if (selected === null) return;
      submitAnswer();
    }
  });
  restartBtn.addEventListener("click", () => {
    content.hidden = false;
    nextBtn.dataset.state = "";
    startQuiz();
  });
  startQuiz();
})();
