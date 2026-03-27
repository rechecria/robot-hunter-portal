import { useState, useEffect } from 'react';
import { supabase } from './supabase.js';
import * as staticData from './data.js';

// Transform snake_case Supabase rows → camelCase JS objects
function transformCompany(row) {
  return {
    id: row.id,
    nome: row.nome,
    pais: row.pais,
    status: row.status,
    estagio: row.estagio,
    fundacao: row.fundacao,
    funding: row.funding,
    produtos: row.produtos || [],
    autonomyLevel: row.autonomy_level,
    website: row.website,
    businessModel: row.business_model,
    techStack: row.tech_stack || [],
    ceo: row.ceo,
    funcionarios: row.funcionarios,
    categoria: row.categoria
  };
}

function transformVehicle(row) {
  return {
    id: row.id,
    nome: row.nome,
    fabricante: row.empresa,
    categoria: row.categoria,
    status: row.status || 'comercial',
    propulsao: row.propulsao,
    potencia: row.potencia,
    autonomyLevel: row.autonomy_level,
    sensores: row.tech_stack || [],
    preco: row.preco,
    image: row.imagem_url
  };
}

function transformCategory(row) {
  return {
    id: row.id,
    nome: row.nome,
    descricao: row.descricao,
    count: row.count || 0,
    tendencia: row.tendencia,
    share: row.share
  };
}

function transformPainPoint(row) {
  return {
    id: row.id,
    titulo: row.titulo,
    descricao: row.descricao,
    solucoes: row.solucoes || [],
    impacto: row.severidade || row.impacto
  };
}

function transformTrend(row) {
  return {
    id: row.id,
    titulo: row.titulo,
    descricao: row.descricao,
    impacto: row.impacto,
    horizonte: row.horizonte
  };
}

export function useSupabaseData() {
  const [data, setData] = useState({
    companies: staticData.companies,
    vehicles: staticData.vehicles,
    marketData: staticData.marketData,
    painPoints: staticData.painPoints,
    trends: staticData.trends,
    categories: staticData.categories,
    regions: staticData.regions
  });
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState('static');

  useEffect(() => {
    async function fetchData() {
      try {
        const [companiesRes, vehiclesRes, categoriesRes, painPointsRes, trendsRes, marketRes] =
          await Promise.all([
            supabase.from('companies').select('*'),
            supabase.from('vehicles').select('*'),
            supabase.from('categories').select('*'),
            supabase.from('pain_points').select('*'),
            supabase.from('trends').select('*'),
            supabase.from('market_data').select('*')
          ]);

        // Check for errors
        const hasErrors = [companiesRes, vehiclesRes, categoriesRes, painPointsRes, trendsRes, marketRes]
          .some(r => r.error);

        if (hasErrors) {
          console.warn('Supabase fetch errors, using static data:', {
            companies: companiesRes.error,
            vehicles: vehiclesRes.error,
            categories: categoriesRes.error,
            painPoints: painPointsRes.error,
            trends: trendsRes.error,
            market: marketRes.error
          });
          setSource('static');
          setLoading(false);
          return;
        }

        // Transform data
        const supabaseData = {
          companies: (companiesRes.data || []).map(transformCompany),
          vehicles: (vehiclesRes.data || []).map(transformVehicle),
          categories: (categoriesRes.data || []).map(transformCategory),
          painPoints: (painPointsRes.data || []).map(transformPainPoint),
          trends: (trendsRes.data || []).map(transformTrend),
          // Keep static marketData and regions (complex nested structures)
          marketData: staticData.marketData,
          regions: staticData.regions
        };

        // Only use Supabase data if we got meaningful results
        if (supabaseData.companies.length > 0) {
          setData(supabaseData);
          setSource('supabase');
          console.log(`✅ Loaded from Supabase: ${supabaseData.companies.length} companies, ${supabaseData.vehicles.length} vehicles`);
        } else {
          console.warn('Supabase returned empty data, using static fallback');
          setSource('static');
        }
      } catch (err) {
        console.warn('Supabase connection failed, using static data:', err.message);
        setSource('static');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { ...data, loading, source };
}
