const products = [
  {
    "id": 1,
    "prod_title": "Diwas by Manyavar",
    "description": "Printed Mandarin Collar Kurta",
    "category": "Kurtas",
    "brand": "Manyavar",
    "color": "blue",
    "size": ["M", "L", "XL"],
    "price": {
      "discounted_price": 2363,
      "orig_price": 2500,
      "discount_percentage": 5
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/20237088/2022/9/30/2dc3c413-bbb3-46f1-8444-176a305557a11664539101350Suits1.jpg"
  },
  {
    "id": 2,
    "prod_title": "Celio",
    "description": "Men Slim Fit Blazer",
    "category": "Blazers",
    "brand": "Celio",
    "color": "grey",
    "size": ["M", "L"],
    "price": {
      "discounted_price": 3999,
      "orig_price": 7999,
      "discount_percentage": 50
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/7137992/2022/3/1/8a6c3a4f-cccf-4ab1-b61c-7b81a77cf4581646131925092CelioMenBlueSlimFitSingle-BreastedFormalBlazer1.jpg"
  },
  {
    "id": 3,
    "prod_title": "Dizora",
    "description": "Men's Cotton Kurta Set",
    "category": "Kurta sets",
    "brand": "Dizora",
    "color": "white",
    "size": ["S", "M", "L", "XL"],
    "price": {
      "discounted_price": 1499,
      "orig_price": 2499,
      "discount_percentage": 40
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/16073756/2021/11/1/5e9b6200-0d37-49e8-9448-38e0e3ec0c4d1635762769375KurtaSets1.jpg"
  },
  {
    "id": 4,
    "prod_title": "Cannabie",
    "description": "Checked Casual Blazer",
    "category": "Blazers",
    "brand": "Cannabie",
    "color": "black",
    "size": ["L", "XL"],
    "price": {
      "discounted_price": 4599,
      "orig_price": 8999,
      "discount_percentage": 49
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/11989918/2020/8/10/97a436ec-95c1-4dc9-b95b-0f6b82f0b2f81597062744767HIGHLANDERMenBlueCheckedSlimFitCasualBlazer1.jpg"
  },
  {
    "id": 5,
    "prod_title": "4U Fashion",
    "description": "Men Solid Kurta",
    "category": "Kurtas",
    "brand": "4U Fashion",
    "color": "burgundy",
    "size": ["S", "M"],
    "price": {
      "discounted_price": 799,
      "orig_price": 1599,
      "discount_percentage": 50
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/18873748/2022/6/14/21dd3e23-67b9-4b16-a5a2-454c03c4d17b1655199047406Kurta1.jpg"
  },
  {
    "id": 6,
    "prod_title": "Bullstorm",
    "description": "Men Formal Suit",
    "category": "Suits",
    "brand": "Bullstorm",
    "color": "grey",
    "size": ["M", "L", "XL"],
    "price": {
      "discounted_price": 6999,
      "orig_price": 9999,
      "discount_percentage": 30
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/13530812/2021/2/17/b22b3a07-5314-45e9-b4f3-3e7c04e7c6b51613556443948MenBlueSlimFitFormalSuit1.jpg"
  },
  {
    "id": 7,
    "prod_title": "Aaacollection",
    "description": "Printed Kurta Set",
    "category": "Kurta sets",
    "brand": "Aaacollection",
    "color": "beige",
    "size": ["S", "M", "L"],
    "price": {
      "discounted_price": 1299,
      "orig_price": 1799,
      "discount_percentage": 28
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/18061776/2022/5/9/d4d9154b-71da-4b6f-a6b9-b236efb05c771652086604986KurtaSets1.jpg"
  },
  {
    "id": 8,
    "prod_title": "Aadi Shudhh",
    "description": "Cotton Straight Kurta",
    "category": "Kurtas",
    "brand": "Aadi Shudhh",
    "color": "white",
    "size": ["S", "M", "L", "XL", "XXL"],
    "price": {
      "discounted_price": 999,
      "orig_price": 1999,
      "discount_percentage": 50
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/13234824/2021/1/13/bd4dc4ac-dc9a-4aef-b1b8-d12e6c71a9c01610430679242Kurta1.jpg"
  },
  {
    "id": 9,
    "prod_title": "A-Okay",
    "description": "Solid Slim Fit Suit",
    "category": "Suits",
    "brand": "A-Okay",
    "color": "black",
    "size": ["M", "L"],
    "price": {
      "discounted_price": 5499,
      "orig_price": 10999,
      "discount_percentage": 50
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/11535692/2020/7/10/09a058c5-cad8-4e0f-b71d-3f9a05c3fdfb1594379266378AOkayMenBlackSlimFitSingleBreastedFormalSuit1.jpg"
  },
  {
    "id": 10,
    "prod_title": "7 Eleven Fashion",
    "description": "Casual Printed Kurta",
    "category": "Kurtas",
    "brand": "7 Eleven Fashion",
    "color": "grey",
    "size": ["S", "M"],
    "price": {
      "discounted_price": 899,
      "orig_price": 1499,
      "discount_percentage": 40
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/14123638/2021/4/15/df6e6d69-bb76-4d10-a038-7e9e1b1d82f31618484270947Kurta1.jpg"
  },
  {
    "id": 11,
    "prod_title": "Celio",
    "description": "Textured Blue Blazer",
    "category": "Blazers",
    "brand": "Celio",
    "color": "blue",
    "size": ["M", "L"],
    "price": {
      "discounted_price": 4999,
      "orig_price": 9999,
      "discount_percentage": 50
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/11090420/2020/7/2/8d7f3cdb-2209-4cfb-8d41-29a2e3ff826a1593693164992CelioMenBlueTexturedSingle-BreastedFormalBlazer1.jpg"
  },
  {
    "id": 12,
    "prod_title": "Dizora",
    "description": "Festive Kurta Set",
    "category": "Kurta sets",
    "brand": "Dizora",
    "color": "burgundy",
    "size": ["L", "XL"],
    "price": {
      "discounted_price": 1799,
      "orig_price": 2999,
      "discount_percentage": 40
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/16434768/2022/1/14/bd4c47a7-08cb-4d7a-a5f4-13c1a065a3291642159649979KurtaSets1.jpg"
  },
  {
    "id": 13,
    "prod_title": "4U Fashion",
    "description": "Cotton Kurta",
    "category": "Kurtas",
    "brand": "4U Fashion",
    "color": "beige",
    "size": ["S", "M", "L", "XL"],
    "price": {
      "discounted_price": 1099,
      "orig_price": 2199,
      "discount_percentage": 50
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/16393398/2022/1/6/a56a9e58-73b1-4b53-a331-0a45669ac6761641451371581Kurta1.jpg"
  },
  {
    "id": 14,
    "prod_title": "Bullstorm",
    "description": "Slim Fit Suit Set",
    "category": "Suits",
    "brand": "Bullstorm",
    "color": "blue",
    "size": ["M", "L", "XL"],
    "price": {
      "discounted_price": 7999,
      "orig_price": 11999,
      "discount_percentage": 33
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/13944354/2021/3/19/a6733c3f-5e3a-4c87-b89b-63ccbf9dbec31616219029083VanHeusenMenBlueSlimFitSingle-BreastedFormalSuit1.jpg"
  },
  {
    "id": 15,
    "prod_title": "Manyavar",
    "description": "Solid Silk Kurta",
    "category": "Kurtas",
    "brand": "Manyavar",
    "color": "white",
    "size": ["M", "L"],
    "price": {
      "discounted_price": 2599,
      "orig_price": 3699,
      "discount_percentage": 30
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/17043260/2022/3/21/ea142f0f-4316-4c91-97a0-d0bcdcf24e5f1647862677392Kurta1.jpg"
  },
  {
    "id": 16,
    "prod_title": "Celio",
    "description": "Men Black Tuxedo",
    "category": "Suits",
    "brand": "Celio",
    "color": "black",
    "size": ["M", "L"],
    "price": {
      "discounted_price": 8499,
      "orig_price": 16999,
      "discount_percentage": 50
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/14535468/2021/6/15/19c79b80-64e6-40cb-9a29-df94d01b79061623762949621CelioMenBlackSlimFitSingleBreastedFormalSuit1.jpg"
  },
  {
    "id": 17,
    "prod_title": "Aadi Shudhh",
    "description": "Men Beige Kurta",
    "category": "Kurtas",
    "brand": "Aadi Shudhh",
    "color": "beige",
    "size": ["S", "M", "L"],
    "price": {
      "discounted_price": 899,
      "orig_price": 1499,
      "discount_percentage": 40
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/14123638/2021/4/15/df6e6d69-bb76-4d10-a038-7e9e1b1d82f31618484270947Kurta1.jpg"
  },
  {
    "id": 18,
    "prod_title": "Aaacollection",
    "description": "Men's Party Blazer",
    "category": "Blazers",
    "brand": "Aaacollection",
    "color": "burgundy",
    "size": ["M", "L", "XL"],
    "price": {
      "discounted_price": 4999,
      "orig_price": 9999,
      "discount_percentage": 50
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/13422756/2021/2/8/f3c7a5b8-ef40-4b3d-a4a5-5304a43887941612765787984Blazer1.jpg"
  },
  {
    "id": 19,
    "prod_title": "Cannabie",
    "description": "Grey Slim Blazer",
    "category": "Blazers",
    "brand": "Cannabie",
    "color": "grey",
    "size": ["M", "L"],
    "price": {
      "discounted_price": 3999,
      "orig_price": 7999,
      "discount_percentage": 50
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/14237912/2021/4/22/58b4f9ef-9ecf-4048-8d44-2d98d4e1b36a1619087374658HIGHLANDERMenBlueCheckedSlimFitCasualBlazer1.jpg"
  },
  {
    "id": 20,
    "prod_title": "Bullstorm",
    "description": "Formal Grey Suit",
    "category": "Suits",
    "brand": "Bullstorm",
    "color": "grey",
    "size": ["M", "L", "XL"],
    "price": {
      "discounted_price": 7499,
      "orig_price": 14999,
      "discount_percentage": 50
    },
    "country_of_origin": "India",
    "url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_30,w_400/assets/images/13944354/2021/3/19/a6733c3f-5e3a-4c87-b89b-63ccbf9dbec31616219029083VanHeusenMenBlueSlimFitSingle-BreastedFormalSuit1.jpg"
  }
];
