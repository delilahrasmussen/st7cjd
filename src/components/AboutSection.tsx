import React from 'react';
import { Users, Award, Clock, MapPin, Plus, Minus } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      category: "About StayTech",
      questions: [
        {
          question: "What is StayTech Hospitality Solutions?",
          answer: "StayTech Hospitality Solutions is a specialized hotel website design agency that helps hotels increase direct bookings and reduce reliance on Online Travel Agencies (OTAs) through professional web solutions. We are founded by IIT graduates and recognized among the world's top 50 digital marketing agencies for hotels."
        },
        {
          question: "What makes StayTech different from other web design agencies?",
          answer: "We specialize exclusively in the hospitality industry, offering deep expertise in hotel booking conversion optimization. Our unique approach includes a 'Pay Only When 100% Satisfied' policy, no advance payments, unlimited revisions during the design phase, and dedicated project managers for every client. We build every project from scratch using modern technologies for optimal performance and security."
        },
        {
          question: "What kind of hotels does StayTech work with?",
          answer: "We work with a wide range of hotels, including luxury hotels, boutique hotels, resorts, and budget hotels, across 15+ countries. Our solutions are tailored to suit the unique needs of each property."
        }
      ]
    },
    {
      category: "Our Services",
      questions: [
        {
          question: "What services does StayTech offer?",
          answer: "We offer a comprehensive suite of digital solutions including custom Web Design, integrated Booking Engine solutions, SEO Optimization, Web Redesign services, Hotel Property Management Systems (PMS), and Analytics services."
        },
        {
          question: "Do you offer custom website design?",
          answer: "Yes, we offer fully custom website designs (Signature plan) tailored to your brand, vision, and guest experience. We also provide template-based (Essence plan) and hybrid (Elevate plan) options that can be extensively customized."
        },
        {
          question: "Can I choose a template and customize it?",
          answer: "Absolutely! You can choose from our collection of 12+ fully functional hotel website templates as a starting point. Every element—colors, fonts, content, images, features, and layout—can be fully customized to match your brand perfectly."
        },
        {
          question: "Do you integrate booking engines? Which ones?",
          answer: "Yes, we integrate commission-free booking engines designed to maximize your direct reservations. Our booking engines support real-time availability, secure payment processing, and are mobile-optimized. We can integrate with various PMS and Channel Managers."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "What is your pricing model?",
          answer: "We offer flexible pricing plans: One-time payment for complete ownership of your website, Annual plans for ongoing support, hosting, and maintenance, and Monthly subscriptions with no upfront costs and the flexibility to cancel anytime."
        },
        {
          question: "Do you require an upfront payment?",
          answer: "No, we do not require any advance payment. You only pay once your website is fully built, tested, and you are 100% satisfied with the result."
        },
        {
          question: "What is the 'Pay Only When 100% Satisfied' policy?",
          answer: "This policy means we begin work on your website without any upfront payment. We deliver the complete, functional website, and you only make the payment once you are fully satisfied with the final product. This includes unlimited revisions during the design phase."
        }
      ]
    },
    {
      category: "Process & Delivery",
      questions: [
        {
          question: "What is StayTech's website design process?",
          answer: "Our process involves 7 key steps: Discovery & Strategy, Design Plan Selection, Design & User Experience, Development, Quality Assurance & Testing, Launch & Deployment, and Ongoing Support & Optimization (for relevant plans)."
        },
        {
          question: "How long does it take to build a website?",
          answer: "We aim for fast delivery, with many projects completed within 7 days, especially for template-based designs. The exact timeline depends on the complexity and scope of your project."
        },
        {
          question: "Do you offer revisions?",
          answer: "Yes, we offer unlimited revisions during the design phase to ensure the final product perfectly aligns with your vision and business goals."
        }
      ]
    },
    {
      category: "Technical Aspects",
      questions: [
        {
          question: "Are your websites mobile-friendly?",
          answer: "Yes, all our websites are built with a mobile-first approach, ensuring perfect optimization and a seamless experience across all devices, including smartphones, tablets, and desktops."
        },
        {
          question: "Are your websites SEO optimized?",
          answer: "Yes, our websites are built with SEO best practices in mind, including semantic HTML structure, meta tags, alt tags for images, and clean URL structures to help your hotel rank higher on search engines."
        },
        {
          question: "Do you provide hosting and maintenance?",
          answer: "Yes, hosting and maintenance are included in our annual and monthly plans. For one-time payment plans, 1-year hosting and maintenance are included, with an annual fee thereafter."
        }
      ]
    }
  ];
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: '200+', label: 'Hotels Served' },
    { icon: <Award className="w-6 h-6" />, number: '5.0', label: 'Average Rating' },
    { icon: <Clock className="w-6 h-6" />, number: '7', label: 'Days Average Delivery' },
    { icon: <MapPin className="w-6 h-6" />, number: '15+', label: 'Countries Served' }
  ];

  const team = [
    {
      name: 'Manish Kumar',
      position: 'Founder & CEO',
      image: '/src/assets/manish.png',
      description: 'B Tech, M Tech, Computer Science, IIT Roorkee'
    },
    {
      name: 'Nidhi Thakur',
      position: 'Lead Designer',
      image: '/src/assets/nidhi.png',
      description: 'Award-winning UI/UX specialist'
    },
    {
      name: 'Aniruddh Singh',
      position: 'Head of Marketing',
      image: '/src/assets/aniruddh.jpg',
      description: '10+ Years in Digital Marketing'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            About StayTech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering hotels with technology-driven solutions that drive bookings and enhance guest experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#0A2463] mb-4 font-poppins">
                Why StayTech is Different
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At StayTech, we stand apart from typical IT companies—we are a specialized hotel website design 
                agency with a deep understanding of what it takes to drive direct room bookings online. 
                Recognized among the world's top 50 digital marketing agencies for hotels, StayTech's reputation 
                for excellence speaks for itself.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our expertise goes beyond building attractive sites; we know how to create high-converting 
                websites that turn visitors into guests. With hundreds of successful hotel websites launched 
                for our clients, we deliver every project with consistent quality and punctuality.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#0A2463] font-poppins">
                Our Commitment to Excellence
              </h4>
              {[
                'Dedicated project manager for every website from start to finish',
                'Top 50 digital marketing agency for hotels worldwide',
                'Hundreds of successful hotel websites delivered',
                'Deep understanding of hotel booking conversion optimization',
                'Consistent quality and punctuality in every project delivery'
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team working"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] rounded-2xl p-6 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm">Happy Hotels</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#5FBDB0] text-white rounded-xl mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-[#0A2463] mb-2 font-poppins">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Our Tech Stack Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
              Our Web Development Tech Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Engineering Your Success with Modern Technologies
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              StayTech builds every project from scratch for top performance, security, and scalability using cutting-edge technologies.
            </p>
          </div>

          {/* Why Build From Scratch */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
              Why Build From Scratch?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🎨', title: 'Unique & Customizable', desc: 'Tailored solutions that reflect your brand' },
                { icon: '📈', title: 'Scalable & Future-Proof', desc: 'Built to grow with your business' },
                { icon: '⚡', title: 'Fast & Lightweight', desc: 'Optimized for speed and performance' },
                { icon: '🛡️', title: 'Secure & Reliable', desc: 'Enterprise-grade security standards' },
                { icon: '🔧', title: 'Feature-Rich', desc: 'Custom functionality for your needs' },
                { icon: '🔍', title: 'SEO/UX Optimized', desc: 'Built for search engines and users' },
                { icon: '🔑', title: 'Full Ownership', desc: 'Complete control over your digital assets' },
                { icon: '🚀', title: 'Performance Optimized', desc: 'Built for maximum speed and efficiency' }
              ].map((advantage, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
                  <div className="text-3xl mb-4">{advantage.icon}</div>
                  <h4 className="font-bold text-[#0A2463] mb-2">{advantage.title}</h4>
                  <p className="text-gray-600 text-sm">{advantage.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Front-End Technology Stack */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
              Front-End Technology Stack
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'React',
                  color: 'from-blue-500 to-cyan-500',
                  description: 'Lightning-fast dynamic interfaces',
                  tools: ['React', 'Redux', 'Redux-Saga', 'RxJS', 'React Native', 'Three.JS', 'Next.js']
                },
                {
                  name: 'Angular',
                  color: 'from-red-500 to-pink-500',
                  description: 'Enterprise-grade applications',
                  tools: ['Angular', 'NgRx', 'NGXS', 'MobX', 'Formly', 'Ionic']
                },
                {
                  name: 'Vue.js',
                  color: 'from-green-500 to-emerald-500',
                  description: 'Progressive web applications',
                  tools: ['Vue.js', 'Vuex', 'Vue Router', 'Nuxt.js', 'Vue CLI', 'Vue Meta']
                },
                {
                  name: 'JavaScript + UI',
                  color: 'from-yellow-500 to-orange-500',
                  description: 'Modern development ecosystem',
                  tools: ['Material UI', 'Ant Design', 'Apollo', 'Jest', 'TypeScript', 'Electron']
                },
                {
                  name: 'Svelte',
                  color: 'from-orange-500 to-red-500',
                  description: 'Compile-time optimized framework',
                  tools: ['Svelte', 'SvelteKit', 'Sapper', 'Rollup', 'Vite', 'Tailwind CSS']
                },
                {
                  name: 'Flutter Web',
                  color: 'from-blue-600 to-indigo-600',
                  description: 'Cross-platform web applications',
                  tools: ['Flutter', 'Dart', 'Firebase', 'Material Design', 'Cupertino', 'Provider']
                }
              ].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4`}>
                    {tech.name.charAt(0)}
                  </div>
                  <h4 className="text-xl font-bold text-[#0A2463] mb-2">{tech.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back-End Technology Stack */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0A2463] text-center mb-12 font-poppins">
              Back-End Technology Stack
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Java',
                  color: 'from-orange-600 to-red-600',
                  description: 'Enterprise-grade backend solutions',
                  tools: ['Spring', 'Hibernate', 'Kafka', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis']
                },
                {
                  name: '.NET',
                  color: 'from-purple-600 to-blue-600',
                  description: 'Microsoft ecosystem solutions',
                  tools: ['.NET Core', 'ASP.NET', 'Azure', 'Stateless Architecture']
                },
                {
                  name: 'Python',
                  color: 'from-blue-600 to-green-600',
                  description: 'Versatile and powerful backend',
                  tools: ['Django', 'Flask', 'FastAPI', 'Celery', 'PostgreSQL', 'MongoDB', 'Docker']
                },
                {
                  name: 'PHP',
                  color: 'from-indigo-600 to-purple-600',
                  description: 'Web-focused development',
                  tools: ['Laravel', 'Symfony', 'Yii2', 'Drupal', 'Elasticsearch', 'REST/GraphQL', 'Docker']
                },
                {
                  name: 'Node.js',
                  color: 'from-green-600 to-teal-600',
                  description: 'JavaScript everywhere',
                  tools: ['NestJS', 'Koa', 'MongoDB', 'PostgreSQL', 'AWS']
                },
                {
                  name: 'Ruby',
                  color: 'from-red-600 to-pink-600',
                  description: 'Elegant web applications',
                  tools: ['Rails', 'Sinatra', 'Hanami', 'Sidekiq', 'GraphQL']
                }
              ].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4`}>
                    {tech.name.charAt(0)}
                  </div>
                  <h4 className="text-xl font-bold text-[#0A2463] mb-2">{tech.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The StayTech Advantage */}
          <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4 font-poppins">The StayTech Advantage</h3>
            <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
              Partnering with StayTech means getting a custom-built, scalable, and secure digital foundation—delivered 
              with leading-edge tools and the expertise to help your business grow.
            </p>
            <a href="#contact" className="bg-[#FFD700] text-[#0A2463] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors transform hover:scale-105 inline-block">
              Ready to Start a Project? Get in Touch!
            </a>
          </div>
        </div>
        {/* Team */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] font-poppins mb-4">
              Meet Our Team
            </h3>
            <p className="text-lg text-gray-600">
              Experienced professionals dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-[#0A2463]/20 to-[#5FBDB0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-[#0A2463] mb-2 font-poppins">
                  {member.name}
                </h4>
                <p className="text-[#5FBDB0] font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2463] font-poppins mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our services, process, and pricing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-[#0A2463] mb-6 font-poppins border-b border-gray-200 pb-3">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex; // Unique index across all FAQs
                    const isOpen = openFAQ === globalIndex;
                    
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A2463]/20"
                        >
                          <span className="font-semibold text-[#0A2463] pr-4">
                            {faq.question}
                          </span>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <Minus className="w-5 h-5 text-[#5FBDB0]" />
                            ) : (
                              <Plus className="w-5 h-5 text-[#5FBDB0]" />
                            )}
                          </div>
                        </button>
                        <div className={`transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}>
                          <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4 font-poppins">
                Still Have Questions?
              </h4>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Our team is here to help! Get in touch for personalized answers about your hotel's specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-[#FFD700] text-[#0A2463] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD700]/90 transition-colors transform hover:scale-105 text-center">
                  Contact Our Team
                </a>
                <a href="tel:+919310495471" className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20 text-center">
                  Call +91 9310495471
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Location */}
        <div className="mt-20 bg-gradient-to-r from-[#0A2463] to-[#5FBDB0] rounded-2xl p-8 text-white text-center">
          <MapPin className="w-8 h-8 mx-auto mb-4 text-[#FFD700]" />
          <h3 className="text-2xl font-bold mb-4 font-poppins">
            Building Long-Term Relationships
          </h3>
          <p className="text-lg text-blue-100 mb-2">
            At StayTech, your success is at the heart of everything we do. Many of our clients have 
            partnered with us for years—testament to our commitment to delivering outstanding results.
          </p>
          <p className="text-blue-100">
            We believe in flexibility and trust, with no long-term contracts or hidden commitments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;