"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export interface ShopData {
  shopType: string;
  shopSize: number;
  location: string;
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

export default function DemoForm({ onSubmit }: Props) {
  const [data, setData] = useState<ShopData>({
    shopType: "",
    shopSize: 0,
    location: "",
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
    <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border border-primary/10 bg-linen/50">
      <h2 className="text-2xl font-bold text-primary mb-6">
        Tell us about your shop
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-primary mb-1">
            Shop type
          </label>
          <select
            value={data.shopType}
            onChange={(e) =>
              setData((d) => ({ ...d, shopType: e.target.value }))
            }
            className="w-full px-4 py-2.5 rounded-lg border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="">Select type</option>
            {shopTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-1">
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
              className="w-full px-4 py-2.5 rounded-lg border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Location
            </label>
            <input
              type="text"
              value={data.location}
              onChange={(e) =>
                setData((d) => ({ ...d, location: e.target.value }))
              }
              placeholder="e.g. Ludhiana, Punjab"
              className="w-full px-4 py-2.5 rounded-lg border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-1">
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
            className="w-full px-4 py-2.5 rounded-lg border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-1">
            Shop photos (up to 3)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhoto}
            className="w-full text-sm text-primary/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-secondary/20 file:text-primary hover:file:bg-secondary/30"
          />
          {data.photos.length > 0 && (
            <div className="mt-3 flex gap-3">
              {data.photos.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt={`Shop photo ${i + 1}`}
                  className="w-20 h-20 object-cover rounded-lg border border-primary/10"
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-1">
            Short description (optional)
          </label>
          <textarea
            value={data.description}
            onChange={(e) =>
              setData((d) => ({ ...d, description: e.target.value }))
            }
            placeholder="Anything else about your shop..."
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
          />
        </div>

        <button
          onClick={() => valid && onSubmit(data)}
          disabled={!valid}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-medium hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Assess my shop
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
