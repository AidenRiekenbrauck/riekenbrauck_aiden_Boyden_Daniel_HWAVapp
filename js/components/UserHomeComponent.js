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
                                                                                <li><a href="index.html#/UserHome" id="products">Home</a></li>
                                                                                <li><a href="index.html#/Users" id="services">Users</a></li>
                                                                                <li><a href="#" id="menu"></a></li>
                                                                                <li><a href="index.html#/login" id="about">Settings</a></li>
                                                                                <li><a href="index.html#/login" id="contact">Logout</a></li>
                                                                                </ul>
                                                                                </div>

                                                                                <div id="nav2">
                                                                                <ul>
                                                                                <li id="bottomNav1">
                                                                                <a>
                                                                                <li id="bottomNav1">
                                                                                <a href="index.html#/useraudio">
                                                                                <svg style="height: 22px;" class="svg-inline--fa fa-headphones fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="headphones" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"></path></svg>
                                                                                </a>

                                                                                </li>
                                                                                </a>
                                                                                </li>

                                                                                <li id="bottomNav1">
                                                                                <a href="index.html#/userhome">
                                                                                <svg class="svg-inline--fa fa-film fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="film" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path></svg>
                                                                                </a>

                                                                                </li>

                                                                                <li id="bottomNav1">
                                                                                <a href="index.html#/userTV">
                                                                                <svg class="svg-inline--fa fa-tv fa-w-20" aria-hidden="true" data-prefix="fas" data-icon="tv" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h245.1v32h-160c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-160v-32H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h512v288z"></path></svg>
                                                                                </a>

                                                                                </li>
                                                                                </ul>
                                                                                </div>

                                                                                </div>
                                                                                    </nav>
                                                                                </header>







                                                                                <link rel="stylesheet" href="css/login.css">
<div class="main-top overlay4" id="home">


		<!-- banner -->
		<div class="banner_w3lspvt">
			<div class="csslider infinity" id="slider1">
				<ul class="banner_slide_bg">
                    <li class="slider-style">
                    <div class="scroll-left">
                    <p>{{currentMediaDetails.movies_title}}</p>
                    </div>
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
    <video controls :src="'video/' + currentMediaDetails.movies_trailer" class="fs-video"></video>

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
                <div class="thumbs-wrapper clearfix" style="border: 60px solid black;width: 100vw;" >
                    <img v-if="activeMediaType == 'video'" v-for="media in retrievedMedia" :src="'images/video/' + media.movies_cover" alt="media thumb" @click="switchActiveMedia(media)" class="img-thumbnail rounded center-block media-thumb">
                   <div class="audioThumbSize"> <img v-if="activeMediaType == 'audio'" v-for="media in retrievedMedia" :src="'images/audio/' + media.audio_cover" alt="media thumb" @click="switchActiveMedia(media)" class="img-thumbnail rounded center-block media-thumb audio-thumb"><div>
                </div>
                </div>
            </div>
        </div> <!-- end 2-up for media info -->
    </div>
    </div>
    <footer class="foot col-sm-12 fixed-bot">
      <h1 class="foot-social">Check out our social media</h1>
      <div class="social">
        <a href="https://twitter.com/?lang=en">TWITTER</a>
        <a href="https://www.instagram.com/?hl=en">INSTAGRAM</a>
        <a href="https://www.facebook.com/">FACEBOOK</a>
      </div>
      <div class="copy">
        <p>©2019 ROKU APP</p>
      </div>
    </footer>
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
