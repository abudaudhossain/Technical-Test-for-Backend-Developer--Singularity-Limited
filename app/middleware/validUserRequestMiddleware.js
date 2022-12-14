const handler = require("../exceptions/handler");
const validationHelper = require("../validations/validationsHelpers/validationHelper");
const AppAuthSession = require("../models/authSession");
const ValidationError = require("../exceptions/ValidationError");
const NotFoundError = require("../exceptions/NotFountError");

module.exports = async (req, res, next) => {
    try {
        validationHelper.ObjExists(["devicetoken", "sessiontoken","usertoken"], req.headers);
   

        console.log('hi, I am validUserRequestMiddleware')
        const deviceToken = req.headers.devicetoken;
        const sessionToken = req.headers.sessiontoken;
        const userToken = req.headers.usertoken;


        const session = await AppAuthSession.findOne({ token: sessionToken })

        // ==> session token validation
        if (!session) throw new NotFoundError("๐ค๐ค๐ค๐พ๐พPlease given valid session๐ฝ๐ฝ๐พ๐ฝ๐ฝ๐ฝ");

        // ==> device token validation
        if (session.deviceToken !== deviceToken) throw new ValidationError("๐ค๐ค๐ค๐พ๐พdeviceToken is invalid. Please Login Now.๐ฝ๐ฝ๐พ๐ฝ๐ฝ๐ฝ");

        // ==> account token validation
        if (session.accountToken !== userToken) throw new ValidationError("๐ค๐ค๐ค๐พ๐พAccountNo in invalid . Please Login Now.๐ฝ๐ฝ๐พ๐ฝ๐ฝ๐ฝ");

      
        //==> check session status
        if (session.status === "Inactive") throw new ValidationError("๐ค๐ค๐ค๐พ๐พsession Is inactive.Please Login Now.๐ฝ๐ฝ๐พ๐ฝ๐ฝ๐ฝ")


        req.body.appSetSessionToken = sessionToken;

        next();
    } catch (error) {
        console.log(error);
        handler(error, res);
    }
}