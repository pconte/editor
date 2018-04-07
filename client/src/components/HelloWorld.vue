<template>
  <div class="hello-world">
    <router-link :to="{ path: '/' }">Home</router-link>
    <router-link :to="{ path: '/files' }">List of Files</router-link>
    <h1>Welcome to the JSON File Editor demo</h1>
    <p>
      Browse a list of JSON files, navigate to a JSON file, edit JSON in a form.
    </p>
  </div>
</template>

<script>
export default {
  name: 'hello-world'
}
</script>
