import Api from '@/services/Api'

export default {
  fetchFiles () {
    return Api().get('files')
  },
  fetchFile () {
    return Api().get('file')
  },
  postItem (payload) {
    return Api().post('item', payload)
  }
}
