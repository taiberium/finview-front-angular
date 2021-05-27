export interface Quote {
  bookValue: number,
  companyName: string,
  currency: string,
  currencySymbol: string,
  dividend: number,
  dividendPercent: number,
  high52Week: number,
  highDay: number,
  low52Week: number,
  lowDay: number,
  pb: number,
  pe: number,
  peg: number,
  price: number,
  ticker: string,
  type: string
}

/*
* example:
*   {
    "pe": 28.561476,
    "peg": 1.45,
    "pb": 30.648819,
    "bookValue": 4.146,
    "companyName": "Apple Inc.",
    "ticker": "AAPL",
    "type": "EQUITY",
    "currency": "USD",
    "currencySymbol": "$",
    "price": 127.07,
    "low52Week": 78.9075,
    "high52Week": 145.09,
    "highDay": 127.49,
    "lowDay": 126.46,
    "dividend": 0.88,
    "dividendPercent": 0.0069
  }
* */
