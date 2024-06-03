export default function getRooms(category, startDate, endDate, guestNumber, latitude, longitude){
    if(category == null)
        category = '';

    if(latitude == null)
        latitude = 0;

    if(longitude == null)
        latitude = 0;

    const payload = {
        "latitude": latitude,
        "longitude": longitude,
        "categoryName": category
    }
    var rooms = [];
    const apiEx = `https://localhost:7188/api/v1/SearchRooms`;
    // 
    try{
        const token = localStorage.getItem("jwtToken");

        console.log("Get rooms: " + category);

        const params = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        // Get rooms
        const data = fetch(apiEx, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`},
            body: params,
        }).then(res => res.json()).then((json) => {console.log(json); return json;});

        return data;
    }
    catch(err){
        console.log(err);
    }
}