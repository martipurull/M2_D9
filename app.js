// const addEventListenerToImages = function () {
//     let albumImages = document.getElementsByClassName('card-img-top')
//     for (let i = 0; i < albumImages.length; i++) {
//         albumImages[i].addEventListener('click', toggleAlbumDetails)
//     }
//     console.log(albumImages)
// }

// const toggleAlbumDetails = function () {
//     let albumCards = document.querySelectorAll('card')


// }

// const deleteTrack = function (e) {
//     let buttonId = e.target.id
//     let songRows = document.querySelectorAll('tr')
//     console.log(e)
//     for (let i = 0; i < songRows.length; i++) {
//         let songNumber = songRows[i].innerText.slice(0, 2)
//         console.log(songNumber)
//     }
// }


const deleteTrack = function (e) {
    let td = e.target.parentNode
    let tr = td.parentNode
    tr.parentNode.removeChild(tr)
}
