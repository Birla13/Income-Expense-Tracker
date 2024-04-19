import Account from "../../model/Account";
import User from "../../model/User";
import { AppErr } from "../../utils/appErr";
//create
const createAccountCtrl = async (req, res,next) => {
  const { name, initalBalance, accountType, notes} = req.body;
    try {
      // find the logged in user
      const userFound = await User.findById(req.user);
      if(!userFound){
        return next(new AppErr('user not found',404));
      }
      // create the account
      const account = await Account.create({
        name,
        initialBalance,
        accountType,
        notes,
        createdBy: req.user,
      });
      // push the account into users accounts field
      userFound.accounts.push(account._id);
      // resave the user
      await userFound.save();
      res.json({ 
        status:"success",
        data:account,
      });
    } catch (error) {
      res.json(error);
    }
  };
  
  //all
  const getAccountsCtrl = async (req, res) => {
    try {
      res.json({ msg: "get account route" });
    } catch (error) {
      res.json(error);
    }
  };
  
  //single
  const getAccountCtrl = async (req, res) => {
    try {
      res.json({ msg: "get account route" });
    } catch (error) {
      res.json(error);
    }
  };
  
  //delete
  const deleteAccountCtrl = async (req, res) => {
    try {
      res.json({ msg: "delete route" });
    } catch (error) {
      res.json(error);
    }
  };
  
  //update
  const updateAccountCtrl = async (req, res) => {
    try {
      res.json({ msg: "update route" });
    } catch (error) {
      res.json(error);
    }
  };
  
  module.exports = {
    createAccountCtrl,
    getAccountCtrl,
    deleteAccountCtrl,
    updateAccountCtrl,
    getAccountsCtrl,
  };
  