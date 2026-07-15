export interface Product {
  slug: string;
  name: string;
  category: "Kids Outdoor Play" | "Baby Gear & Toys" | "Inflatable & Frame Pools" | "Hover Boards" | "Recreational Rides";
  ageRange: string;
  price: number;
  cert: string;
  description: string;
  specs: { label: string; value: string }[];
  stock: number;
  image: string;
  badge?: "Sale" | "New" | "Hot" | null;
  comparePrice?: number;
}

export const PRODUCT_IMAGES: Record<string, string> = {
  "12ft-trampoline-with-ladder-and-safety-net": "https://payafterdelivery.co.ke/wp-content/uploads/2026/02/IMG-20250516-WA0018.jpg",
  "kids-indoor-jungle-gym-all-wooden-2ml-1-2mw-2-1mh": "https://totochap.com/wp-content/uploads/2026/07/Indoor-Jungle-Gym-3-PS.jpg",
  "kids_rock_climbing_holds_with_easy_grip": "https://totochap.com/wp-content/uploads/2026/06/main_image_2.png",
  "kids_platform_swing": "https://totochap.com/wp-content/uploads/2026/06/main_image_3-2.jpg",
  "kids_interlocking_play_mats": "https://totochap.com/wp-content/uploads/2026/05/main_image_1-2.jpg",
  "kids-stepping-stones-kids-sensory-balance-equipment": "https://totochap.com/wp-content/uploads/2026/03/main_image_1-2.jpg",
  "kids-outdoor-playground-equipment": "https://totochap.com/wp-content/uploads/2025/02/Kids-Tower-Play-Stations.webp",
  "kids-indoor-playhouse-kids-indoor-play-centre": "https://totochap.com/wp-content/uploads/2026/02/Kids-Playhouse.jpg",
  "kids-playground-tunnel-n-climbers-indoor-kids-play": "https://totochap.com/wp-content/uploads/2026/01/main_image_1-1.jpg",
  "kids-plastic-see-saw-for-indoor-play-area": "https://totochap.com/wp-content/uploads/2026/01/main_image_3-10.jpg",
  "kids-rocking-horse-car-toys-dolphin-themed-rocking-car-toy": "https://totochap.com/wp-content/uploads/2026/01/Double-Horses.jpg",
  "indoor-kids-ride-on-car-toy": "https://totochap.com/wp-content/uploads/2026/01/main_image_1-1.png",
  "montessori-educational-toy-set": "https://totochap.com/wp-content/uploads/2026/01/Montessori-Kids-Educational-Toys.jpg",
  "kids-indoor-play-centre-premium-all-in-one-kids-play": "https://totochap.com/wp-content/uploads/2026/01/Play-House-Design.jpg",
  "kids-balance-boards-kenya": "https://totochap.com/wp-content/uploads/2025/12/Kids-Curve-Boards-Main.jpg",
  "4-ft-kids-trampoline-with-safety-net-plus-basket-ball-hoop-and-pit-balls": "https://totochap.com/wp-content/uploads/2025/12/4ft-Trampoline-Image-1.jpg",
  "kids-climbing-frame-with-slide-and-swing": "https://totochap.com/wp-content/uploads/2025/09/Climbing-Frame-with-Slide-and-Swing.jpg",
  "kids-indoor-beam-balance": "https://totochap.com/wp-content/uploads/2025/08/Ordinary-20-piece-set_5.png",
  "kids-hurdle-set-and-obstacle-course": "https://totochap.com/wp-content/uploads/2025/08/Main-3.png",
  "bouncing_castle_for_kids": "https://totochap.com/wp-content/uploads/2025/07/Front-View-Resize.jpg",
  "ocean_kids_soft_ball_pit_balls": "https://totochap.com/wp-content/uploads/2025/03/Kids-Soft-Ocean-Ball-Pit-Balls.webp",
  "kids_swings_and_slide_sets": "https://totochap.com/wp-content/uploads/2025/03/Swing-Slide-Set-Main-Pic-1.jpg",
  "gym-fitness-jumping-mini-trampoline-kids-adults": "https://totochap.com/wp-content/uploads/2025/03/Gym-mini-Trampolines.jpg",
  "climbing-frame_for-kids": "https://totochap.com/wp-content/uploads/2025/02/5-in-1-Climbing-Frame-for-Kids.webp",
  "baby_playpen_in_kenya": "https://totochap.com/wp-content/uploads/2025/02/Baby-Play-Pen-Image-1-Resized.jpg",
  "trampolines_in_kenya": "https://totochap.com/wp-content/uploads/2025/02/Trampolines-in-Kenya.webp",
  "outdoor_trampoline_pricein_kenya": "https://totochap.com/wp-content/uploads/2025/02/8ft-Outdoor-Trampoline.webp",
  "12ft_outdoor_trampoline_price_kenya": "https://totochap.com/wp-content/uploads/2025/02/Kids-trampoline.webp",
  "trampoline_10ft_in_kenya": "https://totochap.com/wp-content/uploads/2025/02/10ft-Outdoor-Kids-Trampoline.webp",
  "polyplay-play-station-ppl-1t-61": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL1T61-2.png",
  "polyplay-play-station-ppl-3t-16": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL3T16-4.png",
  "polyplay-play-station-ppl-3t-15": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL3T15-2.png",
  "polyplay-play-station-ppl-2t-96": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T96-2.png",
  "polyplay-play-station-ppl-2t-95": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T95-3.png",
  "polyplay-play-station-ppl-2t-94": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T94-3.png",
  "polyplay-play-station-ppl-2t-93": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T93-3.png",
  "polyplay-play-station-ppl-2t-92": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T92-3.png",
  "polyplay-play-station-ppl-2t-91": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T91-2.png",
  "polyplay-play-station-ppl-2t-90": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T90-2.png",
  "polyplay-play-station-ppl-2t-89": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T89-3.png",
  "polyplay-play-station-ppl-1t-59": "https://www.polyplay.co.ke/wp-content/uploads/2026/02/PPL1T59-1.png",
  "polyplay-play-station-ppl-1t-458": "https://www.polyplay.co.ke/wp-content/uploads/2026/02/PPP1T58-2.png",
  "polyplay-play-station-ppl-2t-88": "https://www.polyplay.co.ke/wp-content/uploads/2026/02/PPL2T88-3.png",
  "polyplay-play-station-ppl-2t-87": "https://www.polyplay.co.ke/wp-content/uploads/2026/02/PPL2T87-1.png",
  "polyplay-play-station-ppl-2t-70": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Screenshot-2025-09-13-111610.png",
  "polyplay-play-station-ppl-2t-71": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/1-4.png",
  "polyplay-play-station-ppl-2t-72": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/2-7.png",
  "polyplay-play-station-ppl-2t-73": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/1-3.png",
  "polyplay-play-station-ppl-2t-74": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/1-2.png",
  "polyplay-play-station-ppl-2t-75": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/1-1.png",
  "polyplay-play-station-ppl-2t-76": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/1.png",
  "polyplay-play-station-ppl-2t-77": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Screenshot-2025-11-21-151334.png",
  "polyplay-play-station-ppl-2t-86": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/2-2.png",
  "polyplay-play-station-ppl-2t-85": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/2-1.png",
  "polyplay-play-station-ppl-2t-84": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/4.png",
  "polyplay-play-station-ppl-2t-83": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/PPL2T83-4.png",
  "polyplay-play-station-ppl-2t-82": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Ppl2t82-3.png",
  "polyplay-play-station-ppl-2t-81": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Polyplay-Play-Station-PPL-2T-81-2.png",
  "polyplay-play-station-ppl-2t-80": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Polyplay-Play-Station-PPL-2T-80-3.png",
  "polyplay-play-station-ppl-1t-79": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Polyplay-Play-Station-PPL-2T-79_.png",
  "polyplay-play-station-ppl-2t-78": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Polyplay-Play-Station-PPL-2T-78.png",
  "polyplay-play-station-ppl-1t-57": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/PPL1T57-.png",
  "polyplay-play-station-ppl-3t-12": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture8-1.jpg",
  "polyplay-play-station-ppl-2t-69": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture4-2.jpg",
  "polyplay-play-station-ppl-2t-68": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture1-1.jpg",
  "polyplay-play-station-ppl-b-10": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture12.jpg",
  "polyplay-play-station-ppl-1t-49": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture4-1.jpg",
  "polyplay-play-station-ppl-1t-47-copy": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-30-104831.jpg",
  "polyplay-play-station-ppl-3t-11": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture8.jpg",
  "polyplay-play-station-ppl-3t-09": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture6.jpg",
  "polyplay-play-station-ppl-2t-67": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture5.jpg",
  "polyplay-play-station-ppl-2t-66": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-15-113125.jpg",
  "polyplay-play-station-ppl-2t-65": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-15-113102.jpg",
  "polyplay-play-station-ppl-2t-64": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture3.jpg",
  "polyplay-play-station-ppl-2t-63": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-15-112858.jpg",
  "polyplay-play-station-ppl-2t-62": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/PPL-2T-62-1.jpg",
  "polyplay-play-station-ppl-1t-47": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture34.jpg",
  "polyplay-play-station-ppl-1t-46": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture28.jpg",
  "polyplay-play-station-ppl-1t-45": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture31.jpg",
  "polyplay-play-station-ppl-1t-44": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture27.jpg",
  "polyplay-play-station-ppl-1t-43": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture24.jpg",
  "polyplay-play-station-ppl-1t-37-copy": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-15-110020.jpg",
  "polyplay-play-station-ppl-1t-40": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-15-110248.jpg",
  "polyplay-play-station-ppl-1t-39": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/PPL-1T-39-FRONT.jpg",
  "polyplay-play-station-ppl-1t-38": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/PPL-1T-38-BACK.jpg",
  "polyplay-play-station-ppl-3t-10": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-15-113748.jpg",
  "polyplay-play-station-ppl-1t-37": "https://www.polyplay.co.ke/wp-content/uploads/2025/08/PPL-1T-37-FRONT.jpg",
  "polyplay-play-station-ppl-2t-59": "https://www.polyplay.co.ke/wp-content/uploads/2025/08/Picture1.png"
};

