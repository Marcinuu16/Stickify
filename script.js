const section = document.getElementById("section");
const modal_overlay = document.getElementById("modal_overlay");

const new_note_button = document.getElementById("new_note_button");
const new_note_modal = document.getElementById("new_note_modal");

const edit_note_button = document.getElementById("edit_note_button");
const edit_note_modal = document.getElementById("edit_note_modal");

new_note_button.addEventListener("click", () => {
    modal_overlay.classList.remove("hidden");
    new_note_modal.classList.remove("hidden");

    create_note();
});
new_note_modal.querySelector(".close_modal").addEventListener("click", close_new_note_modal)
modal_overlay.addEventListener("click", close_new_note_modal);


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

function create_note(){
    const note = document.createElement("div");
    note.classList.add("note");

    const img = document.createElement("img");
    img.src = "wordnote.png";

    note.appendChild(img);
    section.appendChild(note);

    console.log("dodano!");
}

