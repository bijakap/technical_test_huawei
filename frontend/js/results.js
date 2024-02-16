document.addEventListener("DOMContentLoaded", fetchData);

function searchAction() {
  const searchInput = document.getElementById("searchInput");
  const searchValue = searchInput.value;

  if (searchValue) {
    window.location.href = `results.html?id=${searchValue}`;
  } else {
    window.location.href = `results.html`;
  }
}

function addAction() {
  window.location.href = "index.html"; // Ganti dengan URL yang sesuai untuk halaman add
}

async function fetchData() {
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get("id");

  let apiUrl = "http://localhost:3000/forms";

  if (idParam) {
    apiUrl = `http://localhost:3000/forms/${idParam}`;
  }

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.error && data.error === "Data tidak ditemukan") {
        console.log("Data tidak ditemukan");
      } else {
        renderData(data.data);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function renderData(data) {
  const dataContainer = document.getElementById("grid-container");
  console.log(data);

  // Menggunakan Array.isArray() untuk memeriksa apakah data adalah array
  if (Array.isArray(data)) {
    // Jika data adalah array, loop melalui setiap elemen
    data.forEach((item) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");

      // Membuat elemen <p> untuk setiap kunci (key) dalam objek
      Object.keys(item).forEach((key) => {
        if (key !== "id") {
          const paragraph = document.createElement("p");
          paragraph.textContent = `${key} : ${item[key]}`;
          cardDiv.appendChild(paragraph);
        }
      });

      dataContainer.appendChild(cardDiv);
    });
  } else {
    // Jika data bukan array, langsung render elemen
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    Object.keys(data).forEach((key) => {
      if (key !== "id") {
        const paragraph = document.createElement("p");
        paragraph.textContent = `${key} : ${data[key]}`;
        cardDiv.appendChild(paragraph);
      }
    });

    dataContainer.appendChild(cardDiv);
  }
}
