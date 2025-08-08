import React from 'react'
import './Coin.css'

function Coin({ name, image, symbol, price, volume, priceChange, mktCap, vsCurrency }) {
  const currSymbols = { usd: '$', inr: '₹' }
  const currencySymbol = currSymbols[vsCurrency?.toLowerCase()] || ''

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h2>{name}</h2>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{currencySymbol}{price?.toLocaleString() || 0}</p>
          <p className="coin-volume">{currencySymbol}{volume?.toLocaleString() || 0}</p>
          <p className={`coin-percent ${priceChange > 0 ? "green" : "red"}`}>
            {priceChange ? priceChange.toFixed(2) : "0.00"}%
          </p>
          <p className="coin-marketcap">{currencySymbol}{mktCap?.toLocaleString() || 0}</p>
        </div>
      </div>
    </div>
  )
}

function CoinHeader({ vsCurrency }) {
  const displayCurrency = vsCurrency?.toUpperCase() || ""
  return (
    <div className="coin-header-container">
      <div className="coin-header-row">
        <ul className="coin-header">
          <li>Coin</li>
        </ul>
        <ul className="coin-data-header">
          <li>Price ({displayCurrency})</li>
          <li>Volume ({displayCurrency})</li>
          <li>Change (24h)</li>
          <li>Mkt. Cap ({displayCurrency})</li>
        </ul>
      </div>
    </div>
  )
}

export { CoinHeader }
export default Coin
