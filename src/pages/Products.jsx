import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Info, Check, X, FileText, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

// Assets
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpeg';

import p1 from '../assets/Products/demo.jpeg';
import p2 from '../assets/Products/p2.jpeg';
import p3 from '../assets/Products/pnew3.jpeg';
import p4 from '../assets/Products/pnew4.jpeg';
import p5 from '../assets/Products/p5.jpg';
import p6 from '../assets/Products/p6.jpeg';
import p7 from '../assets/Products/p7.jpeg';
import p8 from '../assets/Products/p8.jpeg';
import p9 from '../assets/Products/p9.jpeg';
import p10 from '../assets/Products/p10.jpg';
import p11 from '../assets/Products/p11.jpg';
import p12 from '../assets/Products/p12.jpg';
import p13 from '../assets/Products/p13.png';
import p14 from '../assets/Products/p14.jpg';
import p15 from '../assets/Products/p15.jpg';
import p16 from '../assets/Products/p16.jpg';
import p17 from '../assets/Products/p17.jpg';
import p18 from '../assets/Products/p18.jpg';
import p19 from '../assets/Products/p19.jpeg';
import p20 from '../assets/Products/p20.jpg';

import r1 from '../assets/Products/r1.jpg';
import r2 from '../assets/Products/r2.jpg';
import r3 from '../assets/Products/r3.jpg';
import r4 from '../assets/Products/r4.jpg';
import r5 from '../assets/Products/r5.jpg';
import r6 from '../assets/Products/r6.jpg';

import b1 from '../assets/Products/b1.jpg';
import b2 from '../assets/Products/b2.jpg';
import b3 from '../assets/Products/b3.jpg';
import b4 from '../assets/Products/b4.jpg';
import b5 from '../assets/Products/b5.jpg';
import b6 from '../assets/Products/b6.jpg';
import b7 from '../assets/Products/b7.jpg';


import c1 from '../assets/Products/c1.jpg';
import c2 from '../assets/Products/c2.jpg';
import c3 from '../assets/Products/c3.jpg';
import c4 from '../assets/Products/c4.jpeg';
import c5 from '../assets/Products/c5.jpg';
import c6 from '../assets/Products/c6.jpg';

import s1 from '../assets/Products/s1.jpg';
import s2 from '../assets/Products/s2.jpg';
import s3 from '../assets/Products/s3.jpg';
import s4 from '../assets/Products/s4.jpg';


import i1 from '../assets/Products/i1.jpeg';
import i2 from '../assets/Products/i2.jpg';






