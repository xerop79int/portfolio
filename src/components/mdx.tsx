// components/mdx.tsx
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import Link from 'next/link'
import { Heading, Text } from '@/once-ui/components'
import './mdx.css'

function Code({ children, ...props }) {
  // This handles inline code
  return <code {...props} className="font-mono text-sm bg-neutral-50 dark:bg-neutral-800 px-1 py-0.5 rounded">{children}</code>
}

function Pre({ children, ...props }) {
  // This handles code blocks (which are wrapped in pre tags)
  return (
    <pre {...props} className="overflow-auto p-4 rounded-lg my-4 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
      {children}
    </pre>
  )
}

function CodeBlock({ className, children }) {
  // Extract language from className (format: language-xxx)
  const language = className ? className.replace('language-', '') : ''
  const highlightedCode = highlight(children) // Remove options as sugar-high auto-detects language
  
  return (
    <div className="relative">
      {language && (
        <div className="absolute top-2 right-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
          {language}
        </div>
      )}
      <pre className="overflow-auto p-4 rounded-lg my-4 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </div>
  )
}

const components = {
  h1: (props) => <Heading variant="display-strong-m" marginY="l" {...props} />,
  h2: (props) => <Heading variant="display-strong-xs" marginY="m" {...props} />,
  h3: (props) => <Heading variant="title-moderate-l" marginY="s" {...props} />,
  h4: (props) => <Heading variant="title-moderate-m" marginY="s" {...props} />,
  p: (props) => <Text variant="body-default-m" marginY="s" {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('/')) {
      return <Link href={href} {...props} />
    }
    if (href.startsWith('#')) {
      return <a href={href} {...props} />
    }
    return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />
  },
  ul: (props) => <ul className="list-disc pl-6 my-4" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 my-4" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  code: ({ className, children, ...props }) => {
    if (className) {
      return <CodeBlock className={className}>{children}</CodeBlock>
    }
    return <Code {...props}>{children}</Code>
  },
  pre: Pre,
  img: (props) => (
    <img
      {...props}
      className="rounded-lg my-8 border border-neutral-200 dark:border-neutral-700"
      alt={props.alt || 'Image'}
    />
  ),
}

export function CustomMDX({ source }: { source: string }) {
  return (
    <div className="mdx-content">
      <MDXRemote 
        source={source} 
        components={components} 
        options={{
          parseFrontmatter: false,
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
            format: 'mdx'
          }
        }}
      />
    </div>
  )
}