import React from 'react';
import { Check, Star, Shield, Crown, Zap, Sparkles, ArrowRight, Globe, Calendar } from 'lucide-react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Website Design',
      price: '₹19,999',
      period: 'one-time',
      description: 'Custom Hotel Website Design',
      badge: 'Essential',
      badgeColor: 'from-gray-500 to-gray-600',
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
      color: 'from-slate-600 to-slate-700',
      bgGradient: 'from-slate-50 to-gray-50',
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: 'Website + Booking',
      price: '₹39,999',
      period: 'one-time',
      description: 'Bespoke website design + integrated booking engine',
      badge: 'Most Popular',
      badgeColor: 'from-[#FFD700] to-[#FFA500]',
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
      color: 'from-[#0A2463] to-[#5FBDB0]',
      bgGradient: 'from-blue-50 to-teal-50',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      name: 'Complete Solution',
      price: 'Custom',
      period: 'pricing',
      description: 'Custom website, PMS & intelligent analytics',
      badge: 'Enterprise',
      badgeColor: 'from-purple-500 to-indigo-600',
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
      color: 'from-purple-600 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50',
      icon: <Crown className="w-6 h-6" />
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#5FBDB0]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0A2463]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] text-white px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-[#FFD700]" />
            <span className="font-semibold">Transparent Investment Options</span>
            <Sparkles className="w-5 h-5 text-[#FFD700]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2463] font-poppins mb-6 leading-tight">
            Choose Your
            <span className="block bg-gradient-to-r from-[#5FBDB0] to-[#FFD700] bg-clip-text text-transparent">
              Investment Level
            </span>
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-6 mb-8">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Whether you prefer complete ownership with a one-time investment or the flexibility of monthly payments, 
              we have options that work for your hotel's budget and preferences.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              All plans include the same high-quality design and development—just choose the payment structure that fits your business model.
            </p>
          </div>
          
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-3 bg-green-50 border-2 border-green-200 text-green-700 px-8 py-4 rounded-2xl shadow-lg">
            <Shield className="w-6 h-6 text-green-600" />
            <span className="font-bold text-lg">Pay Only When 100% Satisfied</span>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 overflow-hidden ${
                plan.popular 
                  ? 'border-[#FFD700] ring-4 ring-[#FFD700]/20 scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`bg-gradient-to-r ${plan.badgeColor} text-white px-6 py-3 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg`}>
                    <Star className="w-4 h-4 fill-current" />
                    <span>{plan.badge}</span>
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              )}

              {/* Plan Badge for non-popular plans */}
              {!plan.popular && (
                <div className="absolute top-6 right-6 z-20">
                  <div className={`bg-gradient-to-r ${plan.badgeColor} text-white px-4 py-2 rounded-full text-xs font-bold shadow-md`}>
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="relative z-10 p-8 pt-12">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {plan.icon}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] mb-3 font-poppins">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {plan.description}
                  </p>
                  
                  {/* Price Display */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-6 border border-gray-100">
                    <div className="flex items-baseline justify-center mb-2">
                      <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-2 text-lg">
                        {plan.period}
                      </span>
                    </div>
                    {plan.name !== 'Complete Solution' && (
                      <div className="text-sm text-gray-500">
                        Starting from this investment level
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 group/feature">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mt-0.5 group-hover/feature:scale-110 transition-transform duration-200`}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed group-hover/feature:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] text-white hover:shadow-[#0A2463]/25'
                    : plan.name === 'Complete Solution'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-purple-500/25'
                    : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-gray-500/25'
                }`}>
                  {plan.name === 'Complete Solution' ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Crown className="w-5 h-5" />
                      <span>Get Custom Quote</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <span>Choose This Plan</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </button>

                {/* Popular Plan Extra CTA */}
                {plan.popular && (
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500 mb-2">⚡ Most hotels choose this option</p>
                    <div className="flex items-center justify-center space-x-2 text-[#5FBDB0] text-sm font-medium">
                      <Zap className="w-4 h-4" />
                      <span>Includes everything you need to get started</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#5FBDB0]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Guarantee Section */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-[#0A2463] via-[#1e3a8a] to-[#5FBDB0] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#5FBDB0]/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#0A2463]" />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white font-poppins">
                  Our Commitment to Your Success
                </h3>
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#0A2463]" />
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                We believe in earning your trust through results, not contracts. That's why we offer flexible payment options 
                and guarantee your satisfaction before any payment is required.
              </p>

              {/* Guarantee Cards */}
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#0A2463]" />
                  </div>
                  <h4 className="font-bold mb-3 text-lg text-white">No Advance Payment Required</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Pay only when your website is ready and you're completely satisfied with the result.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#0A2463] font-bold text-2xl">∞</span>
                  </div>
                  <h4 className="font-bold mb-3 text-lg text-white">Unlimited Revisions</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We make as many adjustments as needed during the design phase until you're satisfied.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#0A2463] font-bold text-2xl">✓</span>
                  </div>
                  <h4 className="font-bold mb-3 text-lg text-white">Flexible Payment Options</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Choose one-time payment for ownership or monthly subscriptions with no long-term contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] mb-6 font-poppins">
              Why Hotels Choose StayTech
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join 200+ hotels that have transformed their digital presence with our proven approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Risk-Free Approach',
                description: 'See your complete website before any payment',
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                icon: <Crown className="w-8 h-8" />,
                title: 'Hotel Specialists',
                description: 'Deep expertise in hospitality industry',
                gradient: 'from-[#0A2463] to-[#5FBDB0]'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Fast Delivery',
                description: 'Many projects completed within 7 days',
                gradient: 'from-[#FFD700] to-[#FFA500]'
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Proven Results',
                description: '5.0 rating from 200+ satisfied hotels',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group/benefit">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl text-white mb-4 group-hover/benefit:scale-110 transition-transform duration-300 shadow-lg`}>
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-[#0A2463] mb-2 font-poppins">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#0A2463] via-[#1e3a8a] to-[#5FBDB0] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Sparkles className="w-8 h-8 text-[#FFD700]" />
                <h3 className="text-2xl md:text-4xl font-bold font-poppins">
                  Choose a Partner You Can Count On
                </h3>
                <Sparkles className="w-8 h-8 text-[#FFD700]" />
              </div>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of hotels that have transformed their digital presence and increased direct bookings with StayTech.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="#contact" className="group bg-[#FFD700] text-[#0A2463] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#FFD700]/90 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3">
                  <span>Start Your Project Today</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/20 hover:border-white/40">
                  Schedule Free Consultation
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>200+ Hotels Served</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>5.0 Average Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>No Advance Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>IIT Graduate Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;