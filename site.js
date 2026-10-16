// Sayfayı ayarlar.js içindeki bilgilerle doldurur. İçerik değişikliği için bu dosyaya dokunmaya gerek yok.
(function () {
  const A = AYARLAR;
  const bul = (yol) => yol.split(".").reduce((o, k) => (o ? o[k] : ""), A);
  const kacis = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Metin alanları
  document.querySelectorAll("[data-ayar]").forEach((el) => {
    const deger = bul(el.dataset.ayar);
    el.textContent = deger === "" ? "Yakında eklenecek" : deger;
    if (deger === "") el.classList.add("bos");
  });
  document.title = `${A.firma.ad} | ${A.firma.altBaslik} | ${A.firma.bolge}`;
  document.getElementById("yil").textContent = new Date().getFullYear();
  document.getElementById("referansSayisi").textContent = A.referanslar.length + "+";

  // Telefon ve e-posta (boşsa "yakında" yazar)
  const tel = A.iletisim.telefon.trim();
  const eposta = A.iletisim.eposta.trim();
  document.querySelectorAll("[data-iletisim]").forEach((el) => {
    const tur = el.dataset.iletisim;
    const deger = tur === "telefon" ? tel : eposta;
    if (deger) {
      el.textContent = deger;
      el.href = tur === "telefon" ? "tel:" + deger.replace(/[^\d+]/g, "") : "mailto:" + deger;
    } else {
      el.textContent = tur === "telefon" ? "Telefon yakında eklenecek" : "E-posta yakında eklenecek";
      el.classList.add("bos");
    }
  });
  // WhatsApp numarası: ayrı yazılmadıysa telefon kullanılır. "0532..." / "+90 532..." -> "90532..."
  const waNo = (A.iletisim.whatsapp || "").trim() || tel;
  const waAdres = waNo ? "https://wa.me/9" + waNo.replace(/\D/g, "").replace(/^9?0?/, "0") : "";
  if (waAdres) {
    const wa = document.getElementById("whatsapp");
    wa.href = waAdres;
    wa.hidden = false;
  }

  // Hizmet kartları
  document.getElementById("hizmetListesi").innerHTML = A.hizmetler.map((h, i) => `
    <article class="kart">
      <div class="kart-gorsel"><img src="${kacis(h.gorsel)}" alt="" loading="lazy"></div>
      <div class="kart-ic">
        <span class="kart-no">${String(i + 1).padStart(2, "0")}</span>
        <h3>${kacis(h.baslik)}</h3>
        <p>${kacis(h.metin)}</p>
      </div>
    </article>`).join("");

  // Proje kartları
  const projeGorseli = (p) => {
    if (p.onceGorsel && p.gorsel) {
      return `<div class="proje-gorsel cift">
        <figure><img src="${kacis(p.onceGorsel)}" alt="${kacis(p.baslik)} – ${kacis(p.onceEtiket || "Önce")}" loading="lazy"><figcaption>${kacis(p.onceEtiket || "Önce")}</figcaption></figure>
        <figure><img src="${kacis(p.gorsel)}" alt="${kacis(p.baslik)} – ${kacis(p.sonraEtiket || "Sonra")}" loading="lazy"><figcaption>${kacis(p.sonraEtiket || "Sonra")}</figcaption></figure>
      </div>`;
    }
    if (p.gorsel) return `<div class="proje-gorsel"><img src="${kacis(p.gorsel)}" alt="${kacis(p.baslik)}" loading="lazy"></div>`;
    return `<div class="proje-gorsel yok"><svg aria-hidden="true"><use href="#ari"/></svg></div>`;
  };
  document.getElementById("projeListesi").innerHTML = A.projeler.map((p, i) => `
    <article class="proje">
      ${projeGorseli(p)}
      <div class="proje-ic">
        <p class="proje-ust">${kacis(p.yer)} · ${kacis(p.tur)}</p>
        <h3>${kacis(p.baslik)}</h3>
        <p class="proje-metin">${kacis(p.metin)}</p>
        ${p.hikaye ? `<button type="button" class="hikaye-ac" data-proje="${i}">Proje hikâyesi <span aria-hidden="true">→</span></button>` : ""}
      </div>
    </article>`).join("");

  // Hizmet bulucu: belirti seçilince ilgili hizmet gösterilir, "keşif iste" formu o konuyla açar
  const belirtiListesi = document.getElementById("belirtiListesi");
  const bulucuSonuc = document.getElementById("bulucuSonuc");
  belirtiListesi.innerHTML = (A.belirtiler || []).map((b, i) =>
    `<li><button type="button" data-belirti="${i}" aria-pressed="false">${kacis(b.metin)}</button></li>`).join("");
  belirtiListesi.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    belirtiListesi.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    const b = A.belirtiler[btn.dataset.belirti];
    const h = A.hizmetler.find((x) => x.baslik === b.hizmet);
    bulucuSonuc.innerHTML = `
      <p class="bulucu-etiket">İlgili olabilecek hizmet</p>
      <h3>${kacis(h ? h.baslik : b.hizmet)}</h3>
      ${b.aciklama ? `<p class="bulucu-neden"><strong>Neden olur?</strong> ${kacis(b.aciklama)}</p>` : ""}
      ${h ? `<p>${kacis(h.metin)}</p>` : ""}
      <button type="button" class="dugme dugme-koyu" data-konu="${kacis(h ? h.baslik : "Diğer")}">Bu konuda keşif isteyin</button>
      <p class="bulucu-not">Bu bir ön bilgilendirmedir; kesin tespit binanız yerinde incelendikten sonra yapılır.</p>`;
    if (window.innerWidth < 960) bulucuSonuc.scrollIntoView({ block: "nearest" });
  });
  bulucuSonuc.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-konu]");
    if (!btn) return;
    const secim = document.getElementById("konuSecimi");
    secim.value = [...secim.options].some((o) => o.value === btn.dataset.konu) ? btn.dataset.konu : "Diğer";
    document.getElementById("iletisim").scrollIntoView();
    document.querySelector("#iletisimFormu [name=ad]").focus({ preventScroll: true });
  });

  // Proje hikâyesi penceresi
  const hikayePencere = document.getElementById("hikayePencere");
  const hikayeIcerik = document.getElementById("hikayeIcerik");
  document.getElementById("projeListesi").addEventListener("click", (e) => {
    const btn = e.target.closest(".hikaye-ac");
    if (!btn) return;
    const p = A.projeler[btn.dataset.proje];
    const h = p.hikaye;
    const bolum = (baslik, icerik) => (icerik ? `<section><h3>${baslik}</h3>${icerik}</section>` : "");
    hikayeIcerik.innerHTML = `
      ${projeGorseli(p)}
      <div class="hikaye-govde">
        <p class="proje-ust">${kacis(p.yer)} · ${kacis(p.tur)}${h.tarih ? " · " + kacis(h.tarih) : ""}</p>
        <h2 id="hikayeBaslik">${kacis(p.baslik)}</h2>
        ${bolum("Durum", h.durum ? `<p>${kacis(h.durum)}</p>` : "")}
        ${bolum("Yapılan çalışmalar", h.calismalar && h.calismalar.length ? `<ul>${h.calismalar.map((c) => `<li>${kacis(c)}</li>`).join("")}</ul>` : "")}
        ${bolum("Sonuç", h.sonuc ? `<p>${kacis(h.sonuc)}</p>` : "")}
        ${bolum("Sahadan fotoğraflar", h.galeri && h.galeri.length ? `<div class="hikaye-galeri">${h.galeri.map((g) => `
          <figure><a href="${kacis(g.src)}" target="_blank" rel="noopener"><img src="${kacis(g.src)}" alt="${kacis(g.aciklama || p.baslik)}" loading="lazy"></a>
          ${g.aciklama ? `<figcaption>${kacis(g.aciklama)}</figcaption>` : ""}</figure>`).join("")}</div>` : "")}
        <div class="hikaye-cta">
          <span>Benzer bir sorununuz mu var?</span>
          <a href="#iletisim" class="dugme dugme-koyu" data-kapat>Keşif isteyin</a>
        </div>
      </div>`;
    hikayePencere.showModal();
  });
  hikayePencere.addEventListener("click", (e) => {
    // Kapat düğmesi, alttaki bağlantı veya pencerenin dışına tıklama pencereyi kapatır
    if (e.target === hikayePencere || e.target.closest("[data-kapat]")) hikayePencere.close();
  });

  // Referanslar
  // Logo varsa logo, yoksa kurum adı gösterilir
  document.getElementById("referansListesi").innerHTML = A.referanslar.map((r) => `
    <li class="referans${r.logo ? " logolu" : ""}" title="${kacis(r.ad)}">
      ${r.logo
        ? `<img src="gorseller/referanslar/${kacis(r.logo)}" alt="${kacis(r.ad)}" loading="lazy">`
        : `<span class="referans-ad">${kacis(r.ad)}</span>`}
      <span class="referans-tur">${kacis(r.tur || "")}</span>
    </li>`).join("") + `
    <li class="referans davet"><a href="#iletisim"><strong>Sıradaki referansımız siz olun</strong><span>Teklif alın →</span></a></li>`;
  document.getElementById("referansSayisi2").textContent = A.referanslar.length + "+";

  // Form konu seçenekleri
  document.getElementById("konuSecimi").innerHTML =
    A.hizmetler.map((h) => `<option>${kacis(h.baslik)}</option>`).join("") + "<option>Diğer</option>";

  /*
    Teklif formu iki yoldan gönderilir:
    - WhatsApp: Bilgiler hazır mesaj olarak firmanın WhatsApp numarasına açılır.
    - E-posta : ayarlar.js'te "formAdresi" varsa form servisi üzerinden doğrudan firmanın e-postasına gider;
                yoksa ziyaretçinin kendi e-posta programı hazır mesajla açılır.
  */
  const form = document.getElementById("iletisimFormu");
  const not = document.getElementById("formNot");
  const formAdresi = (A.iletisim.formAdresi || "").trim();
  const bildir = (metin, tur) => { not.textContent = metin; not.className = "form-not tam" + (tur ? " " + tur : ""); };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const kanal = e.submitter && e.submitter.value === "whatsapp" ? "whatsapp" : "eposta";
    if (!form.checkValidity()) {
      bildir(form.kvkk.checked ? "Lütfen ad, telefon ve mesaj alanlarını doldurun." : "Lütfen zorunlu alanları doldurup aydınlatma metnini onaylayın.", "hata");
      form.reportValidity();
      return;
    }
    const v = Object.fromEntries(new FormData(form));
    if (v._bot) { form.reset(); bildir("Talebiniz alındı. Teşekkür ederiz.", "basarili"); return; } // spam botu
    const ozet = `Teklif talebi (web sitesi)\nAd Soyad: ${v.ad}\nTelefon: ${v.telefon}\nİlçe: ${v.ilce || "-"}\nKonu: ${v.konu}\n\n${v.mesaj}`;

    if (kanal === "whatsapp") {
      if (!waAdres) {
        bildir("Firmanın WhatsApp numarası henüz eklenmedi." + (formAdresi || eposta ? " Şimdilik e-posta ile gönderebilirsiniz." : ""), "hata");
        return;
      }
      window.open(waAdres + "?text=" + encodeURIComponent(ozet), "_blank", "noopener");
      bildir("WhatsApp açılıyor. Mesajı göndermeyi unutmayın.", "basarili");
      return;
    }

    if (formAdresi) {
      const butonlar = form.querySelectorAll("button");
      butonlar.forEach((b) => (b.disabled = true));
      bildir("Gönderiliyor…");
      try {
        const yanit = await fetch(formAdresi, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ _subject: "Teklif talebi: " + v.konu, adSoyad: v.ad, telefon: v.telefon, ilce: v.ilce, konu: v.konu, mesaj: v.mesaj, kvkkOnay: "Evet" })
        });
        if (!yanit.ok) throw new Error(yanit.status);
        form.reset();
        bildir("Talebiniz alındı. En kısa sürede size dönüş yapılacak.", "basarili");
      } catch (hata) {
        bildir("Gönderilemedi. Lütfen biraz sonra tekrar deneyin" + (waAdres ? " ya da WhatsApp ile gönderin." : "."), "hata");
      } finally {
        butonlar.forEach((b) => (b.disabled = false));
      }
      return;
    }

    if (eposta) {
      location.href = `mailto:${eposta}?subject=${encodeURIComponent("Teklif talebi: " + v.konu)}&body=${encodeURIComponent(ozet)}`;
      bildir("E-posta programınız açılıyor…");
      return;
    }
    bildir("Firma iletişim bilgileri henüz eklenmediği için form şu an gönderilemiyor.", "hata");
  });

  // Mobil menü
  const btn = document.getElementById("menuAc");
  const menu = document.getElementById("menu");
  const kapat = () => { document.body.classList.remove("menu-acik"); btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", () => {
    const acik = document.body.classList.toggle("menu-acik");
    btn.setAttribute("aria-expanded", String(acik));
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", kapat));

  // Kaydırınca üst menüye arka plan
  const ust = document.getElementById("ust");
  const kontrol = () => ust.classList.toggle("dolu", window.scrollY > 40);
  window.addEventListener("scroll", kontrol, { passive: true });
  kontrol();
})();
