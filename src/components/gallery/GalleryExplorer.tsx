import { useState, useEffect } from 'react';
import type { GalleryItem } from '../../content/types';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export function GalleryExplorer({ items }: { items: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];
  
  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const nextImage = () => {
    if (selectedIndex !== null && selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };
  
  const prevImage = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  return (
    <div>
      {/* Category Pills */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{ 
              padding: '0.6rem 1.4rem', 
              borderRadius: '9999px', 
              border: activeCategory === cat ? 'none' : '1px solid var(--border-light)',
              background: activeCategory === cat ? 'linear-gradient(135deg, var(--accent-indigo), #3730a3)' : 'white',
              color: activeCategory === cat ? 'white' : 'var(--text-muted)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: activeCategory === cat ? '0 4px 14px rgba(79, 70, 229, 0.3)' : 'var(--shadow-sm)',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {filteredItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'white', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
          <ImageIcon size={48} style={{ color: '#94a3b8', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--primary-navy)' }}>No images available in this category</h3>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              onClick={() => openLightbox(index)}
              className="ui-card"
              style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(index); }}
            >
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={item.image.src} 
                  alt={item.image.alt} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  <span className="badge badge-indigo">{item.category}</span>
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 60%)', display: 'flex', alignItems: 'flex-end', padding: '1rem', opacity: 0.9 }}>
                  <div style={{ color: 'white', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{item.image.alt}</span>
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.92)', backdropFilter: 'blur(10px)', zIndex: 1000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', padding: '2rem'
          }}
          onClick={closeLightbox}
        >
          <div style={{ position: 'relative', maxWidth: '1000px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={e => e.stopPropagation()}>
            <img 
              src={filteredItems[selectedIndex].image.src} 
              alt={filteredItems[selectedIndex].image.alt} 
              style={{ maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
            />
            {filteredItems[selectedIndex].image.caption && (
              <p style={{ color: '#e2e8f0', textAlign: 'center', marginTop: '1.25rem', fontSize: '1.1rem', fontWeight: 500 }}>
                {filteredItems[selectedIndex].image.caption}
              </p>
            )}
            
            <button 
              onClick={closeLightbox}
              style={{ position: 'absolute', top: '-50px', right: '0', background: 'rgba(255,255,255,0.15)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {selectedIndex > 0 && (
              <button 
                onClick={prevImage}
                style={{ position: 'absolute', left: '-60px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.15)', color: 'white', width: '48px', height: '48px', borderRadius: '50%', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
            )}
            
            {selectedIndex < filteredItems.length - 1 && (
              <button 
                onClick={nextImage}
                style={{ position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.15)', color: 'white', width: '48px', height: '48px', borderRadius: '50%', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
