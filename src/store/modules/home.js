import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
} from '@/services/modules/home';

export const fetchHomeGoodPriceDataAction = createAsyncThunk('fetchHomeGoodPriceData', async () => {
  const res = await getHomeGoodPriceData();
  return res;
});
export const fetchHomeHighScoreDataAction = createAsyncThunk('fetchHomeHighScoreData', async () => {
  const res = await getHomeHighScoreData();
  return res;
});
export const fetchHomeDiscountDataAction = createAsyncThunk('fetchHomeDiscountData', async () => {
  const res = await getHomeDiscountData();
  return res;
});
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeGoodPriceDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
    [fetchHomeHighScoreDataAction.fulfilled](state, { payload }) {
      state.highScoreInfo = payload;
    },
    [fetchHomeDiscountDataAction.fulfilled](state, { payload }) {
      state.discountInfo = payload;
    },
  },
});
export const homeActions = homeSlice.actions;
export default homeSlice.reducer;
