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
const delete_note_button = document.getElementById("delete_note_button");
const delete_note_modal = document.getElementById("delete_note_modal");

document.addEventListener("click", (e) => {
    if (is_delete_mode && e.target.classList.contains("deletable")) {
        delete_note(e.target.id)
    }
});

let notes = []
let is_delete_mode = false
let notes_in_DOM;

load_notes();
show_notes();

new_note_button.addEventListener("click", () => {
    modal_overlay.classList.remove("hidden");
    new_note_modal.classList.remove("hidden");
    delete_mode(false)

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
    delete_mode(false)
    console.log(notes);
    console.log(notes_in_DOM);

})
edit_note_modal.querySelector(".close_modal").addEventListener("click", close_edit_note_modal)
modal_overlay.addEventListener("click", close_edit_note_modal);



delete_note_button.addEventListener("click", () => {
    toggle_delete_mode()
})
delete_note_modal.querySelector(".close_modal")
    .addEventListener("click", () => delete_mode(false));







function close_new_note_modal() {
    modal_overlay.classList.add("hidden");
    new_note_modal.classList.add("hidden");
}

function close_edit_note_modal() {
    modal_overlay.classList.add("hidden");
    edit_note_modal.classList.add("hidden");
}

function close_delete_note_modal() {
    delete_note_modal.classList.add("hidden");
}

function show_notes() {
    section.innerHTML = "";

    notes.forEach(note_item => {
        const note = document.createElement("div");
        note.classList.add("note");
        note.id = note_item.id

        const title = document.createElement("h3");
        title.classList.add("note-contents")
        title.textContent = note_item.title;
        note.appendChild(title);

        const text = document.createElement("p");
        text.classList.add("note-contents")
        text.textContent = note_item.text.slice(0, 59);
        note.appendChild(text);

        note.style.backgroundColor = note_item.bgcolor;

        section.appendChild(note);
    });
}


function toggle_delete_mode() {
    if (is_delete_mode == true) {
        delete_mode(false)
    }
    else {
        delete_mode(true)
    }
}

function delete_mode(value) {
    is_delete_mode = value;

    if (value == true) {
        delete_note_button.style.backgroundColor = "#652c2c"
        gather_notes_DOM()
        notes_in_DOM.forEach(note_dom => {  
            note_dom.classList.add("deletable")
        })

        delete_note_modal.classList.remove("hidden")
        console.log("delete mode on")
    } else {
        delete_note_button.style.backgroundColor = "rgba(31, 6, 56, 1)";
        gather_notes_DOM()
        notes_in_DOM.forEach(note_dom => {  
            note_dom.classList.remove("deletable")
        })

        console.log("delete mode off")
        close_delete_note_modal()
    }
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

function delete_note(id_to_delete){
    console.log("deleted note with id:"+id_to_delete)
    notes = notes.filter(note => String(note.id) !== id_to_delete);
    save_notes()
    show_notes()
    delete_mode(false)
}   

function gather_notes_DOM(){
    notes_in_DOM = section.querySelectorAll(".note");
}

function load_notes() {
    const saved = localStorage.getItem("notes");

    if (saved) {
        notes = JSON.parse(saved)
    }
    else {
        notes = []
    }
}

function save_notes() {
    localStorage.setItem("notes", JSON.stringify(notes));
    
}


