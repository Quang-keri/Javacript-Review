const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menus = $$(".menu");
const panes = $$(".menu-pane");
const line = $(".menu-parent .line");

// const setUpPos = () => {
//   const menuActive = $(".menu.active");
//   if (menuActive) {
//     line.style.left = menuActive.offsetLeft + "px";
//     line.style.width = menuActive.offsetWidth + "px";
//   }
// };

menus.forEach((menu, index) => {
  menu.onclick = function () {
    const activeMenu = $(".menu.active");
    const activePane = $(".menu-pane.active");
    activeMenu.classList.remove("active");
    activePane.classList.remove("active");
    this.classList.add("active");
    panes[index].classList.add("active");
    setUpFun();
  };
});

const setUpFun = () => {
  const menuActive = $(".menu.active");
  console.log(menuActive + "co ko");
  if (menuActive) {
    line.style.left = menuActive.offsetLeft + 'px';
    line.style.width = menuActive.offsetWidth + 'px';
  }
};




//
const products = document.querySelector('.products');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products');

  const results = await res.json();

  // Clear products
  products.innerHTML = '';

  results.forEach((product) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'product');
    listItems.push(div);

    div.innerHTML = `
			<img src="${product.image}" alt="">
			<div class="product-detail">
				<h4>${product.title.slice(0, 30)}</h4>
				<p>$${product.price}</p>
			</div>
        `;

    products.appendChild(div);
  });
}

function filterData(search) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}

