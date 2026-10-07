import { useState, useEffect } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, ChevronLeft, Upload, UserPlus } from 'lucide-react';

type DepartmentType = 'all' | 'sales' | 'management' | 'operations';

interface Job {
  id: string;
  title: string;
  dept: DepartmentType;
  location: string;
  type: string;
  aboutRole: string;
  aboutCompany: string;
  howWeWork: string;
  mission: string[];
  requirements: string[];
}

const initialJobs: Job[] = [
  { 
    id: '1', 
    title: 'Senior Property Broker', 
    dept: 'sales', 
    location: 'Example / Remote', 
    type: 'Full-time',
    aboutCompany: 'Demonstration text only. This NM Codes project is not an employer and this is not an active vacancy.',
    aboutRole: 'Example role content used to demonstrate how a property-related vacancy could be presented on the site.',
    howWeWork: 'This page is an interface prototype. It does not represent a real team, company, or employment relationship.',
    mission: [
      'Example responsibility for the prototype role description.',
      'Review sample property listing information.',
      'Explore ways a property website could support browsing.',
      'This list is sample content, not a real job specification.'
    ],
    requirements: [
      'Requirements shown here are sample content only.',
      'No application is being collected through this prototype.'
    ]
  },
  {
    id: '2',
    title: 'Data Analytics Engineer',
    dept: 'management',
    location: 'Example / Remote',
    type: 'Full-time',
    aboutCompany: 'Demonstration text only. This NM Codes project is not an employer and this is not an active vacancy.',
    aboutRole: 'Example role content used to demonstrate how a data-related vacancy could be presented on the site.',
    howWeWork: 'This page is an interface prototype. It does not represent a real team, company, or employment relationship.',
    mission: [
      'Example responsibility for the prototype role description.',
      'Explore how sample listing data could be presented.',
      'This list is sample content, not a real job specification.'
    ],
    requirements: [
      'Requirements shown here are sample content only.',
      'No application is being collected through this prototype.'
    ]
  }
];

