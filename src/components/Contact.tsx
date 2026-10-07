import { useEffect, useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`This is a demo form. No message was sent, ${formData.name}.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full bg-neutral-950 text-white pt-24 min-h-screen pb-24 font-light">
      
      <section className="relative py-20 border-b border-neutral-900 bg-gradient-to-b from-neutral-900/20 to-transparent text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase block mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-extralight tracking-wide mb-6">
            We are here to assist you
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            This NM Codes project demonstrates a contact form. It does not send or store messages.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-2xl font-light tracking-wide mb-2 text-white">Contact Information</h2>
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-6">Virebo Property · NM Codes</p>
              
              <div className="flex items-center gap-4 p-5 bg-neutral-900/20 border border-neutral-900 rounded-2xl">
                <div className="p-3 bg-neutral-900 rounded-xl">
                  <Mail className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                  <span className="block text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">Demo notice</span>
                  <span className="text-sm font-normal text-neutral-200">Messages are not submitted</span>
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-neutral-400">
              Use the fields to preview the form interaction. Submitting only displays a local demo message and clears the form.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-8 sm:p-12 shadow-2xl text-neutral-900">
            <div className="mb-8">
              <span className="text-red-600 text-xs font-bold uppercase tracking-widest block mb-1">Write a message</span>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Send an Inquiry</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:bg-white px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Your Email *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:bg-white px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Subject *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:bg-white px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all" 
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Your Message *</label>
                <textarea 
                  rows={5} 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:bg-white px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Send className="w-3.5 h-3.5" />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
