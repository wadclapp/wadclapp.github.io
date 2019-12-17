<template>
  <div class="image-gallery">

    <!-- Root element of PhotoSwipe. Must have class pswp. -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe.
    It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

      <!-- Slides wrapper with overflow:hidden. -->
      <div class="pswp__scroll-wrap">

        <!-- Container that holds slides.
        PhotoSwipe keeps only 3 of them in the DOM to save memory.
        Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">

          <div class="pswp__top-bar">

            <!--  Controls are self-explanatory. Order can be changed. -->

            <div class="pswp__counter"></div>

            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

            <!-- <button class="pswp__button pswp__button--share" title="Share"></button> -->

            <!-- <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> -->

            <!-- <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> -->

            <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
            <!-- element will get class pswp__preloader--active when preloader is running -->
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div> -->

          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
          </button>

          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
          </button>

          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
/* eslint-disable camelcase */
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'

export default {
  props: [
    'images',
    'clickIndex',
  ],
  data() {
    return {
      gallery: null,
      pswpElement: null,
      items: [],
      options: {
        index: 0,
        showHideOpacity: true, // If dimensions of your small thumbnail don't match dimensions of large image, consider enabling zoom+fade transition
        getThumbBoundsFn(index) {
          // find thumbnail element
          const thumbnail = document.querySelectorAll('.image-thumbnail-visible')[index]

          if (thumbnail) {
            // get window scroll Y
            const pageYScroll = window.pageYOffset || document.documentElement.scrollTop

            // get position of element relative to viewport
            const rect = thumbnail.getBoundingClientRect()

            return {
              x: rect.left,
              y: rect.top + pageYScroll,
              w: rect.width,
            }
          }

          return undefined
        },
      },
    }
  },
  watch: {
    clickIndex() {
      this.options.index = this.clickIndex

      if (this.clickIndex !== null) {
        // Initialise PhotoSwipe gallery
        this.gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, this.items, this.options)

        this.gallery.init()

        // reset imageThumbnailClickIndex on gallery close/destroy
        // gallery listeners are cleared up on destroy
        this.gallery.listen('destroy', () => {
          this.$emit('resetImageThumbnailClickIndex')
        })
      }
    },
  },
  created() {
    if (this.images) {
      this.images.forEach(image => {
        this.items.push({
          src: `/img/portfolio/${image.perspectiveFilename}`,
          // msrc: ,
          w: 1920,
          h: 1080,
          title: image.caption,
          author: '',
        })
      })
    }
  },
  mounted() {
    // eslint-disable-next-line
    this.pswpElement = document.getElementsByClassName('pswp')[0]
  },
}
</script>

<style lang="scss">
@import '~photoswipe/dist/photoswipe.css';
@import '~photoswipe/dist/default-skin/default-skin.css';
</style>

