"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export interface ShopData {
  shopType: string;
  shopSize: number;
  state: string;
  city: string;
  stockValue: number;
  photos: string[];
  description: string;
}

interface Props {
  onSubmit: (data: ShopData) => void;
}

const shopTypes = [
  "Garment",
  "Jewelry",
  "Grocery",
  "Electronics",
  "General Store",
  "Other",
];

const states = [
  "Maharashtra",
  "Gujarat",
  "Punjab",
  "Tamil Nadu",
  "Rajasthan",
  "Uttar Pradesh",
  "Karnataka",
  "Delhi",
  "West Bengal",
  "Other",
];

export default function DemoForm({ onSubmit }: Props) {
  const [data, setData] = useState<ShopData>({
    shopType: "",
    shopSize: 0,
    state: "",
    city: "",
    stockValue: 0,
    photos: [],
    description: "",
  });

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const previews: string[] = [];
    Array.from(files)
      .slice(0, 3)
      .forEach((f) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
          previews.push(ev.target?.result as string);
          if (previews.length === Math.min(files.length, 3)) {
            setData((d) => ({ ...d, photos: previews }));
          }
        };
        reader.readAsDataURL(f);
      });
  };

  const valid = data.shopType && data.shopSize > 0 && data.stockValue > 0;

  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border border-ink/10 bg-cream-dim/40">
      <h2 className="text-2xl font-display text-ink mb-6">
        Tell us about your shop
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-ink mb-1">
            Shop type
          </label>
          <select
            value={data.shopType}
            onChange={(e) =>
              setData((d) => ({ ...d, shopType: e.target.value }))
            }
            className="w-full px-4 py-2.5 rounded-lg border border-ink/15 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-mint"
          >
            <option value="">Select type</option>
            {shopTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">
            Shop size (sq ft)
          </label>
          <input
            type="number"
            min={10}
            value={data.shopSize || ""}
            onChange={(e) =>
              setData((d) => ({
                ...d,
                shopSize: Number(e.target.value),
              }))
            }
            placeholder="e.g. 400"
            className="w-full px-4 py-2.5 rounded-lg border border-ink/15 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-mint"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-ink mb-1">
              State
            </label>
            <select
              value={data.state}
              onChange={(e) =>
                setData((d) => ({ ...d, state: e.target.value }))
              }
              className="w-full px-4 py-2.5 rounded-lg border border-ink/15 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-mint"
            >
              <option value="">Select state</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-ink mb-1">
              City / town
            </label>
            <input
              type="text"
              value={data.city}
              onChange={(e) =>
                setData((d) => ({ ...d, city: e.target.value }))
              }
              placeholder="e.g. Ludhiana"
              className="w-full px-4 py-2.5 rounded-lg border border-ink/15 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-mint"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">
            Estimated stock value (₹)
          </label>
          <input
            type="number"
            min={1000}
            step={5000}
            value={data.stockValue || ""}
            onChange={(e) =>
              setData((d) => ({
                ...d,
                stockValue: Number(e.target.value),
              }))
            }
            placeholder="e.g. 200000"
            className="w-full px-4 py-2.5 rounded-lg border border-ink/15 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-mint"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">
            Shop photos (up to 3)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhoto}
            className="w-full text-sm text-ink/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-mint/20 file:text-ink hover:file:bg-mint/30"
          />
          {data.photos.length > 0 && (
            <div className="mt-3 flex gap-3">
              {data.photos.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt={`Shop photo ${i + 1}`}
                  className="w-20 h-20 object-cover rounded-lg border border-ink/10"
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-ink mb-1">
            Short description (optional)
          </label>
          <textarea
            value={data.description}
            onChange={(e) =>
              setData((d) => ({ ...d, description: e.target.value }))
            }
            placeholder="Anything else about your shop..."
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg border border-ink/15 bg-cream text-ink text-sm focus:outline-none focus:ring-2 focus:ring-mint resize-none"
          />
        </div>

        <button
          onClick={() => valid && onSubmit(data)}
          disabled={!valid}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ink text-cream font-medium hover:bg-ink-soft transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          See my estimate
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
