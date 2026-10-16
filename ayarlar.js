/*
  SİTE AYARLARI
  -------------
  Firma adı, telefon, e-posta, hizmetler ve projeler SADECE bu dosyadan değiştirilir.
  Sitenin geri kalanı bilgileri buradan okur. Tırnak işaretlerinin (" ") içini değiştirmeniz yeterli.
*/
const AYARLAR = {
  firma: {
    ad: "FİRMA ADI",                 // Örn: "Arı Yapı Mühendislik"
    kisaAd: "FİRMA",                 // Menüde logonun yanında görünür
    altBaslik: "Zemin Mekaniği & Yapı Güçlendirme",
    deneyimYili: 40,
    bolge: "İstanbul",
    kurulusMetni: "40 yılı aşkın saha tecrübesi"
  },

  iletisim: {
    telefon: "",                     // Örn: "0532 123 45 67"  (boş kalırsa "Yakında eklenecek" yazar)
    eposta: "",                      // Örn: "info@firmaadi.com"
    adres: "İstanbul",
    calismaSaatleri: "",             // Örn: "Pazartesi – Cumartesi, 09:00 – 18:00"
    whatsapp: "",                    // Boş kalırsa yukarıdaki telefon numarası kullanılır
    // Teklif formunun e-postaya ulaşması için form servisinin adresi (örn. Formspree):
    // Hesap açıldıktan sonra verilen adres buraya yazılır. Örn: "https://formspree.io/f/abcdwxyz"
    // Boş kalırsa "E-posta ile gönder" düğmesi ziyaretçinin kendi e-posta programını açar.
    formAdresi: ""
  },

  // Hizmet alanları (taslak: babanızın belgelerinden derlendi, kesin liste sonra netleşecek)
  hizmetler: [
    {
      baslik: "Zemin Suyu Drenajı",
      metin: "Temel çevresinde biriken yağmur ve zemin sularının drenaj hatlarıyla yapıdan kalıcı olarak uzaklaştırılması.",
      gorsel: "gorseller/hizmet-drenaj.jpg"
    },
    {
      baslik: "Bodrum ve Temel Su Islahı",
      metin: "Bodrum katlara ve perde duvarlara sızan suların kaynağının tespiti ve kalıcı ıslah çalışmaları.",
      gorsel: "gorseller/hizmet-bodrum.jpg"
    },
    {
      baslik: "Betonarme Güçlendirme",
      metin: "Çatlak ve hasar görmüş kolon, kiriş ve perdelerin çelik levha ve karbon fiber (FRCM) uygulamasıyla güçlendirilmesi.",
      gorsel: "gorseller/hizmet-guclendirme.jpg"
    },
    {
      baslik: "Teras ve Açık Alan Yalıtımı",
      metin: "Açık teras ve çatı alanlarında yağmur sularına karşı su geçirimsizlik uygulamaları.",
      gorsel: "gorseller/hizmet-teras.jpg"
    },
    {
      baslik: "Zemin Mekaniği ve Geoteknik",
      metin: "Zemin sıvılaşması, kayma ve oturma risklerine karşı zemin iyileştirme ve geoteknik uygulamalar.",
      gorsel: "gorseller/giris-santiye.jpg"
    },
    {
      baslik: "Teknik Danışmanlık",
      metin: "Tarihi ve mevcut yapılarda zemin, su ve taşıyıcı sistem sorunları için yerinde inceleme ve raporlama.",
      gorsel: "gorseller/hakkimizda.jpg"
    }
  ],

  // Öne çıkan projeler. "gorsel" boş bırakılırsa fotoğrafsız kart gösterilir.
  projeler: [
    {
      baslik: "Bilim Yaşam Okulları",
      yer: "İstanbul",
      tur: "Zemin suyu ve zemin kayması",
      metin: "Okul binasında zemin suları ve zemin kaymaları önlendi. Bodrum kattaki spor salonu yeniden kullanılır hâle getirildi.",
      gorsel: "gorseller/okul-sonra.jpg",
      onceGorsel: "gorseller/okul-once.jpg",
      // "hikaye" alanı proje kartındaki "Proje hikâyesi" penceresini doldurur. Boş bırakılan bölüm gösterilmez.
      hikaye: {
        tarih: "Ağustos – Eylül 2026",
        durum: "Okulun bodrum kattaki spor salonunun zemininde su birikintileri ve nem lekeleri oluşmuştu.",
        calismalar: ["Zemin sularının ıslahı", "Zemin kaymalarına karşı önlemler"],
        sonuc: "Salon zemini kurudu ve spor salonu yeniden kullanıma hazır hâle geldi."
      }
    },
    {
      baslik: "Türkbükü Otel Villa İnşaatı",
      yer: "Bodrum (Türkbükü), Muğla",
      tur: "Zemin suyu drenajı",
      metin: "Otel villa inşaatının temel alanında biriken zemin sularının drenaj hattıyla uzaklaştırılması.",
      gorsel: "gorseller/saha-boru.jpg",
      onceGorsel: "gorseller/turkbuku-havuz.jpg",
      onceEtiket: "Su birikintisi",
      sonraEtiket: "Drenaj uygulaması",
      hikaye: {
        galeri: [
          { src: "gorseller/turkbuku-hendek-su.jpg", aciklama: "Suyla dolan kazı alanı" },
          { src: "gorseller/turkbuku-kazi.jpg", aciklama: "Temel kazı alanında biriken su" },
          { src: "gorseller/turkbuku-boru-hendek.jpg", aciklama: "Hendeğe drenaj borusu döşenmesi" },
          { src: "gorseller/saha-hendek.jpg", aciklama: "Drenaj hattı boyunca boru döşenmesi" },
          { src: "gorseller/turkbuku-dolgu.jpg", aciklama: "Kazı alanında dolgu çalışması" }
        ],
        tarih: "",
        durum: "Otel villa inşaatının temel kazı alanında zemin suları birikiyordu.",
        calismalar: [
          "Drenaj hendeklerinin kazılması",
          "Hendeklere drenaj borusu döşenmesi",
          "Zemin sularının temel alanından uzaklaştırılması"
        ],
        sonuc: ""
      }
    },
    {
      baslik: "Yeşilköy Konut İnşaatı",
      yer: "Bakırköy",
      tur: "Zemin suyu drenajı",
      metin: "Temel ve perde duvar çevresindeki deniz ve yağış sularının drenaj sistemiyle yapıdan uzaklaştırılması.",
      gorsel: "gorseller/proje-yesilkoy.jpg",
      hikaye: {
        tarih: "",
        durum: "Kil ve az siltten oluşan temel zemininde yağış ve deniz suları birikiyordu. Suya doygun killi zemin zamanla oturma yapabilir; bu da yıllar sonra taşıyıcı sistemde çatlaklara yol açabilir.",
        calismalar: [
          "Temel ve perde duvar çevresine kılçık drenler",
          "Dikey mekanik drenler",
          "Suyun HDPE dren kanallarıyla toplayıcı havuza yönlendirilip tahliye edilmesi"
        ],
        sonuc: "-2 bodrum katta deniz ve yağış suları ıslah edilerek yapıdan uzaklaştırıldı."
      }
    },
    {
      baslik: "Samatya Konut Binası",
      yer: "Fatih",
      tur: "Bodrum su ıslahı",
      metin: "Bodrum perde duvarlarının arkasında biriken sular uzaklaştırıldı, bodrum kat yeniden kullanılır hâle getirildi.",
      gorsel: "gorseller/samatya-sonra.jpg",
      onceGorsel: "gorseller/samatya-once.jpg",
      hikaye: {
        tarih: "",
        durum: "Drenaj hattı olmadığı için yağmur suları toprakta birikip temel seviyesine iniyor ve bodrum perde duvarlarından içeri sızıyordu. Killi zemin kayma riski taşıyordu; zemin suyundaki sülfat donatıda korozyona yol açmıştı.",
        calismalar: [
          "Zemin mekaniği ve geoteknik uygulamalarla temel alanındaki suların uzaklaştırılması",
          "Perde duvar çevresindeki yanal toprak basıncının giderilmesi",
          "Yapı zemininin ve betonarme taşıyıcıların güçlendirilmesi"
        ],
        sonuc: "Temel alanındaki sular uzaklaştırıldı; yapı zemini ve taşıyıcıları güçlendirildi."
      }
    },
    {
      baslik: "Bangladeş Başkonsolosluğu Binası",
      yer: "Gayrettepe",
      tur: "Betonarme güçlendirme",
      metin: "Bodrum ve normal katlardaki kolon ve kirişlerin çelik levha ve karbon fiber uygulamasıyla güçlendirilmesi.",
      gorsel: "gorseller/banglades-18.jpg",
      onceGorsel: "gorseller/banglades-17.jpg",
      onceEtiket: "Uygulama",          // İki fotoğrafın üzerindeki yazılar (boşsa "Önce" / "Sonra")
      sonraEtiket: "Sonuç",
      hikaye: {
        // Hikâye penceresinde gösterilen ek fotoğraflar
        galeri: [
          { src: "gorseller/banglades-20.jpg", aciklama: "Kiriş ve kolonlara çelik lama uygulaması" },
          { src: "gorseller/banglades-19.jpg", aciklama: "Çelik elemanların kaynakla birleştirilmesi" },
          { src: "gorseller/banglades-22.jpg", aciklama: "Çelik lamaların kesilip hazırlanması" },
          { src: "gorseller/banglades-16.jpg", aciklama: "Uygulama sırasında bodrum kat" }
        ],
        tarih: "",
        durum: "Bodrum, zemin ve 1–4. normal katlardaki kolon ve kirişlerde kılcal ve rötre çatlakları vardı. Yapılan incelemede elemanların yaklaşık %75'i sınırlı, %25'i belirgin hasar bölgesinde çıktı.",
        calismalar: [
          "Çatlak türlerinin tek tek tespiti",
          "Çatlaklarda yüksek mukavemetli grout beton uygulaması",
          "Ankraj tijli çelik lama ve köşebent ile güçlendirme",
          "FRP ve FRCM karbon fiber ile güçlendirme"
        ],
        sonuc: "Kolon ve kirişlerin güçlendirme çalışmaları tamamlandı."
      }
    },
    {
      baslik: "Kikiriki Fabrika Binası",
      yer: "Güngören",
      tur: "Güçlendirme ve su ıslahı",
      metin: "-2 bodrum kat kolon ve kirişlerinin güçlendirilmesi ve zemin sularının ıslahı.",
      gorsel: "gorseller/kikiriki-bina.jpg",
      hikaye: {
        tarih: "",
        durum: "-2 bodrum kattaki kolon ve kirişlerde kılcal ve rötre çatlakları vardı. Yapılan incelemede kolonların %74,2'si sınırlı, %25,8'i belirgin hasar bölgesinde çıktı.",
        calismalar: [
          "Çatlaklarda yüksek mukavemetli grout beton uygulaması",
          "Ankraj tijli çelik levha ile güçlendirme",
          "FRP ve FRCM karbon fiber ile güçlendirme",
          "-2 bodrum katta zemin sularının ıslahı",
          "Kikiriki Beyoğlu mağazasında -1 katta yağış ve sarnıç sularının ıslahı"
        ],
        sonuc: "Güçlendirme ve zemin suyu ıslah çalışmaları tamamlandı."
      }
    },
    {
      baslik: "Ümraniye Belediyesi Tesisleri",
      yer: "Ümraniye",
      tur: "Zemin suyu ve teras yalıtımı",
      metin: "Hizmet binası, kültür merkezi ve tesislerde zemin su sızıntıları ve teras alanlarında ıslah çalışmaları.",
      gorsel: "gorseller/umraniye-teras-1.jpg",
      hikaye: {
        galeri: [
          { src: "gorseller/umraniye-teras-2.jpg", aciklama: "Açık teras alanı" },
          { src: "gorseller/umraniye-temel.jpg", aciklama: "Temel alanındaki zemin suyu" }
        ],
        tarih: "",
        durum: "Belediyenin farklı binalarında zemin suyu sızıntıları ve açık teraslardan su geçişi vardı.",
        calismalar: [
          "Hizmet binası açık teraslarında su geçirimsizlik çalışmaları",
          "Yemekhanede zemin ve atıksu sızıntılarının tespiti ve onarımı",
          "Kültür merkezinin asansör kabini ve bodrum katlarında zemin suyu ıslahı",
          "Esentepe Kültür Merkezi'nde zemin suyu ıslahı ve güçlendirme",
          "Tesislerin temel alanındaki basınçlı zemin suyu sızıntılarının ıslahı"
        ],
        sonuc: "Çalışmalar Ümraniye Belediyesi Fen İşleri Müdürlüğü için yapıldı."
      }
    },
    {
      baslik: "Doğtaş Mobilya",
      yer: "Küçükyalı",
      tur: "Zemin mekaniği ve güçlendirme",
      metin: "Doğtaş Mobilya Küçükyalı şubesinde zemin mekaniği uygulamaları ve yapı güçlendirme.",
      gorsel: "gorseller/dogtas-1.jpg",
      hikaye: {
        galeri: [
          { src: "gorseller/dogtas-2.jpg", aciklama: "Zemin çalışmaları" },
          { src: "gorseller/dogtas-3.jpg", aciklama: "Zemin çalışmaları" }
        ],
        tarih: "",
        durum: "",
        calismalar: ["Zemin mekaniği uygulamaları", "Yapı güçlendirme"],
        sonuc: ""
      }
    },
    {
      baslik: "Karaköy Mumcu Han İş Merkezi",
      yer: "Beyoğlu",
      tur: "Zemin mekaniği ve onarım",
      metin: "Tarihi iş merkezinde deniz sularının ıslahı, yapı onarımı ve güçlendirme.",
      gorsel: "gorseller/mumcu-bina.jpg",
      hikaye: {
        galeri: [{ src: "gorseller/mumcu-ic.jpg", aciklama: "İş merkezinin iç mekânı" }],
        tarih: "",
        durum: "Tarihi iş merkezinin zemininde deniz suyu sorunu vardı.",
        calismalar: ["Deniz sularının ıslahı", "Zemin mekaniği uygulamaları", "Yapı onarımı ve güçlendirme"],
        sonuc: "Deniz sularının ıslahı yapıldı."
      }
    }
  ],

  // Hizmet bulucu: ziyaretçi bir belirti seçince ilgili hizmet gösterilir.
  // "hizmet" alanı, yukarıdaki hizmetlerden birinin başlığıyla birebir aynı olmalıdır.
  belirtiler: [
    { metin: "Bodrum katta nem, rutubet kokusu veya su birikmesi", hizmet: "Bodrum ve Temel Su Islahı",
      aciklama: "Yağış suları toprakta birikip temel seviyesine inerek bodruma sızabilir." },
    { metin: "Duvar ve zeminde beyaz tuz lekeleri", hizmet: "Bodrum ve Temel Su Islahı",
      aciklama: "Betona sızan su, içindeki kireci ve tuzu yüzeye taşır; su buharlaşınca beyaz lekeler kalır." },
    { metin: "Yağmurdan sonra perde duvarlardan su sızması", hizmet: "Zemin Suyu Drenajı",
      aciklama: "Drenaj hattı olmayan binalarda yağmur suyu toprakta birikip perde duvarlara yüklenir." },
    { metin: "Kolon ve kirişlerde kılcal ya da büyüyen çatlaklar", hizmet: "Betonarme Güçlendirme",
      aciklama: "Çatlaklar, elemanın taşıyabileceğinden fazla zorlandığının işareti olabilir." },
    { metin: "Paslanmış ve dışarı çıkmış demir donatı", hizmet: "Betonarme Güçlendirme",
      aciklama: "Betona sızan su ve oksijen donatıyı paslandırır; paslanan demir incelir ve betonu çatlatır." },
    { metin: "Terastan alt kata su geçmesi", hizmet: "Teras ve Açık Alan Yalıtımı",
      aciklama: "Teras yüzeyindeki su yalıtımı bozulduğunda yağmur suyu alt katlara geçebilir." },
    { metin: "Zeminde oturma, kayma veya yan yatma", hizmet: "Zemin Mekaniği ve Geoteknik",
      aciklama: "Suya doygun killi zeminler zamanla farklı oturmalar yapabilir." }
  ],

  // Referanslar (babanızın referans belgesindeki kurumlar; kişisel telefon numaraları bilerek eklenmedi)
  // Logo eklemek için: dosyayı "gorseller/referanslar/" klasörüne koyun, adını "logo" alanına yazın.
  // Örnek: logo: "umraniye-belediyesi.png"   |   Logo boş kalırsa kurumun adı yazı olarak görünür.
  // Logoyu yalnızca kurumun izni varsa ekleyin (ayrıntı: gorseller/referanslar/BENIOKU.txt).
  referanslar: [
    { ad: "Ümraniye Belediyesi",        tur: "Kamu",       logo: "" },
    { ad: "Bilim Yaşam Okulları",       tur: "Eğitim",     logo: "" },
    { ad: "Bangladeş Başkonsolosluğu",  tur: "Diplomatik", logo: "" },
    { ad: "Kikiriki",                   tur: "Sanayi",     logo: "" },
    { ad: "Doğtaş Mobilya",             tur: "Ticari",     logo: "" },
    { ad: "Türk Telekom",               tur: "Kurumsal",   logo: "" },
    { ad: "Karaköy Mumcu Han",          tur: "Tarihi yapı", logo: "" },
    { ad: "Halkalı Öz Feza Siteleri",   tur: "Konut",      logo: "" },
    { ad: "Kariye Camii",               tur: "Tarihi yapı · Danışmanlık", logo: "" },
    { ad: "Sultanahmet Otel İnşaatı",   tur: "Turizm",     logo: "" },
    { ad: "Merter Otel İnşaatı",        tur: "Turizm",     logo: "" }
  ]
};
