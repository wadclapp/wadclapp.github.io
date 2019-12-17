<template>

  <div id="app">
    <div id="navMobile">
      <div id="navMobile-inner">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link @click.native="closeMobileNav" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link @click.native="closeMobileNav" :to="{ name: 'contact' }">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div id="wrapper">

      <aside id="sidebar" role="aside" class="bg-dark">
        <div id="sidebar-main">
          <header>
            <img id="portrait"
              src="./assets/img/portrait.png"
              sizes="(min-width: 768px) 160px, 50px"
              srcset="./assets/img/portrait.png 160w, ./assets/img/portrait@2x.png 320w"
              alt="william clapp web development"
            >
            <h1>William Clapp</h1>
            <div class="location">
              <svg class="icon" aria-label="UK based web developer">
                <use xlink:href="icons.svg#places-optimizations"></use>
              </svg>
              Staffordshire, UK
            </div>
            <p>Freelance website and<br>web app development.</p>
          </header>
          <nav id="navigation" class="nav">
            <ul class="navbar-nav">
              <li><router-link to="/"><span class="link-wrap">Home<span class="link-icon"><span class="link-arrow">&#x2192;</span></span></span></router-link></li>
              <li><router-link to="/contact"><span class="link-wrap">Contact<span class="link-icon"><span class="link-arrow">&#x2192;</span></span></span></router-link></li>
            </ul>
          </nav>
          <div class="mt-4">
            <a href="https://twitter.com/wadclapp" class="text-white" target="_blank">
              <svg class="icon mr-2" aria-label="Follow on Twitter">
                <use xlink:href="brands.svg#twitter"></use>
              </svg>
            </a>
            <a href="https://linkedin.com/in/wadclapp" class="text-white" target="_blank">
              <svg class="icon" aria-label="Connect on LinkedIn">
                <use xlink:href="brands.svg#linkedin-in"></use>
              </svg>
            </a>
          </div>
        </div>
      </aside>

      <div id="primary">

        <header id="header" class="text-right">

          <div id="header-desktop">
            <div class="container-fluid">
              <!-- header text can go here -->
            </div>
          </div>

          <div id="header-mobile">

              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">

                  <a class="navbar-brand" href="#">
                    <img
                      src="./assets/img/portrait.png"
                      sizes="(min-width: 768px) 160px, 50px"
                      srcset="./assets/img/portrait.png 160w, ./assets/img/portrait@2x.png 320w"
                      alt="william clapp web development"
                    >
                  </a>

                  <p class="mb-0 text-uppercase font-weight-bold text-white">
                    William Clapp
                  </p>

                  <div class="navigation-toggler ml-auto"
                  @click="toggleMobileNav">
                    <button
                    class="navbar-toggler" type="button" aria-controls="navMobile" aria-label="Toggle navigation">
                      <div class="navbar-toggler-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </button>
                  </div>

                </div>
              </nav>

          </div>

        </header>

        <div id="secondary">

          <main id="main" role="main">
            <transition name="page" mode="out-in"
            v-on:enter="pageEnter"
            >
              <router-view/>
            </transition>
          </main>

          <aside id="aside" role="aside">
          </aside>

        </div>

        <footer id="footer" class="bg-primary text-white">
          <div class="container-fluid">
            <div class="footer-items">

              <div class="footer-item">
                <img id="logo" alt="william clapp web development logo" src="./assets/img/logo.svg" title="William Clapp web development services">
              </div>

              <div class="footer-item">
                Copyright &copy; {{ year }} <div class="d-inline-block">
                  William Clapp
                </div>
              </div>

              <div class="footer-item ml-md-auto">
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <p><router-link to="/contact">Contact</router-link></p>
                  </li>
                  <li class="list-inline-item d-none d-md-inline text-secondary">▪</li>
                  <li class="list-inline-item">
                    <p><router-link to="/privacy-terms">Privacy &amp; Terms</router-link></p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </footer>

      </div>

      <div id="loading">
        <img alt="william clapp web development logo" src="./assets/img/logo.svg">
      </div>

    </div>
  </div>

</template>

<script>
let i
const body = document.getElementsByTagName('body')[0]
const mediaQueryMdUp = window.matchMedia('(min-width: 768px)')

export default {
  metaInfo() {
    return {
      // default metaInfo.title
      title: 'William Clapp ▪ Freelance Web Development Services',
      // all titles will be injected into this template
      titleTemplate: '%s ▪ Clapp\'s Web Services',
      meta: [
        {
          vmid: 'og:title',
          property: 'og:title',
          name: 'twitter:title',
          content: 'William Clapp ▪ Freelance Web Development Services',
        },
        {
          name: 'author',
          content: this.$siteName,
        },
        {
          vmid: 'og:image',
          property: 'og:image',
          name: 'twitter:image',
          content: `${this.$siteUrl}/img/social.png`,
        },
        {
          vmid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:site',
          content: this.$handleTwitter,
        },
        {
          name: 'twitter:creator',
          content: this.$handleTwitter,
        },
      ],
    }
  },
  data() {
    return {
      year: null,
      mobileNavExpanded: false,
    }
  },
  methods: {
    toggleMobileNav() {
      if (this.mobileNavExpanded === false) {
        this.openMobileNav()
      } else {
        this.closeMobileNav()
      }
    },
    openMobileNav() {
      const toggler = document.getElementsByClassName('navbar-toggler')[0]
      toggler.classList.add('open')
      body.classList.add('active-mobile-nav')
      document.getElementById('primary').scrollTo = 0
      this.mobileNavExpanded = true
    },
    closeMobileNav() {
      const toggler = document.getElementsByClassName('navbar-toggler')[0]
      toggler.classList.remove('open')
      body.classList.remove('active-mobile-nav')
      this.mobileNavExpanded = false
    },
    pageEnter() {
      document.getElementById('primary').scrollTop = 0
    },
  },
  mounted() {
    const date = new Date()

    // hide mobile nav on desktop
    function hideMobileNav(mediaQuery) {
      if (mediaQuery.matches) {
        if (body.classList.contains('active-mobile-nav')) {
          const toggler = document.getElementsByClassName('navbar-toggler')[0]
          toggler.classList.remove('open')
          body.classList.remove('active-mobile-nav')
          this.mobileNavExpanded = false
        }
      }
    }
    mediaQueryMdUp.addListener(hideMobileNav)
    hideMobileNav(mediaQueryMdUp) // on load

    // year
    this.year = date.getFullYear()

    // loading
    const loading = document.getElementById('loading')
    const services = document.querySelectorAll('#service-overview .service')

    if (mediaQueryMdUp.matches) {
      body.classList.add('landed-desktop', 'loading', 'loading-1', 'loading-2')
      if (services.length > 0) {
        for (i = 0; i < services.length; i += 1) {
          services[i].classList.add('loading')
        }
      }
    } else {
      body.classList.add('landed-mobile')
    }

    // loading animations
    setTimeout(() => {
      loading.querySelector('img').style.opacity = '0'

      setTimeout(() => {
        body.classList.remove('loading-2')

        setTimeout(() => {
          body.classList.remove('loading-1')

          if (services.length > 0) {
            i = 0
            const loadServices = setInterval(() => {
              services[i].classList.remove('loading')
              i += 1
              if (i >= services.length) {
                clearInterval(loadServices)
              }
            }, 250)
          }

          setTimeout(() => {
            body.classList.remove('loading')
          }, 1000)
        }, 1000)
      }, 1000)
    }, 2000)
  },
}
</script>


<style lang="scss" scoped>
</style>
