import React from 'react'
import { ShoppingCart } from 'lucide-react'

export default function DogFoodLanding () {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <div className='bg-gray-50 py-16'>
        <div className='max-w-5xl mx-auto px-6'>
          {/* Heading */}
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-1'>
              What makes us different
            </h1>
            <h2 className='text-4xl font-bold text-gray-900'>
              makes them stronger
            </h2>
          </div>

          {/* Features Grid */}
          <div className='relative mb-12'>
            {/* Desktop Layout */}
            <div className='hidden md:grid md:grid-cols-3 gap-8 items-start'>
              {/* Left Features */}
              <div className='space-y-16 pt-8'>
                <div className='flex items-start gap-3'>
                  <div className='w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg
                      className='w-6 h-6 text-green-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-1'>Real Food</h3>
                    <p className='text-sm text-gray-600'>
                      Wholesome recipes for dogs with real meat and veggies.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg
                      className='w-6 h-6 text-yellow-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-1'>
                      Premium Ingredient
                    </h3>
                    <p className='text-sm text-gray-600'>
                      Elevating pet care with unmatched safety and quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Bowl */}
              <div className='flex justify-center'>
                <div className='w-72 h-72 rounded-full overflow-hidden shadow-2xl border-8 border-white flex'>
                  {/* Left Half */}
                  <div className='w-1/2 h-full overflow-hidden'>
                    <img
                      src='/src/assets/half1.png'
                      alt='Bowl of dog food'
                      className='w-full h-full object-cover scale-125'
                    />
                  </div>

                  {/* Right Half */}
                  <div className='w-1/2 h-full overflow-hidden'>
                    <img
                      src='/src/assets/half2.png'
                      alt='Happy dog'
                      className='w-full h-full object-cover scale-125'
                    />
                  </div>
                </div>
              </div>

              {/* Right Features */}
              <div className='space-y-16 pt-8'>
                <div className='flex items-start gap-3'>
                  <div className='w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg
                      className='w-6 h-6 text-teal-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-1'>Made Fresh</h3>
                    <p className='text-sm text-gray-600'>
                      We prioritize maintaining the integrity of whole foods and
                      nutrients.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg
                      className='w-6 h-6 text-pink-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-1'>
                      Vet Developed
                    </h3>
                    <p className='text-sm text-gray-600'>
                      We work the vet for dog nutrition, leveraging industry
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className='md:hidden space-y-8'>
              <div className='flex justify-center mb-8'>
                <div className='w-64 h-64 rounded-full overflow-hidden shadow-2xl border-8 border-white relative'>
                  <div className='absolute inset-0 flex'>
                    <div className='w-1/2 '>
                      <img
                        src='/src/assets/half1.png'
                        alt='Bowl of dog food'
                        className='w-full h-full object-cover scale-125'
                      />
                    </div>
                    <div className='w-1/2 '>
                      <img
                        src='/src/assets/half2.png'
                        alt='Bowl of dog food'
                        className='w-full h-full object-cover scale-125'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-1 gap-6'>
                <div className='flex items-start gap-3'>
                  <div className='w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0'>
                    <img
                      className='w-6 h-6 text-green-600'
                      src='../src/assets/half1.png'
                      alt='Real Food Icon'
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-1'>Real Food</h3>
                    <p className='text-sm text-gray-600'>
                      Wholesome recipes for dogs with real meat and veggies.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0'>
                    <img
                      className='w-6 h-6 text-yellow-600'
                      src='../src/assets/half2.png'
                      alt='Premium Ingredient Icon'
                    />
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-1'>
                      Premium Ingredient
                    </h3>
                    <p className='text-sm text-gray-600'>
                      Elevating pet care with unmatched safety and quality.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-teal-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-1'>Made Fresh</h3>
                    <p className='text-sm text-gray-600'>
                      We prioritize maintaining the integrity of whole foods and
                      nutrients.
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-pink-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900 mb-1'>
                      Vet Developed
                    </h3>
                    <p className='text-sm text-gray-600'>
                      We work the vet for dog nutrition, leveraging industry
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className='text-center'>
            <button className='bg-orange-500 hover:bg-orange-600 text-white font-medium px-12 py-3 rounded shadow-lg transition-colors duration-200'>
              Get your dog's healthy meal today!
            </button>
            <div className='mt-3 flex items-center justify-center gap-3 text-xs text-gray-500'>
              <span className='flex items-center gap-1'>
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
                30-day money back guarantee
              </span>
              <span className='flex items-center gap-1'>
                <img
                  src='../src/assets/paypal.png'
                  alt='paypal'
                  className='w-6 h-4'
                />
                <img
                  src='../src/assets/visa.png'
                  alt='visa'
                  className='w-6 h-4'
                />
                <img
                  src='../src/assets/mastercard.png'
                  alt='mastercard'
                  className='w-6 h-4'
                />
                <img
                  src='../src/assets/apple.png'
                  alt='apple pay'
                  className='w-6 h-4'
                />
                <img
                  src='../src/assets/gpay.png'
                  alt='google pay'
                  className='w-6 h-4'
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Nutrition Section */}
      <div className='bg-white py-20'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-4 leading-tight'>
                Nutrition is the foundation for longer, healthier lives in dogs.
              </h2>
              <p className='text-gray-600 mb-8 text-sm leading-relaxed'>
                Invest in your dog's future with our scientifically formulated
                nutrient-powered supplements. Give them the nutrition they
                deserve and watch them thrive with vitality, energy, and the joy
                of a longer, healthier life.
              </p>

              <div className='mb-8'>
                <p className='font-bold text-gray-900 mb-4'>Key Points:</p>
                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <span className='text-4xl font-bold text-orange-500 leading-none'>
                      97%
                    </span>
                    <p className='text-sm text-gray-700 pt-1'>
                      Dogs choose our dog food over leading brands because of
                      its real functional ingredients and delicious flavor.
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-4xl font-bold text-orange-500 leading-none'>
                      84%
                    </span>
                    <p className='text-sm text-gray-700 pt-1'>
                      Our dog food provides superior nutrition and a patented
                      probiotic for optimal nutrient absorption.
                    </p>
                  </div>
                  <div className='flex items-start gap-3'>
                    <span className='text-4xl font-bold text-orange-500 leading-none'>
                      92%
                    </span>
                    <p className='text-sm text-gray-700 pt-1'>
                      Our dog food's high protein and fat digestibility
                      contribute to their ideal quality.
                    </p>
                  </div>
                </div>
              </div>

              <button className='bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded shadow-lg transition-colors duration-200'>
                Give your furry friend the gift of wholesome nutrition
              </button>
            </div>

            <div className='flex justify-center'>
              <div className='relative'>
                <img
                  src='../src/assets/dog1.png'
                  alt='Happy dog with food'
                  className='rounded-2xl shadow-2xl w-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gastrointestinal Health Section */}
      <div className='bg-gray-50 py-20'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='order-2 md:order-1'>
              <img
                src='../src/assets/dog21.gif'
                alt='Two dogs eating from bowls'
                className='rounded-2xl shadow-xl w-full'
              />
            </div>

            <div className='order-1 md:order-2'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4 leading-tight'>
                Improve overall gastrointestinal health for better nutrient
                absorption
              </h2>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Through rigorous scientific studies and consultations with
                veterinarians, we have created a breakthrough formula
                exclusively tailored to combat the health challenges prevalent
                in dogs. A staggering 85% of our customers have reported
                significant improvements in their dogs' health after
                incorporating our product into their diet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Prebiotics Section */}
      <div className='bg-white py-20'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-4 leading-tight'>
                Prebiotics nourish the beneficial gut bacteria, supporting
                digestive health
              </h2>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Our dog food formula contains carefully selected prebiotics that
                work in harmony with the gut microbiota, providing the necessary
                nutrients for the growth and maintenance of beneficial bacteria,
                ultimately supporting digestive health.
              </p>
            </div>

            <div className='flex justify-center'>
              <img
                src='../src/assets/dog2.jpg'
                alt='Dog food kibble'
                className='rounded-2xl shadow-xl w-full max-w-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
