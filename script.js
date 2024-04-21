const div = document.querySelectorAll("div")[0];

function fetching() {
  const response = fetch("https://fakestoreapi.com/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      let content = data.map((item) => {
        return `<h1>${item.title}</h1>
        <img src = ${item.image}>
        `;
      });

      div.innerHTML = content;
    });
}
fetching();
