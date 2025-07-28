document.addEventListener('DOMContentLoaded', function() {
    const libros = [
        { orden: 1, titulo: "El fin de la Eternidad", año: 1955 },
        { orden: 2, titulo: "Yo, robot", año: 1950 },
        { orden: 3, titulo: "Las bóvedas de acero", año: 1954 },
        { orden: 4, titulo: "El sol desnudo", año: 1957 },
        { orden: 5, titulo: "Los robots del amanecer", año: 1983 },
        { orden: 6, titulo: "Robots e Imperio", año: 1985 },
        { orden: 7, titulo: "En la arena estelar", año: 1951 },
        { orden: 8, titulo: "Polvo de estrellas", año: 1952 },
        { orden: 9, titulo: "Un guijarro en el cielo", año: 1950 },
        { orden: 10, titulo: "La corriente del espacio", año: 1952 },
        { orden: 11, titulo: "Preludio a la Fundación", año: 1988 },
        { orden: 12, titulo: "Hacia la Fundación", año: 1993 },
        { orden: 13, titulo: "Fundación", año: 1951 },
        { orden: 14, titulo: "Fundación e Imperio", año: 1952 },
        { orden: 15, titulo: "Segunda Fundación", año: 1953 },
        { orden: 16, titulo: "Los límites de la Fundación", año: 1982 },
        { orden: 17, titulo: "Fundación y Tierra", año: 1986 }
    ];
    
    const booksList = document.getElementById('books-list');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    // Crear estrellas de fondo
    function createStars() {
        const starsCount = 100;
        const body = document.body;
        
        for (let i = 0; i < starsCount; i++) {
            const star = document.createElement('div');
            star.classList.add('stars');
            
            const size = Math.random() * 3;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            star.style.setProperty('--duration', `${Math.random() * 5 + 3}s`);
            star.style.setProperty('--delay', `${Math.random() * 5}s`);
            
            body.appendChild(star);
        }
    }
    
    // Cargar el estado guardado de los libros leídos
    function loadReadStatus() {
        const readStatus = JSON.parse(localStorage.getItem('asimovReadStatus')) || {};
        return readStatus;
    }
    
    // Guardar el estado de un libro
    function saveReadStatus(bookId, isRead) {
        const readStatus = loadReadStatus();
        readStatus[bookId] = isRead;
        localStorage.setItem('asimovReadStatus', JSON.stringify(readStatus));
        updateProgress();
    }
    
    // Actualizar la barra de progreso
    function updateProgress() {
        const readStatus = loadReadStatus();
        const totalBooks = libros.length;
        let readCount = 0;
        
        Object.values(readStatus).forEach(status => {
            if (status) readCount++;
        });
        
        const percentage = (readCount / totalBooks) * 100;
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `${readCount} de ${totalBooks} libros leídos (${Math.round(percentage)}%)`;
    }
    
    // Renderizar la lista de libros
    function renderBooks() {
        booksList.innerHTML = '';
        const readStatus = loadReadStatus();
        
        libros.forEach(libro => {
            const row = document.createElement('tr');
            
            // Orden
            const orderCell = document.createElement('td');
            orderCell.textContent = libro.orden;
            orderCell.className = 'order-col';
            row.appendChild(orderCell);
            
            // Título
            const titleCell = document.createElement('td');
            titleCell.textContent = libro.titulo;
            titleCell.className = 'title-col';
            row.appendChild(titleCell);
            
            // Año
            const yearCell = document.createElement('td');
            yearCell.textContent = libro.año;
            yearCell.className = 'year-col';
            row.appendChild(yearCell);
            
            // Enlace
            const linkCell = document.createElement('td');
            const link = document.createElement('a');
            link.href = `https://archive.org/search?query=${encodeURIComponent(libro.titulo)}+isaac+asimov`;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.className = 'download-link';
            link.textContent = 'Descargar EPUB/PDF';
            linkCell.appendChild(link);
            row.appendChild(linkCell);
            
            // Leído
            const readCell = document.createElement('td');
            readCell.className = 'read-col';
            const checkboxContainer = document.createElement('div');
            checkboxContainer.className = 'checkbox-container';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'read-checkbox';
            checkbox.checked = readStatus[libro.orden] || false;
            
            checkbox.addEventListener('change', function() {
                saveReadStatus(libro.orden, this.checked);
            });
            
            checkboxContainer.appendChild(checkbox);
            readCell.appendChild(checkboxContainer);
            row.appendChild(readCell);
            
            booksList.appendChild(row);
        });
        
        updateProgress();
    }
    
    // Inicializar
    createStars();
    renderBooks();
});