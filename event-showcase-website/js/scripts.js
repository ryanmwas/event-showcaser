function openModal(title,description,imageSrc) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal").style.display="flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}