"use client";

import * as React from "react";
import { Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useQueryState } from "nuqs";
import { useRouter } from "next/navigation";
export default function ProductFilterSidebar({ allCategories, allColors }) {
  const router = useRouter();

  const [selectedType, setSelectedType] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const [categoryquery, setCategoryQuery] = useQueryState("category", {
    defaultValue: "",
  });
  const [colorquery, setColorQuery] = useQueryState("color", {
    defaultValue: "",
  });

  const toggleCategory = (category: string) => {
    setCategoryQuery(category);
  };

  const toggleColor = (color: string) => {
    setColorQuery(color);
  };

  const FilterContent = React.forwardRef<HTMLDivElement>((props, ref) => (
    <div ref={ref} className="space-y-10" {...props}>
      <div>
        <h3 className="text-base font-semibold mb-4">Filter by category</h3>
        <div className="flex gap-3 mb-7">
          <Button
            variant={selectedType === "All Products" ? "default" : "outline"}
            size="sm"
            onClick={() => router.push("/products")}
          >
            All Products
          </Button>
          <Button
            variant={selectedType === "Out of Stock" ? "default" : "outline"}
            size="sm"
            onClick={() => router.push("/products")}
          >
            Out of Stock
          </Button>
        </div>
        <div className="space-y-5">
          {allCategories.map((category) => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={category}
                checked={categoryquery === category}
                onCheckedChange={() => toggleCategory(category)}
              />
              <label
                htmlFor={category}
                className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold mb-4">Choose Color</h3>
        <div className="flex flex-wrap gap-2">
          {allColors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2  ${
                colorquery === color ? "ring-2 ring-black dark:ring-white" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => toggleColor(color)}
              aria-label={`Select ${color}`}
            />
          ))}
        </div>
      </div>
    </div>
  ));

  FilterContent.displayName = "FilterContent";

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden [@media(min-width:950px)]:block w-64 p-4">
        <FilterContent />
      </div>

      {/* Drawer for smaller screens */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-4 h-14 w-14 rounded-full [@media(min-width:950px)]:hidden"
          >
            <Filter className="h-6 w-6" />
            <span className="sr-only">Open filters</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <FilterContent />
        </SheetContent>
      </Sheet>
    </>
  );
}
