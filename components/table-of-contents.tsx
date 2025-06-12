import Link from "next/link"

interface TableOfContentsItem {
  id: string
  label: string
}

interface TableOfContentsProps {
  items: TableOfContentsItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="mb-8 md:mt-8 w-full border-b border-muted pb-4">
      <ul className="flex flex-wrap gap-4 justify-center">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className="px-3 py-1 rounded hover:bg-primary/10 hover:text-primary font-medium transition-colors text-muted-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
} 