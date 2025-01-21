
const currencyCodesWithSymbols = {
  "INR": "INR (₹)",
  "AFN": "AFN (؋)",
  "ALL": "ALL (L)",
  "AMD": "AMD (֏)",
  "ANG": "ANG (ƒ)",
  "AOA": "AOA (Kz)",
  "ARS": "ARS ($)",
  "AUD": "AUD ($)",
  "AZN": "AZN (₼)",
  "BAM": "BAM (KM)",
  "BDT": "BDT (৳)",
  "BGN": "BGN (лв)",
  "BHD": "BHD (ب.د)",
  "BIF": "BIF (₣)",
  "BMD": "BMD ($)",
  "BND": "BND ($)",
  "BRL": "BRL (R$)",
  "CAD": "CAD ($)",
  "CHF": "CHF (CHF)",
  "CNY": "CNY (¥)",
  "CZK": "CZK (Kč)",
  "DKK": "DKK (kr)",
  "EGP": "EGP (£)",
  "EUR": "EUR (€)",
  "GBP": "GBP (£)",
  "AED": "AED (د.إ)",
  "JPY": "JPY (¥)",
  "KES": "KES (KSh)",
  "KRW": "KRW (₩)",
  "MXN": "MXN ($)",
  "NOK": "NOK (kr)",
  "NZD": "NZD ($)",
  "PHP": "PHP (₱)",
  "PKR": "PKR (₨)",
  "PLN": "PLN (zł)",
  "RUB": "RUB (₽)",
  "SAR": "SAR (ر.س)",
  "SEK": "SEK (kr)",
  "SGD": "SGD ($)",
  "THB": "THB (฿)",
  "TRY": "TRY (₺)",
  "USD": "USD ($)",
  "ZAR": "ZAR (R)"
};
let selectInputs = document.querySelectorAll("select");
selectInputs.forEach((selectInput) => {
  Object.keys(currencyCodesWithSymbols).forEach((code) => {
    let option = document.createElement("option");
    option.value = code;
    option.text = currencyCodesWithSymbols[code];
    selectInput.appendChild(option);
  });
});
