class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			input: ""
		};
	}
	/////////////////////////////////////////////////////////////
	/////////
	/////////////////////////////////////////////////////////////
	render() {
		return (
			<div>
				<h1>Tasks</h1>
				<ul>
					{this.state.tasks.map((task, i) => (
						<li key={i}>
						<h4> {i+1}. {task} 
							<button id="delete" onClick={() => this.deleteTask(i)}>Delete</button>{" "}</h4>
						</li>
					))}
				</ul>
				<div>
					<input onChange={this.handleChange} value={this.state.input} />
					<button id="addTask" onClick={this.addTask}>Add Task </button>
				</div>
				<h3>Number Of Tasks: {this.state.tasks.length}</h3>
			</div>
		);
	} // render ends
	//////////////////////////////////////////////////////////////////
	/////////////////////////
	//////////////////////////////////////////////////////////////////

	deleteTask = index => {
		this.setState(state => {
			const tasks = [...this.state.tasks];
			tasks.splice(index, 1);
			return {
				tasks: tasks
			};
		});
	};

	//Input
	handleChange = event => {
		this.setState({
			input: event.target.value
		});
	};

	//Button
	addTask = () => {
		this.setState(state => ({
			tasks: [...state.tasks, state.input],
			input: ""
        }));
    

	};
} // class Ends
ReactDOM.render(<App />, document.querySelector("#app")); //can getElementByID("app")
