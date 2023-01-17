import axios from "axios";

const API_URL="http://localhost:8090";

class UserService{
    saveUser(user){
        return axios.post(API_URL+"/saveUser",user);
    }
    getAllProduct(){
        return axios.get(API_URL+"/getAllProduct");
    }
    purchaseProduct(transaction){
        return axios.post(API_URL+"/purchase",transaction);
    }

}
export default UserService