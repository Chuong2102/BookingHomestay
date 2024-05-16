export default function getRooms(category){
    if(category == null)
        category = '';

    const payload = {
        "latitude": 0,
        "longitude": 0,
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
        }).then(res => res.json()).then((json) => {return json;});

        return data;
    }
    catch(err){
        console.log(err);
    }
}