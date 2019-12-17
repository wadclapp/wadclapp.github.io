<template>
  <div class="image-thumbnails-container mb-4">
    <div
      itemscope
      itemtype="http://schema.org/ImageGallery"
      class="image-thumbnails"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image-thumbnail"
        :class="index < 5 ? 'image-thumbnail-visible' : ''"
      >
        <figure
          itemprop="associatedMedia"
          itemscope
          itemtype="http://schema.org/ImageObject"
        >

          <!-- Visible thumbnails -->
          <template v-if="index < 5">
            <a
              :href="`/img/portfolio/${image.filename}`"
              itemprop="contentUrl"
              @click.prevent="openGallery(index)"
            >
              <img
                :src="`/img/portfolio/${image.filename}`"
                sizes="(min-width: 576px) 350px, 100vw"
                :srcset="`/img/portfolio/${image.filename} 350w, /img/portfolio/${image.filenameRetina} 600w`"
                itemprop="thumbnail"
                :alt="image.alt"
              >
            </a>
            <figcaption itemprop="caption description">
              {{image.caption}}

              <span itemprop="copyrightHolder">Photo: William Clapp</span>
            </figcaption>
          </template>

          <!-- Remaining images without <img> but still include for SEO -->
          <a v-if="index >= 5"
            :href="`/img/portfolio/${image.filename}`"
            itemprop="contentUrl"
          >
            <figcaption
              itemprop="caption description"
            >
              {{image.caption}}

              <span itemprop="copyrightHolder">Photo: William Clapp</span>
            </figcaption>
          </a>
        </figure>
      </div>

    </div>

    <!-- <p><a class="text-link" @click.prevent="openGallery(0)"><small>View image gallery ({{images.length}})</small></a></p> -->
  </div>
</template>

<script>
export default {
  props: [
    'images',
  ],
  methods: {
    openGallery(index) {
      this.$emit('imageThumbnailClicked', index)
    },
  },
}
</script>

<style lang="scss">
.image-thumbnails {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 15;
  margin: 0 -.25rem;

  .image-thumbnail {
    flex: 0 0 100%;
    max-width: 100%;
    background-color: $white;

    &.image-thumbnail-visible {
      figure {
        margin: 0 .25rem;

        img {
          transition: border $trans-duration $trans-easing, box-shadow $trans-duration $trans-easing;
          border: $border-width solid $gray-100;

          &:hover {
            border-color: $accent;
            box-shadow: $box-shadow;
          }
        }
      }
    }

    figcaption {
      display: none;
    }
  }

  @include media-breakpoint-between(sm, lg) {
    .image-thumbnail {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @include media-breakpoint-up(xl) {
    .image-thumbnail {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }

  @include media-breakpoint-down(lg) {
    .image-thumbnail {
      margin-bottom: .5rem;
    }
  }
}

</style>

