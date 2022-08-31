import axios from 'axios';

const API_URL = 'http://localhost:8080/carrinhoCompras';

export default new class CarrinhoService {
  getItens() {
    return axios.get(API_URL);
  }

}()
