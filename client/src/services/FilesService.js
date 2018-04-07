import Api from '@/services/Api'

export default {
  fetchFiles () {
    return Api().get('files')
  },
  fetchFile (fileName) {
    return Api().get(`files/${fileName}`)
  },
  submitFile (fileName, model) {
    return Api().post('file', {
      'fileName': fileName,
      'model': model
    })
  }
}
