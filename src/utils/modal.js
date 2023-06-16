export function setModal(trueOrFalse) {
    const modal = document.getElementById("form-modal")
    if (modal != null) modal.checked = trueOrFalse
}

export function toggleModal() {
    const modal = document.getElementById("form-modal")
    if (modal != null) modal.checked = !modal.checked
}