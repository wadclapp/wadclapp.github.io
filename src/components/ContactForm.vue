<template>
  <div id="contact">

    <p>Send a quick message with the form below.</p>

    <form id="form-contact" class="mt-5"
      action="https://formspree.io/william@clapp.uk.net"
      method="POST"
      @submit="checkForm"
    >
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="row">
            <div class="col-12">
              <div class="form-group" :class="{invalid: $v.name.$error}">
                <label for="contactName" class="sr-only">Your Name (required)</label>
                <input
                  id="contactName"
                  class="form-control"
                  name="name"
                  type="text"
                  placeholder="Name *"
                  @blur="$v.name.$touch()"
                  v-model="name"
                >
                <div class="form-text font-size-sm"
                v-if="$v.name.$error">
                  <p class="error-message"
                  v-if="!$v.name.minLength || !$v.name.maxLength">
                    Name must be between {{$v.name.$params.minLength.min}} and {{$v.name.$params.maxLength.max}} characters.
                  </p>
                  <p class="error-message"
                  v-if="!$v.name.required">
                    This field must not be empty.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="form-group" :class="{invalid: $v.email.$error}">
                <label for="contactEmail" class="sr-only">Your Email (required)</label>
                <input
                  id="contactEmail"
                  class="form-control"
                  name="email"
                  type="email"
                  placeholder="Email *"
                  @blur="$v.email.$touch()"
                  v-model="email"
                >
                <div
                class="validation-status"
                v-if="$v.email.$dirty"
                :class="{valid: !$v.email.$invalid}"
                >
                  <div class="validation-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div class="form-text font-size-sm"
                v-if="$v.email.$error">
                  <p class="error-message"
                  v-if="!$v.email.email">
                    Please provide a valid email address.
                  </p>
                  <p class="error-message"
                  v-if="!$v.email.required">
                    This field must not be empty.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="form-group" :class="{invalid: $v.subject.$error}">
                <label for="contactSubject" class="sr-only">Your Subject (required)</label>
                <input
                  id="contactSubject"
                  class="form-control"
                  name="subject"
                  type="text"
                  placeholder="Subject *"
                  @blur="$v.subject.$touch()"
                  v-model="subject"
                >
                <div class="form-text font-size-sm"
                v-if="$v.subject.$error">
                  <p class="error-message"
                  v-if="!$v.subject.minLength || !$v.subject.maxLength">
                    Subject must be between {{$v.subject.$params.minLength.min}} and {{$v.subject.$params.maxLength.max}} characters.
                  </p>
                  <p class="error-message"
                  v-if="!$v.subject.required">
                    This field must not be empty.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="form-group" :class="{invalid: $v.company.$error}">
                <label for="contactCompany" class="sr-only">Your Company</label>
                <input
                  id="contactCompany"
                  class="form-control"
                  name="company"
                  type="text"
                  placeholder="Company"
                  @blur="$v.company.$touch()"
                  v-model="company"
                >
                <div class="form-text font-size-sm"
                v-if="$v.company.$error">
                  <p class="error-message"
                  v-if="!$v.company.minLength || !$v.company.maxLength">
                    Company must be between {{$v.company.$params.minLength.min}} and {{$v.company.$params.maxLength.max}} characters if provided.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="form-group" :class="{invalid: $v.message.$error}">
            <label for="contactMessage" class="sr-only">Your message. (required)</label>
            <textarea
              id="contactMessage"
              class="form-control"
              name="message"
              rows="8"
              placeholder="Your message... *"
              @input="$v.message.$touch()"
              v-model="message"
            ></textarea>
            <div class="form-text">
              <div v-if="$v.message.$error">
                <p class="error-message"
                v-if="!$v.message.required">
                  This field must not be empty.
                </p>
              </div>
              <div class="text-muted text-right">
                <span v-if="approachingMaxMessageLength">
                  <span :class="{'text-danger font-weight-bold': this.message.length > $v.message.$params.maxLength.max}">
                    {{approachingMaxMessageLength}}
                  </span>&nbsp;<span class="font-size-sm">/ {{$v.message.$params.maxLength.max}}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="$v.$error && this.submitFailed === true" class="alert alert-danger">
        <p>Please fix the errors highlighted before submitting.</p>
      </div>
      <div v-if="!$v.$error && this.submitFailed === false" class="alert alert-success">
        <p>Thank you. Your message has been sent.</p>
      </div>

      <div class="text-right">
        <button type="submit" class="btn btn-accent text-white"
          :disabled="$v.$invalid">
          Send &#x2192;
        </button>
      </div>

    </form>


  </div>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      submitFailed: null,
      // fields:
      name: null,
      email: null,
      subject: null,
      company: null,
      message: null,
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(50),
    },
    email: {
      required,
      email,
    },
    subject: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(50),
    },
    company: {
      minLength: minLength(2),
      maxLength: maxLength(50),
    },
    message: {
      required,
      maxLength: maxLength(500),
    },
  },
  computed: {
    approachingMaxMessageLength() {
      if (this.message !== null) {
        if (this.message.length > 400) {
          return this.message.length
        }
        return null
      }
      return null
    },
  },
  methods: {
    checkForm(e) {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.submitFailed = false
        return true
      }
      e.preventDefault()
      this.submitFailed = true
      return false
    },
  },
}
</script>

<style scoped lang="scss">
</style>
