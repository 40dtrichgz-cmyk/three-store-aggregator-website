import { Heart, House, PawPrint, Ruler, ShieldCheck, Sparkles, Store as StoreIcon, Timer, Truck, Wind } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type StoreSlug = 'knockdown' | 'kiosk' | 'petvilla';

export type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Product = {
  name: string;
  description: string;
  price: number;
  image: string;
};

export type Store = {
  slug: StoreSlug;
  name: string;
  tagline: string;
  description: string;
  tiktokUrl: string;
  facebookUrl: string;
  heroImage: string;
  gallery: string[];
  icon: LucideIcon;
  highlights: Highlight[];
  productsTitle: string;
  products: Product[];
};

const photo = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`;

const KNOCKDOWN_OFFICE = '/images/877949780_122129108547426526_4310658138453031140_n.jpg';
const PET_INDOOR_HOUSE = '/images/858430434_122132632023470322_2802605122565675967_n.jpg';
const PET_DOG_HOUSE = '/images/887751110_122132631981470322_7857260111814387163_n.jpg';
const KIOSK_STAGE = '/images/889986035_122129057103475969_842693158763239133_n.jpg';
const KIOSK_ZERO = '/images/891804913_122129057037475969_3658573197925040594_n.jpg';

export const STORES: Store[] = [
  {
    slug: 'knockdown',
    name: 'บ้าน knockdown',
    tagline: 'บ้านน็อกดาวน์ ประกอบไว ขนส่งง่าย ราคาคุ้มค่า',
    description:
      'เลือกแบบบ้านที่ชอบ ส่งถึงหน้างานในรูปชิ้นส่วนเรียบร้อย แล้วประกอบได้รวดเร็ว ลดเวลาและต้นทุนการก่อสร้างโดยไม่ต้องลดคุณภาพ',
    tiktokUrl: 'https://www.tiktok.com/@7steel.knockdown',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61592795805740',
    heroImage: KNOCKDOWN_OFFICE,
    gallery: [KNOCKDOWN_OFFICE],
    icon: House,
    highlights: [
      {
        title: 'ประกอบเสร็จเร็ว',
        description: 'ชิ้นส่วนผลิตมาพร้อมติดตั้ง ลดระยะเวลาการก่อสร้างหน้างานได้มาก',
        icon: Timer,
      },
      {
        title: 'ขนส่งสะดวก',
        description: 'แพ็คเป็นชิ้นเรียบ ขนส่งได้ง่าย ประหยัดพื้นที่และค่าขนส่ง',
        icon: Truck,
      },
      {
        title: 'เลือกขนาดได้ตามใจ',
        description: 'มีหลายรูปแบบตั้งแต่ 1 ชั้นถึง 2 ชั้น ปรับให้เหมาะกับพื้นที่และงบประมาณ',
        icon: Ruler,
      },
    ],
    productsTitle: 'แบบบ้านตัวอย่าง',
    products: [
      {
        name: 'Knockdown Office 3×4 ม.',
        description: 'แยกห้องทำงานออกจากบ้านหลัก ขนาด 12 ตร.ม. ราคาอ้างอิงเริ่มต้น',
        price: 58000,
        image: KNOCKDOWN_OFFICE,
      },
      {
        name: 'บ้านน็อกดาวน์ 2 ชั้น โมเดิร์น 3 ห้องนอน',
        description: 'ดีไซน์กล่องเรียบหรู มีระเบียงชั้นสอง เพิ่มพื้นที่ใช้สอยได้เต็มที่',
        price: 1290000,
        image: photo('16808496'),
      },
      {
        name: 'บ้านน็อกดาวน์สไตล์ Loft',
        description: 'เพดานสูง หน้าต่างบานใหญ่ รับแสงธรรมชาติเต็มห้อง',
        price: 890000,
        image: photo('4626268'),
      },
      {
        name: 'ศาลาพักผ่อนน็อกดาวน์',
        description: 'ศาลาอเนกประสงค์ในสวน ติดตั้งเร็ว เหมาะกับบ้านพักและรีสอร์ต',
        price: 186000,
        image: photo('4933643'),
      },
    ],
  },
  {
    slug: 'kiosk',
    name: 'Kiosk Counter ขายของ',
    tagline: 'เคาน์เตอร์ขายของพร้อมเปิดร้านได้ทันที',
    description:
      'คิออสก์และเคาน์เตอร์ขายของดีไซน์ทันสมัย ใช้พื้นที่น้อย ติดตั้งง่าย ดึงดูดลูกค้าได้ตั้งแต่แรกเห็น เหมาะสำหรับผู้เริ่มต้นธุรกิจและร้านหน้าร้านทุกขนาด',
    tiktokUrl: 'https://www.tiktok.com/@zo.kiosk',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61594279072639',
    heroImage: KIOSK_ZERO,
    gallery: [KIOSK_ZERO, KIOSK_STAGE],
    icon: StoreIcon,
    highlights: [
      {
        title: 'เปิดขายได้ทันที',
        description: 'ขนาดกะทัดรัด ติดตั้งง่าย ไม่ต้องใช้พื้นที่มาก เริ่มต้นธุรกิจได้เร็ว',
        icon: Timer,
      },
      {
        title: 'ดึงดูดลูกค้า',
        description: 'ดีไซน์โดดเด่น สะดุดตาจากระยะไกล ช่วยให้ลูกค้าเดินเข้ามาอุดหนุนมากขึ้น',
        icon: Sparkles,
      },
      {
        title: 'ทนทานดูแลง่าย',
        description: 'วัสดุแข็งแรง ทำความสะอาดสะดวก คงความสวยงามได้นานตลอดการใช้งาน',
        icon: ShieldCheck,
      },
    ],
    productsTitle: 'เมนูสินค้าตัวอย่าง',
    products: [
      {
        name: 'กาแฟเย็นสูตรเข้มข้น',
        description: 'คั่วเข้ม หอมกลิ่นกาแฟ ดื่มง่ายและขายดีทั้งปี',
        price: 55,
        image: photo('17609723'),
      },
      {
        name: 'ลาเต้ร้อนนมสด',
        description: 'นุ่มละมุน ฟองนมแน่น เมนูยอดนิยมสำหรับลูกค้าทุกวัย',
        price: 60,
        image: photo('5865195'),
      },
      {
        name: 'ชาเขียวนมสดเกล็ดหิมะ',
        description: 'ชาเขียวหอมอ่อน ผสมนมสดและท็อปปิ้งเกล็ดหิมะ',
        price: 50,
        image: photo('35260546'),
      },
      {
        name: 'ขนมปังปิ้งเนยนม',
        description: 'ขนมปังกรอบนอกนุ่มใน ราดเนยและนมข้นหวาน ของว่างที่ขายได้ตลอดวัน',
        price: 35,
        image: photo('5865209'),
      },
    ],
  },
  {
    slug: 'petvilla',
    name: 'บ้านสุนัข บ้านแมว',
    tagline: 'บ้านและที่พักอาศัยอบอุ่นสำหรับสัตว์เลี้ยงของคุณ',
    description:
      'ออกแบบบ้านสุนัขและบ้านแมวจากวัสดุปลอดภัยต่อสัตว์เลี้ยง ระบายอากาศดี ดูแลทำความสะอาดง่าย ให้เพื่อนขนฟูของคุณได้พักผ่อนอย่างมีความสุข',
    tiktokUrl: 'https://www.tiktok.com/@p.spacevil1a',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61594109669325',
    heroImage: PET_DOG_HOUSE,
    gallery: [PET_INDOOR_HOUSE, PET_DOG_HOUSE],
    icon: PawPrint,
    highlights: [
      {
        title: 'วัสดุปลอดภัย',
        description: 'ใช้วัสดุที่อ่อนโยนต่อสัตว์เลี้ยง ไม่มีขอบคมและแข็งแรงต่อการใช้งาน',
        icon: ShieldCheck,
      },
      {
        title: 'ระบายอากาศดี',
        description: 'ออกแบบให้อากาศถ่ายเทได้ดี อบอุ่นในหน้าหนาว เย็นสบายในหน้าร้อน',
        icon: Wind,
      },
      {
        title: 'ดูแลง่ายทุกวัน',
        description: 'ถอดทำความสะอาดได้สะดวก ช่วยให้บ้านของน้องๆ สะอาดและถูกสุขลักษณะ',
        icon: Heart,
      },
    ],
    productsTitle: 'สินค้าตัวอย่าง',
    products: [
      {
        name: 'G4RPZZ บ้านสุนัข GP-MD01',
        description: 'ขนาด 75 × 55 × 65 ซม. หลังคาสีเข้มกันฝน ไม่รวมชามและของเล่น',
        price: 3290,
        image: PET_DOG_HOUSE,
      },
      {
        name: 'G4RPZZ Pet House SKU-SM',
        description: 'ขนาด 50 × 40 × 45 ซม. ดีไซน์ไม้เรียบ เป็นพื้นที่พักผ่อนส่วนตัวของน้องๆ',
        price: 1990,
        image: PET_INDOOR_HOUSE,
      },
      {
        name: 'คอนโดแมว 3 ชั้น',
        description: 'มีคอนโดนอน ที่ลับเล็บ และสะพานเดินเล่นให้น้องแมวปีนป่าย',
        price: 1590,
        image: photo('7726077'),
      },
      {
        name: 'ที่นอนสัตว์เลี้ยงนุ่มพิเศษ',
        description: 'ผ้านุ่มสบาย ซักได้ เหมาะทั้งสุนัขและแมวทุกขนาด',
        price: 390,
        image: photo('6207406'),
      },
    ],
  },
];

export function getStore(slug: StoreSlug): Store {
  const store = STORES.find((item) => item.slug === slug);
  if (!store) throw new Error(`Unknown store: ${slug}`);
  return store;
}
