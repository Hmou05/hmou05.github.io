var len = 0;

onEnterKeyPressedInInput();
storeIdInBtn();
addLines(40);



function addLines(n = 1) {
  for (var i = 0; i < n; i++) {
    addLine();
  }
}

function storeIdInBtn() {
  let line_number = document.getElementById("gotoline");
  let btn = document.getElementById("goto-btn");
  line_number.addEventListener("input", () => {
    btn.setAttribute("href", `#_${Number(line_number.value) - 1}`);
  });
}

function set_IDs() { }

function update() {
  let gotoline = document.getElementById("gotoline");
  gotoline.setAttribute("max", String(len));
}

function onEnterKeyPressedInInput() {
  let gotoInput = document.getElementById("gotoline");
  gotoInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      let link = document.getElementById("goto-btn");
      link.setAttribute("href", `#_${gotoInput.value}`);
      link.click();
    }
  });
}

function goDown(ID) {
    if (ID > 1) {
        for(let c of ["dest", "qte", "puht"]) {
            let previousCell = document.getElementById(`${c}_${ID - 1}`);
            previousCell.addEventListener("keydown", (e) => {
                if (["Enter", "ArrowDown"].includes(e.key)) {
                    let thisCellContainer = document.getElementById(`_${ID}`);
                    let thisCell = document.getElementById(`${c}_${ID}`);
                    thisCell.focus({
                        focusVisible: true,
                        preventScroll: true}
                    );
                    thisCellContainer.style.backgroundColor = '#e2dbff';
                    setInterval(() => {
                        thisCellContainer.style.backgroundColor = '#ffffff';
                    }, 500);
                }
            });
        }
    }
}

function goUp(ID) {
    if (0 <= ID < len) {
        for(let c of ["dest", "qte", "puht"]) {
            let thisCell = document.getElementById(`${c}_${ID}`);
            thisCell.addEventListener("keydown", (e) => {
                if (e.key == "ArrowUp") {
                    let previousCellContainer = document.getElementById(`_${ID - 1}`);
                    let previousCell = document.getElementById(`${c}_${ID - 1}`);
                    previousCell.focus({preventScroll: true});
                    previousCellContainer.style.backgroundColor = '#e2dbff';
                    setInterval(() => {
                        previousCellContainer.style.backgroundColor = '#ffffff';
                    }, 500);
                }
            });
        }
    }
}

function move() {
    let ID = len;
    goUp(ID);
    goDown(ID);
}


function oninputEvent() {
  let line = document.querySelector(`#_${len}`);
  let cells = {
    input: line.querySelectorAll("input"),
    div: line.querySelectorAll("div")
  }
  cells.input[0].oninput = () => {
    cells.input[0].value = (cells.input[0].value).toUpperCase();
  };
  for (let cell of [cells.input[1], cells.input[2]]) {
    cell.oninput = () => {
      var puttc = 1.2 * Number(cells.input[2].value);
      cells.div[0].textContent = puttc.toFixed(3);
      cells.div[1].textContent = (puttc * Number(cells.input[1].value)).toFixed(3);
    };
  }
}

function addLine() {
  let table = document.getElementById("table");
  len++;
  table.insertAdjacentHTML(
    "beforeend",
    `<div class="table-row" id="_${len}">
        <span class="number no-selection">${len}</span>
          <input type="text" class="inputs DESIGNATION left" id="dest_${len}" autocomplete="off" />
          <input type="number" min=1 class="inputs QUANTITE center" id="qte_${len}" autocomplete="off" />
          <input type="number" class="inputs PU-HT center" id="puht_${len}" autocomplete="off" />
          <div class="PU-TTC center"></div>
          <div class="MONTANT-TTC center"></div>
      </div>`
  );
  oninputEvent();
  update();
  move();
}

function deleteLine() {
  let line = document.querySelector(`#_${len}`);
  if (len > 1) {
    line.remove();
    len--;
    update();
  }
}

function gotoNextCell() {
  return 0;
}
