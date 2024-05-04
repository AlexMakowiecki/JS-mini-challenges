import { playlistArr } from './playlist.js'

/* Challenge #2: Array.map() */
/* To create an array using all the items of other array */

const playlistHtmlArray = playlistArr.map(function (track) {
    return `
        <section class="card">
            <div class="card-start">
                <img src="./images/${track.albumArt}">
            </div>
                <div class="card-mid">
                    <h4 class="card-title">${track.title}</h4>
                    <p class="card-artist">${track.artist}</p>
                </div>
            <div class="card-end">
                <p class="card-menu">...</p>
            </div>
        </section>`
})

/* Challenge #3: array.join */
/* To convert an Array to String, using the parameter as separator */
const playlistHtml = playlistHtmlArray.join("")

document.getElementById('container').innerHTML = playlistHtml
