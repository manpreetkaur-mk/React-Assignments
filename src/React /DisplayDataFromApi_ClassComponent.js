import userEvent from "@testing-library/user-event";
import React from "react";
class DisplayDataFromApi_ClassComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
            error:null
		};
	}

	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/todos")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true,
                    
				});
			},
            (error) => {
                this.setState({
                  isLoaded: true,
                  error:error
                });
              }
            )
	}
	render() {
		const {error, DataisLoaded, items } = this.state;

        if(error){
            return <div>Error: {error.message}</div>
        }
		else if (!DataisLoaded)
         return <div>Loading...</div>;

		return (
            <div className="bodyone">
            {items.map(item => (
              <div  key={item.id}>
              <p className="hy"> User Id : {item.userId}</p>
               <p> Title : {item.title}</p> 
                <p>completed :{item.completed?'True':'False'}</p><hr/>

              </div>
              
              
            ))}
            
          </div>

       
	);
}
}

export default DisplayDataFromApi_ClassComponent;
