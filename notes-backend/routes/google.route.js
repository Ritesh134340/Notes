const {Router}=require("express")
const google=Router()


google.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));


google.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));