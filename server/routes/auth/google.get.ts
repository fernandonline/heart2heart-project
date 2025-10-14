export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user, tokens }) {
    console.log('Login bem-sucedido:', user);
   
    await setUserSession(event, {
      user: {
        id: user.sub,
        email: user.email,
        urlPic: user.picture,
        name: String(user.name).trim(),
      },
    });
    
    return sendRedirect(event, "/dashboard");
    
  },
  
  onError(event, error) {
    console.error('Erro no login:', error);
    return sendRedirect(event, "/");
  },
});