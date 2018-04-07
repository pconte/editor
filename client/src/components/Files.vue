<template>
  <div class="files">
    <h1>Files</h1>

    <div v-for="file in files" :key="file">
      <ul>
        <li>
          <span><b>{{ file.fileName }}</b></span><br />
          <router-link :to="{ path: `/files/${file.fileName}` }">visit file form</router-link>
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
      console.log(this.files)
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    padding: 10px;
    margin: 10px;
    background: #f7f7f7;
  }
</style>
