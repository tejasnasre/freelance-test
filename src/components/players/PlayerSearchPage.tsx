import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  X,
  MapPin,
  Calendar,
  Award,
  Trophy,
  Users,
} from "lucide-react";

// Sample player data - in a real app, this would come from an API
const samplePlayers = [
  {
    id: 1,
    name: "Roger Federer",
    age: 41,
    country: "Switzerland",
    state: "Basel",
    gender: "Male",
    currentRankings: {
      atp: 97,
      itf: 15,
      national: 3,
    },
    bestRankings: {
      atp: 1,
      itf: 1,
      national: 1,
    },
    categories: ["Professional", "Singles", "Doubles"],
    image: "https://images.pexels.com/photos/5739074/pexels-photo-5739074.jpeg",
  },
  {
    id: 2,
    name: "Serena Williams",
    age: 40,
    country: "United States",
    state: "California",
    gender: "Female",
    currentRankings: {
      wta: 413,
      itf: 25,
      national: 8,
    },
    bestRankings: {
      wta: 1,
      itf: 1,
      national: 1,
    },
    categories: ["Professional", "Singles", "Doubles"],
    image: "https://images.pexels.com/photos/5739111/pexels-photo-5739111.jpeg",
  },
  {
    id: 3,
    name: "Novak Djokovic",
    age: 35,
    country: "Serbia",
    state: "Belgrade",
    gender: "Male",
    currentRankings: {
      atp: 1,
      itf: 1,
      national: 1,
    },
    bestRankings: {
      atp: 1,
      itf: 1,
      national: 1,
    },
    categories: ["Professional", "Singles", "Doubles"],
    image: "https://images.pexels.com/photos/5739125/pexels-photo-5739125.jpeg",
  },
  {
    id: 4,
    name: "Lin Dan",
    age: 38,
    country: "China",
    state: "Fujian",
    gender: "Male",
    currentRankings: {
      bwf: 0, // Retired
      national: 0,
    },
    bestRankings: {
      bwf: 1,
      national: 1,
    },
    categories: ["Professional", "Singles"],
    image: "https://images.pexels.com/photos/5739134/pexels-photo-5739134.jpeg",
  },
  {
    id: 5,
    name: "Carolina Marin",
    age: 29,
    country: "Spain",
    state: "Huelva",
    gender: "Female",
    currentRankings: {
      bwf: 6,
      national: 1,
    },
    bestRankings: {
      bwf: 1,
      national: 1,
    },
    categories: ["Professional", "Singles"],
    image: "https://images.pexels.com/photos/5739145/pexels-photo-5739145.jpeg",
  },
];

type Player = {
  id: number;
  name: string;
  age: number;
  country: string;
  state: string;
  gender: string;
  currentRankings: {
    atp?: number;
    wta?: number;
    bwf?: number;
    itf?: number;
    national: number;
  };
  bestRankings: {
    atp?: number;
    wta?: number;
    bwf?: number;
    itf?: number;
    national: number;
  };
  categories: string[];
  image: string;
};

const PlayerSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Player[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredPlayers, setFilteredPlayers] =
    useState<Player[]>(samplePlayers);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the search component to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter players based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPlayers(samplePlayers);
      setSuggestions(samplePlayers.slice(0, 5)); // Show top 5 players initially
      return;
    }

    const filtered = samplePlayers.filter(
      (player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.categories.some((category) =>
          category.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    setFilteredPlayers(filtered);
    setSuggestions(filtered.slice(0, 5)); // Show top 5 suggestions
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (player: Player) => {
    setSelectedPlayer(player);
    setSearchTerm(player.name);
    setShowSuggestions(false);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSelectedPlayer(null);
    setShowSuggestions(false);
  };

  const renderRankings = (rankings: any) => {
    return (
      <div className="grid grid-cols-2 gap-2">
        {rankings.atp && (
          <div className="flex items-center">
            <span className="text-emerald-400 mr-2">ATP:</span>
            <span>{rankings.atp}</span>
          </div>
        )}
        {rankings.wta && (
          <div className="flex items-center">
            <span className="text-emerald-400 mr-2">WTA:</span>
            <span>{rankings.wta}</span>
          </div>
        )}
        {rankings.bwf && (
          <div className="flex items-center">
            <span className="text-emerald-400 mr-2">BWF:</span>
            <span>{rankings.bwf}</span>
          </div>
        )}
        {rankings.itf && (
          <div className="flex items-center">
            <span className="text-emerald-400 mr-2">ITF:</span>
            <span>{rankings.itf}</span>
          </div>
        )}
        <div className="flex items-center">
          <span className="text-emerald-400 mr-2">National:</span>
          <span>{rankings.national}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 font-poppins">
          Find <span className="text-emerald-400">Players</span>
        </h1>

        {/* Search Bar */}
        <div
          className="max-w-2xl mx-auto mb-12 relative"
          ref={searchContainerRef}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-3 border border-slate-700 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Search by name, country, or category..."
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setShowSuggestions(true)}
            />
            {searchTerm && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  onClick={handleClearSearch}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-20 w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg shadow-lg max-h-80 overflow-y-auto">
              {suggestions.map((player) => (
                <div
                  key={player.id}
                  className="px-4 py-2 hover:bg-slate-700 cursor-pointer flex items-center"
                  onClick={() => handleSuggestionClick(player)}
                >
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-8 h-8 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <div className="text-white font-medium">{player.name}</div>
                    <div className="text-sm text-slate-400">
                      {player.country} • {player.categories.join(", ")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Player Details */}
        {selectedPlayer ? (
          <div className="max-w-4xl mx-auto bg-slate-800 rounded-xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={selectedPlayer.image}
                  alt={selectedPlayer.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-2xl font-bold mb-2 font-poppins">
                  {selectedPlayer.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-emerald-400 mr-2" />
                    <span>{selectedPlayer.age} years old</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-emerald-400 mr-2" />
                    <span>
                      {selectedPlayer.state}, {selectedPlayer.country}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-emerald-400 mr-2" />
                    <span>{selectedPlayer.gender}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-emerald-400 mr-2" />
                    <span>{selectedPlayer.categories.join(", ")}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Trophy className="h-5 w-5 text-emerald-400 mr-2" />
                    Current Rankings
                  </h3>
                  {renderRankings(selectedPlayer.currentRankings)}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Award className="h-5 w-5 text-emerald-400 mr-2" />
                    Best Rankings
                  </h3>
                  {renderRankings(selectedPlayer.bestRankings)}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlayers.map((player) => (
                <div
                  key={player.id}
                  className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleSuggestionClick(player)}
                >
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">
                      {player.name}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {player.country} • {player.categories.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {filteredPlayers.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-slate-400">
                  No players found matching your search.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerSearchPage;
