import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getHomeGoodPriceData, getHomeHighScoreData } from '@/services/modules/home';

export const fetchHomeGoodPriceDataAction = createAsyncThunk('fetchHomeGoodPriceData', async () => {
  const res = await getHomeGoodPriceData();
  return res;
});
export const fetchHomeHighScoreDataAction = createAsyncThunk('fetchHomeHighScoreData', async () => {
  const res = await getHomeHighScoreData();
  return res;
});
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeGoodPriceDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
    [fetchHomeHighScoreDataAction.fulfilled](state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
});
export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } = homeSlice.actions;
export default homeSlice.reducer;
