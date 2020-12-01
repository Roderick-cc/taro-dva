import Taro from '@tarojs/taro'


export default {
  namespace: 'abc',
  state: { abc: [] },
  effects: {
    *search(_, { all, call, put }) {
      try {
        console.log('2222')
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
