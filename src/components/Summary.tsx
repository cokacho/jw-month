import * as React from 'react';
import {View, Text} from 'react-native';
import {summaries} from '../../data/fakeData';
import { FlatList } from 'react-native';

export default function Summary() {
    return (
    <FlatList
        data={summaries}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => 
            <View>
                <Text>{item.id}</Text>
            </View>
        
        }
    />
    );
}