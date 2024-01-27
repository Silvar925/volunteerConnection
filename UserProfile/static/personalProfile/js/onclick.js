const btnDropdown = document.getElementById('btnDropdown')
btnDropdown.addEventListener("click", toggleDropdown)

function toggleDropdown() {
    let dropdown = document.getElementById("myDropdown");
    if (dropdown) {
        dropdown.classList.toggle("show");
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};


function showInput() {
    var input = document.getElementById('imageInput');
    input.style.display = 'block';
}

function hideInput() {
    var input = document.getElementById('imageInput');
    input.style.display = 'none';
}

function handleImage() {
    var input = document.getElementById('imageInput');
    var avatar = document.getElementById('avatar');

    var file = input.files[0];

    if (file) {
        // Преобразование выбранного файла в URL изображения
        var reader = new FileReader();
        reader.onload = function(e) {
            avatar.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    // Скрытие input после выбора изображения
    input.style.display = 'none';
}
