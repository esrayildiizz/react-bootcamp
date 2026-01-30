function FlowerCard({ image, price}) {
  return (
       <div className="card">
      <img src={image} alt="çiçek" />
      <p className="price">{price} ₺</p>
      <button className="add-to-cart-btn">🛒 Sepete Ekle</button>
    </div>
  );
}

export default FlowerCard;