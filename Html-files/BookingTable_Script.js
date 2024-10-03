// modal

function populateModal(table_id) {
  let htmlShowInforBooking = "";

  htmlShowInforBooking += ` <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title text-center" id="exampleModalLabel">
        Booking table
      </h5>
    </div>
    <div class="modal-body">
      <form>
        <div class="row">
          <div class="col-5 mb-3">
            <label for="date" class="form-label">Date</label>
            <input type="date" id="date" class="form-control" />
          </div>
          <div class="col-4 mb-3">
            <label for="time" class="form-label">Check-in-time</label>
            <input type="time" id="time" class="form-control" />
          </div>
          <div class="col-3 mb-3">
            <label for="people" class="form-label">People</label>
            <input
              type="number"
              id="people"
              class="form-control"
              value="0"
              min="1"
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="table" class="form-label">Tables</label>
          <select id="table" class="form-select">
            <option value="${table_id}" disabled selected>Table: ${table_id}</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Hoang Diep Thu Nguyen"
          />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input
            type="tel"
            id="phone"
            class="form-control"
            placeholder="+44 123456789"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="hoangdiepthunguyen@bookingtable.com"
          />
        </div>
        <div class="mb-3 text-center">
          <p  style= "color:red;"=><i> (Deposit $2 to reserve a table at our cafe!! Thank you very much) </i></p>
          <p  style= "color:red;"=><i> Own: Nguyễn Hoàng Diệp Thư </i></p>

         <img src= "../Images/image_home/qr.png" alt="QR"/>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">
        Cancel
      </button>
      <button type="button" class="btn btn-primary">Booking</button>
    </div>
  </div>`;

  document.getElementById("modalInforBooking").innerHTML = htmlShowInforBooking;
}
// open modal
function onClickModal(table_id) {
  console.log(table_id);
  populateModal(table_id);
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
}

// Make the function globally accessible
window.onClickModal = onClickModal;

let htmlString = "";
let count = 0;

for (let i = 0; i < 5; i++) {
  htmlString += '<div class="row">';
  for (let j = 0; j < 10; j++) {
    count++;
    htmlString += `
    <div class="col">
      <p style="margin: -19%; padding-left: 28%;">${count}</p>
      <img
        onClick="onClickModal(${count})"
        src="/Images/table/table.png"
        style="width: 80%;
              border: 3px solid black;
              padding: 12px;
              border-radius: 32%;
              margin: 25%;"
      />
    </div>`;
  }
  htmlString += "</div>";
}

document.getElementById("product-list").innerHTML = htmlString;