export default function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Food Preparation Machines', 'Refrigeration Items', 'Banking Equipments', 'Cooking Equipments', 'Stainless Steel Fabrications', 'Industrial And Food Service'];

  const productsList = [
    {
      id: "DH-F-FREQUENCY-CHANGER-DOUGH-MIXERid",

      name: "DH-F FREQUENCY CHANGER DOUGH MIXER",
      category: "Food Preparation Machines",
      image: p1,
      tagline: "Heavy Duty Stainless Steel Meat Mincer",
      description: "High-efficiency commercial meat grinder designed for butcher shops, supermarkets, and restaurants. Powerful copper motor ensures smooth grinding of large quantities of meat with minimal heat buildup.",
      specs: [
        { label: "Production Capacity", value: "250 kg/hr" },
        { label: "Motor Power", value: "1.5 HP (1100W)" },
        { label: "Material", value: "304 Food-Grade Stainless Steel" },
        { label: "Plate Size", value: "6 mm & 8 mm plates included" },
        { label: "Voltage", value: "220V - 240V / 50Hz" },
        { label: "Safety Features", value: "Overload Protection & Safety Switch" }
      ],
      accessories: ["Stainless Steel Cutting Knives (x2)", "Grinding Plates (6mm & 8mm)", "Meat Pusher", "Sausage Stuffing Tubes"]
    },
    {
      id: "TABLE-TOP-FOOD-MIXERid",
      name: "TABLE TOP FOOD MIXER",
      category: "Food Preparation Machines",
      image: p2,
      tagline: "Multi-Function Slicing, Dicing, and Shredding Machine",
      description: "High-output vegetable preparation machine equipped with multiple disc attachments for slicing, dicing, shredding, and grating. Perfect for commercial kitchens, pizzerias, and catering services.",
      specs: [
        { label: "Production Capacity", value: "300 kg/hr" },
        { label: "Motor Power", value: "750W (High Torque)" },
        { label: "Disc Speed", value: "320 RPM" },
        { label: "Housing Material", value: "Anodized Aluminum & Stainless Steel" },
        { label: "Feed Inlets", value: "Large Kidney-Shaped & Cylindrical" },
        { label: "Safety System", value: "Magnetic Safety Interlock on Lid" }
      ],
      accessories: ["Slicing Discs (2mm & 4mm)", "Shredding Discs (3mm, 4mm & 7mm)", "Dicing Grid (10x10mm)", "Ejector Disc", "Cleaning Brush"]
    },
    {
      id: "table-top-food-mixer-id",
      name: "TABLE TOP FOOD MIXER",
      category: "Food Preparation Machines",
      image: p3,
      tagline: "20-Liter Multi-Speed Stand Mixer",
      description: "Professional planetary stand mixer designed for mixing dough, pastry, batters, and whipping creams. Features a heavy-duty gear-driven transmission and durable safety guard.",
      specs: [
        { label: "Bowl Capacity", value: "20 Liters" },
        { label: "Max Flour Capacity", value: "5 kg Dry Flour" },
        { label: "Speeds", value: "3 Speeds (105 / 180 / 408 RPM)" },
        { label: "Motor Power", value: "1100W (Gear-driven)" },
        { label: "Transmission", value: "Hardened Alloy Steel Gears" },
        { label: "Safety Features", value: "Stainless Steel Wire Guard & Bowl Lift Lock" }
      ],
      accessories: ["20L Stainless Steel Bowl", "Stainless Steel Wire Whip", "Flat Beater", "Spiral Dough Hook"]
    },
    {
      id: "bh-food-mixer-classic",
      name: "BH FOOD MIXER CLASSIC SERIES ",
      category: "Food Preparation Machines",
      image: p4,
      tagline: "12-Inch Professional Gravity-Feed Meat Slicer",
      description: "Precision-engineered commercial deli slicer featuring a premium chrome-plated carbon steel blade and integrated sharpener. Designed for slicing cured meats, cheeses, and vegetables with consistent thickness.",
      specs: [
        { label: "Blade Diameter", value: "300 mm (12 inches)" },
        { label: "Slice Thickness", value: "0 - 15 mm (Adjustable)" },
        { label: "Motor Power", value: "250W (Heavy Duty)" },
        { label: "Blade Material", value: "Hardened Chrome-Plated Carbon Steel" },
        { label: "Max Slice Width", value: "220 mm" },
        { label: "Sharpener Type", value: "Built-in Dual Stone Sharpener" }
      ],
      accessories: ["Removable Blade Sharpener", "Blade Removal Tool", "Lubrication Oil", "Sanitation Cover"]
    },
    {
      id: "2-split-open-fryer-ofg321-322-323",
      name: "2 SPLIT OPEN FRYER-OFG321-322-323",
      category: "Food Preparation Machines",
      image: p5,
      tagline: "High-Performance Variable Speed Stick Blender",
      description: "Heavy-duty immersion stick blender designed for blending soups, purees, sauces, and batters directly in large stock pots. Features an ergonomic handle and variable speed control.",
      specs: [
        { label: "Shaft Length", value: "500 mm (Detachable)" },
        { label: "Processing Capacity", value: "Up to 100 Liters" },
        { label: "Speed Range", value: "4,000 - 16,000 RPM (Variable)" },
        { label: "Motor Power", value: "500W (Heavy Duty)" },
        { label: "Blade & Shaft Material", value: "304 Stainless Steel" },
        { label: "Weight", value: "4.5 kg" }
      ],
      accessories: ["500mm Stainless Steel Shaft", "Wall Mount Bracket", "Durable Blade Guard Tool"]
    },
    {
      id: "BT-MIXER",
      name: "BT MIXER",
      category: "Food Preparation Machines",
      image: p6,
      tagline: "Double-Seal Commercial Chamber Sealer",
      description: "High-vacuum chamber sealer designed to extend the shelf life of food products, prevent freezer burn, and prepare items for sous vide cooking. Ideal for restaurants, catering, and food laboratories.",
      specs: [
        { label: "Chamber Dimensions", value: "400 x 400 x 120 mm" },
        { label: "Seal Bar Length", value: "400 mm (Double Sealing)" },
        { label: "Vacuum Pump Capacity", value: "20 m³/hr" },
        { label: "Cycle Time", value: "15 - 30 seconds" },
        { label: "Material", value: "Full Stainless Steel Cabinet & Acrylic Lid" },
        { label: "Voltage", value: "220V - 240V / 50Hz" }
      ],
      accessories: ["High-performance Vacuum Pump Oil", "Spare Heating Elements", "Teflon Tape", "Chamber Filler Plates"]
    },
    {
      id: "BH-FOOT-MIXER",
      name: "BH FOOD MIXER",
      category: "Food Preparation Machines",
      image: p7,
      tagline: "Digital Control Glasswasher & Dishwasher Station",
      description: "Heavy-duty undercounter commercial dishwasher designed for rapid cleanup in bars, cafes, and small restaurants. Stainless steel double-skin body with quick wash cycles.",
      specs: [
        { label: "Rack Size", value: "500 x 500 mm" },
        { label: "Washing Capacity", value: "Up to 30 Racks/hr" },
        { label: "Cycle Times", value: "90 / 120 / 180 seconds" },
        { label: "Material", value: "AISI 304 Stainless Steel" },
        { label: "Wash Tank Capacity", value: "25 Liters" },
        { label: "Power Load", value: "3.6 kW (Single/Triple Phase)" }
      ],
      accessories: ["Dish Rack", "Glass Rack", "Cutlery Holder", "Inlet & Drain Hoses"]
    },
    {
      id: "J-FOOD-MIXER",
      name: "J FOOD MIXER",
      category: "Food Preparation Machines",
      image: p8,
      tagline: "Countertop Stainless Steel Meat Grinder",
      description: "Compact yet powerful countertop commercial meat mincer. Precision-engineered gears and high-torque motor deliver clean cuts without crushing the meat.",
      specs: [
        { label: "Production Capacity", value: "150 kg/hr" },
        { label: "Motor Power", value: "850W" },
        { label: "Worm Speed", value: "170 RPM" },
        { label: "Feeding Throat", value: "Diameter 50 mm" },
        { label: "Material", value: "Food-Grade Polished Stainless Steel" },
        { label: "Dimensions", value: "250 x 410 x 420 mm" }
      ],
      accessories: ["Cutting Knives (x2)", "Grinding Plates (4.5mm & 8mm)", "Removable Feed Tray", "Meat Pusher"]
    },
    {
      id: "FREQUENCY-CHANGER-FOOD-MIXER",
      name: "FREQUENCY CHANGER FOOD MIXER",
      category: "Food Preparation Machines",
      image: p9,
      tagline: "Compact Professional Chamber Sealer",
      description: "Premium countertop chamber vacuum sealer featuring a clear acrylic dome lid for viewing cycles. Easy-to-use digital controls for vacuum pressure and seal times.",
      specs: [
        { label: "Chamber Dimensions", value: "300 x 350 x 90 mm" },
        { label: "Seal Bar Length", value: "300 mm" },
        { label: "Vacuum Pump Capacity", value: "10 m³/hr" },
        { label: "Cycle Time", value: "20 - 35 seconds" },
        { label: "Voltage", value: "220V / 50Hz" }
      ],
      accessories: ["Vacuum Pump Oil", "Heating Wire Replacement", "Teflon Tape Insert", "Measuring Beaker"]
    },
    {
      id: "KABAB-SLICER-TT-EK3(KS100E)",
      name: "KABAB SLICER TT-EK3(KS100E)",
      category: "Food Preparation Machines",
      image: p10,
      tagline: "40-Liter Heavy Duty Pedestal Mixer",
      description: "Massive commercial planetary mixer designed for large bakeries and food manufacturing units. High-strength alloy gears and electrical bowl lifting mechanism.",
      specs: [
        { label: "Bowl Capacity", value: "40 Liters" },
        { label: "Max Dough Capacity", value: "12 kg Dry Flour" },
        { label: "Bowl Lift", value: "Automatic Electric Lift" },
        { label: "Motor Power", value: "2.2 kW (Heavy Duty)" },
        { label: "Safety System", value: "Dual Safety Switches & Full Guard" }
      ],
      accessories: ["40L Stainless Steel Bowl", "Heavy Wire Whip", "Alloy Flat Beater", "Spiral Dough Hook", "Bowl Trolley"]
    },
    {
      id: "CHOCOLATE-MELTING-POT-MANUAL ",
      name: "CHOCOLATE MELTING POT -MANUAL CONTROL CHOCOLATE MELTER FOR HOME OR BAKERY USE",
      category: "Food Preparation Machines",
      image: p11,
      tagline: "Continuous Feed Vegetable Processing Machine",
      description: "High-speed vegetable cutter designed for continuous operation. Featuring dual feed inlets and a wide selection of quick-change stainless steel cutting blades.",
      specs: [
        { label: "Production Capacity", value: "500 kg/hr" },
        { label: "Motor Power", value: "950W" },
        { label: "Speed", value: "340 RPM" },
        { label: "Inlet Types", value: "Lever Hopper & Cylinder Hopper" },
        { label: "Housing Material", value: "Brushed Aluminum Alloy" }
      ],
      accessories: ["Slicing Discs (3x)", "Gratings Discs (2x)", "Julienne Disc", "Food Pusher", "Blade Storage Rack"]
    },
    {
      id: "DOUGH-DEVIDER-ROUNDER-(SEMI-AUTOMATIC-SERIES",
      name: "DOUGH DEVIDER  ROUNDER (SEMI AUTOMATIC SERIES",
      category: "Food Preparation Machines",
      image: p12,
      tagline: "10-Tray Commercial Dehydrator Station",
      description: "Stainless steel food dehydrator with horizontal airflow system. Perfect for drying fruits, vegetables, jerky, herbs, and preparing healthy food snacks.",
      specs: [
        { label: "Number of Trays", value: "10 Stainless Steel Trays" },
        { label: "Total Drying Area", value: "1.5 m²" },
        { label: "Temperature Range", value: "30°C - 90°C (Digital Control)" },
        { label: "Timer Range", value: "Up to 24 hours" },
        { label: "Airflow Direction", value: "Horizontal (Rear Fan)" }
      ],
      accessories: ["10 Mesh Wire Trays", "Drip Tray", "Silicon Mesh Sheets (x2)", "User Recipe Book"]
    },
    {
      id: "POTATO-CUTTER",
      name: "POTATO CUTTER (Hand-Operated Finger chips Machine",
      category: "Food Preparation Machines",
      image: p13,
      tagline: "Angled Commercial Deli Meat Slicer",
      description: "Premium commercial deli meat slicer featuring an angled carriage for easier product slicing. Anodized aluminum construction with built-in blade sharpener.",
      specs: [
        { label: "Blade Diameter", value: "320 mm (12.6 inches)" },
        { label: "Carriage Angle", value: "45-Degree Gravity Feed" },
        { label: "Slicing Thickness", value: "0.2 - 16 mm" },
        { label: "Blade Drive", value: "Belt-Driven Heavy Duty Motor" },
        { label: "Motor Power", value: "300W" }
      ],
      accessories: ["Sharpener Assembly", "Carriage Hand Guard", "Blade Cleaner Tool", "Special Lubrication Grease"]
    },
    {
      id: "CELFROST-(High-Performance",
      name: "CELFROST- (High Performance Commercial) BLENDER",
      category: "Food Preparation Machines",
      image: p14,
      tagline: "High-Capacity Tabletop Meat Mincer",
      description: "Heavy-duty commercial tabletop meat mincer. Extra-large feeding tray and robust transmission system designed to grind chilled and tempered meats without clogging.",
      specs: [
        { label: "Production Capacity", value: "300 kg/hr" },
        { label: "Motor Power", value: "1500W (2 HP)" },
        { label: "Material", value: "Polished Stainless Steel (SUS304)" },
        { label: "Plate Diameter", value: "82 mm" },
        { label: "Reverse Gear", value: "Equipped" }
      ],
      accessories: ["Durable Star Knives (x2)", "Fine Plate (4mm)", "Coarse Plate (10mm)", "Removable Food Pan", "Pusher Tool"]
    },
    {
      id: "GARLIC-PEELING",
      name: "GARLIC PEELING MACHINE",
      category: "Food Preparation Machines",
      image: p15,
      tagline: "Commercial Meat, Fish, and Bone Cutting Saw",
      description: "Professional vertical bandsaw designed for butcher shops, supermarkets, and cold storage facilities. Engineered to cut frozen meat, poultry, fish, and bones with ease.",
      specs: [
        { label: "Blade Length", value: "1650 mm" },
        { label: "Cutting Table Dimensions", value: "440 x 460 mm" },
        { label: "Max Cutting Height", value: "220 mm" },
        { label: "Blade Speed", value: "15 m/s" },
        { label: "Motor Power", value: "750W (1 HP)" }
      ],
      accessories: ["Premium Saw Blades (x3)", "Thickness Sizing Guide", "Safety Pusher Plate", "Waste Drawer"]
    },
    {
      id: "PRESSURE-FRYER",
      name: "PRESSURE FRYER GAS –(BROAST MACHINE) PFG-600",
      category: "Food Preparation Machines",
      image: p16,
      tagline: "Commercial Ice Maker with Storage Bin",
      description: "High-production modular ice machine with large integrated storage bin. Produces crystal-clear square ice cubes for restaurants, hotels, and bars.",
      specs: [
        { label: "Daily Production", value: "150 kg / 24 hours" },
        { label: "Bin Capacity", value: "120 kg Storage" },
        { label: "Ice Shape", value: "Square Cube (22 x 22 x 22 mm)" },
        { label: "Cooling System", value: "Air Cooled" },
        { label: "Refrigerant", value: "R290 Eco-Friendly" }
      ],
      accessories: ["Ice Scoop", "Water Inlet Filter System", "Drain Pipe Assembly", "Adjustable Legs"]
    },
    {
      id: "PRESSURE-FRYER-ELECTRIC-800",
      name: "PRESSURE FRYER ELECTRIC-(BOAST MACHINE) PFE-800",
      category: "Food Preparation Machines",
      image: p17,
      tagline: "Commercial Blender with Sound Enclosure",
      description: "High-speed professional blender featuring a thick acrylic sound shield that dampens motor noise. Perfect for front-of-house bars, cafes, and smoothie shops.",
      specs: [
        { label: "Container Capacity", value: "2.0 Liters (BPA-Free)" },
        { label: "Motor Power", value: "1800W" },
        { label: "Max Speed", value: "28,000 RPM (Variable)" },
        { label: "Blade Type", value: "6-Way Hardened Stainless Steel" },
        { label: "Controls", value: "Digital Touchscreen & Preset Cycles" }
      ],
      accessories: ["2L Blender Pitcher", "Soundproof Shield Cover", "Tamper Tool", "Replacement Blade Set"]
    },
    {
      id: "PRESSURE-FRYER-ELECTRIC-600",
      name: "PRESSURE FRYER ELECTRIC  (BROAST MACHINE) PFE-600",
      category: "Food Preparation Machines",
      image: p18,
      tagline: "Professional On-Demand Coffee Grinder",
      description: "Precision commercial espresso grinder featuring flat burrs and on-demand dosing. Digital touchscreen control panel to program single, double, and manual shot times.",
      specs: [
        { label: "Burr Diameter", value: "64 mm Flat (Hardened Steel)" },
        { label: "Hopper Capacity", value: "1.2 kg" },
        { label: "Grinding Speed", value: "1400 RPM" },
        { label: "Dispensing Mode", value: "On-Demand Electronic Dosing" },
        { label: "Dose Precision", value: "±0.1 grams" }
      ],
      accessories: ["Drip Tray", "Cleaning Brush", "Hopper Cover", "Portafilter Fork Assembly"]
    },
    {
      id: "ELECTRIC-POPCORN-MACHINE",
      name: "ELECTRIC POPCORN MACHINE",
      category: "Food Preparation Machines",
      image: p19,
      tagline: "Heavy-Duty Dual-Group Commercial Espresso Station",
      description: "Stunning 2-group commercial espresso machine built with high-quality copper boilers and stainless steel panels. Perfect for busy cafes and high-volume coffee service.",
      specs: [
        { label: "Group Heads", value: "2 Groups (E61 Style)" },
        { label: "Boiler Capacity", value: "11 Liters (Copper with Heat Exchanger)" },
        { label: "Steam Wands", value: "2 Multi-Directional Stainless Steel Wands" },
        { label: "Power Load", value: "3.7 kW / 230V" },
        { label: "Control System", value: "Volumetric Touchpads (Programmable)" }
      ],
      accessories: ["Double Portafilter (x2)", "Single Portafilter", "Blind Filter Basket", "Water Hose & Drain Hose"]
    },
    {
      id: "COMMERCIAL-DEEP-FRYER-GAS-AUTOMATIC",
      name: "COMMERCIAL DEEP FRYER -GAS AUTOMATIC",
      category: "Food Preparation Machines",
      image: p20,
      tagline: "Commercial Countertop Soft Ice Cream Dispenser",
      description: "Countertop commercial soft serve ice cream maker. Features three dispensing levers (two flavors + one twist mix), intelligent digital temperature controller, and pre-cooling system.",
      specs: [
        { label: "Production Capacity", value: "28 - 32 Liters/hr" },
        { label: "Hoppers & Cylinders", value: "2 x 6.5L Hoppers | 2 x 1.6L Cylinders" },
        { label: "Flavors", value: "2 Flavors + 1 Twist Mix" },
        { label: "Pre-Cooling System", value: "Keeps mix fresh in hoppers overnight" },
        { label: "Refrigerant", value: "R404A / R134a Dual Compressors" }
      ],
      accessories: ["Dispensing Gaskets Kit", "Lubricant Tube", "Cleaning Brush Set", "Drip Tray Extension"]
    },





    {
      id: "SNOW-ICE-MACHINE",
      name: "SNOW ICE MACHINE",
      category: "Refrigeration Items",
      image: r1,
      tagline: "Heavy Duty Stainless Steel Meat Mincer",
      description: "High-efficiency commercial meat grinder designed for butcher shops, supermarkets, and restaurants. Powerful copper motor ensures smooth grinding of large quantities of meat with minimal heat buildup.",
      specs: [
        { label: "Production Capacity", value: "250 kg/hr" },
        { label: "Motor Power", value: "1.5 HP (1100W)" },
        { label: "Material", value: "304 Food-Grade Stainless Steel" },
        { label: "Plate Size", value: "6 mm & 8 mm plates included" },
        { label: "Voltage", value: "220V - 240V / 50Hz" },
        { label: "Safety Features", value: "Overload Protection & Safety Switch" }
      ],
      accessories: ["Stainless Steel Cutting Knives (x2)", "Grinding Plates (6mm & 8mm)", "Meat Pusher", "Sausage Stuffing Tubes"]
    },
    {
      id: "HEAVY-DUTY-ICE-CRUSHER-MACHINE",
      name: "HEAVY DUTY ICE CRUSHER MACHINE",
      category: "Refrigeration Items",
      image: r2,
      tagline: "Multi-Function Slicing, Dicing, and Shredding Machine",
      description: "High-output vegetable preparation machine equipped with multiple disc attachments for slicing, dicing, shredding, and grating. Perfect for commercial kitchens, pizzerias, and catering services.",
      specs: [
        { label: "Production Capacity", value: "300 kg/hr" },
        { label: "Motor Power", value: "750W (High Torque)" },
        { label: "Disc Speed", value: "320 RPM" },
        { label: "Housing Material", value: "Anodized Aluminum & Stainless Steel" },
        { label: "Feed Inlets", value: "Large Kidney-Shaped & Cylindrical" },
        { label: "Safety System", value: "Magnetic Safety Interlock on Lid" }
      ],
      accessories: ["Slicing Discs (2mm & 4mm)", "Shredding Discs (3mm, 4mm & 7mm)", "Dicing Grid (10x10mm)", "Ejector Disc", "Cleaning Brush"]
    },
    {
      id: "BLUE-STAR-VISI-COOLERS",
      name: "BLUE STAR VISI COOLERS",
      category: "Refrigeration Items",
      image: r3,
      tagline: "20-Liter Multi-Speed Stand Mixer",
      description: "Professional planetary stand mixer designed for mixing dough, pastry, batters, and whipping creams. Features a heavy-duty gear-driven transmission and durable safety guard.",
      specs: [
        { label: "Bowl Capacity", value: "20 Liters" },
        { label: "Max Flour Capacity", value: "5 kg Dry Flour" },
        { label: "Speeds", value: "3 Speeds (105 / 180 / 408 RPM)" },
        { label: "Motor Power", value: "1100W (Gear-driven)" },
        { label: "Transmission", value: "Hardened Alloy Steel Gears" },
        { label: "Safety Features", value: "Stainless Steel Wire Guard & Bowl Lift Lock" }
      ],
      accessories: ["20L Stainless Steel Bowl", "Stainless Steel Wire Whip", "Flat Beater", "Spiral Dough Hook"]
    },
    {
      id: "CE-COMMERCIAL-SOFT-SERVE-ICE-CREAM-MACHINE-TT-I94D1",
      name: "CE COMMERCIAL SOFT SERVE ICE CREAM MACHINE TT-I94D1(28-32Kg Per Hour )",
      category: "Refrigeration Items",
      image: r4,
      tagline: "12-Inch Professional Gravity-Feed Meat Slicer",
      description: "Precision-engineered commercial deli slicer featuring a premium chrome-plated carbon steel blade and integrated sharpener. Designed for slicing cured meats, cheeses, and vegetables with consistent thickness.",
      specs: [
        { label: "Blade Diameter", value: "300 mm (12 inches)" },
        { label: "Slice Thickness", value: "0 - 15 mm (Adjustable)" },
        { label: "Motor Power", value: "250W (Heavy Duty)" },
        { label: "Blade Material", value: "Hardened Chrome-Plated Carbon Steel" },
        { label: "Max Slice Width", value: "220 mm" },
        { label: "Sharpener Type", value: "Built-in Dual Stone Sharpener" }
      ],
      accessories: ["Removable Blade Sharpener", "Blade Removal Tool", "Lubrication Oil", "Sanitation Cover"]
    },
    {
      id: "TWO-COMPRESSORS-CE-COMMERCIAL-ICE-CREAM-MACHINE-TT-I97C1",
      name: "TWO COMPRESSORS -CE COMMERCIAL ICE CREAM MACHINE TT-I97C1-(24-28KG PER HOUR )",
      category: "Refrigeration Items",
      image: r5,
      tagline: "High-Performance Variable Speed Stick Blender",
      description: "Heavy-duty immersion stick blender designed for blending soups, purees, sauces, and batters directly in large stock pots. Features an ergonomic handle and variable speed control.",
      specs: [
        { label: "Shaft Length", value: "500 mm (Detachable)" },
        { label: "Processing Capacity", value: "Up to 100 Liters" },
        { label: "Speed Range", value: "4,000 - 16,000 RPM (Variable)" },
        { label: "Motor Power", value: "500W (Heavy Duty)" },
        { label: "Blade & Shaft Material", value: "304 Stainless Steel" },
        { label: "Weight", value: "4.5 kg" }
      ],
      accessories: ["500mm Stainless Steel Shaft", "Wall Mount Bracket", "Durable Blade Guard Tool"]
    },
    {
      id: "CE-COMMERCIAL-SOFT-SERVE-ICE-CREAM-MACHINE-TT-I91A",
      name: "CE COMMERCIAL SOFT SERVE ICE CREAM MACHINE TT-I91A-(12-16 KG)",
      category: "Refrigeration Items",
      image: r6,
      tagline: "Double-Seal Commercial Chamber Sealer",
      description: "High-vacuum chamber sealer designed to extend the shelf life of food products, prevent freezer burn, and prepare items for sous vide cooking. Ideal for restaurants, catering, and food laboratories.",
      specs: [
        { label: "Chamber Dimensions", value: "400 x 400 x 120 mm" },
        { label: "Seal Bar Length", value: "400 mm (Double Sealing)" },
        { label: "Vacuum Pump Capacity", value: "20 m³/hr" },
        { label: "Cycle Time", value: "15 - 30 seconds" },
        { label: "Material", value: "Full Stainless Steel Cabinet & Acrylic Lid" },
        { label: "Voltage", value: "220V - 240V / 50Hz" }
      ],
      accessories: ["High-performance Vacuum Pump Oil", "Spare Heating Elements", "Teflon Tape", "Chamber Filler Plates"]
    },


    ,
    {
      id: "2Deck4Trays8TraysProoferGasDeckOven",
      name: "2 DECK 4 TRAYS + 8 TRAYS PROOFER GAS DECK OVEN",
      category: "Banking Equipments",
      image: b1,
      tagline: "Multi-Function Slicing, Dicing, and Shredding Machine",
      description: "High-output vegetable preparation machine equipped with multiple disc attachments for slicing, dicing, shredding, and grating. Perfect for commercial kitchens, pizzerias, and catering services.",
      specs: [
        { label: "Production Capacity", value: "300 kg/hr" },
        { label: "Motor Power", value: "750W (High Torque)" },
        { label: "Disc Speed", value: "320 RPM" },
        { label: "Housing Material", value: "Anodized Aluminum & Stainless Steel" },
        { label: "Feed Inlets", value: "Large Kidney-Shaped & Cylindrical" },
        { label: "Safety System", value: "Magnetic Safety Interlock on Lid" }
      ],
      accessories: ["Slicing Discs (2mm & 4mm)", "Shredding Discs (3mm, 4mm & 7mm)", "Dicing Grid (10x10mm)", "Ejector Disc", "Cleaning Brush"]
    },
    {
      id: "2Deck4TraysCommercialGasDeckOven",
      name: "2 DECK 4 TRAYS COMMERCIAL GAS DECK OVEN",
      category: "Banking Equipments",
      image: b2,
      tagline: "20-Liter Multi-Speed Stand Mixer",
      description: "Professional planetary stand mixer designed for mixing dough, pastry, batters, and whipping creams. Features a heavy-duty gear-driven transmission and durable safety guard.",
      specs: [
        { label: "Bowl Capacity", value: "20 Liters" },
        { label: "Max Flour Capacity", value: "5 kg Dry Flour" },
        { label: "Speeds", value: "3 Speeds (105 / 180 / 408 RPM)" },
        { label: "Motor Power", value: "1100W (Gear-driven)" },
        { label: "Transmission", value: "Hardened Alloy Steel Gears" },
        { label: "Safety Features", value: "Stainless Steel Wire Guard & Bowl Lift Lock" }
      ],
      accessories: ["20L Stainless Steel Bowl", "Stainless Steel Wire Whip", "Flat Beater", "Spiral Dough Hook"]
    },
    {
      id: "1DECKS-2-TRAYS-GAS-OVEN",
      name: "1 DECKS 2 TRAYS GAS OVEN",
      category: "Banking Equipments",
      image: b3,
      tagline: "12-Inch Professional Gravity-Feed Meat Slicer",
      description: "Precision-engineered commercial deli slicer featuring a premium chrome-plated carbon steel blade and integrated sharpener. Designed for slicing cured meats, cheeses, and vegetables with consistent thickness.",
      specs: [
        { label: "Blade Diameter", value: "300 mm (12 inches)" },
        { label: "Slice Thickness", value: "0 - 15 mm (Adjustable)" },
        { label: "Motor Power", value: "250W (Heavy Duty)" },
        { label: "Blade Material", value: "Hardened Chrome-Plated Carbon Steel" },
        { label: "Max Slice Width", value: "220 mm" },
        { label: "Sharpener Type", value: "Built-in Dual Stone Sharpener" }
      ],
      accessories: ["Removable Blade Sharpener", "Blade Removal Tool", "Lubrication Oil", "Sanitation Cover"]
    },
    {
      id: "1DECKS-1-TRAYS-GAS-OVEN",
      name: "1 DECKS 1 TRAYS GAS OVEN",
      category: "Banking Equipments",
      image: b4,
      tagline: "High-Performance Variable Speed Stick Blender",
      description: "Heavy-duty immersion stick blender designed for blending soups, purees, sauces, and batters directly in large stock pots. Features an ergonomic handle and variable speed control.",
      specs: [
        { label: "Shaft Length", value: "500 mm (Detachable)" },
        { label: "Processing Capacity", value: "Up to 100 Liters" },
        { label: "Speed Range", value: "4,000 - 16,000 RPM (Variable)" },
        { label: "Motor Power", value: "500W (Heavy Duty)" },
        { label: "Blade & Shaft Material", value: "304 Stainless Steel" },
        { label: "Weight", value: "4.5 kg" }
      ],
      accessories: ["500mm Stainless Steel Shaft", "Wall Mount Bracket", "Durable Blade Guard Tool"]
    },
    {
      id: "3DECKS-6-TRAYS-GAS-OVEN",
      name: "3 DECKS 6 TRAYS GAS OVEN",
      category: "Banking Equipments",
      image: b5,
      tagline: "Double-Seal Commercial Chamber Sealer",
      description: "High-vacuum chamber sealer designed to extend the shelf life of food products, prevent freezer burn, and prepare items for sous vide cooking. Ideal for restaurants, catering, and food laboratories.",
      specs: [
        { label: "Chamber Dimensions", value: "400 x 400 x 120 mm" },
        { label: "Seal Bar Length", value: "400 mm (Double Sealing)" },
        { label: "Vacuum Pump Capacity", value: "20 m³/hr" },
        { label: "Cycle Time", value: "15 - 30 seconds" },
        { label: "Material", value: "Full Stainless Steel Cabinet & Acrylic Lid" },
        { label: "Voltage", value: "220V - 240V / 50Hz" }
      ],
      accessories: ["High-performance Vacuum Pump Oil", "Spare Heating Elements", "Teflon Tape", "Chamber Filler Plates"]
    },
    {
      id: "3DECKS-9-TRAYS-GAS-OVEN",
      name: "3 DECKS 9 TRAYS GAS OVEN",
      category: "Banking Equipments",
      image: b6,
      tagline: "Digital Control Glasswasher & Dishwasher Station",
      description: "Heavy-duty undercounter commercial dishwasher designed for rapid cleanup in bars, cafes, and small restaurants. Stainless steel double-skin body with quick wash cycles.",
      specs: [
        { label: "Rack Size", value: "500 x 500 mm" },
        { label: "Washing Capacity", value: "Up to 30 Racks/hr" },
        { label: "Cycle Times", value: "90 / 120 / 180 seconds" },
        { label: "Material", value: "AISI 304 Stainless Steel" },
        { label: "Wash Tank Capacity", value: "25 Liters" },
        { label: "Power Load", value: "3.6 kW (Single/Triple Phase)" }
      ],
      accessories: ["Dish Rack", "Glass Rack", "Cutlery Holder", "Inlet & Drain Hoses"]
    },
    {
      id: "3DECKS-9-TRAYS-GAS-OVEN-2",
      name: "3 DECKSdd 9 TRAYS GAS OVEN",
      category: "Banking Equipments",
      image: b7,
      tagline: "Digital Control Glasswasher & Dishwasher Station",
      description: "Heavy-duty undercounter commercial dishwasher designed for rapid cleanup in bars, cafes, and small restaurants. Stainless steel double-skin body with quick wash cycles.",
      specs: [
        { label: "Rack Size", value: "500 x 500 mm" },
        { label: "Washing Capacity", value: "Up to 30 Racks/hr" },
        { label: "Cycle Times", value: "90 / 120 / 180 seconds" },
        { label: "Material", value: "AISI 304 Stainless Steel" },
        { label: "Wash Tank Capacity", value: "25 Liters" },
        { label: "Power Load", value: "3.6 kW (Single/Triple Phase)" }
      ],
      accessories: ["Dish Rack", "Glass Rack", "Cutlery Holder", "Inlet & Drain Hoses"]
    },








    {
      id: "Dacota4BurnerCookingRangeStandardOven",
      name: "DACOTA 4 BURNER 24” COOKING RANGE WITH STANDARD OVEN (GAS COMBINATION OVEN)",
      category: "Cooking Equipments",
      image: c1,
      tagline: "Heavy Duty Stainless Steel Meat Mincer",
      description: "High-efficiency commercial meat grinder designed for butcher shops, supermarkets, and restaurants. Powerful copper motor ensures smooth grinding of large quantities of meat with minimal heat buildup.",
      specs: [
        { label: "Production Capacity", value: "250 kg/hr" },
        { label: "Motor Power", value: "1.5 HP (1100W)" },
        { label: "Material", value: "304 Food-Grade Stainless Steel" },
        { label: "Plate Size", value: "6 mm & 8 mm plates included" },
        { label: "Voltage", value: "220V - 240V / 50Hz" },
        { label: "Safety Features", value: "Overload Protection & Safety Switch" }
      ],
      accessories: ["Stainless Steel Cutting Knives (x2)", "Grinding Plates (6mm & 8mm)", "Meat Pusher", "Sausage Stuffing Tubes"]
    },
    {
      id: "GRILLED MACHINE- SHAWAYA",
      name: "GRILLED MACHINE- SHAWAYA",
      category: "Cooking Equipments",
      image: c2,
      tagline: "Multi-Function Slicing, Dicing, and Shredding Machine",
      description: "High-output vegetable preparation machine equipped with multiple disc attachments for slicing, dicing, shredding, and grating. Perfect for commercial kitchens, pizzerias, and catering services.",
      specs: [
        { label: "Production Capacity", value: "300 kg/hr" },
        { label: "Motor Power", value: "750W (High Torque)" },
        { label: "Disc Speed", value: "320 RPM" },
        { label: "Housing Material", value: "Anodized Aluminum & Stainless Steel" },
        { label: "Feed Inlets", value: "Large Kidney-Shaped & Cylindrical" },
        { label: "Safety System", value: "Magnetic Safety Interlock on Lid" }
      ],
      accessories: ["Slicing Discs (2mm & 4mm)", "Shredding Discs (3mm, 4mm & 7mm)", "Dicing Grid (10x10mm)", "Ejector Disc", "Cleaning Brush"]
    },
    {
      id: "GRILLED-MACHINE-SHAWAYA",
      name: "GRILLED MACHINE- SHAWAYA",
      category: "Cooking Equipments",
      image: c3,
      tagline: "20-Liter Multi-Speed Stand Mixer",
      description: "Professional planetary stand mixer designed for mixing dough, pastry, batters, and whipping creams. Features a heavy-duty gear-driven transmission and durable safety guard.",
      specs: [
        { label: "Bowl Capacity", value: "20 Liters" },
        { label: "Max Flour Capacity", value: "5 kg Dry Flour" },
        { label: "Speeds", value: "3 Speeds (105 / 180 / 408 RPM)" },
        { label: "Motor Power", value: "1100W (Gear-driven)" },
        { label: "Transmission", value: "Hardened Alloy Steel Gears" },
        { label: "Safety Features", value: "Stainless Steel Wire Guard & Bowl Lift Lock" }
      ],
      accessories: ["20L Stainless Steel Bowl", "Stainless Steel Wire Whip", "Flat Beater", "Spiral Dough Hook"]
    },
    {
      id: "HAMBURGER-PATTY-PRESS-MACHINE",
      name: "HAMBURGER PATTY PRESS MACHINE",
      category: "Cooking Equipments",
      image: c4,
      tagline: "12-Inch Professional Gravity-Feed Meat Slicer",
      description: "Precision-engineered commercial deli slicer featuring a premium chrome-plated carbon steel blade and integrated sharpener. Designed for slicing cured meats, cheeses, and vegetables with consistent thickness.",
      specs: [
        { label: "Blade Diameter", value: "300 mm (12 inches)" },
        { label: "Slice Thickness", value: "0 - 15 mm (Adjustable)" },
        { label: "Motor Power", value: "250W (Heavy Duty)" },
        { label: "Blade Material", value: "Hardened Chrome-Plated Carbon Steel" },
        { label: "Max Slice Width", value: "220 mm" },
        { label: "Sharpener Type", value: "Built-in Dual Stone Sharpener" }
      ],
      accessories: ["Removable Blade Sharpener", "Blade Removal Tool", "Lubrication Oil", "Sanitation Cover"]
    },
    {
      id: "COTTON-CANDY-MACHINE",
      name: "COTTON CANDY MACHINE",
      category: "Cooking Equipments",
      image: c5,
      tagline: "High-Performance Variable Speed Stick Blender",
      description: "Heavy-duty immersion stick blender designed for blending soups, purees, sauces, and batters directly in large stock pots. Features an ergonomic handle and variable speed control.",
      specs: [
        { label: "Shaft Length", value: "500 mm (Detachable)" },
        { label: "Processing Capacity", value: "Up to 100 Liters" },
        { label: "Speed Range", value: "4,000 - 16,000 RPM (Variable)" },
        { label: "Motor Power", value: "500W (Heavy Duty)" },
        { label: "Blade & Shaft Material", value: "304 Stainless Steel" },
        { label: "Weight", value: "4.5 kg" }
      ],
      accessories: ["500mm Stainless Steel Shaft", "Wall Mount Bracket", "Durable Blade Guard Tool"]
    },
    {
      id: "A130",
      name: "A130",
      category: "Cooking Equipments",
      image: c6,
      tagline: "Double-Seal Commercial Chamber Sealer",
      description: "High-vacuum chamber sealer designed to extend the shelf life of food products, prevent freezer burn, and prepare items for sous vide cooking. Ideal for restaurants, catering, and food laboratories.",
      specs: [
        { label: "Chamber Dimensions", value: "400 x 400 x 120 mm" },
        { label: "Seal Bar Length", value: "400 mm (Double Sealing)" },
        { label: "Vacuum Pump Capacity", value: "20 m³/hr" },
        { label: "Cycle Time", value: "15 - 30 seconds" },
        { label: "Material", value: "Full Stainless Steel Cabinet & Acrylic Lid" },
        { label: "Voltage", value: "220V - 240V / 50Hz" }
      ],
      accessories: ["High-performance Vacuum Pump Oil", "Spare Heating Elements", "Teflon Tape", "Chamber Filler Plates"]
    },
    //   {
    //   id: "DACOTTA-ELECTRIC-CONVECTION-OVEN-(4-Trays-Commercial)",
    //   name: "DACOTTA-ELECTRIC CONVECTION OVEN (4 Trays Commercial )",
    //   category: "Cooking Equipments",
    //   image: c7,
    //   tagline: "Double-Seal Commercial Chamber Sealer",
    //   description: "High-vacuum chamber sealer designed to extend the shelf life of food products, prevent freezer burn, and prepare items for sous vide cooking. Ideal for restaurants, catering, and food laboratories.",
    //   specs: [
    //     { label: "Chamber Dimensions", value: "400 x 400 x 120 mm" },
    //     { label: "Seal Bar Length", value: "400 mm (Double Sealing)" },
    //     { label: "Vacuum Pump Capacity", value: "20 m³/hr" },
    //     { label: "Cycle Time", value: "15 - 30 seconds" },
    //     { label: "Material", value: "Full Stainless Steel Cabinet & Acrylic Lid" },
    //     { label: "Voltage", value: "220V - 240V / 50Hz" }
    //   ],
    //   accessories: ["High-performance Vacuum Pump Oil", "Spare Heating Elements", "Teflon Tape", "Chamber Filler Plates"]
    // },


    ,
    {
      id: "WORK-TABLE-WITH-OVERSHELF ",
      name: "WORK TABLE WITH OVERSHELF ",
      category: "Stainless Steel Fabrications",
      image: s1,
      tagline: "Double-Seal Commercial Chamber Sealer",
      description: "High-vacuum chamber sealer designed to extend the shelf life of food products, prevent freezer burn, and prepare items for sous vide cooking. Ideal for restaurants, catering, and food laboratories.",
      specs: [
        { label: "Chamber Dimensions", value: "400 x 400 x 120 mm" },
        { label: "Seal Bar Length", value: "400 mm (Double Sealing)" },
        { label: "Vacuum Pump Capacity", value: "20 m³/hr" },
        { label: "Cycle Time", value: "15 - 30 seconds" },
        { label: "Material", value: "Full Stainless Steel Cabinet & Acrylic Lid" },
        { label: "Voltage", value: "220V - 240V / 50Hz" }
      ],
      accessories: ["High-performance Vacuum Pump Oil", "Spare Heating Elements", "Teflon Tape", "Chamber Filler Plates"]
    }, ,
    {
      id: "WORK-TABLE-WITH-UNDERSHELF ",
      name: "WORK TABLE WITH UNDERSHELF  ",
      category: "Stainless Steel Fabrications",
      image: s2,
      tagline: "Double-Seal Commercial Chamber Sealer",
      description: "High-vacuum chamber sealer designed to extend the shelf life of food products, prevent freezer burn, and prepare items for sous vide cooking. Ideal for restaurants, catering, and food laboratories.",
      specs: [
        { label: "Chamber Dimensions", value: "400 x 400 x 120 mm" },
        { label: "Seal Bar Length", value: "400 mm (Double Sealing)" },
        { label: "Vacuum Pump Capacity", value: "20 m³/hr" },
        { label: "Cycle Time", value: "15 - 30 seconds" },
        { label: "Material", value: "Full Stainless Steel Cabinet & Acrylic Lid" },
        { label: "Voltage", value: "220V - 240V / 50Hz" }
      ],
      accessories: ["High-performance Vacuum Pump Oil", "Spare Heating Elements", "Teflon Tape", "Chamber Filler Plates"]
    },
    {
      id: "BREADING-TABLE ",
      name: "BREADING TABLE ",
      category: "Stainless Steel Fabrications",
      image: s3,
      tagline: "Double-Seal Commercial Chamber Sealer",
      description: "High-vacuum chamber sealer designed to extend the shelf life of food products, prevent freezer burn, and prepare items for sous vide cooking. Ideal for restaurants, catering, and food laboratories.",
      specs: [
        { label: "Chamber Dimensions", value: "400 x 400 x 120 mm" },
        { label: "Seal Bar Length", value: "400 mm (Double Sealing)" },
        { label: "Vacuum Pump Capacity", value: "20 m³/hr" },
        { label: "Cycle Time", value: "15 - 30 seconds" },
        { label: "Material", value: "Full Stainless Steel Cabinet & Acrylic Lid" },
        { label: "Voltage", value: "220V - 240V / 50Hz" }
      ],
      accessories: ["High-performance Vacuum Pump Oil", "Spare Heating Elements", "Teflon Tape", "Chamber Filler Plates"]
    }, ,
    {
      id: "HR-12",
      name: "HR 12",
      category: "Stainless Steel Fabrications",
      image: s4,
      tagline: "Double-Seal Commercial Chamber Sealer",
      description: "High-vacuum chamber sealer designed to extend the shelf life of food products, prevent freezer burn, and prepare items for sous vide cooking. Ideal for restaurants, catering, and food laboratories.",
      specs: [
        { label: "Chamber Dimensions", value: "400 x 400 x 120 mm" },
        { label: "Seal Bar Length", value: "400 mm (Double Sealing)" },
        { label: "Vacuum Pump Capacity", value: "20 m³/hr" },
        { label: "Cycle Time", value: "15 - 30 seconds" },
        { label: "Material", value: "Full Stainless Steel Cabinet & Acrylic Lid" },
        { label: "Voltage", value: "220V - 240V / 50Hz" }
      ],
      accessories: ["High-performance Vacuum Pump Oil", "Spare Heating Elements", "Teflon Tape", "Chamber Filler Plates"]
    },




    {
      id: "STAINLESS-STEEL-3-POT-CHOCOLATE-MELTER-CHOCLATE-WARMER-BAIN-MARIE",
      name: "STAINLESS STEEL 3 POT CHOCOLATE MELTER CHOCLATE WARMER BAIN MARIE",
      category: "Industrial And Food Service",
      image: i1,
      tagline: "Double-Seal Commercial Chamber Sealer",
      description: "High-vacuum chamber sealer designed to extend the shelf life of food products, prevent freezer burn, and prepare items for sous vide cooking. Ideal for restaurants, catering, and food laboratories.",
      specs: [
        { label: "Chamber Dimensions", value: "400 x 400 x 120 mm" },
        { label: "Seal Bar Length", value: "400 mm (Double Sealing)" },
        { label: "Vacuum Pump Capacity", value: "20 m³/hr" },
        { label: "Cycle Time", value: "15 - 30 seconds" },
        { label: "Material", value: "Full Stainless Steel Cabinet & Acrylic Lid" },
        { label: "Voltage", value: "220V - 240V / 50Hz" }
      ],
      accessories: ["High-performance Vacuum Pump Oil", "Spare Heating Elements", "Teflon Tape", "Chamber Filler Plates"]
    },
    {
      id: "TTS-81-",
      name: "TTS-81",
      category: "Industrial And Food Service",
      image: i2,
      tagline: "Double-Seal Commercial Chamber Sealer",
      description: "High-vacuum chamber sealer designed to extend the shelf life of food products, prevent freezer burn, and prepare items for sous vide cooking. Ideal for restaurants, catering, and food laboratories.",
      specs: [
        { label: "Chamber Dimensions", value: "400 x 400 x 120 mm" },
        { label: "Seal Bar Length", value: "400 mm (Double Sealing)" },
        { label: "Vacuum Pump Capacity", value: "20 m³/hr" },
        { label: "Cycle Time", value: "15 - 30 seconds" },
        { label: "Material", value: "Full Stainless Steel Cabinet & Acrylic Lid" },
        { label: "Voltage", value: "220V - 240V / 50Hz" }
      ],
      accessories: ["High-performance Vacuum Pump Oil", "Spare Heating Elements", "Teflon Tape", "Chamber Filler Plates"]
    },






  ];

  // Read URL query parameters to pre-open a product modal
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productId = params.get('id');
    if (productId) {
      const prod = productsList.find(p => p.id === productId);
      if (prod) {
        setSelectedProduct(prod);
      }
    }
  }, [location.search]);

  // Clean URL when closing modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
    navigate('/products', { replace: true });
  };

  const filteredProducts = selectedCategory === 'All'
    ? productsList
    : productsList.filter(p => p.category === selectedCategory);

  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-[#F8FAFC] border-b border-[#E5E7EB]/60 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-[#DE1D3A] font-bold text-xs uppercase tracking-widest">
              Industrial Catalog
            </span>
            <h1 className=" text-2xl md:text-4xl sm:text-5xl font-extrabold text-[#111827] font-display leading-tight">
              Our Machineries & Toolings
            </h1>
            <p className="text-[#6B7280] text-base md:text-lg max-w-2xl leading-relaxed">
              Explore our line of industrial setups. Engineered with heavy components, high safety ratios, and intuitive controller architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 bg-[#FFFFFF] min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filters */}
<div className="flex flex-wrap justify-center gap-1 mb-10">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`px-2 py-1.5 text-[9px] rounded-full border transition-all duration-200
        ${
          selectedCategory === cat
            ? "border-[#DE1D3A] text-[#DE1D3A]  bg-[#DE1D3A]/5"
            : "border-gray-300 text-gray-500 hover:border-[#DE1D3A]"
        }`}
    >
      {cat}
    </button>
  ))}
