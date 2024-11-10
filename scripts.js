// Functia care adaugă o nouă postare pe blog
function addPost() {
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;
    const imageFile = document.getElementById("postImageFile").files[0];

    // Verificăm dacă titlul și conținutul nu sunt goale
    if (title && content) {
        // Cream un nou element de tip postare
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        // Dacă utilizatorul a furnizat o imagine, o încărcăm și o adăugăm în postare
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const postImage = document.createElement("img");
                postImage.classList.add("image");
                postImage.src = e.target.result;
                postImage.alt = "Imaginea postării";
                postElement.appendChild(postImage);
            };
            reader.readAsDataURL(imageFile);
        }

        // Adăugăm titlul postării
        const postTitle = document.createElement("h4");
        postTitle.classList.add("post-title");
        postTitle.textContent = title;

        // Adăugăm conținutul postării
        const postContent = document.createElement("p");
        postContent.classList.add("post-content");
        postContent.textContent = content;

        // Adaugăm titlul și conținutul la postare
        postElement.appendChild(postTitle);
        postElement.appendChild(postContent);

        // Adaugăm postarea la secțiunea de postări
        document.getElementById("posts").appendChild(postElement);

        // Resetăm câmpurile de introducere a datelor
        document.getElementById("postTitle").value = "";
        document.getElementById("postContent").value = "";
        document.getElementById("postImageFile").value = "";
    } else {
        alert("Te rugăm să completezi atât titlul, cât și conținutul postării.");
    }
}