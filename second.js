const listItems = document.querySelectorAll('.tree-list ul li');
let holder = null;
let holder1 = null;
let box2 = document.querySelector("#box2");
if(screen.width>1160){
  box2.style.display="flex"
}



const scrollToTop = () =>{
  document.querySelector("#hero_info").scrollTo({
    top: 0,
    behavior: 'smooth' // This makes the scroll smooth
  });
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // This enables smooth scrolling
  });
}



//logic
const treesData = [
  {
    "name": "Neem Tree",
  "scientific_name": "Azadirachta indica",
  "overview": "Neem trees are versatile evergreens known for their medicinal properties and resilience. They are found in tropical and subtropical regions and are highly valued for their antibacterial and insect-repellent qualities.",
  "classification": {
    "family": "Meliaceae",
    "genus": "Azadirachta"
  },
  "origin_and_habitat": {
    "native_region": "Native to the Indian subcontinent and widely cultivated in tropical and subtropical regions.",
    "native_habitat": "Thrives in arid, semi-arid regions with well-draining soils and abundant sunlight."
  },
  "physical_characteristics": {
    "size": "Typically grows 15–20 meters (49–66 feet) tall, can reach up to 30 meters (98 feet) in ideal conditions.",
    "growth_rate": "Moderate to fast growth rate; can live for several decades.",
    "leaf_shape": "Pinnate leaves with 20–30 leaflets, lanceolate in shape, and a glossy appearance.",
    "flower_description": "Small, white to pale yellow flowers that grow in dense clusters, with a sweet fragrance."
  },
  "leaf_close_up": "https://example.com/images/neem_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun for optimal growth and health.",
    "watering_needs": "Drought-tolerant once established; regular watering during the first year.",
    "soil_preferences": "Prefers well-draining soils and can tolerate poor soils.",
    "fertilization_tips": "Minimal fertilization is required; occasional slow-release fertilizer can be beneficial."
  },
  "uses_and_benefits": [
    "Neem oil is widely used as a natural insect repellent.",
    "Has medicinal properties for treating skin conditions, digestive issues, and more.",
    "Wood is valued for its durability and resistance to termites."
  ],
  "img_url": "neemtree/n1.jpeg",
  "img_url_":"neemtree/n2.jpeg",
  "img_url__":"neemtree/n3.jpeg",
  "img_url___":"neemtree/n4.jpeg"
  
},
{
  "name": "Banyan Tree",
  "scientific_name": "Ficus benghalensis",
  "overview": "The Banyan tree is a large, iconic tree known for its aerial prop roots that grow into trunks. It is native to the Indian subcontinent and is a symbol of longevity and strength. It thrives in tropical climates and is revered in various cultures for its shade and air-purifying qualities.",
  "classification": {
    "family": "Moraceae",
    "genus": "Ficus"
  },
  "origin_and_habitat": {
    "native_region": "Native to the Indian subcontinent, but widely cultivated in tropical regions around the world.",
    "native_habitat": "Thrives in tropical and subtropical climates, preferring well-draining soils and plenty of sunlight."
  },
  "physical_characteristics": {
    "size": "Can grow up to 20–30 meters (66–98 feet) tall and spread wide, with the canopy often reaching over 100 feet in diameter.",
    "growth_rate": "Fast-growing, especially in tropical climates, and can live for hundreds of years.",
    "leaf_shape": "Large, leathery, oval leaves with a glossy dark green appearance.",
    "flower_description": "Small, unisexual flowers that grow inside the fig-like fruit, which is actually an inverted flower cluster."
  },
  "leaf_close_up": "https://example.com/images/banyan_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun but can tolerate some shade.",
    "watering_needs": "Requires regular watering, especially in the early stages, but tolerates occasional drought once established.",
    "soil_preferences": "Prefers well-drained, fertile soils but can adapt to a variety of soil types.",
    "fertilization_tips": "Fertilize with balanced fertilizer during the growing season for optimal growth."
  },
  "uses_and_benefits": [
    "A popular shade tree in tropical regions, providing cooling and air purification.",
    "The leaves and bark have been used in traditional medicine for their anti-inflammatory properties.",
    "Its large, aerial roots can be used for natural erosion control and support for nearby plants."
  ],
  "img_url": "Banayantree/BanyanTree.jpg",
  "img_url_":"Banayantree/BanyanTree(4).png",
  "img_url__":"Banayantree/BanyanTree(3).png",
  "img_url___":"Banayantree/BanyanTree(2).jpg"
  
},
{
  "name": "Kaim Tree",
  "scientific_name": "Neolamarckia cadamba",
  "overview": "The Kaim (Kadamb) tree is a medium to large-sized tree known for its fragrant, spherical yellow flowers and dense, round canopy. It is native to the Indian subcontinent and tropical Southeast Asia, where it is valued for its ornamental and medicinal uses.",
  "classification": {
    "family": "Rubiaceae",
    "genus": "Neolamarckia"
  },
  "origin_and_habitat": {
    "native_region": "Native to the Indian subcontinent and Southeast Asia.",
    "native_habitat": "Thrives in tropical and subtropical climates, especially in moist, well-drained soils with plenty of sunlight."
  },
  "physical_characteristics": {
    "size": "Can grow up to 30 meters (98 feet) tall with a broad canopy spreading up to 20 meters (66 feet) in diameter.",
    "growth_rate": "Fast-growing, reaching full maturity in 10-15 years.",
    "leaf_shape": "Large, elliptical to oblong leaves with a smooth texture and dark green color.",
    "flower_description": "Fragrant, yellowish or orange flowers arranged in dense, spherical clusters that bloom during the rainy season."
  },
  "leaf_close_up": "https://example.com/images/kaim_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun for optimal growth.",
    "watering_needs": "Requires regular watering, especially during dry periods, but can tolerate occasional drought once established.",
    "soil_preferences": "Prefers rich, well-drained, loamy soils, but adapts to a range of soil types.",
    "fertilization_tips": "Fertilize with balanced fertilizer during the growing season to encourage healthy growth."
  },
  "uses_and_benefits": [
    "The flowers of the Kaim tree are used in traditional medicine for their calming and anti-inflammatory properties.",
    "Wood is used for making furniture, and the tree is also planted for ornamental purposes.",
    "The tree provides shade and is commonly found in temples and gardens."
  ],
  "img_url": "kaibtree/k1.png",
  "img_url_": "kaibtree/k2.png",
  "img_url__": "kaibtree/k3.png",
  "img_url___": "kaibtree/k4.png"
},
{
  "name": "Bamboo Tree",
  "scientific_name": "Bambusa spp.",
  "overview": "Bamboo trees are fast-growing, woody grasses known for their tall, slender stems and rapid growth rate. They are found in a variety of climates from tropical to temperate regions. Bamboo is valued for its strength, versatility, and eco-friendly properties, making it popular in construction, furniture, and as an ornamental plant.",
  "classification": {
    "family": "Poaceae",
    "genus": "Bambusa"
  },
  "origin_and_habitat": {
    "native_region": "Native to Asia, Africa, and the Americas, with various species found in tropical and subtropical climates.",
    "native_habitat": "Thrives in a variety of soils, but prefers well-drained, slightly acidic to neutral soils. Grows best in warm, humid environments."
  },
  "physical_characteristics": {
    "size": "Can grow from 5 meters (16 feet) to over 30 meters (98 feet) tall, depending on the species.",
    "growth_rate": "Extremely fast-growing; some species can grow up to 91 cm (35 inches) per day in optimal conditions.",
    "leaf_shape": "Long, narrow, lance-shaped leaves with a light green to dark green color.",
    "flower_description": "Small, inconspicuous flowers that bloom infrequently; most species flower only once every several decades before dying."
  },
  "leaf_close_up": "https://example.com/images/bamboo_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun to partial shade for optimal growth.",
    "watering_needs": "Requires regular watering, especially during dry periods. However, bamboo is also drought-tolerant once established.",
    "soil_preferences": "Prefers well-drained, slightly acidic to neutral soils, but can tolerate a variety of soil types.",
    "fertilization_tips": "Apply a balanced fertilizer during the growing season to support healthy growth."
  },
  "uses_and_benefits": [
    "Bamboo is a sustainable material used in construction, furniture making, and as flooring.",
    "The plant's shoots are edible and are used in various culinary dishes, particularly in Asian cuisines.",
    "Bamboo helps with soil erosion control and is often planted along riverbanks and slopes."
  ],
  "img_url": "bambootree/ba1.png",
  "img_url_": "bambootree/ba2.png",
  "img_url__": "bambootree/ba3.png",
  "img_url___": "bambootree/ba4.png"
},
{
  "name": "Rain Tree",
  "scientific_name": "Samanea saman",
  "overview": "The Rain Tree is a large, fast-growing tropical tree known for its expansive canopy and ability to provide ample shade. It is native to Central and South America and is widely planted in tropical regions around the world. The tree is named for its characteristic behavior of folding its leaves at night or before rain.",
  "classification": {
    "family": "Fabaceae",
    "genus": "Samanea"
  },
  "origin_and_habitat": {
    "native_region": "Native to Central and South America, particularly in countries like Mexico, Guatemala, and Brazil.",
    "native_habitat": "Thrives in tropical climates with plenty of sunlight and well-draining soils, often found in forests, parks, and urban areas."
  },
  "physical_characteristics": {
    "size": "Can grow up to 25 meters (82 feet) tall with a canopy that spreads up to 35 meters (115 feet) wide.",
    "growth_rate": "Fast-growing, often reaching full maturity in 10-15 years.",
    "leaf_shape": "Large, pinnate compound leaves with 20-30 leaflets that fold together at night or during rain.",
    "flower_description": "Small, pink to purple puffball-like flowers that bloom in dense clusters during the rainy season."
  },
  "leaf_close_up": "https://example.com/images/rain_tree_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun but can tolerate some shade.",
    "watering_needs": "Requires regular watering during dry periods, but can tolerate brief droughts once established.",
    "soil_preferences": "Prefers well-drained, sandy or loamy soils but can adapt to various soil types.",
    "fertilization_tips": "Fertilize with balanced fertilizer in the growing season for enhanced growth."
  },
  "uses_and_benefits": [
    "The tree's large canopy provides excellent shade, making it ideal for urban parks and roadside planting.",
    "The wood is durable and used for furniture and construction, although it's not as commercially widespread as other hardwoods.",
    "Leaves and bark are used in traditional medicine for their anti-inflammatory and cooling properties."
  ],
  "img_url": "raintree/rt1.png",
  "img_url_": "raintree/rt2.png",
  "img_url__": "raintree/rt3.png",
  "img_url___": "raintree/rt4.png"
},
{
  "name": "Traveler's Palm Tree",
  "scientific_name": "Ravenala madagascariensis",
  "overview": "The Traveler's Palm is a striking, fan-like tree native to Madagascar. Known for its large, symmetrical fronds, it is often mistaken for a palm but is actually a member of the bird-of-paradise family. It gets its name from the belief that the tree’s leaves point toward the cardinal directions, guiding travelers to water in the wild.",
  "classification": {
    "family": "Strelitziaceae",
    "genus": "Ravenala"
  },
  "origin_and_habitat": {
    "native_region": "Native to Madagascar, but widely cultivated in tropical regions around the world.",
    "native_habitat": "Thrives in tropical climates with well-drained, fertile soils and plenty of sunlight, often found in forests or cultivated as an ornamental tree."
  },
  "physical_characteristics": {
    "size": "Can grow up to 10–15 meters (33–49 feet) tall with a wide, fan-like spread of leaves.",
    "growth_rate": "Moderate growth rate, reaching full height in 10-15 years.",
    "leaf_shape": "Large, fan-shaped leaves arranged in a unique symmetrical pattern that radiates outward from the trunk.",
    "flower_description": "The flowers are small, white to bluish, and emerge from the base of the leaves in clusters, resembling a bird of paradise."
  },
  "leaf_close_up": "https://example.com/images/travelers_palm_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun but can tolerate partial shade.",
    "watering_needs": "Requires regular watering, especially during the dry season, but must be well-drained to prevent root rot.",
    "soil_preferences": "Prefers well-drained, fertile, slightly acidic soils, but can tolerate a variety of soil types.",
    "fertilization_tips": "Fertilize with a balanced fertilizer during the growing season to support healthy growth."
  },
  "uses_and_benefits": [
    "The large leaves are often used for thatching roofs in some tropical cultures.",
    "Known for its ornamental value, the tree is commonly planted in gardens, parks, and along streets.",
    "In Madagascar, the tree is used as a symbol of guidance and survival, as its leaves are believed to point toward water."
  ],
  "img_url": "Travelerspalm/tr1.png",
  "img_url_": "Travelerspalm/tr2.png",
  "img_url__": "Travelerspalm/tr3.png",
  "img_url___": "Travelerspalm/tr4.png"
},
{
  "name": "Mango Tree",
  "scientific_name": "Mangifera indica",
  "overview": "The Mango tree is a tropical tree known for its delicious fruit, prized worldwide. Native to South Asia, the Mango tree thrives in tropical and subtropical climates. It is a large evergreen tree that provides not only sweet, juicy fruits but also valuable timber and medicinal benefits.",
  "classification": {
    "family": "Anacardiaceae",
    "genus": "Mangifera"
  },
  "origin_and_habitat": {
    "native_region": "Native to South Asia, specifically India, Myanmar, and Bangladesh, but widely cultivated in tropical and subtropical regions around the world.",
    "native_habitat": "Thrives in tropical climates with well-drained, fertile soils and plenty of sunlight. Found in orchards, gardens, and tropical forests."
  },
  "physical_characteristics": {
    "size": "Can grow up to 30 meters (98 feet) tall, with a canopy that can spread 10-15 meters (33-49 feet) wide.",
    "growth_rate": "Moderate growth rate; reaches maturity in about 10-15 years.",
    "leaf_shape": "Long, narrow, leathery leaves with a smooth texture, typically dark green in color.",
    "flower_description": "Small, yellow-green flowers that grow in large panicles, with a sweet fragrance."
  },
  "leaf_close_up": "https://example.com/images/mango_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun for optimal growth and fruit production.",
    "watering_needs": "Requires regular watering, especially during dry periods, but well-drained soil is essential to avoid root rot.",
    "soil_preferences": "Prefers well-drained, slightly acidic to neutral soils, and can tolerate sandy or loamy soils.",
    "fertilization_tips": "Fertilize with a balanced fertilizer during the growing season to encourage fruiting."
  },
  "uses_and_benefits": [
    "Mangoes are widely consumed fresh, dried, or juiced, and are a rich source of vitamins A, C, and fiber.",
    "The tree's wood is used in furniture making, while its leaves have traditional medicinal uses.",
    "Mango trees are planted in gardens and orchards for their fruit and shade."
  ],
  "img_url": "mangotree/mg1.png",
  "img_url_": "mangotree/mg2.png",
  "img_url__": "mangotree/mg3.png",
  "img_url___": "mangotree/mg4.png"
},
{
  "name": "Indian Rosewood",
  "scientific_name": "Dalbergia sissoo",
  "overview": "The Indian Rosewood, or Sissoo, is a large, fast-growing tree native to the Indian subcontinent. It is known for its durable, dense wood, which is highly valued in furniture making and construction. The tree thrives in tropical and subtropical climates and is often used for afforestation and erosion control.",
  "classification": {
    "family": "Fabaceae",
    "genus": "Dalbergia"
  },
  "origin_and_habitat": {
    "native_region": "Native to the Indian subcontinent, particularly in India, Nepal, and Pakistan.",
    "native_habitat": "Prefers tropical and subtropical climates with well-drained soils and plenty of sunlight, often found in riverbanks and open forests."
  },
  "physical_characteristics": {
    "size": "Typically grows 15–25 meters (49–82 feet) tall, with a canopy spread of 10–15 meters (33–49 feet).",
    "growth_rate": "Fast-growing, reaching maturity in 10-15 years.",
    "leaf_shape": "Pinnate leaves with 10-15 leaflets, light green in color.",
    "flower_description": "Small, fragrant, purple to pale pink flowers that grow in clusters in the spring."
  },
  "leaf_close_up": "https://example.com/images/indian_rosewood_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun for optimal growth.",
    "watering_needs": "Requires regular watering, especially during the early stages, but is drought-tolerant once established.",
    "soil_preferences": "Prefers well-drained, loamy or sandy soils, but is adaptable to various soil types.",
    "fertilization_tips": "Fertilize with a balanced fertilizer during the growing season to support healthy growth."
  },
  "uses_and_benefits": [
    "The dense, durable wood is used for high-quality furniture, flooring, and construction.",
    "Widely planted for afforestation and erosion control, as it helps to stabilize soil and improve soil fertility.",
    "The tree's leaves, bark, and roots have been used in traditional medicine for various ailments."
  ],
  "img_url": "indianrosewood/ir1.jpeg",
  "img_url_": "indianrosewood/ir2.jpeg",
  "img_url__": "indianrosewood/ir3.jpeg",
  "img_url___": "indianrosewood/ir4.jpeg"
},
{
  "name": "Lead Tree",
  "scientific_name": "Leucaena leucocephala",
  "overview": "The Lead Tree is a fast-growing, leguminous tree native to Central America but widely cultivated in tropical and subtropical regions worldwide. It is valued for its ability to improve soil fertility, as well as its use in reforestation projects and as a forage crop. The tree is known for its dense, feathery foliage and small, fragrant white flowers.",
  "classification": {
    "family": "Fabaceae",
    "genus": "Leucaena"
  },
  "origin_and_habitat": {
    "native_region": "Native to Central America, but widely introduced to tropical regions such as Africa, Asia, and the Pacific Islands.",
    "native_habitat": "Thrives in tropical and subtropical climates, preferring well-drained, fertile soils, and plenty of sunlight. Commonly found in disturbed lands, roadsides, and agricultural areas."
  },
  "physical_characteristics": {
    "size": "Typically grows 8–12 meters (26–40 feet) tall, with a wide canopy of 6–10 meters (20–33 feet) in diameter.",
    "growth_rate": "Very fast-growing, often reaching maturity within 3-5 years.",
    "leaf_shape": "Feathery, compound leaves with numerous small leaflets arranged in pairs, giving the tree a soft, delicate appearance.",
    "flower_description": "Small, white or creamy-colored, fragrant flowers that grow in ball-like clusters."
  },
  "leaf_close_up": "https://example.com/images/lead_tree_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun but can tolerate some shade.",
    "watering_needs": "Tolerates drought conditions once established, but benefits from regular watering during dry spells.",
    "soil_preferences": "Prefers well-drained soils, especially loamy or sandy soils, but can tolerate poor soils.",
    "fertilization_tips": "As a nitrogen-fixing tree, it requires little additional fertilization, but occasional feeding with a balanced fertilizer can enhance growth."
  },
  "uses_and_benefits": [
    "The tree is a nitrogen fixer, enriching the soil and improving soil fertility, making it valuable in agroforestry and reforestation projects.",
    "The leaves are used as fodder for livestock, and the tree is often planted for pasture improvement.",
    "Wood from the Lead Tree is used for fuel, and the tree is also planted as an ornamental shade tree."
  ],
  "img_url": "leadtree/l1.jpeg",
  "img_url_": "leadtree/l2.jpeg",
  "img_url__": "leadtree/l3.jpeg",
  "img_url___": "leadtree/l4.jpeg"
},
{
  "name": "Ashoka Tree",
  "scientific_name": "Saraca asoca",
  "overview": "The Ashoka Tree is an evergreen, medium-sized tree native to the Indian subcontinent. Known for its beautiful, fragrant flowers and symbolic importance, it is revered in Indian culture as a symbol of love, happiness, and new beginnings. The Ashoka tree thrives in tropical and subtropical climates and is often used for ornamental purposes in gardens and temples.",
  "classification": {
    "family": "Fabaceae",
    "genus": "Saraca"
  },
  "origin_and_habitat": {
    "native_region": "Native to the Indian subcontinent, particularly in India, Sri Lanka, and Bangladesh.",
    "native_habitat": "Thrives in tropical and subtropical regions, preferring well-drained, slightly acidic soils, and plenty of sunlight."
  },
  "physical_characteristics": {
    "size": "Typically grows 9–15 meters (30–49 feet) tall, with a canopy spread of 6–10 meters (20–33 feet).",
    "growth_rate": "Moderate growth rate, reaching maturity in 5–10 years.",
    "leaf_shape": "Large, leathery, dark green leaves arranged in a pinnate fashion, giving the tree a dense, full appearance.",
    "flower_description": "Bright, orange-red to yellow flowers arranged in large, fragrant clusters. The flowers have a unique, sweet fragrance."
  },
  "leaf_close_up": "https://example.com/images/ashoka_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun for optimal flowering, but can tolerate some light shade.",
    "watering_needs": "Requires regular watering, especially during dry periods, but should be planted in well-draining soil to avoid waterlogging.",
    "soil_preferences": "Prefers well-drained, slightly acidic soils and thrives in fertile, loamy soils.",
    "fertilization_tips": "Fertilize with a balanced fertilizer during the growing season for better flowering and healthy growth."
  },
  "uses_and_benefits": [
    "The Ashoka tree is considered sacred in Hinduism and is often planted in temples and gardens as a symbol of love and joy.",
    "Its fragrant flowers are used in traditional rituals and festivals.",
    "The bark, flowers, and leaves of the Ashoka tree are used in traditional medicine for various health benefits, including as an anti-inflammatory and for treating menstrual disorders."
  ],
  "img_url": "ahokatree/as1.jpeg",
  "img_url_": "ahokatree/as2.jpeg",
  "img_url__": "ahokatree/as3.jpeg",
  "img_url___": "ahokatree/as4.jpeg"
},
{
  "name": "Peepal Tree",
  "scientific_name": "Ficus religiosa",
  "overview": "The Peepal Tree, also known as the Sacred Fig, is a large deciduous tree native to the Indian subcontinent. It is considered sacred in Hinduism, Buddhism, and Jainism, often associated with meditation and enlightenment. Known for its heart-shaped leaves and large canopy, the Peepal tree is also valued for its air-purifying properties and shade.",
  "classification": {
    "family": "Moraceae",
    "genus": "Ficus"
  },
  "origin_and_habitat": {
    "native_region": "Native to the Indian subcontinent, but widely distributed across tropical and subtropical regions of Asia.",
    "native_habitat": "Thrives in tropical and subtropical climates, preferring well-drained, fertile soils and plenty of sunlight."
  },
  "physical_characteristics": {
    "size": "Typically grows 15–25 meters (49–82 feet) tall, with a canopy spread of 10–15 meters (33–49 feet).",
    "growth_rate": "Fast-growing, with a lifespan of hundreds of years.",
    "leaf_shape": "Heart-shaped leaves, typically 10–20 cm long, with a pointed tip and smooth edges. The leaves are glossy and dark green.",
    "flower_description": "Small, inconspicuous flowers found inside fig-like fruit, which is an inverted flower cluster."
  },
  "leaf_close_up": "https://example.com/images/peepal_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun but can tolerate some light shade.",
    "watering_needs": "Requires regular watering, especially during dry periods, but is tolerant of drought once established.",
    "soil_preferences": "Prefers well-drained, fertile soils but can adapt to various soil types.",
    "fertilization_tips": "Fertilize with a balanced fertilizer during the growing season to support healthy growth."
  },
  "uses_and_benefits": [
    "The Peepal tree is considered sacred and is often planted near temples and monasteries.",
    "Its leaves and bark are used in traditional medicine for a variety of ailments, including digestive and respiratory issues.",
    "The tree provides excellent shade and helps purify the air by absorbing carbon dioxide and releasing oxygen."
  ],
  "img_url": "peepaltree/p1.jpeg",
  "img_url_": "peepaltree/p2.jpeg",
  "img_url__": "peepaltree/p3.jpeg",
  "img_url___": "peepaltree/p4.jpeg",
},
{
  "name": "Coconut Tree",
  "scientific_name": "Cocos nucifera",
  "overview": "The Coconut Tree is a tropical palm tree known for its iconic tall trunk and large, feathery leaves. Native to coastal areas of Southeast Asia and the Pacific islands, it is grown worldwide in tropical climates. The tree is prized for its fruit, the coconut, which provides water, oil, and other edible products, while its husk, wood, and leaves have numerous uses.",
  "classification": {
    "family": "Arecaceae",
    "genus": "Cocos"
  },
  "origin_and_habitat": {
    "native_region": "Native to coastal areas of Southeast Asia, the Indian subcontinent, and the Pacific Islands, but widely cultivated in tropical regions worldwide.",
    "native_habitat": "Thrives in sandy, well-drained soils along coastal areas, with plenty of sunlight and high humidity."
  },
  "physical_characteristics": {
    "size": "Typically grows 20–30 meters (66–98 feet) tall, with a crown of large, feathery leaves.",
    "growth_rate": "Moderate to fast-growing, taking about 6–10 years to begin fruiting.",
    "leaf_shape": "Long, feathery, pinnate leaves, with each leaf reaching lengths of 4–6 meters (13–20 feet).",
    "flower_description": "Small, white or yellowish flowers that grow in large clusters from the trunk, followed by the green coconuts."
  },
  "leaf_close_up": "https://example.com/images/coconut_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun for optimal growth and fruiting.",
    "watering_needs": "Requires regular watering, especially during dry periods, but can tolerate drought once established.",
    "soil_preferences": "Prefers well-drained, sandy, and slightly acidic soils, typically found in coastal areas.",
    "fertilization_tips": "Fertilize with a balanced fertilizer to encourage healthy growth and fruit production, especially during the growing season."
  },
  "uses_and_benefits": [
    "Coconuts are a vital food source, providing water, milk, oil, and flesh, which are used in cooking, beverages, and cosmetics.",
    "Coconut oil is widely used for its medicinal, cosmetic, and culinary benefits.",
    "The tree’s leaves, husk, and wood are used for making various products like mats, baskets, and roofing materials."
  ],
  "img_url": "CoconutTree/c1.jpeg",
  "img_url_": "CoconutTree/c2.jpeg",
  "img_url__": "CoconutTree/c3.jpeg",
  "img_url___": "CoconutTree/c4.jpeg"
},
{
  "name": "Chinese Tallow Tree",
  "scientific_name": "Triadica sebifera",
  "overview": "The Chinese Tallow Tree is a fast-growing deciduous tree native to China, Taiwan, and Southeast Asia. It is known for its vibrant fall foliage and its ability to thrive in a variety of soil types. While it is popular for ornamental purposes, it is also considered an invasive species in some regions due to its rapid spread and impact on native ecosystems.",
  "classification": {
    "family": "Euphorbiaceae",
    "genus": "Triadica"
  },
  "origin_and_habitat": {
    "native_region": "Native to China, Taiwan, and Southeast Asia, but introduced to other regions including the southeastern United States.",
    "native_habitat": "Thrives in a variety of soil types, including moist, well-drained soils, and is commonly found in disturbed areas, such as roadsides and forests."
  },
  "physical_characteristics": {
    "size": "Typically grows 9–15 meters (30–50 feet) tall, with a broad, rounded canopy.",
    "growth_rate": "Fast-growing, often reaching full size in 5–10 years.",
    "leaf_shape": "Large, broad, glossy green leaves that are somewhat heart-shaped with pointed tips.",
    "flower_description": "Small, inconspicuous flowers that are yellowish-green, typically appearing in clusters."
  },
  "leaf_close_up": "https://example.com/images/chinese_tallow_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun but can tolerate partial shade.",
    "watering_needs": "Requires regular watering, especially during dry periods, but is somewhat drought-tolerant once established.",
    "soil_preferences": "Adaptable to a variety of soil types, including sandy, clay, and loamy soils, as long as they are well-drained.",
    "fertilization_tips": "Occasional fertilization with a balanced fertilizer can encourage healthy growth, especially in nutrient-poor soils."
  },
  "uses_and_benefits": [
    "The tree is often used for ornamental purposes due to its attractive foliage, especially in the fall when the leaves turn bright red, yellow, and orange.",
    "The seeds of the tree produce tallow, which can be used for making soap and candles.",
    "The tree has also been used for erosion control, as it grows quickly and helps stabilize the soil."
  ],
  "img_url": "chinesetree/ch1.jpeg",
  "img_url_": "chinesetree/ch2.jpeg",
  "img_url__": "chinesetree/ch3.jpeg",
  "img_url___": "chinesetree/ch4.jpeg"
},
{
  "name": "Tamarind Tree",
  "scientific_name": "Tamarindus indica",
  "overview": "The Tamarind Tree is a large, evergreen tree native to tropical Africa but widely cultivated in tropical and subtropical regions around the world. Known for its sour, tangy fruit, the tamarind tree is an important source of food and medicine. The tree is also valued for its shade, and its wood is used in carpentry and crafting.",
  "classification": {
    "family": "Fabaceae",
    "genus": "Tamarindus"
  },
  "origin_and_habitat": {
    "native_region": "Native to tropical Africa, but widely cultivated in tropical and subtropical regions across Asia, the Caribbean, and Central America.",
    "native_habitat": "Thrives in hot, dry climates with well-drained soils, often found in savannahs and open forests."
  },
  "physical_characteristics": {
    "size": "Typically grows 15–25 meters (49–82 feet) tall, with a spreading canopy that can reach 10–15 meters (33–49 feet) in diameter.",
    "growth_rate": "Moderate to slow growth rate, with fruiting occurring 6–8 years after planting.",
    "leaf_shape": "Compound, pinnate leaves with 10–20 pairs of leaflets, giving the tree a delicate, fern-like appearance.",
    "flower_description": "Small, yellow to reddish-brown flowers that grow in clusters, with a distinctive long, curved shape."
  },
  "leaf_close_up": "https://example.com/images/tamarind_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun for optimal growth and fruit production.",
    "watering_needs": "Requires regular watering, especially during the dry season, but is drought-tolerant once established.",
    "soil_preferences": "Prefers well-drained, sandy, and loamy soils but can tolerate poor soils.",
    "fertilization_tips": "Fertilize with a balanced fertilizer during the growing season to promote healthy growth and fruiting."
  },
  "uses_and_benefits": [
    "The tamarind fruit is used in a variety of culinary dishes, including sauces, chutneys, and beverages, thanks to its tangy, sweet-and-sour flavor.",
    "Tamarind is widely used in traditional medicine for its digestive, anti-inflammatory, and antioxidant properties.",
    "The tree’s wood is durable and used in making furniture, flooring, and crafts."
  ],
  "img_url": "tamarindtree/tr1.jpeg",
  "img_url_": "tamarindtree/tr2.jpeg",
  "img_url__": "tamarindtree/tr3.jpeg",
  "img_url___": "tamarindtree/tr4.jpeg"
},
{
  "name": "Yellow Bells Tree",
  "scientific_name": "Tecoma stans",
  "overview": "Yellow Bells is a striking, fast-growing shrub or small tree known for its vibrant, trumpet-shaped yellow flowers. Native to the southwestern United States, Mexico, and Central America, it thrives in tropical and subtropical climates. This tree is valued for its bright ornamental flowers, which attract pollinators, as well as its drought tolerance once established.",
  "classification": {
    "family": "Bignoniaceae",
    "genus": "Tecoma"
  },
  "origin_and_habitat": {
    "native_region": "Native to the southwestern United States, Mexico, and Central America.",
    "native_habitat": "Prefers well-drained soils in tropical and subtropical regions, commonly found in dry areas, roadsides, and gardens."
  },
  "physical_characteristics": {
    "size": "Typically grows 3–4.5 meters (10–15 feet) tall, with a similar spread.",
    "growth_rate": "Fast-growing, often blooming within 1–2 years of planting.",
    "leaf_shape": "Pinnate, dark green leaves with lanceolate leaflets, giving the plant a dense, bushy appearance.",
    "flower_description": "Large, bright yellow, trumpet-shaped flowers that grow in clusters, with a sweet fragrance that attracts bees and hummingbirds."
  },
  "leaf_close_up": "https://example.com/images/yellow_bells_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun for optimal flowering, but can tolerate partial shade.",
    "watering_needs": "Drought-tolerant once established, but benefits from regular watering during dry spells.",
    "soil_preferences": "Thrives in well-drained, sandy or loamy soils, but can tolerate a range of soil types.",
    "fertilization_tips": "Fertilize with a balanced fertilizer during the growing season to promote healthy blooms and foliage."
  },
  "uses_and_benefits": [
    "Yellow Bells is a popular ornamental tree, often used in gardens and landscaping for its vibrant yellow flowers.",
    "The tree attracts pollinators such as bees, butterflies, and hummingbirds, making it beneficial for the local ecosystem.",
    "Its drought tolerance makes it ideal for xeriscaping and low-maintenance landscapes."
  ],
  "img_url": "yellow/y3.jpeg",
  "img_url_": "yellow/y2.jpeg",
  "img_url__": "yellow/y1.png",
  "img_url___": "yellow/y4.jpeg"
},
{
  "name": "Copperpod Tree",
  "scientific_name": "Peltophorum pterocarpum",
  "overview": "The Copperpod Tree is a fast-growing deciduous tree native to tropical Asia and Africa. Known for its striking copper-colored flowers and its ability to provide excellent shade, it is commonly used in landscaping and as an ornamental tree. It is also valued for its durable wood and ability to tolerate a variety of soil types.",
  "classification": {
    "family": "Fabaceae",
    "genus": "Peltophorum"
  },
  "origin_and_habitat": {
    "native_region": "Native to tropical Asia and Africa, but widely cultivated in tropical and subtropical regions worldwide.",
    "native_habitat": "Thrives in tropical climates with well-drained soils, often found in urban areas, parks, and along roadsides."
  },
  "physical_characteristics": {
    "size": "Typically grows 6–12 meters (20–40 feet) tall with a wide canopy that can spread 6–8 meters (20–26 feet) across.",
    "growth_rate": "Fast-growing, often reaching maturity within a few years.",
    "leaf_shape": "Compound, pinnate leaves with 8–10 pairs of leaflets, giving the tree a soft, fern-like appearance.",
    "flower_description": "Bright copper-yellow flowers that bloom in large, showy clusters, typically during the summer months."
  },
  "leaf_close_up": "https://example.com/images/copperpod_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun to partial shade for optimal growth and flowering.",
    "watering_needs": "Moderate watering requirements; tolerates dry periods once established but benefits from regular watering during dry spells.",
    "soil_preferences": "Adaptable to a variety of soil types, including sandy, loamy, and clay soils, as long as they are well-drained.",
    "fertilization_tips": "Fertilize with a balanced fertilizer during the growing season to encourage healthy growth and vibrant flowering."
  },
  "uses_and_benefits": [
    "The Copperpod tree is popular for its ornamental value, especially in urban landscaping, parks, and roadsides.",
    "Its bright copper-yellow flowers attract pollinators like bees and butterflies.",
    "The tree’s wood is durable and used in carpentry and crafting, while the shade it provides makes it suitable for tropical gardens and public spaces."
  ],
  "img_url": "CopperpodTree/CopperpodTree.jpg",
  "img_url_": "CopperpodTree/CopperpodTree(2).jpg",
  "img_url__": "CopperpodTree/CopperpodTree(3).jpg",
  "img_url___": "CopperpodTree/CopperpodTree(4).jpg"
},
{
  "name": "Plumeria Tree",
  "scientific_name": "Plumeria spp.",
  "overview": "Plumeria, also known as Frangipani, is a tropical tree prized for its fragrant and beautiful flowers. Native to the Caribbean, Central America, and Mexico, Plumeria is commonly found in tropical and subtropical regions around the world. It is often used in landscaping and is the symbol of beauty, grace, and new beginnings in many cultures.",
  "classification": {
    "family": "Apocynaceae",
    "genus": "Plumeria"
  },
  "origin_and_habitat": {
    "native_region": "Native to the Caribbean, Central America, and Mexico, and widely cultivated in tropical and subtropical regions.",
    "native_habitat": "Thrives in tropical climates, preferring well-drained, sandy soils, and plenty of sunlight."
  },
  "physical_characteristics": {
    "size": "Typically grows 3–6 meters (10–20 feet) tall, though some species can reach up to 8 meters (26 feet).",
    "growth_rate": "Moderate to fast-growing, especially in tropical climates, and can start flowering within a couple of years of planting.",
    "leaf_shape": "Long, narrow, and glossy green leaves with a leathery texture, arranged in a spiral pattern at the ends of the branches.",
    "flower_description": "The tree produces fragrant, five-petaled flowers in a variety of colors, including white, yellow, pink, and red, often with a yellow center."
  },
  "leaf_close_up": "https://example.com/images/plumeria_leaf_close_up.jpg",
  "care_instructions": {
    "light_requirements": "Prefers full sun for optimal flowering, though it can tolerate some light shade.",
    "watering_needs": "Requires regular watering, but should not be overwatered. Allow the soil to dry out between waterings.",
    "soil_preferences": "Prefers well-drained, sandy or loamy soils, and is tolerant of slightly acidic to neutral soil pH.",
    "fertilization_tips": "Fertilize monthly with a balanced fertilizer during the growing season to promote healthy growth and abundant blooms."
  },
  "uses_and_benefits": [
    "Plumeria flowers are commonly used in tropical and Hawaiian leis, and are known for their strong, sweet fragrance.",
    "The tree’s fragrant flowers attract pollinators like bees, butterflies, and birds.",
    "Plumeria is also used in traditional medicine in various cultures for its potential anti-inflammatory and soothing properties."
  ],
  "img_url": "PlumeriaTree/pu1.jpeg",
  "img_url_": "PlumeriaTree/pu2.jpeg",
  "img_url__": "PlumeriaTree/pu3.jpeg",
  "img_url___": "PlumeriaTree/pu4.jpeg"
}

















];


