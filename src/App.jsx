import React from 'react';
import { ShoppingCart, Leaf, Award, Beaker, Sparkles } from 'lucide-react';

export default function DogFoodLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What makes us different<br />makes them stronger
          </h1>
        </div>

        {/* Features Grid with Bowl Image */}
        <div className="relative max-w-5xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Features */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Real Food</h3>
                  <p className="text-sm text-gray-600">Wholesome recipes for dogs with real meat and veggies.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Premium Ingredients</h3>
                  <p className="text-sm text-gray-600">Elevating pet care with unmatched safety and quality.</p>
                </div>
              </div>
            </div>

            {/* Center Bowl Image */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-gradient-to-br from-red-400 to-red-600"></div>
                  <div className="w-1/2 bg-gradient-to-bl from-amber-600 to-amber-800"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>

            {/* Right Features (Hidden on mobile, shown as bottom on mobile) */}
            <div className="space-y-8 md:hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Made Fresh</h3>
                  <p className="text-sm text-gray-600">We prioritize maintaining the integrity of whole foods and nutrients.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Beaker className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Vet Developed</h3>
                  <p className="text-sm text-gray-600">We work the vet for dog nutrition, leveraging industry experience.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right features for desktop */}
          <div className="hidden md:block absolute right-0 top-0 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Made Fresh</h3>
                <p className="text-sm text-gray-600">We prioritize maintaining the integrity<br />of whole foods and nutrients.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                <Beaker className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Vet Developed</h3>
                <p className="text-sm text-gray-600">We work the vet for dog nutrition,<br />leveraging industry experience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2 mx-auto">
            <ShoppingCart className="w-5 h-5" />
            Get your new a healthy meal today!
          </button>
          <p className="text-xs text-gray-500 mt-3">30-day worry-free guarantee</p>
        </div>
      </div>

      {/* Nutrition Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nutrition is the foundation for longer, healthier lives in dogs.
              </h2>
              <p className="text-gray-600 mb-8">
                Food is your dog's base with our scientifically formulated medicine-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-orange-500">97%</span>
                  <p className="text-sm text-gray-700">Dogs receive our dry food over adults joining because of lesser functional ingredients and delicious flavor.</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-orange-500">84%</span>
                  <p className="text-sm text-gray-700">Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-orange-500">92%</span>
                  <p className="text-sm text-gray-700">Our dog food a high protein and fat digestibility contribute to their ideal quality.</p>
                </div>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-200">
                Give your furry friend the gift of wholesome nutrition
              </button>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full max-w-md h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-teal-400 rounded-lg mx-auto mb-4"></div>
                    <div className="w-48 h-48 bg-amber-100 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gastrointestinal Health Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="flex gap-8">
                  <div className="w-32 h-32 bg-gray-600 rounded-full"></div>
                  <div className="w-32 h-32 bg-gray-700 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Improve overall gastrointestinal health for better nutrient absorption
              </h2>
              <p className="text-gray-600">
                Through rigorous scientific studies and collaboration with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges endemic to dogs. A staggering 85% of our customers have observed remarkable enhancements in their pet's health after incorporating our product into their diet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Prebiotics Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Prebiotics nourish the beneficial gut bacteria, supporting digestive health
              </h2>
              <p className="text-gray-600">
                Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients to foster a well-balanced and thriving intestinal ecosystem for optimal digestion health.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md h-96 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl shadow-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}