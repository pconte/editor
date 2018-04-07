<template>
  <div class="item">
    <h1>Item</h1>
    <form-schema ref="formSchema" :schema="schema" v-model="model2" @submit="submit">
      <button type="submit">Subscribe</button>
    </form-schema>
  </div>
</template>

<script>
import ItemsService from '@/services/ItemsService'
import FormSchema from 'vue-json-schema'
import schema from '@/schemas/newsletter-subscription.json'

import _ from 'lodash'

export default {
  name: 'item',
  computed: {
    model2: {
      get () {
        return this.model
      },
      set (value) {
        this.model = Object.assign(this.model, _.pickBy(value, _.identity))
      }
    }
  },
  data: () => ({
    model: {},
    schema: schema
  }),
  mounted () {
    this.getFile()
  },
  methods: {
    async submit (e) {
      // this.model contains the valid data according your JSON Schema.
      // You can submit your model to the server here
      e.preventDefault()

      const response = await ItemsService.postItem(this.model)
      this.model = response.data
    },
    async getFile () {
      const response = await ItemsService.fetchFile()
      // console.log(response.data)
      this.model = response.data
      // console.log(this.$refs.formSchema.form())
    }
  },
  components: { FormSchema }
}
</script>
