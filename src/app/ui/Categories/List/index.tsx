import { getBusinessesByCategoryId } from "@/services/business";
import { Business, Category } from "@/services/types";
import React from "react";
import Thumb from "./Thumb";

interface Props {
  category: Category;
}

const renderBusinesses = (businesses: Business[]) => {
  return businesses.map((business) => (
    <Thumb
      key={business.id}
      link={`/business/${business.id}`}
      title={business.name}
      imageSrc={business.media?.images?.[0]?.thumbnailUrl}
      leftValue={`${business.socialMedia.instagram.followers.toString()} followers`}
      rightValue={business.category.name}
    />
  ));
};

const List = async (props: Props) => {
  const businesses = await getBusinessesByCategoryId(props.category.id);
  return (
    <div className="flex gap-3 flex-wrap">{renderBusinesses(businesses)}</div>
  );
};

export default List;
