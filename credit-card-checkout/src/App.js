import { useEffect, useState } from "react";
import "./App.css";
import paypal from "./paypal.png";
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      price: Math.floor(Math.random() * 100),
      quantity: Math.floor(Math.random() * 5),
    },
    {
      id: 2,
      price: Math.floor(Math.random() * 100),
      quantity: Math.floor(Math.random() * 5),
    },
    {
      id: 3,
      price: Math.floor(Math.random() * 100),
      quantity: Math.floor(Math.random() * 5),
    },
    {
      id: 4,
      price: Math.floor(Math.random() * 100),
      quantity: Math.floor(Math.random() * 5),
    },
    {
      id: 5,
      price: Math.floor(Math.random() * 100),
      quantity: Math.floor(Math.random() * 5),
    },
  ]);

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(
      products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    );
  }, [products]);

  return (
    <div className="App">
      <div className="background_image -z-10"></div>

      <div className="absolute left-1/2 top-1/2 min-h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 opacity-90">
        <div className="rounded-3xl bg-white p-10">
          <div className="flex items-center justify-center gap-x-5">
            <div className="relative flex flex-col items-center">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-green-500 p-2 text-white">
                {" "}
                &#10003;
              </div>
              <div className="absolute top-full">Shipping</div>
            </div>
            <div className="w-[50px] border-2 border-green-500"></div>

            <div className="relative flex flex-col items-center">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-green-500 p-2 text-white">
                {" "}
                &#10003;
              </div>
              <div className="absolute top-full whitespace-nowrap">
                Personal Detail
              </div>
            </div>
            <div className="w-[50px] border-2 border-green-500"></div>

            <div className="relative flex flex-col items-center">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue-500 p-2 text-white">
                {" "}
                3
              </div>
              <div className="absolute top-full text-xl font-bold">Payment</div>
            </div>

            <div className="w-[50px] border-2 border-blue-500"></div>

            <div className="relative flex flex-col items-center">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue-500 p-2 text-white">
                {" "}
                4
              </div>
              <div className="absolute top-full">Review</div>
            </div>
          </div>

          <div className="mt-10 flex justify-around">
            <div className="w-1/2">
              <div className="flex justify-between border-t-2 border-gray-500">
                <h2 className="text-xl font-bold">Shipping</h2>
                <a href="/editbilling" className="text-blue-500">
                  Edit
                </a>
              </div>
              <p>First name Last name</p>
              <p>Address</p>
              <p>Standard Shipping: Free</p>
              <b>Arrive Thursday, 24 March</b>
              <h2 className="mt-10 border-t-2 border-gray-500 text-xl font-bold">
                Payment Method
              </h2>
              <div className="flex flex-col items-center gap-y-2">
                <button className="flex w-full justify-center rounded-md bg-yellow-500">
                  <img src={paypal} alt="" width={100} />
                </button>
                <p>or</p>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full rounded-sm border-2 border-gray-500 p-2"
                />
                <div className="flex w-full gap-x-2">
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="w-1/2 rounded-sm border-2 border-gray-500 p-2"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 rounded-sm border-2 border-gray-500 p-2"
                  />
                </div>
                <div className="flex w-full gap-x-2">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-1/2 rounded-sm border-2 border-gray-500 p-2"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-1/2 rounded-sm border-2 border-gray-500 p-2"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Billing zip code"
                  className="w-full rounded-sm border-2 border-gray-500 p-2"
                />
                <button className="w-full rounded-sm bg-green-600 p-4 text-xl font-bold text-white">
                  PLACE ORDER
                </button>
                <p>
                  By clicking Place Order you agree to the{" "}
                  <a href="./terms" className="text-blue-500">
                    Terms & Conditions
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="w-1/3">
              <div className="border-2 border-gray-500 p-4">
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold">Order Summary</h2>
                  <a href="/editshoppingcart" className="text-blue-500">
                    Edit
                  </a>
                </div>
                <div className="max-h-[400px] overflow-auto border-b-2 border-gray-500">
                  <ul>
                    {products.map((product) => (
                      <li className="mt-10" key={product.id}>
                        <div className="flex">
                          <div className="float-left mr-5 flex min-h-[100px] min-w-[100px] items-center border-2 border-black text-center">
                            Product image
                          </div>
                          <div className="flex w-full flex-col justify-between">
                            <div className="flex justify-between">
                              <b>Product {product.id}</b>
                              <button
                                className="font-bold text-red-500"
                                onClick={() =>
                                  setProducts(
                                    products.filter((p) => p.id !== product.id)
                                  )
                                }
                              >
                                x
                              </button>
                            </div>

                            <p>${product.price}</p>
                            <p>
                              Quantity:
                              <select
                                name=""
                                type="number"
                                defaultValue={product.quantity}
                                onChange={(e) => {
                                  setProducts(
                                    products.map((p) =>
                                      p.id === product.id
                                        ? { ...p, quantity: e.target.value }
                                        : p
                                    )
                                  );
                                }}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>
                      $
                      {products.reduce(
                        (accumulator, product) =>
                          accumulator + product.price * product.quantity,
                        0
                      )}
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                  </div>

                  <div className="flex justify-between">
                    <p>Tax (23%)</p>
                    <p>
                      $
                      {(
                        products.reduce(
                          (accumulator, product) =>
                            accumulator + product.price * product.quantity,
                          0
                        ) * 0.23
                      ).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <b>Order Total</b>
                    <b> ${(subtotal * 1.23).toFixed(2)}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
