const Fetch = (type, id) => {

    const {useState, useEffect} = wp.element;

    const [state, setState] = useState('');

    useEffect(() => {
        fetch(`${type}${id}`)
        .then(response => response.json())
        .then(data => {
            setState(data)
        })
    }, [])

    return state;
}

export default Fetch;