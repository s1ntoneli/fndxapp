<template>
  <div class="ad-container">
    <div class="ad-item mb-6" v-for="ad in ads" :key="ad.link">
      <a :href="ad.link" target="_blank" rel="noopener">
        <div class="ad-image-wrapper">
          <div v-if="ad.tag" class="ad-tag">{{ ad.tag }}</div>
          <img v-if="ad.image" :src="ad.image" :alt="ad.title">
        </div>
        <div class="ad-content">
          <h3 class="ad-name">{{ ad.title }}</h3>
          <p class="ad-discount">{{ ad.description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const ads = [
  {
    title: 'CleanClip',
    description: 'The cleanest Clipboard Manager on macOS, ever!',
    link: 'https://cleanclip.cc?ref=fndx',
    image: 'https://cleanclip.cc/images/twitter_card2.webp',
    tag: '30% OFF'
  },
  {
    title: 'Advertise with Us',
    description: 'Premium Ad Space Available - Reach Mac & iOS Developers',
    link: 'mailto:hello@fndx.app?subject=Advertising Inquiry',
    image: '/img/fndx-logo2.png',
    tag: 'Featured Spot'
  }
]
</script>

<style scoped>

.ad-item {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.ad-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.ad-item a {
  display: block;
  text-decoration: none;
  color: inherit;
}

.ad-image-wrapper {
  width: 100%;
  background: transparent;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/9;
}

.ad-tag {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #ff4757;
  color: white;
  padding: 0.2rem 0.4rem;
  border-radius: 999px;
  font-size: 0.625rem;
  font-weight: 500;
  z-index: 1;
  line-height: 1;
}

.ad-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.ad-content {
  padding: 1rem;
}

.ad-name {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.ad-discount {
  margin: 0.125rem 0 0;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  line-height: 1.2;
}
</style>