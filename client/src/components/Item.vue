<template>
  <div class="item">
    <h1>Item</h1>
    <div class="panel-body">
      <form id="item-form" @submit="postItem()">
        <vue-form-generator :schema="schema" :model="item"></vue-form-generator>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import ItemsService from '@/services/ItemsService'

export default {
  name: 'item',
  data () {
    return {
      item: {},
      schema: {
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
  }
}
</script>
