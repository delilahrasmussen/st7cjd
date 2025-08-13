```tsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'What is StayTech Hospitality Solutions?',
      answer: 'StayTech Hospitality Solutions is a specialized hotel website design agency that helps hotels increase direct bookings and reduce reliance on Online Travel Agencies (OTAs) through professional web solutions. Our unique expertise in the hospitality sector allows us to deliver exceptional results and drive significant growth for our clients.'
    },
    {
      question: 'What makes StayTech different from other web design agencies?',
      answer: 'We specialize exclusively in the hospitality industry, offering deep expertise in hotel booking conversion optimization. Our unique approach includes a "Pay Only When 100% Satisfied" policy, no advance payments, unlimited revisions during the design phase, and dedicated project managers for every client. We build every project from scratch using modern technologies for optimal performance and security.'
    },
    {
      question: 'What kind of hotels does StayTech work with?',
      answer: 'We work with a wide range of hotels, including luxury hotels, boutique hotels, resorts, and budget hotels, across 15+ countries. Our solutions are tailored to suit the unique needs of each property.'
    },
    {
      question: 'What services does StayTech offer?',
      answer: 'We offer a comprehensive suite of digital solutions including custom Web Design, integrated Booking Engine solutions, SEO Optimization, Web Redesign services, Hotel Property Management Systems (PMS), and Analytics services.'
    },
    {
      question: 'Do you offer custom website design?',
      answer: 'Yes, we offer fully custom website designs (Signature plan) tailored to your brand, vision, and guest experience. We also provide template-based (Essence plan) and hybrid (Elevate plan) options that can be extensively customized.'
    },
    {
      question: 'Can I choose a template and customize it?',
      answer: 'Absolutely! You can choose from our collection of 12+ fully functional hotel website templates as a starting point. Every element—colors, fonts, content, images, features, and layout—can be fully customized to match your brand perfectly.'
    },
    {
      question: 'Do you integrate booking engines? Which ones?',
      answer: 'Yes, we integrate commission-free booking engines designed to maximize your direct reservations. Our booking engines support real-time availability, secure payment processing, and are mobile-optimized. We can integrate with various PMS and Channel Managers.'
    },
    {
      question: 'Do you provide SEO services?',
      answer: 'Yes, SEO Optimization is a core service. We focus on improving your hotel\'s visibility in Google search results through keyword research, local SEO (including Google My Business optimization), technical SEO, and performance tracking. Basic SEO is included in all our packages.'
    },
    {
      question: 'What is included in your web redesign service?',
      answer: 'Our web redesign service transforms outdated websites into modern, high-converting platforms. This includes a modern design, mobile-first responsiveness, speed optimization (under 3 seconds load time), improved user experience, SEO optimization, and integrated booking systems.'
    },
    {
      question: 'Do you offer Property Management System (PMS) solutions?',
      answer: 'Yes, we offer complete Hotel PMS solutions. Our PMS integrates room management, guest management, revenue management, and analytics into one intuitive platform to streamline your hotel operations. This is typically part of our "Complete Solution" package.'
    },
    {
      question: 'What kind of analytics do you provide?',
      answer: 'Our analytics service provides detailed data on website performance, booking patterns, guest behavior, and revenue optimization. We track key metrics like website traffic, conversion rates, RevPAR, and provide comprehensive reports to help you make data-driven decisions. Basic analytics are included in all packages, with advanced options available.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing plans: One-time payment for complete ownership of your website; Annual plans for ongoing support, hosting, and maintenance; Monthly subscriptions with no upfront costs and the flexibility to cancel anytime.'
    },
    {
      question: 'Do you require an upfront payment?',
      answer: 'No, we do not require any advance payment. You only pay once your website is fully built, tested, and you are 100% satisfied with the result.'
    },
    {
      question: 'What is the "Pay Only When 100% Satisfied" policy?',
      answer: 'This policy means we begin work on your website without any upfront payment. We deliver the complete, functional website, and you only make the payment once you are fully satisfied with the final product. This includes unlimited revisions during the design phase.'
    },
    {
      question: 'Are there any hidden costs?',
      answer: 'No, we believe in transparent pricing. All costs are clearly outlined in our proposals, and there are no hidden fees.'
    },
    {
      question: 'What happens after the first year of service for one-time payment plans?',
      answer: 'For one-time payment plans, an annual maintenance fee applies from the second year onwards (e.g., ₹3,600 for Website Design, ₹4,800 for Website + Booking). This covers hosting, basic maintenance, and updates.'
    },
    {
      question: 'Can I cancel my monthly subscription anytime?',
      answer: 'Yes, our monthly subscription plans come with no long-term contracts or lock-in periods, allowing you to cancel anytime.'
    },
    {
      question: 'What is StayTech\'s website design process?',
      answer: 'Our process involves 7 key steps: Discovery & Strategy, Design Plan Selection, Design & User Experience, Development, Quality Assurance & Testing, Launch & Deployment, and Ongoing Support & Optimization (for relevant plans).'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'We aim for fast delivery, with many projects completed within 7 days, especially for template-based designs. The exact timeline depends on the complexity and scope of your project.'
    },
    {
      question: 'Do you offer revisions?',
      answer: 'Yes, we offer unlimited revisions during the design phase to ensure the final product perfectly aligns with your vision and business goals.'
    },
    {
      question: 'What technology stack do you use?',
      answer: 'We build our websites using modern technologies including React 18.3.1 with TypeScript for the frontend, Vite 5.4.2 for fast development and optimized builds, and Tailwind CSS 3.4.1 for utility-first styling. We also utilize Lucide React for icons and Google Fonts.'
    },
    {
      question: 'Are your websites mobile-friendly?',
      answer: 'Yes, all our websites are built with a mobile-first approach, ensuring perfect optimization and a seamless experience across all devices, including smartphones, tablets, and desktops.'
    },
    {
      question: 'Are your websites SEO optimized?',
      answer: 'Yes, our websites are built with SEO best practices in mind, including semantic HTML structure, meta tags, alt tags for images, and clean URL structures to help your hotel rank higher on search engines.'
    },
    {
      question: 'Do you provide hosting and maintenance?',
      answer: 'Yes, hosting and maintenance are included in our annual and monthly plans. For one-time payment plans, 1-year hosting and maintenance are included, with an annual fee thereafter.'
    },
    {
      question: 'What kind of support do you offer after launch?',
      answer: 'For clients on ongoing service plans, we provide continuous support including regular content updates, performance monitoring, and conversion improvements. For one-time payment clients, annual maintenance covers essential support.'
    },
    {
      question: 'How can I contact StayTech?',
      answer: 'You can contact us via our website\'s contact form, by phone at +91 9310495471, or by email at info@staytech.com. We also have a live chat available during business hours.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] font-poppins mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-[#0A2463] font-poppins">
                  {faq.question}
                </h3>
                <ChevronDown className="w-6 h-6 text-[#0A2463] transform transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
```