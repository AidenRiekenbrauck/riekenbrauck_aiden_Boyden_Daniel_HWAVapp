import UserComponent from './UserComponent.js';

export default {
	template: `
	<div class="container">
	<link rel="stylesheet" href="css/login.css">
	<div class="wrap">

		<div class="row">
			<div class="col-sm-12">
			</div>


			<user v-for="(user, index) in userList" :liveuser="user" :key="index"></user>     

		</div>
	<div class="container">
	<link rel="stylesheet" href="css/login.css">
	<div class="overlay2">

	</div>
	</div>
	</div>
	</div>
	</div>
	`,

	created: function() {
	  //debugger;
	  this.fetchAllUsers();
	},

	data() {
	  return {
		message: `Who's Using Roku?`,

		userList: []
	  }
	},

	methods: {
	  fetchAllUsers() {
		let url = `./admin/scripts/users.php?allusers=true`;

		fetch(url)
		  .then(res => res.json())
		  .then(data => {this.userList = data})
		.catch(function(error) {
		  console.error(error);
		});
	  }
	},

	components: {
		user: UserComponent
	}
}