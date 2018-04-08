<template>
  <div class="file-form">
    <!--
    <form-schema v-if="schema" ref="formSchema" :schema="schema" v-model="model2" @submit="submit">
      <button type="submit">Submit</button>
    </form-schema>
    -->
    <react-jsonschema-form v-if="schema" ref="form2" :schema="schema" v-model="model2" :formData="model2" :onSubmit="submit2" :onError="error" />
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
    },

    error () {
      console.log('error')
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
    text-align: left;
    display: inline-block;
    padding: 10px;
    background: #f7f7f7;
    border-bottom: solid 2px black;
    border-right: solid 2px black;
  }

  legend {
    background: white;
    font-weight: bold;
    border-bottom: solid 2px black;
    border-right: solid 2px black;
    padding: 5px;
    margin: 0 0 10px -20px;
  }

  label {
    font-weight: bold;
  }

  label + div {
    display: none;
  }

  .required {
    color: red;
    margin-left: 3px;
  }

  input,
  select {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    appearance: none;
    background: white;
  }

  button {
    float: right;
    border-radius: 10px;
    padding: 5px;
    border-bottom: solid 2px black;
    border-right: solid 2px black;
  }
</style>
