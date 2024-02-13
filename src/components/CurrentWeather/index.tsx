// export default function CurrentWeather(
//     props: { data: ICurrentProps[] }
// ) {
//     if (!props.data || props.data.length === 0) {
//         return (
//             <div>
//                 <h1>No data found</h1>
//             </div>
//         );
//     }

//     const { dt, main, weather, wind } = props.data;

//     return (
//         <div style={{ margin: '15px' }}>
//             <div>{new Date(dt * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
//             <div>Temperature: {main.temp}°C</div>
//             <div>Weather: {weather[0].main}</div>
//             <div>Wind Speed: {wind.speed} m/s</div>
//         </div>
//     );
// }

export default function CurrentWeather(
    props: { data: ICurrentProps[] }
) {
    if (!props.data || props.data.length === 0) {
        return (
            <div>
                <h1>No data found</h1>
            </div>
        );
    }

    return (
        <>
            {props.data.map((data, index) => (
                <div key={index} style={{ margin: '15px' }}>
                    <div>{new Date(data.dt * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                    <div>Temperature: {data.main.temp}°C</div>
                    <div>Weather: {data.weather[0].description}</div>
                    <div>Wind Speed: {data.wind.speed} m/s</div>
                </div>
            ))}
        </>
    );
}