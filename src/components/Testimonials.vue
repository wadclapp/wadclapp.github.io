<template>
  <div id="testimonials" class="mt-5">

    <div class="testimonial-wrap">

      <div class="testimonial-nav">
        <div class="nav-dot"
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :class="{ active: index === t }"
        @click="selectTestimonial(index)">
          <div class="dot"></div>
        </div>
      </div>

      <div class="testimonial-container">
        <transition name="fade" mode="out-in">
          <div class="testimonial"
          v-for="(testimonial, index) in testimonials"
          :key="index"
          v-if="t === index">
            <img src="@/assets/img/quotation.svg" alt="quote" class="quotation float-left" width="32px">
            <p>{{testimonial.testimonial}}</p>
            <div class="clearfix"></div>
            <div class="testimonial-author">
              <strong>{{testimonial.client}}</strong>
              <div>{{testimonial.author}}, {{testimonial.position}}</div>
            </div>
          </div>
        </transition>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      t: 0,
      interval: null,
      minHeight: null,
      testimonials: [
        {
          client: 'SO VR',
          author: 'Christopher Holland',
          position: 'CEO & Founder',
          testimonial: 'Will produced us an amazing website with all the functionality and practicality I needed as a start-up business. He was always there ready to help no matter the time or day and I will definitely be using him again to upgrade my website as my business grows.',
        },
        {
          client: 'Tailwind Group',
          author: 'Rob Collins',
          position: 'Senior Producer',
          testimonial: 'Will has been excellent from start to finish. We required a unique website design that needed to be created from scratch. Will took all the mock-up material we had created and made it come to life. He stuck to our agreed timelines and delivered the work in a seamless way. I can’t recommend him more highly. Thank You.',
        },
        {
          client: 'Kodisto',
          author: 'Graeme Lambert',
          position: 'Director',
          testimonial: 'Fantastic work produced and I really appreciated the quick responses to my feedback and questions. I would happily recommend Will to anyone.',
        },
      ],
    }
  },
  methods: {
    selectTestimonial(index) {
      clearInterval(this.interval)
      this.t = index
      this.cycleTestimonials()
    },
    cycleTestimonials() {
      this.interval = setInterval(() => {
        if (this.t >= this.testimonials.length - 1) {
          this.t = 0
        } else {
          this.t += 1
        }
      }, 10000)
    },
  },
  mounted() {
    this.cycleTestimonials() // init
  },
}
</script>

<style lang="scss" scoped>
#testimonials {
  min-height: 250px;

  .testimonial-container {
    background-color: $gray-100;
  }

  .testimonial {
    min-height: 150px;
    padding: 2rem;
    overflow: hidden;

    .testimonial-author {
      position: relative;
      transition: opacity $trans-duration-long $trans-easing, left $trans-duration-long $trans-easing;
    }
  }

  .quotation {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  .testimonial-nav {
    text-align: right;
    margin-top: .5rem;

    .nav-dot {
      padding: .25rem;
      display: inline-block;
      cursor: pointer;
      margin-left: 0.1rem;

      .dot {
        width: .5rem;
        height: .5rem;
        background-color: $gray-600;
        transition: $transition-base;
      }

      &:hover {
        .dot {
          background-color: $primary;
        }
      }

      &.active {
        .dot {
          background-color: $secondary;
        }
      }
    }
  }
}

.testimonial.fade-enter .testimonial-author,
.testimonial.fade-enter .quotation {
  opacity: 0;
  left: -2rem;
}

.testimonial.fade-enter-to .testimonial-author,
.testimonial.fade-leave .testimonial-author,
.testimonial.fade-leave-to .testimonial-author {
  left: 0;
  opacity: 1;
}

.testimonial.fade-enter-to .quotation,
.testimonial.fade-leave .quotation,
.testimonial.fade-leave-to .quotation {
  opacity: 1;
}

</style>
