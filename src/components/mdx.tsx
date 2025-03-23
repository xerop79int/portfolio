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
            return `<div class="code-language">Language: ${lang}</div><div class='code'>${hljs.highlight(str, { language: lang }).value}<div>`;
          } catch (e) {
            console.error(e);
          }
        }
        return `<div class="code-language">Language: ${lang}</div><div class='code'>${md.utils.escapeHtml(str)}<div>`;
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
          line-height: 1.7;
          color: #2d3748;
          font-size: 1.05rem;
        }
        
        .markdown-content h1 {
          font-size: 2.25em;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.5em;
          color: #1a202c;
        }
        
        .markdown-content h2 {
          font-size: 1.75em;
          margin-top: 1.75em;
          margin-bottom: 0.75em;
          font-weight: 700;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.3em;
          color: #1a202c;
        }
        
        .markdown-content h3 {
          font-size: 1.35em;
          margin-top: 1.5em;
          margin-bottom: 0.75em;
          font-weight: 600;
          color: #1a202c;
        }
        
        .markdown-content h4, 
        .markdown-content h5, 
        .markdown-content h6 {
          margin-top: 1.25em;
          margin-bottom: 0.75em;
          font-weight: 600;
          color: #1a202c;
        }
        
        .markdown-content p {
          margin-top: 0;
          margin-bottom: 1.25rem;
          line-height: 1.8;
        }
        
        .markdown-content a {
          color: #3182ce;
          text-decoration: none;
          border-bottom: 1px solid #bee3f8;
          padding-bottom: 1px;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        
        .markdown-content a:hover {
          color: #2b6cb0;
          border-color: #3182ce;
          text-decoration: none;
        }
        
        .markdown-content ul,
        .markdown-content ol {
          margin-top: 0;
          margin-bottom: 1.25rem;
          padding-left: 1.5em;
        }
        
        .markdown-content li {
          margin-top: 0.375em;
          margin-bottom: 0.375em;
        }
        
        .markdown-content blockquote {
          margin: 1.5rem 0;
          padding: 0.8em 1.2em;
          border-left: 4px solid #4299e1;
          background-color: #ebf8ff;
          color: #2c5282;
          border-radius: 0 4px 4px 0;
        }
        
        .markdown-content img {
          max-width: 100%;
          border-style: none;
          box-sizing: content-box;
          border-radius: 5px;
          margin: 1.5rem 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .markdown-content code {
          font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
          font-size: 20px;
          padding: 0.2em 0.4em;
          margin: 0;
          background-color: #edf2f7;
          border-radius: 3px;
          color: #d53f8c;
        }
        
        .code-block {
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        
        .code-language {
          display: block;
          background: #2d3748;
          color: #e2e8f0;
          font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 0.5em 1em;
        }

        .code{
          padding: 2em 2em;
        }
        
        .markdown-content pre {
          margin-top: 0;
          margin-bottom: 0;
          word-wrap: normal;
          overflow: auto;
          font-size: 0.9em;
          line-height: 1.5;
          border-radius: 0 0 6px 6px;
          background-color: #2a4365;
        }
        
        .markdown-content pre code {
          background-color: transparent;
          padding: 0;
          margin: 0;
          border: 0;
          color: inherit;
        }
        
        .markdown-content table {
          border-spacing: 0;
          border-collapse: collapse;
          margin: 1.5rem 0;
          width: 100%;
          overflow: auto;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .markdown-content table tr {
          background-color: #fff;
          border-top: 1px solid #e2e8f0;
        }
        
        .markdown-content table tr:nth-child(2n) {
          background-color: #f7fafc;
        }
        
        .markdown-content table th {
          font-weight: 600;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          background-color: #f7fafc;
        }
        
        .markdown-content table td {
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
        }
        
        /* Horizontal rule */
        .markdown-content hr {
          height: 1px;
          margin: 2rem 0;
          border: none;
          background-color: #e2e8f0;
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .markdown-content {
            color: #e2e8f0;
          }
          
          .markdown-content h1,
          .markdown-content h2,
          .markdown-content h3,
          .markdown-content h4,
          .markdown-content h5,
          .markdown-content h6 {
            color: #f7fafc;
            border-color: #2d3748;
          }
          
          .markdown-content a {
            color: #63b3ed;
            border-color: #2b6cb0;
          }
          
          .markdown-content a:hover {
            color: #90cdf4;
            border-color: #63b3ed;
          }
          
          .markdown-content blockquote {
            background-color: #2a4365;
            color: #bee3f8;
            border-left-color: #3182ce;
          }
          
          .markdown-content code {
            background-color: #2d3748;
            color: #ed64a6;
          }
          
          .markdown-content table tr {
            background-color: #1a202c;
            border-top-color: #2d3748;
          }
          
          .markdown-content table tr:nth-child(2n) {
            background-color: #171923;
          }
          
          .markdown-content table th {
            background-color: #2d3748;
          }
          
          .markdown-content table th,
          .markdown-content table td {
            border-color: #2d3748;
          }
          
          .markdown-content hr {
            background-color: #2d3748;
          }
        }
      `}</style>
    </div>
  );
};

export default SimpleMarkdownRenderer;