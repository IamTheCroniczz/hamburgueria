import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    Animated,
    Easing,
    TouchableOpacity,
} from 'react-native';
import styles from '../Styles/ProdutosStyles';
import Logo from '../../assets/logo.png';
import CarrinhoImg from '../../assets/cart.png'; // imagem do carrinho animado

import Img1 from '../../assets/img1.png';
import Img3 from '../../assets/3.png';
import Img4 from '../../assets/4.png';
import Img5 from '../../assets/5.png';

const produtos = [
    {
        id: '1',
        nome: 'Hamburguer Clássico',
        preco: 15.99,
        imagem: Img3,
        quantidade: 1,
    },
    {
        id: '2',
        nome: 'Cheeseburger',
        preco: 17.99,
        imagem: Img1,
        quantidade: 1,
    },
    {
        id: '3',
        nome: 'Hamburguer Vegano',
        preco: 18.99,
        imagem: Img4,
        quantidade: 1,
    },
];

const CarrinhoScreen = () => {
    const [carregando, setCarregando] = useState(true);
    const carrinhoAnim = useRef(new Animated.Value(0)).current;

    const total = produtos.reduce((acc, item) => acc + item.preco * item.quantidade, 0).toFixed(2);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCarregando(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        Animated.loop(
            Animated.timing(carrinhoAnim, {
                toValue: 1,
                duration: 2500,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [carrinhoAnim]);

    const translateX = carrinhoAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 400],
    });

    if (carregando) {
        return (
            <View style={styles.splashContainer}>
                <Animated.Image
                    source={CarrinhoImg}
                    style={[styles.splashLogo, { transform: [{ translateX }] }]}
                />
                <Text style={styles.splashText}>Montando seu carrinho...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.sectionTitle}>Seu Carrinho 🛍️</Text>

            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.imagem} style={styles.image} />
                        <Text style={styles.nome}>{item.nome}</Text>
                        <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.enderecoContainer}>
                <Text style={styles.enderecoLabel}>Endereço de Entrega</Text>
                <Text style={styles.enderecoTexto}>
                    Rua das Delícias, 123 - Bairro Saboroso - SP
                </Text>
            </View>

            <View style={styles.totalContainer}>
                <Text style={styles.totalTexto}>Total:</Text>
                <Text style={styles.totalValor}>R$ {total}</Text>
            </View>

            <TouchableOpacity style={styles.botaoFinalizar}>
                <Text style={styles.botaoTexto}>Finalizar Pedido</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CarrinhoScreen;
