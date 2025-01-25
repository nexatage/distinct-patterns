import sanityClient from "@/sanity/sanityClient";
export async function createOrder(email, orderItems, amount) {
  const order = {
    _type: "order",
    email,
    orderItems: orderItems.map((item) => ({
      _type: "object",
      _key:item._id,
      product: { _type: "reference", _ref: item._id },
      quantity: item.quantity,
      price: item.price,
    })),
    amount,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  return await sanityClient.create(order);
}
export async function getOrders(email) {
  try {
    const query = `*[_type == "order" && email == $email]{
          _id,
          orderItems[]{
            product->{
            _id,name, price, description,images
            },
            quantity,
            price,
            
          },
          amount,
          status,
          createdAt
        }`;

    const orders = await sanityClient.fetch(query, { email });

    return orders;
  } catch (err) {
    console.error(err);
  }
}
