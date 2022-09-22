function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );


    return (
      <ul>{listItems}</ul>
    );
  }
  
  const numbers = ["Kia","mercedes","thar","harley davidson"];
  
  export default function List(){
    return(
        <NumberList numbers={numbers} />
        );
  }
  
 
  