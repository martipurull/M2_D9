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
    let newRowNoValue = document.querySelector('input[name="TrackNo"]').value
    newRowNo.setAttribute('scope', 'row')
    newRowNo.innerText = newRowNoValue
    newRow.appendChild(newRowNo)
    let newTrackTitle = document.createElement('td')
    let newTrackTitleValue = document.querySelector('input[name="TrackTitle"]').value
    newTrackTitle.innerText = newTrackTitleValue
    newRow.appendChild(newTrackTitle)
    let newTrackDuration = document.createElement('td')
    let newTrackDurationValue = document.querySelector('input[name="TrackDuration').value
    newTrackDuration.innerText = newTrackDurationValue
    newRow.appendChild(newTrackDuration)
    let newTrackComposer = document.createElement('td')
    let newTrackComposerValue = document.querySelector('input[name="TrackComposer').value
    newTrackComposer.innerText = newTrackComposerValue
    newRow.appendChild(newTrackComposer)
    let deleteButtonContainer = document.createElement('td')
    newRow.appendChild(deleteButtonContainer)
    let deleteButton = document.createElement('button')
    deleteButton.classList.add('btn')
    deleteButton.classList.add('btn-danger')
    deleteButton.classList.add('delete-track-btn')
    deleteButton.setAttribute('type', 'button')
    deleteButton.setAttribute('onclick', 'deleteTrack(event)')
    deleteButton.innerText = 'delete track'
    deleteButtonContainer.appendChild(deleteButton)
}

// const readValue = function () {
//     let trackTitle = document.querySelector('input[name="TrackTitle"]')
//     console.log(trackTitle.value)
// }

// readValue()