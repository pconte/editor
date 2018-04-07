<template>
  <div class="files">
    <h1>Files</h1>

    <div v-for="file in files" :key="file">
      <ul>
        <li>
          <span><b>{{ file.fileName }}</b></span><br />
          <span>{{ file.schemaName }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FilesService from '@/services/FilesService'

export default {
  name: 'files',
  data () {
    return {
      files: []
    }
  },
  mounted () {
    this.getFiles()
  },
  methods: {
    async getFiles () {
      const response = await FilesService.fetchFiles()
      this.files = response.data
    }
  }
}
</script>

<style scoped>
  li { border: solid 1px red !important; }
</style>
