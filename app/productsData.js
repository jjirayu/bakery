// data/productsData.js

const initialProducts = [
    { name: 'แป้งว่าว', price: '35฿',type:'วัตถุดิบ', quantity: 1, image: '/images/แป้งว่าว.jpeg' },
    { name: 'แป้งหงส์ขาว', price: '42฿',type:'วัตถุดิบ', quantity: 1, image: '/images/แป้งหงส์.jpeg' },
    { name: 'แป้งพัด', price: '46฿',type:'วัตถุดิบ', quantity: 1, image: '/images/แป้งพัด.jpeg' },
    { name: 'แป้งบัวแดง', price: '45฿',type:'วัตถุดิบ', quantity: 1, image: '/images/แป้งบัวแดง.jpeg' },
    { name: 'ชาตรามือ ฉลากแดง 400 ก.', price: '75฿',type:'วัตถุดิบ', quantity: 1, image: '/images/ชาตรามือแดง.jpeg' },
    { name: 'ชาตรามือ ชาเขียว 200 ก.', price: '75฿',type:'วัตถุดิบ', quantity: 1, image: '/images/ชาตรามือเขียว.jpeg' },
    { name: 'ชาตรามือ ฉลากทอง 400 ก.', price: '99฿',type:'วัตถุดิบ', quantity: 1, image: '/images/ชาตรามือทอง.jpeg' },
    { name: 'ชาตรามือ ชาแดงอัสสัม 250 ก.', price: '105฿',type:'วัตถุดิบ', quantity: 1, image: '/images/ชาตรามือ ชาแดง.jpg' },
    { name: 'น้ำตาลทรายแดงมิตรผล 1 kg.', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/ทรายแดงมิตรผล.jpeg' },
    { name: 'น้ำตาลทรายขาวมิตรผล 1 kg.', price: '27฿',type:'วัตถุดิบ', quantity: 1, image: '/images/น้ำตาลทรายขาว 1 kg.jpg' },
    { name: 'น้ำตาลทรายมิตรผลเบเกอรี่ 1 kg.', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/น้ำตาลทรายมิตรผลเบเกอรี่.jpg' },
    { name: 'น้ำตาลทรายแดงมิตรผลเบเกอรี่ 1 kg.', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/มิตรผล น้ำตาลทรายแดงเบเกอรี่.jpg' },
    { name: 'น้ำตาลทรายขาวลิน 1 กก.', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/ลินน้ำตาลทรายขาว 1kg.jpg' },
    { name: 'น้ำเชื่อมลองบีชคาราเมล', price: '150฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBCaramel.jpg'},
    { name: 'น้ำเชื่อมลองบีชคลาสสิคคาราเมล', price: '150฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBClassicCaramel.jpg'},
    { name: 'น้ำเชื่อมลองบีชวานิลลา', price: '150฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBVanilla.jpg'},
    { name: 'น้ำเชื่อมลองบีชสตรอเบอรี่', price: '134฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBStrawberry.jpg'},
    { name: 'น้ำเชื่อมลองบีชอัลม่อนอบ', price: '134฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBRoastedAlmond.jpg'},
    { name: 'น้ำเชื่อมลองบีชเฮเซลนัท', price: '134฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBHazelnut.jpg'},
    { name: 'น้ำเชื่อมลองบีชทิรามิสุ', price: '134฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBTiramisu.jpg'},
    { name: 'น้ำเชื่อมลองบีชช็อคโกแลต', price: '144฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBChocolate.jpg'},
    { name: 'น้ำเชื่อมลองบีชราสเบอรี่', price: '145฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBRaspberry.jpg'},
    { name: 'น้ำเชื่อมลองบีชแอปเปิล', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBApple.jpg'},
    { name: 'น้ำเชื่อมลองบีชพีช', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBPeach.jpg'},
    { name: 'น้ำเชื่อมลองบีชลิ้นจี่', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBLychee.jpg'},
    { name: 'น้ำเชื่อมลองบีชบลูโอเชี่ยน', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBBlueOcean.jpg'},
    { name: 'น้ำเชื่อมลองบีชมิ้น', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LBMint.jpg'},
    { name: 'น้ำเชื่อมซินยอริต้าฮาเซลนัท', price: '199฿',type:'วัตถุดิบ', quantity: 1, image: '/images/SenoritaHazelnut.jpg'},
    { name: 'น้ำเชื่อมซินยอริต้าคาราเมล', price: '199฿',type:'วัตถุดิบ', quantity: 1, image: '/images/SenoritaCaramel.jpg'},
    { name: 'น้ำเชื่อมซินยอริต้ามิ้น', price: '199฿',type:'วัตถุดิบ', quantity: 1, image: '/images/SenoritaMint.jpg'},
    { name: 'น้ำเชื่อมซินยอริต้ามะพร้าวน้ำหอม', price: '199฿',type:'วัตถุดิบ', quantity: 1, image: '/images/SenoritaCoconut.jpg'},
    { name: 'น้ำเชื่อมซินยอริต้าเสาวรส', price: '199฿',type:'วัตถุดิบ', quantity: 1, image: '/images/SenoritaPassionFruit.jpg'},
    { name: 'น้ำเชื่อมซินยอริต้าสตรอเบอรี่', price: '199฿',type:'วัตถุดิบ', quantity: 1, image: '/images/SenoritaStrawberry.jpg'},
    { name: 'น้ำเชื่อมซินยอริต้าบลู', price: '199฿',type:'วัตถุดิบ', quantity: 1, image: '/images/SenoritaBlue.jpg'},
    { name: 'น้ำเชื่อมลินบลูเบอรี่', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinBlueberry.jpg'},
    { name: 'น้ำเชื่อมลินคาราเมล', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinCaramel.jpg'},
    { name: 'น้ำเชื่อมลินวนิลา', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinVanilla.jpg'},
    { name: 'น้ำเชื่อมลินพีช', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinPeach.jpg'},
    { name: 'น้ำเชื่อมลินมิกซ์เบอรี่', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinMixedBerry.jpg'},
    { name: 'น้ำเชื่อมลินลิ้นจี่', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinLynchee.jpg'},
    { name: 'น้ำเชื่อมลินมิ้น', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinMint.jpg'},
    { name: 'น้ำเชื่อมลินเลม่อน', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinLemon.jpg'},
    { name: 'น้ำเชื่อมลินฮาเซลนัท', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinHazelnut.jpg'},
    { name: 'น้ำเชื่อมลินบลูคราโซ่', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinBlueCuracao.jpg'},
    { name: 'น้ำเชื่อมลินโคโค่นัทมิ้ล', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinCoconut.jpg'},
    { name: 'น้ำเชื่อมลินสตรอเบอรี่', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinStrawberry.jpg'},
    { name: 'น้ำเชื่อมลินแอปเปิ้ล', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinApple.jpg'},
    { name: 'น้ำเชื่อมลินยูซุ', price: '240฿',type:'วัตถุดิบ', quantity: 1, image: '/images/LinYuzu.jpg'},
    { name: 'ชาเขียวคาวามิ มัทฉะ', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/GreenTeaKawami.jpg'},
    { name: 'ชาเขียวฉุยฟง มัทฉะ', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/GreenTeaChouiFong.jpg'},
    { name: 'ชาเขียวเท็นจู อูจิ มัทฉะ', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/TenjuUjiMatcha.jpg'},
    { name: 'ชาเขียวเท็นจู เกียวโต มัทฉะ', price: '41฿',type:'วัตถุดิบ', quantity: 1, image: '/images/TenjuKyoto.jpg'},
    { name: 'ฮีโร่ถุงขยะดำหนา 28x36', price: '70฿',type:'ของใช้', quantity: 1, image: '/images/ฮีโร่ถุงขยะหนา 28x36.jpeg' },
    { name: 'ฮีโร่ถุงขยะดำหนา 24x30 1 กก.', price: '70฿',type:'ของใช้', quantity: 1, image: '/images/ฮีโร่ถุงขยะหนา 24x30 1 กก.jpeg' },
    { name: 'ฮีโร่ถุงขยะหนา 30x40 50 ถุง.', price: '70฿',type:'ของใช้', quantity: 1, image: '/images/ฮีโร่ถุงขยะหนา 30x40 50 ถุง.jpeg' },
    { name: 'แก้ววิสกี้ Ocean 340 ml', price: '35฿',type:'เครื่องครัว', quantity: 1, image: '/images/แก้ววิสกี้ Ocean 340 ml.jpg' },
    { name: 'กระทะจรวด 36 ซม.', price: '289฿',type:'เครื่องครัว', quantity: 1, image: '/images/กระทะจรวด 36.jpg' },
    { name: 'แก้วน้ำ Ocean 245 ml', price: '10฿',type:'เครื่องครัว', quantity: 1, image: '/images/แก้วน้ำ High ball 245 ml.jpg' },
    { name: 'แก้วน้ำ Ocean Patio 290 ml', price: '20฿',type:'เครื่องครัว', quantity: 1, image: '/images/PATIO HI BALL 290 ml.jpg' },
    { name: 'แก้วน้ำ LONG DRINK 415 ml',type:'เครื่องครัว', price: '35฿', quantity: 1, image: '/images/CHARISMA LONG DRINK.jpg' },
    { name: 'แก้วน้ำ SAN MARINO 290 ml', price: '35฿',type:'เครื่องครัว', quantity: 1, image: '/images/San MARIONO ROCK 290 ml.jpg' },
    { name: 'ซันไลต์เลมอน เทอร์โบ 3.2 ลิตร', price: '155฿',type:'อื่นๆ', quantity: 1, image: '/images/ซันไลต์ 3.2 ลิตร.jpeg' },
    { name: 'ซันไลต์พลัส แอนตี้แบค 2.8 ลิตร', price: '155฿',type:'อื่นๆ', quantity: 1, image: '/images/ซันไลต์พลัส แอนตี้แบค 2.8 ลิตร.jpeg' },
    { name: 'ถ้วยฟอยด์ 3001', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/ถ้วย3001.jpg'},
    { name: 'ถ้วยฟอยด์ 3003', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/3003ชมพู.jpg'},
    { name: 'ถ้วยฟอยด์ 3006 (200 มล.)', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/ฟอย3006.jpg'},
    { name: 'ถ้วยฟอยด์ 3007 (400 มล.)', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/ฟอย3007.jpg'},
    { name: 'ถ้วยฟอย 4001 ไม่มีลาย', price: '32฿',type:'อื่นๆ', quantity: 1, image: '/images/ฟอย4001.jpg'},
    { name: 'ถ้วยฟอย 4001 ชมพูจุด', price: '32฿',type:'อื่นๆ', quantity: 1, image: '/images/ฟอย4001ชมพู.jpg'},
    { name: 'ถ้วยฟอยด์ 4003', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/ถ้วย4003.jpg'},
    { name: 'ถ้วยฟอยด์ 4003 Rose Gold', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/ฟอย4003Rosegold.jpg'},
    { name: 'ถ้วยฟอยด์ 4003 ชมพู', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/ถ้วย4003 หินอ่อนชมพู.jpg'},
    { name: 'ถ้วยฟอยด์ 4003 ลายวัว', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/ถ้วย4003 ลายวัว.jpg'},
    { name: 'ถ้วยฟอยด์ 4003 ลายวัวชมพู', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/ถ้วย4003 ลายวัวชมพู.jpg'},
    { name: 'ถ้วยฟอยด์ 4004', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/ฟอย4004.jpg'},
    { name: 'ถ้วยฟอยด์ Gold 4004', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/ฟอย4004Gold.jpg'},
    { name: 'ถ้วยฟอยด์ Rose Gold 4004', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/ฟอย4004RoseGold.jpg'},
    { name: 'กระทงกระดาษ เลม่อน 2816', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/กระทงเลม่อน.jpg'},
    { name: 'กระทงกระดาษ เบเกอรี่ 2816', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/กระทงเบเกอรี่.jpg'},
    { name: 'กระทงกระดาษ หัวใจ 3219', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/กระทงกระดาษหัวใจ.jpg'},
    { name: 'กระทงกระดาษ สตรอเบอรี่', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/กระทงกระดาษสตรอ.jpg'},
    { name: 'กระทงกระดาษ เลม่อน 3220', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/กระทงเลม่อน.jpg'},
    { name: 'กระทงกระดาษ เบเกอรี่ 3220', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/กระทงเบเกอรี่.jpg'},
    { name: 'JT-B100 650 ml (1 ช่อง)', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/jtb100.jpg'},
    { name: 'JT-B112 650 ml (2 ช่อง)', price: '155฿',type:'บรรจุภัณฑ์', quantity: 1, image: '/images/jtb112.jpg'},
    { name: 'เอสพี ตรา UFM 100 g', price: '155฿',type:'วัตถุดิบ', quantity: 1, image: '/images/SP100G.jpg'},
    { name: 'เอสพี ตรา UFM 1 kg', price: '155฿',type:'วัตถุดิบ', quantity: 1, image: '/images/SP1KG.jpg'},
    { name: 'ผงโกโก้ริช สีเข้ม 500 ก.', price: '188฿',type:'วัตถุดิบ', quantity: 1, image: '/images/โกโก้ริช สีเข้ม 500 ก.jpeg'},
    { name: 'ผงโกโก้ริช สีปกติ 500 ก.', price: '188฿',type:'วัตถุดิบ', quantity: 1, image: '/images/โกโก้ริช สีอ่อน 500 ก.jpeg'},
    { name: 'ผงโกโก้ทิวลิป สีเข้ม 440 ก.', price: '180฿',type:'วัตถุดิบ', quantity: 1, image: '/images/ผงโกโก้ทิวลิป สีเข้ม 440 ก.jpeg'},
    { name: 'ผงโกโก้ทิวลิป สีน้ำตาล 440 ก.', price: '170฿',type:'วัตถุดิบ', quantity: 1, image: '/images/โกโก้ทิวลิป มาตรฐาน.jpg'},
    { name: 'ผงโกโก้แวนฮูเต็น 22-24%  1 กก.', price: '180฿',type:'วัตถุดิบ', quantity: 1, image: '/images/VanHouten1kg.jpg'},
    { name: 'ผงโกโก้แวนฮูเต็น 400 กรัม', price: '180฿',type:'วัตถุดิบ', quantity: 1, image: '/images/VanHouten 400 g.jpg'},
    { name: 'โกโก้แบรี่น้ำตาลเข้ม 1 kg', price: '180฿',type:'วัตถุดิบ', quantity: 1, image: '/images/โกโก้แบรี่น้ำตาลเข้ม.jpg'},
    { name: 'โกโก้แบรี่น้ำตาลอ่อน 1 kg', price: '180฿',type:'วัตถุดิบ', quantity: 1, image: '/images/โกโก้แบรี่น้ำตาลแดง.jpg'},
    { name: 'โกโก้ดัทช์ช้อยส์ 450 g', price: '180฿',type:'วัตถุดิบ', quantity: 1, image: '/images/โกโก้ ดัทช์ ช้อยส์ 450 g.jpg'},
    { name: 'โกโก้เฮอร์ชี่ย์ 450 g', price: '180฿',type:'วัตถุดิบ', quantity: 1, image: '/images/โกโก้เฮอร์ชี่ย์.jpg'},
    { name: 'โกโก้ทิวลิปน้ำตาลแดง 440 g', price: '180฿',type:'วัตถุดิบ', quantity: 1, image: '/images/โกโก้ทิวลิปน้ำตาลแดง.jpg'},
    { name: 'โกโก้ริชชี่ 500 g', price: '180฿',type:'วัตถุดิบ', quantity: 1, image: '/images/โกโก้ริชชี่ 500 g.jpg'},
    
  ];
  
  export default initialProducts;
  