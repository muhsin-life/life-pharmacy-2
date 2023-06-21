export default async function getDoctorsListData(take:number, skip:number) {
    var requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Latitude: '25.21937',
            Longitude: '55.272887'
        },
    };

    const res = await fetch(`https://prodapp.lifepharmacy.com/api/clinics/v1/doctors?skip=${skip}&take=${take}`, requestOptions)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}