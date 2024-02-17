export const selectDonats = state => state.payments.donats;

export const selectSubscriptions = state => state.payments.subscriptions;

export const selectSubscription = state => state.payments.subscription;

export const selectIsUnsubscribe = state => state.payments.isUnsubscribe;

export const selectIsLoading = state => state.payments.isLoading;

export const selectError = state => state.payments.error;

export const selectStart = state => state.range.start;

export const selectEnd = state => state.range.end;