</div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={`${product.id}-${product.category}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group border border-[#E5E7EB] bg-[#FFFFFF]  rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#DE1D3A]/20 transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-[#FFFFFF] flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-4 left-4 bg-[#FFFFFF]/95 backdrop-blur px-2.5 py-1 rounded text-[#DE1D3A] text-[10px] font-bold uppercase tracking-wider shadow">
                    {product.category}
                  </span>
                </div>
                {/* Details Section */}
                <div className="p-6 flex-grow flex flex-col items-start text-left">
                  <h3 className="font-display font-bold text-lg text-[#111827] group-hover:text-[#DE1D3A]/90 transition-colors duration-200 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[#DE1D3A]/70 text-[11px] font-bold tracking-wide uppercase mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                    {product.description.slice(0, 110)}...
                  </p>


                  <div className="w-full pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280] font-semibold">
                    <span className="flex items-center text-[#DE1D3A]">
                      <Info className="w-3.5 h-3.5 mr-1" /> View Technical Specs
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#6B7280] group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F2937]/70 backdrop-blur-sm overflow-y-auto"
          >
            {/* Backdrop click to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={handleCloseModal} />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#FFFFFF] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 border border-[#E5E7EB] flex flex-col text-left"
            >
              {/* Header Info */}
              <div className="p-6 md:p-8 border-b border-[#E5E7EB] flex justify-between items-start">
                <div>
                  <span className="px-2.5 py-1 rounded bg-[#FCE8EC] text-[#DE1D3A] text-[10px] font-bold uppercase tracking-wider">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#111827] mt-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-[#6B7280] text-sm mt-1">{selectedProduct.tagline}</p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 text-[#6B7280] hover:text-[#DE1D3A] rounded-lg bg-[#F8FAFC] hover:bg-[#E5E7EB] transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-y-auto">

                {/* Left: General info & Accessories */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#DE1D3A] mb-3">
                      Description
                    </h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#DE1D3A] mb-3">
                      Included Accessories
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProduct.accessories.map((acc, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[#6B7280] text-xs">
                          <Check className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                          <span>{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#E5E7EB] flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        handleCloseModal();
                        navigate(`/contact?product=${encodeURIComponent(selectedProduct.name)}`);
                      }}
                      className="px-6 py-3 bg-[#DE1D3A] hover:bg-[#B7152D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors duration-200 flex items-center group shadow"
                    >
                      Request Quote Callback
                      <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="px-5 py-3 border border-[#E5E7EB] text-[#6B7280] hover:text-[#DE1D3A] hover:bg-[#F8FAFC] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors duration-200 flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" /> Print Datasheet
                    </button>
                  </div>
                </div>

                {/* Right: Technical specifications table */}
                <div>
                  <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#DE1D3A] mb-3">
                    Technical Specifications
                  </h4>
                  <div className="border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm">
                    <table className="min-w-full divide-y divide-[#E5E7EB]">
                      <tbody className="divide-y divide-[#E5E7EB] bg-[#FFFFFF]">
                        {selectedProduct.specs.map((spec, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F8FAFC]'}>
                            <td className="px-4 py-3 text-xs font-bold text-[#111827] font-display uppercase tracking-wider w-1/3">
                              {spec.label}
                            </td>
                            <td className="px-4 py-3 text-xs text-[#6B7280]">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
