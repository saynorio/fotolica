const styles = {
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userview: {
        marginBottom: 20
    },
    usertext: {
        fontSize: 40,
        fontWeight: "bold",
        color: 'blue',
    },
    itemview: {
        padding: 10,
        height: 70,
        width: 350,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        shadowColor: '#222',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 2,
        backgroundColor: '#FFFFFF',
        overflow: "hidden",
    },
    nametext: {
        fontSize: 18,
        fontWeight: "bold",
    },
    citylabeltext: {
        fontSize: 12,
    },
    citytext: {
        paddingLeft: 2,
        fontSize: 12,
        fontWeight: 'bold',

    },
    companylabeltext: {
        fontSize: 12,
    },
    companytext: {
        paddingLeft: 2,
        fontSize: 12,
        fontWeight: 'bold'
    },
    verticalview: {
        flexDirection: 'column'
    },
    horizontalview: {
        flexDirection: 'row', justifyContent: "space-between", marginTop: 5
    },
    citymainview: {
        flexDirection: 'row'
    },
    companymainview: {
        flexDirection: 'row'
    }
};

export default styles;
