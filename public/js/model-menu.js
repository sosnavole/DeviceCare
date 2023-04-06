const backButton = document.getElementById('back-button');

document.addEventListener('DOMContentLoaded', function () {
  displayMainMenu();

  backButton.addEventListener('click', function () {
    displayMainMenu();
    backButton.style.display = 'none';
  });
});

const submenus = {
  'iphone-models': [
    { name: 'iPhone 13', link: 'iphone13' },
    { name: 'iPhone 12', link: '/iphone12/' },
    { name: 'iPhone SE', link: '/iphonese/' },
    { name: 'iPhone 11', link: '/iphone11/' },
    { name: 'iPhone X', link: '/iphonex/' },
    { name: 'iPhone Xs', link: '/iphonexs/' },
    { name: 'iPhone Xr', link: '/iphonexr/' },
    { name: 'iPhone 8', link: '/iphone8/' },
    { name: 'iPhone 8 Plus', link: '/iphone8plus/' },
    { name: 'iPhone 7', link: '/iphone7/' },
  ],
  'ipad-models': [
    { name: 'iPad Pro', link: 'https://www.apple.com/ipad-pro/' },
    { name: 'iPad Air', link: 'https://www.apple.com/ipad-air/' },
    { name: 'iPad Mini', link: 'https://www.apple.com/ipad-mini/' }
  ],
  'mac-models': [
    { name: 'MacBook Pro', link: 'https://www.apple.com/macbook-pro/' },
    { name: 'MacBook Air', link: 'https://www.apple.com/macbook-air/' },
    { name: 'iMac', link: 'https://www.apple.com/imac/' }
  ],
  // Add links for other submenu items similarly
};

const menuData = {
  'apple': [
    { name: 'iPhone', submenu: 'iphone-models' },
    { name: 'iPad', submenu: 'ipad-models' },
    { name: 'Mac', submenu: 'mac-models' },
  ],
  'android': [
    { name: 'Samsung', submenu: 'samsung-models' },
    { name: 'Google Pixel', submenu: 'pixel-models' },
    { name: 'OnePlus', submenu: 'oneplus-models' },
  ],
};

function createNewMenu(menuType) {
  const newMenuItems = menuData[menuType];

  const menuContainer = document.getElementById('menu-container');
  const newMenu = document.createElement('ul');
  newMenu.classList.add('menu-items-container');

  newMenuItems.forEach((itemData) => {
    const newItem = document.createElement('li');
    newItem.classList.add('menu-item', 'menu-item-button');
    newItem.innerText = itemData.name;

    if (itemData.submenu) {
      newItem.dataset.submenu = itemData.submenu;
      newItem.addEventListener('click', function () {
        const submenuType = itemData.submenu;
        const submenuItems = submenus[submenuType];

        if (submenuItems) {
          const submenuContainer = document.createElement('ul');
          submenuContainer.classList.add('submenu-items-container');

          submenuItems.forEach((submenuItemData) => {
            const submenuItem = document.createElement('li');
            submenuItem.classList.add('submenu-item', 'iphone-button'); // add the 'iphone-button' class
            const submenuLink = document.createElement('a');
            submenuLink.href = submenuItemData.link;
            submenuLink.innerText = submenuItemData.name;
            submenuItem.appendChild(submenuLink);
            submenuContainer.appendChild(submenuItem);
          });

          menuContainer.innerHTML = '';
          menuContainer.appendChild(submenuContainer);
          backButton.style.display = 'inline-block';
        } else {
          console.error(`Submenu '${submenuType}' not found in submenus object.`);
        }
      });
    } else if (itemData.link) {
      newItem.addEventListener('click', function () {
        window.location.href = itemData.link;
      });
    }

    newMenu.appendChild(newItem);
  });

  menuContainer.innerHTML = '';
  menuContainer.appendChild(newMenu);
}








function displayMainMenu() {
  const mainMenuItems = [
    { name: 'Apple', menu: 'apple' },
    { name: 'Android', menu: 'android' },
  ];

  const menuContainer = document.getElementById('menu-container');
  const mainMenu = document.createElement('ul');
  mainMenu.classList.add('menu-items-container');

  mainMenuItems.forEach((itemData) => {
    const newItem = document.createElement('li');
    newItem.classList.add('menu-item', 'menu-item-button');
    newItem.dataset.menu = itemData.menu;
    newItem.innerText = itemData.name;
    newItem.addEventListener('click', function () {
      createNewMenu(itemData.menu);
      backButton.style.display = 'inline-block';
    });
    mainMenu.appendChild(newItem);
  });

  menuContainer.innerHTML = '';
  menuContainer.appendChild(mainMenu);
}
