<template>
  <div class="file-form">
    <h1>File Form</h1>
    <form-schema v-if="schema" ref="formSchema" :schema="schema" v-model="model2" @submit="submit">
      <button type="submit">Submit</button>
    </form-schema>
  </div>
</template>

<script>
import FilesService from '@/services/FilesService'
import FormSchema from 'vue-json-schema'
import _ from 'lodash'

export default {
  name: 'file-form',

  components: { FormSchema },

  data: () => ({
    model: null,
    schema: null
  }),

  mounted () {
    this.getFile(this.$route.params.fileName)
  },

  methods: {
    async getFile (fileName) {
      const response = await FilesService.fetchFile(fileName)

      this.model = response.data.model
      this.schema = response.data.schema
    },

    submit (e) {
      FilesService.submitFile(this.model)

      e.preventDefault()
    }
  },

  computed: {
    model2: {
      get () {
        return this.model
      },
      set (value) {
        this.model = Object.assign(this.model, _.pickBy(value, _.identity))
      }
    }
  }
}
</script>

<style>
  form {
    display: inline-block;
    padding: 10px;
    background: #f7f7f7;
  }

  input,
  select {
    display: block;
    margin: 10px;
  }
</style>
