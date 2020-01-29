const programmer = { 
  ad : "Berkay", 
  soyad : "Çimşir", 
  email : "berkaycimsir2003@hotmail.com", 
  yas : 16, 
  diller = ["Javascript","C#","Node.JS"],
  adress : { 
    sehir : "Bursa", 
    ülke : "Türkiye", 
    memleket : "Kastamonu", 
    adresYazdır : function(){ 
      console.log(this.sehir,this.ülke,this.memleket); 
    } 
  },
  work : { 
    site : "kodportali", 
    görev : "yazar", 
    workYazdır : function(){ 
      console.log(this.site + "Görevi" + this.görev); 
    } 
  } 
}; 

let value;

value = programmer.ad;  // Console'da Berkay çıktısını verir.
value = programmer.soyad; // Console'da Çimşir çıktısını verir.
value = programmer.yas;  // Console'da 16 çıktısını verir.
value = programmer.email; // Console'da berkaycimsir2003@hotmail.com çıktısını verir.
value = programmer.diller; // Console'da ["Javascript","C#","Node.JS"] çıktısını verir.
value = programmer.adress.sehir; // Console'da Bursa çıktısını verir.
value = programmer.adress.ülke;  // Console'da Türkiye çıktısını verir.
value = programmer.adress.memleket; // Console'da Kastamonu çıktısını verir.
value = programmer.adress.adresYazdır(); // Console'da Bursa Türkiye Kastamonu çıktısını verir.
value = programmer.work.site; // Console'da kodportali çıktısını verir.
value = programmer.work.görev; // Console'da yazar çıktısını verir.
value = programmer.work.workYazdır(); // Console'da kodportali Görevi yazar çıktısını verir.

console.log(value)