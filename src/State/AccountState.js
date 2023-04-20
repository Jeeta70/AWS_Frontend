import AccountContext from "../Context/AccountContext";

const AccountState = (props) => {
   //user registeration
   const signup = async (email, name, password) => {
      return await new Promise((resolve, reject) => {
         var attributeList = [];
         var userName = {
            Name: "name",
            Value: name
         }

         attributeList.push(userName);
         userPool.signUp(email, password, attributeList, null, (err, data) => {
            if (err) {
               console.log("Failed to register", err.messge)
               reject()
            } else {
               console.log("Account Created Successfully", data);
               resolve()
            }
         })
      })
   }
   return <AccountContext.P rovider value={signup}>{props.childer}</AccountContext.P>;
};

export default AccountState;
