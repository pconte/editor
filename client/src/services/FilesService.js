import Api from '@/services/Api'

export default {
  fetchFiles () {
    return Api().get('files')
  },
  fetchFile (fileName) {
    return Api().get(`files/${fileName}`)
  },
  submitFile (payload) {
    return Api().post('file', payload)
  }
}