export const PRODUCTS: Product[] = [
  {
    "slug": "12ft-trampoline-with-ladder-and-safety-net",
    "name": "12ft Trampoline with Ladder and Safety Net",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 51999,
    "cert": "ASTM / CE certified",
    "description": "\ud83c\udfc0 12ft Outdoor Trampoline with Safety Enclosure \u2013 Fun, Fitness & Family Bonding in One! Bring excitement and exercise to your backyard with this premium 12ft trampoline \u2014 the perfect mix of fun, safety, and durability. Built for both kids and adults, this trampoline delivers hours of active play,...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Structure",
        "value": "Galvanized Steel"
      }
    ],
    "stock": 10,
    "image": "https://payafterdelivery.co.ke/wp-content/uploads/2026/02/IMG-20250516-WA0018.jpg",
    "badge": "Sale"
  },
  {
    "slug": "kids-indoor-jungle-gym-all-wooden-2ml-1-2mw-2-1mh",
    "name": "Kids Indoor Jungle Gym &#8211; All Wooden (2m(L) * 1.2m(W) * 2.1m(H)",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 160000,
    "cert": "ASTM / CE certified",
    "description": "Custom-Made Wooden Kids Indoor Jungle Gym Transform your child\u2019s playroom into a world of adventure, movement, and learning with our Custom-Made Wooden Indoor Kids Jungle Gym. Expertly handcrafted from high-quality wood, this premium indoor play structure is designed to encourage active play, cre...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Material",
        "value": "Premium Mahogany Wood"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2026/07/Indoor-Jungle-Gym-3-PS.jpg",
    "badge": null
  },
  {
    "slug": "kids_rock_climbing_holds_with_easy_grip",
    "name": "Kids Rock Climbing Holds Indoor Outdoor Kids Wall Climber Stones with Screws and Nuts (10 pieces per set)",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 3000,
    "cert": "ASTM / CE certified",
    "description": "Kids Rock Climbing Holds Set (10 pieces with screws & Nuts) Create an exciting play and exercise space at home with these Kids Rock Climbing Holds. They turn walls, playsets and backyard structures into fun climbing zones for children. These climbing stones give kids an active way to play. They a...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2026/06/main_image_2.png",
    "badge": "Sale"
  },
  {
    "slug": "kids_platform_swing",
    "name": "Kids Platform Swing &#8211; Patio Swing, Garden Swing, Tree Seat Swing",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 6500,
    "cert": "ASTM / CE certified",
    "description": "Give your child fun, calm and active play with this Kids Platform Swing for indoor and outdoor use. This versatile swing works as a patio swing, tree swing, garden swing and indoor sensory swing. It gives children a safe, comfortable space to swing, sit, lie down, read, relax or play. The spaciou...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2026/06/main_image_3-2.jpg",
    "badge": "Sale"
  },
  {
    "slug": "kids_interlocking_play_mats",
    "name": "Interlocking Floor Mats for Kids Play Area (1m by1m by 20 mm)",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 3200,
    "cert": "ASTM / CE certified",
    "description": "Interlocking Floor Mats for Kids Play Rooms (1 m by 1m by 20mm) Upgrade your child\u2019s play area with premium Interlocking Floor Mats for Kids designed for safety, comfort, and daily use. Each mat measures 1m by 1m and features a thick 20mm EVA foam cushioning layer that creates a soft surface for ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2026/05/main_image_1-2.jpg",
    "badge": "Sale"
  },
  {
    "slug": "kids-stepping-stones-kids-sensory-balance-equipment",
    "name": "Kids Stepping Stones &#8211; Kids Sensory &#038; Balance Equipment",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 13500,
    "cert": "ASTM / CE certified",
    "description": "Kids Stepping Stones \u2013 11 Piece Kids Sensory Balance Set Encourage active play, balance development, and sensory exploration with this colorful Kids Stepping Stones 11-piece set. The set includes Sensory Stepping Stones for Kids in different sizes, ranging from large stones to small stepping pads...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2026/03/main_image_1-2.jpg",
    "badge": "Sale"
  },
  {
    "slug": "kids-outdoor-playground-equipment",
    "name": "Kids Outdoor Playground Equipment",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 435000,
    "cert": "ASTM / CE certified",
    "description": "Build the ultimate adventure destination with our premium Kids Outdoor Playground Equipment. We design every piece for extreme durability and maximum fun. Our collection helps you create a world-class Kids Outdoor Play Park. It works perfectly for private backyards or Outdoor Playground Equipment...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/02/Kids-Tower-Play-Stations.webp",
    "badge": null
  },
  {
    "slug": "kids-indoor-playhouse-kids-indoor-play-centre",
    "name": "Kids Indoor Playhouse | Kids indoor Play Centre",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 62500,
    "cert": "ASTM / CE certified",
    "description": "Kids Indoor Playhouse with Slide & Climber Transform your commercial space into the ultimate destination for young explorers with our premium Kids Indoor Playhouse station. Specially engineered for the high-traffic demands of a Kids Indoor Play Centre, this multi-level adventure hub combines phys...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2026/02/Kids-Playhouse.jpg",
    "badge": "Sale"
  },
  {
    "slug": "kids-playground-tunnel-n-climbers-indoor-kids-play",
    "name": "Kids Crawl and Climb Tunnel &#8211; Kids Play Area",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 44500,
    "cert": "ASTM / CE certified",
    "description": "Kids Playground Tunnel & Climbers \u2013 Indoor climb and crawl tunnel This kids climb and crawl tunnel creates an exciting and active experience inside any kids indoor play center or play room. Designed to encourage movement, exploration, and confidence, it transforms indoor spaces into engaging adve...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2026/01/main_image_1-1.jpg",
    "badge": "Sale"
  },
  {
    "slug": "kids-plastic-see-saw-for-indoor-play-area",
    "name": "Kids Plastic See-Saw for Indoor Play Area",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 12500,
    "cert": "ASTM / CE certified",
    "description": "Kids Plastic See-Saw for indoor and outdoor kid playground. This Kids Plastic See-Saw brings safe, engaging movement into indoor play rooms designed for younger kindergarten children. It fits perfectly in restaurants, hospitals, and corporate centers that want child-friendly spaces. Moreover, the...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2026/01/main_image_3-10.jpg",
    "badge": "Sale"
  },
  {
    "slug": "kids-rocking-horse-car-toys-dolphin-themed-rocking-car-toy",
    "name": "Kids Rocking Horse Car Toys",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 11500,
    "cert": "ASTM / CE certified",
    "description": "Kids Rocking Horse Toys for Kids Indoor Play Areas Bring ocean-inspired excitement into any kids indoor play area with our dolphin-themed rocking horse toys. Moreover, these playful designs create instant attraction and encourage active indoor movement. Children enjoy rocking, balancing, and imag...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2026/01/Double-Horses.jpg",
    "badge": "Sale"
  },
  {
    "slug": "indoor-kids-ride-on-car-toy",
    "name": "Indoor Push Car Toy For Kids Indoor Play Area &#8211; Playground Toy (92cm by 87 cm by 50 cm)",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 23500,
    "cert": "ASTM / CE certified",
    "description": "Kindergarten Children\u2019s Plastic Physical Training Kids Ride On Car Toy for Indoor Entertainment Make indoor playtime exciting, active, and educational with this Kindergarten Children\u2019s Plastic Physical Training Ride On Car Toy. It suits children up to seven years old and supports healthy physical...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2026/01/main_image_1-1.png",
    "badge": "Sale"
  },
  {
    "slug": "montessori-educational-toy-set",
    "name": "Montessori Educational Toy Set",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 1800,
    "cert": "ASTM / CE certified",
    "description": "All in One Montessori Educational Toy Set Spark curiosity, creativity, and early learning with this all-in-one Montessori Educational Toy set, thoughtfully designed to support your child\u2019s development through hands-on play. This premium collection of Kids Toys includes four engaging wooden activi...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2026/01/Montessori-Kids-Educational-Toys.jpg",
    "badge": "Sale"
  },
  {
    "slug": "kids-indoor-play-centre-premium-all-in-one-kids-play",
    "name": "Kids Indoor Play Centre &#8211; Home, Daycare Centre, Corporate Kids Play Area",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 60500,
    "cert": "ASTM / CE certified",
    "description": "Kids Indoor Play Centre Design Packages Kids indoor play Centre design solutions help create safe, fun, and well-planned play spaces for homes, restaurants, hospitals, and corporate settings. These setups support active play, social interaction, and early learning. All packages form a secure Kids...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2026/01/Play-House-Design.jpg",
    "badge": "Sale"
  },
  {
    "slug": "kids-balance-boards-kenya",
    "name": "Kids Balance Board (70 cm by 26 cm)",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 2000,
    "cert": "ASTM / CE certified",
    "description": "Kids Balance Board (70 cm x 26 cm) Encourage active play and healthy development with our Kids Balance Board, thoughtfully designed to support children\u2019s physical growth while providing endless fun. The kids boards measure 70 cm by 26 cm, hence perfectly sized for young children, and ideal for ho...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/12/Kids-Curve-Boards-Main.jpg",
    "badge": "Sale"
  },
  {
    "slug": "4-ft-kids-trampoline-with-safety-net-plus-basket-ball-hoop-and-pit-balls",
    "name": "4 ft Kids Trampoline with Safety Net &#8211; Plus Basket Ball, Hoop and Pit Balls",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 14500,
    "cert": "ASTM / CE certified",
    "description": "4ft Kids Trampoline With Safety Net \u2013 Plus Basket Ball, Hoop and Soft Pit Balls The 4ft Kids Trampoline with Protective Net is the perfect addition to your child\u2019s outdoor or indoor playtime. Designed for safety and fun, this trampoline features a sturdy frame and a high-quality protective net th...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Structure",
        "value": "Galvanized Steel"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/12/4ft-Trampoline-Image-1.jpg",
    "badge": "Sale"
  },
  {
    "slug": "kids-climbing-frame-with-slide-and-swing",
    "name": "Kids Climbing Frame with Slide",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 64500,
    "cert": "ASTM / CE certified",
    "description": "Kids Climbing Frame with Slide and Swing \u2013 Eco-Friendly Play Equipment in Kenya Bring fun, fitness, and adventure to your child\u2019s playtime with our Kids Climbing Frame with Slide, now available in Kenya. Designed with eco-friendly materials, this modern outdoor and indoor playset combines safety,...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/09/Climbing-Frame-with-Slide-and-Swing.jpg",
    "badge": "Sale"
  },
  {
    "slug": "kids-indoor-beam-balance",
    "name": "Kids Indoor Beam Balance",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 17500,
    "cert": "ASTM / CE certified",
    "description": "Kids Indoor Beam Balance \u2013 Sensory Play & Motor Skill Development Equipment Introduce fun, focus, and physical development into your child\u2019s playtime with our Kids Indoor Beam Balance \u2013 a thoughtfully designed sensory training tool perfect for indoor spaces. Whether you\u2019re setting up a Montessori...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/08/Ordinary-20-piece-set_5.png",
    "badge": "Sale"
  },
  {
    "slug": "kids-hurdle-set-and-obstacle-course",
    "name": "Kids Hurdle Set and Obstacle Course",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 34500,
    "cert": "ASTM / CE certified",
    "description": "Kids Hurdle Set \u2013 Sensory Training & Montessori Educational Games Kit Unlock endless active fun and learning with our Kids Hurdle Set, a must-have Montessori educational Kids Games Kit designed to support sensory and motor development in children aged 3 to 6 years. Whether you\u2019re creating a Kids ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/08/Main-3.png",
    "badge": "Sale"
  },
  {
    "slug": "bouncing_castle_for_kids",
    "name": "Bouncing Castle for Kids -(5*5*4.5m) Spider Man, Super Mario",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 295000,
    "cert": "ASTM / CE certified",
    "description": "Large Commercial Bouncing Castle for Kids \u2013 Perfect for Outdoor Fun in Kenya Turn any event into an unforgettable adventure with our Large Commercial Bouncing Castle for Kids, designed to keep children entertained for hours! This premium-quality inflatable is the ultimate addition to your Kids Pl...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/07/Front-View-Resize.jpg",
    "badge": "Sale"
  },
  {
    "slug": "ocean_kids_soft_ball_pit_balls",
    "name": "Kids Soft Play Balls-Ocean Ball Pit Balls (50 per set, 7.5 mm)",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 1050,
    "cert": "ASTM / CE certified",
    "description": "Kids Soft Ball Pit Balls price in Kenya (50 balls per set, 7.5 mm diameter) Looking for the perfect kids soft ball pit balls for your kids? premium playpen soft balls feature soft thickened plastic thus provides ultimate fun and safety. Made from high-quality, thickened soft balls, these pit ball...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/03/Kids-Soft-Ocean-Ball-Pit-Balls.webp",
    "badge": "Sale"
  },
  {
    "slug": "kids_swings_and_slide_sets",
    "name": "Kids Indoor Swing and Slide Set (197 cm by 152 cm by 124 cm)",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 35400,
    "cert": "ASTM / CE certified",
    "description": "Kids Swing and Slide Sets prices in Kenya Discover the perfect kids indoor swing and kids indoor slide for endless fun at home in Kenya. Our indoor kids toys provide hours of entertainment and promote physical activity and coordination. Ideal for small spaces, the playground swing and slide set f...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/03/Swing-Slide-Set-Main-Pic-1.jpg",
    "badge": "Sale"
  },
  {
    "slug": "gym-fitness-jumping-mini-trampoline-kids-adults",
    "name": "Mini Trampolines for Kids / Adult gym fitness",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 16500,
    "cert": "ASTM / CE certified",
    "description": "Jumping Indoor Mini Trampoline for Kids / Adults price in Kenya Premium Bungee Jumping: The high-quality indoor trampoline / bungee jumping beds with handles offer smooth and quite experience that provide a safe and comfortable workout experience. Best small size trampoline Prices: We offer compe...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Structure",
        "value": "Galvanized Steel"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/03/Gym-mini-Trampolines.jpg",
    "badge": "Sale"
  },
  {
    "slug": "climbing-frame_for-kids",
    "name": "Climbing Frame for Kids (5 in 1 Sets)",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 30500,
    "cert": "ASTM / CE certified",
    "description": "Montessori 5 in 1 Climbing frame for kids Price in Kenya Looking for the best climbing frame for kids in Kenya? Our Montessori kid frames are perfect for promoting outdoor kids\u2019 fitness. These climbing sets for kids help build strength, coordination, and balance. Designed for fun, they are also d...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/02/5-in-1-Climbing-Frame-for-Kids.webp",
    "badge": "Sale"
  },
  {
    "slug": "baby_playpen_in_kenya",
    "name": "Kids Picket Fence (Plastic and Durable)",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 21500,
    "cert": "ASTM / CE certified",
    "description": "Kids Picket Fence Price in Kenya Looking for a safe and durable Playpen picket fence for kids in Kenya? Our plastic, durable playpen fence offers the perfect space for your child to play safely indoors. Designed with high-quality materials, it ensures long-lasting use while providing a secure env...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/02/Baby-Play-Pen-Image-1-Resized.jpg",
    "badge": "Sale"
  },
  {
    "slug": "trampolines_in_kenya",
    "name": "Trampolines",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 24500,
    "cert": "ASTM / CE certified",
    "description": "Custom Trampolines in Kenya available Order your preferred custom size trampoline in Kenya including 4ft, 6ft, 8ft, 10ft, 12ft and 14ft trampoline in Kenya readily available at our online kids outdoor equipment shop. Trampolines are highly preferred for outdoor kids play as they are instrumental ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Structure",
        "value": "Galvanized Steel"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/02/Trampolines-in-Kenya.webp",
    "badge": "Sale"
  },
  {
    "slug": "outdoor_trampoline_pricein_kenya",
    "name": "8 ft Outdoor Trampoline",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 42500,
    "cert": "ASTM / CE certified",
    "description": "8ft Trampoline Price in Kenya Order high quality Trampoline in Kenya at affordable prices ideal for Kids Outdoor Fun, Kids Outdoor Activities, and Kids Playground Equipment\u2019s in Kenya. Trampolines are not just great for kids, but important for developing physical, mental, and social skills for ki...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Structure",
        "value": "Galvanized Steel"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/02/8ft-Outdoor-Trampoline.webp",
    "badge": "Sale"
  },
  {
    "slug": "12ft_outdoor_trampoline_price_kenya",
    "name": "12ft Outdoor Trampoline",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 59500,
    "cert": "ASTM / CE certified",
    "description": "12ft Outdoor Trampoline Price in Kenya Looking for the perfect outdoor trampoline for your kids in Kenya? Our 12ft outdoor trampoline offers endless fun and active play for children of all ages. Designed for safety and durability, this trampoline is perfect for kids outdoor games and entertainmen...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Structure",
        "value": "Galvanized Steel"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/02/Kids-trampoline.webp",
    "badge": "Sale"
  },
  {
    "slug": "trampoline_10ft_in_kenya",
    "name": "Trampoline 10 Ft",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 52500,
    "cert": "ASTM / CE certified",
    "description": "10ft Trampoline Price in Kenya Looking for the perfect outdoor trampoline in Kenya? Our 10ft trampoline offers endless fun for kids and enhances outdoor playtime. Designed for safety and durability, this trampoline is ideal for kids\u2019 outdoor games, encouraging active play and exercise. Whether it...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      },
      {
        "label": "Structure",
        "value": "Galvanized Steel"
      }
    ],
    "stock": 10,
    "image": "https://totochap.com/wp-content/uploads/2025/02/10ft-Outdoor-Kids-Trampoline.webp",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-1t-61",
    "name": "Polyplay Play Station PPL 1T 61",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 145000,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/61 Adventure Tower One tower with pyramid roof, one wavy slide, one spiral slide and one step ladder",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL1T61-2.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-3t-16",
    "name": "Polyplay Play Station PPL 3T 16",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 345000,
    "cert": "ASTM / CE certified",
    "description": "PPL/3T/16 Polyplay Play Station,Three tower with two leaf top roofs and one pyramid roof, three wavy slides, one tube slide, one spiral slide, UK step bridge, tube tunnel, disk ladder, step ladder, one rock climber and 1.5M monkey climber.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL3T16-4.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-3t-15",
    "name": "Polyplay Play Station PPL 3T 15",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 345000,
    "cert": "ASTM / CE certified",
    "description": "PPL/3T/15 Polyplay Play Station,Three tower with two leaf top roofs and one pyramid roof, three wavy slides, one tube slide, one spiral slide, UK step bridge, tube tunnel, disk ladder, step ladder, one rock climber and 1.5M monkey climber.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL3T15-2.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-2t-96",
    "name": "Polyplay Play Station PPL 2T 96",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 245000,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/96 is a sturdy, all-weather playstation. Features Two tower roofs with two pyramid roofs, one spiral slide, three wavy slides and one step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T96-2.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-2t-95",
    "name": "Polyplay Play Station PPL 2T 95",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 245000,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/95 is a sturdy, all-weather playstation. Features Two tower with one tiled roof and one crescent roof, one spiral slide, one wavy slide, one u-bridge of 2 meters, one 2 meter crawling tube, one disk ladder and one step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T95-3.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-2t-94",
    "name": "Polyplay Play Station PPL 2T 94",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 245000,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/94 is a sturdy, all-weather playstation. Features Two tower with one tiled roof and one crescent roof, one spiral slide, one wavy slide, u-bridge, one tube slide, one crawl tube, one U-bridge, one rock climber, one attached monkey climber and one step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T94-3.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-2t-93",
    "name": "Polyplay Play Station PPL 2T 93",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 245000,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/93 is a sturdy, all-weather playstation. Features Two tower with one tiled roof and one leaf top roof, one spiral slide, one wavy slide, u-bridge, one tube slide, one crawl tube, one U-bridge, one rock climber, one attached monkey climber and one sten ledder",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T93-3.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-2t-92",
    "name": "Polyplay Play Station PPL 2T 92",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 245000,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/92 is a sturdy, all-weather playstation. Features two tower roofs with one pyramid roof, one leaf top roof, one spiral slide, one tube slide, one wavy slide, disk ladder and one step laddder",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T92-3.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-2t-91",
    "name": "Polyplay Play Station PPL 2T 91",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 245000,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/91 is a sturdy, all-weather playstation. Features Two tower with two tiled roof, one spiral slide, two wavy slides, u-bridge, one attached twin swing, one rock climber, one step ladder and disk ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T91-2.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-2t-90",
    "name": "Polyplay Play Station PPL 2T 90",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 245000,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/90 is a sturdy, all-weather playstation. Features Two tower roofs with one tile roof, and one leaf top roof, one spiral slide, one tube slide, one wavy slide, U-bridge, one disk ladder and one step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T90-2.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-2t-89",
    "name": "Polyplay Play Station PPL 2T 89",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 245000,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/89 is a sturdy, all-weather playstation. Features Two tower roofs with one tile roof, and one king kong roof, one spiral slide, one tube slide, one wavy slide, U-bridge, one disk ladder and one step ladder",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/07/PPL2T89-3.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-1t-59",
    "name": "Polyplay Play Station PPL 1T 59",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 498024,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/59 Adventure Tower Creative and colorful tower, spiral and wavy slides, a step ladder. A perfect setup for sliding, and imaginative outdoor fun.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/02/PPL1T59-1.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-458",
    "name": "Polyplay Play Station PPL 1T 58",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 346256,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/58 Adventure Tower Creative and colorful tower, spiral and wavy slides, a step ladder. A perfect setup for sliding, and imaginative outdoor fun.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/02/PPP1T58-2.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-88",
    "name": "Polyplay Play Station PPL 2T 88",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 610112,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/88 is a sturdy, all-weather playstation. Features two tower roofs with one pyramid roof, one leaf top roof, one spiral slide, one tube slide, one wavy slide, disk ladder and one step laddder",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/02/PPL2T88-3.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-87",
    "name": "Polyplay Play Station PPL 2T 87",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 606170,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/87 is a sturdy, all-weather playstation, Features two tower leaf tops, one spiral slide , two wavy slide, disk ladder and step ladder,",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/02/PPL2T87-1.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-70",
    "name": "Polyplay Play Station PPL 2T 70",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 743142,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/70 is a two tower with tiled roof and pyramid top, one tube slide, tube tunnel one spiral slide, one wavy slide, disk ladder and step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Screenshot-2025-09-13-111610.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-71",
    "name": "Polyplay Play Station PPL 2T 71",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 1368058,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/71 is a two tower (one high and two low tower) with one tiled roof and one leaf top. One wavy slide, one spiral slide, one S-tube slide, one long coil tube slide and one small tube slide. One step bridge, one monkey climber and one step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/1-4.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-72",
    "name": "Polyplay Play Station PPL 2T 72",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 589980,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/72 is a two tower with two roofs, two wavy slides, one tunnel bridge, one abacus, one step ladder and one disk ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/2-7.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-73",
    "name": "Polyplay Play Station PPL 2T 73",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 575440,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/73 is a two tower with one tree top roof, one crescent roof, two wavy slides, one tunnel bridge, one abacus, one step ladder and one disk ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/1-3.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-74",
    "name": "Polyplay Play Station PPL 2T 74",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 413425,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/74 is a two tower with one tree top roof, one crescent roof, one wavy slide, one spiral slide, one step ladder, one disk ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/1-2.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-75",
    "name": "Polyplay Play Station PPL 2T 75",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 653185,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/75 is a two tower no roofs, one tube slide, one monkey climber, one wavy slide, U-bridge and step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/1-1.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-76",
    "name": "Polyplay Play Station PPL 2T 76",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 641804,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/76 is a two tower roofs with two tiled roofs, one spiral slide, one wavy slide, one rock climber, U-bridge and step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/1.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-77",
    "name": "Polyplay Play Station PPL 2T 77",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 730014,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/77 is a two tower with tiled roof and leaf tops, one spiral slide, one wavy slide, one U-bridge, one crawling tube, one disc ladder and step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Screenshot-2025-11-21-151334.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-86",
    "name": "Polyplay Play Station PPL 2T 86",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 734538,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/86 is a sturdy, all-weather playstation features two tower roofs with one tiled roof, one leaf top roof, one spiral slide , one tube slide,1 meter step bridge, disk ladder and one rock climber.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/2-2.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-85",
    "name": "Polyplay Play Station PPL 2T 85",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 1062497,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/85 is a two tower roofs with two tiled roofs, one spiral slide, one wavy slide, one long tube slide, one rock climber, one step ladder and one 11-step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/2-1.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-84",
    "name": "Polyplay Play Station PPL 2T 84",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 748811,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/84 features two tower roofs with one tiled roof, one leaf top roof, one spiral slide, one tube slide, step bridge, disk ladder and one step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/4.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-83",
    "name": "Polyplay Play Station PPL 2T 83",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 784828,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/83 is a two tower roofs with one pyramid roof and one crescent roof, one tube slide, one spiral slide, one wavy slide, one rock climber, one step ladder, one hanging bridge and monkey climber.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/PPL2T83-4.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-82",
    "name": "Polyplay Play Station PPL 2T 82",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 761811,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/82 is a two tower roofs with one tiled roof, one leaf top roof, one spiral slide, one tube slide, step bridge, rock climber and one step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Ppl2t82-3.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-81",
    "name": "Polyplay Play Station PPL 2T 81",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 245000,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/81 is a two tower roofs with one pyramid roof, one leaf top roof, one spiral slide, three wavy slides and one step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Polyplay-Play-Station-PPL-2T-81-2.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-2t-80",
    "name": "Polyplay Play Station PPL 2T 80",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 245000,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/80 is a two tower roofs with one pyramid roof, one leaf top roof, one spiral slide, three wavy slides and one step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Polyplay-Play-Station-PPL-2T-80-3.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-1t-79",
    "name": "Polyplay Play Station PPL 2T 79",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 758537,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/79 is a two tower roofs with one tiled roof, one leaf top roof, one spiral slide, one wavy slide, one rock climber, attached twin swing (baby swing seat and zany swing seat), tube tunnel bridge, step ladder and monkey climber.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Polyplay-Play-Station-PPL-2T-79_.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-78",
    "name": "Polyplay Play Station PPL 2T 78",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 702867,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay Play Station PPL/2T/78 is a two tower roofs with one tiled roof, one leaf top roof, one spiral slide, one wavy slide, one rock climber, attached twin swing (baby swing seat and zany swing seat) tube tunnel bridge and step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/Polyplay-Play-Station-PPL-2T-78.png",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-57",
    "name": "Polyplay Play Station PPL 1T 57",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 145000,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/1T/57 is a sturdy, all-weather playstation",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2026/01/PPL1T57-.png",
    "badge": "Sale"
  },
  {
    "slug": "polyplay-play-station-ppl-3t-12",
    "name": "Polyplay Play Station PPL 3T 12",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 477971,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station towers with two roofs, two wavy slide, one straight bridge, one tube tunnel bridge and two step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture8-1.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-69",
    "name": "Polyplay Play Station PPL 2T 69",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 854786,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay Play Station PPL/2T/69 is an exciting multi-feature playstation designed to deliver endless fun and adventure. With its unique dual-tower design featuring a kangkong roof and a tiled roof, this vibrant play structure offers thrilling slides including a tube slide, spiral slide, and w...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture4-2.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-68",
    "name": "Polyplay Play Station PPL 2T 68",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 842026,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/2T/68 A colorful setup with two towers topped with tiled roofs, connected by a curved bridge. Features include a spiral slide, wavy slide, tube slide, U-bridge, and step ladder. Designed for climbing, sliding, and imaginative outdoor play, offering endless fun for children.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture1-1.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-b-10",
    "name": "Polyplay Play Station PPL B 10",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 2486700,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/B/10 is an expansive mega play station that provides an exciting and diverse experience for children, covering a large area with a variety of towers, slides, and bridges. This mega play station features a perfect combination of climbing, sliding, and bridge elements, making it su...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture12.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-49",
    "name": "Polyplay Play Station PPL 1T 49",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 326256,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/49 Adventure Tower Creative and colorful tower, spiral and wavy slides, a step ladder. A perfect setup for sliding, and imaginative outdoor fun.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture4-1.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-47-copy",
    "name": "Polyplay Play Station PPL 1T 48",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 304993,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/48 Colorful and lively play structure featuring a tower with a hut-shaped top, and wavy slide. Designed for active fun, climbing, sliding, and imaginative outdoor play. Perfect for children to explore, enjoy, and create endless playtime adventures.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-30-104831.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-3t-11",
    "name": "Polyplay Play Station PPL 3T 11",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 957936,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station towers with two tiled roofs, one spiral slide, one s-tube slide, three wavy slide, one straight bridge, one tube tunnel bridge and two step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture8.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-3t-09",
    "name": "Polyplay Play Station PPL 3T 09",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 1695785,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/3T/09 playground, features three towers (one high and two low) with tiled roofs, kingkong roofs, and leaf tops, creating a whimsical and nature-inspired design. It includes a spiral slide for an exciting twist, a long coil tube slide for a thrilling ride, and two wavy slides for ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture6.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-67",
    "name": "Polyplay Play Station PPL 2T 67",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 581788,
    "cert": "ASTM / CE certified",
    "description": "Two towers with tilled roof and leaf tops, one spiral slide, one tube slide, step ladder and disc ladder",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture5.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-66",
    "name": "Polyplay Play Station PPL 2T 66",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 918395,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/66 playground, covering an area of 5m x 10m, features two towers with tiled roofs and leaf tops, offering a charming, nature-inspired design. It includes a wavy slide for a smooth, fun ride, a spiral slide for an exciting twist, and an S-tube slide for a thrilling, enclosed de...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-15-113125.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-65",
    "name": "Polyplay Play Station PPL 2T 65",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 871590,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay PPL/2T/65 playground, features two towers with tiled roofs and leaf tops, offering a charming, nature-inspired design. It includes a wavy slide for a smooth, fun ride, a spiral slide for an exciting twist, and an S-tube slide for a thrilling, enclosed descent. Access to the towers is...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-15-113102.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-64",
    "name": "Polyplay Play Station PPL 2T 64",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 1069500,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/2T/64 A colorful setup with two towers topped with tiled roofs, connected by a curved bridge. Features include a spiral slide, 2 wavy slides, U-bridge, and step ladder. Designed for climbing, sliding, and imaginative outdoor play, offering endless fun for children.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture3.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-63",
    "name": "Polyplay Play Station PPL 2T 63",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 854615,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/2T/63 A colorful setup with two towers topped with tiled roofs, connected by a curved bridge. Features include a spiral slide, wavy slide, disk ladder, and step ladder. Designed for climbing, sliding, and imaginative outdoor play, offering endless fun for children.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-15-112858.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-62",
    "name": "Polyplay Play Station PPL 2T 62",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 903625,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay Play Station PPL/2T/62 is an action-packed playstation featuring twin towers with tiled roofs and decorative leaf tops. Kids can enjoy three thrilling slides\u2014wavy, spiral, and tube\u2014while the U-bridge, wall climber, and monkey climber offer exciting challenges to develop strength and ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/PPL-2T-62-1.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-47",
    "name": "Polyplay Play Station PPL 1T 47",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 398195,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/47 Colorful and lively play structure featuring a tower with a hut-shaped top, spiral slide and wavy slide. Designed for active fun, climbing, sliding, and imaginative outdoor play. Perfect for children to explore, enjoy, and create endless playtime adventures.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture34.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-46",
    "name": "Polyplay Play Station PPL 1T 46",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 366050,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/46 Colorful and lively play structure featuring a tower with a hut-shaped top, and spiral slide. Designed for active fun, sliding, and imaginative outdoor play. Perfect for children to explore, enjoy, and create endless playtime adventures.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture28.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-45",
    "name": "Polyplay Play Station PPL 1T 45",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 398150,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/45 Leaf-Themed Adventure Tower Creative and colorful tower with charming leaf tops, spiral and wavy slides, a step ladder. A perfect setup for sliding, and imaginative outdoor fun.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture31.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-44",
    "name": "Polyplay Play Station PPL 1T 44",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 318665,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/44 A cheerful play structure featuring a tiled-roof tower, and a smooth wavy slide. Perfect for sliding and climbing fun in compact outdoor spaces.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture27.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-43",
    "name": "Polyplay Play Station PPL 1T 43",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 418205,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/43 Colorful and lively play structure featuring a tower with a hut-shaped top, and spiral slide. Designed for active fun, sliding, and imaginative outdoor play. Perfect for children to explore, enjoy, and create endless playtime adventures.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Picture24.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-37-copy",
    "name": "Polyplay Play Station PPL 1T 41",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 519590,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/41 Colorful and lively play structure featuring a tower with a hut-shaped top and spiral slides . Designed for active fun, sliding, and imaginative outdoor play. Perfect for children to explore, enjoy, and create endless playtime adventures.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-15-110020.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-40",
    "name": "Polyplay Play Station PPL 1T 40",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 447475,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/40 Colorful and lively play structure featuring a tower with a hut-shaped top, spiral slide, and an attached twin swing. Designed for active fun, climbing, sliding, and imaginative outdoor play. Perfect for children to explore, enjoy, and create endless playtime adven...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-15-110248.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-39",
    "name": "Polyplay Play Station PPL 1T 39",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 495125,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/39 Adventure Playground A vibrant and engaging playground structure featuring wavy and spiral slides and an attached twin swing. Includes a step ladder for easy access. Ideal for climbing, sliding, and encouraging imaginative outdoor play. Perfect for endless fun and ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/PPL-1T-39-FRONT.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-38",
    "name": "Polyplay Play Station PPL 1T 38",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 465110,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/38 Colorful and lively play structure featuring a tower with a hut-shaped top, spiral slides. Designed for active fun, sliding, and imaginative outdoor play. Perfect for children to explore, enjoy, and create endless playtime adventures.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/PPL-1T-38-BACK.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-3t-10",
    "name": "Polyplay Play Station PPL 3T 10",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 945936,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station towers with two tiled roofs, one spiral slide, one s-tube slide, three wavy slide, one straight bridge, one tube tunnel bridge and two step ladder.",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/09/Screenshot-2025-08-15-113748.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-1t-37",
    "name": "Polyplay Play Station PPL 1T 37",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 606015,
    "cert": "ASTM / CE certified",
    "description": "Polyplay Play Station PPL/1T/37 Colorful and lively play structure featuring a tower with a hut-shaped top, spiral slides, and a ladder for climbing. Designed for active fun, climbing, sliding, and imaginative outdoor play. Perfect for children to explore, enjoy, and create endless playtime adven...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/08/PPL-1T-37-FRONT.jpg",
    "badge": null
  },
  {
    "slug": "polyplay-play-station-ppl-2t-59",
    "name": "Polyplay Play Station PPL 2T 59",
    "category": "Kids Outdoor Play",
    "ageRange": "All Ages",
    "price": 860982,
    "cert": "ASTM / CE certified",
    "description": "The Polyplay Play Station PPL/2T/59 is an adventurous two-tower playstation featuring a striking kangkong roof and leafy accents. With a thrilling spiral slide, long tube slide, and wavy slide, it offers multiple ways to race down. The rock climber, step bridge, ladder, and tube tunnel encourage ...",
    "specs": [
      {
        "label": "Delivery",
        "value": "Pay on Delivery"
      },
      {
        "label": "Verification",
        "value": "Check before pay"
      }
    ],
    "stock": 10,
    "image": "https://www.polyplay.co.ke/wp-content/uploads/2025/08/Picture1.png",
    "badge": null
  }
];

export function formatPrice(price: number): string {
  return "KSh " + price.toLocaleString("en-US");
}
