import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const usePart = _id => {
    const [part, setPart] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://hidden-fortress-98551.herokuapp.com/parts/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])
    return [part];
};

export default usePart;