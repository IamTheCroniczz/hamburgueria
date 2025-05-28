import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import styles from '../Styles/ProdutosStyles'; // depois adapta o styles pra combinar
import Logo from '../../assets/logo.png';

import Img1 from '../../assets/img1.png';
import Img3 from '../../assets/3.png';
import Img4 from '../../assets/4.png';
import Img5 from '../../assets/5.png';

const produtos = [
  {
    id: '1',
    nome: 'Hamburguer Clássico',
    preco: 15.99,
    descricao: 'Pão, carne, queijo, salada e molho da casa.',
    imagem: Img3,
  },
  {
    id: '2',
    nome: 'Cheeseburger',
    preco: 17.99,
    descricao: 'Hambúrguer com queijo derretido e pão macio.',
    imagem: Img1,
  },
  {
    id: '3',
    nome: 'Hamburguer Vegano',
    preco: 18.99,
    descricao: 'Feito com grão de bico, alface e molho especial.',
    imagem: Img4,
  },
  {
    id: '4',
    nome: 'Hamburguer Turbinado',
    preco: 22.99,
    descricao: '4 hamburguers, molho especial, geleia de pimenta, steak de queijo, bacon e onion rings',
    imagem: Img5,
  },
];

const ProdutoItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.imagem} style={styles.image} resizeMode="cover" />
    <View style={styles.infoContainer}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.descricao} numberOfLines={2}>{item.descricao}</Text>
      <View style={styles.footer}>
        <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
        <TouchableOpacity style={styles.botaoAdicionar}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const ProdutosScreen = () => {
  const [carregando, setCarregando] = useState(true);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarregando(false);
    }, 2500); // splash time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (carregando) {
    return (
      <View style={styles.splashContainer}>
        <Animated.Image
          source={Logo}
          style={[styles.splashLogo, { transform: [{ rotate }] }]}
        />
        <Text style={styles.splashText}>Carregando loja...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProdutoItem item={item} />}
        numColumns={1} // iFood lista 1 por vez
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      />
    </View>
  );
};

export default ProdutosScreen;
