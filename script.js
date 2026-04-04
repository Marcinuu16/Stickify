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

let notes = []
var marked_ids = []

load_notes();
show_notes();

new_note_button.addEventListener("click", () => {
    modal_overlay.classList.remove("hidden");
    new_note_modal.classList.remove("hidden");


});
new_note_modal.querySelector(".close_modal").addEventListener("click", close_new_note_modal)
modal_overlay.addEventListener("click", close_new_note_modal);

create_note_button.addEventListener("click", () => {
    const data = get_note_form_data();

    if (!validate_note_creation(data)) {
        console.log("brakuje!");
        return;
    }

    create_note(data);
    close_new_note_modal();
    show_notes();
});


edit_note_button.addEventListener("click", () => {
    modal_overlay.classList.remove("hidden");
    edit_note_modal.classList.remove("hidden");
    console.log(notes);

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

function show_notes() {
    notes.forEach(note_item => {
        if (marked_ids.includes(note_item.id)) {
            return; 
        }

        const note = document.createElement("div");
        note.classList.add("note");

        const title = document.createElement("h3");
        title.textContent = note_item.title;
        note.appendChild(title);

        const text = document.createElement("p");
        text.textContent = note_item.text.slice(0,40)
        note.appendChild(text);

        note.style.backgroundColor = note_item.bgcolor;

        section.appendChild(note);

        console.log("dodano!");
        marked_ids.push(note_item.id); 
    });
}



function get_note_form_data() {
    return {
        title: create_note_title.value.trim(),
        text: create_note_text.value.trim(),
        color: create_note_color.value
    };
}

function validate_note_creation(data) {
    if (!data.title) return false;
    if (!data.text) return false;
    if (!data.color) return false;
    return true;
}

function create_note(data) {
    const newId = notes.length > 0
        ? notes[notes.length - 1].id + 1
        : 1;

    notes.push({
        id: newId,
        title: data.title,
        text: data.text,
        bgcolor: data.color
    });

    save_notes();
}


function load_notes(){
    const saved = localStorage.getItem("notes");

    if(saved){
        notes = JSON.parse(saved)
    }
    else{
        notes = []
    }
}

function save_notes(){
    localStorage.setItem("notes",JSON.stringify(notes));
}


