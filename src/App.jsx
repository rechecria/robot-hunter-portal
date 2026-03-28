import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, TrendingUp, Globe, AlertTriangle, ChevronDown, ChevronUp,
  ExternalLink, Database, HardDrive, Users, DollarSign, Cpu, MapPin,
  Zap, Leaf, ArrowRight, X, BarChart3, Building2, Truck, ShieldCheck, Activity
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useSupabaseData } from './useData.js';
import './App.css';

const countryFlags = {
  'Estados Unidos': '🇺🇸', 'Brasil': '🇧🇷', 'Dinamarca': '🇩🇰', 'Suíça': '🇨🇭',
  'França': '🇫🇷', 'Holanda': '🇳🇱', 'Alemanha': '🇩🇪', 'Turquia': '🇹🇷',
  'Israel': '🇮🇱', 'Japão': '🇯🇵', 'Austrália': '🇦🇺', 'China': '🇨🇳',
  'Índia': '🇮🇳', 'Nova Zelândia': '🇳🇿', 'Espanha': '🇪🇸', 'Canadá': '🇨🇦',
  'Noruega/UK': '🇬🇧'
};

const stageLabels = {
  'seed': { label: 'Seed', color: 'bg-violet-100 text-violet-700' },
  'series-a': { label: 'Series A', color: 'bg-blue-100 text-blue-700' },
  'series-b': { label: 'Series B', color: 'bg-cyan-100 text-cyan-700' },
  'series-c': { label: 'Series C', color: 'bg-teal-100 text-teal-700' },
  'series-d': { label: 'Series D', color: 'bg-emerald-100 text-emerald-700' },
  'growth': { label: 'Growth', color: 'bg-amber-100 text-amber-700' },
  'ipo': { label: 'IPO', color: 'bg-green-100 text-green-700' }
};

const impactColors = {
  'Altíssimo': 'bg-red-100 text-red-700 border-red-200',
  'Muito alto': 'bg-orange-100 text-orange-700 border-orange-200',
  'Alto': 'bg-amber-100 text-amber-700 border-amber-200',
  'Médio-alto': 'bg-yellow-100 text-yellow-700 border-yellow-200'
};

