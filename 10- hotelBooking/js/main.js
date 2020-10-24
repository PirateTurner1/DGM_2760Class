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
    const response = await fetch('../hotel.JSON')
    return await response.json() //this returns the JSON objects

}catch (error) {
    console.log(error)
}

}