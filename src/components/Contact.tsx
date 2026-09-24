import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, ArrowRight, Star, ExternalLink, RefreshCw } from 'lucide-react';

interface ContactProps {
  preselectedProjectType?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedProjectType }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Home Office',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionReference, setSubmissionReference] = useState('');

  useEffect(() => {
    if (preselectedProjectType) {
      setFormData((prev) => ({ ...prev, projectType: preselectedProjectType }));
    }
  }, [preselectedProjectType]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s()-]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid contact number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details or garden dimensions';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const ref = `SG-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionReference(ref);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      projectType: 'Home Office',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-[#1E2229] text-white border-b border-[#2C323D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#B7D51F]" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest text-[#B7D51F] uppercase">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Discuss Your Build
          </h2>
          <p className="mt-3 text-neutral-300 text-base leading-relaxed">
            Get in touch with S&amp;G Garden Rooms today for more information, availability, and a free quote.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-[#2C323D] pb-3">
                Contact Us Directly
              </h3>

              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#252A34] border border-[#2C323D] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#B7D51F]" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 uppercase font-semibold tracking-wider">
                      Phone / Mobile
                    </div>
                    <a
                      href="tel:07535156492"
                      className="text-base sm:text-lg font-bold text-white hover:text-[#B7D51F] transition-colors block"
                    >
                      +44 7535 156492 / 07535 156492
                    </a>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      Available Monday &ndash; Saturday for calls &amp; site consultations
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#252A34] border border-[#2C323D] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#B7D51F]" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 uppercase font-semibold tracking-wider">
                      Direct Email
                    </div>
                    <a
                      href="mailto:sggardenrooms@gmail.com"
                      className="text-base font-bold text-white hover:text-[#B7D51F] transition-colors block"
                    >
                      sggardenrooms@gmail.com
                    </a>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      Direct replies within 24 hours
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#252A34] border border-[#2C323D] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#B7D51F]" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 uppercase font-semibold tracking-wider">
                      Workshop &amp; Base Location
                    </div>
                    <div className="text-base font-bold text-white">
                      Coast Road, Peterlee, United Kingdom
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      Serving Peterlee, Durham, Sunderland, Hartlepool &amp; surrounding areas
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href="tel:07535156492"
                  className="flex-1 px-4 py-3 bg-[#B7D51F] hover:bg-[#c6e625] text-[#1E2229] font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 07535 156492</span>
                </a>
                <a
                  href="mailto:sggardenrooms@gmail.com"
                  className="flex-1 px-4 py-3 bg-[#252A34] hover:bg-[#2C323D] text-white border border-[#2C323D] font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#B7D51F]" />
                  <span>Email Us Direct</span>
                </a>
              </div>
            </div>

            {/* Social Proof & Social Link Box */}
            <div className="bg-[#252A34] p-5 border border-[#2C323D] mt-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B7D51F] text-[#B7D51F]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#B7D51F]">
                  100% Recommended
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-normal">
                42 verified recommendations on our social channels from homeowners across Peterlee and the North East.
              </p>
              <div className="mt-3 pt-3 border-t border-[#2C323D] flex items-center justify-between text-xs">
                <span className="text-neutral-400">Social Channel:</span>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#B7D51F] font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>S&amp;G Garden Rooms Facebook</span>
                  <ExternalLink className="w-3 h-3 text-[#B7D51F]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#252A34] border border-[#2C323D] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Request a Free Quote
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Tell us what you have in mind. We will discuss space requirements and provide an honest estimate.
              </p>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#B7D51F] text-[#1E2229] rounded-none mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Quote Request Received!
                  </h4>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. We have logged your request under reference <span className="font-mono text-[#B7D51F] font-bold">{submissionReference}</span> for your <span className="text-white font-semibold">{formData.projectType}</span> build.
                  </p>
                  <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                    We will review your message and contact you via phone or email within 24 hours to discuss options and site access.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2.5 bg-neutral-700 hover:bg-neutral-600 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Enquiry</span>
                    </button>
                    <a
                      href="tel:07535156492"
                      className="px-4 py-2.5 bg-[#B7D51F] text-[#1E2229] hover:bg-[#c6e625] text-xs font-bold flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now: 07535 156492</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                      Full Name <span className="text-[#B7D51F]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. David Richardson"
                      className={`w-full px-3.5 py-2.5 bg-[#1E2229] border text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#B7D51F] transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-[#2C323D]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                        Phone Number <span className="text-[#B7D51F]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="e.g. 07123 456789"
                        className={`w-full px-3.5 py-2.5 bg-[#1E2229] border text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#B7D51F] transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-[#2C323D]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                        Email Address <span className="text-[#B7D51F]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. david@example.co.uk"
                        className={`w-full px-3.5 py-2.5 bg-[#1E2229] border text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#B7D51F] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-[#2C323D]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                      Project Type <span className="text-[#B7D51F]">*</span>
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#1E2229] border border-[#2C323D] text-white text-sm focus:outline-none focus:border-[#B7D51F] transition-colors cursor-pointer"
                    >
                      <option value="Man-Cave / Bar">Man-Cave / Bar</option>
                      <option value="Home Office">Home Office</option>
                      <option value="Sun-Room">Sun-Room</option>
                      <option value="Shed / Workshop">Shed / Workshop</option>
                      <option value="Expandable Building">Expandable Building</option>
                      <option value="Other">Other Custom Build</option>
                    </select>
                  </div>

                  {/* Message / Dimensions Required */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                      Message / Dimensions Required <span className="text-[#B7D51F]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Please mention approximate garden plot size (e.g. 4m x 3m), preferred layout, or any special requirements like electrics or bar setup."
                      className={`w-full px-3.5 py-2.5 bg-[#1E2229] border text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#B7D51F] transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-[#2C323D]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#B7D51F] hover:bg-[#c6e625] text-[#1E2229] font-bold text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>Submit Quote Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-neutral-400 text-center mt-2.5">
                      No obligation • 100% Free Consultation • Honest Peterlee Craftsmanship
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
