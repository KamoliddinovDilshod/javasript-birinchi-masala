current = prompt("Pul miqdorini kiriting")-0;

USD = 750 * 10900 ;
EURO = 120 * 12272.64;

result = Math.floor(USD + EURO);

if (current >= result){
  console.log(`Oq yo'l, Alisher!`);
}
else{
  console.log(`Alisher, ozgina sabr qilish kerak bo'lar ekan.`)
}