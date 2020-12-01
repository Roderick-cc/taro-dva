import Taro from '@tarojs/taro'


export default {
  namespace: 'feeds',
  state: { list: [{ a: 'aaaaaaaa' }] },
  effects: {
    *search(_, { all, call, put }) {
      try {
        console.log('ssssssssssssdddddddddddddddddddda')
      } finally {

      }
    },
    *load({ payload }, { all, call, put }) {
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    saveMore(state, { payload: list }) {
      return { ...state, list: [...state.list, ...list] };
    },
  },
};
