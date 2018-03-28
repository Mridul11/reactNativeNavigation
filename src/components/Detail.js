import React from 'react';
import {View, Text, Button, ListView, TouchableHighlight} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import data from '../data/Datalist.json';

class DetailScreen extends React.Component {
  constructor(props){
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(data),
      }
    }

renderRow(rowData, sectionID) {
    return (
      <TouchableHighlight onPress={() => console.log("clicked")}>
          <ListItem
            roundAvatar
            key={sectionID}
            title={rowData.name}
            subtitle={rowData.subtitle}
            avatar={{uri:rowData.avatar_url}}
          />
      </TouchableHighlight>
    )
  }

  render() {
        // const {navigate} = this.props.navigation;
    return (
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
          />
        </List>
    );
  }
}

export default DetailScreen;
