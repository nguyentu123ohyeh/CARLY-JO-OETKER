/* ============================================================
   CARLY JO OETKER — products.js
   Product data separated from main.js
   ============================================================ */
   (function () {
  const IMG = (fileName) => `assets/images/${fileName}`;

  const GALLERY_COUNT = {
    1: 4,
    2: 3,
    3: 3,
    4: 3,
    5: 3,
    6: 3,
    7: 3,
    8: 4,
    9: 4,
    10: 4,
    11: 4,
    12: 2,
    13: 3,
    14: 3,
    15: 4,
    16: 4,
    17: 4,
    18: 3,
    19: 3,
    20: 3,
    21: 3,
    22: 3,
  };

  const PRODUCT_IMAGES = (id) => [
    IMG(`${id}.webp`),
    ...Array.from(
      { length: GALLERY_COUNT[id] || 0 },
      (_, index) => IMG(`${id}.${index + 1}.webp`)
    ),
  ];

  window.PRODUCTS = [
    {
      id: 1,
      name: "Large Scoop Drain Strainer Tool",
      category: "Kitchen Tools & Gadgets",
      price: 3.69,
      shortDescription:
        "Lightweight scoop strainer for draining pasta, vegetables, and fried food directly from pans.",
      longDescription:
        "A practical kitchen scoop drain tool designed for everyday cooking tasks. It helps drain water or oil from pasta, vegetables, fried food, and other ingredients while keeping food secure in the scoop. Lightweight, easy to clean, and useful for home kitchen preparation.",
      image: IMG("1.webp"),
      images: PRODUCT_IMAGES(1),
      features: [
        "Scoop and drain directly from pan",
        "Useful for pasta, vegetables, and fried food",
        "Lightweight and practical design",
        "Easy to wash and clean",
      ],
      usage:
        "Use the scoop to lift cooked food from water or oil, then allow liquid to drain through the strainer slots before serving.",
      careNotes:
        "Wash with warm water and mild soap after use. Dishwasher safe if suitable for your dishwasher setting.",
    },
    {
      id: 2,
      name: "Stackable Fruit & Vegetable Storage Basket",
      category: "Kitchen Storage & Organization",
      price: 5.64,
      shortDescription:
        "Stackable storage basket for fruits, vegetables, pantry goods, and household organization.",
      longDescription:
        "A practical stackable basket designed to help organize fruits, vegetables, pantry items, and household essentials. The free-standing structure allows flexible use in kitchens, storage rooms, garages, and utility areas. Its stackable design helps save space and reduce clutter.",
      image: IMG("2.webp"),
      images: PRODUCT_IMAGES(2),
      features: [
        "Stackable space-saving design",
        "Suitable for fruits, vegetables, and pantry items",
        "Free-standing rectangular basket",
        "Useful for kitchen or home storage",
      ],
      usage:
        "Place on a countertop, shelf, pantry area, or storage corner. Stack multiple baskets vertically for better organization.",
      careNotes:
        "Wipe clean with a damp cloth. Avoid placing heavy items beyond the basket capacity.",
    },
    {
      id: 3,
      name: "2 Tier Dish Drainer Rack with Drip Tray",
      category: "Kitchen Storage & Organization",
      price: 15.81,
      shortDescription:
        "Large two-tier dish rack with drip tray, cutlery holder, and plate storage design.",
      longDescription:
        "A two-tier countertop dish drainer rack designed to keep kitchenware organized and countertops dry. The upper tier can hold dishes and cups, while the lower tier offers space for bowls and other tableware. Side holders provide additional space for cutlery and cutting boards.",
      image: IMG("3.webp"),
      images: PRODUCT_IMAGES(3),
      features: [
        "Two-tier storage structure",
        "Includes drip tray and cutlery holder",
        "Large capacity for dishes, cups, and bowls",
        "Helps keep countertop clean and dry",
      ],
      usage:
        "Place beside the sink, arrange dishes and bowls after washing, and allow water to drain into the tray or sink area.",
      careNotes:
        "Wipe dry regularly to prevent water marks. Clean the drip tray often to maintain hygiene.",
    },
    {
      id: 4,
      name: "Egyptian Cotton Kitchen Tea Towels",
      category: "Kitchen Linens & Textiles",
      price: 5.07,
      shortDescription:
        "Soft and absorbent cotton tea towels for drying dishes, cookware, and kitchen surfaces.",
      longDescription:
        "A set of absorbent cotton kitchen towels suitable for drying dishes, glassware, cookware, machinery, hands, and kitchen surfaces. The terry cotton texture provides strong absorbency while remaining soft for everyday household use.",
      image: IMG("4.webp"),
      images: PRODUCT_IMAGES(4),
      features: [
        "Made with soft cotton fabric",
        "Absorbent terry towel texture",
        "Suitable for dishes, hands, and countertops",
        "Machine washable for repeated use",
      ],
      usage:
        "Use for drying cookware, wiping kitchen counters, drying hands, or handling general kitchen cleaning tasks.",
      careNotes:
        "Machine wash with similar colors. Tumble dry low or hang dry. Avoid bleach to preserve fabric quality.",
    },
    {
      id: 5,
      name: "6 Piece Cotton Kitchen Towel Set",
      category: "Kitchen Linens & Textiles",
      price: 18.99,
      shortDescription:
        "Six-piece cotton towel set for kitchen drying, cleaning, and everyday household use.",
      longDescription:
        "A six-piece cotton kitchen towel set designed for daily drying, wiping, and cleaning. The towels are soft, absorbent, and suitable for drying hands, dishes, countertops, and light spills. The striped and waffle-style texture gives a clean modern look.",
      image: IMG("5.webp"),
      images: PRODUCT_IMAGES(5),
      features: [
        "Six-piece towel set",
        "Soft cotton material",
        "Fast drying and machine washable",
        "Useful for kitchen, bar, and household cleaning",
      ],
      usage:
        "Use for drying dishes, wiping hands, cleaning countertops, or handling small kitchen spills.",
      careNotes:
        "Machine wash and tumble dry on low heat. Wash before first use for best absorbency.",
    },
    {
      id: 6,
      name: "16 in 1 Vegetable Fruit Chopper Cutter",
      category: "Kitchen Tools & Gadgets",
      price: 6.99,
      shortDescription:
        "Multi-function vegetable chopper with interchangeable blades for slicing, dicing, and shredding.",
      longDescription:
        "A versatile vegetable and fruit chopper designed to speed up food preparation. It includes multiple interchangeable blades for slicing, dicing, grating, shredding, and cutting vegetables or fruits. The container catches chopped ingredients to reduce mess while cooking.",
      image: IMG("6.webp"),
      images: PRODUCT_IMAGES(6),
      features: [
        "16-in-1 multifunctional design",
        "Includes multiple interchangeable blades",
        "Container catches chopped ingredients",
        "Suitable for vegetables, fruits, cheese, and salads",
      ],
      usage:
        "Select the required blade, place the ingredient on the cutting surface, and press down or slide as needed to prepare food quickly.",
      careNotes:
        "Wash blades carefully after use. Keep sharp parts away from children and dry completely before storage.",
    },
    {
      id: 7,
      name: "Kitchen Sink Caddy with Brush Holder",
      category: "Kitchen Storage & Organization",
      price: 12.98,
      shortDescription:
        "Compact sink caddy with compartments for sponge, brush, detergent, and kitchen sink tools.",
      longDescription:
        "A compact kitchen sink caddy designed to keep cleaning tools neat and accessible. It includes divided sections for sponges, brushes, detergent bottles, and other small sink accessories. The practical structure helps reduce countertop clutter and keeps the sink area organized.",
      image: IMG("7.webp"),
      images: PRODUCT_IMAGES(7),
      features: [
        "Multiple storage compartments",
        "Compact countertop design",
        "Suitable for sponge, brush, and detergent",
        "Helps keep sink area dry and tidy",
      ],
      usage:
        "Place near the sink and store sponges, brushes, and dishwashing tools inside the separated compartments.",
      careNotes:
        "Rinse regularly and wipe dry to prevent residue buildup. Keep drainage area clear.",
    },
    {
      id: 8,
      name: "Reusable Soft Dish Washing Sponge",
      category: "Kitchen Cleaning Tools",
      price: 0.67,
      shortDescription:
        "Reusable double-sided sponge for gentle dishwashing and kitchen cleaning.",
      longDescription:
        "A soft reusable dishwashing sponge suitable for wiping smooth tableware, cookware, and kitchen surfaces. The double-sided design helps clean oil stains while remaining gentle on non-stick surfaces and delicate finishes.",
      image: IMG("8.webp"),
      images: PRODUCT_IMAGES(8),
      features: [
        "Reusable soft sponge design",
        "Double-sided cleaning surface",
        "Suitable for dishes and smooth tableware",
        "Gentle on cookware coating",
      ],
      usage:
        "Apply dish soap and use the sponge to clean dishes, bowls, cups, or smooth kitchen surfaces.",
      careNotes:
        "Rinse thoroughly after use and allow to air dry. Replace when worn or damaged.",
    },
    {
      id: 9,
      name: "21 Needle Stainless Steel Meat Tenderizer",
      category: "Kitchen Tools & Gadgets",
      price: 5.98,
      shortDescription:
        "Stainless steel needle tenderizer for improving meat texture and marinating efficiency.",
      longDescription:
        "A handheld meat tenderizer with 21 stainless steel needles designed to pierce and tenderize meat quickly. It helps marinades penetrate deeper, improves tenderness, and can reduce cooking preparation time for beef, pork, poultry, fish, and other meats.",
      image: IMG("9.webp"),
      images: PRODUCT_IMAGES(9),
      features: [
        "21 stainless steel tenderizing needles",
        "Helps marinade penetrate meat faster",
        "Ergonomic non-slip handle",
        "Suitable for beef, pork, poultry, and fish",
      ],
      usage:
        "Press the tenderizer gently over the meat surface before marinating or cooking. Repeat evenly across thicker areas.",
      careNotes:
        "Wash carefully after each use. Dry thoroughly and keep sharp needles away from children.",
    },
    {
      id: 10,
      name: "Stainless Steel Sink Sponge Organizer Rack",
      category: "Kitchen Storage & Organization",
      price: 21.99,
      shortDescription:
        "Rust-resistant kitchen sink organizer for sponge, brush, scrubber, and small cleaning tools.",
      longDescription:
        "A stainless steel kitchen storage holder designed for sponges, scrubbers, dish cloths, and sink accessories. The compact structure helps keep contents dry and organized while adding a clean, practical look to the sink area.",
      image: IMG("10.webp"),
      images: PRODUCT_IMAGES(10),
      features: [
        "Stainless steel construction",
        "Porous bottom helps water drain",
        "Compact and practical sink storage",
        "Suitable for sponges, brushes, and scrubbers",
      ],
      usage:
        "Place on the kitchen sink area or countertop and store frequently used cleaning tools inside.",
      careNotes:
        "Rinse and wipe dry regularly. Avoid harsh abrasive cleaners to maintain the surface.",
    },
    {
      id: 11,
      name: "Cartoon Sponge Sink Holder",
      category: "Kitchen Storage & Organization",
      price: 11.99,
      shortDescription:
        "Fun decorative sponge holder for sink storage and kitchen countertop organization.",
      longDescription:
        "A playful kitchen sponge holder designed to store a dish sponge while adding a decorative touch to the sink area. It is useful for keeping the sponge upright, easy to reach, and separated from wet countertop surfaces.",
      image: IMG("11.webp"),
      images: PRODUCT_IMAGES(11),
      features: [
        "Decorative kitchen sink holder",
        "Includes sponge holder structure",
        "Keeps sponge visible and accessible",
        "Useful for fun kitchen organization",
      ],
      usage:
        "Place beside the sink and insert the sponge into the holder after dishwashing.",
      careNotes:
        "Rinse regularly and keep dry between uses to maintain hygiene.",
    },
    {
      id: 12,
      name: "Fruit Bowl Basket with Banana Hanger",
      category: "Kitchen Storage & Organization",
      price: 13.96,
      shortDescription:
        "Fruit basket with banana hanger hook for organized countertop fruit storage.",
      longDescription:
        "A wired fruit bowl with an integrated banana hanger designed to keep fruits fresh, organized, and easy to access. The open wire structure promotes air circulation, while the hanging hook helps prevent bananas from bruising.",
      image: IMG("12.webp"),
      images: PRODUCT_IMAGES(12),
      features: [
        "Built-in banana hanger hook",
        "Open wire basket for air circulation",
        "Helps prevent fruit bruising",
        "Countertop space-saving design",
      ],
      usage:
        "Place fruits in the basket and hang bananas from the top hook to keep them separated and accessible.",
      careNotes:
        "Wipe clean with a damp cloth or rinse with water. Dry completely before reuse.",
    },
    {
      id: 13,
      name: "2 Piece Non Stick Rice Spoon Set",
      category: "Kitchen Tools & Gadgets",
      price: 4.22,
      shortDescription:
        "Clear plastic rice paddle spoon set for sushi rice, sticky rice, and non-stick cookware.",
      longDescription:
        "A two-piece plastic rice spoon set designed for mixing and serving sticky rice, sushi rice, and cooked grains. The smooth surface helps prevent scratching non-stick rice cooker pots while remaining comfortable for daily kitchen use.",
      image: IMG("13.webp"),
      images: PRODUCT_IMAGES(13),
      features: [
        "Two-piece rice spoon set",
        "Non-stick cookware friendly",
        "Suitable for sticky rice and sushi rice",
        "Dishwasher safe design",
      ],
      usage:
        "Use for mixing, scooping, or serving rice from rice cookers, bowls, or cooking pots.",
      careNotes:
        "Wash after each use. Avoid direct contact with open flame or very high heat.",
    },
    {
      id: 14,
      name: "Stainless Steel Spring Whisk Mixer",
      category: "Kitchen Tools & Gadgets",
      price: 2.6,
      shortDescription:
        "Handheld stainless steel spring whisk for eggs, sauces, dressings, and light mixing.",
      longDescription:
        "A compact handheld spring whisk designed for quick mixing of eggs, sauces, dressings, coffee, and light batters. The stainless steel spring action helps mix ingredients smoothly with minimal effort.",
      image: IMG("14.webp"),
      images: PRODUCT_IMAGES(14),
      features: [
        "Stainless steel spring whisk",
        "Compact handheld design",
        "Useful for eggs, sauces, and dressings",
        "Easy to clean and store",
      ],
      usage:
        "Hold the whisk handle and press or rotate in a bowl or cup to blend ingredients evenly.",
      careNotes:
        "Wash with warm soapy water and dry fully after use.",
    },
    {
      id: 15,
      name: "Stainless Steel Egg Poacher Mold",
      category: "Kitchen Cooking Tools",
      price: 15.47,
      shortDescription:
        "Stainless steel egg poaching mold for round or shaped breakfast cooking.",
      longDescription:
        "A stainless steel egg poacher mold designed for cooking neat eggs at home. It is durable, easy to clean, and useful for making breakfast eggs, shaped egg portions, or decorative plated dishes.",
      image: IMG("15.webp"),
      images: PRODUCT_IMAGES(15),
      features: [
        "Stainless steel construction",
        "Suitable for poached or shaped eggs",
        "Includes oil brush",
        "Durable and easy to clean",
      ],
      usage:
        "Lightly oil the mold, place it in the pan, add egg, and cook until the preferred texture is reached.",
      careNotes:
        "Wash after use and dry thoroughly. Use caution when handling hot metal.",
    },
    {
      id: 16,
      name: "Collapsible Mesh Food Cover",
      category: "Kitchen Storage Accessories",
      price: 3.77,
      shortDescription:
        "Pop-up mesh food cover for protecting dishes from flies, dust, and outdoor insects.",
      longDescription:
        "A collapsible mesh food cover designed to protect food from insects, dust, and outdoor particles. The pop-up design makes it easy to use for kitchens, dining tables, parties, picnics, camping, and barbecue settings.",
      image: IMG("16.webp"),
      images: PRODUCT_IMAGES(16),
      features: [
        "Collapsible pop-up design",
        "Mesh cover protects food from insects",
        "Suitable for indoor and outdoor use",
        "Easy to store when folded",
      ],
      usage:
        "Pull the cover open and place it over dishes, plates, fruits, snacks, or outdoor party food.",
      careNotes:
        "Clean with mild soap and water. Allow to dry fully before folding and storing.",
    },
    {
      id: 17,
      name: "2 Piece Non Stick Spatula Set",
      category: "Kitchen Cooking Tools",
      price: 9.84,
      shortDescription:
        "Solid and slotted spatula set for flipping, lifting, cooking, baking, and serving.",
      longDescription:
        "A two-piece kitchen spatula set including one solid spatula and one slotted spatula. Designed for non-stick cookware, the soft-edged surface helps lift, flip, and serve food without scratching pots, pans, or dishes.",
      image: IMG("17.webp"),
      images: PRODUCT_IMAGES(17),
      features: [
        "Solid and slotted spatula pair",
        "Safe for non-stick cookware",
        "Heat resistant up to 210°C",
        "Lightweight with hanging holes",
      ],
      usage:
        "Use the solid spatula for lifting and serving, and the slotted spatula for draining excess oil or liquid while cooking.",
      careNotes:
        "Wash with soap and water or place in dishwasher if suitable. Keep away from direct flame.",
    },
    {
      id: 18,
      name: "Foldable Pot Lid and Spoon Rest Rack",
      category: "Kitchen Storage & Organization",
      price: 4.38,
      shortDescription:
        "Foldable rack for holding pot lids, spoons, spatulas, and cooking utensils during meal prep.",
      longDescription:
        "A colorful foldable kitchen rack designed to hold pot lids, soup spoons, spatulas, and cooking tools. The U-shaped support slot helps keep pot covers stable, while the folding design saves storage space.",
      image: IMG("18.webp"),
      images: PRODUCT_IMAGES(18),
      features: [
        "Foldable space-saving design",
        "Holds pot lids, spoons, and spatulas",
        "Useful during cooking preparation",
        "Compact countertop accessory",
      ],
      usage:
        "Place on the countertop and rest pot lids or cooking utensils in the slots while preparing meals.",
      careNotes:
        "Wipe clean after use. Avoid placing extremely hot items directly on the rack for long periods.",
    },
    {
      id: 19,
      name: "Kitchen Plate and Pot Lid Organizer Stand",
      category: "Kitchen Storage & Organization",
      price: 4.11,
      shortDescription:
        "Compact organizer stand for plates, pot lids, cups, and small kitchen storage needs.",
      longDescription:
        "A compact kitchen organizer stand designed for holding plates, pot lids, cups, and small kitchen items. It helps improve countertop organization and keeps frequently used items easy to reach.",
      image: IMG("19.webp"),
      images: PRODUCT_IMAGES(19),
      features: [
        "Compact organizer stand",
        "Suitable for plates and pot lids",
        "Helps save counter or cabinet space",
        "Lightweight and easy to move",
      ],
      usage:
        "Place inside a cabinet, on a countertop, or near the sink to organize plates, lids, or small kitchen accessories.",
      careNotes:
        "Wipe clean with a damp cloth and keep dry after washing.",
    },
    {
      id: 20,
      name: "Hanging Woven Fruit Vegetable Basket",
      category: "Kitchen Storage & Organization",
      price: 6.38,
      shortDescription:
        "Wall hanging woven storage basket for fruits, vegetables, and household organization.",
      longDescription:
        "A hanging woven storage basket made for fruits, vegetables, and general home organization. It can be hung in kitchens, balconies, living rooms, bedrooms, hallways, or garden areas, helping save surface space while adding a natural decorative look.",
      image: IMG("20.webp"),
      images: PRODUCT_IMAGES(20),
      features: [
        "Wall hanging storage design",
        "Suitable for fruits and vegetables",
        "Natural woven appearance",
        "Useful for kitchen, balcony, or hallway",
      ],
      usage:
        "Hang on a wall hook, rail, or suitable fixture and place fruits, vegetables, or small household items inside.",
      careNotes:
        "Clean with a damp cloth or rinse lightly when needed. Ventilate and dry fully after cleaning.",
    },
    {
      id: 21,
      name: "Stainless Steel Gold Kitchen Storage Tray",
      category: "Kitchen Storage Accessories",
      price: 12.74,
      shortDescription:
        "Gold-tone stainless steel tray for food display, tea sets, utensils, and countertop organization.",
      longDescription:
        "A stainless steel gold-tone tray suitable for kitchen display, tea sets, food plates, utensils, countertop organization, jewelry, cosmetics, or decorative storage. Its round shape and metallic finish add a clean, elegant touch to home organization.",
      image: IMG("21.webp"),
      images: PRODUCT_IMAGES(21),
      features: [
        "Gold-tone stainless steel tray",
        "Suitable for kitchen or decorative storage",
        "Useful for tea sets, plates, and accessories",
        "Available in multiple sizes",
      ],
      usage:
        "Use as a serving tray, countertop organizer, tea set display tray, or decorative storage plate.",
      careNotes:
        "Wipe with a soft cloth. Avoid abrasive cleaners to protect the metallic finish.",
    },
    {
      id: 22,
      name: "Wall Mounted 5 Layer Pot Lid Holder",
      category: "Kitchen Storage & Organization",
      price: 21.99,
      shortDescription:
        "Wall-mounted five-layer rack for pot lids, pans, cutting boards, and kitchen accessories.",
      longDescription:
        "A multifunctional wall-mounted storage rack designed with five layers for pot lids, cutting boards, pan covers, chopping boards, and other kitchen essentials. It helps free counter space while keeping kitchen tools organized and accessible.",
      image: IMG("22.webp"),
      images: PRODUCT_IMAGES(22),
      features: [
        "Five-layer storage structure",
        "Wall-mounted space-saving design",
        "Suitable for pot lids and cutting boards",
        "Multifunctional kitchen organization rack",
      ],
      usage:
        "Mount on a suitable kitchen wall or cabinet area and organize lids, boards, or flat kitchen accessories by layer.",
      careNotes:
        "Wipe clean regularly. Check wall mounting stability before loading with heavy items.",
    },
  ];
})();