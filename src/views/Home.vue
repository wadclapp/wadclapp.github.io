<template>
  <div class="view-home">
    <section class="height-cover py-0 pb-5 pt-sm-5 d-flex align-items-center">
      <div class="m-auto max-w-900">

        <div id="intro-text" class="mb-sm-5">
          <h1>Freelance Web Development Services</h1>
          <p class="max-w-700 mx-auto lead">Hi. I'm a freelance Web Developer. I develop modern custom websites and web applications, for both web <mark>agency overflow</mark> and <mark>small-medium businesses</mark>.</p>
        </div>

        <div id="service-overview">
          <div class="service">
            <div class="service-icon">
              <svg class="icon icon-xl text-primary">
                <use xlink:href="icons.svg#web-development"></use>
              </svg>
            </div>
            <div class="service-box text-white">
              <h4>Custom web applications</h4>
              <p>Reactive and fast universal web apps.</p>
            </div>
          </div>
          <div class="service">
            <div class="service-icon">
              <svg class="icon icon-xl text-primary">
                <use xlink:href="icons.svg#responsive-design"></use>
              </svg>
            </div>
            <div class="service-box text-white">
              <h4>Custom responsive <span class="d-inline-block">front-ends</span></h4>
              <p>Bringing designs to life with responsive web design.</p>
            </div>
          </div>
          <div class="service">
            <div class="service-icon">
              <svg class="icon icon-xl text-primary">
                <use xlink:href="icons.svg#content-management"></use>
              </svg>
            </div>
            <div class="service-box text-white">
              <h4>Custom WordPress websites</h4>
              <p>Hooking up custom front-ends to the WordPress CMS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Web projects &#x21b4;</h2>
        <p>A selection of websites and apps I have developed.</p>

        <portfolio-thumbnails :images="projects" @imageThumbnailClicked="imageThumbnailClickIndex = $event"></portfolio-thumbnails>

        <div class="text-muted text-center"><small><em>Please <router-link to="/contact">get in touch</router-link> for links to live websites I've developed.</em></small></div>

        <testimonials></testimonials>

      </div>
    </section>

    <section id="section-contact" class="section bg-primary text-white subtle-bg-container">
      <div class="container-fluid">

        <h2>Contact &#x21b4;</h2>

        <contact-form></contact-form>

      </div>

      <div class="subtle-bg">
        <svg>
          <use xlink:href="icons.svg#paper-plane"></use>
        </svg>
      </div>
    </section>

    <section class="section">
      <div class="container">

        <h2>About &#x21b4;</h2>
        <div class="max-w-700">
          <p>I aim to deliver high-quality websites remotely at affordable prices, mostly from provided web designs, writing clean code using modern workflows and ensuring easy maintainability, whilst taking my clients through an efficient process from start to finish.</p>

          <p>I am experienced in and regularly use the following web technologies: HTML, CSS/SASS, JavaScript, Vue.js/Nuxt.js, Firebase, Bootstrap 4, and custom WordPress. I also have some involvement with Express.js/Node.js, Analytics, Python, Geospatial development, and Search Engine Marketing (SEM/SEO).</p>
        </div>

        <p>Interested? Please <router-link to="/contact">get in touch</router-link>.</p>

      </div>
    </section>

    <!-- <section id="section-twitter" class="section bg-secondary text-white subtle-bg-container">
      <div class="container-fluid">

        <twitter-tweet></twitter-tweet>

      </div>

      <div class="subtle-bg">
        <svg>
          <use xlink:href="brands.svg#twitter"></use>
        </svg>
      </div>
    </section> -->

    <image-gallery :images="projects" :clickIndex="imageThumbnailClickIndex" @resetImageThumbnailClickIndex="imageThumbnailClickIndex = null"></image-gallery>
  </div>
</template>

<script>
// @ is an alias to /src
import testimonials from '@/components/Testimonials.vue'
import twitterTweet from '@/components/TwitterTweet.vue'
import contactForm from '@/components/ContactForm.vue'
import portfolioThumbnails from '@/components/PortfolioThumbnails.vue'
import imageGallery from '@/components/ImageGallery.vue'

export default {
  name: 'home',
  components: {
    testimonials,
    twitterTweet,
    contactForm,
    portfolioThumbnails,
    imageGallery,
  },
  metaInfo: {
    titleTemplate: null,
    meta: [
      {
        vmid: 'description',
        property: 'og:description',
        name: 'description',
        content: 'Bringing website designs to life, for both web design agency overflow and small-medium businesses. Custom front-ends, web apps and custom WordPress.',
      },
    ],
  },
  data() {
    return {
      imageThumbnailClickIndex: null,
      projects: [
        {
          link: 'http://tailwind.group',
          filename: 'tailwind.png',
          filenameRetina: 'tailwind@2x.jpg',
          perspectiveFilename: 'tailwind_hd.jpg',
          caption: 'Web Development',
          alt: 'website development communication',
        },
        {
          link: '',
          filename: 'rocketeer.png',
          filenameRetina: 'rocketeer@2x.jpg',
          perspectiveFilename: 'rocketeer_hd.jpg',
          caption: 'Web Development',
          alt: 'website development education',
        },
        {
          link: '',
          filename: 'sovr.png',
          filenameRetina: 'sovr@2x.jpg',
          perspectiveFilename: 'sovr_hd.jpg',
          caption: 'Web Development',
          alt: 'website development vr',
        },
        {
          link: '',
          filename: 'highlight.png',
          filenameRetina: 'highlight@2x.jpg',
          perspectiveFilename: 'highlight_hd.jpg',
          caption: 'Web Development',
          alt: 'website development design',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.height-cover {
  text-align: center;
  background-color: $gray-100;
  position: relative;
  z-index: 5;
  padding-left: 1rem;
  padding-right: 1rem;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/perspective-mockup.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 0;
    opacity: 0.1;
  }
}

#service-overview {
  .service {
    transition: $transition-base;
    padding: 1rem;
    user-select: none;

    // service layout
    display: flex;
    flex-direction: column;
    align-items: center;

    .service-icon {
      margin: 0 auto 1rem;
      position: relative;
      height: 6rem;
      width: 6rem;

      svg.icon {
        transition: all $trans-duration $easeOutBack;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .service-box {
      flex: 1;
      width: 100%;
      background-color: $primary;
      padding: 1rem;

      p {
        margin-bottom: 0;
      }
    }

    &.loading {
      .service-icon {
        svg.icon {
          height: 0;
          width: 0;
          top: 100%;
        }
      }
    }
  }
}

@include media-breakpoint-between(sm, lg) {
  #service-overview {
    .service {
      // service layout
      flex-direction: row;

      .service-icon {
        margin: 0 1rem 0 0;
      }
    }
  }
}

@include media-breakpoint-up(xl) {
  #service-overview {
    display: flex;

    .service {
      flex: 0 0 33%;
      max-width: 33%;
    }
  }
}

@include media-breakpoint-down(xs) {
  #intro-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
    min-height: calc(100vh - 75px);
  }
}
</style>
