import { useState } from 'react';
import AvailabilityCalendar from '../../components/bookings/AvailabilityCalendar';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  const profile = {
    name: 'Acme Corp',
    tagline: 'Building innovative B2B solutions for African markets',
    industry: 'Technology',
    type: 'SaaS Company',
    location: 'Lagos, Nigeria',
    founded: '2021',
    size: '11-50 employees',
    website: 'www.acmecorp.com',
    email: 'hello@acmecorp.com',
    phone: '+234 703 216 8986',
    bio: 'Acme Corp is a technology company focused on building enterprise SaaS solutions that help businesses across Africa streamline operations, connect with partners, and scale efficiently. Our flagship product is an AI-powered CRM that integrates with major platforms.',
    services: ['API Integration', 'CRM Solutions', 'B2B SaaS', 'Data Analytics', 'Enterprise Software'],
    lookingFor: ['Technology Partners', 'Investors', 'Channel Partners', 'Enterprise Clients'],
  };

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Business Profile</h1>
          <p className="text-gray-500 mt-1">Manage how your business appears to others on Connectin.</p>
        </div>
        {activeTab === 'Overview' && (
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
              isEditing
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-accent text-white hover:bg-accent-dark'
            }`}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        )}
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 p-1 bg-gray-100 rounded-lg w-fit mb-7">
        {['Overview', 'Bookings'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-1.5 text-sm font-medium rounded-md transition-all ${
              activeTab === tab
                ? 'bg-white text-gray-900 font-semibold shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab === 'Bookings' && (
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Bookings
              </span>
            )}
            {tab !== 'Bookings' && tab}
          </button>
        ))}
      </div>

      {activeTab === 'Bookings' && (
        <div className="max-w-3xl">
          <div className="mb-6">
            <h2 className="text-base font-semibold text-gray-900">Manage Your Availability</h2>
            <p className="text-sm text-gray-500 mt-1">Set the times when you're open for 30-minute meetings. Others can book these slots from your profile.</p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/5 border border-accent/15 rounded-full mb-6">
            <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-medium text-accent">30-minute meeting slots</span>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <AvailabilityCalendar mode="edit" />
          </div>
        </div>
      )}

      {activeTab === 'Overview' && (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header card */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-accent to-accent-dark" />
            <div className="px-6 pb-6">
              <div className="flex items-end gap-4 -mt-10 mb-4">
                <div className="w-20 h-20 rounded-xl bg-white border-4 border-white shadow-sm flex items-center justify-center text-accent text-2xl font-bold">
                  AC
                </div>
                <div className="pb-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">{profile.tagline}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {profile.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                  {profile.industry} &middot; {profile.type}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  {profile.size}
                </span>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{profile.bio}</p>
          </div>

          {/* Services */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">Services & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {profile.services.map((s) => (
                <span key={s} className="px-3 py-1.5 bg-accent/5 text-accent text-sm font-medium rounded-full border border-accent/10">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Looking for */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">Looking For</h3>
            <div className="flex flex-wrap gap-2">
              {profile.lookingFor.map((l) => (
                <span key={l} className="px-3 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded-full border border-green-100">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <span className="text-gray-600">{profile.website}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-gray-600">{profile.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-gray-600">{profile.phone}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Profile Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Profile views</span>
                <span className="text-sm font-semibold text-gray-900">128</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Connections</span>
                <span className="text-sm font-semibold text-gray-900">47</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Search appearances</span>
                <span className="text-sm font-semibold text-gray-900">312</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Trust score</span>
                <span className="text-sm font-semibold text-green-600">92/100</span>
              </div>
            </div>
          </div>

          {/* Profile completeness */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">Profile Completeness</h3>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
              <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }} />
            </div>
            <p className="text-sm text-gray-500">85% complete — Add a company logo to reach 100%</p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default ProfilePage;
