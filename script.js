document.addEventListener('DOMContentLoaded', function() {
    const libros = [
        { 
            orden: 1, 
            titulo: "El fin de la Eternidad", 
            año: 1955,
            saga: "eternidad"
        },
        { 
            orden: 2, 
            titulo: "Yo, robot", 
            año: 1950,
            saga: "robots"
        },
        { 
            orden: 3, 
            titulo: "Las bóvedas de acero", 
            año: 1954,
            saga: "robots"
        },
        { 
            orden: 4, 
            titulo: "El sol desnudo", 
            año: 1957,
            saga: "robots"
        },
        { 
            orden: 5, 
            titulo: "Los robots del amanecer", 
            año: 1983,
            saga: "robots"
        },
        { 
            orden: 6, 
            titulo: "Robots e Imperio", 
            año: 1985,
            saga: "robots"
        },
        { 
            orden: 7, 
            titulo: "En la arena estelar", 
            año: 1951,
            saga: "imperio"
        },
        { 
            orden: 8, 
            titulo: "Polvo de estrellas", 
            año: 1952,
            saga: "imperio"
        },
        { 
            orden: 9, 
            titulo: "Un guijarro en el cielo", 
            año: 1950,
            saga: "imperio"
        },
        { 
            orden: 10, 
            titulo: "La corriente del espacio", 
            año: 1952,
            saga: "imperio"
        },
        { 
            orden: 11, 
            titulo: "Preludio a la Fundación", 
            año: 1988,
            saga: "fundacion"
        },
        { 
            orden: 12, 
            titulo: "Hacia la Fundación", 
            año: 1993,
            saga: "fundacion"
        },
        { 
            orden: 13, 
            titulo: "Fundación", 
            año: 1951,
            saga: "fundacion"
        },
        { 
            orden: 14, 
            titulo: "Fundación e Imperio", 
            año: 1952,
            saga: "fundacion"
        },
        { 
            orden: 15, 
            titulo: "Segunda Fundación", 
            año: 1953,
            saga: "fundacion"
        },
        { 
            orden: 16, 
            titulo: "Los límites de la Fundación", 
            año: 1982,
            saga: "fundacion"
        },
        { 
            orden: 17, 
            titulo: "Fundación y Tierra", 
            año: 1986,
            saga: "fundacion"
        }
    ];
    
    const booksGrid = document.getElementById('books-grid');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const resetButton = document.getElementById('reset-progress');
    const themeToggle = document.getElementById('theme-toggle');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
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
    
    // Cargar tema del localStorage
    function loadTheme() {
        const savedTheme = localStorage.getItem('asimovTheme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
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
        updateSagaProgress();
    }
    
    // Actualizar la barra de progreso general
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
    
    // Actualizar el progreso por saga
    function updateSagaProgress() {
        const readStatus = loadReadStatus();
        const sagas = {
            eternidad: [1],
            robots: [2, 3, 4, 5, 6],
            imperio: [7, 8, 9, 10],
            fundacion: [11, 12, 13, 14, 15, 16, 17]
        };
        
        for (const saga in sagas) {
            const sagaBooks = sagas[saga];
            const totalSagaBooks = sagaBooks.length;
            let readSagaCount = 0;
            
            sagaBooks.forEach(bookId => {
                if (readStatus[bookId]) readSagaCount++;
            });
            
            const percentage = (readSagaCount / totalSagaBooks) * 100;
            document.querySelector(`.saga[data-saga="${saga}"] .saga-progress-fill`).style.width = `${percentage}%`;
        }
    }
    
    // Renderizar los libros
    function renderBooks(filter = 'all') {
        booksGrid.innerHTML = '';
        const readStatus = loadReadStatus();
        
        libros.forEach(libro => {
            // Filtrar por saga
            if (filter !== 'all' && libro.saga !== filter) return;
            
            const isRead = readStatus[libro.orden] || false;
            
            const bookCard = document.createElement('div');
            bookCard.className = `book-card ${isRead ? 'read' : ''}`;
            bookCard.dataset.saga = libro.saga;
            
            bookCard.innerHTML = `
                <div class="book-header">
                    <div class="book-order">${libro.orden}</div>
                    <h3 class="book-title">${libro.titulo}</h3>
                    <div class="book-year">${libro.año}</div>
                </div>
                <div class="book-body">
                    <p>Saga: ${getSagaName(libro.saga)}</p>
                </div>
                <div class="book-footer">
                    <a href="https://archive.org/search?query=${encodeURIComponent(libro.titulo)}+isaac+asimov" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       class="download-link">
                        <i class="fas fa-download"></i> Descargar
                    </a>
                    <div class="read-toggle">
                        <input type="checkbox" class="read-checkbox" id="read-${libro.orden}" ${isRead ? 'checked' : ''}>
                        <label for="read-${libro.orden}" class="read-label">Leído</label>
                    </div>
                </div>
            `;
            
            const checkbox = bookCard.querySelector('.read-checkbox');
            checkbox.addEventListener('change', function() {
                saveReadStatus(libro.orden, this.checked);
                bookCard.classList.toggle('read', this.checked);
            });
            
            booksGrid.appendChild(bookCard);
        });
    }
    
    // Obtener nombre de la saga
    function getSagaName(sagaKey) {
        const sagaNames = {
            'eternidad': 'El fin de la Eternidad',
            'robots': 'Saga de Robots',
            'imperio': 'Saga del Imperio Galáctico',
            'fundacion': 'Saga de la Fundación'
        };
        return sagaNames[sagaKey] || sagaKey;
    }
    
    // Aplicar filtro
    function applyFilter(filter) {
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        renderBooks(filter);
    }
    
    // Event Listeners
    resetButton.addEventListener('click', function() {
        if (confirm('¿Estás seguro de que quieres reiniciar tu progreso? Se borrarán todos los libros marcados como leídos.')) {
            localStorage.removeItem('asimovReadStatus');
            renderBooks();
            updateProgress();
            updateSagaProgress();
        }
    });
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('asimovTheme', 'light');
            this.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('asimovTheme', 'dark');
            this.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            applyFilter(this.dataset.filter);
        });
    });
    
    // Inicializar
    createStars();
    loadTheme();
    renderBooks();
    updateProgress();
    updateSagaProgress();
});