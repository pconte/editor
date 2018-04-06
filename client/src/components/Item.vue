<template>
  <div class="item">
    <h1>Item</h1>
    This file will contain the item detail.
  </div>
</template>

<script>
export default {
  name: 'item',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.getItem()
  },
  methods: {
    async getItem () {
      const response = await ItemsService.fetchItem()
      this.posts = response.data
    }
  }
}
</script>
