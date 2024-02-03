document.addEventListener('DOMContentLoaded', function () {
    const contactList = document.querySelector('.contact-list');
    const pagination = document.querySelector('.pagination');
    const totalUsersElement = document.querySelector('#total-users');
    let currentPage = 0;
    const usersPerPage = 10;

    function showPage(pageNumber) {
        
        contactList.innerHTML = '';

      
        const start = pageNumber * usersPerPage;
        const end = start + usersPerPage;

        
        const usersToShow = users.slice(start, end);

        
        for (let i = 0; i < usersToShow.length; i++) {
            if (usersToShow[i]) {
                const contactItem = document.createElement('li');
                contactItem.className = 'contact-item cf';
                contactItem.innerHTML = `
                    <div class="contact-details">
                        <img class="avatar" src="${usersToShow[i].image}" alt="${usersToShow[i].name}">
                        <h3>${usersToShow[i].name}</h3>
                        <span class="email">${usersToShow[i].name.toLowerCase().replace(' ', '.')}@example.com</span>
                    </div>
                    <div class="joined-details">
                        <span class="date">Joined ${usersToShow[i].joined}</span>
                    </div>
                `;
                contactList.appendChild(contactItem);
            }
        }

        
        pagination.innerHTML = '';

        
        const numPages = Math.ceil(users.length / usersPerPage);

        
        for (let i = 0; i < numPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i + 1;
            pageButton.addEventListener('click', function () {
                currentPage = i;
                showPage(currentPage);
            });
            pagination.appendChild(pageButton);
        }

        
        totalUsersElement.textContent = `Total: ${users.length}`;
    }

    
    showPage(currentPage);
});
