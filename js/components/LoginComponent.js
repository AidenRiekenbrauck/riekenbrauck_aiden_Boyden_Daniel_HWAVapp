export default {
    template: `
    
    <div class="container">
        <link rel="stylesheet" href="css/login.css">
        <div class="overlay">
            <div class="wrap">
                <h1>Roku</h1>
                <input class="input-area form-control" id="inlineFormInputName" type="text" placeholder="Username" v-model="input.username" required >
                <input class="input-area form-control" id="inlineFormPassword" type="password" placeholder="Password" v-model="input.password" required>
                <input type="submit" value="Sign In" class="btn" id="login-btn" v-on:click.prevent="login()">
                <a href="index.html#/create"><i class="fa fa-user"></i>Create an Account</a>
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

         }
     },
 
     methods: {
         login() {
            //console.log(this.$parent.mockAccount.username);
 
            if(this.input.username != "" && this.input.password != "") {
            // fetch the user from the DB
            // generate the form data
            let formData = new FormData();

             formData.append("username", this.input.username);
             formData.append("password", this.input.password);

             let url = `./admin/scripts/admin_login.php`;
 
             fetch(url, {
                    method: 'POST',
                    body: formData
                })
                 .then(res => res.json())
                 .then(data => {
                    if (typeof data != "object") { // means that we're not getting a user object back
                        console.warn(data);
                        console.error("authentication failed, please try again");
                        this.$emit("autherror", data);
                    } else {
                        this.$emit("authenticated", true, data[0]);
                        this.$router.replace({ name: "users" });
                    }
                })
             .catch(function(error) { 
                 console.log(error);
             });
        } else {
                 console.log("A username and password must be present");
            }
        }
    }
 }