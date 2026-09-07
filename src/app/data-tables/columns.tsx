
"use client"

import { createColumnHelper } from "@tanstack/react-table"
import Image from "next/image"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import type { DataTableFeatures } from "./data-table-features"

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating?: {
    rate: number
    count: number
  }
}

const columnHelper = createColumnHelper<DataTableFeatures, Product>()

export const columns = columnHelper.columns([
  // 1. ID List (In front of Image)
  columnHelper.accessor("id", {
    header: "ID",
    cell: ({ getValue }) => (
      <span className="font-mono text-xs text-muted-foreground">
        #{getValue() as number}
      </span>
    ),
  }),

  // 2. Image
  columnHelper.accessor("image", {
    header: "Image",
    cell: ({ getValue, row }) => (
      <div className="relative h-12 w-12 overflow-hidden rounded-md border bg-slate-50">
        <Image
          src={getValue() as string}
          alt={(row.getValue("title") as string) || "Product image"}
          fill
          className="object-contain p-1"
        />
      </div>
    ),
  }),

  // 3. Product Name
  columnHelper.accessor("title", {
    header: "Product Name",
    cell: ({ getValue }) => (
      <span className="font-medium">{getValue() as string}</span>
    ),
  }),

  // 4. Price (Placed first after name)
  columnHelper.accessor("price", {
    header: "Price",
    cell: ({ getValue }) => {
      const price = Number(getValue()) || 0
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)

      return <div className="font-semibold text-red-600">{formatted}</div>
    },
  }),

  // 5. Category
  columnHelper.accessor("category", {
    header: "Category",
    cell: ({ getValue }) => (
      <span className="capitalize text-muted-foreground">
        {getValue() as string}
      </span>
    ),
  }),

  // 6. Rating
  columnHelper.accessor("rating", {
    header: "Rating",
    cell: ({ row }) => {
      const rating = row.original.rating
      if (!rating) return <span className="text-muted-foreground">-</span>

      return (
        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium text-amber-500">★ {rating.rate}</span>
          <span className="text-xs text-muted-foreground">({rating.count})</span>
        </div>
      )
    },
  }),

 // 7. Action Column
  columnHelper.display({
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const product = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(product.id))}
            >
              Copy Product ID
            </DropdownMenuItem>
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }),
])