
"use client"

import * as React from "react"
import { useTable, type ColumnDef, type RowData } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { features, type DataTableFeatures } from "./data-table-features"

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[]
  data: TData[]
}

export function DataTable<TData extends RowData>({
  columns,
  data,
}: DataTableProps<TData>) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [categoryFilter, setCategoryFilter] = React.useState("all")

  const table = useTable({
    features,
    data,
    columns,
  })

  // Filter rows based on search input and category selection
  const filteredRows = table.getRowModel().rows.filter((row) => {
    const title = String(row.getValue("title") || "").toLowerCase()
    const category = String(row.getValue("category") || "").toLowerCase()

    const matchesSearch = title.includes(searchQuery.toLowerCase())
    const matchesCategory =
      categoryFilter === "all" || category === categoryFilter.toLowerCase()

    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-4">
      {/* Control Toolbar: Search, Category Filter, and Price Sort */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Search Bar */}
        <Input
          placeholder="Search product name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-xs"
        />

        <div className="flex items-center gap-2">
          {/* Category Dropdown Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="all">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>

          {/* Quick Price Sort Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const priceColumn = table.getColumn("price")
              priceColumn?.toggleSorting()
            }}
          >
            Sort Price <ArrowUpDown className="ml-2 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {filteredRows.length ? (
              filteredRows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <table.FlexRender cell={cell} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}