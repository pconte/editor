<template>
  <div class="file-form">
    <router-link :to="{ path: '/' }">Home</router-link>
    <router-link :to="{ path: '/files' }">List of Files</router-link>
    <h1>File Form</h1>
    <form-schema v-if="schema" ref="formSchema" :schema="schema" v-model="model2" @submit="submit">
      <button type="submit">Submit</button>
    </form-schema>
    <react-jsonschema-form v-if="schema" ref="form2" :schema="schema" v-bind:formData="model2" :onSubmit="submit2" />
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
      FilesService.submitFile(this.$route.params.fileName, this.model)

      e.preventDefault()
    },

    submit2 (model) {
      console.log(model.formData)
      FilesService.submitFile(this.$route.params.fileName, model.formData)
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
