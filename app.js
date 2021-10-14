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


// const deleteTrack = function (e) {
//     let td = e.target.parentNode
//     let tr = td.parentNode
//     tr.parentNode.removeChild(tr)
// }

const deleteTrack = function (e) {
    e.target.parentNode.parentNode.remove()
}

const addTrack = function () {
    let tbody = document.querySelector('tbody')
    let newRow = document.createElement('tr')
    tbody.appendChild(newRow)
    let newRowNo = document.createElement('th')
    newRowNo.setAttribute('scope', 'row')
    newRowNo.innerText = document.querySelector('input[name="TrackNo"]').innerText
    newRow.appendChild(newRowNo)
    let newTrackTitle = document.createElement('td')
    newTrackTitle.innerText = document.querySelector('input[name="TrackTitle"]').innerText
    newRow.appendChild(newTrackTitle)
    let newTrackDuration = document.createElement('td')
    newTrackDuration.innerText = document.querySelector('input[name="TrackDuration').innerText
    newRow.appendChild(newTrackDuration)
    let newTrackComposer = document.createElement('td')
    newTrackComposer.innerText = document.querySelector('input[name="TrackComposer').innerText
    newRow.appendChild(newTrackComposer)
}