import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId}, process.env.JWT_SECRET, {
    expiresIn: '365d'
   });
   // Set JWT as HTTP-Only cookie
   res.cookie('jwt',token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 365 * 24 * 60 * 60 * 1000 //for 365 days
    // this token gets sent with every subsequent request after we logged in
   });//jwt is the name for cookie we give, value == token    
}
 export default generateToken;