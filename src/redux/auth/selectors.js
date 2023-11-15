export const selectAuth = state => {
    const { isLoggedIn, token } = state.auth;
    return { isLoggedIn, token };
  };
  
  export const selectIsLoggedIn = state => state.auth.isLoggedIn;
  
  export const selectUser = state => state.auth.user;
  
  export const selectUserId = state => state.auth.user.id;
  
  export const selectUserAvatar = state => state.auth.user.avatarURL;
  
  export const selectIsRefreshing = state => state.auth.isRefreshing;
  
//   export const selectIsLoading = state => state.auth.isLoading;
  
//   export const selectError = state => state.auth.error;
  
  export const selectToken = state => state.auth.token;
