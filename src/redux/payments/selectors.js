export const selectDonats = state => state.payments.donats;

export const selectSubscriptions = state => state.payments.subscriptions;

export const selectAccount = state => state.payments.account;

export const selectTotalPages = state => state.payments.totalPages;

export const selectSubscription = state => state.payments.subscription;

export const selectIsLoading = state => state.payments.isLoading;

export const selectError = state => state.payments.error;

export const selectStart = state => state.range.start;

export const selectEnd = state => state.range.end;

export const selectPage = state => state.range.page;