function App() {
  const { companies, vehicles, marketData, painPoints, trends, categories, regions, loading, source } = useSupabaseData();
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [stageFilter, setStageFilter] = useState('');
  const [vehicleCategory, setVehicleCategory] = useState('');
  const [expandedCompany, setExpandedCompany] = useState(null);
  const [expandedPain, setExpandedPain] = useState(null);
  const [activeNav, setActiveNav] = useState('');

  const uniqueCountries = useMemo(() => [...new Set(companies.map(c => c.pais))].sort(), [companies]);
  const uniqueStages = useMemo(() => [...new Set(companies.map(c => c.estagio))].sort(), [companies]);

  const filteredCompanies = useMemo(() => companies.filter(c => {
    const matchesSearch = c.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.produtos && c.produtos.join(' ').toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCountry = !countryFilter || c.pais === countryFilter;
    const matchesStage = !stageFilter || c.estagio === stageFilter;
    return matchesSearch && matchesCountry && matchesStage;
  }), [companies, searchTerm, countryFilter, stageFilter]);

  const filteredVehicles = useMemo(() =>
    !vehicleCategory ? vehicles : vehicles.filter(v => v.categoria === vehicleCategory),
    [vehicles, vehicleCategory]);

  const activeFilters = [countryFilter, stageFilter, searchTerm].filter(Boolean).length;

  const marketChartData = [
    { ano: '2024', marketsandmarkets: 17.7, grandview: 14.7, mordor: 25 },
    { ano: '2025', marketsandmarkets: 22.4, grandview: 18.1, mordor: 31.3 },
    { ano: '2026', marketsandmarkets: 28.2, grandview: 22.3, mordor: 39.1 },
    { ano: '2027', marketsandmarkets: 35.5, grandview: 27.4, mordor: 48.9 },
    { ano: '2028', marketsandmarkets: 44.7, grandview: 33.7, mordor: 61.1 },
    { ano: '2029', marketsandmarkets: 50.6, grandview: 40.9, mordor: 68.5 },
    { ano: '2030', marketsandmarkets: 56.3, grandview: 48.1, mordor: 75 }
  ];

  const scrollTo = (id) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setCountryFilter('');
    setStageFilter('');
  };

  const fadeIn = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
              <Cpu size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-gray-900">Robot</span> <span className="text-amber-700">Hunter</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {[
              { id: 'mercado', label: 'Mercado', icon: BarChart3 },
              { id: 'empresas', label: 'Empresas', icon: Building2 },
              { id: 'veiculos', label: 'Veículos', icon: Truck },
              { id: 'dores', label: 'Dores', icon: AlertTriangle },
              { id: 'global', label: 'Global', icon: Globe },
              { id: 'tendencias', label: 'Tendências', icon: TrendingUp }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all ${
                  activeNav === item.id
                    ? 'bg-amber-50 text-amber-800 font-medium'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <item.icon size={14} />
                {item.label}
              </button>
            ))}
          </div>
          <span className={`flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border ${
            source === 'supabase'
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : 'bg-gray-50 text-gray-500 border-gray-200'
          }`}>
            {source === 'supabase' ? <Database size={10} /> : <HardDrive size={10} />}
            {source === 'supabase' ? 'LIVE' : 'STATIC'}
          </span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-mono rounded-full border border-amber-200">
                Intelligence Report
              </span>
              <span className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-mono rounded-full border border-gray-200">
                Março 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.05] mb-4">
              Panorama Global da<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-500">
                Robótica Agrícola
              </span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mb-12">
              Mapeamento completo de empresas, veículos, tecnologias e tendências
              que estão transformando a agricultura mundial.
            </p>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: companies.length || 55, label: 'Empresas', icon: Building2, color: 'from-amber-500 to-amber-700' },
                { value: '21', label: 'Países', icon: Globe, color: 'from-blue-500 to-blue-700' },
                { value: '$1.5B+', label: 'Funding Total', icon: DollarSign, color: 'from-emerald-500 to-emerald-700' },
                { value: vehicles.length || 33, label: 'Veículos', icon: Truck, color: 'from-violet-500 to-violet-700' }
              ].map((kpi, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-5 card-hover"
                >
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${kpi.color} flex items-center justify-center mb-3`}>
                    <kpi.icon size={16} className="text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-gray-900 font-mono">{kpi.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{kpi.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Market Section ── */}
      <section id="mercado" className="py-16 px-6 bg-gray-50/50 section-pattern">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 size={18} className="text-amber-700" />
              <span className="text-xs font-mono text-amber-700 uppercase tracking-widest">Tamanho de Mercado</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">Projeções 2024–2030</h2>
            <p className="text-gray-500 mb-10 max-w-xl">Três principais consultorias convergem: o mercado ultrapassará US$ 48B até 2030.</p>
          </motion.div>

          {/* Analyst Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { name: 'MarketsandMarkets', value: '$56.3B', from: '$17.7B', cagr: '26.0%', color: 'border-amber-400' },
              { name: 'Grand View Research', value: '$48.1B', from: '$14.7B', cagr: '23.0%', color: 'border-blue-400' },
              { name: 'Mordor Intelligence', value: '$75B', from: '$25B', cagr: '24.6%', color: 'border-emerald-400' }
            ].map((analyst, i) => (
              <motion.div key={i} {...fadeIn} className={`bg-white rounded-xl border-l-4 ${analyst.color} border border-gray-200 p-6 card-hover`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">{analyst.name}</span>
                  <span className="text-xs font-mono px-2 py-0.5 bg-gray-100 text-gray-600 rounded">{analyst.cagr} CAGR</span>
                </div>
                <div className="text-4xl font-black text-gray-900 mb-1">{analyst.value}</div>
                <div className="text-sm text-gray-400">De {analyst.from} em 2024</div>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <motion.div {...fadeIn} className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-6">Projeção de Crescimento (USD Bilhões)</h3>
            <ResponsiveContainer width="100%" height={360}>
              <AreaChart data={marketChartData}>
                <defs>
                  <linearGradient id="colorMM" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D97706" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#D97706" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorGV" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorMD" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="ano" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" fontSize={12} tickFormatter={(v) => `$${v}B`} />
                <Tooltip
                  contentStyle={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '10px', fontSize: '13px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                  formatter={(v) => [`$${v}B`, undefined]}
                />
                <Legend />
                <Area type="monotone" dataKey="marketsandmarkets" name="MarketsandMarkets" stroke="#D97706" fill="url(#colorMM)" strokeWidth={2} />
                <Area type="monotone" dataKey="grandview" name="Grand View" stroke="#2563EB" fill="url(#colorGV)" strokeWidth={2} />
                <Area type="monotone" dataKey="mordor" name="Mordor" stroke="#059669" fill="url(#colorMD)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Segments */}
          <motion.div {...fadeIn} className="mt-10">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Segmentos por Participação (2024)</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {marketData.segments && Object.entries(marketData.segments).map(([key, seg]) => (
                <div key={key} className="bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-3">
                  <div className="w-2 h-8 rounded-full bg-amber-500 shrink-0"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800 capitalize">{key.replace(/_/g, ' ')}</div>
                    <div className="text-xs text-gray-500">{seg.trend}</div>
                  </div>
                  {seg.share && <span className="ml-auto text-xs font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded">{seg.share}</span>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Companies Section ── */}
      <section id="empresas" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-2 mb-2">
              <Building2 size={18} className="text-amber-700" />
              <span className="text-xs font-mono text-amber-700 uppercase tracking-widest">{companies.length} Empresas</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-8">Mapa de Inovação</h2>
          </motion.div>

          {/* Search & Filters */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 mb-6">
            <div className="grid md:grid-cols-4 gap-3">
              <div className="relative md:col-span-2">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Pesquisar empresa ou produto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm"
                />
              </div>
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700"
              >
                <option value="">Todos os países</option>
                {uniqueCountries.map(c => <option key={c} value={c}>{countryFlags[c] || '🌍'} {c}</option>)}
              </select>
              <select
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700"
              >
                <option value="">Todos os estágios</option>
                {uniqueStages.map(s => <option key={s} value={s}>{stageLabels[s]?.label || s}</option>)}
              </select>
            </div>
            {activeFilters > 0 && (
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                <span className="text-xs text-gray-500">{filteredCompanies.length} resultado{filteredCompanies.length !== 1 ? 's' : ''}</span>
                <button onClick={clearFilters} className="flex items-center gap-1 text-xs text-amber-700 hover:text-amber-900 font-medium">
                  <X size={12} /> Limpar filtros
                </button>
              </div>
            )}
          </div>

          {/* Company Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCompanies.map((company) => {
              const stage = stageLabels[company.estagio] || { label: company.estagio, color: 'bg-gray-100 text-gray-600' };
              const isExpanded = expandedCompany === company.id;
              return (
                <motion.div
                  key={company.id}
                  layout
                  {...fadeIn}
                  className={`bg-white rounded-xl border p-5 cursor-pointer card-hover transition-colors ${
                    isExpanded ? 'border-amber-300 shadow-lg shadow-amber-50' : 'border-gray-200 hover:border-amber-200'
                  }`}
                  onClick={() => setExpandedCompany(isExpanded ? null : company.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{countryFlags[company.pais] || '🌍'}</span>
                      <h3 className="font-bold text-gray-900">{company.nome}</h3>
                    </div>
                    {isExpanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${stage.color}`}>{stage.label}</span>
                    {company.funding && <span className="text-xs text-gray-500">{company.funding}</span>}
                  </div>

                  {company.produtos && company.produtos.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {company.produtos.slice(0, 3).map((p, i) => (
                        <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">{p}</span>
                      ))}
                      {company.produtos.length > 3 && (
                        <span className="text-xs text-gray-400">+{company.produtos.length - 3}</span>
                      )}
                    </div>
                  )}

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 space-y-2 overflow-hidden"
                      >
                        {company.website && (
                          <a href={company.website} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-amber-700 hover:text-amber-900 text-xs"
                            onClick={(e) => e.stopPropagation()}>
                            <ExternalLink size={12} /> {company.website.replace('https://', '').replace('http://', '')}
                          </a>
                        )}
                        {company.ceo && company.ceo !== 'N/A' && (
                          <div className="flex items-center gap-1.5 text-xs">
                            <Users size={12} className="text-gray-400" />
                            <span className="text-gray-500">CEO:</span> {company.ceo}
                          </div>
                        )}
                        {company.fundacao && (
                          <div className="flex items-center gap-1.5 text-xs">
                            <Activity size={12} className="text-gray-400" />
                            <span className="text-gray-500">Fundação:</span> {company.fundacao}
                          </div>
                        )}
                        {company.funcionarios && (
                          <div className="flex items-center gap-1.5 text-xs">
                            <Users size={12} className="text-gray-400" />
                            <span className="text-gray-500">Funcionários:</span> {company.funcionarios.toLocaleString()}
                          </div>
                        )}
                        {company.techStack && company.techStack.length > 0 && (
                          <div className="flex flex-wrap gap-1 pt-1">
                            {company.techStack.map((t, i) => (
                              <span key={i} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-[10px] rounded font-mono">{t}</span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Vehicles Section ── */}
      <section id="veiculos" className="py-16 px-6 bg-gray-50/50 section-pattern">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-2 mb-2">
              <Truck size={18} className="text-amber-700" />
              <span className="text-xs font-mono text-amber-700 uppercase tracking-widest">{vehicles.length} Veículos</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-8">Catálogo de Soluções</h2>
          </motion.div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setVehicleCategory('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !vehicleCategory
                  ? 'bg-amber-700 text-white shadow-md shadow-amber-200'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-amber-300'
              }`}
            >
              Todos ({vehicles.length})
            </button>
            {categories.map(cat => {
              const count = vehicles.filter(v => v.categoria === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setVehicleCategory(vehicleCategory === cat.id ? '' : cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    vehicleCategory === cat.id
                      ? 'bg-amber-700 text-white shadow-md shadow-amber-200'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-amber-300'
                  }`}
                >
                  {cat.nome} ({count})
                </button>
              );
            })}
          </div>

          {/* Vehicle Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVehicles.map((vehicle) => (
              <motion.div key={vehicle.id} {...fadeIn} className="bg-white rounded-xl border border-gray-200 p-5 card-hover">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg h-28 mb-4 flex items-center justify-center">
                  <Truck size={32} className="text-gray-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{vehicle.nome}</h3>
                <p className="text-sm text-gray-500 mb-4">{vehicle.fabricante}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Status</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      vehicle.status === 'comercial' ? 'bg-green-100 text-green-700' :
                      vehicle.status === 'pré-produção' ? 'bg-amber-100 text-amber-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>{vehicle.status}</span>
                  </div>
                  {vehicle.propulsao && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Propulsão</span>
                      <span className="text-gray-700">{vehicle.propulsao}</span>
                    </div>
                  )}
                  {vehicle.potencia && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Potência</span>
                      <span className="text-gray-700">{vehicle.potencia} HP</span>
                    </div>
                  )}
                  {vehicle.preco && (
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span className="text-gray-500">Preço</span>
                      <span className="font-mono font-bold text-amber-700">${vehicle.preco.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pain Points Section ── */}
      <section id="dores" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={18} className="text-amber-700" />
              <span className="text-xs font-mono text-amber-700 uppercase tracking-widest">Dores do Setor</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">Os Maiores Desafios Agrícolas</h2>
            <p className="text-gray-500 mb-10 max-w-xl">Problemas reais que a robótica autônoma resolve — clique para expandir.</p>
          </motion.div>

          <div className="space-y-3">
            {painPoints.map((point) => {
              const isOpen = expandedPain === point.id;
              const impactStyle = impactColors[point.impacto] || 'bg-gray-100 text-gray-700 border-gray-200';
              return (
                <motion.div
                  key={point.id}
                  {...fadeIn}
                  className={`bg-white rounded-xl border cursor-pointer transition-all ${
                    isOpen ? 'border-amber-300 shadow-lg shadow-amber-50' : 'border-gray-200 hover:border-amber-200'
                  }`}
                  onClick={() => setExpandedPain(isOpen ? null : point.id)}
                >
                  <div className="flex items-center gap-4 p-5">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                      <span className="font-mono font-bold text-amber-700">{String(point.id).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900">{point.titulo}</h3>
                    </div>
                    <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border shrink-0 ${impactStyle}`}>
                      {point.impacto}
                    </span>
                    {isOpen ? <ChevronUp size={18} className="text-gray-400 shrink-0" /> : <ChevronDown size={18} className="text-gray-400 shrink-0" />}
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <p className="text-sm text-gray-600 mb-4">{point.descricao}</p>
                          {point.solucoes && point.solucoes.length > 0 && (
                            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                              <p className="text-xs font-semibold text-green-800 mb-2 flex items-center gap-1">
                                <Zap size={12} /> Como a Robótica Resolve:
                              </p>
                              <div className="space-y-1.5">
                                {point.solucoes.map((sol, i) => (
                                  <div key={i} className="flex items-start gap-2 text-sm text-green-800">
                                    <ArrowRight size={14} className="shrink-0 mt-0.5" />
                                    <span>{sol}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Global Section ── */}
      <section id="global" className="py-16 px-6 bg-gray-50/50 section-pattern">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-2 mb-2">
              <Globe size={18} className="text-amber-700" />
              <span className="text-xs font-mono text-amber-700 uppercase tracking-widest">Cobertura Global</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-8">Mapa Regional</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(regions).map(([region, data]) => (
              <motion.div key={region} {...fadeIn} className="bg-white rounded-xl border border-gray-200 p-6 card-hover">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{region}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                      <MapPin size={14} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">{data.empresas}</div>
                      <div className="text-xs text-gray-500">empresas</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <DollarSign size={14} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">{data.funding}</div>
                      <div className="text-xs text-gray-500">funding</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 pt-2 border-t border-gray-100">{data.destaque}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trends Section ── */}
      <section id="tendencias" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} className="text-amber-700" />
              <span className="text-xs font-mono text-amber-700 uppercase tracking-widest">{trends.length} Tendências</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-8">O Futuro da Robótica Agrícola</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trends.map((trend, idx) => (
              <motion.div key={trend.id} {...fadeIn} className="bg-white rounded-xl border border-gray-200 p-6 card-hover group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                    <span className="text-white font-mono font-bold text-sm">{String(trend.id).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-amber-800 transition-colors">{trend.titulo}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{trend.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regulatory Section ── */}
      <section className="py-16 px-6 bg-gray-50/50 section-pattern">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={18} className="text-amber-700" />
              <span className="text-xs font-mono text-amber-700 uppercase tracking-widest">Regulamentação</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-8">Marco Regulatório 2025–2027</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            <motion.div {...fadeIn} className="bg-white rounded-xl border border-gray-200 p-6 card-hover">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">EM VIGOR</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">ISO 18497</h3>
              <p className="text-sm text-gray-600 mb-4">Padrão internacional para máquinas autônomas em agricultura. Define requisitos de segurança, operação e interoperabilidade.</p>
              <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800 border border-blue-100">
                Adotada por reguladores na Europa, Japão e iniciando adoção nos EUA.
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="bg-white rounded-xl border border-gray-200 p-6 card-hover">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full">20 JAN 2027</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Nova Diretiva de Máquinas da UE</h3>
              <p className="text-sm text-gray-600 mb-4">Exigirá certificação externa para máquinas autônomas consideradas de alto risco. Afeta desenvolvimento e lançamento de novos produtos.</p>
              <div className="bg-amber-50 rounded-lg p-4 text-sm text-amber-800 border border-amber-100">
                <strong>Impacto:</strong> KUHN KARL pausou lançamento. Startups europeias acelerarão testes e certificação.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-black text-gray-900 mb-1">{companies.length}</div>
              <div className="text-sm text-gray-500">Empresas mapeadas com founders, financiamento e estágio</div>
            </div>
            <div>
              <div className="text-2xl font-black text-gray-900 mb-1">{vehicles.length}</div>
              <div className="text-sm text-gray-500">Veículos autônomos em operação ou pré-comercialização</div>
            </div>
            <div>
              <div className="text-xs font-mono text-amber-700 mb-1">Metodologia</div>
              <div className="text-sm text-gray-500">Dados coletados via multi-agente · Atualizado 28/03/2026</div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
            <p className="text-sm text-gray-400">© 2026 Robot Hunter Intelligence</p>
            <span className={`flex items-center gap-1.5 text-xs font-mono ${source === 'supabase' ? 'text-emerald-600' : 'text-gray-400'}`}>
              {source === 'supabase' ? <Database size={10} /> : <HardDrive size={10} />}
              Dados {source === 'supabase' ? 'via Supabase' : 'estáticos'}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
