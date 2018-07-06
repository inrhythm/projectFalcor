import React from 'react';

class AdminIndex extends React.Component {
	constructor() {
		super();
		
		this.state = {
			inActivePeople: []
		}
	}

	componentDidMount() {

		fetch('http://localhost:3001/people/admin/list', {mode: "cors"})
		.then(response => {
			if (response.status >= 400) {
		      throw new Error("Bad response from server");
		    }
		    return response.json();
		})
		.then(data => {
			let inActivePeople = data[0].map(people => {
				return(
	  				<div className="col-md-2">
						<div ><img src={people.image_url1} alt={people.name}/></div>
						<div><h2>{people.name}</h2><h4>{people.title}</h4></div>
						<div><input type="submit" value="View" /><input type="submit" value="Approve" /></div>		
					</div>
					)
			})

			this.setState({inActivePeople: inActivePeople})
		}, error =>{
			console.log(error)
		})
	}

	render() {
      return (
		<div className="container">
			{this.state.inActivePeople}
		</div>
      );
   }
}

export default AdminIndex;