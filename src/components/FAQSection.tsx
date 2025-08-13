```tsx
import React from 'react';
import { ChevronDown, PlusCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          q: 'What is StayTech Hospitality Solutions?',
          a: 'StayTech is a specialized hotel website design agency that helps hotels increase direct bookings and reduce reliance on Online Travel Agencies (OTAs). We provide comprehensive digital solutions, from custom website design to integrated booking engines and SEO optimization.'
        },
        {
          q: 'What makes StayTech different from other web development agencies?',
          a: 'We specialize exclusively in the hospitality industry, giving us a deep understanding of hotel-specific needs and booking conversion strategies. Our unique selling propositions include a "Pay Only When 100% Satisfied" policy (no advance payment), flexible payment options (one-time, annual, or monthly), a dedicated project manager for every client, and proven expertise in driving direct bookings.'
        }
      ]
    },
    {
      category: 'Services Offered',
      questions: [
        {
          q: 'What services does StayTech offer?',
          a: 'We offer a full suite of digital solutions for hotels, including: Web Design, Integrated Booking Engine solutions, SEO Optimization, Web Redesign services, Hotel Property Management System (PMS) integration, and Analytics services for data-driven insights.'
        },
        {
          q: 'Do you provide integrated booking engines?',
          a: 'Yes, we offer seamless integration of commission-free booking engines directly into your website. This allows guests to book directly with you, helping you save on OTA commissions and manage real-time availability.'
        },
        {
          q: 'Can you help with my hotel\'s SEO?',
          a: 'Absolutely. Our SEO Optimization service focuses on improving your hotel\'s visibility on Google search results, including local SEO, keyword research, and Google My Business optimization, to drive more organic traffic and direct bookings.'
        },
        {
          q: 'I have an old website. Can you redesign it?',
          a: 'Yes, our Web Redesign service transforms outdated hotel websites into modern, mobile-friendly, and high-converting platforms. We address issues like slow loading speeds, poor user experience, and non-responsive designs.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          q: 'How does StayTech\'s payment policy work?',
          a: 'We operate on a "Pay Only When 100% Satisfied" model. This means you do not pay any advance fees. Payment is only required once your website is fully built, tested, and you are completely satisfied with the result. We also offer unlimited revisions during the design phase.'
        },
        {
          q: 'What are your pricing options?',
          a: 'We offer flexible pricing plans: a one-time payment for full ownership (Website Design at ₹18,000, Website + Booking at ₹36,000), annual plans for ongoing support, or all-inclusive monthly subscriptions with no upfront costs. Custom pricing is available for complete solutions including PMS and advanced analytics.'
        },
        {
          q: 'Do I need to sign a long-term contract?',
          a: 'No, we do not require long-term contracts. Our monthly subscription offerings come with no hidden commitments, and you can cancel anytime. We believe in earning your business through quality and results, not contractual obligations.'
        }
      ]
    },
    {
      category: 'Website Design & Process',
      questions: [
        {
          q: 'Do you offer pre-built hotel website templates?',
          a: 'Yes, we have a collection of 12 fully functional hotel website templates. These templates are professionally designed and can serve as a starting point for your website, offering a fast and efficient way to get online.'
        },
        {
          q: 'Are your templates customizable?',
          a: 'Absolutely. Every template is fully customizable. You can adjust colors, fonts, logos, content, images, and even add or remove sections and features to perfectly match your hotel\'s brand identity and specific needs.'
        },
        {
          q: 'Can I get a completely custom website design?',
          a: 'Yes, our "Signature" design option allows for fully custom website designs. Our team will create a one-of-a-kind site tailored entirely to your vision, goals, and guest experience, crafted from the ground up.'
        },
        {
          q: 'What is StayTech\'s website design process?',
          a: 'Our process involves 7 key steps: Discovery & Strategy, Design Plan Selection, Design & User Experience, Development, Quality Assurance & Testing, Launch & Deployment, and Ongoing Support & Optimization. We ensure seamless collaboration and transparent communication throughout.'
        },
        {
          q: 'How long does it take to build a website?',
          a: 'While we offer a "7-Day Delivery" for initial setup and template-based projects, the full development timeline depends on the complexity and scope of your project. Our detailed 7-step process ensures thoroughness, with timelines discussed during the Discovery & Strategy phase.'
        }
      ]
    },
    {
      category: 'Technical Aspects',
      questions: [
        {
          q: 'What technology stack does StayTech use for website development?',
          a: 'We build our websites from scratch using modern, high-performance technologies. Our frontend stack typically includes React, Vite, and Tailwind CSS. For backend solutions, we are proficient in technologies like Java, .NET, Python, PHP, Node.js, and Ruby, ensuring scalable and secure solutions.'
        },
        {
          q: 'Are your websites mobile-friendly and SEO optimized?',
          a: 'Yes, all our websites are built with a mobile-first approach, ensuring perfect optimization and responsiveness across all devices. They are also structured with SEO best practices in mind, including clean code, proper meta tags, and fast loading times to help with search engine rankings.'
        }
      ]
    },
    {
      category: 'Support & Contact',
      questions: [
        {
          q: 'How can I contact StayTech for a consultation?',
          a: 'You can contact us via our website\'s contact form, by phone at +91 9310495471 or +91 9205402295, or by email at info@staytech.com or support@staytech.com. Our business hours are Mon-Fri 9 AM-6 PM and Sat 10 AM-4 PM.'
        },
        {
          q: 'Do you offer ongoing support after the website is launched?',
          a: 'Yes, ongoing support and optimization are available, especially if you choose our "Harmony Plan" (annual support) or "Zero Hassle Plan" (all-inclusive monthly subscription). This includes regular content updates, performance monitoring, and security maintenance.'
        }
      ]
    }
  ];

  const [openCategory, setOpenCategory] = React.useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = React.useState<number | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenQuestion(null); // Close any open question when changing category
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, pricing, and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-8 bg-white rounded-xl shadow-lg border border-gray-100">
              <button
                className="w-full flex justify-between items-center p-6 text-left font-bold text-xl text-[#0A2463] bg-gray-50 rounded-t-xl hover:bg-gray-100 transition-colors"
                onClick={() => toggleCategory(category.category)}
              >
                {category.category}
                <ChevronDown
                  className={`w-6 h-6 transition-transform ${
                    openCategory === category.category ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openCategory === category.category && (
                <div className="p-6 border-t border-gray-200">
                  {category.questions.map((faq, qIndex) => (
                    <div key={qIndex} className="mb-4 last:mb-0">
                      <button
                        className="w-full flex justify-between items-center text-left font-semibold text-lg text-gray-800 hover:text-[#0A2463] transition-colors"
                        onClick={() => toggleQuestion(qIndex)}
                      >
                        {faq.q}
                        <PlusCircle
                          className={`w-5 h-5 text-[#5FBDB0] transition-transform ${
                            openQuestion === qIndex ? 'rotate-45' : ''
                          }`}
                        />
                      </button>
                      {openQuestion === qIndex && (
                        <p className="mt-3 text-gray-600 leading-relaxed">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
```