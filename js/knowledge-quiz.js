(() => {
  const questions = [
    { q: "LoLで勝利するための最終目標はどれ？", options: ["敵チームの主要な防衛施設を順に破壊する", "敵のネクサスを破壊する", "相手より先に一定数のキルを取る", "ドラゴンやバロンを多く獲得する"], answer: 1, explanation: "最終目標は敵のネクサスを破壊することです。キルやオブジェクトは、その目標につなげるための手段です。" },
    { q: "ミニオンを倒して得られる主なメリットは？", options: ["近くにいれば必ず経験値とゴールドの両方を得られる", "ゴールドや経験値を得て、アイテム購入やレベルアップにつなげる", "自分のレーンにいる敵の経験値獲得を止められる", "一定数倒すと味方全員の能力が一時的に上がる"], answer: 1, explanation: "ミニオンから得られるゴールドや経験値は、アイテム購入やレベルアップにつながります。なお、ゴールド獲得にはラストヒットが重要で、経験値は近くにいることが基本です。" },
    { q: "敵チャンピオンがマップ上で見えなくなったとき、基本的に大切なのは？", options: ["最後に見えたレーンの味方が処理していると考える", "次に出現するミニオンの位置を優先して確認する", "ミニマップや視界を確認し、移動先を警戒する", "敵が見えるまで自分のレーンで攻撃を続ける"], answer: 2, explanation: "見えていない敵が別のレーンへ移動している可能性があります。視界やミニマップ、味方からの情報を使って危険を予測します。" },
    { q: "ジャングルの主な役割として適切なのは？", options: ["自分のキャンプを効率よく倒すことを最優先し、レーンには基本的に関わらない", "マップ全体を見て、レーン支援やオブジェクトを判断する", "各レーンのミニオンを定期的に処理し、味方の成長を補う", "序盤はガンクを繰り返し、オブジェクトは後回しにする"], answer: 1, explanation: "ジャングラーはジャングルで成長しながら、ガンクやオブジェクトなどマップ全体に関わる判断をします。ファームと支援のバランスが大切です。" },
    { q: "サポートの仕事として適切なのは？", options: ["ADCの成長を優先し、試合中は基本的にボットレーンから離れない", "視界を確保し、味方の保護や仕掛けを助ける", "味方の火力が足りない場合は、常に自分がキルを取る", "味方が戦闘を始めたら、スキルを温存して後から合流する"], answer: 1, explanation: "サポートは視界、保護、妨害、仕掛けなどを通じて味方が動きやすい状況を作ります。状況に応じてロームや戦闘への参加も判断します。" },
    { q: "集団戦で、遠距離からダメージを出すチャンピオンが意識したいことは？", options: ["最も体力の低い敵を優先し、距離を詰めて倒し切る", "味方のタンクが攻撃している敵に必ず攻撃を集中する", "危険な敵との距離を意識し、生き残れる位置から攻撃する", "敵の後衛に届かない場合は、前衛を無視して移動する"], answer: 2, explanation: "ダメージを出し続けるには、生き残ることと位置取りが重要です。危険な敵や味方の状況を見て、攻撃できる対象を選びます。" },
    { q: "タワーを攻略するときに役立つ考え方は？", options: ["味方が近くにいれば、ミニオンがいなくても攻撃を続ける", "ミニオンや味方と協力し、敵の反撃にも備えて進む", "敵が見えないときは、人数差に関係なく攻撃を続ける", "タワーを削れるなら、他のレーンやオブジェクトは考慮しない"], answer: 1, explanation: "ミニオンや味方と協力して進むことで、タワーから受ける攻撃や敵の反撃に対応しやすくなります。敵の位置やミニマップも確認しましょう。" },
    { q: "CC（クラウドコントロール）とは何？", options: ["敵の攻撃力や防御力を一時的に下げる効果全般", "敵の移動や行動を制限する効果", "味方の移動速度や攻撃速度を高める効果", "敵の視界を奪い、マップ上から見えなくする効果全般"], answer: 1, explanation: "スタンやスネアなど、敵の移動や行動を制限する効果を指します。スロウやノックアップなども代表例で、具体的な効果はスキルによって異なります。" },
    { q: "ドラゴンなどのオブジェクトに向かう前に大切なことは？", options: ["先に攻撃を始め、敵が来たら味方に合流してもらう", "オブジェクトの残り体力を見て、味方の位置は後から確認する", "周辺の視界や味方の位置、体力、人数差を確認して準備する", "敵ジャングラーが見えなければ、味方の人数に関係なく開始する"], answer: 2, explanation: "オブジェクト周辺の視界、味方の位置、体力、人数差などを確認すると、戦うかどうかを判断しやすくなります。" },
    { q: "LoLでゴールドを得る主な意味は？", options: ["レベルアップに必要な経験値を補い、スキルを強化する", "アイテムを購入してチャンピオンを強化する", "味方のタワーやネクサスの耐久力を回復する", "リコール後に体力とマナを通常より多く回復する"], answer: 1, explanation: "ゴールドはアイテム購入に使われ、チャンピオンの能力を高めます。経験値によるレベルアップとは別の成長要素です。" }
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
