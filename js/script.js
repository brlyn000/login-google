const scriptURL =  "https://script.google.com/macros/s/AKfycby8QWaxbl1Bwpu9f4oQc8XZDzxNFepjaReRsJvcKkEBXuU6zrRw9tWaedyNBNe1fYIQ/exec";

function handlePasswordSubmit(e) {
  e.preventDefault(); // Cegah form reload

  const form = document.forms["contact-form-portfolio"];
  const btnKirim = document.querySelector(".btn-kirim");
  btnKirim.disabled = true;
  btnKirim.innerText = "Mengirim...";

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      console.log("Success!", response);
      form.reset();
      setTimeout(() => {
        window.location.href = "index.html";
      }, 500); // Redirect cepat
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alert("Terjadi kesalahan saat mengirim data.");
      btnKirim.disabled = false;
      btnKirim.innerText = "Masuk";
    });
}
