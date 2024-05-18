function Food(){
    const food1 = "fruit";
    const food2 = "veggies";
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase()}</li>
            
        </ul>

    );

}
export default Food