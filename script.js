// Ждем загрузки DOM, чтобы элементы точно существовали
document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const previewContainer = document.getElementById('previewContainer');

    imageInput.addEventListener('change', function() {
        const file = this.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            // Пока грузится, можно показать текст
            previewContainer.innerHTML = '<p style="color: #8b949e;">Загрузка...</p>';
            
            reader.onload = function(e) {
                // Вставляем само изображение
                previewContainer.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            }
            
            reader.readAsDataURL(file);
        } else {
            // Если файл не выбран
            previewContainer.innerHTML = '<p class="preview-placeholder">Фото появится здесь</p>';
        }
    });
});