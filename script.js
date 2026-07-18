const warriors = [
  {
    id: 1,
    character: "信",
    card: "全てを出し尽くす",
    owned: false,
    level: 1
  },
  {
    id: 2,
    character: "王騎",
    card: "秦の怪鳥",
    owned: false,
    level: 1
  },
  {
    id: 3,
    character: "李牧",
    card: "超国軍総大将",
    owned: false,
    level: 1
  },
  {
    id: 4,
    character: "王翦",
    card: "六大将軍",
    owned: false,
    level: 1
  },
  {
    id: 5,
    character: "羌瘣",
    card: "象姉への誓い",
    owned: false,
    level: 1
  }
];

const warriorList = document.getElementById("warriorList");

function render() {
  warriorList.innerHTML = "";

  warriors.forEach(warrior => {

    const card = document.createElement("div");

    card.style.background = "#2b2b2b";
    card.style.padding = "15px";
    card.style.marginBottom = "10px";
    card.style.borderRadius = "10px";

    card.innerHTML = `
      <label>
        <input type="checkbox" ${warrior.owned ? "checked" : ""}>
        <strong>${warrior.character}</strong>
        【${warrior.card}】
      </label>

      <br><br>

      Lv
      <input
        type="number"
        value="${warrior.level}"
        min="1"
        style="width:70px;"
      >
    `;

    warriorList.appendChild(card);

  });

}

render();
