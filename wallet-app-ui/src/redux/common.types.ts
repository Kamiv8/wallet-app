type TLoading = 'idle' | 'pending' | 'success' | 'failed';

export type TInitialState<T> = {
  data: T;
  loading: TLoading;
};
