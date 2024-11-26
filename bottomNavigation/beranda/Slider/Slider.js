import React from "react";
import { FlatList, View } from "react-native";
import { carouselData } from "../../../data/data";
import SliderItem from "./SliderItem";
import Pagination from "./Pagination";

function Slider() {
  return (
    <View>
      <FlatList
        data={carouselData}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />

      {/* <Pagination items={itemList} scrollX={scrollX} /> */}
    </View>
  );
}

export default Slider;
