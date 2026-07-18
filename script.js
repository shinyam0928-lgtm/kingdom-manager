async function loadWarriors() {
    try {
        const response = await fetch("src/data/warriors.json");

        if (!response.ok) {
            throw new Error("warriors.json を読み込めません");
        }

        const warriors = await response.json();

        renderWarriors(warriors);

    } catch (error) {
        document.getElementById("warriorList").innerHTML =
            `<p style="color:red;">${error.message}</p>`;
    }
}

function renderWarriors(warriors) {

    const list = document.getElementById("warriorList");

    list.innerHTML = "";

    warriors.forEach(warrior => {

        const card = document.createElement("div");
        card.className = "warrior-card";

        card.innerHTML = `
            <h3>${warrior.character}</h3>

            <p>【${warrior.cardName}】</p>

            <label>
                所持
                <input
                    type="checkbox"
                    ${warrior.owned ? "checked" : ""}
                    data-id="${warrior.id}"
                    class="owned-input"
                >
            </label>

            <br><br>

            <label>
                Lv
                <input
                    type="number"
                    min="1"
                    max="100"
                    value="${warrior.level}"
                    data-id="${warrior.id}"
                    class="level-input"
                >
            </label>

            <p>${warrior.rarity}</p>
        `;

        list.appendChild(card);

    });

}

loadWarriors();
