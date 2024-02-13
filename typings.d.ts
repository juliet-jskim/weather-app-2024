//for Current weather
interface ICurrentProps {
    dt: number; // Include dt property for date/time
    main: {
        temp: number;
    };
    weather: {
        0: {
            description: string;
        }
    }
    wind: {
        speed: number;
    }
    name: string;
    data: string;
}

//for Five day weathers
interface IFiveProps {
    dt: number; // Include dt property for date/time
    main: {
        temp: number;
    };
    weather: {
        0: {
            description: string;
        }
    }
    wind: {
        speed: number;
    }
    name: string;
    data: string;
}