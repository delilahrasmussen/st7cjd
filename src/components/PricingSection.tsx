import React from 'react';
import { Check, Star, Shield } from 'lucide-react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Website Design',
      price: '₹19,999',
      period: 'one-time',
      description: 'Custom Hotel Website Design',
      features: [
        '1-Year Hosting & Maintenance',
        'Six Updates (Year 1)',
        'Logo Design Included',
        'Brochure Design',
        'Content Writing',
        'Up to 12 Pages',
        'Mobile Responsive Design',
        'SEO Optimization',
        'SSL Certificate Included',
        'Year 2+: ₹3,600 hosting, domain and maintenance',
        'Alternative: ₹999/month subscription'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Website + Booking',
      price: '₹39,999',
      period: 'one-time',
      description: 'Bespoke website design + integrated booking engine',
      features: [
        'Everything in Website Design',
        'Up to 24 Pages',
        'Integrated Booking Engine',
        'Real-time Availability System',
        'Secure Payment Processing',
        'Commission-free Bookings',
        'Guest Management System',
        'Year 2+: ₹4,800 annual maintenance',
        'Alternative: ₹1,999/month subscription',
        'No Lock-in Period'
      ],
      popular: true,
      color: 'from-[#0A2463] to-[#5FBDB0]'
    },
    {
      name: 'Complete Solution',
      price: 'Custom',
      period: 'pricing',
      description: 'Custom website, PMS & intelligent analytics',
      features: [
        'Everything in Website + Booking',
        'Complete Property Management System',
        'Intelligent Analytics Dashboard',
        'Revenue Management Tools',
        'Custom Integrations',
        'Dedicated Account Manager',
        'Advanced Reporting',
        'Multi-property Support',
        'Pricing Tailored to Requirements',
        'Enterprise-level Support'
      ],
      popular: false,
      color: 'from-[#FFD700] to-[#0A2463]'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            Choose Your Investment Level
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 mb-8">
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you prefer complete ownership with a one-time investment or the flexibility of monthly payments, 
              we have options that work for your hotel's budget and preferences.
            </p>
            <p className="text-lg text-gray-500">
              All plans include the same high-quality design and development—just choose the payment structure that fits your business model.
            </p>
          </div>
          
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Pay Only When 100% Satisfied</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                plan.popular ? 'border-[#FFD700] ring-2 ring-[#FFD700]/20' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FFD700] text-[#0A2463] px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#0A2463] mb-2 font-poppins">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-[#0A2463]">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] text-white hover:shadow-lg shadow-md'
                    : 'bg-gradient-to-br from-gray-100 to-gray-50 text-gray-700 hover:bg-gradient-to-br hover:from-gray-200 hover:to-gray-100 border border-gray-200'
                }`}>
                  {plan.name === 'Complete Solution' ? 'Get Custom Quote' : 'Choose This Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Surprises Guarantee */}
        <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white text-center">
          <Shield className="w-12 h-12 mx-auto mb-6 text-[#FFD700]" />
          <h3 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">
            Our Commitment to Your Success
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            We believe in earning your trust through results, not contracts. That's why we offer flexible payment options 
            and guarantee your satisfaction before any payment is required.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#0A2463]" />
              </div>
              <h4 className="font-bold mb-3 text-lg">No Advance Payment Required</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Pay only when your website is ready and you're completely satisfied.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#0A2463] font-bold text-xl">∞</span>
              </div>
              <h4 className="font-bold mb-3 text-lg">Unlimited Revisions</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                We make as many adjustments as needed during the design phase until you're satisfied.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#0A2463] font-bold text-xl">✓</span>
              </div>
              <h4 className="font-bold mb-3 text-lg">Flexible Payment Options</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Choose one-time payment for ownership or monthly subscriptions with no long-term contracts.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#0A2463] mb-6 font-poppins">
            Ready to Transform Your Hotel's Digital Presence?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 200+ hotels that have chosen StayTech for their digital transformation. 
            Our clients stay with us because of quality, transparency, and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-[#FFD700] text-[#0A2463] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors transform hover:scale-105 text-center">
              Start Your Project Today
            </a>
            <a href="#contact" className="bg-white border-2 border-[#0A2463] text-[#0A2463] px-8 py-4 rounded-lg font-semibold hover:bg-[#0A2463] hover:text-white transition-colors text-center">
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;