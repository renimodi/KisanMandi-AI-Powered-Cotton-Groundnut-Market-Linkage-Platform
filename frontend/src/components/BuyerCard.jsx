function BuyerCard({ buyer }) {
  return (
    <div className="buyer-card">
      <h3>{buyer.name}</h3>

      <p>
        <strong>Crop:</strong> {buyer.crop}
      </p>

      <p>
        <strong>Location:</strong> {buyer.location}
      </p>

      <p>
        <strong>Price:</strong> ₹{buyer.pricePerQuintal} / quintal
      </p>

      <p>
        <strong>Quantity:</strong> {buyer.minQuantity} -{" "}
        {buyer.maxQuantity} quintals
      </p>

      <button>
        Contact Buyer
      </button>
    </div>
  );
}

export default BuyerCard;
