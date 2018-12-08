(() => {

    const vm = new Vue({
        el : "#app",

        data : {
            welcomemessage : "movie app",

            videoData : [],
            singleData : [],

            title : "",
			author : "",
			desc : "",
			duration : "",
			uploadDate : "",
			url : "",
            coverImage : "",
            rating : "",
            visits : "",

            showDetails : false
        },

        created : function(){
            //get all the movie data on page load
            this.fetchMovieData(null);
        },

        methods : {
            login() {
                //stub
                console.log('login');
            },

            fetchSingle(e) {
                // debugger;
                this.fetchMovieData(e.currentTarget.dataset.movie);
            },

            loadMovie(e) {
                // debugger;
                e.preventDefault();

                dataKey = e.currentTarget.getAttribute("href");
                currentData = this.videoData.filter(video =>video.video_url === dataKey);

                this.title = currentData[0].name;
				this.author = currentData[0].author;
				this.desc = currentData[0].vidDesc;
				this.duration = currentData[0].duration_sec;
				this.uploadDate = currentData[0].uploadDate;
                this.url = dataKey;
                this.coverImage = dataKey;
                this.rating = currentData[0].rating;
                this.visits = currentData[0].visits;

                this.showDetails = true;
            },

            fetchMovieData(movies) {
                //this is a ternary statement (Shorthand for if/else) left of the : is true, right is false
                url = movies ? `./includes/index.php?movie=${movies}` : './includes/index.php';

                fetch(url)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);

                    if(movies) {
                        //store this in the single movie result above
                    } else {
                        //initial data grab, store in the videodata array
                        this.videoData = data;
                    }
                })
                .catch(function(error){
                    // console.log(error);
                });
            }
        }
    })
})();