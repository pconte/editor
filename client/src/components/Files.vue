<template>
  <div class="files">
    <router-link :to="{ path: '/' }">Home</router-link>
    <router-link :to="{ path: '/files' }">List of Files</router-link>
    <h1>Files</h1>
    <ul>
      <li v-for="(file, index) in files" :key="index">
        <span><b>{{ file.fileName }}</b></span><br />
        <router-link :to="{ path: `/files/${file.fileName}` }">visit file form</router-link>
      </li>
    </ul>
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
  ul {
    display: inline-block;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: block;
    padding: 10px;
    margin: 10px;
    background: #f7f7f7;
  }
</style>
