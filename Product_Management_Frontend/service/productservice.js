import axios from "axios";

const API_URL="http://localhost:8090";
class ProductService{

    saveProduct(product){
        return axios.post(API_URL+"/saveProduct",product);
    }
    getAllProducts(){
        return axios.get(API_URL+"/getAllProducts");
    }
    getProductById(id){
        return axios.get(API_URL+"/getProductById/"+id);
    }
    deleteProduct(id){
        return axios.get(API_URL+"/deleteProduct/"+id);
    }
    editProduct(product){
        return axios.post(API_URL+"/editProduct/"+product.id,product);
    }
    getAllUser(){
        return axios.get(API_URL+"/getAllUser");
    }
    findAllTransactions(){
        return axios.get(API_URL+"/findAllTransactions");
    }

}

export default new ProductService;