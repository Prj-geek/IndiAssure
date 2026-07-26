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
  const coverage = Math.round(base + stockFactor);
  const premium = Math.round((coverage * 0.02) / 12);
  return { coverage, premium };
}
