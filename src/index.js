import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from "./components/ListItem";

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch",
  },
});

const App = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(x) => String(x.id)}
        renderItem={({ item }) => (
          <ListItem onPress={() => {}} desc={item.desc} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return { data: state.todos };
};

export default connect(mapStateToProps)(App);
