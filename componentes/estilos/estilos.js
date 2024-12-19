import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        paddingHorizontal: 25,
    },

    img: {
        width: '100%',
        height: 250,
        resizeMode:'cover',
        marginTop: 15,
        marginBottom: 30,    
    },

    titulo: {
        fontWeight: "bold",
        textAlignVertical: "center",
        height: 60,
        textAlign:"center",
    },

    paragrafo: {
        lineHeight: 25,
        marginBottom: 20,
    },

    linhaCards: {
        marginTop: 15,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 15,
    },

    card: {
        width: 150,
        height: 150,

        display: "flex",
        justifyContent:"flex-end",
        alignItems:"center",

        paddingBottom: 20,
        boxSizing: "border-box",

        borderRadius: 5,
        
        marginBottom: 20,
    },

    icone: {
        marginBottom: 5,
        tintColor: "white",
    },

    textoCard: {
        color: "#fff",
        fontWeight: "bold",
    },

    cardXbox: {
        backgroundColor: "green",
        
    },

    cardPlaystation: {
        backgroundColor: "blue",
    },

    cardNintendo: {
        backgroundColor: "red",
    },
});

export default estilos;