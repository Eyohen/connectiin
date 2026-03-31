import { useState } from 'react';

const industries = ['All', 'Technology', 'Finance', 'Healthcare', 'Education', 'Marketing', 'Manufacturing'];

const businesses = [
  { name: 'TechVentures Inc.', industry: 'Technology', type: 'SaaS Company', location: 'Lagos, Nigeria', match: 92, verified: true, avatar: 'TV', bio: 'Building next-gen enterprise software solutions for African markets.' },
  { name: 'GreenScale Solutions', industry: 'Healthcare', type: 'Service Provider', location: 'Nairobi, Kenya', match: 87, verified: true, avatar: 'GS', bio: 'Sustainable health-tech solutions for underserved communities.' },
  { name: 'Atlas Capital Group', industry: 'Finance', type: 'Investment Firm', location: 'Accra, Ghana', match: 85, verified: true, avatar: 'AC', bio: 'Early-stage VC focused on B2B startups across West Africa.' },
  { name: 'Bloom Strategy', industry: 'Marketing', type: 'Consulting Firm', location: 'Cape Town, SA', match: 81, verified: false, avatar: 'BS', bio: 'Growth marketing and GTM strategy for scaling companies.' },
  { name: 'NovaBridge Labs', industry: 'Technology', type: 'R&D Lab', location: 'Kigali, Rwanda', match: 79, verified: true, avatar: 'NL', bio: 'Pioneering AI research and development partnerships.' },
  { name: 'Meridian Logistics', industry: 'Manufacturing', type: 'Supply Chain', location: 'Lagos, Nigeria', match: 76, verified: true, avatar: 'ML', bio: 'End-to-end supply chain management for African trade.' },
  { name: 'EduPrime Africa', industry: 'Education', type: 'EdTech', location: 'Kampala, Uganda', match: 74, verified: false, avatar: 'EA', bio: 'Digital learning platforms for professional development.' },
  { name: 'Keystone Partners', industry: 'Finance', type: 'Advisory', location: 'Dar es Salaam, TZ', match: 72, verified: true, avatar: 'KP', bio: 'M&A advisory and corporate finance for mid-market firms.' },
];

const DiscoverPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = businesses.filter((b) => {
    const matchesIndustry = selectedIndustry === 'All' || b.industry === selectedIndustry;
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) || b.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Discover Businesses</h1>
        <p className="text-gray-500 mt-1">AI-powered matches based on your business profile and goals.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            placeholder="Search by name or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      {/* Industry pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {industries.map((ind) => (
          <button
            key={ind}
            onClick={() => setSelectedIndustry(ind)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedIndustry === ind
                ? 'bg-accent text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-accent hover:text-accent'
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      {/* Business grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((biz) => (
          <div key={biz.name} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold">
                  {biz.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-gray-900">{biz.name}</h3>
                    {biz.verified && (
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{biz.type} &middot; {biz.location}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {biz.match}%
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{biz.bio}</p>
            <div className="flex items-center gap-2">
              <button className="flex-1 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-dark transition-colors">
                Connect
              </button>
              <button className="py-2 px-3 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;
