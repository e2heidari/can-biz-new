import { getBusinessesByCategoryId } from "@/services/business";
import { Business, Category } from "@/services/types";
import React from "react";
import Thumb from "./Thumb";
import imagesData from "./images.json"; // Import the images.json file

interface Props {
  category: Category;
}

// Utility function to format numbers
const formatNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`; // For millions
  } else if (num >= 10_000) {
    return `${(num / 1_000).toFixed(1).replace(/\.0$/, "")}K`; // For thousands 10K and above
  } else {
    return num.toLocaleString(); // For numbers below 10,000
  }
};
// Utility function to find the image ID from images.json based on business ID
const findImageId = (businessId: string): string | undefined => {
  const imageEntry = imagesData.find(
    (image) => image.filename === `${businessId}.jpg`
  );
  return imageEntry?.id;
};

const renderBusinesses = (businesses: Business[]) => {
  return businesses.map((business) => {
    const imageId = findImageId(business.id); // Get the image ID
    return (
      <Thumb
        key={business.id}
        link={`/business/${business.id}`}
        title={business.name}
        imageSrc={
          imageId
            ? `https://imagedelivery.net/DrRB7C-qS07kRovcPFO3IQ/${imageId}/public`
            : undefined
        } // Construct URL or use placeholder
        leftValue={`${formatNumber(
          business.socialMedia.instagram.followers
        )} followers`}
        rightValue={business.category.name}
      />
    );
  });
};

const List = async (props: Props) => {
  const businesses = await getBusinessesByCategoryId(props.category.id);
  return (
    <div className="flex gap-3 flex-wrap">{renderBusinesses(businesses)}</div>
  );
};

export default List;
