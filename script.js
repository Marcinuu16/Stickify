const new_note_button = document.getElementById("newNoteButton")
const section = document.getElementById("section")

new_note_button.addEventListener("click", () => {
    const note = document.createElement("div")
    note.classList.add("note")

    const img = document.createElement("img")
    img.src = "wordnote.png"
    img.alt = ""

    note.appendChild(img)
    section.appendChild(note)
    console.log('dodano!')
})