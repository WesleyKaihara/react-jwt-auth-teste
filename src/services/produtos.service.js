import axios from 'axios';
// import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/produto';

export default new class ProdutosService {
  getProdutos() {
    return axios.get(API_URL);
  }

  getProdutoImage(nomeImagem) {
    return axios.get(API_URL + '/img/' + nomeImagem);
  }

}()
