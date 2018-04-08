<template>
  <div class="files">
    <router-link :to="{ path: '/' }">Home</router-link>
    <router-link :to="{ path: '/files' }">List of Files</router-link>
    <h1>Files</h1>
    <ul>
      <li v-for="(file, index) in files.children" :key="index">
        <span><b>{{ file.name }}</b></span><br />
        <router-link v-if="file.type !== 'directory'" :to="{ path: `/files/${file.name}` }">visit file form</router-link>
      </li>
    </ul>
    <item :model="files"></item>
  </div>
</template>

<script>
import FilesService from '@/services/FilesService'
import Item from '@/components/Item'
import _ from 'lodash'

export default {
  name: 'files',

  components: { Item },

  data () {
    return {
      files: {}
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

      this.files = this.deepMap(this.files, (val, key) => {
        if (key === 'path') {
          return val.replace('../files/', '')
        } else {
          return val
        }
      })
    },

    deepMap (obj, iterator, context) {
      return _.transform(obj, (result, val, key) => {
        result[key] = _.isObject(val)
          ? this.deepMap(val, iterator, context)
          : iterator.call(context, val, key, obj)
      })
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
    text-align: left;
    display: block;
    padding: 10px;
    margin: 10px;
    background: #f7f7f7;
  }
</style>
