const new_note_button = document.getElementById("newNoteButton")
const edit_note_button = document.getElementById("editNoteButton")
const modal_overlay = document.getElementById("modalOverlay")
const modal1 = document.getElementById("modal1")
const section = document.getElementById("section")


new_note_button.addEventListener("click", () => {
    modal_overlay.classList.remove("Hidden");
    modal1.classList.remove("Hidden")

    const note = document.createElement("div")
    note.classList.add("note")

    const img = document.createElement("img")
    img.src = "wordnote.png"
    img.alt = ""

    note.appendChild(img)
    section.appendChild(note)
    console.log('dodano!')
})