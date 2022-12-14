const handler = require("../exceptions/handler");
const { nativeResponse, getJwtToken } = require("../helpers/utility");
const changeEditorStatus = require("../services/changeEditorStatus");
const createNewSession = require("../services/createNewSession");
const removeEditorAccount = require("../services/removeEditorAccount");
const userAccount = require("../services/userAccount");
const changeEditorStatusRequestValidation = require("../validations/request/changeEditorStatusRequestValidation");
const createEditorRequestValidation = require("../validations/request/createEditorRequestValidation");
const findAllEditorRequestValidation = require("../validations/request/findAllEditorRequestValidation");
const removeEditorRequestValidation = require("../validations/request/removeEditorRequestValidation");
const validationHelper = require("../validations/validationsHelpers/validationHelper");
const article = require("./article");

module.exports = {
    createAdmin: async (req, res) => {
        try {

            // Validation part
            createEditorRequestValidation(req, res);
            // check user rule
            await validationHelper.isAdminHas();

            await validationHelper.accountExists(req.body.email)

            const account = await userAccount.createAdminNewAccount(req.body);

            nativeResponse(account[0], "Create a new account", res)


        } catch (error) {
            console.log(error);
            handler(error, res)
        }
    },

    createEditor: async (req, res) => {
        try {
            console.log(req.body)
            // Validation part
            createEditorRequestValidation(req, res);
            // // check user rule
            await validationHelper.isAdmin(req.body.appSetUserToken)

            await validationHelper.accountExists(req.body.email)

            const account = await userAccount.createNewAccount(req.body);

            nativeResponse(account[0], "Create a new account", res)



        } catch (error) {
            console.log(error);
            handler(error, res)
        }
    },
    removeEditor: async (req, res) => {
        try {
            // validation part
            removeEditorRequestValidation(req, res);
            // check user rule
            await validationHelper.isAdmin(req.body.appSetUserToken)

            const result = await removeEditorAccount({ token: req.body.editorToken })
            console.log("ekjflskd=============", result)


            nativeResponse(result.data, result.msg, res)



        } catch (error) {
            console.log(error);
            handler(error, res);
        }
    },
    changeStatus: async (req, res) => {
        try {
            // validation part
            changeEditorStatusRequestValidation(req, res);
            // check user rule
            await validationHelper.isAdmin(req.body.appSetUserToken)
            await validationHelper.editorAccountExists(req.body.editorToken)

            const result = await changeEditorStatus({ token: req.body.editorToken, status: req.body.carnetStatus })


            nativeResponse(result.data, result.msg, res)



        } catch (error) {
            console.log(error);
            handler(error, res);
        }
    },
    getAllEditor: async (req, res) => {
        try {
            // Validation part
            findAllEditorRequestValidation(req, res);
            // check user rule
            await validationHelper.isAdmin(req.body.appSetUserToken)

            const accounts = await userAccount.accountList();

            nativeResponse(accounts, "????????find all editor account", res)

        } catch (error) {
            console.log(error);
            handler(error, res);
        }
    }

}