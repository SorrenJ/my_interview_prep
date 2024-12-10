    // 1. Select by ID
    const header = document.getElementById('header');
    console.log('Selected by ID:', header);

    // 2. Select by Class
    const menuItems = document.getElementsByClassName('menu-item');
    console.log('Selected by Class:', menuItems);

    // 3. Select by Tag Name
    const paragraphs = document.getElementsByTagName('p');
    console.log('Selected by Tag Name:', paragraphs);

    // 4. Select with querySelector
    const firstMenuItem = document.querySelector('.menu-item');
    console.log('Selected with querySelector:', firstMenuItem);

    // 5. Select with querySelectorAll
    const allMenuItems = document.querySelectorAll('.menu-item');
    console.log('Selected with querySelectorAll:', allMenuItems);

    // 6. Select by Name Attribute
    const usernameInput = document.getElementsByName('username');
    console.log('Selected by Name:', usernameInput);