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
import CarrinhoImg from '../../assets/cart.png';

import Img1 from '../../assets/img1.png';
import Img3 from '../../assets/3.png';
import Img4 from '../../assets/4.png';

const produtosIniciais = [
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
    const [produtos, setProdutos] = useState(produtosIniciais);
    const carrinhoAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const timer = setTimeout(() => {
            setCarregando(false);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(carrinhoAnim, {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(carrinhoAnim, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [carrinhoAnim]);

    const translateX = carrinhoAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-150, 350],
    });

    const total = produtos
        .reduce((acc, item) => acc + item.preco * item.quantidade, 0)
        .toFixed(2);

    const incrementar = (id) => {
        setProdutos((old) =>
            old.map((p) =>
                p.id === id ? { ...p, quantidade: p.quantidade + 1 } : p
            )
        );
    };

    const decrementar = (id) => {
        setProdutos((old) =>
            old.map((p) =>
                p.id === id && p.quantidade > 1
                    ? { ...p, quantidade: p.quantidade - 1 }
                    : p
            )
        );
    };

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

    const renderProduto = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.imagem} style={styles.image} />
            <View style={{ flex: 1, paddingLeft: 12 }}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 8,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => decrementar(item.id)}
                        style={{
                            backgroundColor: '#d84315',
                            paddingHorizontal: 12,
                            paddingVertical: 4,
                            borderRadius: 20,
                        }}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                            -
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            marginHorizontal: 12,
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#4E342E',
                        }}
                    >
                        {item.quantidade}
                    </Text>
                    <TouchableOpacity
                        onPress={() => incrementar(item.id)}
                        style={{
                            backgroundColor: '#d84315',
                            paddingHorizontal: 12,
                            paddingVertical: 4,
                            borderRadius: 20,
                        }}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.sectionTitle}>Seu Carrinho 🛍️</Text>

            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id}
                renderItem={renderProduto}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 120 }}
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

            <TouchableOpacity
                style={styles.botaoFinalizar}
                activeOpacity={0.8}
                onPress={() => alert('Pedido finalizado!')}
            >
                <Text style={styles.botaoTexto}>Finalizar Pedido</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CarrinhoScreen;
