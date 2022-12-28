let searchBtn = document.getElementById("search-btn");
let countryTip = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = countryTip.value;
  let finalURl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURl);
  fetch(finalURl)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
      <img src="${data[0].flags.svg}" alt="" class='flag-img'>
      <h2>${data[0].name.common}</h2>
      <div className="wrapper">
      <div className="data-wrapper">
      <h4>Capital:</h4>
      <span>${data[0].capital[0]}</span>
      </div>
      <div className="data-wrapper">
      <h4>continent:</h4>
      <span>${data[0].continents[0]}</span>
      </div>
      <div className="data-wrapper">
      <h4>Population:</h4>
      <span>${data[0].population}</span>
      </div>
      <div className="data-wrapper">
      <h4>Currency:</h4>
      <span>${data[0].currencies[Object.keys(data[0].currencies)].name}- ${
        Object.keys(data[0].currencies)[0]
      }</span>
      </div>
      <div className="data-wrapper">
      <h4>Common Languages:</h4>
      <span>${Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(",")}</span>
      </div>
      </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3 className="">The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3 className="">please enter a valid country name</h3>`;
      }
    });
});
