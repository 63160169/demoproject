
interface Menu {
    name: string 
    subMenu: SubMenu[]
  }
   
  interface SubMenu {
    name: string
  }
   
  const menus: Menu[] = [
    {
      name: 'Home',
      subMenu: [],
    },
    {
      name: 'About',
      subMenu: [
        {
          name: 'Company',
        },
        {
          name: 'Team',
        },
      ],
    },
    {
      name: 'Products',
      subMenu: [
        {
          name: 'Electronics',
        },
        {
          name: 'Clothing',
        },
        {
          name: 'Accessories',
        },
      ],
    },
    {
      name: 'Services',
      subMenu: [],
    },
    {
      name: 'Contact',
      subMenu: [
        {
          name: 'Phone',
        },
      ],
    },
    {
      name: 'Blog',
      subMenu: [],
    },
    {
      name: 'Gallery',
      subMenu: [
        {
          name: 'Photos',
        },
        {
          name: 'Videos',
        },
        {
          name: 'Events',
        },
      ],
    },
    {
      name: 'FAQ',
      subMenu: [],
    },
    {
      name: 'Downloads',
      subMenu: [
        {
          name: 'Documents',
        },
        {
          name: 'Software',
        },
      ],
    },
    {
      name: 'Support',
      subMenu: [
        {
          name: 'Help Center',
        },
        {
          name: 'Contact Us',
        },
        {
          name: 'Knowledge Base',
        },
      ],
    },
  ];


const exercise1: HTMLDivElement = document.getElementById("ex1") as HTMLDivElement;
const ul = document.createElement("ul");

for (let i = 0; i < menus.length; i++) {
    const li = document.createElement("li");
    li.textContent = menus[i].name;
    const subUl = document.createElement("ul");
    for (let j = 0; j < menus[i].subMenu.length; j++) {
        const subLi = document.createElement("li");
        subLi.textContent = menus[i].subMenu[j].name;
        subUl.appendChild(subLi);
    }
    li.appendChild(subUl);
    ul.appendChild(li);
}


exercise1.appendChild(ul);

