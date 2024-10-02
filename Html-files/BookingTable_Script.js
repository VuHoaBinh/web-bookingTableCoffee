let htmlString = "";

for (let i = 0; i < 3; i++) {
  htmlString += '<div class="row">';
  for (let j = 0; j < 5; j++) {
    htmlString += `<div class="col">
      <img
        src="/Images/table/table.png"
        style="width: 24%;
        border: 3px solid black;
        padding: 12px;
        border-radius: 32%;"
      />
    </div>`;
  }
  htmlString += "</div>";
}

document.getElementById("product-list").innerHTML = htmlString;
