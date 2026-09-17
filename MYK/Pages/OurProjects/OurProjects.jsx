import React, { useState } from "react";

const projectSections = [
  {
    "title": "AUTO PARTS INDUSTRIES",
    "content": "{/* ma chahta hun ma plus pr click karoun nicha wali jaga aya pr minus pr click karoun chala jye  */}\n1.M/s. Thal Limited (Engineering Division)\n\n2.M/s. Pak Limousine Services Pvt Ltd\n\n3.M/s. Crystal Corporation\n\n4.M/s. Auvitronics Limited\n\n5.M/s. Alsons Auto Parts Pvt. Ltd\n\n6.M/s. Super Tech Auto Parts Pvt\n\n7.M/s. Yamaha Motors\n\n8.M/s. Gandhara Nissan\n\n9.M/s. FAW Motors\n\n10.M/s. Daewoo Motors\n\n11.M/s. Tech Auto\n\n12.M/s. Dawood Auto Parts"
  },
  {
    "title": "BANKS",
    "content": "{/* Same */}\n1.M/s. Bank Al Falah Limited\n\n2.M/s. NBP Fullerton Asset Management Limited\n\n3.M/s. United Bank Ltd\n\n4.M/s. Silk Bank Limited\n\n5.M/s. Industrial and Commercial Bank of China\n\n6.M/s. Bank Islami Pakistani Ltd\n\n7.M/s. Habib Bank Ltd\n\n8.M/s. Bank Al Habib\n\n9.M/s. United Bank Ltd Asset Management"
  },
  {
    "title": "CABLES FACTORIES",
    "content": "1.M/s. Pakistan Cables Limited\n\n2.M/s. Siemens Pakistan Engineering Co. Ltd.\n\n3.M/s. Premiers Cables Pvt Ltd"
  },
  {
    "title": "CARGO SERVICES",
    "content": "1.M/s. Niazi Cargo Services\n\n2.M/s. Air Cargo Services\n\n3.M/s. AL Hamd International Container Terminal\n\n4.M/s Gerrys Danata\n\n5.M/s Gerrys International"
  },
  {
    "title": "CEMENT FACTORIES",
    "content": "1.M/s. D.G.Kan Cement Factory Ltd\n\n2.M/s. BestWay Cement Ltd\n\n3.M/s. Maple Leaf Cement Factory\n\n4.M/s. ZIL Limited\n\n5.M/s. Thatta Cement\n\n6.M/s. Galadari Cement (GULF) Ltd\n\n7.M/s. Power Cement\n\n8.M/s. Dewan Cement"
  },
  {
    "title": "CENIMAS",
    "content": "1.M/s. Afreen International (Pvt.) Ltd.\n\n2.M/s. Prince Cinema"
  },
  {
    "title": "CHEMICAL INDUSTRIES",
    "content": "1.M/s. Sohneri Chemicals\n\n2.M/s. R.K. Chemical Co.\n\n3.M/s. Captain PQ Chemicals Industries Pvt Ltd\n\n4.M/s. Shahid Chemicals\n\n5.M/s. Zahabiya Chemical Industries\n\n6.M/s. Power Chemical\n\n7.M/s. Chawala Chemicals & Metal Industries Pvt Ltd\n\n8.M/s. Clariant Pakistan Limited\n\n9.M/s. Engro Polymer & Chemical Ltd\n\n10.M/s. Nimir Chemicals Pakistan Ltd\n\n11.M/s. Pak Petrochemical Industries Pvt Ltd\n\n12.M/s. Tufail Chemicals Industries Ltd\n\n13.M/s. Pakistan Gum Chemical (Pvt) Ltd\n\n14.M/s. Pak Petrochemical Industries Pvt Ltd\n\n15.M/s. ICI Pakistan Ltd\n\n16.M/s. Linde Pakistan Limited\n\n17.M/s. Akbari Chemical Industries\n\n18.M/s. Archroma Pakistan Ltd\n\n19.M/s. Tufail Chemical & Surfactants Pvt Ltd"
  },
  {
    "title": "CNG & PETROLEUMS",
    "content": "1.M/s. Fattah CNG & Petrolim\n\n2.M/s. Best CNG & Petrolim\n\n3.M/s. Prime CNG Filling Station\n\n4.M/s. Al-Saeed Petroleum Services\n\n5.M/s. Bhittai Petroleum Services & CNG & Petrolim\n\n6.M/s. Bismillah CNG & Petrolim\n\n7.M/s, Nehal CNG & F/S X 28 – S\n\n8.M/s. Hascol Petroleum Limited\n\n9.M/s. Sindh Gas (Pvt.) Ltd.\n\n10.M/s. Monolite CNG International Pvt Ltd\n\n11.M/s. Commander CNG & Petrolim\n\n12.M/s. Safe Way CNG Filling Station\n\n13.M/s. Blue SKY CNG Filling Station\n\n14.M/s. Nayyab Petrolium\n\n15.M/s. Ahmed Filling Station\n\n16.M/s. Cheema Filling Station\n\n17.M/s. Al-Qaim Petroleum Service\n\n18.M/s. Al Barkat Filling Station\n\n19.M/s. Nagina Filling Station\n\n20.M/s. KB Cng Filling Station ( Desktop)\n\n21.M/s. CNG Filling Station\n\n22.M/s. Seven Star CNG & Petrolim\n\n23.M/s. Arif CNG\n\n24.M/s. Bhatti CNG & Petrolim\n\n25.M/s. Sitara Petroleum Services Private Limited\n\n26.M/s. Khan Filling Station\n\n27.M/s. Dawood Yaya Filling Station\n\n28.M/s. Mian CNG & Petrolim\n\n29.M/s. Gascon CNG & Petrolim\n\n30.M/s. A Hameed Son’s CNG\n\n31.M/s. Pakistan State Oil Company Limited\n\n32.M/s. Shell Pak Ltd.\n\n33.M/s. Pakistan Refinery Ltd\n\n34.M/s. Petroleum Packges Pvt Ltd\n\n35.M/s. BYCO Petrolium Pakistan Ltd.\n\n36.M/s. Crystal Petroleum Service Station\n\n37.M/s. Pak-Arab Refinery Ltd (Parco)\n\n38.M/s. Raja Petroleum Service\n\n39.M/s. Ayesha Petroleum Service\n\n40.M/s. Ghulshan CNG & Caltex CNG\n\n41.M/s. Hyderabad Filling Station\n\n42.M/s. Magsi Filling Station\n\n43.M/s. Taimoor Filling Station\n\n44.M/s. Aamir Filling Station\n\n45.M/s. Kinetic gass Filling Station\n\n46.M/s. AL Haj Petroleum Services\n\n47.M/s. Bhatti Brothers & Filling Station\n\n48.M/s. Oceanic International Trade (CNG Station)"
  },
  {
    "title": "COAL",
    "content": "1.M/s. Thar Engro Coal Company (Cole Pile Measurements)\n2.M/s. Sindh Engro Coal Mining Company (SECMEC)"
  },
  {
    "title": "CONSTRUCTION COMPANIES",
    "content": "1.M/s. Paragon Constructor\n2.M/s. R. P. S. Construction Company.\n3.M/s. Tashima Construction Pvt Ltd\n4.M/s. The Orchid\n5.M/s. Bahria Foundation\n6.M/s. REIT\n7.M/s. AL Ramzan Construction Company\n8.M/s. EA Consulting Pvt Ltd\n9.M/s. Principal Builders"
  },
  {
    "title": "COTTON FACTORIES",
    "content": "1.M/s. Sonia Cotton Ginning Pressing Factory\n2.M/s. Sonia Cotton Ginnig Pressing Factory& Oil Mill\n3.M/s. New Kohistan Cotton Ginning, Pressing Factory\n4.M/s. Data Cotton Industries & Oil Mills\n5.M/s. Sakhi Datar Cotton Industries & Oil Mills\n6.M/s. Ghazi Abbas Cotton Industries & Oil Mills\n7.M/s. D.T Cotton Ginning Factory & Oil Mills\n8.M/s. Hera Cotton Industries & Oil Mills\n9.M/s. National Absorbant Cotton Mills Co.\n10.M/s. A. A .Cotton\n11.M/s. Hajwari Cotton Mills\n12.M/s. Hasnain Irfan Cotton Factory\n13.M/s. Nagina Cotton Mills Limited\n14.M/s. Tritex Cotton Mills Ltd\n15.M/s. N.P Cotton Mills Ltd\n16.M/s. Sawera Cotton Ginning"
  },
  {
    "title": "CARPET INDUSTRIES",
    "content": "1.M/s. Venus Carpet (Pvt) Ltd (Hattar)\n2.M/s. Khokar Carpets Industries"
  },
  {
    "title": "COMMUNICATION",
    "content": "1.M/s. Advance Telecom\n2.M/s Sybird Pvt Ltd\n3.M/s Ebone Network Pvt Ltd"
  },
  {
    "title": "CONSULTANCY",
    "content": "1. M/s. Ali Arshad Associates\n2. M/s. Deloitte & Touche\n3. M/s. Ernst & Young Ford Rhodes\n4. M/s. KPMG\n5. M/s. Price Waterhouse Coopers\n6. M/s. Premier System Pvt Ltd\n7. M/s. Center Point\n8. M/s. Grant Thornton Anjum Rahman\n9. M/s. A.F Ferguson & Co"
  },
  {
    "title": "DAIRY FARMS",
    "content": "1.M/s. Pakistan Dairy Products Pvt. Ltd.\n2.M/s. Dairyland Pvt. Limited."
  },
  {
    "title": "DISTIBUTION COMPANIES",
    "content": "1.M/s. United Distribution Pakistan\n2.M/s. Ghazi Brothers\n3.M/s. Premier Agencies\n4.M/s. Jaffer Brothers Pvt Ltd\n5.M/s. Muller & Phipps Pakistan Ltd\n6.M/s. Bayer Pakistan Pvt Ltd.\n7.M/s. Inbox Business Technologies Pvt Ltd\n8.M/s. Uni-Brands\n9.M/s. Household Product Pakistan (Pvt) Ltd.\n10.M/s. United Mobile\n11.M/s. Synergy Computers\n12.M/s. Sesa Max\n13.M/s. Unilever Pakistan Ltd"
  },
  {
    "title": "ELECTRONICS GOODS FACTORIES",
    "content": "1.M/s. Atlas Battry Limited\n2.M/s. Philips Electrical industries Ltd\n3.M/s. Philips Morris Pakistan Ltd\n4.M/s. Dawlance (Pvt) Ltd\n5.M/s. Singer Pakistan Ltd"
  },
  {
    "title": "ENERGY SECTORS",
    "content": "1.M/s. Zorlu Enerji Pakistan Limited\n2.M/s. K-Electric Limited\n3.M/s. Orient Energy Sysytem (Pvt.) Ltd.\n4.M/s. Syngenta Pakistan Limited\n5.M/s. Transfopower Industries (Pvt) Limited.\n6.M/s. Tapal Energy Pvt Limited\n7.M/s. Hubco Power Company Ltd\n8.M/s. Puma Energy Pakistan Pvt Ltd\n9.M/s. Qasim Freight Station Pvt Ltd\n10.M/s. Port Qasim Electric Power Company Pvt Ltd\n11.M/s. MNA Energy Pvt Ltd\n12.M/s. Saif Power\n13.M/s. Sapphire Power\n14.M/s. Pakistan Refinery Ltd\n15.M/s. BYCO\n16.M/s. Engro Power Gen Thar Pvt Ltd\n17.M/s. PUMA Energy\n18.M/s. SECMC"
  },
  {
    "title": "EMBROIDERY MILLS",
    "content": "1.M/s. Ali Embroidery Mills Limited\n2.Sareena Ind. & Embridory Mills Ltd"
  },
  {
    "title": "ENGINEERING COMPANIES",
    "content": "1.M/s. Allied Engineering & Services Ltd\n2.M/s. Continental Engineering Services (Pvt.) Ltd.\n3.M/s. Meraj Ltd\n4.M/s. Pak Arab Engineering Company\n5.M/s. Fico Engineering Corporation Company Pvt Ltd\n6.M/s. Blessed Engineering\n7.M/s. Sayyed Engineers (Pvt) Ltd.\n8.M/s. Ali Sons Noble (Pvt) Ltd\n9.M/s. Multifab (Pvt.) Ltd. X 2 – S\n10.M/s. Siemens Pakistan Engineering Corporation Ltd\n11.M/s. Adamjee Diesel Engineering Pvt Ltd\n12.M/s. Ameejee Valleejee and Sons Ltd\n13.M/s. Apex Machinery Pvt Ltd\n14.M/s. Siddiqsons Tin Plate Ltd\n15.M/s. Dawood Engineering Pvt Ltd\n16.M/s. Pakistan Engineering Services Pvt Ltd\n17.M/s. Watar Engineering & Management Services Pvt Ltd\n18.M/s. Paramount Printing Press\n19.M/s. JK Jazz Pvt Ltd\n20.M/s. Dawood Engineering\n21.M/s. Sunbeam Engineers Ltd\n22.M/s. Sachal Engineering Works Pvt Ltd\n23.M/s. Landhi Engineering Pvt Ltd\n24.M/s. Burqtron Engineering Solution"
  },
  {
    "title": "ENTERTAINMENT",
    "content": "1.M/s. Askari Park\n2.M/s. Dream World\n3.M/s. Arena Multimedia"
  },
  {
    "title": "FABRIC MILLS",
    "content": "1.M/s. Daimond Fabrics"
  },
  {
    "title": "FASHION",
    "content": "1.M/s. Shahid Bangle Store."
  },
  {
    "title": "FERTILIZER SECTOR",
    "content": "1.M/s. Chawla International\n2.M/s. Agritech Limited.\n3.M/s. Engro Fertilizer Ltd.\n4.M/s. Shujabad Agro Industries Pvt Ltd"
  },
  {
    "title": "FIBER MILLS",
    "content": "1.M/s. Ibrahim Fibres Pvt. Limited\n2.M/s. Sapphire Fibre Ltd"
  },
  {
    "title": "FEED MILLS",
    "content": "1.M/s. Faisal Feeds Pvt Ltd\n2.M/s. Mahmood Feeds Pvt Ltd\n3.M/s. Asia Poultry Feeds Pvt Ltd\n4.M/s. Sharif Feed Mills Pvt Ltd\n5.M/s. Unity Foods Ltd\n6.M/s. Dairy Land Pvt Ltd\n7.M/s. Mashriq Feeds\n8.M/s. Pioneer Feeds Ltd"
  },
  {
    "title": "FISHERIES",
    "content": "1.M/s. Sagar Fish Mills\n2.M/s. A.G Fishries Pvt Ltd\n3.M/s. International Fisheries Pakistan Pvt Ltd\n4.M/s. Peoples Fisheries Pvt Ltd\n5.M/s. United Finishing Mills Ltd\n6.M/s. United Finishing Mills Limited.\n7.M/s. Ejaz Dying & Finishing Mills Ltd"
  },
  {
    "title": "FLOUR MILLS",
    "content": "1.M/s. Sattar Flour Mills\n2.M/s. Unity Flour Mills\n3.M/s. Murtaza Flour Mills\n4.M/s. Saeed Brothers Karyana & Oil Store\n5.M/s. Flour Mills (Pvt.) Limited\n6.M/s. Asghar Flour Mills\n7.M/s. Farrukh Flour Mills (Pvt.) Limited\n8.M/s. Rasul Flour Mills Pvt Ltd\n9.M/s. Shaikh Brothers Flour Mills\n10.M/s. Mehran Flour Mills\n11.M/s. Qureshi Flour Mills\n12.M/s. Prime Flour Mill & Agrobased Ind\n13.M/s. Al Makka Flour & General Mills\n14.M/s. Ittfar Flour Mills\n15.M/s. Junjua Flour Mills\n16.M/s. Jam Pur Flour Mills\n17.M/s. Shahtaj Flour General Mills\n18.M/s. Mian Umer Sharif Oil & Flour Mills\n19.M/s. Pakistan Flour Mills\n20.M/s. Shaikh Flour Mills\n21.M/s. Boota Brothers Flour General Mills\n22.M/s. Farooqui Flour Mills\n23.M/s. AL Karam Flour Mills\n24.M/s. Modern Flour Mills\n25.M/s. Khursheed Flour Mills\n26.M/s. AL Mustafa Flour Mill\n27.M/s. AL Madina Flour Mill\n28.M/s. Qandhari Flour Mill\n29.M/s. Pioneer Flour Mill\n30.M/s. Sunridge Flour Mill\n31.M/s. Sacho Sarmat Flour Mill\n32.M/s. Pakistan Flour Mill\n33.M/s. M.M Flour Mill\n34.M/s. Hanif Flour General Mill\n35.M/s. Sindh Flour Mill\n36.M/s. Hamid Flour Mill\n37.M/s. Kharian Flour Mill\n38.M/s. Kohinoor Flour Mill\n39.M/s. AL Amin Flour Mill"
  },
  {
    "title": "FOODS INDUSTRIES",
    "content": "1.M/s. National Foods Ltd\n2.M/s. Cornet Food (Pvt) Ltd\n3.M/s. A & S FOODS\n4.M/s. Pioneer Feed Industries\n5.M/s. Fast Food Industries Pvt Ltd\n6.M/s. Golden Harvest Foods Pvt Ltd\n7.M/s. Lotus Food\n8.M/s. Hilal Confectionery Pvt Ltd\n9.M/s. King’s Food Pvt Ltd\n10.M/s. Engro Food Ltd\n11.M/s. Unilever Pakistan Foods Ltd\n12.M/s. Popular Food Industries Ltd\n13.M/s. Taam Foods\n14.M/s. Colonel Seafood Pvt Ltd\n15.M/s. A & B Food Industries (Pvt) Ltd\n16.M/s. B.P. Industries (Pvt) Ltd\n17.M/s. Dalda Foods Pvt Ltd\n18.M/s. Hamza Hafeez Food Ind\n19.M/s. 7-Star Food Industries\n20.M/s. Habib Food Industries\n21.M/s. Super Food Industries\n22.M/s. Sindhri Food Industries\n23.M/s. Far Eastern Impex Pvt Ltd\n24.M/s. Continental Biscuits Ltd\n25.M/s. Engro Food Ltd\n26.M/s. Tetra Pak Pakistan Limited\n27.M/s. Pakistan Beverage Ltd\n28.M/s. Millac Foods (Pvt.) Ltd\n29.M/s. Karachi Food Flour Mills\n30.M/s. Hajvery Foods\n31.M/s. Unity Foods Ltd\n32.M/s. Soni Dharti Foods Industries\n33.M/s. Angro Foods Ltd\n34.M/s. Dairy Land\n35.M/s. Akhtar Group\n36.M/s. United King\n37.M/s. Sufi Foods\n38.M/s. Big Birds Foods\n39.M/s. Season Foods Pvt Ltd"
  },
  {
    "title": "GARMENTS MILLS",
    "content": "1.M/s. Eastern Garments Pvt Ltd\n2.M/s. Amara Pvt Ltd\n3.M/s. Razi Garments\n4.M/s. C.I.S Garments Pvt Ltd\n5.M/s. Al Murtaza Garments Machinery Company\n6.M/s. Unicon International (Pvt.) Ltd.\n7.M/s. Cambridge Garment Industries\n8.M/s. Stichwell Garments\n9.M/s. Datari International\n10.M/s. Naveena Industries Limited\n11.M/s. Rainbow Hosiery Pvt Ltd\n12.M/s. Iqbal Colth House\n13.M/s. Nadeem Cloth House\n14.M/s. Artistics Milliners Pvt Ltd\n15.M/s. Iffco Pakistan Pvt Ltd\n16.M/s. Loads Limited.\n17.M/s. Hi-Knit Pvt Ltd\n18.M/s. Daimond International\n19.M/s. Yasin Cut Piece Merchant.\n20.M/s. Naveena Exports Limited\n21.M/s. Soorty Enterprises Pvt Ltd\n22.M/s. Denim Clothing Comapny\n23.M/s. Siddiqsons Ltd\n24.M/s. Hantex\n25.M/s. Akhtar Textile\n26.M/s. Al Karam Towel\n27.M/s. Al Karam Textile"
  },
  {
    "title": "GLASS MANUFACTURING COMP",
    "content": "1.M/s. Ghani Glass Limited"
  },
  {
    "title": "GENERAL ITEMS COMPANY",
    "content": "1.M/s. M.C.R Pvt Ltd\n2.M/s. Makro Habib Pakistan Ltd\n3.M/s. Recikitt Benckiser Pak Ltd.\n4.M/s. Treet Corporation Limited\n5.M/s. Hyeworth Renault Petersen Pakistan (Pvt.) Ltd"
  },
  {
    "title": "GENERTOR IMPOTER",
    "content": "1.M/s. Orient Energy System Pvt Ltd"
  },
  {
    "title": "HOSPITALS",
    "content": "1.M/s. South City Hospital\n2.M/s. Hill Park General Hospital\n3.M/s. National Medical Center\n4.M/s. Liaquat National Hospital\n5.M/s. Dr. Ziauddin Hospital Trust\n6.M/s. Medcare International Hospital\n7.M/s. Sulman Memorial Hospital\n8.M/s. Avicenna Healthcare Pak ( Pvt) Ltd\n9.M/s. PECHS Trauma General Hospital\n10.M/s. Imam Clinic & General Hospital\n11.M/s. Health Care Hospital\n12.M/s. Memon Medical Institute Hospital"
  },
  {
    "title": "ICE FACTORIES",
    "content": "1.M/s. Pak Cold Storage and Ice Factor"
  },
  {
    "title": "INSURANCE COMPANIES",
    "content": "1.M/s. Jubilee General Insurance\n2.M/s. TPL Trakker Limited (Center Point)\n3.M/s. State Life Insurance Company"
  },
  {
    "title": "LABS",
    "content": "1.M/s. The Leading Way Lab\n2.M/s. Ferozsons Laboratories Ltd."
  },
  {
    "title": "LEATHER GARMENTS FACTORIES",
    "content": "1.M/s. Noor Leather Garments Pvt Ltd\n2.M/s. Tauheed International Pvt. Ltd.\n3.M/s. Tip Top Leather Store\n4.M/s. Shafi Tenniers PVT Ltd\n5.M/s. Universal Leather Limited"
  },
  {
    "title": "MARRIGE HALLS",
    "content": "1.M/s. City Marriage Hall"
  },
  {
    "title": "MOTOR VEHICLE SHOWROOMS",
    "content": "1.M/s. Karakoram Motors (Pvt) Ltd\n2.M/s. Toyota Defense Motor\n3.M/s. Nisar Motor Company\n4.M/s. Pakistan Vehicle Engineering\n5.M/s. Toyota Faisalabad Motors\n6.M/s. Haq Motors\n7.M/s. Makkah Autos\n8.M/s. Akbar Utos Corporation\n9.M/s. United Auto Industries Pvt. Ltd.\n10.M/s. Pak Motors\n11.M/s. Ravi Autos\n12.M/s. Khalid Autos\n13.M/s. Akber Autos\n14.M/s. Khan Auto Complex\n15.M/s. Toyota Defence Motor"
  },
  {
    "title": "MOTOR COMPANIES",
    "content": "1.M/s. Atlas Honda Ltd\n2.M/s. Pakistan Suzuki Motors Co Ltd\n3.M/s. Alsons Auto Parts Pvt Ltd X 2 – M\n4.M/s. Carachi Motors Company\n5.M/s. Kitmeer Autos\n6.M/s. Fatami Motors\n7.M/s. Hinopak Motors Ltd\n8.M/s. Pacific Motors\n9.M/s. DYL Motorcycles Ltd\n10.M/s. Modern Motors (Pvt) Ltd\n11.M/s. Indus Motor Company Ltd\n12.M/s. AL Haj FAW Motors Pvt Ltd\n13.M/s. Yamaha Motor Pakistan Pvt Ltd\n14.M/s. Toyota Defence Motors\n15.M/s. Suzuki Motorways"
  },
  {
    "title": "NEWS PAPER INDUSTRIES",
    "content": "1.M/s. Indepandent News Paper Corporation Pvt Ltd"
  },
  {
    "title": "OIL & GHEE MILLS",
    "content": "p1.M/s. Pak Agro Oil Mills Pvt Ltd.\n2.M/s. Islam Cotton Ginner & Oil Mills\n3.M/s. Indus Valley Solvent Oil Extraction Ltd\n4.M/s. A&Z Agro Industries (Pvt) Limited.\n5.M/s. Ettehad Lube Oil Company Pvt Ltd\n6.M/s. PAK HY-OILS LIMITED\n7.M/s. New Choudhry Oil Mils\n8.M/s. Al-Mehboob Oil Mills.\n9.M/s. New Choudary Oil Mills\n10.M/s. Al-Fareed Cotton Factory & Oil Mills\n11.M/s. Aslam Oil Traders\n12.M/s. Ayesha Cooking Oil Mills Pvt. Ltd.\n13.M/s. Wali Oil Mills Ltd\n14.M/s. Chitral Oil Ghee Ind Pvt Ltd\n15.M/s. Al Aziz Paper Mills & Ghousia Oil Traders\n16.M/s. Dalda Food Pvt Ltd\n17.M/s. MAPAK Edible Oils\n18.M/s. Mughal Oil Traders\n19.M/s. Karim Ghee & Oil Mills Pvt Ltd\n21.M/s. Global Oil Industries Pvt Ltd\n21.M/s. AL Rehmat Cotton Ginning Factory & Oil Mills\n22.M/s. Sikandar Oil Mills\n23.M/s. Al Nasar Cotton Industries & Oil Mills\n24.M/s. Raza Oil Mills\n25.M/s. Chitral Oil & Ghee Industries Pvt Ltd\n26.M/s. KMMMM/Masood Model Ginning Factories\n27.M/s. Ahbab Oil Mills\n28.M/s. Allied Cotton Industries & Oil Mills\n29.M/s. A & Z Oil Mills\n30.M/s. Tanveer Oil Mills\n31.M/s. Gas & Oil Pakistan\n31.M/s. Shujabad Agro Industries Pvt Ltd\n32.M/s. Oil Industries Pakistan Pvt Ltd\n33.M/s. Al Madina Oil Industries\n34.M/s. Gas Man Pvt Ltd"
  },
  {
    "title": "PRINTING PRESS",
    "content": "1.M/s. Prince Art Press Pvt Ltd\n2.M/s. Master Quran Company\n3.M/s. Skyline Printing\n4.M/s. Kifayat Publishers\n5.M/s. Classic Printing Pvt Ltd"
  },
  {
    "title": "PACKAGING COMPANIES",
    "content": "1.M/s. Jilani Flexible Packages Pvt Ltd\n2.M/s. Hub Poly Packages Pvt Ltd\n3.M/s. S.S Packages\n4.M/s. Mayani Poly Packages Pvt Ltd\n5.M/s. Merit Packaging Limited\n6.M/s. Packages Limited\n7.M/s. Thal Limited Pakistan Papersack Div\n8.M/s. Saima Packaging Pvt LTd\n9.M/s. Mian Nazeer Sons Industries Pvt Ltd\n10.M/s. Storsack Pvt Ltd\n11.M/s. Mayani Poly Packages Pvt Ltd\n12.M/s. National Metal Packaging Limited\n13.M/s. Shahnawaz Packages\n14.M/s. Tecno Pack Industries Pvt Ltd\n15.M/s. Dayamer Packages Pvt Ltd"
  },
  {
    "title": "PAPERS & BOARD MILLS",
    "content": "1.M/s. Badin Board Mills\n2.M/s. Century Papers & Board mills Limited.\n3.M/s. Baluchistan Lamenits (Thal Ltd.)\n4.M/s. Inam Paper Mills\n5.M/s. Indus Pencil Ind. (Pvt) Ltd.\n6.M/s. Malik Paper Group"
  },
  {
    "title": "PHARMACEUTICAL COMPANIES",
    "content": "1.M/s. Helix Pharma\n2.M/s. Safe Pharmaceutical (Pvt) Ltd\n3.M/s. Helix Pharma (Pvt) Ltd\n4.M/s. Hospital Supply Corporation\n5.M/s. Bhittai Medical Stores\n6.M/s. Otsuka Pakistan Limited\n7.M/s. Akhai Pharmaceutical Pvt Ltd\n8.M/s. Herbion Pakistan (Pvt) Ltd.\n9.M/s. Iqbal Medical Store\n10.M/s. Ferozsons Laboratries Limited\n11.M/s. Sanofi Eventis Pakistan Ltd\n12.M/s. Getz Pharma Pvt Ltd\n13.M/s. Medipharma Pvt Ltd\n14.M/s. Maple Pharmaceutical\n15.M/s. Martin Dow Limited\n16.M/s. A.J Mirza Pharma Pvt Ltd\n17.M/s. Indus Pharma Pvt Ltd\n18.M/s. Brookes Pharmaceutical Laboratories (PAK) Ltd\n19.M/s. Semons Pharmaceutical (Pvt) Ltd\n20.M/s. Al-Kemy Phamaceutical\n21.M/s. City Pharma\n22.M/s. Zafa Pharmaceutical Pvt Ltd\n23.M/s. Herbion Pakistan (Pvt.) Ltd\n24.M/s. Akhai Pharmaceuticals Pvt Limited\n25.M/s. Searle Pakistan Ltd\n26.M/s. Atco Laboratories (Pvt) Ltd.\n27.M/s. Ophth Pharma (Pvt) Ltd\n28.M/s. Surge Laboratories (Pvt) Ltd.\n29.M/s. Bhurghri Medical Store\n30.M/s. Pharmatech Pakistan Pvt Ltd\n31.M/s. Darul Shifa International Pvt Ltd.\n32.M/s. ISIS Pharmaceuticals & Chemicals Work\n33.M/s. Ali Gohar & Company (Pvt.) Ltd\n34.M/s. BASF Pak Pvt Ltd\n35.M/s. Apex Marketing Services\n36.M/s. Asif Medicos Gondal Medical Store\n37.M/s. New Kamal Medical Center\n38.M/s. Tahir Medical Store\n39.M/s. Mian Shoes Material Store\n40.M/s. Pacific Pharmaceuticals Limtied\n41.M/s. Radiant Medical Pvt Ltd\n42.M/s. MBL Pharma\n43.M/s. Pharmaceuticals Pakistan Pvt Ltd\n44.M/s. CKD Pharmaceuticals Pakistan Pvt Ltd\n45.M/s. Axis Pharmaceuticals\n46.M/s. Accuray Surgical Ltd"
  },
  {
    "title": "PETROLEUM",
    "content": "1.M/s. Pakistan Refinery Ltd\n2.M/s. BYCO Petroleum Pakistan Ltd\n3.M/s. Puma Energy\n4.M/s. BE Energy\n5.M/s. My Petroleum\n6.M/s. Gas & Oil Pakistan Pvt Ltd\n7.M/s. Shell Pakistan"
  },
  {
    "title": "PLASTIC & PIPE INDUSTRIES",
    "content": "1.M/s. Inayat Pipe Industries Pvt Ltd\n2.M/s. M.M.S. Pipe Mills\n3.M/s. Novatex Ltd\n4.M/s. Sakaria Plastic Industries\n5.M/s. Mehran Bottlers Pvt Ltd\n6.M/s. Grapex S.S. Pipe Industry (Pvt.) Ltd.\n7.M/s. Grapex S.S. Pipe Industry (Pvt) Ltd.\n8.M/s. Millenium Industries Pvt Ltd\n9.M/s. CBM Plastics (Private) Limited\n10.M/s. Fintex Manufacturing Corporation Pvt Ltd\n11.M/s. Collapsible Tube Co. Pvt Ltd\n12.M/s. Euro Gulf Industries\n13.M/s. Imran Pipe Mills\n14.M/s. Mehran Plastic Industries Pvt Ltd\n15.M/s. Plastic World Pvt Ltd\n16.M/s. Sunrise Plastic Industries Pvt Ltd\n17.M/s. Mehran Plastic\n18.M/s. Paradise Plastic Industries Pvt Ltd\n19.M/s. Mandviwalla Mousers Plastic Industries Ltd"
  },
  {
    "title": "PIPE INDUSTRY",
    "content": "1.M/s.International Industries Limited"
  },
  {
    "title": "PARLOURS",
    "content": "1.M/s. Rose Beauty Parlour Pvt Ltd"
  },
  {
    "title": "POULTRY FARMS",
    "content": "1.M/s. Rijas Group\n2.M/s. Noor Poultry Farm\n3.M/s. Ahmed Rasheed Poultry Farm\n4.M/s. Muhammad Shafique Poultry Farm.\n5.M/s. Ali Poultry Farm\n6.M/s. Asia Poultry Feeds Pvt Ltd\n7.M/s. Ch. Mehar Din Cattle Farm\n8.M/s. Asia Poultry Seeds Pvt Ltd\n9.M/s. Zulfiqar Ali Poultry Farm (Pak Pattan)\n10.M/s. Jadeed Farms Pvt Ltd\n11.M/s. Mahmood Feeds Pvt Ltd"
  },
  {
    "title": "RE ROLLING MILLS",
    "content": "1.M/s. Mehboob Re Rolling Mills\n2.M/s. Mujahid Enterprises Re – Rolling Mills\n3.M/s. New Sabri Re Rolling Mills\n4.M/s. Rehbar Steel Re Rolling Mill"
  },
  {
    "title": "RESORT / HOTELS",
    "content": "p1.M/s. Dream World Limited\n2.M/s. Resort, Hotel & Golf Co\n3.M/s. Hotel Metropole\n4.M/s. Hotel Taj Palace\n5.M/s. Millennium Entertainment Pvt Ltd"
  },
  {
    "title": "REAL ESTATE LAND MARKS",
    "content": "1.M/s. UBL Tower\n2.M/s. Center Point\n3.M/s. JGI House\n4.M/s. HBL Plaza\n5.M/s. Pakistan Stock Exchange Building"
  },
  {
    "title": "REIT REAL ESTATE PROJECTS",
    "content": "1.M/s. Rahat Residency\n2.M/s. Globe Residency\n3.M/s. Naya Nazimabad Apartments\n4.M/s. Meezan Center\n5.M/s. Gymkhana REIT Apartment"
  },
  {
    "title": "RICE MILLS",
    "content": "1.M/s. Meskay &a femtee Pvt Ltd\n2.M/s. Intertrade Export Rice Mills\n3.M/s. Matco Rice Processing Pvt Ltd\n4.M/s. Hassan Ali Rice Export Company\n5.M/s. Al Asad Rice Mills\n6.M/s. M.Feroz Rice Mill\n7.M/s. Matco Rice Processing Pvt Ltd\n8.M/s. Karim Rice Processing\n9.M/s. Own Rice Mills\n10.M/s. Thahim Rice Mill\n11.M/s. Yasrab Rice Mills\n12.M/s. Amar Rice Mill\n13.M/s. Moula Madad Rice Mill\n14.M/s. Asia Rice Mill\n15.M/s. Shahbaz Rice Mills\n16.M/s. Pak Rice Mill\n17.M/s. Masood Farid Rice Mills\n18.M/s. Kashif Rice Mills\n19.M/s. Meskay & Famtee Trading Co. (Pvt.) Ltd.\n20.M/s. Pakistan Rice Complex\n21.M/s. Faizan Rice Mill\n22.M/s. Khokhar Rice Mills\n23.M/s. Bilal Rice Factory.\n24.M/s. Ocean Rice Mills\n25.M/s. Al Rehman Rice Mills\n26.M/s. M. Ibraheem International Rice.\n27.M/s. Madina Rice Mills\n28.M/s. Haroon Rice Mills\n29.M/s. Punjab Rice Mills\n30.M/s. Al-Khair Rice Mills\n31.M/s. AL Karam Rice Traders\n32.M/s. Bhindar Rice Mills\n33.M/s. Meezan Rice Brokerage\n34.M/s. Agroman Crystal Rice Mill\n35.M/s. Zamindara Rice Mills\n36.M/s. Malik Rice Mills\n37.M/s. Mashallah Rice Mills\n38.M/s. Tufail Rice Mills\n39.M/s.Lasani Rice Mills\n40.M/s. Abu Bakar Rice Mills\n41.M/s. Ali Rice Traders\n42.M/s. Malik Rice Mills\n43.M/s. Sana Rice Mills\n44.M/s. Usman Rice Corporation\n45.M/s. Muhammad Rice Mills\n46.M/s. Mazco Industries\n47.M/s. Baba Enterprises\n48.M/s. Farhan Mastoi Rice Mills\n49.M/s. Al-Manzoor Rice Mills\n50.M/s. Younus Rice Mills\n51.M/s. Malik Rice Mills\n52.M/s. Faisal Industries Pvt Ltd\n53.M/s. Moon Rice Corporation\n54.M/s. Al Asif Rice Mills\n55.M/s. Matco Foods Pvt Ltd\n56.M/s. SM Traders\n57.M/s. Rizcom\n58.M/s. Brukfield"
  },
  {
    "title": "RUBBER & PLASTIC INDUSTRIES",
    "content": "1.M/s. Atlas Rubber & Palstic Industries (Desktop)\n2.M/s. Mehran Bottlers Limited\n3.M/s. Natural GumIndustries Pvt Ltd\n4.M/s. A.R.Plastic\n5.M/s. Al-Madinah Plastic\n6.M/s. Khwaja Marble Works\n7.M/s. Continental Plastic Industries Pvt Ltd.\n8.M/s. Bismillah Plastic House\n9.M/s. Ghauri Tyer & Tube Pvt Ltd\n10.M/s. Tri-Pack Films Limited.\n11.M/s. General Tyre & Rubber Co of Pakistan Ltd\n12.M/s. CBM Plastics Pvt Ltd\n13.M/s. Macpac Films Limited\n14.M/s. Sheild Corporation Limited\n15.M/s. Fujicolor Pakistan Laboratories Pvt Ltd\n16.M/s. Fuji Film Pvt Ltd\n17.M/s. Rahbar Plastic Industries. (Land & Building)\n18.M/s. Adeel Plastic House\n19.M/s. Khan Plastic Industries & Sadiq Internationl Group\n20.M/s. Chawla Rubber & Plastic Industry"
  },
  {
    "title": "SHARING BUSINESS (STOCK EXCHANGE)",
    "content": "1.M/s. Central Deporitry Company (CDC)\n2.M/s. Karachi Stock Exchange"
  },
  {
    "title": "SHOPPING CENTER / SHOPS",
    "content": "1.Mian Shoes Material Store\n2.M/s. Sonex Tiles & Ceremaics\n3.M/s. Shami Shopping Center\n4.M/s. Super General Store\n5.M/s. Shafi Furniture House\n6.M/s. Ali Baba Shopping Mall\n7.M/s. Naheed Super Market"
  },
  {
    "title": "SILK MILLS",
    "content": "1.M/s. Al Abid Silk Mills Ltd\n2.M/s. Rashid Silk Mills\n3.M/s. Ketrex Silk Mills Pvt Ltd\n4.M/s. M. M. Silk Mills Private Limited"
  },
  {
    "title": "SONY SHOWROOM",
    "content": "1.M/s. Digital Vision"
  },
  {
    "title": "SPINNING MILLS",
    "content": "1.M/s. Ellcot Spinning Mills Ltd.\n2.M/s. Faisal Spinning Mills Ltd\n3.M/s. Popular Spinning Mills Ltd\n4.M/s. Umar Spining Mills Pvt Ltd\n5.Landmark Spinning Industries Limited\n6.M/s. Fahad Jawaid Spining Mills Pvt Ltd"
  },
  {
    "title": "SPORT FACTORIES",
    "content": "1.M/s. Remington Sports\n2.M/s. Fancy Sports\n3.M/s. Parwasha Sports"
  },
  {
    "title": "STEEL MILLS",
    "content": "1.M/s. Mehboob Steel\n2.M/s. Deenar Steel Mills\n3.M/s. Amreeli Steel Ltd\n4.M/s. Peoples Steel Mill\n5.M/s. Al Noor Steel\n6.M/s. International Steel Limited.\n7.M/s. Ittehad Steel Industries\n8.M/s. Aisha Steel Mills Ltd\n9.M/s. Memon Steel Trading\n10.M/s. Pakistan Steel Imports Company\n11.M/s. M.A.C. Steel Corporation\n12.M/s. Solid Steel Ltd\n13.M/s. Abbas Steel Group Pvt Ltd\n14.M/s. Data Steel Pipes Industries (Pvt.) Ltd.\n15.M/s. Lucky Star Steel Industries Pvt Ltd\n16.M/s. Hannan Steel\n17.M/s. Makkah Steel\n18.M/s. Kamal Steel Mills\n19.M/s. Majeed & Sons Steels Pvt Ltd\n20.M/s. AMK Steel Pvt Ltd\n21.M/s. Insaaf Steel Farnas\n22.M/s. Khawaja Steel\n23.M/s. Syed Brothers Steel Industry\n24.M/s. Rawaha Steel Casting\n25.M/s. EAMK Steel\n26.M/s. Pakistan Steel Mill Corporation Ltd\n27.M/s. Pakistan Steel Mills\n28.M/s. Bolan Casting Ltd\n29.M/s. International Industries Ltd\n30.M/s. S.A.J Steel Pvt Ltd\n31.M/s. Faizan Steel\n32.M/s. Umar Steel Industries\n33.M/s. ASNM Group\n34.M/s. Diamond Steel\n35.M/s. Wah Brass\n36.M/s. Agha Steel"
  },
  {
    "title": "SUGAR MILLS",
    "content": "1.M/s. Al Abbas Sugar Mills Ltd\n2.M/s. Habib Sugar Mills Ltd\n3.M/s. Mirpurkhas Sugar\n4.M/s. Adam Sugar Mills Ltd\n5.M/s. Deharki Sugar Mills Limited\n6.M/s. Adnan Sugar Mills\n7.M/s. Al-Noor Sugar Mills Ltd\n8.M/s. Shahmurad Suger Mills Ltd\n9.M/s. Digri Sugar Mills Ltd\n10.M/s. Haq Bahu Sugar Mills Private Limited\n11.M/s. Abdullah Shah Ghazi Sugar Mills Ltd\n12.M/s. Farhan Sugar Mills\n12.M/s. AL Sugar Mills Ltd\n13.M/s. Shujabad Agro Industries Pvt Ltd\n14.M/s. SGM Sugar Mill Ltd\n15.M/s. Sindh AbadGar Sugar Mills Ltd\n16.M/s. Mehran Sugar Mills\n17.M/s. RYK Sugar Mill\n18.M/s. JDW\n19.M/s. Faran Sugar Mills\n20.M/s. Patoki Sugar Mill\n21.M/s. Hussain Sugar Mill\n22.M/s. Kamalia Sugar Mill"
  },
  {
    "title": "SECURITY COMPANY",
    "content": "1.M/s. Shehzada Securities Services Pvt Ltd"
  },
  {
    "title": "TEA FACTORIES",
    "content": "1.M/s. Tapal Tea (Pvt) Ltd"
  },
  {
    "title": "TEXTILE MILLS",
    "content": "1.M/s. Fazal Sardar Textile Mill\n2.M/s. Shafi Texcel Limited\n3.M/s. Suria Tex\n4.M/s. Saleem Textile\n5.M/s. Sohni Weaving Factory\n6.M/s. Pak Textile Industries\n7.M/s. Sattari Garmnets\n8.M/s. Crown Textile\n9.M/s. Shabbir Industries\n10.M/s. Bari Textile Mills Pvt Ltd\n11.M/s. Cambridge Garments Industries Pvt. Ltd.\n12.M/s. Idrees Textile Mills Ltd\n13.M/s. Crown Textile\n14.M/s. Gatron Industries Limited\n15.M/s. Mettatex Pvt Ltd\n16.M/s. Naveena Exports Limited\n17.M/s. Novatex Ltd\n18.M/s. Syntronics Limited.\n19.M/s. J & P Coats Pakistan (Pvt) Ltd\n20.M/s. Ismail Industries Ltd. X 8 – M\n21.M/s. Liberty Mills Limited\n22.M/s. Indus Dyeing & Manufacturing Co. Ltd\n23.M/s. Indus Home Limited\n24.M/s. Naveena Exports Limited\n25.M/s. Naveena Industries Pvt Ltd\n26.M/s. Azmat Garments\n27.M/s. Standard Textile Mills\n28.M/s. Aziz Garments\n29.M/s. Supreme Textile Industries Pvt Ltd\n30.M/s. Amalgamated Textile\n31.M/s. ZAFF Textiles\n32.M/s. Zeba Textile\n33.M/s. Amalgamated Textile\n34.M/s. Amalgamated Textile\n35.M/s. Quetta Textile Mills Ltd\n36.M/s. Al-Abbas Steel (Thatta) X 2 – S\n37.M/s. Regent Textile Industries Ltd\n38.M/s. Nadeem Textile Mills Limited X 5 – M\n39.M/s. Riaz Textile Mills Limited\n40.M/s. Century 21 Textile & Sportswear\n41.M/s. Textile Inn\n42.M/s. Century 21 Textiles & Sports Wear (Pvt) Ltd.\n43.M/s. Silver Textile Factory\n44.M/s. Premium Textile Mills Ltd\n45.M/s. A-One Textile & Towel Industries\n46.M/s. Tulip Towel Industries\n47.M/s. Noor Leather (Pvt.) Ltd.\n48.M/s. Sanaullah Textile Mills\n49.M/s. Kashir Textile\n50.M/s. Zainab Textile & Mag Textile Corporation\n51.M/s. Rashid Textile Printing Ind Ltd\n52.M/s. Zainab Textile & Mag Textile Corporation\n53.M/s. Gadoon Textile Mills Ltd.\n54.M/s. Afroze Textile Ind. (Pvt) Ltd.\n55.M/s. Al- Karam Textile Mills Ltd\n56.M/s. Bhanero Textile Mills Ltd\n57.M/s. Blessed Textile Limited\n58.M/s. Gadoon Textile Pvt Ltd\n59.M/s. Kohinoor Textile Mills\n60.M/s. Massod Textile Mills Ltd\n61.M/s. Saif Textile Mills Limited\n62.M/s. Shahtaj Textile Limited\n63.M/s. Gul Ahmed Textile MillsLimited\n64.M/s. Gul Ahmed Textile Mills Ltd\n65.M/s. Din Leather Pvt Ltd\n66.M/s. Din Textile Mills Ltd ( Unit- 1 & 2 )\n67.M/s. Bhanero Textile Mills Ltd\n67.M/s. Yunus Textile Mills Ltd\n68.M/s. Quetta Textile Mills\n70.M/s. Daimond International\n71.M/s. Equity Textile Mills\n72.M/s. Feroze1888 Mills Ltd\n73.M/s. Fazal Textile Mills Limited\n74.M/s.Indigo Textile |(Pvt) Limited\n75.M/s. Bari Textile Mills\n76.M/s. Aman & Sons Textile Mills\n77.M/s. Idrees Textile Mills Ltd\n78.M/s. Abdul Wahab Textile\n79.M/s. Zaman Textile Mills Ltd\n80.M/s. Sohni Textile Industries\n81.M/s. Amsons Textile Mills Pvt Ltd\n82.M/s. Kassim Textile Pvt Ltd\n83.M/s. Faith Textile Mills\n84.M/s. Salfi Textile Mills Ltd\n85.M/s. Quality Textile Mills Ltd\n86.M/s. Ahmed Oriental Textile Mills\n87.M/s. Maya Textile Mills.\n88.M/s. Saasoh Textile Croporation Pvt Ltd\n89.M/s. Idrees Textile Mills Ltd\n90.M/s. Sanuallah Textile Mills\n91.M/s. Fasion knit Industries\n92.M/s. Shabbir Industries\n93.M/s. Khan Fillinf Station\n94.M/s. A-One Textile & Towel Industries\n95.M/s. Gatron Industries Ltd\n96.M/s. Hantex\n97.M/s. Awan Textile Mills\n98.M/s. Image Textile Pvt Limited\n99.M/s. Ummi Textile (Pvt) Limited\n100.M/s. Kamal Textile Mills X 2 – S\n101.M/s. Kamal Textiles Mills Private Limited\n102.M/s. N. R. Textile Mills\n103.M/s. A.I. Textiles\n104.M/s. Nimra Textiles\n105.M/s. Rana Textiles\n106.M/s. Salamn Textile\n107.M/s. Fashion Art International Taqees Pvt Ltd.\n108.M/s. Mount Fuji Textile Ltd.\n109.M/s. China Textile\n110.M/s. M. Yahya M. Yousuf Bari\n111.M/s. B.K. Saadaan Pvt Ltd\n112.M/s. Angora Textile Mills Ltd\n113.M/s. Asjad Textile Pvt Ltd\n114.M/s. Mujtaba Textile\n115.M/s. Meraj Pvt Ltd\n116.M/s. T,F Apperals\n117.M/s. Kassim Textiles Pvt Ltd\n118.M/s. Amalgamated Textile\n119.M/s. Umer Textile\n120.M/s. Sapphire Textile Mills\n121.M/s. Sapphire Fibers Ltd\n122.M/s. Reliance Cotton & Spinning Mills\n123.M/s. AL Karam Towel Industries Pvt Ltd\n124.M/s. Akhtar Textile\n125.M/s. Ebrahim Textile Mills Pvt Ltd\n126.M/s. Orient Textile Mills Ltd\n127.M/s. Agar Textile Pvt Ltd\n128.M/s. Umar Textile\n129.M/s. Stallion Textile Pvt Ltd\n130.M/s. S.M Traders\n131.M/s. Rainbow Hosiery Pvt Ltd\n132.M/s. Maguari Textile\n133.M/s. Al Rahim Textile Industries Ltd\n134.M/s. Al Falah Textile Mills\n135.M/s. Tata Group\n136.M/s. Umer Group\n137.M/s. Zaman Group\n138.M/s. Premium Textile\n139.M/s. JK Spinning Mills\n140.M/s. Siddiqsons Ltd\n141.M/s. Hantex\n142.M/s. Artistic\n143.M/s. Sapphire Textile mills\n144.M/s. Orient Textile Mills Ltd\n145.M/s. Ebrahim Textile Mills Pvt Ltd\n\n1.M/s. Fazal Sardar Textile Mill\n2.M/s. Shafi Texcel Limited\n3.M/s. Suria Tex\n4.M/s. Saleem Textile\n5.M/s. Sohni Weaving Factory\n6.M/s. Pak Textile Industries\n7.M/s. Sattari Garmnets\n8.M/s. Crown Textile\n9.M/s. Shabbir Industries\n10.M/s. Bari Textile Mills Pvt Ltd\n11.M/s. Cambridge Garments Industries Pvt. Ltd.\n12.M/s. Idrees Textile Mills Ltd\n13.M/s. Crown Textile\n14.M/s. Gatron Industries Limited\n15.M/s. Mettatex Pvt Ltd\n16.M/s. Naveena Exports Limited\n17.M/s. Novatex Ltd\n18.M/s. Syntronics Limited.\n19.M/s. J & P Coats Pakistan (Pvt) Ltd\n20.M/s. Ismail Industries Ltd. X 8 – M\n21.M/s. Liberty Mills Limited\n22.M/s. Indus Dyeing & Manufacturing Co. Ltd\n23.M/s. Indus Home Limited\n24.M/s. Naveena Exports Limited\n25.M/s. Naveena Industries Pvt Ltd\n26.M/s. Azmat Garments\n27.M/s. Standard Textile Mills\n28.M/s. Aziz Garments\n29.M/s. Supreme Textile Industries Pvt Ltd\n30.M/s. Amalgamated Textile\n31.M/s. ZAFF Textiles\n32.M/s. Zeba Textile\n33.M/s. Amalgamated Textile\n34.M/s. Amalgamated Textile\n35.M/s. Quetta Textile Mills Ltd\n36.M/s. Al-Abbas Steel (Thatta) X 2 – S\n37.M/s. Regent Textile Industries Ltd\n38.M/s. Nadeem Textile Mills Limited X 5 – M\n39.M/s. Riaz Textile Mills Limited\n40.M/s. Century 21 Textile & Sportswear\n41.M/s. Textile Inn\n42.M/s. Century 21 Textiles & Sports Wear (Pvt) Ltd.\n43.M/s. Silver Textile Factory\n44.M/s. Premium Textile Mills Ltd\n45.M/s. A-One Textile & Towel Industries\n46.M/s. Tulip Towel Industries\n47.M/s. Noor Leather (Pvt.) Ltd.\n48.M/s. Sanaullah Textile Mills\n49.M/s. Kashir Textile\n50.M/s. Zainab Textile & Mag Textile Corporation\n51.M/s. Rashid Textile Printing Ind Ltd\n52.M/s. Zainab Textile & Mag Textile Corporation\n53.M/s. Gadoon Textile Mills Ltd.\n54.M/s. Afroze Textile Ind. (Pvt) Ltd.\n55.M/s. Al- Karam Textile Mills Ltd\n56.M/s. Bhanero Textile Mills Ltd\n57.M/s. Blessed Textile Limited\n58.M/s. Gadoon Textile Pvt Ltd\n59.M/s. Kohinoor Textile Mills\n60.M/s. Massod Textile Mills Ltd\n61.M/s. Saif Textile Mills Limited\n62.M/s. Shahtaj Textile Limited\n63.M/s.Gul Ahmed Textile MillsLimited\n64.M/s. Gul Ahmed Textile Mills Ltd\n65.M/s. Din Leather Pvt Ltd\n66.M/s. Din Textile Mills Ltd ( Unit- 1 & 2 )\n67.M/s. Bhanero Textile Mills Ltd\n67.M/s. Yunus Textile Mills Ltd\n68.M/s. Quetta Textile Mills\n70.M/s. Daimond International\n71.M/s. Equity Textile Mills\n72.M/s. Feroze1888 Mills Ltd\n73.M/s. Fazal Textile Mills Limited\n74.M/s.Indigo Textile |(Pvt) Limited\n75.M/s. Bari Textile Mills\n76.M/s. Aman & Sons Textile Mills\n77.M/s. Idrees Textile Mills Ltd\n78.M/s. Abdul Wahab Textile\n79.M/s. Zaman Textile Mills Ltd\n80.M/s. Sohni Textile Industries\n81.M/s. Amsons Textile Mills Pvt Ltd\n82.M/s. Kassim Textile Pvt Ltd\n83.M/s. Faith Textile Mills\n84.M/s. Salfi Textile Mills Ltd\n85.M/s. Quality Textile Mills Ltd\n86.M/s. Ahmed Oriental Textile Mills\n87.M/s. Maya Textile Mills.\n88.M/s. Saasoh Textile Croporation Pvt Ltd\n89.M/s. Idrees Textile Mills Ltd\n90.M/s. Sanuallah Textile Mills\n91.M/s. Fasion knit Industries\n92.M/s. Shabbir Industries\n93.M/s. Khan Fillinf Station\n94.M/s. A-One Textile & Towel Industries\n95.M/s. Gatron Industries Ltd\n96.M/s. Hantex\n97.M/s. Awan Textile Mills\n98.M/s. Image Textile Pvt Limited\n99.M/s. Ummi Textile (Pvt) Limited\n100.M/s. Kamal Textile Mills X 2 – S\n101.M/s. Kamal Textiles Mills Private Limited\n102.M/s. N. R. Textile Mills\n103.M/s. A.I. Textiles\n104.M/s. Nimra Textiles\n105.M/s. Rana Textiles\n106.M/s. Salamn Textile\n107.M/s. Fashion Art International Taqees Pvt Ltd.\n108.M/s. Mount Fuji Textile Ltd.\n109.M/s. China Textile\n110.M/s. M. Yahya M. Yousuf Bari\n111.M/s. B.K. Saadaan Pvt Ltd\n112.M/s. Angora Textile Mills Ltd\n113.M/s. Asjad Textile Pvt Ltd\n114.M/s. Mujtaba Textile\n115.M/s Meraj Pvt Ltd\n116.M/s. T,F Apperals\n117.M/s. Kassim Textiles Pvt Ltd\n118.M/s. Amalgamated Textile\n119.M/s. Umer Textile\n120.M/s Sapphire Textile Mills\n121.M/s Sapphire Fibers Ltd\n122.M/s Reliance Cotton & Spinning Mills\n123.M/s AL Karam Towel Industries Pvt Ltd\n124.M/s Akhtar Textile\n\n1.M/s. Fazal Sardar Textile Mill\n2.M/s. Shafi Texcel Limited\n3.M/s. Suria Tex\n4.M/s. Saleem Textile\n5.M/s. Sohni Weaving Factory\n6.M/s. Pak Textile Industries\n7.M/s. Sattari Garmnets\n8.M/s. Crown Textile\n9.M/s. Shabbir Industries\n10.M/s. Bari Textile Mills Pvt Ltd\n11.M/s. Cambridge Garments Industries Pvt. Ltd.\n12.M/s. Idrees Textile Mills Ltd\n13.M/s. Crown Textile\n14.M/s. Gatron Industries Limited\n15.M/s. Mettatex Pvt Ltd\n16.M/s. Naveena Exports Limited\n17.M/s. Novatex Ltd\n18.M/s. Syntronics Limited.\n19.M/s. J & P Coats Pakistan (Pvt) Ltd\n20.M/s. Ismail Industries Ltd. X 8 – M\n21.M/s. Liberty Mills Limited\n22.M/s. Indus Dyeing & Manufacturing Co. Ltd\n23.M/s. Indus Home Limited\n24.M/s. Naveena Exports Limited\n25.M/s. Naveena Industries Pvt Ltd\n26.M/s. Azmat Garments\n27.M/s. Standard Textile Mills\n28.M/s. Aziz Garments\n29.M/s. Supreme Textile Industries Pvt Ltd\n30.M/s. Amalgamated Textile\n31.M/s. ZAFF Textiles\n32.M/s. Zeba Textile\n33.M/s. Amalgamated Textile\n34.M/s. Amalgamated Textile\n35.M/s. Quetta Textile Mills Ltd\n36.M/s. Al-Abbas Steel (Thatta) X 2 – S\n37.M/s. Regent Textile Industries Ltd\n38.M/s. Nadeem Textile Mills Limited X 5 – M\n39.M/s. Riaz Textile Mills Limited\n40.M/s. Century 21 Textile & Sportswear\n41.M/s. Textile Inn\n42.M/s. Century 21 Textiles & Sports Wear (Pvt) Ltd.\n43.M/s. Silver Textile Factory\n44.M/s. Premium Textile Mills Ltd\n45.M/s. A-One Textile & Towel Industries\n46.M/s. Tulip Towel Industries\n47.M/s. Noor Leather (Pvt.) Ltd.\n48.M/s. Sanaullah Textile Mills\n49.M/s. Kashir Textile\n50.M/s. Zainab Textile & Mag Textile Corporation\n51.M/s. Rashid Textile Printing Ind Ltd\n52.M/s. Zainab Textile & Mag Textile Corporation\n53.M/s. Gadoon Textile Mills Ltd.\n54.M/s. Afroze Textile Ind. (Pvt) Ltd.\n55.M/s. Al- Karam Textile Mills Ltd\n56.M/s. Bhanero Textile Mills Ltd\n57.M/s. Blessed Textile Limited\n58.M/s. Gadoon Textile Pvt Ltd\n59.M/s. Kohinoor Textile Mills\n60.M/s. Massod Textile Mills Ltd\n61.M/s. Saif Textile Mills Limited\n62.M/s. Shahtaj Textile Limited\n63.M/s.Gul Ahmed Textile MillsLimited\n64.M/s. Gul Ahmed Textile Mills Ltd\n65.M/s. Din Leather Pvt Ltd\n66.M/s. Din Textile Mills Ltd ( Unit- 1 & 2 )\n67.M/s. Bhanero Textile Mills Ltd\n67.M/s. Yunus Textile Mills Ltd\n68.M/s. Quetta Textile Mills\n70.M/s. Daimond International\n71.M/s. Equity Textile Mills\n72.M/s. Feroze1888 Mills Ltd\n73.M/s. Fazal Textile Mills Limited\n74.M/s.Indigo Textile |(Pvt) Limited\n75.M/s. Bari Textile Mills\n76.M/s. Aman & Sons Textile Mills\n77.M/s. Idrees Textile Mills Ltd\n78.M/s. Abdul Wahab Textile\n79.M/s. Zaman Textile Mills Ltd\n80.M/s. Sohni Textile Industries\n81.M/s. Amsons Textile Mills Pvt Ltd\n82.M/s. Kassim Textile Pvt Ltd\n83.M/s. Faith Textile Mills\n84.M/s. Salfi Textile Mills Ltd\n85.M/s. Quality Textile Mills Ltd\n86.M/s. Ahmed Oriental Textile Mills\n87.M/s. Maya Textile Mills.\n88.M/s. Saasoh Textile Croporation Pvt Ltd\n89.M/s. Idrees Textile Mills Ltd\n90.M/s. Sanuallah Textile Mills\n91.M/s. Fasion knit Industries\n92.M/s. Shabbir Industries\n93.M/s. Khan Fillinf Station\n94.M/s. A-One Textile & Towel Industries\n95.M/s. Gatron Industries Ltd\n96.M/s. Hantex\n97.M/s. Awan Textile Mills\n98.M/s. Image Textile Pvt Limited\n99.M/s. Ummi Textile (Pvt) Limited\n100.M/s. Kamal Textile Mills X 2 – S\n101.M/s. Kamal Textiles Mills Private Limited\n102.M/s. N. R. Textile Mills\n103.M/s. A.I. Textiles\n104.M/s. Nimra Textiles\n105.M/s. Rana Textiles\n106.M/s. Salamn Textile\n107.M/s. Fashion Art International Taqees Pvt Ltd.\n108.M/s. Mount Fuji Textile Ltd.\n109.M/s. China Textile\n110.M/s. M. Yahya M. Yousuf Bari\n111.M/s. B.K. Saadaan Pvt Ltd\n112.M/s. Angora Textile Mills Ltd\n113.M/s. Asjad Textile Pvt Ltd\n114.M/s. Mujtaba Textile\n115.M/s Meraj Pvt Ltd\n116.M/s. T,F Apperals\n117.M/s. Kassim Textiles Pvt Ltd\n118.M/s. Amalgamated Textile\n119.M/s. Umer Textile\n120.M/s Sapphire Textile Mills\n121.M/s Sapphire Fibers Ltd\n122.M/s Reliance Cotton & Spinning Mills\n123.M/s AL Karam Towel Industries Pvt Ltd\n124.M/s Akhtar Textile"
  },
  {
    "title": "TOBACCO COMPANIES",
    "content": "1.M/s. Pakistan Tobacco Company Ltd\n2.M/s. Lakson Tabacco"
  },
  {
    "title": "TOOTHPASTE COMPANIES",
    "content": "1. M/s. Colgate Palmolive Pak Ltd."
  },
  {
    "title": "TILES",
    "content": "1.M/s. Shabbir Tiles & Ceremaics Ltd"
  },
  {
    "title": "WEAVNG FACTORIES & TOWEL FACTORIES",
    "content": "1.M/s. Prosperity Weaving Mills Ltd.\n2.M/s. Hasham Towels\n3.M/s. Fine Weaving & Towel Industry\n4.M/s. Sohni Weaving Factory\n5.M/s. L.K Towel Industries\n6.M/s. Lucky Reliable Towels\n7.M/s. Saleem Weaving Factory\n8.M/s. Zulfiqar Weaving & Towels"
  },
  {
    "title": "WIRING FACTORIES",
    "content": "1.KARAM WIRE INDUSTRIES\n2.M/s. Ikram Electrical Industries"
  },
  {
    "title": "WOOLEN MILLS",
    "content": "1.M/s. Farooq Woolen Mills\n2.M/s. Orient Woolen Mills\n3.M/s. Master Wool Spinners"
  },
  {
    "title": "OTHER CLIENTS",
    "content": "1.M/s. Roma Soft X 3 – S\n2.M/s New Crescent Star Horns & Hoofs Crushing Mills\n3.M/s. Qasim International Container Terminal Ltd\n4.M/s Sana Industries\n5.M/s Gerry’s Dnata Pvt Ltd\n6.M/s Zamn Container"
  }
];

