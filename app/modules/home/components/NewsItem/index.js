import React from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import { ListItem } from "react-native-elements";
import moment from "moment";

import {Actions} from 'react-native-router-flux'

import styles from "./styles"

const NewsItem = ({article}) => {
    const {title, url, source, publishedAt} = article;
    return (
        <ListItem
            roundAvatar
            title={ title }
            subtitle={moment(publishedAt).fromNow() + ' : ' + source.name }
            avatar={{ uri: article.urlToImage }}
            onPress={() => Actions.Article({article, title})}
            containerStyle={{ borderBottomWidth: 2 }}
          />
    );
}

export default NewsItem;