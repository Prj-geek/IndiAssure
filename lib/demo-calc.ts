import type { ShopData } from "@/components/DemoForm";

const ratesByType: Record<string, number> = {
  Garment: 12,
  Jewelry: 18,
  Grocery: 10,
  Electronics: 15,
  "General Store": 10,
  Other: 12,
};

export function calculate(data: ShopData) {
  const rate = ratesByType[data.shopType] ?? 12;
  const base = data.shopSize * rate;
  const stockFactor = data.stockValue * 0.6;

  // Ground floor: higher flood exposure → +8%
  const floorMultiplier = data.floor === "ground" ? 1.08 : 1;

  // Dense market: fire-spread risk → +12%
  const marketMultiplier = data.denseMarket === "yes" ? 1.12 : 1;

  // Years in operation: older wiring/stock turnover risk → +3% per year, capped at +15%
  const yearsFactor = Math.min(data.yearsInOperation * 0.03, 0.15);

  const raw = (base + stockFactor) * floorMultiplier * marketMultiplier * (1 + yearsFactor);
  const coverage = Math.round(raw);
  const premium = Math.round((coverage * 0.02) / 12);
  return { coverage, premium };
}
