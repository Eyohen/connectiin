import { useState } from 'react';

const categories = ['All', 'Partnerships', 'Contracts', 'Joint Ventures', 'Vendor Sourcing', 'Investment'];

const opportunities = [
  { id: 1, title: 'Looking for SaaS Integration Partner', company: 'TechVentures Inc.', category: 'Partnerships', location: 'Remote', posted: '2 hours ago', description: 'We need a SaaS partner to integrate our CRM with existing enterprise tools. Must have experience with API development and B2B integrations.', budget: '$10k - $25k', responses: 8 },
  { id: 2, title: 'Supply Chain Management Vendor Needed', company: 'Meridian Logistics', category: 'Vendor Sourcing', location: 'Lagos, Nigeria', posted: '5 hours ago', description: 'Seeking a reliable vendor for warehouse management system implementation across 3 locations.', budget: '$50k - $100k', responses: 12 },
  { id: 3, title: 'Joint Venture: EdTech Expansion into East Africa', company: 'EduPrime Africa', category: 'Joint Ventures', location: 'East Africa', posted: '1 day ago', description: 'Looking for a partner to co-invest and co-develop our digital learning platform for the East African market.', budget: 'Equity partnership', responses: 5 },
  { id: 4, title: 'Marketing Strategy Consultant for Product Launch', company: 'NovaBridge Labs', category: 'Contracts', location: 'Remote', posted: '1 day ago', description: 'Need an experienced B2B marketing consultant to develop and execute our go-to-market strategy for a new AI product.', budget: '$15k - $30k', responses: 15 },
  { id: 5, title: 'Seed Investment Round: HealthTech Startup', company: 'GreenScale Solutions', category: 'Investment', location: 'Nairobi, Kenya', posted: '2 days ago', description: 'Raising $500k seed round for our health-tech platform. Looking for investors with healthcare or impact focus.', budget: '$500k raise', responses: 20 },
  { id: 6, title: 'Contract: Financial Advisory Services', company: 'Keystone Partners', category: 'Contracts', location: 'Dar es Salaam', posted: '3 days ago', description: 'Seeking a corporate finance advisory firm for an upcoming M&A transaction in the manufacturing sector.', budget: 'Negotiable', responses: 7 },
];

const OpportunitiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showPostModal, setShowPostModal] = useState(false);

  const filtered = selectedCategory === 'All'
    ? opportunities
    : opportunities.filter((o) => o.category === selectedCategory);

  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Opportunity Board</h1>
          <p className="text-gray-500 mt-1">Discover partnerships, contracts, and growth opportunities.</p>
        </div>
        <button
          onClick={() => setShowPostModal(true)}
          className="px-4 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Post Opportunity
        </button>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-accent text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-accent hover:text-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Opportunities list */}
      <div className="space-y-4">
        {filtered.map((opp) => (
          <div key={opp.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-semibold text-gray-900">{opp.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  {opp.company} &middot; {opp.location} &middot; {opp.posted}
                </p>
              </div>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                {opp.category}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{opp.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-900">{opp.budget}</span>
                <span className="text-xs text-gray-400">{opp.responses} responses</span>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent hover:text-white transition-all">
                Express Interest
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Post Modal */}
      {showPostModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowPostModal(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Post an Opportunity</h2>
              <button onClick={() => setShowPostModal(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" placeholder="What are you looking for?" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent">
                  {categories.filter(c => c !== 'All').map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea rows={4} placeholder="Describe the opportunity in detail..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                  <input type="text" placeholder="e.g. $10k - $25k" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input type="text" placeholder="e.g. Remote" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                </div>
              </div>
              <button type="button" onClick={() => setShowPostModal(false)} className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors">
                Post Opportunity
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpportunitiesPage;
