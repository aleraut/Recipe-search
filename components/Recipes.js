import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList, ActivityIndicator, Image } from 'react-native';

export default function Recipes() {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchRepos = () => {
        setLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
        .then(response => response.json())
        .then(data => {
            setData(data.meals);
            setLoading(false);
            setKeyword('');
        })
        .catch(err => console.error(err))
    }

    const itemSeparator = () => {
        return(
            <View style={{ height: 1, backgroundColor: 'gray' }} /> 
        );
    }

    return(
        <View style={{ marginTop: 80, marginLeft: 10, marginRight: 10 }}>
            <ActivityIndicator animating={loading} />
            <TextInput 
                value={keyword}
                placeholder='Keyword'
                onChangeText={text => setKeyword(text)}
                style={{ width: 300, borderColor: 'gray', borderWidth: 1 }}
            />
            <Button title="FIND" onPress={fetchRepos} />
            <FlatList 
                data={data}
                ItemSeparatorComponent={itemSeparator}
                renderItem={({ item }) => 
                <View>
                  <Text style={{ fontSize: 20 }}>{item.strMeal}</Text>
                    <Image 
                    style={{ width: 50, height: 50 }}
                    source={{uri: item.strMealThumb}}
                    />
                </View>}
            />
        </View>
    );

}