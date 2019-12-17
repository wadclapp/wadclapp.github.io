<template>
  <div class="view-contact">
    <section class="hero">
      <div class="container">
        <h1>Contact</h1>
        <p>Interested in my services or have a question? Please get in touch.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">

        <contact-form></contact-form>

      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import contactForm from '@/components/ContactForm.vue'

export default {
  name: 'contact',
  components: {
    contactForm,
  },
  metaInfo: {
    title: 'Contact',
    meta: [
      {
        vmid: 'og:title',
        property: 'og:title',
        name: 'twitter:title',
        content: 'Contact',
      },
      {
        vmid: 'description',
        property: 'og:description',
        name: 'description',
        content: 'Looking for a uk-based freelance web developer to develop your website or app? Whether you\'re an agency or small-medium business, please get in touch and tell me about your project.',
      },
    ],
  },
}
</script>
