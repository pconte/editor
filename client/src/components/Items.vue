<template>
  <div class="items">
    <h1>Items</h1>
    This file will list all the items.

    <div v-for="item in items" :key="item">
      <p>
        <span><b>{{ item.title }}</b></span><br />
        <span>{{ item.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import ItemsService from '@/services/ItemsService'

export default {
  name: 'items',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.getItems()
  },
  methods: {
    async getItems () {
      const response = await ItemsService.fetchItems()
      this.items = response.data
    }
  }
}
</script>
