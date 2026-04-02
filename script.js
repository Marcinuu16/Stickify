const section = document.getElementById("section");
const modal_overlay = document.getElementById("modal_overlay");
const new_note_button = document.getElementById("new_note_button");
const new_note_modal = document.getElementById("new_note_modal");
const create_note_title = document.getElementById("create_note_title")
const create_note_text = document.getElementById("create_note_text")
const create_note_color = document.getElementById("create_note_color")
const create_note_button = document.getElementById("create_note_button")
const edit_note_button = document.getElementById("edit_note_button");
const edit_note_modal = document.getElementById("edit_note_modal");






new_note_button.addEventListener("click", () => {
    modal_overlay.classList.remove("hidden");
    new_note_modal.classList.remove("hidden");


});
new_note_modal.querySelector(".close_modal").addEventListener("click", close_new_note_modal)
modal_overlay.addEventListener("click", close_new_note_modal);

create_note_button.addEventListener("click", () => {

    if(!validate_note_creation()){
        console.log("brakuje!");
    }
    else{
        create_note();
    }
    
    close_new_note_modal();
});






edit_note_button.addEventListener("click", () => {
    modal_overlay.classList.remove("hidden");
    edit_note_modal.classList.remove("hidden");
})
edit_note_modal.querySelector(".close_modal").addEventListener("click", close_edit_note_modal)
modal_overlay.addEventListener("click", close_edit_note_modal);









function close_new_note_modal() {
    modal_overlay.classList.add("hidden");
    new_note_modal.classList.add("hidden");
}

function close_edit_note_modal() {
    modal_overlay.classList.add("hidden");
    edit_note_modal.classList.add("hidden");
}

function validate_note_creation() {
    const title = create_note_title.value.trim();
    const text = create_note_text.value.trim();
    const color = create_note_color.value;

    if (!title) return false;
    if (!text) return false;
    if (!color) return false;

    return true;
}

function create_note() {
    const note = document.createElement("div");
    note.classList.add("note");

    const title = document.createElement("h3")
    title.textContent = create_note_title.value.trim();
    note.appendChild(title)
    const text = document.createElement("p");
    text.textContent = create_note_text.value.trim();
    note.appendChild(text)
    note.style.backgroundColor = create_note_color.value;
    
    section.appendChild(note);

    console.log("dodano!");
}

