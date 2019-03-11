export default {
    props: ['currentuser'],

    template: `
    <div>
    <link rel="stylesheet" href="css/style.css">
    <!-- render this if we're viewing television or film -->
                                                                                    <header class="col-sm-12 fixed-top">
                                                                                                                                                                                    
                                                                                    <nav>
                                                                                    <div class="wrapper">
                                                                                <!-- <input type="text" placeholder="search..."> -->

                                                                                <input type="checkbox" id="button" />
                                                                                <label for="button"></label>

                                                                                <div id="cover"></div>
                                                                                <div id="border-top"></div>
                                                                                <div id="border-left"></div>
                                                                                <div id="border-right"></div>
                                                                                <div id="border-bottom"></div>

                                                                                <div id="nav">
                                                                                <ul>
                                                                                <li><a href="#" id="products">Home</a></li>
                                                                                <li><a href="#" id="services">Users</a></li>
                                                                                <li><a href="#" id="menu"></a></li>
                                                                                <li><a href="#" id="about">Kids</a></li>
                                                                                <li><a href="#" id="contact">Settings</a></li>
                                                                                </ul>
                                                                                </div>

                                                                                <div id="nav2">
                                                                                <ul>
                                                                                <li id="bottomNav1" v-for="media in mediaTypes" :data-type="media.description" @click="loadMedia(null, media.description)">
                                                                                <a>
                                                                                    <i v-bind:class="[media.iconClass]"></i>
                                                                                </a>

                                                                                </li>
                                                                                </ul>
                                                                                </div>

                                                                                </div>
                                                                                    </nav>
                                                                                </header>




    



<div class="main-top" id="home">
	

		<!-- banner -->
		<div class="banner_w3lspvt">
			<div class="csslider infinity" id="slider1">
				<ul class="banner_slide_bg">
					<li class="slider-style">
						<div class="container-fluid">
							<div class="w3ls_banner_txt text-right ml-auto pr-xl-5 pr-3">
                                <h4 class="w3ls_pvt-title text-bl text-uppercase let mb-3"">{{currentMediaDetails.movies_title}}</h4>
                                <h4 class="w3ls_pvt-title text-bl text-uppercase let mb-3"">{{currentMediaDetails.audio_artist}}  {{currentMediaDetails.audio_title}}</h4>
                                <p class="media-details col-sm-12" v-html="currentMediaDetails.audio_storyline"> {{currentMediaDetails.audio_storyline}}</p>
                                <p class="media-details col-sm-12" v-html="currentMediaDetails.movies_storyline"></p>
								<a href="#about" class="btn button-style mt-sm-5 mt-4">Watch Now</a>
								
								
							</div
						</div>
					</li>
					
				</ul>

			</div>
			<div class="banner-left-grids">
				<div class="d-flex">
                    <div class="col-xl-2 col-md-3 col-sm-4 col-6 w3pvt-grids-1">
                        <h5 class="media-time text-wh font-weight-bold let mb-2">{{currentMediaDetails.movies_runtime}}</h5>
                       
					</div>
                    <div class="col-xl-2 col-md-3 col-sm-4 col-6 w3pvt-grids-1 pl-4">
                    <h5 class="media-year text-wh font-weight-bold let mb-2">{{currentMediaDetails.movies_year}}</h5>   
                        <h5 class="media-year text-wh font-weight-bold let mb-2">{{currentMediaDetails.audio_year}}</h5>  
                           
					
					</div>
					<div class="col-xl-8 col-md-6 col-sm-4 w3pvt-grids-2">
					</div>
				</div>
			</div>
		</div>
		<!-- //banner -->
	</div>
	<!-- //main banner -->

<div class="belowHeader wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s" style="z-index: 20;">
    <div class="movieBckgrd">
    <video autoplay controls muted :src="'video/' + currentMediaDetails.movies_trailer" class="fs-video"></video>
            
    </div>
    <div class="audio-wrapper">
    
    <img :src="'images/audio/' + currentMediaDetails.audio_cover" alt="album art" class="img-fluid"/>
    <audio autoplay controls :src="'audio/' + currentMediaDetails.audio_src"/>
    </div>






<div class="row"> <!-- 2-up for nav and media info -->
            <div class="media-info center">
                <!-- genres for video -->
                    <ul v-if="activeMediaType == 'video'" class="media-genres">
                        <li>
                            <a href="action" @click.prevent="loadMedia('action', null)">Action</a>
                        </li>
                        <li>
                            <a href="comedy" @click.prevent="loadMedia('comedy', null)">Comedy</a>
                        </li>
                        <li>
                            <a href="family" @click.prevent="loadMedia('family', null)">Family</a>
                        </li>
                        <li>
                            <a href="horror" @click.prevent="loadMedia('fantasy', null)">Fantasy</a>
                        </li>
                        <li>
                            <a href="horror" @click.prevent="loadMedia(null, null)">All</a>
                        </li>
                    </ul>

                <!-- genres for audio -->
                <ul v-else class="media-genres center">
                        <li>
                            <a href="action" @click.prevent="loadMedia('alternative', null)">Alternative</a>
                        </li>
                        <li>
                            <a href="comedy" @click.prevent="loadMedia('blues', null)">Blues</a>
                        </li>
                        <li>
                            <a href="family" @click.prevent="loadMedia('rock', null)">Rock</a>
                        </li>
                        <li>
                            <a href="horror" @click.prevent="loadMedia('soundtrack', null)">Soundtracks</a>
                        </li>
                        <li>
                            <a href="horror" @click.prevent="loadMedia(null, 'audio')">All</a>
                        </li>
                    </ul>
                <div class="thumbs-wrapper clearfix" style="border: 60px solid black;" >
                    <img v-if="activeMediaType == 'video'" v-for="media in retrievedMedia" :src="'images/video/' + media.movies_cover" alt="media thumb" @click="switchActiveMedia(media)" class="img-thumbnail rounded center-block media-thumb">
                   <div class="audioThumbSize"> <img v-if="activeMediaType == 'audio'" v-for="media in retrievedMedia" :src="'images/audio/' + media.audio_cover" alt="media thumb" @click="switchActiveMedia(media)" class="img-thumbnail rounded center-block media-thumb audio-thumb"><div>
                </div>
                </div>
            </div>       
        </div> <!-- end 2-up for media info -->
    </div>
    </div>
    `,

    data() {
        return {
            // set the default to video -> will get a random video via query on create
            activeMediaType: "video",

            // push first (or random) media object here (selected / filtered on create)
            currentMediaDetails: { 
                source: "avengers.mp4",
            },

            // could add more media types here in future
            mediaTypes: [
                { iconClass: "fas fa-headphones", description: "audio" },
                { iconClass: "fas fa-film", description: "video" },
                { iconClass: "fas fa-tv", description: "television" }
            ],

            retrievedMedia: [],

            // controls mute / unmute for video element
            vidActive: false
        }
    },

    created: function() {
        console.log('params:', this.$route.params);

        this.loadMedia(null, "video");
    },

    methods: {

        loadMedia(filter, mediaType) {
            // set the active media type
            if (this.activeMediaType !== mediaType && mediaType !== null) {
                this.activeMediaType = mediaType;
            }
            // build the url based on any filter we pass in (will need to expand on this for audio)

            let url = (filter == null) ? `./admin/index.php?media=${this.activeMediaType}` : `./admin/index.php?media=${this.mediaType}&&filter=${filter}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {                    
                    // we're gettin them all, dump it all in the media container
                    this.retrievedMedia = data;
                    // grab the first one in the list and make it active
                    this.currentMediaDetails = data[0];                    
                })
            .catch(function(error) {
                console.error(error);
            });
        },

        switchActiveMedia(media) {
            console.log(media);

            this.currentMediaDetails = media;
        }
    }
}