const OurProjects = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection((prev) => (prev === index ? null : index));
  };

  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="relative h-[280px] sm:h-[360px] lg:h-[430px] overflow-hidden">
        <img src="/Images/48.png" alt="Our Projects"
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0b1f3a]/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff8d09]">
              MYK Associates
            </p>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Our Projects
            </h1>
            <div className="mt-6 h-1 w-20 bg-[#ff8d09]" />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#ff8d09]">
            Industry Experience
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#0b1f3a] sm:text-4xl">
            Projects Across Diverse Industries
          </h2>
          <div className="mx-auto mb-6 mt-6 h-1 w-16 bg-[#ff8d09]" />
          <p className="leading-8 text-slate-600">
            Explore MYK Associates' project experience across multiple industries
            and business sectors.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="space-y-4">
            {projectSections.map((section, index) => {
              const isOpen = openSection === index;

              return (
                <div
                  key={`${section.title}-${index}`}
                  className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[#ff8d09] shadow-lg"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleSection(index)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-7 sm:py-6 ${
                      isOpen ? "bg-[#0b1f3a]" : "bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span className={`hidden h-10 w-10 min-w-10 items-center justify-center rounded-lg text-sm font-bold text-white sm:flex ${
                        isOpen ? "bg-[#ff8d09]" : "bg-[#0b1f3a]"
                      }`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2 className={`text-base font-bold sm:text-lg lg:text-xl ${
                        isOpen ? "text-white" : "text-[#0b1f3a]"
                      }`}>
                        {section.title}
                      </h2>
                    </div>

                    <span className={`flex h-10 w-10 min-w-10 items-center justify-center rounded-full text-2xl font-light ${
                      isOpen
                        ? "bg-[#ff8d09] text-white"
                        : "bg-slate-100 text-[#0b1f3a]"
                    }`}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}>
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-200 bg-slate-50 p-5 sm:p-7">
                        <div className="whitespace-pre-line rounded-xl border border-slate-200 bg-white p-5 text-sm leading-8 text-slate-700 shadow-sm sm:p-6 sm:text-base">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="rounded-2xl bg-[#0b1f3a] px-6 py-10 text-center shadow-xl sm:px-10 sm:py-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#ff8d09]">
              MYK Associates
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Experience Across Multiple Industries
            </h2>
            <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-300">
              Our project portfolio reflects professional engagements across a broad range of industries and business sectors.
            </p>
            <div className="mx-auto mt-7 h-1 w-16 bg-[#ff8d09]" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurProjects;