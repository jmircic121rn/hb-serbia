import React from 'react';
import ReactMarkdown from 'react-markdown';

const ResultView = ({ report }) => {
    return (
        <div className="result-container" style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px 20px',
            fontFamily: '"Inter", sans-serif',
            color: '#1a1a1a',
            lineHeight: '1.8'
        }}>
            <header style={{ marginBottom: '50px', borderBottom: '2px solid #000', paddingBottom: '20px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-1px' }}>
                    STRATEGIC ANALYSIS
                </h1>
                <p style={{ color: '#666', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px' }}>
                    Hansen Beck Expedition Report
                </p>
            </header>

            <div className="markdown-content" style={{ fontSize: '16px' }}>
                <ReactMarkdown
                    components={{
                        // Dodajemo {children} unutar svakog taga
                        h1: ({ node, children, ...props }) => <h2 style={{ fontSize: '24px', marginTop: '40px', fontWeight: '700' }} {...props}>{children}</h2>,
                        h2: ({ node, children, ...props }) => <h3 style={{ fontSize: '20px', marginTop: '30px', fontWeight: '700' }} {...props}>{children}</h3>,
                        p: ({ node, children, ...props }) => <p style={{ marginBottom: '20px' }} {...props}>{children}</p>,
                        li: ({ node, children, ...props }) => <li style={{ marginBottom: '10px' }} {...props}>{children}</li>,
                        strong: ({ node, children, ...props }) => <span style={{ fontWeight: '700', color: '#000' }} {...props}>{children}</span>,
                    }}
                >
                    {report}
                </ReactMarkdown>
            </div>

            <footer style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid #eee', textAlign: 'center' }}>
                <button
                    onClick={() => window.open("https://hansenbeck.com/serbia/", "_blank")}
                    style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '16px 40px',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: '700',
                        fontSize: '14px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#333';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#000';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    Contact Our Team
                </button>
            </footer>
        </div>
    );
};

export default ResultView;