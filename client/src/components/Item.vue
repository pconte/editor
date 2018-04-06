<template>
  <div class="item">
    <h1>Item</h1>
    <div class="panel-body">
      <form id="item-form" @submit="postItem()">
        <vue-form-generator :schema="schema2" :model="item"></vue-form-generator>
        <button type="submit">Submit</button>
      </form>
    </div>
    <form-schema :schema="schema" v-model="model" @submit="submit" method="POST">
      <button type="submit">Subscribe</button>
    </form-schema>
  </div>
</template>

<script>
import ItemsService from '@/services/ItemsService'
import FormSchema from 'vue-json-schema'
import schema from '../schemas/newsletter-subscription.json'

export default {
  name: 'item',
  data () {
    return {
      model: {},
      schema: schema,
      item: {},
      schema2: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            id: 'title',
            label: 'Title (disabled text field)',
            model: 'title',
            readonly: true,
            disabled: true
          },
          {
            type: 'input',
            inputType: 'text',
            id: 'description',
            label: 'Description',
            model: 'description',
            placeholder: '...',
            featured: true,
            required: true
          }
        ]
      }
    }
  },
  mounted () {
    this.getItem()
  },
  methods: {
    async submit (e) {
      // this.model contains the valid data according your JSON Schema.
      // You can submit your model to the server here
      e.preventDefault()

      const response = await ItemsService.postItem(this.model)
      this.model = response.data
    },
    async getItem () {
      const response = await ItemsService.fetchItem()
      this.item = response.data
    },
    async postItem () {
      const itemForm = document.getElementById('item-form')
      let payload = {
        'title': itemForm.title.value,
        'description': itemForm.description.value
      }

      const response = await ItemsService.postItem(payload)
      this.item = response.data
    }
  },
  components: { FormSchema }
}
</script>
