export default {
    template: `
    
    <div class="container">
    <link rel="stylesheet" href="css/login.css">
    
    <div class="overlay3">
    <div class="wrap">
    <h1>Create an Account</h1>
    <input class="input-area form-control" id="inlineFormInputName" type="text" placeholder="Username" v-model="input.username" required >
    <input class="input-area form-control" id="inlineFormPassword" type="password" placeholder="Password" v-model="input.password" required>
    <select required name="lvllist" class="userLevel" v-model="select.access">
             <option disabled selected value="">Select User Level</option>
             <option value="1">G</option>
             <option value="2">PG</option>
             <option value="3">PG-13</option>
             <option value="4">R</option>
             <option value="5">NC-17</option>
         </select>
     <input type="submit"  value="Create Account" class="btn" id="login-btn" v-on:click.prevent="createUser()">
  </div>
</div>
    
    
    
    
    
    
    </div>
     `,
 
     data() {
         return {
             input: {
                username: "",
                password: ""
             },

             select: {
                access: ""
             }
         }
     },
 
     methods: {
         createUser() {
 
            if(this.input.username != "" && this.input.password != "" && this.select.access !="") {
                // fetch the user from the DB
                // generate the form data
                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);
                formData.append("access", this.select.access)

                let url = `./admin/scripts/create_user.php`;
    
                fetch(url, {
                        method: 'POST',
                        body: formData
                    });
                    
            } else {
                 console.log("A username and password must be present");
            }
        }
    }
 }