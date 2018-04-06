<template>
  <div class="item">
    <h1>Item</h1>
    This file will contain the item detail.
    <p>
      <span><b>{{ item.title }}</b></span><br />
      <span>{{ item.description }}</span>
    </p>
    <button v-on:click="postItem()">Post</button>
    <div class="panel-body">
      <vue-form-generator :schema="schema" :model="item"></vue-form-generator>
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
            label: 'Title (disabled text field)',
            model: 'title',
            readonly: true,
            disabled: true
          },
          {
            type: 'input',
            inputType: 'text',
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
      const response = await ItemsService.postItem({'key': 'testing'})
      this.item = response.data
    }
  }
}
</script>
