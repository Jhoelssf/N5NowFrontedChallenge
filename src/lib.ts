import axios from 'axios'

export const Get = async <R>(url: string): Promise<R> => {
  return await axios.get(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export const Post = async <R>(url: string, data: any = {}): Promise<R> => {
  return await axios.post(url, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export const Put = async <R>(url: string, data: any = {}): Promise<R> => {
  return await axios.put(url, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
