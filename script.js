document.addEventListener('DOMContentLoaded', function() {
    const libros = [
        { 
            orden: 1, 
            titulo: "El fin de la Eternidad", 
            año: 1955,
            saga: "Precuela",
            paginas: "192 páginas",
            isbn: "9788435015476",
            sinopsis: "Esta novela explora los viajes en el tiempo y el control de la historia humana. Andrew Harlan es un Eterno, un técnico que trabaja en la Eternidad, una organización fuera del tiempo que monitorea y corrige la realidad para minimizar el sufrimiento humano. La trama se complica cuando Harlan se enamora de una mujer de una época no permitida, desafiando las reglas fundamentales de su sociedad."
        },
        { 
            orden: 2, 
            titulo: "Yo, robot", 
            año: 1950,
            saga: "Robots",
            paginas: "253 páginas",
            isbn: "9788420664375",
            sinopsis: "Una colección de nueve relatos que exploran la relación entre humanos y robots a través de las Tres Leyes de la Robótica. La Dra. Susan Calvin, robopsicóloga de U.S. Robots and Mechanical Men, narra la evolución de los robots a lo largo de su carrera, desde simples máquinas hasta seres casi humanos que plantean cuestiones éticas complejas."
        },
        { 
            orden: 3, 
            titulo: "Las bóvedas de acero", 
            año: 1954,
            saga: "Robots",
            paginas: "224 páginas",
            isbn: "9788466657662",
            sinopsis: "En un futuro donde la humanidad vive en ciudades cubiertas por cúpulas, el detective Elijah Baley investiga el asesinato de un destacado espacialista. Para resolver el caso, debe trabajar con R. Daneel Olivaw, un robot con apariencia humana. Juntos exploran las tensiones entre los habitantes de la Tierra y los espaciales, mientras descubren una conspiración que amenaza a ambos grupos."
        },
        { 
            orden: 4, 
            titulo: "El sol desnudo", 
            año: 1957,
            saga: "Robots",
            paginas: "231 páginas",
            isbn: "9788466657679",
            sinopsis: "El detective Elijah Baley es enviado al planeta Solaria para investigar un asesinato. En este mundo donde los humanos viven aislados y dependen completamente de robots, Baley debe enfrentar sus miedos a espacios abiertos y adaptarse a una cultura donde el contacto físico es tabú. Con la ayuda de R. Daneel Olivaw, descubre que el crimen está relacionado con la estructura social de Solaria."
        },
        { 
            orden: 5, 
            titulo: "Los robots del amanecer", 
            año: 1983,
            saga: "Robots",
            paginas: "433 páginas",
            isbn: "9788466657686",
            sinopsis: "En el planeta Aurora, el robotista más importante ha sido mentalmente incapacitado y su robot humanoide, Jander Panell, ha sido destruido. Elijah Baley es llamado para resolver el caso que podría desencadenar un conflicto interestelar. Con ayuda de Daneel, Baley descubre una conspiración que amenaza el futuro de la expansión humana en la galaxia."
        },
        { 
            orden: 6, 
            titulo: "Robots e Imperio", 
            año: 1985,
            saga: "Robots",
            paginas: "383 páginas",
            isbn: "9788466657693",
            sinopsis: "Dos siglos después de los eventos de 'Los robots del amanecer', Daneel Olivaw y Giskard Reventlov desarrollan la Ley Cero de la Robótica para proteger a la humanidad como un todo. Cuando una figura del pasado amenaza a la Tierra con radiación, los robots deben tomar decisiones que afectarán el futuro de la humanidad y su expansión por la galaxia."
        },
        { 
            orden: 7, 
            titulo: "En la arena estelar", 
            año: 1951,
            saga: "Imperio Galáctico",
            paginas: "192 páginas",
            isbn: "9788466657716",
            sinopsis: "Biron Farrill, hijo de un gobernador ejecutado, escapa a la Tierra buscando refugio. Descubre que su padre fue asesinado por oponerse a los planes tiránicos del Director de Rhodia. Con la ayuda de un misterioso personaje y una princesa, Biron se embarca en una misión para encontrar un planeta rebelde que podría desafiar al Imperio Galáctico."
        },
        { 
            orden: 8, 
            titulo: "Polvo de estrellas", 
            año: 1952,
            saga: "Imperio Galáctico",
            paginas: "188 páginas",
            isbn: "9788466657723",
            sinopsis: "Joseph Schwartz, un jubilado de 62 años, es transportado accidentalmente a un futuro lejano donde la Tierra es un planeta subyugado y olvidado. En este mundo, se encuentra con un científico que busca salvar la humanidad de una inminente crisis alimentaria. Schwartz, dotado de habilidades mentales extraordinarias, se convierte en pieza clave de la supervivencia terrestre."
        },
        { 
            orden: 9, 
            titulo: "Un guijarro en el cielo", 
            año: 1950,
            saga: "Imperio Galáctico",
            paginas: "254 páginas",
            isbn: "9788466657709",
            sinopsis: "Joseph Schwartz, un sastre retirado de Chicago, es transportado accidentalmente a un futuro lejano donde la Tierra es un planeta subyugado y olvidado. En este mundo, se encuentra con un científico que busca salvar la humanidad de una inminente crisis alimentaria. Schwartz, dotado de habilidades mentales extraordinarias, se convierte en pieza clave de la supervivencia terrestre."
        },
        { 
            orden: 10, 
            titulo: "La corriente del espacio", 
            año: 1952,
            saga: "Imperio Galáctico",
            paginas: "191 páginas",
            isbn: "9788466657730",
            sinopsis: "Rik, un hombre sin memoria, descubre que posee conocimientos cruciales sobre una inminente catástrofe que amenaza al planeta Florina. Junto con la esposa de un funcionario, debe recuperar su memoria mientras evita a poderosos enemigos que quieren silenciarlo. Su conocimiento podría cambiar el equilibrio de poder en la galaxia."
        },
        { 
            orden: 11, 
            titulo: "Preludio a la Fundación", 
            año: 1988,
            saga: "Fundación",
            paginas: "403 páginas",
            isbn: "9788466657747",
            sinopsis: "En el planeta Trantor, centro del Imperio Galáctico, el joven matemático Hari Seldon presenta su teoría de la psicohistoria, capaz de predecir el futuro de grandes poblaciones. Cuando el emperador se entera de su trabajo, Seldon se convierte en un fugitivo. Con la ayuda de diversos aliados, comienza un viaje que sentará las bases para la Fundación."
        },
        { 
            orden: 12, 
            titulo: "Hacia la Fundación", 
            año: 1993,
            saga: "Fundación",
            paginas: "417 páginas",
            isbn: "9788466657754",
            sinopsis: "Hari Seldon desarrolla la psicohistoria mientras enfrenta intrigas políticas en Trantor. Tras la muerte de su esposa, Seldon lucha por perfeccionar su ciencia mientras el Imperio Galáctico comienza su decadencia. La historia sigue sus esfuerzos para establecer la Fundación, último refugio del conocimiento humano ante el colapso inminente."
        },
        { 
            orden: 13, 
            titulo: "Fundación", 
            año: 1951,
            saga: "Fundación",
            paginas: "255 páginas",
            isbn: "9788466657761",
            sinopsis: "En el planeta Términus, los científicos de la Fundación enfrentan múltiples crisis utilizando la ciencia de la psicohistoria desarrollada por Hari Seldon. A través de generaciones, lidian con gobernantes beligerantes, religiones tecnológicas y estados mercantiles, siempre guiados por las predicciones de Seldon sobre el futuro de la galaxia."
        },
        { 
            orden: 14, 
            titulo: "Fundación e Imperio", 
            año: 1952,
            saga: "Fundación",
            paginas: "247 páginas",
            isbn: "9788466657778",
            sinopsis: "La Fundación enfrenta su mayor desafío: Bel Riose, el último gran general del Imperio Galáctico. Posteriormente, aparece el Mulo, un mutante con poderes mentales que amenaza con destruir el Plan Seldon. Los personajes deben enfrentar una amenaza impredecible que desafía todas las predicciones psicohistóricas."
        },
        { 
            orden: 15, 
            titulo: "Segunda Fundación", 
            año: 1953,
            saga: "Fundación",
            paginas: "256 páginas",
            isbn: "9788466657785",
            sinopsis: "Tras la conquista del Mulo, la Fundación intenta reconstruirse mientras busca la misteriosa Segunda Fundación, establecida por Hari Seldon para monitorear su plan. La búsqueda se convierte en una batalla de estrategias entre quienes quieren preservar el plan y quienes buscan destruirlo, con la galaxia como tablero de ajedrez."
        },
        { 
            orden: 16, 
            titulo: "Los límites de la Fundación", 
            año: 1982,
            saga: "Fundación",
            paginas: "432 páginas",
            isbn: "9788466657792",
            sinopsis: "Siglos después de la Fundación, el alcalde de Términus, Harla Branno, y el consejero Golan Trevize se enfrentan por el futuro de la Fundación. Trevize es exiliado en una misión para encontrar la legendaria Tierra, acompañado por el historiador Janov Pelorat. Su viaje los lleva a descubrir secretos sobre los orígenes de la humanidad."
        },
        { 
            orden: 17, 
            titulo: "Fundación y Tierra", 
            año: 1986,
            saga: "Fundación",
            paginas: "501 páginas",
            isbn: "9788466657808",
            sinopsis: "Golan Trevize continúa su búsqueda de la Tierra, convencido de que allí encontrará respuestas sobre el futuro de la humanidad. Junto a Janov Pelorat y Bliss, visitan múltiples mundos siguiendo pistas sobre los orígenes humanos. Su viaje culmina en un descubrimiento que conecta todas las sagas de Asimov y redefine el futuro galáctico."
        }
    ];
    
    const booksGrid = document.getElementById('books-grid');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const modal = document.getElementById('book-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalCover = document.getElementById('modal-cover');
    const modalOrder = document.getElementById('modal-order');
    const modalYear = document.getElementById('modal-year');
    const modalSaga = document.getElementById('modal-saga');
    const modalPages = document.getElementById('modal-pages');
    const modalSynopsis = document.getElementById('modal-synopsis');
    
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
    
    // Obtener URL de portada usando Open Library API
    function getCoverUrl(isbn, size = "M") {
        return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
    }
    
    // Abrir modal con detalles del libro
    function openBookModal(book) {
        modalTitle.textContent = book.titulo;
        modalSubtitle.textContent = `Saga ${book.saga} - ${book.año}`;
        modalCover.style.backgroundImage = `url('${getCoverUrl(book.isbn, "L")}')`;
        modalOrder.textContent = book.orden;
        modalYear.textContent = book.año;
        modalSaga.textContent = book.saga;
        modalPages.textContent = book.paginas;
        modalSynopsis.textContent = book.sinopsis;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Renderizar la lista de libros
    function renderBooks() {
        booksGrid.innerHTML = '';
        const readStatus = loadReadStatus();
        
        libros.forEach(libro => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            
            bookCard.innerHTML = `
                <div class="book-cover" style="background-image: url('${getCoverUrl(libro.isbn)}')">
                    <div class="book-order">${libro.orden}</div>
                </div>
                <div class="book-info">
                    <h3 class="book-title">${libro.titulo}</h3>
                    <div class="book-year">${libro.año} | ${libro.saga}</div>
                </div>
                <div class="book-footer">
                    <a href="https://archive.org/search?query=${encodeURIComponent(libro.titulo)}+isaac+asimov" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       class="download-link">
                        <i class="fas fa-download"></i> Descargar
                    </a>
                    <div class="checkbox-container">
                        <input type="checkbox" class="read-checkbox" id="read-${libro.orden}" ${readStatus[libro.orden] ? 'checked' : ''}>
                        <label for="read-${libro.orden}" class="read-label">Leído</label>
                    </div>
                </div>
            `;
            
            const checkbox = bookCard.querySelector('.read-checkbox');
            checkbox.addEventListener('change', function() {
                saveReadStatus(libro.orden, this.checked);
            });
            
            // Evento para abrir modal al hacer clic en la tarjeta
            bookCard.addEventListener('click', function(e) {
                // Evitar abrir modal si se hace clic en el checkbox o enlace
                if (e.target.closest('.read-checkbox') || e.target.closest('.download-link')) {
                    return;
                }
                openBookModal(libro);
            });
            
            booksGrid.appendChild(bookCard);
        });
    }
    
    // Event listeners para el modal
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Inicializar
    createStars();
    renderBooks();
    updateProgress();
});