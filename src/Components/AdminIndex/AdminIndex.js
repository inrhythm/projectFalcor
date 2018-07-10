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

			this.setState({inActivePeople: data[0]})
		}, error =>{
			console.log(error)
		})
	}

	render() {
      return (
		<div className="container">
			{this.state.inActivePeople.map((people, index) => {
  				return(<div key={index} className="col-md-2">
					<div ><img src={people.image_url1} alt={people.name}/></div>
					<div><h2>{people.name}</h2><h4>{people.title}</h4></div>
					<div><input type="submit" value="View" /><input type="submit" value="Approve" /></div>
				</div>)
			})}
		</div>
      );
   }
}

export default AdminIndex;
