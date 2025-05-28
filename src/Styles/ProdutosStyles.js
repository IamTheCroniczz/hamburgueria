import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#FFF8F0',
  },
  logo: {
    width: 220,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#F5E1C2',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    flex: 0.48, // pra pegar quase metade da largura da tela (2 cards por linha)
    alignItems: 'center',
    // sombra estilo iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // sombra Android
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4E342E',
    textAlign: 'center',
  },
  preco: {
    fontSize: 14,
    color: '#D84315',
    fontWeight: 'bold',
    marginVertical: 4,
  },
  descricao: {
    fontSize: 12,
    color: '#6D4C41',
    textAlign: 'center',
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  splashText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4E342E',
    marginBottom: 16,
    textAlign: 'center',
  },
  enderecoContainer: {
    backgroundColor: '#fff3e0',
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 8,
  },
  enderecoLabel: {
    fontWeight: 'bold',
    color: '#bf360c',
    fontSize: 14,
  },
  enderecoTexto: {
    fontSize: 14,
    color: '#5d4037',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 12,
  },
  totalTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4e342e',
  },
  totalValor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d84315',
  },
  botaoFinalizar: {
    backgroundColor: '#d84315',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
