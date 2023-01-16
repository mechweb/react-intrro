
import React from 'react';
import ReactDOM from 'react-dom/client'; 

  //using JSX - is html like syntax (not an html)inside javascript
  const heading2=<h1>This is jsx</h1> // this syntax browser don't understand so
  // babel will internally convert this into 
//  const heading2= React.createElement(
//     "h1",{ },"hello jsx",)
    //so that browser can understand it 
  
    /**
     * Header
     *     - logo(Title)
     *     - Nav Items(right side)
     *     - cart
     * Body
     *     - Search bar
     *     - RestaurantList
     *        - RestaurantCard (many cards)
     *             -image
     *             -name
     *             -rating
     *             -cuisines
     * Footer
     *     - links
     *     - copyright
     */
    // functional component
    const root=ReactDOM.createRoot(document.getElementById("root"));
    const RestaurantList=[
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "532213",
        "name": "Chilli'Z Restro",
        "uuid": "e04042c4-2ec3-40b6-bfda-b29a1d286722",
        "city": "22",
        "area": "Patel Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "mzsuzzznrww2mpzwk27d",
        "cuisines": [
        "North Indian",
        "Chinese",
        "Snacks",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 3.5999999046325684,
        "slugs": {
        "restaurant": "chilliz-restro-(patel-nagar)-patel-nagar-patel-nagar",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "75/4,arya tower,patel nagar,Dehradun 248001",
        "locality": "Patel Nagar",
        "parentId": 13645,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
        {
        "meta": "60% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off up to ₹120 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off up to ₹120 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5669288~p=1~eid=00000185-b659-bf1e-4142-1e0a0022011c",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "532213",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 3.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "149292",
        "name": "Mughal Darbar",
        "uuid": "9dfc4ee5-684f-4652-8f07-daa1134b3fdc",
        "city": "22",
        "area": "Majra",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ssz46edn5w8z4xpxbfxv",
        "cuisines": [
        "North Indian",
        "Biryani",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
        "restaurant": "mughal-darbar-subhash-nagar-subhash-nagar",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "opposite hotel paradise,near shimla byepass,dehradun",
        "locality": "Patel Nagar",
        "parentId": 8892,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
        {
        "meta": "40% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "40% off up to ₹80 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "40% off up to ₹80 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "149292",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 1.2000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.4",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "599133",
        "name": "Doon Darbar",
        "uuid": "6590d88a-effc-4bc9-a294-d5a6517824b6",
        "city": "22",
        "area": "Shimla Bypass Chowk",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "lzacctllikcgp8xpvzla",
        "cuisines": [
        "North Indian",
        "Chinese"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
        "restaurant": "doon-darbar-deh_patel-nagar-deh_patel-nagar",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "PRADHAN JI WALI GALI MAJRA NEAR BASIT HARDWARE, DEHRADUN Uttarakhand - 248001",
        "locality": "Deh_Patel Nagar",
        "parentId": 13207,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
        {
        "meta": "60% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off up to ₹120 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off up to ₹120 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "599133",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 1.600000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.4",
        "totalRatings": 100,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "91350",
        "name": "Subway",
        "uuid": "ea8c2822-421b-41d8-98ef-b857a56d59de",
        "city": "22",
        "area": "Ballupur",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "llt7lyyuq05dca0pfcci",
        "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 5.800000190734863,
        "slugs": {
        "restaurant": "subway-ballupur-ballupur",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "361/1, Near IMA Blood Bank, Chakrata Road, Dehradun",
        "locality": "Ballupur",
        "parentId": 2,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5729450~p=4~eid=00000185-b659-bf1e-4142-1e0b0022047d",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "5.8 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "91350",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 5.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 5000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "413821",
        "name": "Pizza Hut",
        "uuid": "def78429-429b-4501-817c-b60f5e047883",
        "city": "22",
        "area": "Patel Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "cst4xfxkgt8dj5bbrxwy",
        "cuisines": [
        "Pizzas"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 1.7999999523162842,
        "slugs": {
        "restaurant": "pizza-hut-dehradun-patel-nagar",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "Pizza Hut at Shop No- 1 & 2, Ground Floor, Shree Ji Tower, Majra Saharanpur Road, Dehradun, Dehradun Nagar Nigam, Dehradun, Uttarakhand, 248001",
        "locality": "Dehradun",
        "parentId": 721,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "413821",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 1.7999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "408505",
        "name": "KFC",
        "uuid": "a873af35-4659-4b5e-87cd-09d6eb5bc0c3",
        "city": "22",
        "area": "Patel Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
        "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 1.5,
        "slugs": {
        "restaurant": "kfc-khasara-patel-nagar",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "KFC  Ground Floor,Khasara No 544,545,Mauza-Niranjanpur,Paragana,Central Doon.District Dehradun- 24817",
        "locality": "Khasara",
        "parentId": 547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "408505",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 1.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "74852",
        "name": "Doon Tripple Nine ( Ballupur)",
        "uuid": "3a865bca-e0bc-40d3-ab64-f6be445b89dc",
        "city": "22",
        "area": "Krishna Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "p84jrjty8ktstt80fqgh",
        "cuisines": [
        "North Indian",
        "Chinese"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 6.900000095367432,
        "slugs": {
        "restaurant": "doon-999-vasant-vihar-kishan-nagar",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "899/1, Hotel Ratan Palace, Kaulagarh Road, Near Kishan Nagar Chowk, Krishna Nagar, Dehradun",
        "locality": "Kishan nagar",
        "parentId": 74095,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5656889~p=7~eid=00000185-b659-bf1e-4142-1e0c00220761",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "6.9 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "74852",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 6.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "542132",
        "name": "Domnik Pizza",
        "uuid": "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
        "city": "22",
        "area": "Majra    Bansal Home",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "sboh9oor0cvp6ztsyhvj",
        "cuisines": [
        "Pizzas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 0.6000000238418579,
        "slugs": {
        "restaurant": "domnik-pizza-patel-nagar-patel-nagar-2",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
        "locality": "Patel Nagar",
        "parentId": 22321,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "542132",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 0.6000000238418579,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 50,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "381399",
        "name": "NEW DELHI DARBAR RESTAURANT (Majra)",
        "uuid": "38280349-df66-4265-bc5e-ac8751b1ad0b",
        "city": "22",
        "area": "Patel Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "roam3mh4fulh3b03sihx",
        "cuisines": [
        "North Indian",
        "Biryani"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
        "restaurant": "new-delhi-darbar-restaurant-patel-nagar-patel-nagar",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "saharanpur road shimla bypaas chowk opposite icici bank majra ,,Dehradun Nagar Nigam,Dehradun,Uttarakhand-248171",
        "locality": "Shimla Bypass Chowk",
        "parentId": 251653,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "381399",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 1.2000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 100,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "84229",
        "name": "Punjabi Dhaba",
        "uuid": "fdbb07e3-e071-46ed-8b5c-c2d2a3a00a15",
        "city": "22",
        "area": "Prince Chowk",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "yyrjmyajqhyjq6mp1gha",
        "cuisines": [
        "North Indian"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "slaString": "35 MINS",
        "lastMileTravel": 5.599999904632568,
        "slugs": {
        "restaurant": "punjabi-dhaba-prince-chowk-race-course-dehradun",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "59, Gandhi Road, Prince Chowk, Dehradun",
        "locality": "Clock Tower",
        "parentId": 1476,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
        {
        "meta": "60% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off up to ₹120 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off up to ₹120 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5668797~p=10~eid=00000185-b659-bf1e-4142-1e0d00220a45",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "5.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "84229",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 5.599999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.6",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "321517",
        "name": "FOOD PLANET RESTAURANT",
        "uuid": "899d5dd4-200a-48b2-a321-391bb9486ec2",
        "city": "22",
        "area": "Majra",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "ykboewqeoxnne8fgrnui",
        "cuisines": [
        "Indian",
        "Chinese",
        "Tandoor",
        "Thalis",
        "Fast Food"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
        "restaurant": "food-planet-restaurant-patel-nagar-patel-nagar",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
        "locality": "Patel Nagar",
        "parentId": 81850,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "321517",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.1",
        "totalRatings": 50,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "551710",
        "name": "LITTLE OVEN",
        "uuid": "5b54c676-d6b0-4d29-b454-f32f217aea11",
        "city": "22",
        "area": "Subhash Nagar",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "hmzsr0thnmi6xoo07ghk",
        "cuisines": [
        "Italian",
        "Fast Food",
        "Chinese"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 0.4000000059604645,
        "slugs": {
        "restaurant": "little-oven-subhash-nagar-subhash-nagar",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "1 A INDRAPRASHT MARG MAJRA DEHRADUN",
        "locality": "Subhash Nagar",
        "parentId": 125528,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.4 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "551710",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "69499",
        "name": "Uss Da Dhaba",
        "uuid": "824dabfb-8bc4-4309-b82c-8de68af14773",
        "city": "22",
        "area": "Prince Chowk",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "j6w0gbsy2pdoivjjlymp",
        "cuisines": [
        "North Indian",
        "Chinese",
        "Continental"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 6.199999809265137,
        "slugs": {
        "restaurant": "uss-da-dhaba-race-course-chukkuwala",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "Near Hotel Saurab, 3 Court Road, Race Course, Dehradun",
        "locality": "Clock Tower",
        "parentId": 13693,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5668586~p=13~eid=00000185-b659-bf1e-4142-1e0e00220d3a",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "6.1 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "69499",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 6.199999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.7",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "232269",
        "name": "The Bambooz Restaurant",
        "uuid": "0b296f26-0ed9-422f-be14-c8fa2e98d491",
        "city": "22",
        "area": "Shimla By Pass",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "ptsttehpdvq4as1mlizd",
        "cuisines": [
        "Fast Food",
        "North Indian"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 1,
        "slugs": {
        "restaurant": "the-bambooz-restaurant-patel-nagar-patel-nagar",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "Shimla Bypass Chowk, Near Bank Of India, Dehradun",
        "locality": "Patel Nagar",
        "parentId": 204989,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹90 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "232269",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 1,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 100,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "460156",
        "name": "Da Pepper Pizza",
        "uuid": "4fc7edce-6221-4cb3-b3ab-e2d774492ac0",
        "city": "22",
        "area": "Patel Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "i7y3j9hs9cp0pdtg7fhb",
        "cuisines": [
        "Pizzas",
        "American"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 2.5,
        "slugs": {
        "restaurant": "da-pepper-pizza-patel-nagar-patel-nagar-2",
        "city": "dehradun"
        },
        "cityState": "22",
        "address": "22/3,Subhash Nagar, Saharanpur Road, Dehradun  248001",
        "locality": "Subhash Nagar",
        "parentId": 13393,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
        {
        "meta": "60% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off up to ₹120 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "60% off up to ₹120 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "460156",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 100,
        "new": false
        },
        "subtype": "basic"
        }
        ]
    
    const Title = ()=>{
     return(
      <a href="/" ><img alt="logo" className="logo" src="https://www.lavillalincoln.com/uploads/1/3/3/5/133546046/published/new-la-villa-logo-glow.png?1656111708"></img></a>

      )}

      const RestaurantCard=({restaurant})=>{
        return(
          <div className='card'>
            <img className="logo"src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurant.data?.cloudinaryImageId}></img>
            <h2>{restaurant.data?.name}</h2>
            <h3>{restaurant.data?.cuisines?.join(" , ")}</h3>     
            <h4>{restaurant.data.lastMileTravelString}</h4>
        </div>
        )
      }
    const Header = () =>{
      return(
          <div className='header'>
             <Title/>
             <div className='nav-item'>
              <ul className='nav'>
                <li>Home</li>
                <li>About </li>
                <li>Contact</li>
                <li>Cart</li>
              </ul>

             </div>
          
          </div>
      )
    }
    const Body = () =>{
      return(
       <div className='restaurant-list'>

             <RestaurantCard restaurant={RestaurantList[0]}/>
             <RestaurantCard restaurant={RestaurantList[1]}/>
             <RestaurantCard restaurant={RestaurantList[2]}/>
             <RestaurantCard restaurant={RestaurantList[3]}/>
             <RestaurantCard restaurant={RestaurantList[4]}/>
             <RestaurantCard restaurant={RestaurantList[5]}/>
            

      </div>
       
      )
    }

    const Footer = () =>{
      return(
           <>
           <h2>footer</h2>
           </>
      )
    }
    const AppLayout= () =>{
      return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
      )
    }
   
    root.render(<AppLayout/>);

