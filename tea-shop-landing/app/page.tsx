import Image from "next/image";
import { FaLeaf, FaShoppingCart, FaMugHot, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('/tea-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>
        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
            Discover the Art of Tea
          </h1>
          <p className="text-xl md:text-2xl text-green-700 mb-8">
            Experience the finest selection of premium teas from around the world
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <FaLeaf className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Organic Selection</h3>
              <p className="text-gray-600">
                Hand-picked organic teas from sustainable farms
              </p>
            </div>
            <div className="text-center p-6">
              <FaMugHot className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Carefully curated high-quality tea leaves
              </p>
            </div>
            <div className="text-center p-6">
              <FaShoppingCart className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Shipping</h3>
              <p className="text-gray-600">
                Fast and secure worldwide delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Featured Teas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Green Sencha",
                price: "$24.99",
                rating: 5,
                image: "/green-tea.jpg"
              },
              {
                name: "Earl Grey",
                price: "$22.99",
                rating: 5,
                image: "/black-tea.jpg"
              },
              {
                name: "Jasmine Pearl",
                price: "$29.99",
                rating: 5,
                image: "/jasmine-tea.jpg"
              },
              {
                name: "Oolong Tea",
                price: "$26.99",
                rating: 5,
                image: "/oolong-tea.jpg"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <div className="w-full h-full bg-green-100" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-bold">{product.price}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(product.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-8">Subscribe to our newsletter for exclusive offers and tea tips</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full text-gray-800"
            />
            <button className="bg-white text-green-800 px-6 py-2 rounded-full hover:bg-green-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
