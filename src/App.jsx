import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, TrendingUp, Globe, AlertCircle, CheckCircle, Clock, Zap, Database, HardDrive } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSupabaseData } from './useData.js';
import './App.css';

function App() {
  const { companies, vehicles, marketData, painPoints, trends, categories, regions, loading, source } = useSupabaseData();
  const [activeSection, setActiveSection] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [stageFilter, setStageFilter] = useState('');
  const [vehicleCategory, setVehicleCategory] = useState('');
  const [expandedCompany, setExpandedCompany] = useState(null);

  // Extract unique countries and stages
  const uniqueCountries = [...new Set(companies.map(c => c.pais))].sort();
  const uniqueStages = [...new Set(companies.map(c => c.estagio))].sort();

  // Filter companies
  const filteredCompanies = companies.filter(c => {
    const matchesSearch = c.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (c.produtos && c.produtos.join(' ').toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCountry = !countryFilter || c.pais === countryFilter;
    const matchesStage = !stageFilter || c.estagio === stageFilter;
    return matchesSearch && matchesCountry && matchesStage;
  });

  // Filter vehicles
  const filteredVehicles = !vehicleCategory ? vehicles : vehicles.filter(v => v.categoria === vehicleCategory);

  // Market growth data for chart
  const marketChartData = [
    { ano: 2024, marketsandmarkets: 17.7, grandview: 14.7, mordor: 25 },
    { ano: 2025, marketsandmarkets: 22.4, grandview: 18.1, mordor: 31.3 },
    { ano: 2026, marketsandmarkets: 28.2, grandview: 22.3, mordor: 39.1 },
    { ano: 2027, marketsandmarkets: 35.5, grandview: 27.4, mordor: 48.9 },
    { ano: 2028, marketsandmarkets: 44.7, grandview: 33.7, mordor: 61.1 },
    { ano: 2029, marketsandmarkets: 50.6, grandview: 40.9, mordor: 68.5 },
    { ano: 2030, marketsandmarkets: 56.3, grandview: 48.1, mordor: 75 }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-stone-950/80 border-b border-stone-800">
        <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-amber-600">ROBOT</span> <span className="text-amber-500">HUNTER</span>
          </div>
          <div className="flex gap-8 items-center">
            <button onClick={() => window.location.hash = '#mercado'} className="text-sm text-stone-400 hover:text-amber-500 transition">Mercado</button>
            <button onClick={() => window.location.hash = '#empresas'} className="text-sm text-stone-400 hover:text-amber-500 transition">Empresas</button>
            <button onClick={() => window.location.hash = '#veiculos'} className="text-sm text-stone-400 hover:text-amber-500 transition">Veículos</button>
            <button onClick={() => window.location.hash = '#dores'} className="text-sm text-stone-400 hover:text-amber-500 transition">Dores</button>
            <button onClick={() => window.location.hash = '#global'} className="text-sm text-stone-400 hover:text-amber-500 transition">Global</button>
            <button onClick={() => window.location.hash = '#tendencias'} className="text-sm text-stone-400 hover:text-amber-500 transition">Tendências</button>
            <span className={`flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded ${source === 'supabase' ? 'bg-emerald-900/50 text-emerald-400' : 'bg-stone-800 text-stone-500'}`}>
              {source === 'supabase' ? <Database size={10} /> : <HardDrive size={10} />}
              {source === 'supabase' ? 'LIVE' : 'STATIC'}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_20%_50%,_#C4652A_0%,transparent_50%)]"></div>
        <div className="max-w-8xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-8">
              <p className="text-xs tracking-widest text-amber-600 font-mono uppercase mb-4">Intelligence Report · March 2026</p>
              <h1 className="text-8xl md:text-9xl font-black text-stone-100 tracking-tighter leading-none mb-2">
                ROBOT
              </h1>
              <h1 className="text-8xl md:text-9xl font-black text-amber-600 tracking-tighter leading-none mb-12">
                HUNTER
              </h1>
              <h2 className="text-2xl md:text-3xl text-stone-300 font-light tracking-wide mb-16">
                Panorama Global da Robótica Agrícola Autônoma
              </h2>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <motion.div {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-6">
                <div className="text-4xl font-black text-amber-500 font-mono mb-2">55</div>
                <div className="text-xs text-stone-400 tracking-widest">EMPRESAS</div>
              </motion.div>
              <motion.div {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-6">
                <div className="text-4xl font-black text-amber-500 font-mono mb-2">21</div>
                <div className="text-xs text-stone-400 tracking-widest">PAÍSES</div>
              </motion.div>
              <motion.div {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-6">
                <div className="text-4xl font-black text-amber-500 font-mono mb-2">$1.5B+</div>
                <div className="text-xs text-stone-400 tracking-widest">FUNDING</div>
              </motion.div>
              <motion.div {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-6">
                <div className="text-4xl font-black text-amber-500 font-mono mb-2">33</div>
                <div className="text-xs text-stone-400 tracking-widest">VEÍCULOS</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Section */}
      <section id="mercado" className="py-20 px-6 border-t border-stone-800">
        <div className="max-w-8xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-xs tracking-widest text-amber-600 font-mono uppercase mb-4">Tamanho de Mercado</p>
            <div className="mb-12">
              <div className="text-7xl md:text-8xl font-black text-amber-500 font-mono mb-2">$56.3B</div>
              <div className="text-lg text-stone-400">Projeção 2030 (MarketsandMarkets 26.0% CAGR)</div>
            </div>
          </motion.div>

          {/* Analyst Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-mono text-sm text-amber-600">MarketsandMarkets</h3>
                <span className="bg-amber-600/20 text-amber-400 text-xs px-3 py-1 rounded">26.0% CAGR</span>
              </div>
              <div className="text-5xl font-black text-stone-100 mb-2">$56.3B</div>
              <div className="text-sm text-stone-400">De $17.7B em 2024</div>
            </motion.div>
            <motion.div {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-mono text-sm text-amber-600">Grand View Research</h3>
                <span className="bg-amber-600/20 text-amber-400 text-xs px-3 py-1 rounded">23.0% CAGR</span>
              </div>
              <div className="text-5xl font-black text-stone-100 mb-2">$48.1B</div>
              <div className="text-sm text-stone-400">De $14.7B em 2024</div>
            </motion.div>
            <motion.div {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-mono text-sm text-amber-600">Mordor Intelligence</h3>
                <span className="bg-amber-600/20 text-amber-400 text-xs px-3 py-1 rounded">24.6% CAGR</span>
              </div>
              <div className="text-5xl font-black text-stone-100 mb-2">$75B</div>
              <div className="text-sm text-stone-400">De $25B em 2024</div>
            </motion.div>
          </div>

          {/* Growth Chart */}
          <motion.div {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-8 mb-12">
            <h3 className="font-mono text-sm text-amber-600 mb-6">Projeção de Crescimento 2024-2030</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={marketChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                <XAxis dataKey="ano" stroke="#787878" />
                <YAxis stroke="#787878" />
                <Tooltip contentStyle={{ backgroundColor: '#1c1c1c', border: '1px solid #404040', borderRadius: '4px', color: '#f0f0f0' }} />
                <Legend />
                <Bar dataKey="marketsandmarkets" fill="#C4652A" name="MarketsandMarkets" />
                <Bar dataKey="grandview" fill="#D4A84B" name="Grand View" />
                <Bar dataKey="mordor" fill="#4ADE80" name="Mordor" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Segments */}
          <div>
            <h3 className="font-mono text-sm text-amber-600 mb-6">Segmentos por Participação (2024)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(marketData.segments).map(([ key, segment ], idx) => (
                <motion.div key={key} {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-6">
                  <div className="font-mono text-sm text-amber-600 mb-2">{key.replace(/_/g, ' ')}</div>
                  <div className="text-sm text-stone-300">{segment.trend}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="empresas" className="py-20 px-6 border-t border-stone-800">
        <div className="max-w-8xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-xs tracking-widest text-amber-600 font-mono uppercase mb-4">55 Empresas</p>
            <h2 className="text-5xl font-black mb-12">Mapa de Inovação</h2>
          </motion.div>

          {/* Filters */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block text-xs text-stone-400 font-mono mb-2">Pesquisar</label>
              <input
                type="text"
                placeholder="Nome, produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <label className="block text-xs text-stone-400 font-mono mb-2">País</label>
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-amber-600"
              >
                <option value="">Todos</option>
                {uniqueCountries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-stone-400 font-mono mb-2">Estágio</label>
              <select
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-amber-600"
              >
                <option value="">Todos</option>
                {uniqueStages.map(stage => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Company Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company, idx) => (
              <motion.div
                key={company.id}
                {...fadeInUp}
                className="bg-stone-900/50 border border-stone-700 p-6 hover:border-amber-600 transition cursor-pointer"
                onClick={() => setExpandedCompany(expandedCompany === company.id ? null : company.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg">{company.nome}</h3>
                  <span className="text-2xl">{company.pais === 'Estados Unidos' ? '🇺🇸' : company.pais === 'Brasil' ? '🇧🇷' : company.pais === 'Dinamarca' ? '🇩🇰' : company.pais === 'Suíça' ? '🇨🇭' : company.pais === 'França' ? '🇫🇷' : company.pais === 'Holanda' ? '🇳🇱' : company.pais === 'Alemanha' ? '🇩🇪' : company.pais === 'Turquia' ? '🇹🇷' : company.pais === 'Israel' ? '🇮🇱' : company.pais === 'Japão' ? '🇯🇵' : company.pais === 'Austrália' ? '🇦🇺' : company.pais === 'China' ? '🇨🇳' : company.pais === 'Índia' ? '🇮🇳' : company.pais === 'Nova Zelândia' ? '🇳🇿' : company.pais === 'Espanha' ? '🇪🇸' : company.pais === 'Canadá' ? '🇨🇦' : company.pais === 'Noruega/UK' ? '🇬🇧' : '🌍'}</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-amber-600/20 text-amber-400 text-xs rounded font-mono">{company.estagio}</span>
                  </div>
                  <div className="text-sm text-stone-400">{company.funding}</div>
                  {company.produtos && company.produtos.length > 0 && (
                    <div className="text-xs text-stone-400">
                      <p className="font-mono text-amber-600 mb-1">Produtos:</p>
                      <p>{company.produtos.slice(0, 2).join(', ')}</p>
                    </div>
                  )}
                  {expandedCompany === company.id && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 pt-4 border-t border-stone-700 text-xs text-stone-400 space-y-2">
                      {company.website && <p><span className="text-amber-600">Website:</span> {company.website}</p>}
                      {company.ceo && <p><span className="text-amber-600">CEO:</span> {company.ceo}</p>}
                      {company.fundacao && <p><span className="text-amber-600">Fundação:</span> {company.fundacao}</p>}
                      {company.funcionarios && <p><span className="text-amber-600">Funcionários:</span> {company.funcionarios.toLocaleString()}</p>}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="veiculos" className="py-20 px-6 border-t border-stone-800">
        <div className="max-w-8xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-xs tracking-widest text-amber-600 font-mono uppercase mb-4">33 Veículos</p>
            <h2 className="text-5xl font-black mb-12">Catálogo de Soluções</h2>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 overflow-x-auto pb-4">
            <button
              onClick={() => setVehicleCategory('')}
              className={`px-4 py-2 text-xs font-mono rounded transition ${!vehicleCategory ? 'bg-amber-600 text-stone-950' : 'bg-stone-900 border border-stone-700 text-stone-400 hover:border-amber-600'}`}
            >
              Todos ({vehicles.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setVehicleCategory(cat.id)}
                className={`px-4 py-2 text-xs font-mono rounded transition whitespace-nowrap ${vehicleCategory === cat.id ? 'bg-amber-600 text-stone-950' : 'bg-stone-900 border border-stone-700 text-stone-400 hover:border-amber-600'}`}
              >
                {cat.nome} ({vehicles.filter(v => v.categoria === cat.id).length})
              </button>
            ))}
          </div>

          {/* Vehicle Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle, idx) => (
              <motion.div
                key={vehicle.id}
                {...fadeInUp}
                className="bg-stone-900/50 border border-stone-700 p-6 hover:border-amber-600 transition"
              >
                <div className="bg-stone-800 h-32 rounded mb-4 flex items-center justify-center text-stone-600 text-sm">
                  {vehicle.image || '[Imagem]'}
                </div>
                <h3 className="font-bold text-lg mb-2">{vehicle.nome}</h3>
                <div className="text-sm text-stone-400 mb-4">{vehicle.fabricante}</div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Status:</span>
                    <span className={`px-2 py-1 rounded font-mono ${vehicle.status === 'comercial' ? 'bg-green-600/20 text-green-400' : vehicle.status === 'pré-produção' ? 'bg-amber-600/20 text-amber-400' : 'bg-stone-700/20 text-stone-400'}`}>
                      {vehicle.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Propulsão:</span>
                    <span>{vehicle.propulsao}</span>
                  </div>
                  {vehicle.potencia && (
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Potência:</span>
                      <span>{vehicle.potencia} HP</span>
                    </div>
                  )}
                  {vehicle.preco && (
                    <div className="flex items-center justify-between pt-2 border-t border-stone-700">
                      <span className="text-stone-500">Preço:</span>
                      <span className="font-mono text-amber-500">${vehicle.preco.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="dores" className="py-20 px-6 border-t border-stone-800">
        <div className="max-w-8xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-xs tracking-widest text-amber-600 font-mono uppercase mb-4">5 Dores Resolvidas</p>
            <h2 className="text-5xl font-black mb-12">Os Maiores Desafios Agrícolas</h2>
          </motion.div>

          <div className="space-y-8">
            {painPoints.map((point, idx) => (
              <motion.div key={point.id} {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-8">
                <div className="flex gap-6">
                  <div className="text-6xl font-black text-amber-600 font-mono">{String(point.id).padStart(2, '0')}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{point.titulo}</h3>
                    <p className="text-stone-300 mb-4">{point.descricao}</p>
                    <div className="bg-stone-950 rounded p-4 mb-4">
                      <p className="text-xs text-amber-600 font-mono mb-2">Como a Robótica Resolve:</p>
                      <ul className="text-sm text-stone-300 space-y-1">
                        {point.solucoes.map((sol, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-amber-600">•</span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="text-xs px-3 py-1 bg-amber-600/10 text-amber-600 rounded font-mono">{point.impacto}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Section */}
      <section id="global" className="py-20 px-6 border-t border-stone-800">
        <div className="max-w-8xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-xs tracking-widest text-amber-600 font-mono uppercase mb-4">Cobertura Global</p>
            <h2 className="text-5xl font-black mb-12">Mapa Regional</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(regions).map(([region, data], idx) => (
              <motion.div key={region} {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-8">
                <h3 className="text-xl font-bold mb-4">{region}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-amber-600" />
                    <span><strong className="text-amber-600">{data.empresas}</strong> empresas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    <span><strong className="text-amber-600">{data.funding}</strong> funding</span>
                  </div>
                  <div className="text-stone-400">{data.destaque}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section id="tendencias" className="py-20 px-6 border-t border-stone-800">
        <div className="max-w-8xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-xs tracking-widest text-amber-600 font-mono uppercase mb-4">5 Tendências</p>
            <h2 className="text-5xl font-black mb-12">O Futuro da Robótica Agrícola</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trends.map((trend, idx) => (
              <motion.div key={trend.id} {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-8">
                <div className="text-5xl font-black text-amber-600 font-mono mb-4">{String(trend.id).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold mb-3">{trend.titulo}</h3>
                <p className="text-stone-300 text-sm">{trend.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Section */}
      <section className="py-20 px-6 border-t border-stone-800">
        <div className="max-w-8xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-xs tracking-widest text-amber-600 font-mono uppercase mb-4">Regulamentação</p>
            <h2 className="text-5xl font-black mb-12">Marco Regulatório 2025-2027</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-8">
              <h3 className="text-2xl font-bold mb-4">ISO 18497</h3>
              <p className="text-stone-300 mb-6">Padrão internacional para máquinas autônomas em agricultura. Define requisitos de segurança, operação e interoperabilidade.</p>
              <div className="bg-stone-950 rounded p-4 text-sm text-stone-400">
                <p className="font-mono text-amber-600 mb-2">Status: EM VIGOR</p>
                <p>Adotada por reguladores na Europa, Japão e iniciando adoção nos EUA.</p>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="bg-stone-900/50 border border-stone-700 p-8">
              <h3 className="text-4xl font-black text-red-600 font-mono mb-4">20 JAN 2027</h3>
              <p className="text-lg font-bold mb-4">Nova Diretiva de Máquinas da UE</p>
              <p className="text-stone-300 mb-6">Exigirá certificação externa para máquinas autônomas consideradas de alto risco. Afeta desenvolvimento e lançamento de novos produtos.</p>
              <div className="bg-stone-950 rounded p-4 text-sm text-stone-400">
                <p className="font-mono text-amber-600 mb-2">Impacto:</p>
                <p>KUHN KARL pausou lançamento. Startups europeias acelerarão testes e certificação.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-800 text-xs text-stone-400">
        <div className="max-w-8xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-mono text-amber-600 mb-2">55 Empresas</p>
              <p>Cartografia completa de founders, financiamento e estágio de desenvolvimento</p>
            </div>
            <div>
              <p className="font-mono text-amber-600 mb-2">33 Veículos</p>
              <p>Catálogo de máquinas robóticas em operação ou pré-comercialização</p>
            </div>
            <div>
              <p className="font-mono text-amber-600 mb-2">Metodologia</p>
              <p>Dados coletados via multi-agente · Atualizado 27/03/2026</p>
            </div>
          </div>
          <div className="border-t border-stone-700 pt-6 text-center">
            <p>© 2026 Robot Hunter Intelligence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
