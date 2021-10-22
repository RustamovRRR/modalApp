//open and close modal
//modali acib ve baglamaq

const modalOverlay = document.querySelector('.modal-overlay');

const openModal = document.querySelector(".modal-btn");
const closeModal = document.querySelector(".close-btn");

openModal.addEventListener('click', () => {
    modalOverlay.classList.add("open-modal");
})

closeModal.addEventListener('click', () => {
    modalOverlay.classList.remove("open-modal");
})