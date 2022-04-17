import { useEffect } from "react";
import { useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {

        fetch('https://wdtahmid.github.io/data/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return [services, setServices];
}

export default useServices;