<template>
  <div class="item">
    <h1>Item</h1>
    This file will contain the item detail.
    <p>
      <span><b>{{ item.title }}</b></span><br />
      <span>{{ item.description }}</span>
    </p>
    <button v-on:click="postItem()">Post</button>
  </div>
</template>

<script>
import ItemsService from '@/services/ItemsService'

export default {
  name: 'item',
  data () {
    return {
      item: {}
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