function displayTreeList() {
  const treeListContainer = document.querySelector(".tree-list ul");
  treesData.forEach((ele,index) => {
    const el = document.createElement("li");
    const para = document.createElement("p");
    para.innerHTML = `${index+1}. ${ele.name}`;
    el.append(para);
    const ico = document.createElement("i");
      ico.setAttribute("class","fa-solid fa-caret-right");
      el.append(ico);
      treeListContainer.appendChild(el);
      el.addEventListener('click', () => {
        console.log(screen.width);
        scrollToTop();
        showTreeInfo(ele);
        
        let work = screen.width>1160 ? true:false;
        if(holder==null){
          el.classList.add("underlined");
          if(work){
            el.lastChild.style.display="block";
          }
          el.style.fontWeight="600";
          holder = el;
        }
        if(holder!=null){
          holder.classList.remove("underlined");
          holder.classList.remove("active");
          if(work){
            holder.lastChild.style.display="none";
          }
          holder.style.fontWeight="400";
          holder = el;
          holder.classList.add("underlined");
          if(work){
          holder.lastChild.style.display="block";
          }
          holder.style.fontWeight="600";
        }
        
      });
      
  });
}


function showTreeInfo(tree) {
    document.querySelector('.physical-characteristics img').setAttribute('src',`${tree.img_url___}`)
    document.querySelector('.uses-benefits img').setAttribute('src',`${tree.img_url__}`)
    document.querySelector('.origin-habitat img').setAttribute('src',`${tree.img_url_}`)
    document.querySelector('.plant-container img').setAttribute('src',`${tree.img_url}`)
    document.querySelector('.plant-container .plant-name').innerText = `${tree.name} (${tree.scientific_name})`;
    document.querySelector('.overview p').innerText = tree.overview;
    document.querySelector('.classification p strong:first-child').innerText = tree.classification.family;
    document.querySelector("#genus").innerText = tree.classification.genus;
    document.querySelector('.origin-habitat p strong').innerText = tree.origin_and_habitat.native_region;
    
    const physicalList = document.querySelector('.physical-characteristics ul');
    physicalList.innerHTML = `
        <li>Size: ${tree.physical_characteristics.size}</li>
        <li>Growth Rate: ${tree.physical_characteristics.growth_rate}</li>
        <li>Leaf Shape: ${tree.physical_characteristics.leaf_shape}</li>
        <li>Flower Description: ${tree.physical_characteristics.flower_description}</li>
    `;
    

    const careList = document.querySelector('.care-instructions ul');
    careList.innerHTML = `
        <li>Light Requirements: ${tree.care_instructions.light_requirements}</li>
        <li>Watering Needs: ${tree.care_instructions.watering_needs}</li>
        <li>Soil Preferences: ${tree.care_instructions.soil_preferences}</li>
        <li>Fertilization Tips: ${tree.care_instructions.fertilization_tips}</li>
    `;

    document.querySelector('.uses-benefits p').innerText = tree.uses_and_benefits.join(', '); // Adjust as needed
    
    document.querySelector('.plant-container').classList.remove('hidden');
   
}

let check = document.querySelector("#control #handle");
console.log(check);
check.addEventListener("change",(e)=>{
  console.log(e.target.checked);
  let menu = document.querySelector(".menu");
  let cross = document.querySelector(".cross");
  let box = document.querySelector("#box2");
  if(e.target.checked){
    cross.style.display="block";
    menu.style.display="none";
    box.style.display="flex"
    gsap.from(box,{
      x:5,
      opacity:0,
      duration:0.3,
      
    })
    gsap.from("#box2 span",{
      opacity:0,
      x:5,
      stagger:0.3,
      duration:0.6,
      delay:0.2
    })
  }else{
    cross.style.display="none";
    menu.style.display="block";
    box.style.display="none"
 
}})
displayTreeList();


