"use client";

// components/SimpleMarkdownRenderer.jsx
import React from 'react';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
// Import a highlight.js theme
import 'highlight.js/styles/github-dark.css';

const SimpleMarkdownRenderer = ({ content }) => {
  // Initialize markdown-it with basic settings
  const md = React.useMemo(() => {
    return new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return `<div class="code-block">
                      <pre class="hljs"><code>${hljs.highlight(str, { language: lang }).value}</code></pre>
                    </div>`;
          } catch (e) {
            console.error(e);
          }
        }
        return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
      }
    });
  }, []);

  // Render the markdown
  const renderedContent = React.useMemo(() => {
    return { __html: md.render(content || '') };
  }, [content, md]);

  return (
    <div className="markdown-content">
      <div dangerouslySetInnerHTML={renderedContent} />
      
      <style jsx global>{`
        .markdown-content {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.6;
          color: #24292e;
        }
        
        .markdown-content h1 {
          font-size: 2em;
          margin-top: 1rem;
          font-weight: 600;
          border-bottom: 1px solid #eaecef;
          padding-bottom: 0.3em;
        }
        
        .markdown-content h2 {
          font-size: 1.5em;
          margin-top: 1em;
          font-weight: 600;
          border-bottom: 1px solid #eaecef;
          padding-bottom: 0.3em;
        }
        
        .markdown-content h3 {
          font-size: 1.25em;
          margin-top: 1em;
          margin-bottom: 0.5em;
          font-weight: 600;
        }
        
        .markdown-content h4, 
        .markdown-content h5, 
        .markdown-content h6 {
          margin-top: 1em;
          margin-bottom: 0.5em;
          font-weight: 600;
        }
        
        .markdown-content p {
          margin-top: 0;
          margin-bottom: 16px;
        }
        
        .markdown-content a {
          color: #0366d6;
          text-decoration: none;
        }
        
        .markdown-content a:hover {
          text-decoration: underline;
        }
        
        .markdown-content ul,
        .markdown-content ol {
          margin-top: 0;
          margin-bottom: 16px;
          padding-left: 2em;
        }
        
        .markdown-content li {
          margin-top: 0.25em;
        }
        
        .markdown-content blockquote {
          margin: 0 0 16px 0;
          padding: 0 1em;
          color: #6a737d;
          border-left: 0.25em solid #dfe2e5;
        }
        
        .markdown-content img {
          max-width: 100%;
          border-style: none;
          box-sizing: content-box;
        }
        
        .markdown-content code {
          font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
          font-size: 85%;
          padding: 0.2em 0.4em;
          margin: 0;
          background-color: rgba(27, 31, 35, 0.05);
          border-radius: 3px;
        }
        
        .code-block {

          overflow: hidden;
          border-radius: 6px;
        }
        
        .code-language {
          display: block;
          background: #1f2937;
          color: #e5e7eb;
          font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
          font-size: 0.75rem;
          padding: 0.5rem 1rem;
        }
        
        .markdown-content pre {
          margin-top: 0;
          margin-bottom: 0;
          word-wrap: normal;
          padding-left: 16px;
          padding-bottom: 16px;
          overflow: auto;
          font-size: 85%;
          line-height: 1.45;
          border-radius: 0 0 6px 6px;
        }
        
        .markdown-content pre code {
          background-color: transparent;
          padding: 0;
          margin: 0;
          border: 0;
          font-size: 16px;

        }
        
        .markdown-content table {
          border-spacing: 0;
          border-collapse: collapse;
          margin-top: 0;
          margin-bottom: 16px;
          width: 100%;
          overflow: auto;
        }
        
        .markdown-content table tr {
          background-color: #fff;
          border-top: 1px solid #c6cbd1;
        }
        
        .markdown-content table tr:nth-child(2n) {
          background-color: #f6f8fa;
        }
        
        .markdown-content table th,
        .markdown-content table td {
          padding: 6px 13px;
          border: 1px solid #dfe2e5;
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .markdown-content {
            color: #c9d1d9;
          }
          
          .markdown-content h1,
          .markdown-content h2 {
            border-color: #21262d;
          }
          
          .markdown-content a {
            color: #58a6ff;
          }
          
          .markdown-content blockquote {
            color: #8b949e;
            border-left-color: #3b434b;
          }
          
          .markdown-content code {
            background-color: rgba(240, 246, 252, 0.15);
          }
          
          .markdown-content table tr {
            background-color: #0d1117;
            border-top-color: #30363d;
          }
          
          .markdown-content table tr:nth-child(2n) {
            background-color: #161b22;
          }
          
          .markdown-content table th,
          .markdown-content table td {
            border-color: #30363d;
          }
        }
      `}</style>
    </div>
  );
};

export default SimpleMarkdownRenderer;