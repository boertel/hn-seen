var seen = JSON.parse(localStorage.getItem('seen')) || {}

var OPACITY = '0.4'

Array.prototype.slice.call(document.querySelectorAll('tr.athing')).forEach(function(athing) {
    var id = athing.id
    if (seen[id]) {
        athing.style.opacity = OPACITY
        athing.nextSibling.style.opacity = OPACITY
    } else {
        seen[id] = true
    }
})

localStorage.setItem('seen', JSON.stringify(seen))
