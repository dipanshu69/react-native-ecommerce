import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

type ProductItemProps = {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
};

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <Pressable style={{ marginHorizontal: 25, marginVertical: 25 }}>
      <Image
        style={{ width: 150, height: 150, resizeMode: "contain" }}
        source={{ uri: item?.image }}
      />
      <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
        {item?.title}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item?.price}</Text>
        <Text style={{ fontWeight: "bold", color: "#FFC72C" }}>
          {item?.rating?.rate} ratings
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FFC72C",
          paddingVertical: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text>Add To Cart</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