export default function Careers() {
  const [activeDept, setActiveDept] = useState<DepartmentType>('all');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplying, setIsApplying] = useState<boolean>(false);
  
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [selectedConnectDept, setSelectedConnectDept] = useState<string>('');
  const [experienceYears, setExperienceYears] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }, []);

  const filteredJobs = activeDept === 'all' 
    ? initialJobs 
    : initialJobs.filter(job => job.dept === activeDept);

  const handleBackToMain = () => {
    setIsApplying(false);
    setIsConnecting(false);
    setSelectedJob(null);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleOpenApplying = () => {
    setIsApplying(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  if (isConnecting) {
    return (
      <div className="w-full bg-neutral-950 text-white pt-24 min-h-screen pb-24 transition-all duration-300">
        <div className="max-w-3xl mx-auto px-4">
          
          <button 
            onClick={handleBackToMain}
            className="flex items-center gap-2 text-neutral-400 hover:text-white text-xs uppercase tracking-widest mb-12 font-semibold transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Back to careers
          </button>

          <div className="text-center mb-16">
            <span className="text-red-500 text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Let's stay in touch
            </span>
            <h1 className="text-4xl sm:text-6xl font-light tracking-wide mb-6">
              Share an idea
            </h1>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
              This is an interface preview. The form does not collect or send applications.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-3xl p-8 sm:p-12 shadow-2xl text-neutral-900">
            
            <div className="mb-10">
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4">
                What department are you interested in? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'sales', label: 'Premium Brokerage & Sales' },
                  { id: 'operations', label: 'Land Acquisition & Ops' },
                  { id: 'tech', label: 'Product, Tech & Data' },
                  { id: 'management', label: 'Executive & Marketing' }
                ].map((dept) => (
                  <button
                    key={dept.id}
                    type="button"
                    onClick={() => setSelectedConnectDept(dept.id)}
                    className={`p-4 text-left border rounded-xl text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      selectedConnectDept === dept.id
                        ? 'border-red-600 bg-red-50 text-red-600'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    {dept.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center my-8 border-b border-neutral-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">Personal information</span>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('This is a demo form. No information was sent.'); handleBackToMain(); }} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">First name *</label>
                  <input type="text" required className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:bg-white px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Last name *</label>
                  <input type="text" required className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:bg-white px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Email *</label>
                  <input type="email" required className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:bg-white px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Phone *</label>
                  <input type="tel" placeholder="+46 70 123 45 67" required className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:bg-white px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Upload CV / Resume (Optional)</label>
                <div className="border border-dashed border-neutral-300 hover:border-neutral-400 bg-neutral-50 rounded-2xl p-8 text-center cursor-pointer transition-all group">
                  <Upload className="w-6 h-6 mx-auto mb-2 text-neutral-400 group-hover:text-red-600 transition-colors" />
                  <p className="text-xs font-light text-neutral-500">Drop your file or <span className="underline font-normal text-neutral-800 group-hover:text-red-600 transition-colors">upload</span></p>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={!selectedConnectDept}
                className={`w-full font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg mt-8 cursor-pointer ${
                  selectedConnectDept 
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/20' 
                    : 'bg-neutral-200 text-neutral-400 cursor-not-allowed shadow-none'
                }`}
              >
                Submit Connection
              </button>
            </form>

          </div>
        </div>
      </div>
    );
  }

  if (selectedJob && isApplying) {
    return (
      <div className="w-full bg-neutral-950 text-white pt-24 min-h-screen pb-24 transition-all duration-300">
        <div className="max-w-3xl mx-auto px-4">
          
          <button 
            onClick={() => { setIsApplying(false); setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 50); }}
            className="flex items-center gap-2 text-neutral-400 hover:text-white text-xs uppercase tracking-widest mb-12 font-semibold transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Back to job description
          </button>

          <div className="text-center mb-16">
            <span className="text-red-500 text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              {selectedJob.location} • {selectedJob.type}
            </span>
            <h1 className="text-4xl sm:text-6xl font-light tracking-wide mb-6">
              {selectedJob.title}
            </h1>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
              This NM Codes project is not an employer. Application details are for interface demonstration only.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-3xl p-8 sm:p-12 shadow-2xl text-neutral-900">
            
            <div className="mb-12">
              <label className="block text-sm sm:text-base font-medium text-center mb-6 text-neutral-800">
                How many years of relevant industry experience do you have? *
              </label>
              <div className="bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl p-8 text-center shadow-inner relative">
                <span className="text-6xl font-extralight block mb-4 text-red-600">{experienceYears}</span>
                <input 
                  type="range" 
                  min="0" 
                  max="10" 
                  value={experienceYears}
                  onChange={(e) => setExperienceYears(parseInt(e.target.value))}
                  className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-3 px-1 uppercase tracking-wider font-semibold">
                  <span>0 years</span><span>2</span><span>4</span><span>6</span><span>8</span><span>10+ years</span>
                </div>
              </div>
            </div>

            <div className="text-center my-8 border-b border-neutral-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">Personal information</span>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('This is a demo form. No application was sent.'); handleBackToMain(); }} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">First name *</label>
                  <input type="text" required className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:bg-white px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Last name *</label>
                  <input type="text" required className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:bg-white px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Email *</label>
                  <input type="email" required className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:bg-white px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Phone *</label>
                  <input type="tel" placeholder="+46 70 123 45 67" required className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 focus:border-neutral-400 focus:bg-white px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Upload CV *</label>
                <div className="border border-dashed border-neutral-300 hover:border-neutral-400 bg-neutral-50 rounded-2xl p-8 text-center cursor-pointer transition-all group">
                  <Upload className="w-6 h-6 mx-auto mb-2 text-neutral-400 group-hover:text-red-600 transition-colors" />
                  <p className="text-xs font-light text-neutral-500">Drop your file or <span className="underline font-normal text-neutral-800 group-hover:text-red-600 transition-colors">upload</span></p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Additional files</label>
                <div className="border border-dashed border-neutral-200 bg-neutral-50 rounded-2xl p-6 text-center cursor-pointer">
                  <p className="text-xs font-light text-neutral-400">Drop files here or click to browse</p>
                </div>
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg shadow-red-600/20 mt-8 cursor-pointer">
                Preview Application
              </button>
            </form>

          </div>
        </div>
      </div>
    );
  }

  if (selectedJob) {
    return (
      <div className="w-full bg-neutral-950 text-white pt-24 min-h-screen pb-24">
        
        <section className="relative py-24 border-b border-neutral-900 bg-gradient-to-b from-neutral-900/40 to-transparent text-center">
          <div className="max-w-4xl mx-auto px-4">
            <button 
              onClick={() => { setSelectedJob(null); setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 50); }}
              className="flex items-center gap-2 text-neutral-500 hover:text-white text-xs uppercase tracking-widest mb-8 mx-auto font-semibold transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> All positions
            </button>
            <span className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase block mb-4">
              {selectedJob.location} • {selectedJob.type}
            </span>
            <h1 className="text-4xl sm:text-6xl font-light tracking-wide mb-8">
              {selectedJob.title}
            </h1>
            <button 
              onClick={handleOpenApplying}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs uppercase tracking-widest px-10 py-4 rounded-xl transition-all shadow-lg shadow-red-600/10 cursor-pointer"
            >
              Preview role
            </button>
          </div>
        </section>

        <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6 font-light text-sm sm:text-base text-neutral-300 space-y-12 leading-relaxed">
          <div>
            <p className="mb-6">{selectedJob.aboutRole}</p>
          </div>

          <div>
            <h3 className="text-lg font-normal text-white mb-3 tracking-wide">About this demo</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{selectedJob.aboutCompany}</p>
          </div>

          <div>
            <h3 className="text-lg font-normal text-white mb-3 tracking-wide">How we work</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{selectedJob.howWeWork}</p>
          </div>

          <div>
            <h3 className="text-lg font-normal text-white mb-4 tracking-wide">Your mission</h3>
            <ul className="space-y-3 list-disc pl-5 text-neutral-400 text-sm">
              {selectedJob.mission.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="border-t border-neutral-900 pt-8">
            <h3 className="text-lg font-normal text-white mb-4 tracking-wide">We hope you have</h3>
            <ul className="space-y-3 list-disc pl-5 text-neutral-400 text-sm">
              {selectedJob.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="text-center pt-8">
            <button 
              onClick={handleOpenApplying}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs uppercase tracking-widest px-12 py-4 rounded-xl transition-all cursor-pointer shadow-lg shadow-red-600/10"
            >
              Preview role
            </button>
          </div>
        </section>

      </div>
    );
  }

  return (
    <div className="w-full bg-neutral-950 text-white pt-24 min-h-screen">
      
      <section className="relative py-24 border-b border-neutral-900 bg-gradient-to-b from-neutral-900/20 to-transparent text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase block mb-4">
            Example roles · NM Codes project
          </span>
          <h1 className="text-4xl sm:text-6xl font-extralight tracking-wide mb-6">
            We simplify property ownership
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            This page demonstrates a careers layout. The example roles are not real vacancies and submissions are not sent.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={() => { setIsConnecting(true); setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 50); }}
              className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <UserPlus className="w-4 h-4 text-neutral-950" />
              Connect
            </button>
            <button 
              onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all cursor-pointer"
            >
              Job Openings
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide uppercase tracking-[0.15em] text-neutral-400">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-neutral-900/20 border border-neutral-900 rounded-2xl">
            <h3 className="text-base font-medium mb-3 text-white">We're honest</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Example copy for an NM Codes careers page; this is not a statement from an employer.
            </p>
          </div>
          <div className="p-8 bg-neutral-900/20 border border-neutral-900 rounded-2xl">
            <h3 className="text-base font-medium mb-3 text-white">We take full ownership</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              This example section demonstrates how values can be presented in a careers-page layout.
            </p>
          </div>
          <div className="p-8 bg-neutral-900/20 border border-neutral-900 rounded-2xl">
            <h3 className="text-base font-medium mb-3 text-white">We have the highest standards</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              The content on this page is illustrative and does not describe a real organization or team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4 border-b border-neutral-900">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-light tracking-wide uppercase tracking-[0.15em] text-neutral-400">Teams</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 'all', label: 'All Fields' },
            { id: 'sales', label: 'Premium Brokerage' },
            { id: 'operations', label: 'Land & Ops' },
            { id: 'management', label: 'Executive & Tech' }
          ].map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDept(dept.id as DepartmentType)}
              className={`p-6 text-center border rounded-xl text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeDept === dept.id
                  ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/10'
                  : 'bg-neutral-900/20 border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800'
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>
      </section>

      <section id="openings" className="py-24 max-w-4xl mx-auto px-4 scroll-mt-24">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl sm:text-2xl font-light tracking-wide">Example roles</h2>
          <span className="text-xs text-neutral-500 font-medium uppercase tracking-widest">
            {filteredJobs.length} Example positions
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div 
                key={job.id} 
                onClick={() => { setSelectedJob(job); setIsApplying(false); setIsConnecting(false); setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 50); }}
                className="group p-6 bg-neutral-900/20 border border-neutral-900 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-neutral-800 hover:bg-neutral-900/40 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <h3 className="text-base font-normal group-hover:text-red-500 transition-colors mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs text-neutral-500 font-light">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5" /> {job.dept.toUpperCase()}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {job.type}
                    </span>
                  </div>
                </div>
                <button className="self-start sm:self-center bg-neutral-900 group-hover:bg-red-600 border border-neutral-800 group-hover:border-red-600 text-white p-3 rounded-xl transition-all">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 border border-dashed border-neutral-900 rounded-2xl text-neutral-500 text-xs tracking-wider uppercase">
              No open positions in this department right now.
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
