export default {
    props: ['liveuser'],

    template: `
    
    <div class="col-xs-3 col-sm-6 col-md-6 mx-auto">
        <div class="" @click="navToUserHome()">
            <div class="card-body text-center box ">
                <img :src="'images/' + liveuser.avatar" class="img-fluid ">
                <p>{{ liveuser.username }}</p>
            </div>
        </div>
    </div>`,

    created: function() {
        if (this.liveuser.avatar == null) {
            this.liveuser.avatar = "temp_avatar.jpg";
        }
    },

    methods: {
        navToUserHome() {            
            this.$router.push({ name: "home", params: { currentuser: this.liveuser } });
            // set a localstorage session object so that we don't have to log back in on page refresh or after our initial login
            localStorage.setItem("cachedUser", JSON.stringify(this.liveuser)); 
        }
    }
}