export default function ProfilePage() {
  return (
    <div className="p-8 max-w-6xl mx-auto text-white">
      {/* Header */}
      <div className="flex items-center gap-6 mb-10">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20" />
        <div>
            <h1 className="text-3xl font-bold">Vansh Dev</h1>
            <p className="text-gray-400 mt-1">Level 4 • CodeMentor Pro</p>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <StatCard 
          label="Current Streak" 
          value="12 Days" 
          emoji="🔥" 
          color="text-orange-500" 
        />
        <StatCard 
          label="Global Rating" 
          value="1,450" 
          emoji="🌍" 
          color="text-blue-400" 
        />
        <StatCard 
          label="Problems Solved" 
          value="87" 
          emoji="✅" 
          color="text-green-400" 
        />
      </div>

      {/* Platform Ratings Section */}
      <h2 className="text-xl font-bold mb-4">Platform Ratings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <PlatformCard name="Codeforces" rating={1200} color="text-cyan-400" rank="Pupil" />
         <PlatformCard name="LeetCode" rating={1650} color="text-yellow-500" rank="Knight" />
         <PlatformCard name="CodeChef" rating={1400} color="text-orange-700" rank="2 Star" />
      </div>
    </div>
  );
}

// Small Components for Profile
function StatCard({ label, value, emoji, color }) {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
      <h3 className="text-gray-400 text-sm font-medium mb-2">{label}</h3>
      <div className={`text-4xl font-bold ${color} flex items-center gap-2`}>
         <span>{emoji}</span> {value}
      </div>
    </div>
  );
}

function PlatformCard({ name, rating, color, rank }) {
    return (
        <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 flex justify-between items-center">
            <div>
              <div className="font-bold text-lg text-white">{name}</div>
              <div className="text-xs text-gray-500 mt-1">{rank}</div>
            </div>
            <span className={`text-2xl font-bold ${color}`}>{rating}</span>
        </div>
    );
}