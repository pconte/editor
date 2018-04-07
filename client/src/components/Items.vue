<template>
  <div class="items">
    <h1>Items</h1>
    This file will list all the items.

    <div v-for="item in items" :key="item">
      <ul>
        <li>
          <span><b>{{ item.fileName }}</b></span><br />
          <span>{{ item.schemaName }}</span>
        </li>
      </ul>
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
      const response = await ItemsService.fetchFiles()
      console.log(response.data)
      this.items = response.data
    }
  }
}
</script>

<style scoped>
  li { border: solid 1px red !important; }
</style>
