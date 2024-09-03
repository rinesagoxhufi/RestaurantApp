import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

function CategoriesScreen({navigation}) {
 function renderCategoryItem(itemData) {
    function pressHandler() {
        navigation.navigate('MealsOverview', {
            categoryId: itemData.item.id,
        });

    }
    return (
        <CategoryGridTitle
         title={itemData.item.title} 
         color={itemData.item.color}
         onPress={pressHandler}  
   
         />
    );
}

    const [numColumns, setNumColumns] = useState(2);

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={numColumns}
            key={numColumns}
        />
    );
}

export default CategoriesScreen;
