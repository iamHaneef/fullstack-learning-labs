function Food()
{

    const fruit_orange = "orange";
    let fruit_banana = "banana";

    return(
        <div>
            <ul>
                <li>Apple</li>
                <li>{fruit_banana.toUpperCase()}</li>
                <li>{fruit_orange}</li>

            </ul>
            <hr/>
        </div>
    )
}

export default Food;