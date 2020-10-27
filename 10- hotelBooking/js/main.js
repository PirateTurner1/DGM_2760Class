// giving the top h1-h2 header.
document.querySelector('header > h1').innerText = "Hotel Booking";
document.querySelector('header > h2').innerText = "Using JSON Data";

//giving the body an h1-h2 header.
document.getElementById('head1').innerHTML = "Hotel California";
document.getElementById('head2').innerHTML = "What I have learned is:";

//get api
// promises, call backs, asyncs, awaits are similar in ways... please read!
async function getHotelData() {
    try {
        const response = await fetch('js/hotel.JSON')
        return await response.json() //this returns the JSON objects

    }catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)
console.log(hotelData)
//storing in a variable to document
let selectAll = document.querySelectorAll('a')
selectAll.forEach (() => addEventListener('click',hotelInfo))
console.log(selectAll)
//document.querySelector("#marriott").addEventListener('click',hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })

    //console.log(Event.target.id)

    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
    document.querySelector('#address').textContent = `${hotelChoice.address}`
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`
    document.querySelector('#pools').textContent = `${hotelChoice.pools}`
    document.querySelector('#type').textContent = `${hotelChoice.roomTypes[0] + ' ' + hotelChoice.roomTypes[1] + ' ' + hotelChoice.roomTypes[2] + ' ' + hotelChoice.roomTypes[3]}`
    
    let picturePlacement = document.querySelector('#picture')
    picturePlacement.src = `${hotelChoice.picture}`

    let picture = document.querySelector('#picture')
    

}