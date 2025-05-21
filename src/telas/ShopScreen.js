import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../Styles/ProdutosStyles';
import Logo from '../../assets/logo.png'; // importa o logo

const produtos = [
    {
        id: '1',
        nome: 'Hamburguer Clássico',
        preco: 15.99,
        descricao: 'Pão, carne, queijo, salada e molho da casa.',
        imagem: {
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNdyzKFA3bUPiD_ZWpve6Iei2W8Jx1sJmJQ&s',
        },
    },
    {
        id: '2',
        nome: 'Cheeseburger',
        preco: 17.99,
        descricao: 'Hambúrguer com queijo derretido e pão macio.',
        imagem: {
            uri: 'https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2024/05/TTBurger_021_Alta_CredTomasRangel-1.jpg',
        },
    },
    {
        id: '3',
        nome: 'Hamburguer Vegano',
        preco: 18.99,
        descricao: 'Feito com grão de bico, alface e molho especial.',
        imagem: {
            uri: 'https://static.itdg.com.br/images/640-440/49687a8a7a7110c7f560b9c7e96a9d0e/254679-shutterstock-364110890-1-.jpg',
        },
    },
    {
        id: '4',
        nome: 'Hamburguer Turbinado',
        preco: 22.99,
        descricao: '4 hamburguers, molho especial, geleia de pimenta, stake de queijo, bacon e onion rings',
        imagem: {
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYf82y3M4vHDlLlA2GfGzctUEIlNYzvvutQ&s',
        },
    },
];

const ProdutoItem = ({ item }) => (
    <View style={styles.card}>
        <Image source={item.imagem} style={styles.image} />
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
);

const ProdutosScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ProdutoItem item={item} />}
                numColumns={2} // define 2 colunas
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }} // espaça os cards
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
};

export default ProdutosScreen;
