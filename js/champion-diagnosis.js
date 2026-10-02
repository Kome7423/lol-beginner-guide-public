(() => {
  const questions = [
    {
      title: "どんな戦い方が好きですか？",
      hint: "一番近いものを選んでください。",
      options: [
        { label: "前に出て、味方を守りたい", value: "frontline" },
        { label: "敵を一気に倒したい", value: "burst" },
        { label: "遠くから継続的に攻撃したい", value: "ranged" },
        { label: "回復や妨害で味方を助けたい", value: "utility" }
      ]
    },
    {
      title: "試合中、どんな役割に惹かれますか？",
      hint: "理想のプレイをイメージして選びましょう。",
      options: [
        { label: "最初に仕掛けて、戦闘のきっかけを作る", value: "engage" },
        { label: "相手の隙を見て、重要な敵を狙う", value: "pick" },
        { label: "安全な位置からダメージを出し続ける", value: "dps" },
        { label: "味方を守り、戦いやすい状況を作る", value: "protect" }
      ]
    },
    {
      title: "操作の難しさはどれくらいが好み？",
      hint: "最初は簡単なチャンピオンから始めても、後で好みが変わっても大丈夫です。",
      options: [
        { label: "まずはシンプルな操作から", value: "easy" },
        { label: "少し練習が必要でも大丈夫", value: "medium" },
        { label: "難しくても、使いこなす楽しさがほしい", value: "hard" }
      ]
    },
    {
      title: "どのロールに興味がありますか？",
      hint: "まだ決まっていなければ「こだわらない」を選びましょう。",
      options: [
        { label: "TOP：主にトップレーン", value: "TOP" },
        { label: "JG：ジャングルを回り、各レーンを助ける", value: "JG" },
        { label: "MID：中央レーン", value: "MID" },
        { label: "ADC：主にボットで継続火力を出す", value: "ADC" },
        { label: "SUP：味方を支援する", value: "SUP" },
        { label: "まだ決まっていない", value: "ANY" }
      ]
    },
    {
      title: "集団戦では、どんな動きができるとうれしい？",
      hint: "複数の敵と味方が入り乱れる場面を想像してください。",
      options: [
        { label: "先に仕掛けて、味方が戦える流れを作る", value: "engage" },
        { label: "危険な敵を見つけて、行動を止める", value: "pick" },
        { label: "距離を保ち、攻撃を続けてダメージを出す", value: "dps" },
        { label: "味方を守ったり、回復・強化したりする", value: "protect" }
      ]
    },
    {
      title: "試合でどんな手応えを感じたい？",
      hint: "どれも勝利につながる大切な貢献です。",
      options: [
        { label: "自分が前に立ち、敵の攻撃を受け止める", value: "frontline" },
        { label: "一瞬のチャンスで大きなダメージを与える", value: "burst" },
        { label: "攻撃を当て続け、少しずつ有利を広げる", value: "ranged" },
        { label: "味方が動きやすいように支援や妨害をする", value: "utility" }
      ]
    },
    {
      title: "チャンピオンを練習するとき、何を重視したい？",
      hint: "今の気分に近いものを選んでください。",
      options: [
        { label: "まずは基本を覚え、試合全体を見る余裕を作る", value: "easy" },
        { label: "基本を押さえつつ、少しずつ技術を増やす", value: "medium" },
        { label: "難しい操作やコンボを練習して極めたい", value: "hard" }
      ]
    },
    {
      title: "味方と連携するとき、どんな役回りが好み？",
      hint: "ソロで行動する場面もありますが、得意にしたい貢献を選びましょう。",
      options: [
        { label: "味方が動き出す合図を作る", value: "engage" },
        { label: "味方を狙う敵を追い払い、守る", value: "protect" },
        { label: "敵の重要なチャンピオンを捕まえる", value: "pick" },
        { label: "味方の攻撃に合わせて火力を重ねる", value: "dps" }
      ]
    }
  ];

  // 診断はプレイスタイルの提案です。現在の勝率やパッチ別の強さを示すものではありません。
  const champions = [
    { name: "レオナ", roles: ["SUP"], style: ["frontline", "engage"], difficulty: "easy", desc: "耐久力を活かして前に出て、敵を妨害しながら戦闘を始めるタンク型サポート。" },
    { name: "マルファイト", roles: ["TOP"], style: ["frontline", "engage"], difficulty: "easy", desc: "耐久力を活かし、集団戦で敵に仕掛ける役割を学びやすいチャンピオン。" },
    { name: "ガレン", roles: ["TOP"], style: ["frontline", "burst"], difficulty: "easy", desc: "比較的シンプルな操作で、近接戦闘やレーンの基本を練習しやすい。" },
    { name: "アムム", roles: ["JG", "SUP"], style: ["frontline", "engage", "protect"], difficulty: "easy", desc: "敵を足止めして集団戦を助ける。ジャングルやサポートの基礎を学ぶ候補。" },
    { name: "ラックス", roles: ["MID", "SUP"], style: ["burst", "ranged", "pick"], difficulty: "easy", desc: "遠距離からスキルを当て、敵を妨害したりダメージを出したりする。" },
    { name: "マルザハール", roles: ["MID"], style: ["ranged", "pick"], difficulty: "easy", desc: "相手の動きを止める手段を持ち、距離を取りながら戦うスタイル。" },
    { name: "ミス・フォーチュン", roles: ["ADC"], style: ["ranged", "dps", "burst"], difficulty: "easy", desc: "遠距離攻撃と範囲攻撃を活かす。安全な位置取りを学ぶ候補。" },
    { name: "アッシュ", roles: ["ADC", "SUP"], style: ["ranged", "dps", "protect"], difficulty: "easy", desc: "通常攻撃による継続ダメージや、敵を遅くする効果、情報を得る手段を学べる。" },
    { name: "ソラカ", roles: ["SUP"], style: ["utility", "protect"], difficulty: "easy", desc: "回復を通じて味方を支える。味方との距離や安全な位置取りが重要。" },
    { name: "ソナ", roles: ["SUP"], style: ["utility", "protect"], difficulty: "easy", desc: "味方を支援し、集団戦で回復や強化を活かすスタイル。" },
    { name: "セラフィーン", roles: ["MID", "SUP", "ADC"], style: ["utility", "ranged", "protect"], difficulty: "medium", desc: "遠距離スキルや味方との連携を活かし、支援と範囲攻撃を両立する。" },
    { name: "モルガナ", roles: ["SUP", "MID"], style: ["utility", "pick", "protect"], difficulty: "medium", desc: "敵を足止めしたり、味方を妨害効果から守ったりする。" },
    { name: "ノーチラス", roles: ["SUP"], style: ["frontline", "engage", "pick"], difficulty: "easy", desc: "敵を捕まえる能力を活かし、味方と連携して戦闘を始める。" },
    { name: "シン・ジャオ", roles: ["JG"], style: ["frontline", "engage", "burst"], difficulty: "medium", desc: "近接戦闘を得意とし、機会を見て敵に仕掛けるジャングラー。" },
    { name: "ワーウィック", roles: ["JG", "TOP"], style: ["frontline", "pick"], difficulty: "easy", desc: "相手を追いかける戦い方が特徴。ジャングルの基本を学ぶ候補。" },
    { name: "アニー", roles: ["MID", "SUP"], style: ["burst", "pick"], difficulty: "easy", desc: "スキルの使いどころを考えながら、相手に大きなダメージを与える。" },
    { name: "オリアナ", roles: ["MID"], style: ["ranged", "utility", "dps"], difficulty: "medium", desc: "位置取りと範囲スキル、味方との連携を学びたい人向け。" },
    { name: "ジンクス", roles: ["ADC"], style: ["ranged", "dps"], difficulty: "medium", desc: "安全な位置を保ちながら通常攻撃でダメージを出し、戦闘の流れをつかむ。" },
    { name: "ジン", roles: ["ADC"], style: ["ranged", "pick", "burst"], difficulty: "medium", desc: "攻撃のタイミングや距離感を意識しながら戦うマークスマン。" },
    { name: "ブラウム", roles: ["SUP"], style: ["frontline", "protect", "utility"], difficulty: "easy", desc: "味方を守ることに長け、味方との連携やピールを学びやすい。" },
    { name: "タリック", roles: ["SUP"], style: ["frontline", "protect", "utility"], difficulty: "medium", desc: "味方を守り、近くの味方と連携して戦うスタイル。" },
    { name: "エズリアル", roles: ["ADC"], style: ["ranged", "pick"], difficulty: "hard", desc: "スキルショットや機動力を活かす。照準や操作を練習したい人向け。" },
    { name: "ゼド", roles: ["MID"], style: ["burst", "pick"], difficulty: "hard", desc: "機動力や影を使い、相手の隙を狙う。操作と判断の練習が必要。" },
    { name: "ヤスオ", roles: ["MID", "TOP"], style: ["burst", "dps"], difficulty: "hard", desc: "機動力を活かした近接戦闘が特徴。練習を重ねて操作を磨きたい人向け。" },
    { name: "リー・シン", roles: ["JG"], style: ["pick", "engage"], difficulty: "hard", desc: "高い操作自由度を活かしてプレイを組み立てる。習熟には練習が必要。" },
    { name: "ラカン", roles: ["SUP"], style: ["engage", "protect", "utility"], difficulty: "medium", desc: "機動力を使って仕掛けたり、味方のもとへ戻って支援したりする。" }
  ];

  const root = document.getElementById("diagnosis-app");
  if (!root) return;
  const questionEl = document.getElementById("diagnosis-question");
  const progressText = document.getElementById("diagnosis-progress-text");
  const progress = document.getElementById("diagnosis-progress");
  const backBtn = document.getElementById("diagnosis-back");
  const nextBtn = document.getElementById("diagnosis-next");
  const resultEl = document.getElementById("diagnosis-result");
  let current = 0;
  let answers = Array(questions.length).fill(null);

  function renderQuestion() {
    const q = questions[current];
    progressText.textContent = `質問 ${current + 1} / ${questions.length}`;
    progress.style.width = `${((current + 1) / questions.length) * 100}%`;
    backBtn.disabled = current === 0;
    nextBtn.textContent = current === questions.length - 1 ? "診断する" : "次へ";
    questionEl.innerHTML = `<h3>${q.title}</h3><p class="result-note">${q.hint}</p><div class="answer-options"></div>`;
    const optionsEl = questionEl.querySelector(".answer-options");
    q.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "answer-option";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `diagnosis-${current}`;
      input.value = option.value;
      input.checked = answers[current] === option.value;
      input.addEventListener("change", () => {
        answers[current] = option.value;
        nextBtn.disabled = false;
      });
      const span = document.createElement("span");
      span.textContent = option.label;
      label.append(input, span);
      optionsEl.append(label);
    });
    nextBtn.disabled = answers[current] === null;
    questionEl.hidden = false;
    resultEl.hidden = true;
  }

  function scoreChampion(champion) {
    let score = 0;
    const [style1, style2, difficulty, role, teamfight, payoff, learning, teamwork] = answers;
    // 回答ごとに重みを変え、複数の好みが一致する候補を上位にする。
    if (champion.style.includes(style1)) score += 3;
    if (champion.style.includes(style2)) score += 2;
    if (champion.difficulty === difficulty) score += 2;
    if (difficulty === "easy" && champion.difficulty === "medium") score += 1;
    if (difficulty === "medium" && champion.difficulty === "easy") score += 1;
    if (difficulty === "hard" && champion.difficulty === "medium") score += 1;
    if (role === "ANY" || champion.roles.includes(role)) score += role === "ANY" ? 1 : 4;
    if (champion.style.includes(teamfight)) score += 3;
    if (champion.style.includes(payoff)) score += 2;
    if (champion.style.includes(teamwork)) score += 2;
    if (champion.difficulty === learning) score += 1;
    if (learning === "easy" && champion.difficulty === "medium") score += 1;
    if (learning === "medium" && champion.difficulty === "easy") score += 1;
    if (learning === "hard" && champion.difficulty === "medium") score += 1;
    return score;
  }

  function renderResults() {
    const ranked = champions.map(champ => ({ ...champ, score: scoreChampion(champ) }))
      .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, "ja"));
    const chosenRole = answers[3];
    const filtered = chosenRole === "ANY" ? ranked : ranked.filter(c => c.roles.includes(chosenRole));
    const top = (filtered.length ? filtered : ranked).slice(0, 3);
    questionEl.hidden = true;
    document.querySelector(".progress-row").hidden = true;
    backBtn.hidden = true;
    nextBtn.hidden = true;
    resultEl.hidden = false;
    resultEl.innerHTML = `
      <p class="eyebrow">YOUR PLAY STYLE</p>
      <h3 class="result-heading">診断結果：あなたに合いそうな候補</h3>
      <p class="result-note">回答した好みをもとに選んだ候補です。使いやすさや相性には個人差があるため、気になったチャンピオンを実際に試してみましょう。</p>
      <div class="champion-results"></div>
      <p class="result-note">難易度は学習の目安であり、公式の評価ではありません。チャンピオンの性能や推奨ロールは更新されることがあります。</p>
      <button id="diagnosis-retry" class="button button-primary">もう一度診断する</button>`;
    const list = resultEl.querySelector(".champion-results");
    top.forEach((champ, index) => {
      const card = document.createElement("article");
      card.className = "champion-result";
      const difficultyLabel = { easy: "操作の入口にしやすい", medium: "少し練習したい", hard: "習熟に練習が必要" }[champ.difficulty];
      card.innerHTML = `<span class="rank">RECOMMENDATION 0${index + 1}</span><h4></h4><p></p><p class="meta"></p>`;
      card.querySelector("h4").textContent = champ.name;
      card.querySelector("p").textContent = champ.desc;
      card.querySelector(".meta").textContent = `ロール：${champ.roles.join(" / ")}｜${difficultyLabel}`;
      list.append(card);
    });
    document.getElementById("diagnosis-retry").addEventListener("click", () => {
      current = 0;
      answers = Array(questions.length).fill(null);
      document.querySelector(".progress-row").hidden = false;
      backBtn.hidden = false;
      nextBtn.hidden = false;
      renderQuestion();
      root.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  backBtn.addEventListener("click", () => {
    if (current > 0) { current--; renderQuestion(); }
  });
  nextBtn.addEventListener("click", () => {
    if (answers[current] === null) return;
    if (current < questions.length - 1) { current++; renderQuestion(); }
    else renderResults();
  });
  renderQuestion();
})();
