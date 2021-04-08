let options = {
   width: 1366,
   height: 768,
   background: "red",
   font: {
      size: '18px',
      color: "#fff",
   },
};

console.log(JSON.stringify(options)); // Конвертировать объект в JSON формат
console.log(JSON.parse(JSON.stringify(options))); // обратная операция
