import jwt from 'jsonwebtoken'

//a middleware is basically used before an action (like a post, etc) to see if the user is authorized to do so or not
//if a user wants to like a post
//user clicks the like button => auth middleware confirms/denies the request => then call the likeController


const auth = async (req, res, next) => {
    try {
        console.log(req.headers);
        const token = req.headers.authorization.split(' ')[1]
        const isCustomAuth = token.length < 500

        let decodedData

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test')

            req.userId = decodedData?.id
        } else {
            decodedData = jwt.decode(token)

            req.userId = decodedData?.sub
        }

        next()
    } catch (error) {
        console.log(error);
    }
}

export default auth