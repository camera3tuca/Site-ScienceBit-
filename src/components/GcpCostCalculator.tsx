import React, { useState } from 'react';
import { GCP_FREE_TIER_DETAILS } from '../data/gcpGuides';
import { 
  Calculator, 
  CheckCircle2, 
  Zap, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  TrendingDown,
  DollarSign
} from 'lucide-react';

export const GcpCostCalculator: React.FC = () => {
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(25000);
  const [pageViewsPerVisitor, setPageViewsPerVisitor] = useState<number>(3);
  const [useCloudRun, setUseCloudRun] = useState<boolean>(true);

  const totalRequests = monthlyVisitors * pageViewsPerVisitor;
  const cloudRunFreeLimit = 2000000; // 2 million free requests
  const isWithinCloudRunFree = totalRequests <= cloudRunFreeLimit;
  
  // Approximate bandwidth: ~300KB per page load
  const totalBandwidthGB = ((totalRequests * 300) / (1024 * 1024));
  const estimatedCost = isWithinCloudRunFree ? 0 : ((totalRequests - cloudRunFreeLimit) / 1000000) * 0.40;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-2">
        <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
          <Calculator className="w-5 h-5" />
          <span>Simulador de Custos Google Cloud</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">
          Descubra Quanto Custa Hospedar Seu Site
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Para 95% dos sites de pequenas e médias empresas, o custo mensal no Google Cloud é <strong>R$ 0,00</strong> devido à generosa cota gratuita (Free Tier permanente).
        </p>
      </div>

      {/* Simulator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sliders and Configuration */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-base font-bold text-slate-900">
            Estimar Acessos e Tráfego
          </h3>

          {/* Visitors Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700">Visitantes Únicos por Mês</label>
              <span className="font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-lg">
                {monthlyVisitors.toLocaleString('pt-BR')} pessoas
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={500000}
              step={1000}
              value={monthlyVisitors}
              onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>1.000 (Início)</span>
              <span>100.000</span>
              <span>500.000 (Alto Tráfego)</span>
            </div>
          </div>

          {/* Page views */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-700">Páginas Vistas por Visitante</label>
              <span className="font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-lg">
                {pageViewsPerVisitor} páginas
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={pageViewsPerVisitor}
              onChange={(e) => setPageViewsPerVisitor(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          {/* Metrics summary */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
              <span className="text-slate-500 block mb-1">Total de Requisições:</span>
              <strong className="text-slate-900 text-sm font-bold">
                {totalRequests.toLocaleString('pt-BR')} / mês
              </strong>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
              <span className="text-slate-500 block mb-1">Transferência Estimada:</span>
              <strong className="text-slate-900 text-sm font-bold">
                {totalBandwidthGB.toFixed(1)} GB / mês
              </strong>
            </div>
          </div>
        </div>

        {/* Cost Result Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Free Tier Aplicado</span>
            </div>

            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Custo Mensal Estimado</span>
              <div className="text-4xl sm:text-5xl font-black text-white mt-1 flex items-baseline gap-1">
                <span>R$ {estimatedCost.toFixed(2)}</span>
                <span className="text-sm font-normal text-slate-400">/mês</span>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-300">
                <span>Cota Grátis Cloud Run:</span>
                <strong className="text-emerald-400">2.000.000 req/mês</strong>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Uso do seu site:</span>
                <strong className="text-white">{((totalRequests / cloudRunFreeLimit) * 100).toFixed(1)}% da cota</strong>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Certificado SSL:</span>
                <strong className="text-emerald-400">Grátis (R$ 0)</strong>
              </div>
            </div>

            {isWithinCloudRunFree && (
              <p className="text-xs text-emerald-300 bg-emerald-950/50 border border-emerald-800/50 p-3 rounded-xl">
                🎉 Seu tráfego estimado está totalmente dentro do limite 100% gratuito do Google Cloud!
              </p>
            )}
          </div>

          <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-400">
            * Seus primeiros 90 dias ainda contam com <strong>$300 USD (aprox. R$ 1.500)</strong> em créditos promocionais fornecidos pelo Google.
          </div>
        </div>

      </div>

      {/* Free Tier Details Breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>O Que Está Incluso no Nível Gratuito Permanente (Always Free)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GCP_FREE_TIER_DETAILS.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h4 className="font-bold text-slate-900 text-xs">{item.service}</h4>
              <div className="text-sm font-extrabold text-blue-600">{item.freeQuota}</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{item.additionalFree}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
